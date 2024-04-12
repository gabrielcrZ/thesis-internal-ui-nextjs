"use client";
import React, { useState } from "react";

const DateTimePicker = () => {
  const defaultStartDate = `${new Date().getFullYear()}-01-01`;
  const defaultEndDate = `${new Date().getFullYear()}-12-31`;

  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(defaultEndDate);
  return (
    <div className="flex">
      <input
        type="date"
        value={startDate}
        className="input input-bordered"
        onChange={(e) => {
          console.log(startDate);
          console.log(endDate);
          console.log(e);
          setStartDate(e.target.value);
        }}
      />
      <div className="divider divider-horizontal"></div>
      <input
        type="date"
        value={endDate}
        className="input input-bordered"
        onChange={(e) => {
          setEndDate(e.target.value);
        }}
      />
    </div>
  );
};

export default DateTimePicker;
