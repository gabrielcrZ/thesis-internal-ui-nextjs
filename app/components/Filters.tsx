"use client";
import React, { useEffect, useState } from "react";

const Filters = () => {
  const defaultStartDate = `${new Date().getFullYear()}-01-01`;
  const defaultEndDate = `${new Date().getFullYear()}-12-31`;

  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(defaultEndDate);
  const [orderId, setOrderId] = useState("");
  const [client, setClient] = useState("");

  const clearFilters = () => {
    setStartDate(defaultStartDate);
    setEndDate(defaultEndDate);
    setOrderId("");
    setClient("");
  };

  const searchOrders = () => {
    console.log("test");
  };

  //maybe an use effect for every time the content of the table is changing

  return (
    <div className="collapse font-medium">
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
      <div className="collapse-content flex gap-5 overflow-x-auto">
        <form method="post" className="flex gap-3">
          <div className="flex">
            <input
              type="date"
              value={startDate}
              className="input input-bordered text-gray-400"
              onChange={(e) => {
                setStartDate(e.target.value);
              }}
            />
            <div className="divider divider-horizontal"></div>
            <input
              type="date"
              value={endDate}
              className="input input-bordered text-gray-400"
              onChange={(e) => {
                setEndDate(e.target.value);
              }}
            />
          </div>
          <label className="input input-bordered text-gray-400 flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="orderId"
              value={orderId}
              onChange={(e) => {
                setOrderId(e.target.value);
              }}
            />
            <span className="badge badge-ghost font-medium">optional</span>
          </label>
          <label className="input input-bordered text-gray-400 flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="client"
              value={client}
              onChange={(e) => {
                setClient(e.target.value);
              }}
            />
            <span className="badge badge-ghost font-medium">optional</span>
          </label>
          <div className="flex items-center gap-2">
            <button
              type="submit"
              className="btn btn-sm"
              onSubmit={searchOrders}
            >
              Apply
            </button>
            <button
              className="btn btn-sm"
              onClick={(e) => {
                e.preventDefault();
                clearFilters();
              }}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filters;
