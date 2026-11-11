# Style guide: Polish (pl)

## Register and tone
- Write like a Polish Japanese-grammar textbook (Huszcza/Ikushima/Majewski "Gramatyka japońska", Polish university course materials): clear, precise, neutral-formal.
- Explanations are impersonal: "Używa się, gdy…", "Wyraża…", "Oznacza…", "Łączy się z…", "Stosuje się do…". Prefer impersonal "się" constructions and "należy…".
- Addressing the learner: avoid it in grammar entries. Where unavoidable (warnings, advice), use impersonal forms ("należy uważać", "warto zwrócić uwagę"). Note: the chatbot UI uses "ty"; grammar entries are reference text.
- Example translations follow the register of the Japanese: です/ます → neutral polite Polish ("pan/pani" toward strangers/superiors when the context requires); casual Japanese → natural colloquial Polish ("ty").

## Script and typography
- Use full Polish diacritics (ą ć ę ł ń ó ś ź ż); never strip them.
- Quote Polish meanings with „…” (low-high Polish quotes); keep 「」 around Japanese text exactly.
- Use the en dash (–) with spaces in prose; keep source hyphens and arrows untouched.
- In short structural glosses that copy a source pattern like "(～かもしれない: …)", keep the source structure exactly.
- Numerals: Arabic digits; thousands with a space (50 000), decimals with a comma. Keep source numbering (①②, 1., 2.).
- Capitalize only the first word of a name/meaning field.

## Never translate or change
- Japanese text (kana, kanji) anywhere, including inside vi_parts fields.
- Notation: V, N, A, Aい, Aな, Na, S, Vる/Vて/Vた/Vない/Vます, ～, ×, ○, ✓, ✕, →, ⇔.
- `<ruby>…<rt>…</rt></ruby>` markup, line breaks, bullets, numbering, "A:" / "B:" labels.
- Keys inside notes text ("meaning_vi:", "explain:", "examples:") stay as is.
- Grammar terms: use the glossary "tr" and decline it as Polish grammar requires (forma て → "w formie て", "po formie て"). Kana in form names is never romanized: "forma て", not "forma -te".
- Japanese register names in Hepburn romaji with macrons (kenjōgo, ren'yōkei), not italicized.

## Example sentences
- Translate from the Japanese sentence (the Vietnamese only shows intent). Natural Polish, not word-by-word; free word order; render Japanese aspect with the right Polish aspect (dokonany/niedokonany).
- Names in Hepburn romaji (Tanaka, Yamada). さん → usually just the name, or "pan/pani" in formal contexts; 先輩 → "mój starszy kolega Yamada" / "senpai Yamada".
- Currency follows the Japanese (800 jenów; ドン → dongów).

## × / ○ mistake lines
- Keep × / ○ and the Japanese sentences exactly; translate only the commentary. "đúng/sai" → "poprawnie" / "niepoprawnie" (or "poprawne/błędne" agreeing with the noun).

## Length
- Polish runs about 1.1–1.3× the Vietnamese; compress where possible. Name/meaning fields are noun phrases or short infinitive phrases, not full sentences.

## Before / after examples
1. name (vi_parts): `まだ（tiếp diễn tới khi hoàn tất）` → `まだ（trwanie aż do zakończenia）`
2. connection: `V tha động từ て + ある` → `V przechodni て + ある`
3. example (from Japanese): `急に国に帰って、母をびっくりさせた。` → `Niespodziewanie wróciłem do kraju i zaskoczyłem mamę.`
4. explain: `Diễn tả tình trạng có mục đích, kết quả của một hành động có chủ ý.` → `Wyraża zamierzony stan będący wynikiem celowego działania.`
5. mistake: `Sai trợ từ cho “người bị khiến”: dùng を thay cho に. Đúng: 先生は学生に発表させた.` → `Błędna partykuła przy osobie, której każe się działać: を zamiast に. Poprawnie: 先生は学生に発表させた.`
