# Translate one batch (prompt v2)

You translate one batch of a Japanese-grammar database (Migii JLPT app) from Vietnamese / Japanese into **{LANG_NAME} ({LANG})**. Readers are {LANG_NAME}-speaking learners of Japanese (JLPT N5–N1).

## Files

- Source batch: `{WS}/source/{BATCH}.json` → `{"batch", "items": [{id, level, src_hash, context, fields}]}`
- Glossary (MANDATORY terms): run `python3 {TOOLS}/brief.py --ws {WS} {LANG} {BATCH}` — it prints only the terms that occur in this batch (`Vietnamese variants (Japanese) → term`, `also:` = accepted alternatives). Do not read the full glossary file.
- Style guide: `{WS}/style/{LANG}.md` — read it fully before translating
- Output: `{WS}/out/{LANG}/{BATCH}.json`
- Checker: `python3 {TOOLS}/check.py --ws {WS} {LANG} {BATCH}` (add `--json` for machine-readable output)

## What to translate

For every item, translate every key in `fields` and nothing else:

| field | source | how |
|---|---|---|
| `name`, `connection` (`mode: "vi_parts"`) | Vietnamese mixed with Japanese | translate ONLY the Vietnamese words; Japanese, symbols, brackets stay exactly |
| `meaning`, `explain`, `notes` | `src: "vi"`, `"ja"` or `"en"` | translate from that language (a few entries were written in English) |
| `examples` | `[{jp, vi}]` | translate **from the Japanese sentence** `jp` (the `vi` line is only a hint). Output a list of strings, same length and order |
| `mistakes` | `[{src, text}]` | list of strings, same length and order. A line that is only a Japanese correction (`× 学生ですかもしれない → ○ 学生かもしれない`) is copied unchanged — do not add commentary |
| `comparison` | `{headers, rows}` | translate cell by cell, same table size; a cell with no Vietnamese (only Japanese/symbols) is copied unchanged; empty cells stay empty |

`context` (pattern, Japanese 接続, example sentences) is there so you understand the grammar point — do not output it.

## Rules

1. **Faithful.** Translate what the source says. Do not add, drop, correct or "improve" the content, even if you think the source is wrong or repetitive. Keep line breaks, bullet markers, numbering, `×` / `○` / `✓` / `→` / `～` and the order of sentences.
2. **Keep Japanese exactly**: every Japanese word/phrase inside the text (kana, kanji, 「」 quotes, `～ている`, `Vて`), and every `<ruby>…<rt>…</rt></ruby>` tag, character for character. Never romanize Japanese, never translate a Japanese example phrase that the source left in Japanese.
3. **Notation stays**: V, N, A, Aい, Aな, Na, S, Vる/Vて/Vた/Vない/Vます, N1/N2, A/B labels.
4. **Glossary terms are mandatory.** When the source uses a glossary term (any `vi` variant), use its `tr` (or an `accept` form; inflect naturally in languages with cases).
5. **Natural {LANG_NAME}**, textbook register as the style guide says. Example-sentence translations must be natural, idiomatic sentences that a teacher would write — not word-by-word.
6. **Examples keep the Japanese tense/aspect, person and number**; do not invent gender (use neutral wording) or add nuances that are not in the sentence.
7. No Vietnamese may remain in the output (except inside a Japanese-free proper name, which practically never happens).

## Output file

```json
{"batch": "{BATCH}", "lang": "{LANG}", "model": "{MODEL}", "prompt_ver": "2", "date": "{DATE}",
 "items": [{"id": 120, "src_hash": "<copy from source>",
            "fields": {"meaning": "...", "examples": ["...", "..."], "comparison": {"headers": [...], "rows": [[...]]}}}]}
```

- One output item per source item, same order, `src_hash` copied, `fields` with exactly the source keys.
- Helper scripts / scratch files go in a temporary folder OUTSIDE the translation folder (e.g. `/tmp/<lang>_{BATCH}/`), never inside `{WS}`.
- Write real UTF-8 characters (no `\u` escapes). Build the file with a Python script if that is easier (e.g. a dict of translations → `json.dump(..., ensure_ascii=False)`), but the translations themselves must be written by you, item by item.

## Procedure

1. Read the style guide, the glossary and the whole batch.
2. Translate item by item; write the output file in a few large steps (e.g. one write per 5–8 items, then merge). Work efficiently: read each input once, do not re-read files you already have, keep tool calls few.
3. Run the checker. Fix every **error** (`x`), then re-run until there are no errors. Never leave a field untranslated. If you are certain an error is a checker false positive, leave it and list it under "checker false positives" in your report. Look at warnings (`!`) and fix the real problems (a warning about a glossary term means: use the glossary term unless it is clearly wrong in that sentence).
4. Return a short report: items you found hard or ambiguous (id + why), checker result.
