import BaseButton from "../BaseButton";
import Date from "../date";
import { Arrow } from "../icons";

export default function SimplePostLink({
  title,
  ...props
}) {
  return (
    <BaseButton {...props} className="group">
      <div className="flex justify-between items-center space-x-4">
        <div className="py-2 group-hover:text-primary-lightest font-link font-medium capitalize">
          {title}
        </div>
        <Arrow className="text-primary-lightest text-4xl block transition-transform ml-auto transform -translate-x-1/2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
      </div>
    </BaseButton>
  );
}
