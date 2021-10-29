import styles from "./index.module.css";
import Button from "../Button";
import MenuButton from "../MenuButton";
import cn from "classnames";
import {
  Routes,
  NavRoutes,
} from "../../constants";
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
const Navigation = ({
  children,
  isActive,
  setToggle,
}) => {
  return (
    <>
      <nav
        className={cn([
          styles.navbar,
          isActive && styles.expand,
        ])}
      >
        {NavRoutes.map((item) => {
          return (
            <Button
              key={item.key}
              href={item.path}
              onClick={isActive && setToggle}
              className={styles.navLink}
            >
              {item.title}
            </Button>
          );
        })}
      </nav>
      <MenuButton
        isWhite
        isActive={isActive}
        className={styles.menuBtn}
        onClick={setToggle}
      />
    </>
  );
};

export default Navigation;
