# Style guide: Thai (th)

## Register and tone
- Write like a Thai Japanese-grammar textbook (e.g. Thai editions of Minna no Nihongo, JLPT prep books): neutral, clear, polite-formal written Thai.
- Explanations are impersonal statements: "ใช้เมื่อ…", "แสดงความหมายว่า…", "มักใช้กับ…". Do NOT end explanation sentences with ครับ/ค่ะ/นะ/จ้ะ (the chatbot UI uses a friendly tone with เรา/เธอ, but grammar entries are reference text).
- Address the learner only when unavoidable, and then as ผู้เรียน; never เธอ/แก/คุณ in explanations.
- Example-sentence translations may use ครับ/ค่ะ/นะ when the Japanese has です/ます, ね, よ etc. and the speaker is clear; otherwise leave them neutral.

## Script, spacing, punctuation
- Thai script only (plus the Japanese text and notation). No romanization of Japanese words written in kana/kanji.
- No spaces between Thai words. Use a space only: between sentences/clauses (where Thai normally pauses), and on both sides of embedded Japanese text or notation inside Thai (e.g. "รูป て ของคำกริยา", "ใช้ ～てある กับสกรรมกริยา").
- Use ๆ with a preceding space as in standard modern writing (ค่อย ๆ). Use ฯลฯ or "เป็นต้น" for "etc.".
- Use Arabic numerals (1, 2, 800), not Thai digits. Keep list numbering ①②, 1., 2. exactly as in the source.
- Keep 「」 around Japanese quotes. Thai text quoted as a meaning goes in double quotes " ".
- Keep the source punctuation of Japanese text (。、) unchanged; Thai sentences take no final period.

## Never translate or change
- Japanese text (kana, kanji), including inside Vietnamese fields with mode vi_parts.
- Notation: V, N, A, Aい, Aな, Na, S, Vる/Vて/Vた/Vない/Vます, ～, ×, ○, ✓, ✕, →, ⇔.
- `<ruby>…<rt>…</rt></ruby>` markup, line breaks, bullets, numbering.
- Field labels inside notes such as "meaning_vi:", "explain:", "examples:" stay as they are (they are keys, not prose).
- Use the glossary term ("tr") for every grammar term listed there; do not invent synonyms.

## Example sentences
- Translate from the Japanese sentence (the Vietnamese is only a hint for intent). Natural Thai, not word-by-word.
- Japanese names stay in Thai transcription (田中さん → คุณทานากะ, 山田先輩 → รุ่นพี่ยามาดะ).
- Currency/units follow the Japanese (はっぴゃくえん → 800 เยน). If the Japanese uses ドン (Vietnamese dong), keep "ดอง".
- A/B dialogues keep "A:" "B:" and the line break.

## × / ○ mistake lines
- Keep × and ○ and the Japanese sentences exactly; translate only the explanation around them.
- Use ผิด / ถูก (glossary) for "sai/đúng" in prose. Fix nothing silently: if the source marks something oddly, translate faithfully.

## Length
- Aim for the same information density as the source; Thai may be up to ~1.3× the Vietnamese length. Meaning/name fields stay short (a phrase, not a sentence).

## Before / after examples
1. name (vi_parts): `まだ（tiếp diễn tới khi hoàn tất）`
   → `まだ（ยังคงดำเนินต่อไปจนเสร็จสิ้น）`
2. connection: `V tha động từ て + ある`
   → `V สกรรมกริยา て + ある`
3. example (from Japanese): `ふうとうに切手がはってあります。`
   → `ที่ซองจดหมายมีแสตมป์ติดไว้`
4. mistake: `Sai trợ từ cho “người bị khiến”: dùng を thay cho に. Đúng: 先生は学生に発表させた.`
   → `ใช้คำช่วยผิดกับ "ผู้ถูกใช้ให้ทำ": ใช้ を แทน に ที่ถูกคือ 先生は学生に発表させた`
5. comparison cell: `Kết quả chủ ý còn duy trì` → `ผลของการกระทำโดยเจตนายังคงอยู่`; cell `ドアは<ruby>閉<rt>し</rt></ruby>めてある` stays unchanged.
