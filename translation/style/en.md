# Style guide: English (en)

Audience: English-speaking learners of Japanese, JLPT N5–N1. The text is a reference grammar inside the Migii app, read on a phone.

## Register and tone
- Clear, neutral textbook English (Genki / Tobira / Dictionary of Basic Japanese Grammar style). Friendly but not chatty; no slang, no emoji.
- Explanations use the present tense and short sentences: "Expresses…", "Used when…", "Cannot be used with…".
- `meaning` and `name` fields are labels, not sentences: no final period unless the source has one ("Expresses continuation", "Asking prices").
- Address the learner as "you" only where the source addresses the learner ("chúng ta" → "we/you" as natural). Never "the learner".
- American spelling (-ize, color, judgment). Use the fixed glossary terms; do not swap in synonyms for variety.

## Script, punctuation, numerals
- Latin script; straight ASCII punctuation in English text. Use the curly/Japanese quotes exactly as the source has them around Japanese text: 「…」 stays 「…」.
- Keep full-width punctuation inside Japanese text (、。！？). Do not convert it.
- Numerals: digits for counts, money, ages ("800 yen", "two or three days" in example sentences is fine when the Japanese uses kanji numerals). Vietnamese thousands separator "50.000" becomes "50,000".
- Currency: translate the Vietnamese currency word in explanations ("đồng" → "dong"), but the Japanese text (ドン) stays.

## Never translate or change
- Any Japanese text (kana, kanji), including inside explanations, tables, and mistake lines.
- Notation: V, N, A, Aい, Aな, Na, S, Vる, Vて, Vた, Vない, Vます, V他, V自, ～, ~, ×, ○, ✓, ✕, →, ⇔, ◎, ①②③.
- `<ruby>…<rt>…</rt></ruby>` markup: copy as is.
- Line breaks (\n), numbering ("1.", "2."), bullet marks, and "A:/B:" speaker labels.
- Do not romanize kana that the source writes in kana. Form names follow the glossary (te-form); a kana form in a pattern (Vて + ある) stays kana.

## Grammar notation inside text
- Vietnamese words inside a formula are translated, the notation stays: "V tha động từ て + ある" → "V (transitive) て + ある"; "N + は + いくらですか" stays as is.
- Pattern names keep the Japanese, translate only the Vietnamese part: "まだ（tiếp diễn tới khi hoàn tất）" → "まだ（continuing until completion）". Keep the bracket type the source uses.

## Example sentences
- Translate from the Japanese sentence, not from the Vietnamese one. The Vietnamese is a hint for the intended sense only.
- Natural English, not word-for-word; keep tense, politeness contrast and nuance (だろう → "probably", ～てしまう → "ended up / unfortunately").
- Keep names as names (田中さん → "Tanaka" / "Mr. Tanaka"). Keep A:/B: dialogue layout.

## Mistake lines (× / ○)
- Keep ×/○ attached to the Japanese exactly where they are; translate only the commentary.
- Do not "fix" a mistake line, even if it looks inconsistent; translate what it says.
- Pattern: "Wrong particle for the person made to act: using を instead of に. Correct: 先生は学生に発表させた."

## Length
- Aim for the same length as the source (±20%). Do not add explanations, examples, or knowledge that is not in the source; do not drop anything.

## Before / after (from style_samples.json)
1. meaning (1618): "Diễn đạt sự liên tục" → "Expresses continuation"
2. example (7): "A: このくつはいくらですか。\nB: はっぴゃくえんです。" → "A: How much are these shoes?\nB: They're 800 yen."
3. connection (219): "V tha động từ て + ある" → "V (transitive) て + ある"
4. mistake (233): "Sai hình thái 来る: “来させる(こさせる)” chứ không phải “来らせる”." → "Wrong form of 来る: it is “来させる(こさせる)”, not “来らせる”."
5. comparison cell (219): "Kết quả chủ ý còn duy trì" → "Intentional result that remains"
