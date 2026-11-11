# Style guide: Simplified Chinese (cn)

Audience: learners in mainland China studying Japanese, JLPT N5–N1. Reference grammar inside the Migii app, read on a phone.

## Register and tone
- Standard mainland textbook Chinese, as in 《新版中日交流标准日本语》 and Chinese JLPT grammar books: concise, neutral, written register (书面语). No internet slang, no emoji, no 哦/啦 in explanations.
- Typical patterns: "表示……", "用于……的场合", "不能与……一起使用", "多用于口语".
- `name`, `meaning`, table headers and labels are short phrases without a final 。 ("询问价格", "表示持续").
- Do not address the learner directly unless the source does; "chúng ta" is usually dropped or rendered as "我们".
- Use the fixed glossary terms (助词, て形, 自动词, 尊敬语…); do not vary them.
- Always 语法 (not 文法), 单词 (not 单字): this matches the app UI.

## Script and punctuation
- Simplified characters only (mainland standard). Never output Traditional characters in Chinese text.
- Full-width Chinese punctuation in Chinese prose: ，。、；：？！（）“”. Use 、 for listing words.
- Japanese text keeps its own punctuation and brackets unchanged (「」『』、。（）). Do not rewrite 「」 as “”.
- No spaces between Chinese characters. Do not add spaces around Japanese words or notation inside Chinese text either, except where the source formula has spaces ("V + ある").
- Numerals: Arabic digits for prices, counts, ages, years ("800日元", "50,000越南盾"). Vietnamese thousands separator "50.000" → "50,000".
- Kanji that also exist in Chinese: inside Japanese text they stay Japanese (来る, 閉める); never "simplify" Japanese kanji.

## Never translate or change
- Any Japanese text (kana, kanji), including inside explanations, tables and mistake lines.
- Notation: V, N, A, Aい, Aな, Na, S, Vる, Vて, Vた, Vない, Vます, V他, V自, ～, ~, ×, ○, ✓, ✕, →, ⇔, ◎, ①②③.
- `<ruby>…<rt>…</rt></ruby>` markup, line breaks, numbering, "A:/B:" labels.
- Pattern names: translate only the Vietnamese part: "まだ（tiếp diễn tới khi hoàn tất）" → "まだ（持续到完成为止）".
- Formulas: "V tha động từ て + ある" → "V他动词て + ある".
- Particle table (particles/cn.draft.json): keep the source's ASCII ( ) : / structure exactly; only the meaning is translated.

## Example sentences
- Translate from the Japanese sentence; the Vietnamese is only a hint for which sense is meant.
- Natural Chinese, not word-for-word. Keep tense, aspect and nuance (だろう → "大概……吧", ～てしまう → "……了 / 不小心……").
- Politeness: Chinese has no keigo; reflect it lightly with word choice (您, 请) only where the Japanese is clearly honorific.
- Names: 田中さん → "田中", 山田先輩 → "山田前辈".

## Mistake lines (× / ○)
- Keep ×/○ with the Japanese exactly where they are; translate only the commentary.
- Translate what the line says even if it looks inconsistent; never correct the knowledge.

## Length
- Chinese is naturally shorter than Vietnamese; aim for a compact rendering. Do not add or drop information.

## Before / after (from style_samples.json)
1. meaning (1618): "Diễn đạt sự liên tục" → "表示持续"
2. name (7): "Hỏi giá cả" → "询问价格"
3. example (1618): "雨は、まだ二、三日続くだろう。" → "雨大概还会再下两三天吧。"
4. explain (219): "Diễn tả tình trạng có mục đích, kết quả của một hành động có chủ ý." → "表示有意识的动作所带来的、带有目的的结果状态。"
5. mistake (233): "Sai hình thái 来る: “来させる(こさせる)” chứ không phải “来らせる”." → "来る的变形错误：应为“来させる(こさせる)”，而不是“来らせる”。"
