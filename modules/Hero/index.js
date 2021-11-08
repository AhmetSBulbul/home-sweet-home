import styles from "./index.module.css";
import { MyHeadButFancy } from "../../components/figures";
import * as Icon from "../../components/icons";
import IconButton from "../../components/IconButton";
import {
  ContactInfo,
  Routes,
} from "../../constants";

const HeroModule = ({ children }) => {
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
            <IconButton href={ContactInfo.github}>
              <Icon.Github />
            </IconButton>
            <IconButton
              href={ContactInfo.linkedin}
            >
              <Icon.Linkedin />
            </IconButton>
            <IconButton
              href={ContactInfo.twitter}
            >
              <Icon.Twitter />
            </IconButton>
            <IconButton
              href={ContactInfo.instagram}
            >
              <Icon.İnstagram />
            </IconButton>
            <IconButton
              href={ContactInfo.codepen}
            >
              <Icon.Codepen />
            </IconButton>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default HeroModule;
