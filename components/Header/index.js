import styles from "./index.module.css";
import Logo from "../Logo";
import BaseButton from "../BaseButton";
import Navigation from "../Navigation";
import useToggle from "../../hooks/useToggle";

const Header = ({
  children,
  isCollapse = false,
}) => {
  const [isExpanded, setIsExpand] =
    useToggle(false);
  return (
    <header className="bg-primary-darkest">
      <div className={styles.header}>
        <BaseButton
          href="/"
          onClick={isExpanded && setIsExpand}
        >
          <Logo />
        </BaseButton>
        {/* Flat props */}
        {isCollapse && (
          <a className="leading-loose">
            yazilarim
          </a>
        )}

        <Navigation
          isActive={isExpanded}
          setToggle={setIsExpand}
        />
      </div>
    </header>
  );
};

export default Header;
