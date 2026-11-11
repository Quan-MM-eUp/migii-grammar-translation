export const meta = {
  name: 'dot-dich',
  description: 'Mot dot dich kho ngu phap: dich (Opus) -> cham (Sonnet; them Opus dich nguoc cho hi/ne/my) -> sua toi da 2 vong',
  phases: [
    { title: 'Dich', model: 'opus' },
    { title: 'Cham', model: 'sonnet' },
    { title: 'Sua', model: 'opus' },
  ],
}
// args: {ws, tools, lang, lang_name, batches: ["b001", ...], date, low: bool}
const A = typeof args === 'string' ? JSON.parse(args) : args
const MAX_FIX = 2
const BT = 'Because this is a low-resource language, for EVERY meaning / explain / notes field and each example, first back-translate the translation into Vietnamese (in your own reasoning) and compare it with the source meaning; any divergence in meaning is an accuracy issue.'
const vals = (batch, extra) => {
  const v = { '{WS}': A.ws, '{TOOLS}': A.tools, '{LANG}': A.lang, '{LANG_NAME}': A.lang_name, '{BATCH}': batch,
    '{DATE}': A.date, '{MODEL}': 'your exact model id (e.g. claude-opus-...)', ...(extra || {}) }
  return Object.entries(v).map(([k, x]) => `${k} = ${x}`).join('\n')
}
const task = (file, batch, extra, tail) =>
  `Read the instruction file ${A.ws}/prompts/${file} and carry it out exactly. Replace its placeholders with these values:\n${vals(batch, extra)}\n${tail || ''}`

const ISSUE = { type: 'object', properties: {
  field: { type: 'string' }, category: { type: 'string', enum: ['accuracy', 'terminology', 'fluency', 'style', 'format'] },
  severity: { type: 'string', enum: ['minor', 'major', 'critical'] }, note: { type: 'string' }, fix: { type: 'string' } },
  required: ['field', 'category', 'severity', 'note'] }
const JUDGE = { type: 'object', properties: {
  items: { type: 'array', items: { type: 'object', properties: {
    id: { type: 'integer' }, score: { type: 'number' }, qa: { type: 'string', enum: ['ok', 'fix'] },
    issues: { type: 'array', items: ISSUE } }, required: ['id', 'score', 'qa', 'issues'] } },
  summary: { type: 'string' } }, required: ['items', 'summary'] }
const FIX = { type: 'object', properties: { actions: { type: 'array', items: { type: 'object', properties: {
  id: { type: 'integer' }, field: { type: 'string' }, action: { type: 'string', enum: ['fixed', 'rejected'] }, note: { type: 'string' } },
  required: ['id', 'field', 'action'] } } }, required: ['actions'] }

// Cham: Sonnet; ngon ngu it du lieu them Opus (phien moi) dich nguoc. Gop: fix neu mot ben bao fix.
async function judge(batch, ids, label) {
  const only = ids ? `\nRE-REVIEW: score ONLY the items with id in [${ids.join(', ')}] (they were just revised). Return only those items.` : ''
  const calls = [agent(task('judge.md', batch, { '{BACKTRANSLATION}': A.low ? BT : '(none)' }, only),
    { model: 'sonnet', schema: JUDGE, label: `${label}:${A.lang}/${batch}`, phase: 'Cham' })]
  if (A.low) calls.push(agent(task('judge.md', batch, { '{BACKTRANSLATION}': BT }, only),
    { model: 'opus', schema: JUDGE, label: `${label}-bt:${A.lang}/${batch}`, phase: 'Cham' }))
  const rs = (await Promise.all(calls)).filter(Boolean)
  const m = {}
  for (const r of rs) for (const i of r.items || []) {
    const o = m[i.id]
    m[i.id] = !o ? { ...i } : { id: i.id, score: Math.min(o.score, i.score), qa: o.qa === 'fix' || i.qa === 'fix' ? 'fix' : 'ok', issues: [...o.issues, ...i.issues] }
  }
  return { items: Object.values(m), summary: rs.map(r => r.summary).join(' | '), n: rs.length }
}

async function one(batch) {
  const rep = await agent(task('translate.md', batch), { model: 'opus', label: `dich:${A.lang}/${batch}`, phase: 'Dich' })
  if (rep === null) return { batch, items: [], note: 'dich that bai' }
  let j = await judge(batch, null, 'cham')
  if (!j.n) return { batch, items: [], note: 'cham that bai' }
  const items = {}
  for (const i of j.items) items[i.id] = i
  let rounds = 0
  while (rounds < MAX_FIX) {
    const bad = Object.values(items).filter(i => i.qa === 'fix')
    if (!bad.length) break
    rounds++
    const issues = JSON.stringify(bad.map(i => ({ id: i.id, issues: i.issues.filter(x => x.severity !== 'minor') })), null, 1)
    await agent(task('fix.md', batch, { '{ISSUES}': '(see below)' }, '\nReviewer issues for {ISSUES}:\n```json\n' + issues + '\n```'),
      { model: 'opus', schema: FIX, label: `sua${rounds}:${A.lang}/${batch}`, phase: 'Sua' })
    const rj = await judge(batch, bad.map(i => i.id), `cham-lai${rounds}`)
    for (const i of rj.items) if (items[i.id]) items[i.id] = i
  }
  return { batch, judge: 'claude-sonnet' + (A.low ? ' + claude-opus (dich nguoc)' : ''), rounds, items: Object.values(items),
    summary: j.summary, note: String(rep).slice(0, 1500) }
}

const res = await parallel(A.batches.map(b => () => one(b)))
return res.map((r, k) => r || { batch: A.batches[k], items: [], note: 'loi workflow' })
