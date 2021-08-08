import Link from "next/link";
import styles from "./index.module.css";
import cn from "classnames";
import Button from "../Button";

const FancyButton = ({
  children,
  className,
  ...props
}) => {
  return (
    <Button
      className={cn([styles.fancyBtn, className])}
      {...props}
    >
      {children}
      <div className={styles.horizontal} />
      <div className={styles.vertical} />
    </Button>
  );
};

export default FancyButton;
