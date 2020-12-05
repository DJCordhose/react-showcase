import React from "react";

type Props = { title: string };

export default function LoadingIndicator({ title }: Props) {
  return (
        <h1>{title}</h1>
  );
}