import styles from "./index.module.css";
import SectionHero from "../Hero";
import Header from "../Header";
import Image from "next/image";
import Stars from "../../public/stars-background.png";
import cn from "classnames";

const LandingPageParallax = ({ children }) => {
  return (
    <div className={styles.baseWrapper}>
      <div className={styles.parallaxContainer}>
        <div className={styles.wrapper}>
          <div
            className={cn([
              styles.ground,
              styles.background,
            ])}
          >
            <Image
              src={Stars}
              alt="decoration stars png"
              layout="fill"
              objectFit="contain"
              className={styles.shootingStars}
            />
            <Image
              src={Stars}
              alt="decoration stars png"
              layout="intrinsic"
              objectFit="cover"
              className={
                styles.shootingStarsReverse
              }
            />
          </div>
          <div
            className={cn([
              styles.ground,
              styles.hero,
            ])}
          >
            <SectionHero />
          </div>
          <div
            className={cn([
              styles.ground,
              styles.foreground,
            ])}
          >
            <div
              className={styles.foregroundContent}
            >
              <div className={styles.wave} />
              <div className={styles.wave} />
              <div className="flex h-screen w-full absolute top-full bg-white">
                Hello
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageParallax;
