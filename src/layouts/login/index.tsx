import React from "react";
import { Props } from "../../utils/utils";
import { styled } from "@mui/material";
import Logo from "../../assets/images/icons/logo.png";

const MainContent = styled("div")(
  () => `
    background-color: #f2f5f9;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
`
);

const LogoImage = styled("img")(
  () => `
  width: 200px
  `
);
export const LoginLayout: React.FC<Props> = ({ children }) => {
  return (
    <MainContent>
      <LogoImage src={Logo} alt="logo" />
      {children}
    </MainContent>
  );
};
