import { Box, Typography, styled } from "@mui/material";
import { colors } from "../../theme/schemes/PureLightTheme";

const Context = styled(Typography)(() => ({
  color: "white",
  fontSize: "14px",
  textAlign: "center",
}));

const Title = styled(Typography)(() => ({
  color: colors.alpha.yellow[100],
  fontSize: "25px",
  textAlign: "center",
  marginBottom: "5px",
}));

const Recommend = ({ title, context }: { title?: any; context?: string }) => {
  return (
    <Box sx={{ background: colors.alpha.black[100], py: 4 }}>
      <Title>{title}</Title>
      <hr style={{ width: "30%" }} />
      <Context>{context}</Context>
    </Box>
  );
};

export default Recommend;
