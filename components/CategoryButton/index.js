import React from "react";
import styles from "./index.module.css";
import cn from "classnames";
import BaseButton from "../BaseButton";

export default function CategoryButton({
  category,
  isActive = "false",
  ...props
}) {
  return (
    <BaseButton
      className={cn(
        styles.categoryBtn,
        isActive && styles.activeCategoryBtn
      )}
      {...props}
    >
      {category.replace(/-/g, " ")}
    </BaseButton>
  );
}
