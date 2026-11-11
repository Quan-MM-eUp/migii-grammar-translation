# Style guide: Portuguese (pt)

## Variant, register and tone
- Brazilian Portuguese (pt-BR), matching the app UI ("Você já usou…", "pegadinhas", "Busca"). Use Brazilian spelling and vocabulary; avoid European-only forms ("tu fazes", "estou a fazer", "facto").
- Write like a Brazilian Japanese textbook (Brazilian editions of Minna no Nihongo, Fundação Japão materials): clear, precise, neutral-formal.
- Explanations are impersonal: "Usa-se para…" / "É usado para…", "Expressa…", "Indica…", "Forma-se com…". Prefer impersonal and passive constructions.
- When the learner must be addressed (advice, warnings), use "você" (never "tu"). Keep direct address rare in grammar entries.
- Example translations follow the register of the Japanese: です/ます → standard polite Portuguese ("o senhor / a senhora" only when the Japanese is clearly deferential); casual Japanese → natural informal Brazilian Portuguese.

## Typography
- Quote Portuguese meanings with "…" (straight or curly, consistently within an entry); keep 「」 around Japanese text exactly.
- In short structural glosses that copy a source pattern like "(～かもしれない: …)", keep the source structure exactly.
- Numerals: Arabic digits; thousands with a point (50.000), decimals with a comma. Keep source numbering (①②, 1., 2.).
- Capitalize only the first word of a name/meaning field; grammar terms are lowercase.

## Never translate or change
- Japanese text (kana, kanji) anywhere, including inside vi_parts fields.
- Notation: V, N, A, Aい, Aな, Na, S, Vる/Vて/Vた/Vない/Vます, ～, ×, ○, ✓, ✕, →, ⇔.
- `<ruby>…<rt>…</rt></ruby>` markup, line breaks, bullets, numbering, "A:" / "B:" labels.
- Keys inside notes text ("meaning_vi:", "explain:", "examples:") stay as is.
- Grammar terms: use the glossary "tr"; adapt only number/gender agreement. Keep "oração" (clause) and "frase" (sentence) distinct. Japanese register names in romaji with macrons (kenjōgo, ren'yōkei), not italicized.
- Form names keep the kana: forma て, forma ない, forma ます (never "forma te").

## Example sentences
- Translate from the Japanese sentence (the Vietnamese only shows intent). Natural Portuguese, not word-by-word; reorder freely; keep the tense/aspect and nuance of the Japanese.
- Names stay in romaji (Tanaka, Yamada). さん → usually just the name, or Sr./Sra. when gender is clear; 先輩 → "meu veterano Yamada" / "Yamada (meu senpai)".
- Currency follows the Japanese (800 ienes; ドン → dongs).

## × / ○ mistake lines
- Keep × / ○ and the Japanese sentences exactly; translate only the commentary. "đúng/sai" → "correto" / "incorreto".

## Length
- Portuguese runs about 1.1–1.3× the Vietnamese; compress where possible. Name/meaning fields are noun phrases or short infinitive phrases, not full sentences.

## Before / after examples
1. name (vi_parts): `まだ（tiếp diễn tới khi hoàn tất）` → `まだ（continuação até a conclusão）`
2. connection: `V tha động từ て + ある` → `V transitivo て + ある`
3. example (from Japanese): `急に国に帰って、母をびっくりさせた。` → `Voltei de repente para o meu país e surpreendi minha mãe.`
4. explain: `Diễn tả tình trạng có mục đích, kết quả của một hành động có chủ ý.` → `Expressa um estado intencional, resultado de uma ação deliberada.`
5. mistake: `Sai trợ từ cho “người bị khiến”: dùng を thay cho に. Đúng: 先生は学生に発表させた.` → `Partícula errada para a pessoa levada a agir: を em vez de に. Correto: 先生は学生に発表させた.`
