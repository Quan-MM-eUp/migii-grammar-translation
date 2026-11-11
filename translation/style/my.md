# Style guide: Burmese (my)

Audience: Burmese-speaking learners of Japanese, JLPT N5–N1 (Myanmar). Reference grammar inside the Migii app, read on a phone.

## Register and tone
- Explanations (`meaning`, `explain`, `notes`, `mistakes`, table cells) use the literary/written register (စာစကား): ～သည်, ～၏, ～တွင်, ～နှင့်, ～သော, ～ပါသည် where politeness is needed. This is the register of Burmese editions of Japanese textbooks. Do not mix spoken endings (တယ်, ရဲ့, မှာ) into one explanation.
- Example-sentence translations use the spoken register (ပြောစကား: ～တယ်, ～ပါတယ်, ～လား), because the Japanese examples are speech. Written-style Japanese examples (である調, news) may be translated in written register.
- Neutral, polite textbook tone; no slang, no emoji. Present tense: "…ကို ဖော်ပြသည်", "…တွင် သုံးသည်", "…နှင့် တွဲ၍ မသုံးပါ".
- Address the learner only where the source does ("chúng ta" → "ကျွန်ုပ်တို့" or an impersonal sentence); never use သင် repeatedly.
- Use the fixed glossary terms (Burmese school-grammar terms: နာမ်, ကြိယာ, ပစ္စည်း, ဝိဘတ်, သကမ္မကကြိယာ). Do not swap synonyms for variety.
- `name` and `meaning` are labels: no ။ unless the source ends with a period.

## Script, encoding, punctuation, numerals
- Standard Myanmar Unicode only (U+1000–U+109F), NFC. Never Zawgyi. Signs of Zawgyi to reject: the vowel ေ or medial ြ stored before the consonant, or code points U+1060–U+1097 used as stacked/medial glyphs.
- Burmese text uses ။ (sentence end) and ၊ (comma) in running sentences. In short labels and in the particle table keep the source separators "," ";" "/" as they are.
- Spaces: Burmese has no spaces between words; use a space only between phrases for readability, and always one space between Burmese and Japanese/notation ("Vて ပြီးနောက်", "N နှင့်").
- Keep full-width punctuation inside Japanese text (、。！？) and 「…」 unchanged. Quotation marks around Burmese words: “ ”.
- Numerals: Western digits 0–9 (as in the source and the Japanese notation), not ၀–၉. Vietnamese "50.000" → "50,000".
- Currency word in explanations is translated ("đồng" → "ဒေါင်", "Yên" → "ယန်း"); Japanese text (ドン, えん) stays.

## Never translate or change
- Any Japanese text (kana, kanji), in explanations, tables, examples and mistake lines.
- Notation: V, N, A, Aい, Aな, Na, S, Vる, Vて, Vた, Vない, Vます, V他, V自, ～, ~, ×, ○, ✓, ✕, →, ⇔, ◎, ①②③.
- `<ruby>…<rt>…</rt></ruby>` markup, line breaks (\n), numbering, bullets, "A:/B:" labels.
- Never transliterate kana into Burmese or Latin. Form names keep the kana: て-ပုံစံ, ます-ပုံစံ.

## Grammar notation inside text
- Translate only the Vietnamese words inside a formula: "V tha động từ て + ある" → "V (သကမ္မက) て + ある".
- Pattern names keep the Japanese and the bracket type: "まだ（tiếp diễn tới khi hoàn tất）" → "まだ（ပြီးဆုံးသည်အထိ ဆက်ဖြစ်နေခြင်း）".

## Example sentences
- Translate from the Japanese sentence; the Vietnamese is only a hint for the intended sense.
- Natural Burmese, not word-for-word. Keep tense, politeness contrast (です/ます → ～ပါတယ်; plain form → ～တယ်) and nuance (だろう → "…လိမ့်မယ်", ～てしまう → "…မိသွားတယ် / …လိုက်ပြီ").
- Names stay names, written in Burmese in the translated example only: 田中さん → "တာနာကာ" (add ကို/မ/ဦး/ဒေါ် only when the context needs a polite title; never "-စံ").
- Keep the A:/B: dialogue layout.

## Mistake lines (× / ○)
- Keep × / ○ and the Japanese exactly where they are; translate only the commentary.
- Do not correct or rephrase the Japanese; translate what the line says.

## Length
- Burmese is visually long; aim for the source length in meaning (±20%), keep labels short. Do not add or drop information.

## Before / after (from style_samples.json)
1. meaning (1618): "Diễn đạt sự liên tục" → "ဆက်လက်ဖြစ်နေခြင်းကို ဖော်ပြသည်"
2. example (7): "A: このくつはいくらですか。\nB: はっぴゃくえんです。" → "A: ဒီဖိနပ် ဘယ်လောက်လဲ။\nB: 800 ယန်းပါ။"
3. connection (219): "V tha động từ て + ある" → "V (သကမ္မက) て + ある"
4. mistake (233): "Sai hình thái 来る: “来させる(こさせる)” chứ không phải “来らせる”." → "来る ၏ ပုံစံ မှားသည်: “来させる(こさせる)” ဖြစ်ပြီး “来らせる” မဟုတ်ပါ။"
5. comparison cell (219): "Kết quả chủ ý còn duy trì" → "ရည်ရွယ်၍ လုပ်ထားသော ရလဒ် ကျန်ရှိနေခြင်း"
