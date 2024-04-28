import React from "react";
import DateTimePicker from "./DateTimePicker";

const Filters = () => {
  return (
    <div className="collapse w-fit">
      <input type="checkbox" className="peer" />
      <div className="collapse-title flex text-base-content">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
          />
        </svg>
        Filters
      </div>
      <div className="collapse-content flex gap-5">
        <DateTimePicker />
        <label className="input input-bordered text-gray-400 flex items-center gap-2">
          <input type="text" className="grow" placeholder="#orderId" />
          <span className="badge badge-ghost font-medium">optional</span>
        </label>
        <label className="input input-bordered text-gray-400 flex items-center gap-2">
          <input type="text" className="grow" placeholder="#client" />
          <span className="badge badge-ghost font-medium">optional</span>
        </label>
        <div className="flex items-center gap-2">
          <button className="btn btn-info btn-sm">Apply</button>
          <button className="btn btn-info btn-sm">Clear</button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
