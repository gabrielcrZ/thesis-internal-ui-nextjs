"use client";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function StackBarChart(props: any) {
  const options = {
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const labels = ["Q1", "Q2", "Q3", "Q4"];

  const data = {
    labels,
    datasets: [
      {
        label: "Picked up",
        data: labels.map((el, index) => {
          return props.data[index][0];
        }),
        backgroundColor: "rgba(255, 99, 132, 1)",
      },
      {
        label: "Shipped",
        data: labels.map((el, index) => {
          return props.data[index][1];
        }),
        backgroundColor: "rgba(53, 162, 235, 1)",
      },
      {
        label: "Delivered",
        data: labels.map((el, index) => {
          return props.data[index][2];
        }),
        backgroundColor: "rgba(235, 162, 235, 1)",
      },
    ],
  };

  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
}

export default StackBarChart;
