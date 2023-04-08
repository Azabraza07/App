import React, { HTMLAttributes, ReactNode } from "react";
import styles from "./Paragraph.module.scss";
import cn from "classnames";

interface IParagraph {
  size: "medium" | "small" | "big";
  children: ReactNode;
  className?: string;
}

const Paragraph = ({ size, children, className  }: IParagraph) => {
  return (
    <p
      className={cn(styles.p, {
        [styles.medium]: size == "medium",
        [styles.small]: size == "small",
        [styles.big]: size == "big",
      })}
    >
      {children}
    </p>
  );
};

export default Paragraph;
