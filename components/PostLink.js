import Button from "./Button";
import Date from "./date";

export default function PostLink({
  id,
  date,
  title,
  children,
  ...props
}) {
  return (
    <Button
      href={`/${id}`}
      className="my-2 inline-block group"
    >
      <article className="prose-sm">
        <h3 className="group-hover:text-night">
          {title}
        </h3>
        <p>{children}</p>

        <small>
          <Date dateString={date} />
        </small>
      </article>
    </Button>
  );
}
