import styles from "./index.module.css";
import MyHeadButFancy from "../MyHeadButFancy";
import * as Icon from "../icons";
import ThemeButton from "../ThemeButton";
import { ContactInfo } from "../../constants";

const ContactLink = ({ href, children }) => (
  <a
    href={href}
    className="transition-transform transform hover:scale-110"
    target="_blank"
    rel="noreferrer"
  >
    {children}
  </a>
);

const SectionHero = ({ children }) => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.fancySide}>
          <MyHeadButFancy />
        </div>
        <div className={styles.intro}>
          <h2 className="link desktop:text-2xl">
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
            <ContactLink
              href={ContactInfo.github}
            >
              <Icon.Github />
            </ContactLink>
            <ContactLink
              href={ContactInfo.linkedin}
            >
              <Icon.Linkedin />
            </ContactLink>
            <ContactLink
              href={ContactInfo.twitter}
            >
              <Icon.Twitter />
            </ContactLink>
            <ContactLink
              href={ContactInfo.instagram}
            >
              <Icon.İnstagram />
            </ContactLink>
            <ContactLink
              href={ContactInfo.codepen}
            >
              <Icon.Codepen />
            </ContactLink>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default SectionHero;
