export default function firstParagraph(
  contentHtml
) {
  const index = contentHtml.indexOf("</p>") + 3;
  const paragraphHtml = contentHtml.substring(
    0,
    index
  );

  return paragraphHtml;
}
