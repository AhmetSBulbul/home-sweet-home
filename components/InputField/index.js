import React from "react";
import styles from "./index.module.css";
import cn from "classnames";

export default function InputField({
  children,
  name,
  isRequired = true,
  textArea = false,
  ...props
}) {
  return (
    <div className={styles.wrap}>
      <label
        htmlFor={name}
        className={styles.label}
      >
        {children}
        {isRequired && (
          <span className="text-messaging-warning">
            *
          </span>
        )}
      </label>
      {textArea ? (
        <textarea
          name={name}
          className={styles.fieldArea}
          {...props}
        />
      ) : (
        <input
          name={name}
          className={styles.field}
          {...props}
        />
      )}
    </div>
  );
}
