import { Box } from "@mui/material";
import CustomChart from "../../components/custom-chart";

const labels = ["6月", "7月", "8月", "9月", "10月", "11月", "12月", "1月", "2月", "3月", "4月", "5月"];
const dataSet1 = [100, 300, 400, 400, 500, 600, 800, 800, 900, 1000, 1000, 1100];
const dataSet2 = [300, 400, 500, 600, 700, 600, 700, 800, 900, 1200, 1200, 1200];

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

export const options = {
  responsive: true,
  layout: {
    autoPadding: false,
  },
  plugins: {
    legend: {
      position: "top" as const,
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
    customCanvasBackgroundColor: {
      color: "#2E2E2E",
    },
  },
  scales: {
    y: {
      ticks: {
        display: false,
      },
      grid: {
        drawBorder: false,
        display: false,
      },
    },
    x: {
      grid: {
        color: "white",
        drawBorder: false,
      },
      ticks: {
        color: "white",
      },
    },
  },
};

const BodyFatPercentage = () => {
  return (
    <Box sx={{ backgroundColor: "#2E2E2E", padding: "15px 90px 18px 50px" }}>
      <CustomChart backgroundColor={"#2E2E2E"} data={data} height="350px"/>
    </Box>
  );
};

export default BodyFatPercentage;
