import React from "react";
import styles from "./index.module.css";
import cn from "classnames";

export default function RadioField({
  children,
  name,
  id,
  ...props
}) {
  return (
    <div className={styles.radioWrap}>
      <input
        type="radio"
        name={name}
        id={id}
        className={styles.fieldRadio}
        {...props}
      />
      <label
        htmlFor={id}
        className={styles.label}
      >
        {props.value ? props.value : children}
      </label>
    </div>
  );
}
