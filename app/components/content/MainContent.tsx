import React from "react";
import Stats from "../Stats";
import TableVisuals from "../TableVisuals";
import StackBarChart from "../charts/StackBarChart";
import BarChart from "../charts/BarChart";
import LineChart from "../charts/LineChart";

const MainContent = () => {
  return (
    <div className="grid">
      <Stats />
      <div className="grid grid-cols-2 mt-2">
        <div className="grid pt-2">
          <StackBarChart />
          {/* Invisible element for chart resizing bug */}
          <div className="opacity-0">.</div>
        </div>
        <div className="grid pt-2 justify-items-start">
          <BarChart />
        </div>
      </div>
      <div className="grid grid-cols-2 mt-2">
        <div className="pt-2">
          <TableVisuals type="mainContent"/>
        </div>
        <div className="grid pt-2 pl-2.5 justify-items-start">
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
