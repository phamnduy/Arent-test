import { Box, Grid } from "@mui/material";
import Record from "../../components/record";
import body from "../../assets/images/MyRecommend-1.jpg";
import exercise from "../../assets/images/MyRecommend-2.jpg";
import diary from "../../assets/images/MyRecommend-3.jpg";
import ChartRecord from "./chart-record";
import MyExercise from "./my-exercise";
import MyDiary from "./my-diary";

const MyRecord = () => {
  return (
    <Box mt={"50px"} mx={"15%"} mb={"200px"}>
      <Grid container justifyContent={"space-between"} width={"100%"}>
        <Record image={body} context="自分のカラダの記録" title="BODY RECORD" />
        <Record image={exercise} context="自分の運動の記録" title="MY EXERCISE" />
        <Record image={diary} context="自分の日記" title="MY DIARY" />
      </Grid>
      <Box my={7}>
        <ChartRecord />
      </Box>
      <Box>
        <MyExercise />
      </Box>
      <Box my={7}>
        <MyDiary />
      </Box>
    </Box>
  );
};

export default MyRecord;
