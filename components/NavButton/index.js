import BaseButton from "../BaseButton";
import styles from "./index.module.css";
import cn from "classnames";

export default function NavButton({
  current = false,
  small = false,
  outlined = false,
  className,
  children,
  ...props
}) {
  return (
    <BaseButton
      className={cn([
        styles.navBtn,
        small && styles.smallLink,
        current && styles.currentLink,
        outlined && styles.outlinedLink,
      ])}
      {...props}
    >
      {children}
    </BaseButton>
  );
}
