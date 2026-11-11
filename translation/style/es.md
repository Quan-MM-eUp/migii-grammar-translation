# Style guide: Spanish (es)

## Register and tone
- Neutral international Spanish (no regional slang, no voseo, no "vosotros"). Write like a Spanish-language Japanese textbook (Spanish editions of Minna no Nihongo, Genki-style explanations): clear, precise, neutral-formal.
- Explanations are impersonal: "Se usa para…", "Expresa…", "Indica…", "Se forma con…", "Se emplea cuando…". Prefer impersonal "se" constructions.
- When the learner must be addressed (advice, warnings), use "tú" to match the app UI ("Intenta de nuevo", "¿Quieres…?"). Keep it rare in grammar entries.
- Example translations follow the register of the Japanese: です/ます → neutral polite Spanish (usted toward strangers/superiors when context requires); casual Japanese → natural informal Spanish (tú).

## Typography
- Opening marks are mandatory in Spanish text: ¿…? and ¡…!.
- Quote Spanish meanings with comillas «…» or "…" consistently within an entry; keep 「」 around Japanese text exactly.
- In short structural glosses that copy a source pattern like "(～かもしれない: …)", keep the source structure exactly.
- Numerals: Arabic digits; thousands with a point or thin space as in the source (50.000), decimals with a comma. Keep source numbering (①②, 1., 2.).
- Capitalize only the first word of a name/meaning field; grammar terms are lowercase.

## Never translate or change
- Japanese text (kana, kanji) anywhere, including inside vi_parts fields.
- Notation: V, N, A, Aい, Aな, Na, S, Vる/Vて/Vた/Vない/Vます, ～, ×, ○, ✓, ✕, →, ⇔.
- `<ruby>…<rt>…</rt></ruby>` markup, line breaks, bullets, numbering, "A:" / "B:" labels.
- Keys inside notes text ("meaning_vi:", "explain:", "examples:") stay as is.
- Grammar terms: use the glossary "tr"; adapt only number/gender (adjetivos い, forma negativa / sentido negativo). Japanese register names in romaji with macrons (kenjōgo, ren'yōkei), not italicized.
- Form names keep the kana: forma て, forma ない, forma ます (never "forma te").

## Example sentences
- Translate from the Japanese sentence (the Vietnamese only shows intent). Natural Spanish, not word-by-word; reorder freely; keep the tense/aspect and nuance of the Japanese.
- Names stay in romaji (Tanaka, Yamada). さん → usually just the name, or Sr./Sra. when gender is clear; 先輩 → "mi superior Yamada" / "Yamada (mi senpai)".
- Currency follows the Japanese (800 yenes; ドン → dongs).

## × / ○ mistake lines
- Keep × / ○ and the Japanese sentences exactly; translate only the commentary. "đúng/sai" → "correcto" / "incorrecto".

## Length
- Spanish runs about 1.1–1.3× the Vietnamese; compress where possible. Name/meaning fields are noun phrases or short infinitive phrases, not full sentences.

## Before / after examples
1. name (vi_parts): `まだ（tiếp diễn tới khi hoàn tất）` → `まだ（continuación hasta completarse）`
2. connection: `V tha động từ て + ある` → `V transitivo て + ある`
3. example (from Japanese): `急に国に帰って、母をびっくりさせた。` → `Volví de repente a mi país y sorprendí a mi madre.`
4. explain: `Diễn tả tình trạng có mục đích, kết quả của một hành động có chủ ý.` → `Expresa un estado intencionado, resultado de una acción deliberada.`
5. mistake: `Sai trợ từ cho “người bị khiến”: dùng を thay cho に. Đúng: 先生は学生に発表させた.` → `Partícula incorrecta para la persona a quien se hace actuar: を en lugar de に. Correcto: 先生は学生に発表させた.`
