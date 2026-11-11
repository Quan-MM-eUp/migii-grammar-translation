# Style guide: Russian (ru)

## Register and tone
- Write like a Russian Japanese-grammar textbook (Стругова/Шефтелевич «Японский язык для начинающих», Нечаева, Russian editions of Minna no Nihongo): clear, precise, neutral-formal, scholarly but not heavy.
- Explanations are impersonal: «Употребляется для…», «Выражает…», «Обозначает…», «Присоединяется к…», «Используется, когда…». Prefer impersonal and reflexive-passive constructions.
- Addressing the learner: avoid it in grammar entries. Where unavoidable (warnings, advice), use the textbook «вы» form in lowercase («обратите внимание»). Note: the chatbot UI uses «ты»; grammar entries are reference text.
- Example translations follow the register of the Japanese: です/ます → neutral polite Russian («вы» between strangers/superiors); casual Japanese → natural colloquial Russian («ты»).

## Script and typography
- Cyrillic only; write «ё» where the glossary has it (завершённость, стяжённая); a checker accepts «е» too.
- Quote Russian meanings with «ёлочки»; keep 「」 around Japanese text exactly.
- Use the em dash (—) with spaces in prose («Правильный ответ — 2»); keep source hyphens and arrows untouched.
- In short structural glosses that copy a source pattern like "(～かもしれない: …)", keep the source structure exactly.
- Numerals: Arabic digits; thousands with a space (50 000), decimals with a comma. Keep source numbering (①②, 1., 2.).
- Capitalize only the first word of a name/meaning field.

## Never translate or change
- Japanese text (kana, kanji) anywhere, including inside vi_parts fields.
- Notation: V, N, A, Aい, Aな, Na, S, Vる/Vて/Vた/Vない/Vます, ～, ×, ○, ✓, ✕, →, ⇔.
- `<ruby>…<rt>…</rt></ruby>` markup, line breaks, bullets, numbering, "A:" / "B:" labels.
- Keys inside notes text ("meaning_vi:", "explain:", "examples:") stay as is.
- Grammar terms: use the glossary "tr" and decline it as Russian grammar requires (て-форма → «в て-форме», «после て-формы»). Kana in form names is never transcribed: «て-форма», not «тэ-форма».
- Japanese words that must appear in Cyrillic (register names, names) use the Polivanov system: кэйго, сонкэйго, кэндзёго, Танака, Ямада, сэмпай. Never Latin romaji in Russian text.

## Example sentences
- Translate from the Japanese sentence (the Vietnamese only shows intent). Natural Russian, not word-by-word; free word order; render Japanese aspect with the right Russian aspect (perfective/imperfective).
- Names in Polivanov Cyrillic. さん → usually just the name (or «господин/госпожа» in formal contexts); 先輩 → «старший товарищ Ямада» / «сэмпай Ямада».
- Currency follows the Japanese (800 иен; ドン → донгов).

## × / ○ mistake lines
- Keep × / ○ and the Japanese sentences exactly; translate only the commentary. "đúng/sai" → «правильно» / «неправильно».

## Length
- Russian runs about 1.1–1.3× the Vietnamese; compress where possible (drop «является», use dashes). Name/meaning fields are noun phrases or short infinitive phrases, not full sentences.

## Before / after examples
1. name (vi_parts): `まだ（tiếp diễn tới khi hoàn tất）` → `まだ（продолжение до завершения）`
2. connection: `V tha động từ て + ある` → `V переходный て + ある`
3. example (from Japanese): `急に国に帰って、母をびっくりさせた。` → `Я неожиданно вернулся на родину и удивил маму.`
4. explain: `Diễn tả tình trạng có mục đích, kết quả của một hành động có chủ ý.` → `Выражает состояние, созданное намеренно, как результат сознательного действия.`
5. mistake: `Sai trợ từ cho “người bị khiến”: dùng を thay cho に. Đúng: 先生は学生に発表させた.` → `Неверная частица при том, кого заставляют действовать: を вместо に. Правильно: 先生は学生に発表させた.`
