import BaseButton from "./BaseButton";
import Date from "./date";

export default function PostLink({
  id,
  date,
  title,
  category,
  children,
  ...props
}) {
  return (
    <BaseButton
      href={`/${id}`}
      className="my-2 inline-block group"
    >
      <article className="prose-sm">
        <h3 className="group-hover:text-night">
          {title}
        </h3>
        <span>{category}</span>
        <p>{children}</p>

        <small>
          <Date dateString={date} />
        </small>
      </article>
    </BaseButton>
  );
}
