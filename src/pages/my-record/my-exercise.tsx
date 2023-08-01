import { Box, Grid, Typography } from "@mui/material";
import { colors } from "../../theme/schemes/PureLightTheme";

const ExerciseDetail = () => {
  return (
    <Grid container color={"white"}>
      <Grid item marginRight={1}>
        ●
      </Grid>
      <Grid item xs={9}>
        <Box fontSize={15} marginBottom={"5px"}>家事全般（立位・軽い）</Box>
        <Box fontSize={15} color={colors.alpha.yellow[100]}>26kcal</Box>
      </Grid>
      <Grid item marginRight={1} color={colors.alpha.yellow[100]} fontSize={"18px"}>
        10 mins
      </Grid>
    </Grid>
  );
};

const MyExercise = () => {
  return (
    <Box sx={{ background: colors.alpha.black[100], padding: 3 }}>
      <Box display={"flex"} color={"white"} alignItems={"center"} mb={2}>
        <Typography fontSize={15} lineHeight={"18px"} mr={3}>MY <br/>EXERCISE</Typography>
        <Typography sx={{ fontSize: "22px" }}>2021.05.21</Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          columnGap: 3,
          rowGap: 1,
          gridTemplateColumns: "repeat(2, 1fr)",
          overflow: "auto",
          height: "300px",
          scrollbarWidth: "thin",
          "&::-webkit-scrollbar": {
            width: "0.4em",
          },
          "&::-webkit-scrollbar-track": {
            background: "#f1f1f1",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: colors.alpha.yellow[100],
          },
        }}
      >
        {[...Array(50)].map((index) => {
          return (
            <Box key={index}>
              <ExerciseDetail />
              <hr />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default MyExercise;
