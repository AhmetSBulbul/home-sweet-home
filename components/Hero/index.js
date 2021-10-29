import styles from "./index.module.css";
import MyHeadButFancy from "../MyHeadButFancy";
import * as Icon from "../icons";
import ThemeButton from "../ThemeButton";
import {
  ContactInfo,
  Routes,
} from "../../constants";

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
          <h2 className="font-display uppercase font-bold text-secondary-lightest desktop:mb-2">
            Merhaba, Ben Ahmet Safa Bülbül.
          </h2>
          <h1 className={styles.introDisplay}>
            Mobil Uygulama & Web Arayüz Yazılım
            Geliştiricisiyim.
          </h1>

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
