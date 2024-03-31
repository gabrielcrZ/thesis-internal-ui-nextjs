import React from "react";
import Stats from "../Stats";
import TableVisuals from "../TableVisuals";
import StackBarChart from "../charts/StackBarChart";
import BarChart from "../charts/BarChart";
import LineChart from "../charts/LineChart";
import Toast from "../Toast";

const MainContent = () => {
  return (
    <div className="grid">
      <Toast/>
      <Stats />
      <div className="grid grid-cols-2">
        <div className="grid pt-2">
          <StackBarChart />
        </div>
        <div className="grid pt-2 justify-items-start">
          <BarChart />
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="pt-2">
          <TableVisuals />
        </div>
        <div className="grid pt-2 pl-2.5 justify-items-start">
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
