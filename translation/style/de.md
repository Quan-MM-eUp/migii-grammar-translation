# Style guide: German (de)

## Register and tone
- Write like a German Japanese-grammar textbook (e.g. Japanisch im Sauseschritt, German Minna no Nihongo editions, JLPT-Grammatik books): sachlich, precise, neutral.
- Explanations are impersonal: "Drückt … aus.", "Wird verwendet, wenn …", "Steht nach der て-Form." Prefer passive/impersonal constructions and "man".
- Addressing the learner: avoid where possible; when unavoidable use "Sie". (The chatbot UI uses "du"; grammar entries are reference text and stay neutral/formal.)
- Example translations follow the register of the Japanese: です/ます → neutral standard German (Sie between strangers/superiors); casual Japanese → natural colloquial German (du).

## Orthography and punctuation
- Current standard spelling (Reform 2006): ß/ss correctly, capitalized nouns, compounds hyphenated when one part is Japanese or notation: て-Form, い-Adjektiv, ます-Stamm, Gruppe-1-Verb.
- German quotes „…“ for German meanings; keep 「」 around Japanese text.
- Commas before subordinate clauses (dass, weil, wenn, obwohl) as required by German rules.
- Numerals: Arabic digits; thousands with a dot or space (50.000), decimal comma. Keep source numbering (①②, 1., 2.).
- Keep the source structure in short glosses like "(～かもしれない: …)" exactly; no extra spaces.

## Never translate or change
- Japanese text (kana, kanji), including inside vi_parts fields.
- Notation: V, N, A, Aい, Aな, Na, S, Vる/Vて/Vた/Vない/Vます, ～, ×, ○, ✓, ✕, →, ⇔.
- `<ruby>…<rt>…</rt></ruby>` markup, line breaks, bullets, numbering.
- Keys inside notes text ("meaning_vi:", "explain:", "examples:") stay as is.
- Grammar terms: use the glossary "tr", inflected as German grammar requires (case, number, adjective endings: einer て-Form, des Verbs, intransitive Verben). Japanese register names in romaji with macrons, capitalized as nouns (Keigo, Sonkeigo, Kenjōgo), not italic.
- Form names keep the kana: て-Form, ない-Form (never "te-Form").

## Example sentences
- Translate from the Japanese sentence (Vietnamese only shows intent). Natural German word order, not word-by-word.
- Names: Tanaka, Yamada; さん → Herr/Frau when gender is clear, otherwise the bare family name; 先輩 → "mein Senpai Yamada" or "Yamada, mein älterer Kollege" depending on context.
- Currency follows the Japanese (800 Yen; ドン → Dong).
- Dialogues keep "A:" / "B:" and the line breaks.

## × / ○ mistake lines
- Keep × / ○ and the Japanese sentences exactly; translate only the commentary. "đúng/sai" → „richtig“ / „falsch“.

## Length
- German runs about 1.2–1.4× the Vietnamese; avoid long nominal chains, keep name/meaning fields as short phrases. Do not add information.

## Before / after examples
1. name (vi_parts): `まだ（tiếp diễn tới khi hoàn tất）` → `まだ（Fortdauer bis zum Abschluss）`
2. connection: `V tha động từ て + ある` → `V (transitiv) て + ある`
3. example (from Japanese): `雨は、まだ二、三日続くだろう。` → `Der Regen wird wohl noch zwei, drei Tage anhalten.`
4. meaning: `Sử dụng khi cho phép hoặc bắt ai đó thực hiện một hành động.` → `Wird verwendet, wenn man jemandem eine Handlung erlaubt oder ihn dazu zwingt.`
5. comparison cell: `Bị bắt làm` → `gezwungen werden, etwas zu tun`; cell `Vさせられる` stays unchanged.
