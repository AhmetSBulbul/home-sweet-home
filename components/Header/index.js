import styles from "./index.module.css";
import Logo from "../Logo";
import ThemeButton from "../ThemeButton";
import Button from "../Button";
import MenuButton from "../MenuButton";
import Navigation from "../Navigation";
import { Routes } from "../../constants";

const Header = ({
  children,
  isCollapse = false,
}) => {
  return (
    <header className="bg-primary-darkest">
      <div className={styles.header}>
        <Logo
          href={Routes.home}
          isWhite
          collapse={isCollapse}
        />
        {/* Flat props */}
        {isCollapse && (
          <a className="leading-loose">
            yazilarim
          </a>
        )}

        <Navigation />
      </div>
    </header>
  );
};

export default Header;
