import React from "react";
import OrdersTable from "../OrdersTable";
import Filters from "../Filters";
import CollapsibleTable from "../CollapsibleTable";

const OrderContent = () => {
  return (
    <div className="grid justify-items-center">
      <Filters />
      {/* <OrdersTable /> */}
      <CollapsibleTable/>
    </div>
  );
};

export default OrderContent;
