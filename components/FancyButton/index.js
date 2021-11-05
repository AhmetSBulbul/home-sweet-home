import Link from "next/link";
import styles from "./index.module.css";
import cn from "classnames";
import BaseButton from "../BaseButton";

const FancyButton = ({
  children,
  className,
  ...props
}) => {
  return (
    <BaseButton
      className={cn([styles.fancyBtn, className])}
      {...props}
    >
      {children}
      <div className={styles.horizontal} />
      <div className={styles.vertical} />
    </BaseButton>
  );
};

export default FancyButton;
