import Logo from "../../components/Logo";
import NavButton from "../../components/NavButton";
import ThemeButton from "../../components/ThemeButton";
import BaseButton from "../../components/BaseButton";
import MenuButton from "../../components/MenuButton";
import styles from "./index.module.css";
import {
  useToggle,
  useLockBodyScrollToggle,
  useWindowSize,
} from "../../shared/hooks";
import { NavRoutes } from "../../constants";
import cn from "classnames";

export default function HeaderModule() {
  const [isExpanded, setIsExpand] =
    useToggle(false);
  const size = useWindowSize();
  const amIMobile = size.width <= 768;
  useLockBodyScrollToggle(
    amIMobile && isExpanded
  );
  return (
    <header className={styles.header}>
      <div className="content-container flex justify-between py-4 laptop:py-8">
        <BaseButton
          href="/"
          onClick={isExpanded && setIsExpand}
        >
          <Logo />
        </BaseButton>

        <nav
          className={cn([
            styles.navigation,
            isExpanded && styles.navigationExpand,
          ])}
        >
          {NavRoutes.map((item) => {
            return (
              <NavButton
                key={item.key}
                href={item.path}
                onClick={
                  isExpanded && setIsExpand
                }
              >
                {item.title}
              </NavButton>
            );
          })}
          <NavButton
            outlined
            href="/birlikte-calisalim"
          >
            Birlikte Çalışalım
          </NavButton>
        </nav>
        <MenuButton
          isWhite
          isActive={isExpanded}
          onClick={setIsExpand}
        />
      </div>
    </header>
  );
}
