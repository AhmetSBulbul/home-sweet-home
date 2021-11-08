import styles from "./index.module.css";
import BaseButton from "../BaseButton";
import MenuButton from "../MenuButton";
import NavButton from "../NavButton";
import cn from "classnames";
import {
  Routes,
  NavRoutes,
} from "../../constants";
import React from "react";
import {
  useLockBodyScrollToggle,
  useWindowSize,
} from "../../shared/hooks";

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
            <NavButton
              key={item.key}
              href={item.path}
              onClick={isActive && setToggle}
              className={styles.navLink}
            >
              {item.title}
            </NavButton>
          );
        })}
        <BaseButton
          className={styles.outlinedBtn}
          href="/iletisim"
        >
          Birlikte Çalışalım
        </BaseButton>
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
