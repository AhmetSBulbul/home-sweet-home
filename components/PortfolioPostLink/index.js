import React from "react";
import styles from "./index.module.css";
import cn from "classnames";
import Image from "next/image";
import BaseButton from "../BaseButton";
import { Arrow } from "../icons";

export default function PortfolioPostLink({
  children,
  folderName,
  title,
  className,
  ...props
}) {
  const featuredSrc = `/portfolio/${folderName}/featured.png`;
  const logoSrc = `/portfolio/${folderName}/logo.png`;
  return (
    <BaseButton className={styles.cardLink}>
      <div className={styles.featuredWrapper}>
        <Image
          src={featuredSrc}
          alt=""
          width={props.mobile ? 499 : 1920}
          height={1080}
          layout="responsive"
        />
        <div className={styles.logoWrapper}>
          <Image
            src={logoSrc}
            alt=""
            width={140}
            height={140}
            objectFit="contain"
          />
        </div>
      </div>
      <div className={styles.titleWrapper}>
        <h3>{title}</h3>
        <Arrow className={styles.arrow} />
      </div>
    </BaseButton>
  );
}
