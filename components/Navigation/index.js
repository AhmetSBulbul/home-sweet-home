import styles from "./index.module.css";
import Logo from "../Logo";
import ThemeButton from "../ThemeButton";
import Button from "../Button";
import MenuButton from "../MenuButton";
import useToggle from "../../hooks/useToggle";
import cn from "classnames";

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
        <Button>Hakkimda</Button>
        <Button>Yazilarim</Button>
        <Button>Portfolyo</Button>
        <ThemeButton secondary>
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
