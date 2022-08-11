import styled from "styled-components";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

function BarChart({
  labels,
  datasetLabels,
  dataset1,
  dataset2,
  dataset3,
  chartTitle,
}) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: chartTitle,
      },
    },
  };
  console.log(dataset3);
  const data = {
    labels,
    datasets: [
      {
        label: datasetLabels[0],
        data: dataset1,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: datasetLabels[1],
        data: dataset2,
        backgroundColor: "rgba(105, 175, 102, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
}

export default BarChart;

const BarChartContainer = styled.div``;
