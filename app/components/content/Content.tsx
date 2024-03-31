import React from "react";
import Stats from "../Stats";
import TableVisuals from "../TableVisuals";
import StackBarChart from "../charts/StackBarChart";
import BarChart from "../charts/BarChart";
import LineChart from "../charts/LineChart";
import Toast from "../Toast";

const Content = () => {
  return (
    <div className="grid">
      <Toast/>
      <Stats />
      <div className="grid grid-cols-2">
        <div className="pt-2">
          <StackBarChart />
        </div>
        <div className="grid justify-items-end pt-2">
          <BarChart />
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="pt-2">
          <TableVisuals />
        </div>
        <div className="grid justify-items-end pt-2">
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default Content;
