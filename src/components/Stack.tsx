import React from "react";
import "../stories/stack.css";

export interface StackProps {
  wrap: boolean;
  spacing: number;
  direction: "row" | "column";
  borderRadius:number;
  numberOfChildren: number;
}

export const Stack = ({
  wrap,
  spacing,
  direction,
  borderRadius,
  numberOfChildren,
}: StackProps) => {
  const mode = direction
    ? "storybook-stack--" + direction
    : "storybook--stack--secondary";
  const wrapMode = wrap ? "storybook-stack--wrap" : "";
  return (
    <div
      className={["storybook-stack", mode, wrapMode].join(" ")}
      style={{ gap: spacing }}
    >
      {[...Array(numberOfChildren).keys()].map((n) => (
        <div
          key={n}
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: borderRadius, // Apply borderRadius here to the child div
          }}
        >
          {n + 1}
        </div>
      ))}
    </div>
  );
};
