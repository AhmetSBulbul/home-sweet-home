import Link from "next/link";
import styles from "./index.module.css";
import cn from "classnames";
import Button from "../Button";

const ThemeButton = ({
  children,
  className,
  secondary = false,
  outlined = false,
  stretch = false,
  ...props
}) => {
  return (
    <Button
      className={cn([
        styles.themeBtn,
        styles.primary,
        secondary && styles.secondary,
        outlined
          ? secondary
            ? styles.secondaryOutlined
            : styles.primaryOutlined
          : styles.primary,
        stretch && styles.stretch,
        className,
      ])}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ThemeButton;
