import BaseButton from "../BaseButton";
import cn from "classnames";
import styles from "./index.module.css";

export default function ThemeButton({
  outlined = false,
  secondary = false,
  withIcon = false,
  small = false,
  children,
  className,
  ...props
}) {
  return (
    <BaseButton
      className={cn([
        styles.default,
        secondary && styles.secondary,
        withIcon && styles.withIcon,
        small && styles.small,
        outlined && styles.outlined,
        className,
      ])}
      {...props}
    >
      {children}
    </BaseButton>
  );
}
