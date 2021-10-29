import styles from "./index.module.css";
import Logo from "../Logo";
import ThemeButton from "../ThemeButton";
import Button from "../Button";
import MenuButton from "../MenuButton";
import useToggle from "../../hooks/useToggle";
import cn from "classnames";
import {
  Routes,
  NavRoutes,
} from "../../constants";
import Link from "next/dist/client/link";
import React from "react";

/*const FunctionalLink = React.forwardRef(
  ({ onClick, href, children }, ref) => {
    return (
      <a href={href} onClick={onClick} ref={ref}>
        {children}
      </a>
    );
  }
);
 */
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
        {NavRoutes.map((item) => {
          return (
            <Button
              key={item.key}
              href={item.path}
              onClick={isExpanded && setIsExpand}
            >
              {item.title}
            </Button>
          );
        })}
        <ThemeButton
          href={Routes.contact}
          onClick={isExpanded && setIsExpand}
          secondary
        >
          Bana Ulaşın
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
