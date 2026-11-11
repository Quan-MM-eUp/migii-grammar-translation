# Style guide: Traditional Chinese, Taiwan (tw)

Audience: learners in Taiwan studying Japanese, JLPT N5–N1. Reference grammar inside the Migii app, read on a phone. This is a separate localization, not a character conversion of cn.

## Register and tone
- Standard Taiwan textbook Chinese, as in Taiwan editions of 大家的日本語 and local JLPT 文法 books: concise, neutral, written register. No emoji; avoid the chatty 喔/啦 of the chatbot UI in grammar explanations.
- Typical patterns: 「表示……」「用於……的情況」「不能與……一起使用」「多用於口語」.
- `name`, `meaning`, table headers and labels are short phrases without a final 。 (「詢問價格」「表示持續」).
- Do not address the learner directly unless the source does; when needed use 「你」 (not 您).
- Use the fixed glossary terms; do not vary them.

## Taiwan vocabulary (not mainland)
- 文法 (not 語法), 單字 (not 單詞), 主詞 / 受詞 (not 主語 / 賓語), 子句, 片語, 意向形, 普通形 / 丁寧形, 丁寧語, 資訊 (not 信息), 品質 (not 質量), 影片 (not 視頻), 程式 (not 程序), 網路 (not 網絡), 計程車 (not 出租車), 捷運, 便當.
- Currency and units in example sentences: 日圓 (not 日元), 越南盾.

## Script and punctuation
- Traditional characters, Taiwan standard forms (台/臺 both acceptable; prefer 台). Never output Simplified characters.
- Full-width punctuation in Chinese prose: ，。、；：？！（）. Taiwan quotation marks are 「」 and 『』 for nested quotes; use them for Chinese quotes too.
- Japanese text keeps its own punctuation unchanged. Never rewrite Japanese kanji into Taiwan forms (keep 来る, 歳, 気, 説明 exactly as in the source).
- No spaces between Chinese characters; keep spaces only where the source formula has them ("V + ある").
- Numerals: Arabic digits for prices, counts, ages ("800日圓", "50,000越南盾"). Vietnamese "50.000" → "50,000".

## Never translate or change
- Any Japanese text (kana, kanji), including inside explanations, tables and mistake lines.
- Notation: V, N, A, Aい, Aな, Na, S, Vる, Vて, Vた, Vない, Vます, V他, V自, ～, ~, ×, ○, ✓, ✕, →, ⇔, ◎, ①②③.
- `<ruby>…<rt>…</rt></ruby>` markup, line breaks, numbering, "A:/B:" labels.
- Pattern names: translate only the Vietnamese part: "まだ（tiếp diễn tới khi hoàn tất）" → "まだ（持續到完成為止）".
- Formulas: "V tha động từ て + ある" → "V他動詞て + ある".
- Particle table (particles/tw.draft.json): keep the source's ASCII ( ) : / structure exactly; only the meaning is translated.

## Example sentences
- Translate from the Japanese sentence; the Vietnamese is only a hint for which sense is meant.
- Natural Taiwan Mandarin, not word-for-word. Keep tense, aspect and nuance (だろう →「大概……吧」, ～てしまう →「……了／不小心……」).
- Politeness: use 您／請 only where the Japanese is clearly honorific.
- Names: 田中さん →「田中」, 山田先輩 →「山田學長」 in school settings, 「山田前輩」 at work.

## Mistake lines (× / ○)
- Keep ×/○ with the Japanese exactly where they are; translate only the commentary.
- Translate what the line says even if it looks inconsistent; never correct the knowledge.

## Length
- Compact, roughly as short as cn. Do not add or drop information.

## Before / after (from style_samples.json)
1. meaning (1618): "Diễn đạt sự liên tục" → "表示持續"
2. name (7): "Hỏi giá cả" → "詢問價格"
3. example (7): "A: このくつはいくらですか。\nB: はっぴゃくえんです。" → "A: 這雙鞋子多少錢？\nB: 800日圓。"
4. explain (219): "Diễn tả tình trạng có mục đích, kết quả của một hành động có chủ ý." → "表示有意圖的動作所帶來、具有目的的結果狀態。"
5. mistake (233): "Sai hình thái 来る: “来させる(こさせる)” chứ không phải “来らせる”." → "来る的變化錯誤：應為「来させる(こさせる)」，而不是「来らせる」。"
