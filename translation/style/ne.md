# Style guide: Nepali (ne)

Audience: Nepali-speaking learners of Japanese, JLPT N5–N1 (Nepal and Nepali speakers in Japan). Reference grammar inside the Migii app, read on a phone.

## Register and tone
- Standard written Nepali (मानक नेपाली), polite and neutral, like Nepali editions of Japanese textbooks and language-school handouts. No slang, no emoji.
- Explanations in the present tense with neutral impersonal verbs: "…व्यक्त गर्छ", "…मा प्रयोग हुन्छ", "…सँग प्रयोग हुँदैन". Not high-honorific forms (गर्नुहुन्छ) for grammar items.
- Address the learner with तपाईं and its verb forms (प्रयोग गर्नुहोस्), only where the source addresses the learner ("chúng ta" → "हामी" or an impersonal sentence). Never तिमी/तँ in explanations.
- Use the fixed glossary terms (Nepali school-grammar terms: नाम, क्रिया, कर्मवाच्य, सर्त). Do not borrow Hindi forms (शर्त, संज्ञा as main term, लेकिन, क्योंकि); use Nepali spelling (सर्त, तर, किनभने). Keep पार्टिकल as in the UI.
- `name` and `meaning` are labels: no पूर्णविराम (।) unless the source ends with a period.

## Script, punctuation, numerals
- Devanagari only for Nepali text; follow current standard spelling (Nepal Academy): सङ्कल्प/संकल्प both seen, prefer the glossary form.
- Sentence end: पूर्णविराम "।"; "?" and "," are ASCII. Quotation marks around Nepali words: “ ”. Japanese 「…」 stays 「…」.
- Keep full-width punctuation inside Japanese text (、。！？) unchanged.
- Numerals: Western digits 0–9 (not ०–९), to match the Japanese text and notation. Vietnamese "50.000" → "50,000".
- Currency word in explanations is translated ("đồng" → "डङ", "Yên" → "येन"); Japanese text (ドン, えん) stays.

## Never translate or change
- Any Japanese text (kana, kanji), in explanations, tables, examples and mistake lines.
- Notation: V, N, A, Aい, Aな, Na, S, Vる, Vて, Vた, Vない, Vます, V他, V自, ～, ~, ×, ○, ✓, ✕, →, ⇔, ◎, ①②③.
- `<ruby>…<rt>…</rt></ruby>` markup, line breaks (\n), numbering, bullets, "A:/B:" labels.
- Never transliterate kana into Devanagari or Latin. Form names keep the kana: て-रूप, ます-रूप.

## Grammar notation inside text
- Translate only the Vietnamese words inside a formula: "V tha động từ て + ある" → "V (सकर्मक) て + ある".
- Pattern names keep the Japanese and the bracket type: "まだ（tiếp diễn tới khi hoàn tất）" → "まだ（पूरा नहुन्जेल जारी रहनु）".
- Nepali postpositions attach to Nepali words without a space (कारणले, नामसँग) but are separated by one space after Japanese or notation ("Vて पछि", "N सँग").

## Example sentences
- Translate from the Japanese sentence; the Vietnamese is only a hint for the intended sense.
- Natural Nepali, not word-for-word. Keep tense, politeness contrast (です/ます → तपाईं / polite verb forms; plain form → casual म/तिमी forms where natural) and nuance (だろう → "…होला", ～てしまう → "…गरिहालें / …गरिसकें").
- Names stay names, written in Devanagari in the translated example only: 田中さん → "तानाका जी" (not "-सान").
- Keep the A:/B: dialogue layout.

## Mistake lines (× / ○)
- Keep × / ○ and the Japanese exactly where they are; translate only the commentary.
- Do not correct or rephrase the Japanese; translate what the line says.

## Length
- Aim for the source length (±20%). Do not add or drop information.

## Before / after (from style_samples.json)
1. meaning (1618): "Diễn đạt sự liên tục" → "निरन्तरता व्यक्त गर्छ"
2. example (7): "A: このくつはいくらですか。\nB: はっぴゃくえんです。" → "A: यो जुत्ता कतिको हो?\nB: 800 येन हो।"
3. connection (219): "V tha động từ て + ある" → "V (सकर्मक) て + ある"
4. mistake (233): "Sai hình thái 来る: “来させる(こさせる)” chứ không phải “来らせる”." → "来る को रूप गलत: “来させる(こさせる)” हो, “来らせる” होइन।"
5. comparison cell (219): "Kết quả chủ ý còn duy trì" → "जानाजान गरेको कामको बाँकी रहेको परिणाम"
