import React from "react";

import styles from "./Counter.module.css";

type Props = Readonly<{
  testid: string;
  label: string;
  text: string;
  onClick: () => void;
  isAsync?: boolean;
}>;

export function AriaButton({ testid, label, text, onClick, isAsync=false }: Props) {
  return (
    <button
      data-testid={testid}
      className={isAsync ? styles.asyncButton : styles.button}
      aria-label={label}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
