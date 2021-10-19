import styles from "./index.module.css";
import { At } from "../icons";
import cn from "classnames";
import Button from "../Button";

const Logo = ({
  isWhite = false,
  collapse = false,
  ...props
}) => {
  const linkStyle = "link";
  return (
    <Button
      className={cn([
        styles.logo,
        linkStyle,
        isWhite && styles.white,
      ])}
      {...props}
    >
      <At />

      {!collapse && <span>ahmetsbulbul</span>}
    </Button>
  );
};

export default Logo;
