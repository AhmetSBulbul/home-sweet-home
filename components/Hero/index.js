import styles from "./index.module.css";
import MyHeadButFancy from "../MyHeadButFancy";
import * as Icon from "../icons";
import ThemeButton from "../ThemeButton";

const SectionHero = ({ children }) => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.fancySide}>
          <MyHeadButFancy />
        </div>
        <div className={styles.intro}>
          <h2 className={styles.greetings}>
            Merhaba, ben Ahmet Safa Bülbül.
          </h2>
          <h1 className={styles.introDisplay}>
            MOBİL UYGULAMA & WEB ARAYÜZÜ YAZILIM
            GELİŞTİRİCİSİYİM
          </h1>
          <ThemeButton secondary className="mt-5">
            Bİrlİkte çalışalım
          </ThemeButton>
          <div className={styles.socialIcons}>
            <Icon.Github />
            <Icon.Linkedin />
            <Icon.Twitter />
            <Icon.İnstagram />
            <Icon.Codepen />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default SectionHero;
