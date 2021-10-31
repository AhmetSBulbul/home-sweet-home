import styles from "./index.module.css";
import Button from "../Button";
import React, { useState } from "react";
import cn from "classnames";
import Form from "./__Form";
import useLockBodyScrollToggle from "../../hooks/useLockBodyScrollToggle";

const ChatSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
    />
  </svg>
);

export default function FloatContact() {
  const [isModalOpen, setModalOpen] =
    useState(false);

  useLockBodyScrollToggle(isModalOpen);

  return (
    <>
      <Button
        className={styles.floatBtn}
        onClick={() => setModalOpen(true)}
      >
        <ChatSvg />
        Bilgi Talebi
      </Button>
      {isModalOpen && (
        <Form
          clickOuter={() => setModalOpen(false)}
        />
      )}
    </>
  );
}
