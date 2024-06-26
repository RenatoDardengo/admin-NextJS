import React, { MouseEventHandler, ReactNode, ChangeEvent } from "react";
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

export type InputTextProps ={
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string | number|null;
  defaultValue?: string | number;
  id?: string;
  type?: string;
  height?: number;
  mask?: string;

}

export type SelectProps= {
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string | number; label: string }[]; // Array de opções para o select
  placeholder?: string;
  name?: string;
  value?: string | number;
  defaultValue?: string | number;
  id?: string;
  height?: number;
}