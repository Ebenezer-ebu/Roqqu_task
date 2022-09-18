import Chart from "react-apexcharts";
import { state } from "../../utils/chart_details";

const MyChart = () => {
  return (
    <Chart
      options={state.options}
      series={state.series}
      type="candlestick"
      height={350}
      width="100%"
    />
  );
};

export default MyChart;
