import React from "react";
import Stats from "../Stats";
import DashboardTable from "../DashboardTable";
import StackBarChart from "../charts/StackBarChart";
import BarChart from "../charts/BarChart";
import LineChart from "../charts/LineChart";
import { getDashboardMetrics } from "@/app/requests/Requests";

const MainContent = async () => {
  const data = await getDashboardMetrics();
  // console.log(data);
  
  const lineChartData = [
    Math.random() * 100 + 500,
    Math.random() * 100 + 500,
    Math.random() * 100 + 500,
    Math.random() * 100 + 500,
  ];
  const stackedBarChartData = [
    [
      Math.random() * 100 + 500,
      Math.random() * 100 + 500,
      Math.random() * 100 + 500,
    ],
    [
      Math.random() * 100 + 500,
      Math.random() * 100 + 500,
      Math.random() * 100 + 500,
    ],
    [
      Math.random() * 100 + 500,
      Math.random() * 100 + 500,
      Math.random() * 100 + 500,
    ],
    [
      Math.random() * 100 + 500,
      Math.random() * 100 + 500,
      Math.random() * 100 + 500,
    ],
  ];

  const barChartData = [
    [Math.random() * 1000 + 500, Math.random() * 1000 + 500],
    [Math.random() * 1000 + 500, Math.random() * 1000 + 500],
    [Math.random() * 1000 + 500, Math.random() * 1000 + 500],
    [Math.random() * 1000 + 500, Math.random() * 1000 + 500],
  ];

  return (
    <div className="grid px-2">
      {/* <Toast/> */}
      <Stats />
      <div className="grid grid-cols-2 mt-2">
        <div className="grid pt-2">
          <StackBarChart data={stackedBarChartData} />
          {/* Invisible element for chart resizing bug */}
          <div className="opacity-0">.</div>
        </div>
        <div className="grid pt-2 justify-items-start">
          <BarChart data={barChartData} />
        </div>
      </div>
      <div className="grid grid-cols-2 mt-2">
        <div className="grid pt-2 content-center">
          <DashboardTable />
        </div>
        <div className="grid pt-2 pl-2.5 justify-items-start">
          <LineChart data={lineChartData} />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
