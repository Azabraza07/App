import React, { ReactNode } from "react";
import styles from "./Tag.module.scss";
import cn from "classnames";

interface ITag {
  color?: "gray" | "ghost" | "red" | "primary" | "green";
  children: ReactNode;
  href?: string;
}

const Tag = ({ color, children, href }: ITag) => {
  return (
    <div
      className={cn(styles.tag, {
        [styles.ghost]: color == "ghost",
        [styles.green]: color == "green",
        [styles.gray]: color == "gray",
        [styles.red]: color == "red",
        [styles.primary]: color == "primary",
      })}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};

export default Tag;
