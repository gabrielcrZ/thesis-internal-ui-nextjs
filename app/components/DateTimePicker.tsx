"use client";
import React, { useState } from "react";
import { formatDate } from "./helpers/Helpers";

const DateTimePicker = () => {
  const [startDate, setStartDate] = useState(formatDate(new Date()));
  const [endDate, setEndDate] = useState(formatDate(new Date()));
  return (
    <div className="flex">
      <input
        type="datetime-local"
        value={startDate}
        className="input input-bordered"
        onChange={(e) => {
          setStartDate(formatDate(new Date(e.target.value)));
        }}
      />
      <div className="divider divider-horizontal"></div>
      <input
        type="datetime-local"
        value={endDate}
        className="input input-bordered"
        onChange={(e) => {
          setEndDate(formatDate(new Date(e.target.value)));
        }}
      />
    </div>
  );
};

export default DateTimePicker;
