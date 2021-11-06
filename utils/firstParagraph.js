export default function firstParagraph(
  contentHtml
) {
  const indentedIndex =
    contentHtml.indexOf("<p>");
  const breakIndex =
    contentHtml.indexOf("</p>") + 3;
  const firstParagraphHtml =
    contentHtml.substring(
      indentedIndex,
      breakIndex
    );

  return firstParagraphHtml;
}
