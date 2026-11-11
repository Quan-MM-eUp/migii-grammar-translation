# Style guide: Hindi (hi)

Audience: Hindi-speaking learners of Japanese, JLPT N5–N1 (India). Reference grammar inside the Migii app, read on a phone.

## Register and tone
- Standard, clear textbook Hindi (मानक हिंदी), polite and neutral, like Hindi editions of Japanese textbooks (みんなの日本語 Hindi translation). No slang, no emoji.
- Explanations in the present tense, short sentences: "…व्यक्त करता है", "…के लिए प्रयोग होता है", "…के साथ प्रयोग नहीं होता".
- Address the learner with आप (never तुम/तू), and only where the source addresses the learner ("chúng ta" → "हम" or a neutral impersonal sentence).
- Use the fixed glossary terms (Sanskrit-based grammar terms like संज्ञा, क्रिया, कर्मवाच्य). Do not mix in English words except where the glossary does (पार्टिकल). Do not swap synonyms for variety.
- `name` and `meaning` are labels, not sentences: no पूर्ण विराम (।) unless the source ends with a period.

## Script, punctuation, numerals
- Devanagari only for Hindi text. Use nukta consistently in common loanwords (ज़्यादा, ज़ोर, फ़र्क).
- Sentence end in Hindi text: पूर्ण विराम "।"; question mark "?" and comma "," are ASCII. Quotation marks around Hindi words: “ ”. Japanese 「…」 stays 「…」.
- Keep full-width punctuation inside Japanese text (、。！？) unchanged.
- Numerals: Western digits 0–9 (not Devanagari ०–९). Vietnamese "50.000" → "50,000". Do not convert to lakh grouping.
- Currency word in explanations is translated ("đồng" → "डोंग", "Yên" → "येन"); Japanese text (ドン, えん) stays.

## Never translate or change
- Any Japanese text (kana, kanji), in explanations, tables, examples and mistake lines.
- Notation: V, N, A, Aい, Aな, Na, S, Vる, Vて, Vた, Vない, Vます, V他, V自, ～, ~, ×, ○, ✓, ✕, →, ⇔, ◎, ①②③.
- `<ruby>…<rt>…</rt></ruby>` markup, line breaks (\n), numbering, bullets, "A:/B:" labels.
- Never transliterate kana into Devanagari or Latin (not "ते-रूप", not "te-रूप"). Form names keep the kana: て-रूप, ます-रूप.

## Grammar notation inside text
- Translate only the Vietnamese words inside a formula: "V tha động từ て + ある" → "V (सकर्मक) て + ある".
- Pattern names keep the Japanese and the bracket type: "まだ（tiếp diễn tới khi hoàn tất）" → "まだ（पूरा होने तक जारी रहना）".
- Hindi postpositions follow the Japanese/notation after one space: "Vて के बाद", "N के साथ".

## Example sentences
- Translate from the Japanese sentence; the Vietnamese is only a hint for the intended sense.
- Natural Hindi, not word-for-word. Keep tense, politeness contrast (です/ます → आप-forms; plain form → casual तुम/मैं where natural) and nuance (だろう → "शायद…होगा", ～てしまう → "…बैठा / …डाला").
- Names stay names, written in Devanagari in the translated example only: 田中さん → "तनाका जी" (さん → जी; not "-सान").
- Keep the A:/B: dialogue layout.

## Mistake lines (× / ○)
- Keep × / ○ and the Japanese exactly where they are; translate only the commentary.
- Do not correct or rephrase the Japanese; translate what the line says.

## Length
- Aim for the source length (±20%); Hindi often runs a little longer, keep it compact. Do not add or drop information.

## Before / after (from style_samples.json)
1. meaning (1618): "Diễn đạt sự liên tục" → "निरंतरता व्यक्त करता है"
2. example (7): "A: このくつはいくらですか。\nB: はっぴゃくえんです。" → "A: ये जूते कितने के हैं?\nB: 800 येन के हैं।"
3. connection (219): "V tha động từ て + ある" → "V (सकर्मक) て + ある"
4. mistake (233): "Sai hình thái 来る: “来させる(こさせる)” chứ không phải “来らせる”." → "来る का रूप गलत: “来させる(こさせる)” होता है, “来らせる” नहीं।"
5. comparison cell (219): "Kết quả chủ ý còn duy trì" → "जानबूझकर किए गए काम का बना हुआ परिणाम"
