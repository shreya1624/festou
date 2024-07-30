import { HTMLProps } from "react";
//@ts-ignore ignored for leatherback import.
import styles from "./Flexbox.module.scss";
import React from "react";
interface FlexboxProps extends HTMLProps<HTMLDivElement> {}

export default function Flexbox({ style, children, ...props }: FlexboxProps) {
  const { flexDirection = "row", display = "flex", gap, ...rest } = style || {};

  let st = {
    display,
    flexDirection,
    ...rest,
  };

  let direction = flexDirection.includes("row") ? "row" : "column";
  let gapClassName = gap ? styles[`gap-${direction}-${gap}`] : undefined;
  return (
    <div
      style={st}
      {...props}
      className={gapClassName}
    >
      {children}
    </div>
  );
}
