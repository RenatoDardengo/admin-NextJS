import React, { MouseEventHandler, ReactNode } from "react";
export type SidbarProps={
    collapsed: boolean;
    onItemClick: (menuItem: string) => void;
  }

  export type  NavbarProps ={
    toggleLightMode: () => void;
    onCollapse: () => void;
    lightMode:boolean,
  }

export type ButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  label?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  icon?: ReactNode;

}