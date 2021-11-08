import SnippetPostLink from "../../components/SnippetPostLink";

export default function SnippetsFeed({
  snippetsPostList,
}) {
  return (
    <ul className="flex flex-col space-y-2">
      {snippetsPostList.map(
        ({ id, date, title }) => (
          <li key={id}>
            <SnippetPostLink
              date={date}
              title={title}
              href={`/snippets/${id}`}
            />
          </li>
        )
      )}
    </ul>
  );
}
