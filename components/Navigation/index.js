import styles from "./index.module.css";
import Logo from "../Logo";
import ThemeButton from "../ThemeButton";
import Button from "../Button";
import MenuButton from "../MenuButton";
import useToggle from "../../hooks/useToggle";
import cn from "classnames";
import { Routes } from "../../constants";

const Navigation = ({ children }) => {
  const [isExpanded, setIsExpand] =
    useToggle(false);

  return (
    <>
      <nav
        className={cn([
          styles.navbar,
          isExpanded && styles.expand,
        ])}
      >
        <Button href={Routes.about}>
          Hakkimda
        </Button>
        <Button href={Routes.writings}>
          Yazilarim
        </Button>
        <ThemeButton
          href={Routes.contact}
          secondary
        >
          Bana Ulasin
        </ThemeButton>
      </nav>
      <MenuButton
        isWhite
        isActive={isExpanded}
        className={styles.menuBtn}
        onClick={setIsExpand}
      />
    </>
  );
};

export default Navigation;
