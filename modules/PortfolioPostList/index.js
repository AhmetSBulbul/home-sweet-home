import React from "react";
import styles from "./index.module.css";
import cn from "classnames";
import PortfolioPostLink from "../../components/PortfolioPostLink";

export default function PortfolioPostList({
  children,
  worksPostList,
  ...props
}) {
  return (
    <section className="content-container py-12">
      <div className={styles.listLayout}>
        {worksPostList.map(
          ({
            id,
            folderName,
            title,
            platform,
          }) => (
            <div
              key={id}
              className={cn(
                platform === "web" &&
                  styles.span2x
              )}
            >
              <PortfolioPostLink
                title={title}
                folderName={folderName}
                href={`/portfolyo/${id}`}
                mobile={platform !== "web"}
              />
            </div>
          )
        )}
      </div>
    </section>
  );
}
