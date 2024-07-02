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

export const mapShippingStatus = (tableData: any) => {
  if (tableData.shippingDetails.shippingStatus === "Success")
    return <div className="badge badge-success">At destination</div>;
  if (tableData.currentStatus === "Registered by client")
    return <div className="badge badge-warning">Not processed</div>;
  if (tableData.currentStatus === "Cancelled")
    return <div className="badge badge-error">Cancelled</div>;

  return <div className="badge badge-info">In progress</div>;
};

export const mapCurrentLocation = (tableData: any) => {
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

export const mapOrderStatusBadge = (orderStatus: string) => {
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

export const mapDeliveryMessage = (currentStatus: string) => {
  switch (currentStatus) {
    case "Registered by client":
      return (
        <div className="text-red-500 font-bold">
          This order has not been processed
          <div
            className="tooltip"
            data-tip="Consider assigning a pickup for this order in order to begin the delivery process."
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      );
    case "Cancelled":
      return (
        <div className="text-orange-600 font-bold">
          This order has been cancelled
          <div
            className="tooltip"
            data-tip="Consider checking this order history to have access to who cancelled this order and for what reason."
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      );
    case "Delivered to final destination":
      return (
        <div className="text-success font-bold">
          This order has been delivered to the client destination
          <div
            className="tooltip"
            data-tip="This order has been successfully delivered. Additional info can be found by checking this order history."
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      );
    default:
      return (
        <div className="text-info font-bold">
          This order has been processed and it's currently ongoing
          <div
            className="tooltip"
            data-tip="This order has been processed. To check the most recent update, you can verify this order history."
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      );
  }
};

export const mapDeliveryStatus = (status: string) => {
  switch (status) {
    case "Created":
      return <div className="badge badge-warning">Pending</div>;
    case "Completed":
      return <div className="badge badge-success">Finished</div>;
    case "Cancelled":
      return <div className="badge badge-error">Cancelled</div>;
    default:
      return <div className="badge badge-info">Ongoing</div>;
  }
};

export const convertMongoCurrency = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

export const mapTransportCapabilities = (canTransport: boolean) => {
  return canTransport ? (
    <div className="badge badge-success badge-sm">Yes</div>
  ) : (
    <div className="badge badge-error badge-sm">No</div>
  );
};
