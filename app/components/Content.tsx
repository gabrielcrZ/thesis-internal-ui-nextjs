import React from "react";
import Stats from "./Stats";
import TableVisuals from "./TableVisuals";
import StackBarChart from "./charts/StackBarChart";
import BarChart from "./charts/BarChart";
import LineChart from "./charts/LineChart";

const Content = () => {
  return (
    <div className="grid ">
      <Stats />
      <div className="grid grid-cols-2">
        <div className="grid justify-items-center">
          <StackBarChart />
        </div>
        <div className="grid justify-items-center">
          <BarChart />
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <TableVisuals />
        </div>
        <div className="grid justify-items-center">
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default Content;
