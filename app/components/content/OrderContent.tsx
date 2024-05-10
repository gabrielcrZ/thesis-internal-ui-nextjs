import React from "react";
import OrdersTable from "../OrdersTable";
import Filters from "../Filters";

const OrderContent = () => {
  return (
    <div className="grid gap-3">
      <Filters />
      <OrdersTable />
    </div>
  );
};

export default OrderContent;
