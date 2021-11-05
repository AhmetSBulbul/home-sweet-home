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
      <div className="content-container split-pair py-24 pb-32 tablet:pb-48 items-center">
        <div className={styles.fancySide}>
          <MyHeadButFancy />
        </div>
        <div className={styles.intro}>
          <h1 className="text-xl text-secondary-lightest">
            Freelance Yazılım Geliştirici
          </h1>
          <h2 className="title text-white">
            Mobil Uygulama & Web Arayüzü Yazılım
            Geliştiricisi.
          </h2>

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
