export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  // const hours = String(date.getHours()).padStart(2, "0");
  // const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const convertMongoDate = (date: string) => {
  var dateArray = date.split("-");

  return new Date(
    `${dateArray[0]}-${dateArray[1]}-${dateArray[2]}`
  ).toLocaleDateString();
};

export const getShippingStatus = (tableData: any) => {
  if (tableData.shippingDetails.shippingStatus === "Success")
    return <div className="badge badge-success">At destination</div>;
  if (tableData.currentStatus === "Registered by client")
    return <div className="badge badge-warning">Not processed</div>;
  if (tableData.currentStatus === "Cancelled")
    return <div className="badge badge-error">Cancelled</div>;

  return <div className="badge badge-info">In progress</div>;
};

export const getCurrentLocation = (tableData: any) => {
  if (tableData.shippingDetails.shippingStatus === "Success")
    return tableData.shippingDetails.shippingCountry;

  return tableData.pickupDetails.pickupCountry;
};

export const mapOrderStatusTooltip = (status: string) => {
  switch (status) {
    case "Registered by client":
      return (
        <div
          className="tooltip tooltip-warning tooltip-right"
          data-tip="Unprocessed"
        >
          <div className="badge badge-warning badge-sm"></div>
        </div>
      );
    case "Cancelled":
      return (
        <div
          className="tooltip tooltip-error tooltip-right"
          data-tip="Cancelled"
        >
          <div className="badge badge-error badge-sm"></div>
        </div>
      );
    case "Delivered to final destination":
      <div
        className="tooltip tooltip-success tooltip-right"
        data-tip="Delivered"
      >
        <div className="badge badge-success badge-sm"></div>
      </div>;
    default:
      return (
        <div className="tooltip tooltip-info tooltip-right" data-tip="Ongoing">
          <div className="badge badge-info badge-sm"></div>
        </div>
      );
  }
};

export const getOrderStatusBadge = (orderStatus: string) => {
  switch (orderStatus) {
    case "Cancelled":
      return <div className="badge badge-error">Order cancelled</div>;
    case "Registered by client":
      return <div className="badge badge-warning">Order Not Processed</div>;
    case "Delivered to final destination":
      return <div className="badge badge-success">Order At destination</div>;
    default:
      return <div className="badge badge-info">Order In progress</div>;
  }
};
