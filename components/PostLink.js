import Button from "./Button";
import Date from "./date";

export default function PostLink({
  id,
  date,
  title,
  ...props
}) {
  return (
    <Button
      href={`/${id}`}
      className="my-2 inline-block"
    >
      <article>
        <h3>{title}</h3>

        <small>
          <Date dateString={date} />
        </small>
      </article>
    </Button>
  );
}
