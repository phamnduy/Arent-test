import { Box, Grid } from "@mui/material";
import AchievementRate from "./achievement-rate";
import BodyFatPercentage from "./body-fat-percentage";
import MealHistoty from "./meal-history";

const TopPage = () => {
  return (
    <Box>
        <Grid container>
          <Grid item xs={5}>
            <AchievementRate />
          </Grid>
          <Grid item xs={7}>
            <BodyFatPercentage />
          </Grid>

        </Grid>
        <Box sx={{ padding: "30px 160px" }}>
            <Box>
              <MealHistoty />
            </Box>

          </Box>
    </Box>
  );
};

export default TopPage;
