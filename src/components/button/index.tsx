import { Button, ButtonProps, styled } from "@mui/material";

const ButtonWrapper = styled(Button)(
  () => `
  background: linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%);
  color: #fff;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  width: 296px;
  height: 56px;
  border-radius: 5px;
  `
);

const AppButton = (props: ButtonProps) => {
  return (
    <ButtonWrapper {...props}>{props.children}</ButtonWrapper>
  );
};

export default AppButton;
