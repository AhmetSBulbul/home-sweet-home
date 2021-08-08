import styles from "./index.module.css";
import cn from "classnames";

const ShapeCircle = ({ className }) => {
  return (
    <div
      className={cn([
        styles.circle,
        styles.circleBig,
        className,
      ])}
    />
  );
};

export default ShapeCircle;
