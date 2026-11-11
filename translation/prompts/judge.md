# Judge one translated batch (prompt v2)

You are an independent reviewer of a translation made by another model. Language: **{LANG_NAME} ({LANG})**. You do NOT edit the translation; you score it.

## Files

- Source: `{WS}/source/{BATCH}.json` (fields with `src: "vi"` are Vietnamese, `"ja"` Japanese, `"en"` English; `examples` must be translated from the Japanese `jp` sentence)
- Translation: `{WS}/out/{LANG}/{BATCH}.json` (`items[].fields` mirror the source fields; examples/mistakes are lists, comparison is a table)
- Glossary terms used in this batch: run `python3 {TOOLS}/brief.py --ws {WS} {LANG} {BATCH}` (mandatory term, `also:` = accepted alternatives); style guide: `{WS}/style/{LANG}.md`
- Code checks already passed (structure, kept Japanese, script). Focus on meaning and language.

## How to score (MQM-style)

Compare every field of every item with its source. Record each problem as an issue:

- `category`: `accuracy` (wrong / missing / added meaning, mistranslated example, wrong grammar explanation), `terminology` (glossary term not used or a wrong grammar term), `fluency` (ungrammatical, unnatural, wrong script/variant), `style` (register, inconsistency with the style guide), `format` (lost line breaks, symbols, Japanese changed)
- `severity`: `minor` (reader still understands correctly), `major` (meaning distorted, misleading for a learner, clearly wrong term), `critical` (opposite / dangerous meaning, untranslated or garbage field)
- `field` (e.g. `explain`, `examples[2]`, `comparison[r1.2]`), a short `note` in English, and a concrete `fix` (the corrected text for that span).

Item score = 100 − 1 × minor − 5 × major − 25 × critical (minimum 0). `qa` = `"ok"` when the item has no major or critical issue, otherwise `"fix"`.

A glossary term is correct when the translation uses its `tr` **or any of its `accept` forms** (inflected as the grammar requires) — do not flag those. A Japanese-only correction line (`× … → ○ …`) copied unchanged is correct.

Faithfulness is the standard: do not penalise content that is faithfully carried over from the source even if the source itself is clumsy or debatable; do not ask for additions.

{BACKTRANSLATION}

Be strict but fair: report real problems, not taste. Report every major/critical issue you find.

Return the structured result: for every item `{id, score, qa, issues[]}` plus `summary` (2–3 sentences on overall quality and recurring problems).
