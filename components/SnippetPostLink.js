import Link from "next/link";
import Date from "./date";

export default function SnippetPostLink({
  id,
  date,
  title,
}) {
  return (
    <Link href={`/snippets/${id}`}>
      <a>
        <article>
          <h3>{title}</h3>
          <small>
            Son Güncelleme:{" "}
            <Date dateString={date} />
          </small>
        </article>
      </a>
    </Link>
  );
}
