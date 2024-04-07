import React from "react";
import DateTimePicker from "../DateTimePicker";
import OrdersTable from "../OrdersTable";

const OrderContent = () => {
  return (
    <div className="grid p-5">
      <div className="w-1/3">
        <DateTimePicker />
      </div>
      <OrdersTable />
    </div>
  );
};

export default OrderContent;
