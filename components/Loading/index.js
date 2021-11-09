import React from "react";
import styles from "./index.module.css";
import cn from "classnames";
import { Head } from "../icons";

export default function Loading({
  children,
  ...props
}) {
  return (
    <div className="relative text-4xl">
      <Head className="animate-ping" />
      <Head className="absolute top-0" />
    </div>
  );
}
