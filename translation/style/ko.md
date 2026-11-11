# Style guide: Korean (ko)

Audience: Korean learners of Japanese, JLPT N5–N1. Reference grammar inside the Migii app, read on a phone.

## Register and tone
- Use **해요체** for all explanation sentences (`explain`, `notes`, `mistakes`, comparison cells that are sentences): "~을 나타내요", "~할 때 써요", "~와 함께 쓸 수 없어요". This matches the app UI (e.g. "오늘 질문 횟수를 모두 사용했어요"). Do not mix in 합니다체 or 반말 (~다/~야).
- `name`, `meaning`, table headers and short labels are noun phrases, ending in a noun or ~(으)ㅁ form, no final period: "가격 묻기", "지속을 나타냄", "~해 두다".
- Tone: clear and textbook-like, as in Korean JLPT grammar books; no slang, no emoji.
- Address the learner only when the source does ("chúng ta" → "우리는" or omit the subject, which is more natural in Korean).
- Use the fixed glossary terms (조사, 경어, 존경어, 겸양어, て형…). Do not alternate synonyms.

## Script, spacing, punctuation
- Hangul. Standard Korean spacing (띄어쓰기) in Korean text; no spaces are added inside Japanese text.
- Japanese kana in form names attach without a space: て형, ます형, い형용사, な형용사.
- Korean text uses half-width punctuation (. , ? ! : ( )). Japanese text keeps its own full-width punctuation (、。「」（）) unchanged.
- Quotation of Japanese inside Korean: keep the source marks (「…」 or “…”) as they are.
- Numerals: Arabic digits for counts, prices, ages ("800엔", "50,000동"). Vietnamese thousands separator "50.000" becomes "50,000".

## Never translate or change
- Any Japanese text (kana, kanji) anywhere, including inside explanations and tables. Do not convert kanji to Hangul readings.
- Notation: V, N, A, Aい, Aな, Na, S, Vる, Vて, Vた, Vない, Vます, V他, V自, ～, ~, ×, ○, ✓, ✕, →, ⇔, ◎, ①②③.
- `<ruby>…<rt>…</rt></ruby>` markup, line breaks, numbering, "A:/B:" labels.
- Pattern names: translate only the Vietnamese part: "まだ（tiếp diễn tới khi hoàn tất）" → "まだ（완료될 때까지 계속됨）"; keep bracket type.
- Formulas: translate Vietnamese words, keep notation: "V tha động từ て + ある" → "V 타동사 て + ある".

## Example sentences
- Translate from the Japanese sentence; the Vietnamese is only a hint for the intended sense.
- Natural Korean, not word-for-word. Mirror the politeness of the Japanese: です/ます sentences → 해요체 or 합니다체 as fits; plain-form sentences → 한다체/반말 as fits the situation. Keep tense and nuance (だろう → "~겠지 / ~일 것이다").
- Names: 田中さん → "다나카 씨", 山田先輩 → "야마다 선배".

## Mistake lines (× / ○)
- Keep ×/○ with the Japanese exactly where they are; translate only the commentary.
- Translate what the line says, even if it looks inconsistent; never correct the knowledge.

## Length
- About the same length as the source. Do not add or drop information, examples or explanations.

## Before / after (from style_samples.json)
1. meaning (1618): "Diễn đạt sự liên tục" → "지속을 나타냄"
2. name (7): "Hỏi giá cả" → "가격 묻기"
3. example (7): "A: このくつはいくらですか。\nB: はっぴゃくえんです。" → "A: 이 신발은 얼마예요?\nB: 800엔이에요."
4. explain (219): "Diễn tả tình trạng có mục đích, kết quả của một hành động có chủ ý." → "의도적인 행위의 결과로 생긴 목적 있는 상태를 나타내요."
5. mistake (233): "Sai hình thái 来る: “来させる(こさせる)” chứ không phải “来らせる”." → "来る의 형태 오류: “来らせる”가 아니라 “来させる(こさせる)”예요."
