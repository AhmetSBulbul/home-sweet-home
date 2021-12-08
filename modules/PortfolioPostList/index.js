import React from "react";
import styles from "./index.module.css";
import cn from "classnames";
import PortfolioPostLink from "../../components/PortfolioPostLink";

export default function PortfolioPostList({
  children,
  ...props
}) {
  return (
    <section className="content-container">
      <div className={styles.listLayout}>
        <div className={styles.span2x}>
          <PortfolioPostLink
            title="Rotasız Karavan"
            folderName="rotasiz-karavan"
          />
        </div>
        <div>
          <PortfolioPostLink
            title="Qupo Business"
            folderName="qupo-business"
            mobile
          />
        </div>
        <div>
          <PortfolioPostLink
            title="Coffee Crafter"
            folderName="coffee-crafter"
            mobile
          />
        </div>
        <div className={styles.span2x}>
          <PortfolioPostLink
            title="Kuzey Mutfak Aydin"
            folderName="kuzey-mutfak-aydin"
          />
        </div>
        <div className={styles.span2x}>
          <PortfolioPostLink
            title="Tutkal.app"
            folderName="tutkal-app"
          />
        </div>
        <div className={styles.span2x}>
          <PortfolioPostLink
            title="Home Sweet Home"
            folderName="home-sweet-home"
          />
        </div>
      </div>
    </section>
  );
}
