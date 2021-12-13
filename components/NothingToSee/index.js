import styles from "./index.module.css";
import cn from "classnames";

export default function NothingToSee({
  className,
  children,
  ...props
}) {
  return (
    <div
      className={cn([styles.wrapper, className])}
    >
      <span className="font-display font-semibold text-2xl text-gray-80">
        Üzgünüm, burada görüntülenecek hiçbir şey
        yok.
      </span>
    </div>
  );
}
