import Link from "next/link";
import styles from "./index.module.css";
import cn from "classnames";
import Button from "../Button";

const MenuButton = ({
  children,
  className,
  isWhite = false,
  isActive = false,
  ...props
}) => {
  return (
    <Button
      className={cn([
        styles.menuBtn,
        isWhite ? styles.white : styles.gray,
        className,
      ])}
      {...props}
    >
      <div
        className={cn([
          styles.dots,
          isActive && styles.stateActive,
        ])}
      >
        <div />
        <div />
        <div />
      </div>
    </Button>
  );
};

export default MenuButton;
