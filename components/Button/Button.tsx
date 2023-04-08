import React, { ReactNode } from "react";
import styles from "./Button.module.scss";
import cn from "classnames";
import arrowIcon from "../../public/arrow-right.svg";
import Image from "next/image";

interface IButton {
  apperance: "primary" | "ghost";
  children: ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ apperance, children, onClick, ...props }: IButton) => {
  return (
    <>
      <button
        className={cn(styles.button, {
          [styles.primary]: apperance == "primary",
          [styles.ghost]: apperance == "ghost",
        })}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
