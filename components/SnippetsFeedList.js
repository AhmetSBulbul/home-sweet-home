import SnippetPostLink from "./SnippetPostLink";

export default function SnippetsFeedList({
  snippetsPostList,
}) {
  return (
    <ul>
      {snippetsPostList.map(
        ({ id, date, title }) => (
          <li key={id}>
            <SnippetPostLink
              id={id}
              date={date}
              title={title}
            />
          </li>
        )
      )}
    </ul>
  );
}
