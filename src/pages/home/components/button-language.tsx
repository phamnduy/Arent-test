import React from "react";
import { IClassNameProp } from "../../../types";
import { Button } from "@mui/material";
// import { Button } from 'src/components';

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, IClassNameProp {
  handleClick: (e: any) => void;
  lng: any;
}
export const ButtonLanguage: React.FC<IButtonProps> = ({ children, handleClick, lng }) => {
  function handChangeLanguage() {
    handleClick(lng);

  }

  return <Button onClick={handChangeLanguage}>{children}</Button>;
};
