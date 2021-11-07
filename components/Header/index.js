import styles from "./index.module.css";
import Logo from "../Logo";
import BaseButton from "../BaseButton";
import Navigation from "../Navigation";
import { useToggle } from "../../shared/hooks";

const Header = ({
  children,
  isCollapse = false,
}) => {
  const [isExpanded, setIsExpand] =
    useToggle(false);
  return (
    <header className="bg-primary-darkest">
      <div className="content-container flex justify-between py-4 laptop:py-8">
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
