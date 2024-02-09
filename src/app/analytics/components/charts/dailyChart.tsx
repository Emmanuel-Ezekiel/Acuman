import React from "react";
import dynamic from "next/dynamic";
import { generateDayWiseTimeSeries } from "@/utils/helpers";

// Import ReactApexChart dynamically
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
const DailyChart = ({color}: any) => {
  const [chartOptions, setChartOptions] = React.useState({});

  React.useEffect(() => {
    // Set your chart options here
    const options = {
      chart: {
        // sparkline: {
        //     enabled: false,
        // },
        // height: 'auto',
        //   sparkline: {
        //     enabled: true
        //  },
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      stroke: {
        curve: "smooth",
      },
      colors: [color],

      xaxis: {
        categories: [],
        axisTicks: {
          show: false,
        },
        lines: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          show: false,
        },
        show: false,
      },
        dataLabels: {
          enabled: false,
        },
      yaxis: {
        show: false, // Hide the y-axis
        labels: {
          show: false, // Hide the y-axis labels
        },
        lines: {
          show: false,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.6,
          opacityTo: 0.8,
        },
      },
      grid: {
        show: false, // Turn off the grid lines
      },
      legend: {
        show: false, // Turn off the legend
      },
    };
    setChartOptions(options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const series = [
    {
      name: "Active Users",
      data: [100, 350, 300, 239, 154, 345, 23, 34,300, 239, 154, 100, 399, 36, 54, 300, 239, 154, 345, 99, 100, 399, 36, 50,  23, 34,300, 239, 154, 100,],
    },
  ];

  return typeof window !== "undefined" ? (
    // <div className="apex">
    // <div className="apex">
    <ReactApexChart
      options={chartOptions}
      series={series}
      type="area"
      style={{ width: "100%", height: "224px" }}
    />
  ) : null;
};

export default DailyChart;
