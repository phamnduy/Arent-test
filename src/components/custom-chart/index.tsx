import { Box } from "@mui/material";
import { Line } from "react-chartjs-2";
// import faker from "faker";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement,
  Title, Tooltip, Legend
);

const plugin = {
  id: "customCanvasBackgroundColor",
  beforeDraw: (chart: any, args: any, options: any) => {
    const { ctx } = chart;
    ctx.save();
    ctx.globalCompositeOperation = "destination-over";
    ctx.fillStyle = options.color || "#99ffff";
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  },
};



const CustomChart = ({
  data,
  height,
  customOption,
  backgroundColor = "#414141"
}: { data: any; height?: string; customOption?: any, backgroundColor?: string }) => {

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    tension: 0.4,
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
        color: backgroundColor,
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
          color: "#777777",
          drawBorder: false,
        },
        ticks: {
          color: "white",
        },
      },
    },
  };
  return (
    <Box sx={{ backgroundColor: backgroundColor, height: height ?? "auto" }}>
      <Line options={ customOption??  options } data={data} plugins={[plugin]} />
    </Box>
  );
};

export default CustomChart;
