# Style guide: Indonesian (id)

## Register and tone
- Write like an Indonesian Japanese-grammar textbook (e.g. Minna no Nihongo terjemahan Indonesia, JLPT prep books): standard Bahasa Indonesia (EYD/PUEBI), clear and neutral-polite.
- Explanations are impersonal: "Digunakan untuk…", "Menyatakan…", "Biasanya diikuti oleh…". Avoid slang and chatty particles (ya, sih, dong, aja) in explanations, even though the chatbot UI uses a casual aku/kamu tone.
- Address the learner only when necessary, as "Anda" (never kamu/kau/lu) or impersonally ("pembelajar").
- Example translations follow the register of the Japanese: です/ます → standard polite Indonesian; casual Japanese → natural casual Indonesian (kamu, nggak is acceptable only for clearly casual speech).

## Script, spacing, punctuation
- Latin script, standard spelling (praktik, analisis, objek, subjek). Indonesian has no grammatical gender or inflection; plural by context or reduplication (kata-kata), not by "-s".
- Put a space between Indonesian words and embedded Japanese text/notation: "bentuk て dari kata kerja", "gunakan ～てある dengan kata kerja transitif".
- Half-width punctuation in Indonesian text; keep Japanese punctuation (。、「」) inside Japanese text unchanged. Quote Indonesian meanings with "…".
- Numerals: Arabic digits; thousands separator ".", decimal ","; keep source numbering (①②, 1., 2.).

## Never translate or change
- Japanese text (kana, kanji), including inside vi_parts fields.
- Notation: V, N, A, Aい, Aな, Na, S, Vる/Vて/Vた/Vない/Vます, ～, ×, ○, ✓, ✕, →, ⇔.
- `<ruby>…<rt>…</rt></ruby>` markup, line breaks, bullets, numbering.
- Field keys inside notes text ("meaning_vi:", "explain:", "examples:") stay as is.
- Grammar terms: always the glossary "tr"; do not switch between synonyms within an entry. Japanese register names (keigo, sonkeigo, kenjougo, teineigo) are written in plain romaji in Indonesian as in local textbooks, lowercase, not italic.

## Example sentences
- Translate from the Japanese sentence, not from the Vietnamese; natural Indonesian, not word-by-word.
- Japanese names keep their romanized form with an Indonesian honorific where natural (田中さん → Pak/Bu Tanaka or Tanaka-san; prefer "Tanaka-san" when gender is unknown).
- Currency follows the Japanese (はっぴゃくえん → 800 yen; ドン → dong).
- Dialogues keep "A:" / "B:" and the line breaks.

## × / ○ mistake lines
- Keep ×/○ and the Japanese sentences exactly; translate only the commentary. Use "benar"/"salah" for đúng/sai.

## Length
- Indonesian runs about 1.1–1.3× the Vietnamese. Keep name/meaning fields as short phrases; do not add explanations that are not in the source.

## Before / after examples
1. name (vi_parts): `まだ（tiếp diễn tới khi hoàn tất）` → `まだ（berlanjut sampai selesai）`
2. connection: `V tha động từ て + ある` → `V kata kerja transitif て + ある`
3. example (from Japanese): `ふうとうに切手がはってあります。` → `Di amplop sudah tertempel perangko.`
4. example: `社長は、その仕事を田中さんにやらせた。` → `Direktur menyuruh Tanaka-san mengerjakan pekerjaan itu.`
5. mistake: `Sai hình thái 来る: “来させる(こさせる)” chứ không phải “来らせる”.` → `Salah bentuk 来る: "来させる(こさせる)", bukan "来らせる".`
