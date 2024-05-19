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
  ).toDateString();
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