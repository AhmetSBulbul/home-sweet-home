import styles from "./index.module.css";
import { At } from "../icons";
import cn from "classnames";

const Logo = ({
  isWhite = false,
  collapse = false,
}) => {
  const linkStyle = "link";
  return (
    <button
      className={cn([
        styles.logo,
        linkStyle,
        isWhite && styles.white,
      ])}
    >
      <At />

      {!collapse && <span>ahmetsbulbul</span>}
    </button>
  );
};

export default Logo;
