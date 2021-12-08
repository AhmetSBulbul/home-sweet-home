import React from "react";
import styles from "./index.module.css";
import cn from "classnames";

export default function Mockup({
  children,
  ...props
}) {
  return (
    <div
      className={cn([
        styles.device,
        props.desktop && styles.monitor,
      ])}
    >
      <div
        className={cn([
          styles.screen,
          props.desktop && styles.desktop,
          props.tablet && styles.tablet,
          props.mobile && styles.mobile,
        ])}
      />
      {props.desktop && (
        <div className={styles.feet} />
      )}
    </div>
  );
}
