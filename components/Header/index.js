import styles from "./index.module.css";
import Logo from "../Logo";
import ThemeButton from "../ThemeButton";
import Button from "../Button";
import MenuButton from "../MenuButton";
import Navigation from "../Navigation";

const Header = ({
  children,
  isCollapse = false,
}) => {
  return (
    <div className={styles.header}>
      <Logo isWhite collapse={isCollapse} />
      {/* Flat props */}
      {isCollapse && (
        <a className="leading-loose">yazilarim</a>
      )}

      <Navigation />
    </div>
  );
};

export default Header;
