# Fix flagged items (prompt v2)

A reviewer found problems in your earlier translation into **{LANG_NAME} ({LANG})**.

- Source: `{WS}/source/{BATCH}.json`, translation: `{WS}/out/{LANG}/{BATCH}.json`, glossary `{WS}/glossary/{LANG}.json`, style `{WS}/style/{LANG}.md`.
- Same rules as the translation task: faithful to the source, keep Japanese / ruby / symbols / notation exactly, glossary terms mandatory, natural {LANG_NAME}, examples translated from the Japanese sentence.

Reviewer issues (JSON, per item):

```json
{ISSUES}
```

For each issue decide: if the reviewer is right, fix that span; if the reviewer is wrong (e.g. asks for content not in the source), keep the text and say why. Edit ONLY the flagged fields of the flagged items in the output file (edit the JSON in place, e.g. with a short Python script; keep all other items byte-for-byte). Then run `python3 {TOOLS}/check.py --ws {WS} {LANG} {BATCH}` and fix any errors.

Return, per issue: `{id, field, action: "fixed" | "rejected", note}`.
