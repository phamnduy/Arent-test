import { Box, Typography, styled, Button } from "@mui/material";
import CustomChart from "../../components/custom-chart";
import { useState } from "react";
// import Button from "@mui/material-next/Button";

const labels = ["6月", "7月", "8月", "9月", "10月", "11月", "12月", "1月", "2月", "3月", "4月", "5月"];
const dataSet1 = [100, 300, 400, 400, 500, 600, 800, 800, 900, 1000, 1000, 1100];
const dataSet2 = [300, 400, 500, 600, 700, 600, 700, 800, 900, 1200, 1200, 1200];

const ChartWrapper = styled(Box)(
  () => `
  & .chart-title {
    font-size: 15px;
    font-weight: 400;
    color: #fff;
    line-height: 18px;
  };
  & .chart-title-date {
    font-size: 22px;
    font-weight: 400;
    color: #fff;
    line-height: 27px;
  }
  `
);

const FilterButton = styled(Button)(
  () => `
  color: #FFCC21;
  background: #FFF;
  border-radius: 18px;
  width: 56px;
  height: 24px;
  padding: 0;
  font-size: 15px;
  margin-right: 16px;
  font-weight: 400;
  &.active {
    background: #FFCC21;
    color: #fff;
  }
  `
);

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: dataSet1,
      borderColor: "#FFCC21",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: dataSet2,
      borderColor: "#8FE9D0",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const filterTypes = [
  {
    title: "日",
    type: "day"
  },
  {
    title: "週",
    type: "week"
  },
  {
    title: "月",
    type: "month"
  },
  {
    title: "年",
    type: "year"
  }
];

const ChartRecord = () => {
  const [isActive, setIsActtive] = useState("day");
  return (
  <ChartWrapper sx={{ backgroundColor: "#414141", padding: "20px 50px" }}>
    <Box mb={1} display="flex">
      <Box mr={5}>
        <Typography className="chart-title">BODY</Typography>
        <Typography className="chart-title">RECORD</Typography>
      </Box>
      <Typography className="chart-title-date">2021.05.21</Typography>
    </Box>
    <CustomChart data={data} height="350px" />
    <Box display="flex" mt={1}>
      {
        filterTypes.map((item) =>
        <FilterButton
          key={item.type}
          className={isActive === item.type ? "active" : ""}
          color={"warning"}
          onClick={() => setIsActtive(item.type)}
        >
          {item.title}
        </FilterButton>
        )
      }
    </Box>
  </ChartWrapper>
  );
};

export default ChartRecord;
