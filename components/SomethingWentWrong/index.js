import React from "react";
import styles from "./index.module.css";
import cn from "classnames";
import { Head } from "../icons";

export default function SomethingWentWrong({
  message,
  ...props
}) {
  return (
    <div className="content-container flex">
      <Head className={styles.headIcon} />

      <span className={styles.errorMessage}>
        {message
          ? message
          : "Hay aksi, bir şeyler ters gitti!"}
      </span>
    </div>
  );
}
