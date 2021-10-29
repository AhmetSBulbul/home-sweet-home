import styles from "./index.module.css";
import Button from "../Button";
import MenuButton from "../MenuButton";
import cn from "classnames";
import {
  Routes,
  NavRoutes,
} from "../../constants";
import React from "react";
import useLockBodyScrollToggle from "../../hooks/useLockBodyScrollToggle";
import useWindowSize from "../../hooks/useWindowSize";
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
  const size = useWindowSize();
  const amIMobile = size.width <= 768;
  useLockBodyScrollToggle(amIMobile && isActive);
  console.log(amIMobile);
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
        <Button
          className={styles.outlinedBtn}
          href="/iletisim"
        >
          Birlikte Çalışalım
        </Button>
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
