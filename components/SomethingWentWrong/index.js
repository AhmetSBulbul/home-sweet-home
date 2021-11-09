import React from "react";
import styles from "./index.module.css";
import cn from "classnames";
import { Head } from "../icons";

export default function SomethingWentWrong({
  message,
  ...props
}) {
  return (
    <div className="content-container split-pair py-14 border-2 border-black">
      <div className="flex-1 flex">
        <Head className={styles.headIcon} />
      </div>
      <div className="flex-1 flex">
        <span className={styles.errorMessage}>
          {message}
        </span>
      </div>
    </div>
  );
}
