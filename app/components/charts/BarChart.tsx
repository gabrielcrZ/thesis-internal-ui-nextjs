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

function BarChart(props: any) {
  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const labels = ["Q1", "Q2", "Q3", "Q4"];

  const data = {
    labels,
    datasets: [
      {
        label: `${new Date().getFullYear() - 1}`,
        data: labels.map((el, index) => {
          return props.data[index][0];
        }),
        backgroundColor: "rgba(255, 99, 132, 1)",
      },
      {
        label: `${new Date().getFullYear()}`,
        data: labels.map((el, index) => {
          return props.data[index][0];
        }),
        backgroundColor: "rgba(53, 162, 235, 1)",
      },
    ],
  };

  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
}

export default BarChart;
