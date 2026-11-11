# Style guide: French (fr)

## Register and tone
- Write like a French Japanese-grammar textbook (Assimil, Méthode de japonais, French editions of Minna no Nihongo): clear, precise, neutral-formal.
- Explanations are impersonal: "S'emploie pour…", "Exprime…", "Se construit avec…", "On utilise… lorsque…". Prefer the impersonal "on" and passive/pronominal forms.
- When the learner must be addressed (rare: advice, warnings), use "vous". Note: the chatbot UI uses "tu"; grammar entries are reference text and use "vous".
- Example translations follow the register of the Japanese: です/ます → standard French (vous between strangers/superiors); casual Japanese → natural familiar French (tu, on, ellipsis of "ne" acceptable only in clearly casual speech).

## Typography
- French typography in French prose: non-breaking space before « : ; ! ? » and inside « guillemets » (use U+00A0 or U+202F). Quote French meanings with « … ».
- Keep 「」 around Japanese text and never add French spacing inside Japanese text.
- Exception: in short structural glosses that copy a source pattern like "(～かもしれない: …)", keep the source structure exactly (no added space before the colon).
- Numerals: Arabic digits; thousands with a (narrow) space (50 000), decimals with a comma. Keep source numbering (①②, 1., 2.).
- Capitalize only the first word of a name/meaning field; no capitalization of grammar terms.

## Never translate or change
- Japanese text (kana, kanji), including inside vi_parts fields.
- Notation: V, N, A, Aい, Aな, Na, S, Vる/Vて/Vた/Vない/Vます, ～, ×, ○, ✓, ✕, →, ⇔.
- `<ruby>…<rt>…</rt></ruby>` markup, line breaks, bullets, numbering.
- Keys inside notes text ("meaning_vi:", "explain:", "examples:") stay as is.
- Grammar terms: use the glossary "tr"; adapt only number/gender agreement (adjectif en い → adjectifs en い; forme passive; sens négatif). Japanese register names are written in romaji with long-vowel macrons (kenjōgo, ren'yōkei), not in italics.
- Form names keep the kana: forme て, forme ない, forme ます (never "forme te").

## Example sentences
- Translate from the Japanese sentence (the Vietnamese only shows intent). Natural French, not word-by-word; reorder freely.
- Names: Tanaka, Yamada; さん is usually rendered by M./Mme when gender is clear, otherwise just the family name. 先輩 → "mon aîné(e) Yamada" or "Yamada (mon senpai)".
- Currency follows the Japanese (800 yens; ドン → dongs).
- Dialogues keep the source labels "A:" / "B:" unchanged (no added space) and the line breaks.

## × / ○ mistake lines
- Keep × / ○ and the Japanese sentences exactly; translate only the commentary. "đúng/sai" → « correct » / « incorrect ».

## Length
- French tends to run 1.2–1.4× the Vietnamese; compress where possible. Name/meaning fields are noun phrases or short infinitive phrases, no full sentences.

## Before / after examples
1. name (vi_parts): `まだ（tiếp diễn tới khi hoàn tất）` → `まだ（continuation jusqu'à l'achèvement）`
2. connection: `V tha động từ て + ある` → `V transitif て + ある`
3. example (from Japanese): `急に国に帰って、母をびっくりさせた。` → `En rentrant soudainement au pays, j'ai surpris ma mère.`
4. explain: `Diễn tả tình trạng có mục đích, kết quả của một hành động có chủ ý.` → `Exprime un état voulu, résultat d'une action intentionnelle.`
5. mistake: `Sai trợ từ cho “người bị khiến”: dùng を thay cho に. Đúng: 先生は学生に発表させた.` → `Mauvaise particule pour la personne qu'on fait agir : を au lieu de に. Correct : 先生は学生に発表させた.`
