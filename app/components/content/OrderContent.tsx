import React from "react";
import OrdersTable from "../OrdersTable";
import Filters from "../Filters";

const OrderContent = () => {
  return (
    <div className="grid">
      <Filters />
      <OrdersTable />
    </div>
  );
};

export default OrderContent;
