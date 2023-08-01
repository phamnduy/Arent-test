import { Box, Typography, styled } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";


import MainPhoto from "../../assets/images/photos/main_photo.svg";
const LogoImage = styled("img")(
  () => `
  width: 100%;
  height: 383px;
  object-fit: cover;
  `
);
const ProgressBox = styled(Box)(
  () => `
  position: absolute;
  z-index: 10;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  & .MuiCircularProgress-root {
    color: white
  }
  `
);
const ProgessText = styled(Typography)(
  () => `
  color: white;
  font-size: 25px;
  text-shadow: 0px 0px 6px #FC7400;
  line-height: 30px;
  `
);
const AchievementRate = () => {
  return (
    <Box sx={{ position: "relative", height: "100%" }}>
      <LogoImage src={`${MainPhoto}`} />
      <ProgressBox>
        <CircularProgress
          size={181}
          variant="determinate"
          value={75}
          color={"warning"}
          thickness={1}
        />
        <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        >
          <Box>
            <ProgessText
              sx={{ fontSize: 18, lineHeight: "22px" }}
              mr={0.5}
              variant="caption"
              color="white"
            >{"05/21"}</ProgessText>
            <ProgessText
              variant="caption"
              color="white"
            >{`${75}%`}</ProgessText>
          </Box>
        </Box>
      </ProgressBox>
    </Box>
  );
};

export default AchievementRate;
