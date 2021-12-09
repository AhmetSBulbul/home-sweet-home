import React from "react";
import styles from "./index.module.css";
import cn from "classnames";
import { Live } from "../icons";

export default function LiveSignal({
  className,
}) {
  return (
    <div
      className={cn([
        styles.wrapper,
        styles.live,
        className,
      ])}
    >
      <Live /> Online
    </div>
  );
}
