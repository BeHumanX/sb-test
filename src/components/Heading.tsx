import React from "react";
import '../stories/heading.css';

export interface HeadingProps {
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
}

export const Heading = ({
  size = "large",
  backgroundColor,
  label,
  ...props
}: HeadingProps) => {
  return (
    <h1
      className={["storybook-heading", `storybook-heading--${size}`].join(" ")}
      style={{backgroundColor}}
      {...props}
    >
      {label}
    </h1>
  );
};
