import React from "react";
import Stats from "../Stats";
import DashboardTable from "../DashboardTable";
import StackBarChart from "../charts/StackBarChart";
import BarChart from "../charts/BarChart";
import LineChart from "../charts/LineChart";
import { cardsData, chartsData } from "../types/Types";
import { getDashboardMetrics } from "@/app/fetch";

const MainContent = async () => {
  const data: chartsData = await getDashboardMetrics();

  const lineChartData = [
    data.lineChart.Q1,
    data.lineChart.Q2,
    data.lineChart.Q3,
    data.lineChart.Q4,
  ];
  const stackedBarChartData = [
    [
      data.stackedBarChart.pickedUp?.Q1,
      data.stackedBarChart.shipped.Q1,
      data.stackedBarChart.delivered.Q1,
    ],
    [
      data.stackedBarChart.pickedUp.Q2,
      data.stackedBarChart.shipped.Q2,
      data.stackedBarChart.delivered.Q2,
    ],
    [
      data.stackedBarChart.pickedUp.Q3,
      data.stackedBarChart.shipped.Q3,
      data.stackedBarChart.delivered.Q3,
    ],
    [
      data.stackedBarChart.pickedUp.Q4,
      data.stackedBarChart.shipped.Q4,
      data.stackedBarChart.delivered.Q4,
    ],
  ];

  const barChartData = [
    [data.barChart.Q1.lastYear, data.barChart.Q1.currentYear],
    [data.barChart.Q2.lastYear, data.barChart.Q2.currentYear],
    [data.barChart.Q3.lastYear, data.barChart.Q3.currentYear],
    [data.barChart.Q4.lastYear, data.barChart.Q4.currentYear],
  ];

  const cardsData: cardsData = {
    totalOrders: data.cards.totalOrders,
    unprocessedOrders: {
      currentYear: data.cards.unprocessedOrders.thisYear,
      absoluteIncrease:
        data.cards.unprocessedOrders.thisYear -
        data.cards.unprocessedOrders.lastYear,
      relativeIncrease:
        data.cards.unprocessedOrders.thisYear /
        data.cards.unprocessedOrders.lastYear,
    },
    operationalCosts: {
      currentYear: data.cards.operationalCosts.thisYear,
      absoluteIncrease:
        data.cards.operationalCosts.thisYear -
        data.cards.operationalCosts.lastYear,
      relativeIncrease:
        data.cards.operationalCosts.thisYear /
        data.cards.operationalCosts.lastYear,
    },
    revenue: {
      currentYear: data.cards.revenue.thisYear,
      absoluteIncrease:
        data.cards.revenue.thisYear - data.cards.revenue.lastYear,
      relativeIncrease:
        data.cards.revenue.thisYear / data.cards.revenue.lastYear,
    },
  };

  return (
    <div className="grid px-2">
      {/* <Toast/> */}
      <Stats data={cardsData} />
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
