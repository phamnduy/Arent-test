import { Box, Typography, styled } from "@mui/material";
import { colors } from "../../theme/schemes/PureLightTheme";

const Context = styled(Typography)(() => ({
  color: "white",
  fontSize: "14px",
  background: colors.alpha.orange[100],
  width: "200px",
  textAlign: "center",
}));

const Title = styled(Typography)(() => ({
  color: colors.alpha.yellow[100],
  fontSize: "25px",
  textAlign: "center",
  marginBottom: "5px",
}));

const Image = styled("img")(
  () => `
  height: 100%;
  object-fit: cover;
  object-position: left;
  width: 100%;
  filter: brightness(30%) grayscale(100%);
  `,
);
const Record = ({ title, context, image }: { title?: string; context?: string; image?: any }) => {
  return (
    <Box sx={{ position: "relative", border: "30px solid #FFCC21", width: "15vw", height: "15vw" }}>
      <Image src={image} alt="" />
      <Box sx={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", position: "absolute" }}>
        <Title>{title}</Title>
        <Context>{context}</Context>
      </Box>
    </Box>
  );
};

export default Record;
