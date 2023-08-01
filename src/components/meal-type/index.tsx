import { Box, Typography, styled } from "@mui/material";
import InlineSVG from "react-inlinesvg";

const MealTypeButton = styled(Box)(
  () => `
  clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
  background: linear-gradient(155.89deg, #FFCC21 8.26%, #FF963C 91.18%);
  width: 116px;
  height: 134px;
  transform: rotate(0);
  color: #fff;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  &.selected {
    background: linear-gradient(155.89deg, #ff2121 8.26%, #ff963c80 91.18%);
  }
  `
);

interface IMealType {
  icon: string;
  label: string;
  selected: boolean;
}

const MealType = ({ icon, label, selected = false }: IMealType) => {
  return (
    <MealTypeButton className={selected ? "selected" : ""} >
      <InlineSVG src={icon} />
      <Typography sx={{ fontSize: 20, lineHeight: "24px" }}>{label}</Typography>
    </MealTypeButton>
  );
};

export default MealType;
