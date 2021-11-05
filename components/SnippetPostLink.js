import BaseButton from "./BaseButton";
import Date from "./date";
import { Arrow } from "./icons";

export default function SnippetPostLink({
  date,
  title,
  ...props
}) {
  return (
    <BaseButton {...props} className="group">
      <div className="flex justify-between items-center space-x-4">
        <article className="flex flex-col justify-start items-start py-2 group-hover:text-primary-lightest">
          <h3 className="font-link text-2xl font-bold ">
            {title}
          </h3>
          <small>
            Son Güncelleme:{" "}
            <Date dateString={date} />
          </small>
        </article>
        <Arrow className="text-primary-lightest text-4xl block transition-transform ml-auto transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
      </div>
    </BaseButton>
  );
}
