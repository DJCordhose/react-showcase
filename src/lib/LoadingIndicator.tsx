import React from "react";

type Props = Readonly<{ title: string }>;

export default function LoadingIndicator({ title }: Props) {
  return (
        <h1>{title}</h1>
  );
}