import styles from "./index.module.css";
import { At } from "../icons";
import cn from "classnames";

const Logo = ({
  isWhite = false,
  collapse = false,
}) => {
  return (
    <button
      className={cn([
        styles.logo,
        isWhite && styles.white,
      ])}
    >
      <At />

      {!collapse && <span>ahmetsbulbul</span>}
    </button>
  );
};

export default Logo;
