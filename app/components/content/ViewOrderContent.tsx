"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { faker } from "@faker-js/faker";
import { orderUpdates } from "../types/Types";

const ViewOrderContent = () => {
  const mockedShippingStatus = [
    <div className="badge">Unknown</div>,
    <div className="badge badge-success">At destination</div>,
    <div className="badge badge-info">Shipment in progress</div>,
    <div className="badge badge-warning">Shipment not assigned</div>,
    <div className="badge badge-error">Order cancelled</div>,
  ];

  const mockedUpdateType = [
    "Create Order",
    "Assign pickup",
    "Pickup success",
    "Pickup fail",
    "Assign shipping",
    "Shipping success",
    "Assign delivery",
    "Delivery success",
  ];

  const [selectedPickup, setSelectedPickup] = useState("");
  const [selectedShipment, setSelectedShipment] = useState("");
  const [selectedDelivery, setSelectedDelivery] = useState("");
  const [orderUpdates, setOrderUpdates] = useState<orderUpdates>({});

  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  //Pickup cases
  const hasAvailablePickups = false;
  const isPickupSuccess = true;
  const hasPickupAssigned = false;

  //Shipment cases
  const hasAvailableShipments = false;
  const isShippingSuccess = true;
  const hasShipmentAssigned = false;

  //Delivery cases
  const hasAvailableDeliveries = false;
  const isDeliverySuccess = true;
  const hasDeliveryAssigned = false;

  //Cancel order case
  const isOrderCancelled = false;

  useEffect(() => {
    console.log(
      `A call has been made for retrieving order details and additional info. orderId: ${orderId}`
    );
  });
  const handleAssignPickup = () => {
    // setSelectedPickup("");
    console.log(
      `A call was made for assign pickup, orderId: ${orderId} and pickupId: ${selectedPickup}`
    );
  };

  const handleUnassignPickup = () => {
    console.log(`A call was made for pickup unassign. orderId: ${orderId}`);
  };

  const handleAssignShipment = () => {
    // setSelectedShipment("");
    console.log(
      `A call was made for assign shipment, orderId: ${orderId} and shipmentId: ${selectedShipment}`
    );
  };

  const handleUnassignShipment = () => {
    console.log(`A call was made for shipment unassign. orderId: ${orderId}`);
  };

  const handleAssignDelivery = () => {
    // setSelectedDelivery("");
    console.log(
      `A call was made for assign delivery, orderId: ${orderId} and deliveryId: ${selectedDelivery}`
    );
  };

  const handleUnassignDelivery = () => {
    console.log(`A call was made for delivery unassign. orderId: ${orderId}`);
  };

  const handleCancelOrder = () => {
    console.log(
      `A call for cancelling the order was mode. orderId: ${orderId}`
    );
  };

  const handleUpdateOrder = () => {
    console.log(
      `A call for updating the order was made. orderId: ${orderId} and updates: ${JSON.stringify(
        orderUpdates,
        null,
        4
      )}`
    );
    // setOrderUpdates({});
  };

  return (
    <div className="grid gap-5 px-2">
      <div className="flex justify-between gap-5">
        <div className="card w-full bg-base-200 shadow-xl">
          <div className="card-body">
            <h1 className="card-title text-gray-500">{`Order #${orderId}`}</h1>
            <div className="font-medium">
              {
                mockedShippingStatus[
                  Math.floor(Math.random() * mockedShippingStatus.length)
                ]
              }
            </div>
            <div className="card-actions justify-end font-medium">
              {!isOrderCancelled ? (
                <div className="dropdown dropdown-hover dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-info btn-sm"
                  >
                    Actions
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[2] menu p-2 shadow bg-base-200 text-gray-500 rounded-box w-52 "
                  >
                    {/* <li className="text-gray-500"><a>Update pickup</a></li> */}
                    <li className="text-gray-500">
                      <a
                        onClick={() =>
                          (
                            document.getElementById(
                              "my_modal_pickup"
                            ) as HTMLDialogElement
                          ).showModal()
                        }
                      >
                        Update pickup
                      </a>
                    </li>
                    <li className="text-gray-500">
                      <a
                        onClick={() =>
                          (
                            document.getElementById(
                              "my_modal_shipping"
                            ) as HTMLDialogElement
                          ).showModal()
                        }
                      >
                        Update shipment
                      </a>
                    </li>
                    <li className="text-gray-500">
                      <a
                        onClick={() =>
                          (
                            document.getElementById(
                              "my_modal_delivery"
                            ) as HTMLDialogElement
                          ).showModal()
                        }
                      >
                        Update delivery
                      </a>
                    </li>
                    <li className="text-warning">
                      <a
                        onClick={() =>
                          (
                            document.getElementById(
                              "my_modal_editOrder"
                            ) as HTMLDialogElement
                          ).showModal()
                        }
                      >
                        Update details
                      </a>
                    </li>
                    <li className="text-red-500">
                      <a
                        onClick={() =>
                          (
                            document.getElementById(
                              "my_modal_cancel"
                            ) as HTMLDialogElement
                          ).showModal()
                        }
                      >
                        Cancel Order
                      </a>
                    </li>
                  </ul>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-200 text-gray-500 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Assigned delivery #Not assigned</h2>
            <div className="text-sm">Delivery type: N/A</div>
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
          </div>
        </div>
      </div>
      {/* modals */}
      {/* Pickup modal */}
      <dialog
        id="my_modal_pickup"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg text-gray-500">Pickup process</h3>
          <form method="dialog">
            {isPickupSuccess ? (
              <div className="text-success font-bold">
                {`Order #${orderId} has been already picked up.`}
              </div>
            ) : hasPickupAssigned ? (
              <div className="text-warning font-bold">
                {`Order #${orderId} has been already assigned to a pickup. Id: #${faker.string.numeric(
                  4
                )}`}
              </div>
            ) : hasAvailablePickups ? (
              <label className="form-control w-full max-w-sm">
                <div className="label">
                  <span className="label-text text-info font-bold">
                    {`Select available pickup for order #${orderId}`}
                  </span>
                </div>
                <select
                  className="select select-bordered text-gray-500"
                  onChange={(e) => {
                    setSelectedPickup(e.target.value);
                  }}
                  defaultValue={"Select pickup"}
                >
                  <option disabled>Select pickup</option>
                  <option value={faker.string.numeric(8)}>Pickup #1</option>
                  <option value={faker.string.numeric(8)}>Pickup #2</option>
                  <option value={faker.string.numeric(8)}>Pickup #3</option>
                  <option value={faker.string.numeric(8)}>Pickup #4</option>
                  <option value={faker.string.numeric(8)}>Pickup #5</option>
                </select>
              </label>
            ) : (
              <div className="inline text-red-500 font-bold">
                {`We can't find any available pickups for order
                #${orderId}. Consider adding one from`}
                <a className="link pl-1" href="/deliveries">
                  here
                </a>
                .
              </div>
            )}
            <div className="modal-action">
              <div className="flex gap-2">
                {/* if there is a button in form, it will close the modal */}
                {hasPickupAssigned && !isPickupSuccess ? (
                  <button className="btn" onClick={handleUnassignPickup}>
                    Unassign
                  </button>
                ) : hasAvailablePickups && !isPickupSuccess ? (
                  <button
                    className="btn"
                    disabled={selectedPickup === ""}
                    onClick={handleAssignPickup}
                  >
                    Assign
                  </button>
                ) : (
                  <></>
                )}
                <button className="btn">Close</button>
              </div>
            </div>
          </form>
        </div>
      </dialog>
      {/* Pickup modal end */}

      {/* Shipping modal */}
      <dialog
        id="my_modal_shipping"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg text-gray-500">Shipping process</h3>
          <form method="dialog">
            {isShippingSuccess ? (
              <div className="text-success font-bold">
                {`Order #${orderId} has been already shipped.`}
              </div>
            ) : hasShipmentAssigned ? (
              <div className="text-warning font-bold">
                {`Order #${orderId} has been already assigned to a shipment. Id: #${faker.string.numeric(
                  4
                )}`}
              </div>
            ) : hasAvailableShipments ? (
              <label className="form-control w-full max-w-sm">
                <div className="label">
                  <span className="label-text text-info font-bold">
                    {`Select available shipment for order #${orderId}`}
                  </span>
                </div>
                <select
                  className="select select-bordered text-gray-500"
                  onChange={(e) => {
                    setSelectedShipment(e.target.value);
                  }}
                  defaultValue={"Select shipment"}
                >
                  <option disabled>Select shipment</option>
                  <option value={faker.string.numeric(8)}>Shipment #1</option>
                  <option value={faker.string.numeric(8)}>Shipment #2</option>
                  <option value={faker.string.numeric(8)}>Shipment #3</option>
                  <option value={faker.string.numeric(8)}>Shipment #4</option>
                  <option value={faker.string.numeric(8)}>Shipment #5</option>
                </select>
              </label>
            ) : (
              <div className="inline text-red-500 font-bold">
                {`We can't find any available shipments for order
                #${orderId}. Consider adding one from`}
                <a className="link pl-1" href="/deliveries">
                  here
                </a>
                .
              </div>
            )}
            <div className="modal-action">
              <div className="flex gap-2">
                {/* if there is a button in form, it will close the modal */}
                {hasShipmentAssigned && !isShippingSuccess ? (
                  <button className="btn" onClick={handleUnassignShipment}>
                    Unassign
                  </button>
                ) : hasAvailableShipments && !isShippingSuccess ? (
                  <button
                    className="btn"
                    disabled={selectedShipment === ""}
                    onClick={handleAssignShipment}
                  >
                    Assign
                  </button>
                ) : (
                  <></>
                )}
                <button className="btn">Close</button>
              </div>
            </div>
          </form>
        </div>
      </dialog>
      {/* Shipping modal end */}

      {/* Delivery modal  */}
      <dialog
        id="my_modal_delivery"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg text-gray-500">Delivery process</h3>
          <form method="dialog">
            {isDeliverySuccess ? (
              <div className="text-success font-bold">
                {`Order #${orderId} has been already successfully delivered.`}
              </div>
            ) : hasDeliveryAssigned ? (
              <div className="text-warning font-bold">
                {`Order #${orderId} has been already assigned to a delivery. Id: #${faker.string.numeric(
                  4
                )}`}
              </div>
            ) : hasAvailableDeliveries ? (
              <label className="form-control w-full max-w-sm">
                <div className="label">
                  <span className="label-text text-info font-bold">
                    {`Select available delivery for order #${orderId}`}
                  </span>
                </div>
                <select
                  className="select select-bordered text-gray-500"
                  onChange={(e) => {
                    setSelectedDelivery(e.target.value);
                  }}
                  defaultValue={"Select delivery"}
                >
                  <option disabled>Select delivery</option>
                  <option value={faker.string.numeric(8)}>Delivery #1</option>
                  <option value={faker.string.numeric(8)}>Delivery #2</option>
                  <option value={faker.string.numeric(8)}>Delivery #3</option>
                  <option value={faker.string.numeric(8)}>Delivery #4</option>
                  <option value={faker.string.numeric(8)}>Delivery #5</option>
                </select>
              </label>
            ) : (
              <div className="inline text-red-500 font-bold">
                {`We can't find any available deliveries for order
                #${orderId}. Consider adding one from`}
                <a className="link pl-1" href="/deliveries">
                  here
                </a>
                .
              </div>
            )}
            <div className="modal-action">
              <div className="flex gap-2">
                {/* if there is a button in form, it will close the modal */}
                {hasDeliveryAssigned && !isDeliverySuccess ? (
                  <button className="btn" onClick={handleUnassignDelivery}>
                    Unassign
                  </button>
                ) : hasAvailableDeliveries && !isDeliverySuccess ? (
                  <button
                    className="btn"
                    disabled={selectedDelivery === ""}
                    onClick={handleAssignDelivery}
                  >
                    Assign
                  </button>
                ) : (
                  <></>
                )}
                <button className="btn">Close</button>
              </div>
            </div>
          </form>
        </div>
      </dialog>
      {/* Delivery modal end */}

      {/* Cancel order modal */}
      <dialog
        id="my_modal_cancel"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg text-gray-500">
            Order cancellation
          </h3>
          <form method="dialog" className="font-bold text-red-500">
            This action will cancel the current order. Make sure that cancelling
            will not affect the current status of an existing delivery!
            <div className="modal-action">
              <div className="flex gap-2">
                <button className="btn" onClick={handleCancelOrder}>
                  Proceed
                </button>
                <button className="btn">Close</button>
                {/* if there is a button in form, it will close the modal */}
              </div>
            </div>
          </form>
        </div>
      </dialog>
      {/* Cancel order modal end */}

      {/* Edit order modal */}
      <dialog id="my_modal_editOrder" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg text-gray-500">
            Update order #{orderId}
          </h3>
          <form method="dialog">
            <div className="grid gap-2 mt-2">
              <div className="collapse collapse-arrow bg-base-200">
                <input type="checkbox" />
                <div className="collapse-title text-l font-bold text-gray-500">
                  Pickup details
                </div>
                <div className="collapse-content">
                  {/* Pickup details inputs */}
                  <div className="grid grid-cols-3 gap-2 font-bold text-gray-400">
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text text-info">Country</span>
                      </div>
                      <input
                        type="text"
                        placeholder={faker.location.country()}
                        className="input input-bordered w-full max-w-xs"
                        value={orderUpdates.pickupDetails?.pickupCountry || ""}
                        onChange={(e) => {
                          setOrderUpdates((prevState) => ({
                            ...prevState,
                            pickupDetails: {
                              ...prevState.pickupDetails,
                              pickupCountry: e.target.value,
                            },
                          }));
                        }}
                      />
                    </label>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text text-info">City</span>
                      </div>
                      <input
                        type="text"
                        placeholder={faker.location.city()}
                        className="input input-bordered w-full max-w-xs"
                        value={orderUpdates.pickupDetails?.pickupCity || ""}
                        onChange={(e) => {
                          setOrderUpdates((prevState) => ({
                            ...prevState,
                            pickupDetails: {
                              ...prevState.pickupDetails,
                              pickupCity: e.target.value,
                            },
                          }));
                        }}
                      />
                    </label>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text text-info">Address</span>
                      </div>
                      <input
                        type="text"
                        placeholder={faker.location.streetAddress()}
                        className="input input-bordered w-full max-w-xs"
                        value={orderUpdates.pickupDetails?.pickupAddress || ""}
                        onChange={(e) => {
                          setOrderUpdates((prevState) => ({
                            ...prevState,
                            pickupDetails: {
                              ...prevState.pickupDetails,
                              pickupAddress: e.target.value,
                            },
                          }));
                        }}
                      />
                    </label>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text text-info">Region</span>
                      </div>
                      <input
                        type="text"
                        placeholder="Europe"
                        className="input input-bordered w-full max-w-xs"
                        value={orderUpdates.pickupDetails?.pickupRegion || ""}
                        onChange={(e) => {
                          setOrderUpdates((prevState) => ({
                            ...prevState,
                            pickupDetails: {
                              ...prevState.pickupDetails,
                              pickupRegion: e.target.value,
                            },
                          }));
                        }}
                      />
                    </label>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text text-info">Pickup Id</span>
                      </div>
                      <input
                        type="text"
                        placeholder={faker.string.numeric(4)}
                        className="input input-bordered w-full max-w-xs"
                        value={orderUpdates.pickupDetails?.pickupId || ""}
                        onChange={(e) => {
                          setOrderUpdates((prevState) => ({
                            ...prevState,
                            pickupDetails: {
                              ...prevState.pickupDetails,
                              pickupId: e.target.value,
                            },
                          }));
                        }}
                      />
                    </label>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text text-info">
                          Pickup status
                        </span>
                      </div>
                      <input
                        type="text"
                        placeholder="Pickup success"
                        className="input input-bordered w-full max-w-xs"
                        value={orderUpdates.pickupDetails?.pickupStatus || ""}
                        onChange={(e) => {
                          setOrderUpdates((prevState) => ({
                            ...prevState,
                            pickupDetails: {
                              ...prevState.pickupDetails,
                              pickupStatus: e.target.value,
                            },
                          }));
                        }}
                      />
                    </label>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text text-info">
                          Client email
                        </span>
                      </div>
                      <input
                        type="text"
                        placeholder={faker.internet.email()}
                        className="input input-bordered w-full max-w-xs"
                        value={
                          orderUpdates.pickupDetails?.pickupClient
                            ?.clientEmail || ""
                        }
                        onChange={(e) => {
                          setOrderUpdates((prevState) => ({
                            ...prevState,
                            pickupDetails: {
                              ...prevState.pickupDetails,
                              pickupClient: {
                                ...prevState.pickupDetails?.pickupClient,
                                clientEmail: e.target.value,
                              },
                            },
                          }));
                        }}
                      />
                    </label>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text text-info">
                          Client name
                        </span>
                      </div>
                      <input
                        type="text"
                        placeholder={faker.person.fullName()}
                        className="input input-bordered w-full max-w-xs"
                        value={
                          orderUpdates.pickupDetails?.pickupClient
                            ?.clientName || ""
                        }
                        onChange={(e) => {
                          setOrderUpdates((prevState) => ({
                            ...prevState,
                            pickupDetails: {
                              ...prevState.pickupDetails,
                              pickupClient: {
                                ...prevState.pickupDetails?.pickupClient,
                                clientName: e.target.value,
                              },
                            },
                          }));
                        }}
                      />
                    </label>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text text-info">
                          Client phone
                        </span>
                      </div>
                      <input
                        type="text"
                        placeholder={faker.phone.number()}
                        className="input input-bordered w-full max-w-xs"
                        value={
                          orderUpdates.pickupDetails?.pickupClient
                            ?.clientPhone || ""
                        }
                        onChange={(e) => {
                          setOrderUpdates((prevState) => ({
                            ...prevState,
                            pickupDetails: {
                              ...prevState.pickupDetails,
                              pickupClient: {
                                ...prevState.pickupDetails?.pickupClient,
                                clientPhone: e.target.value,
                              },
                            },
                          }));
                        }}
                      />
                    </label>
                  </div>
                  {/* Pickup details inputs end */}
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-200 mb-2">
                <input type="checkbox" />
                <div className="collapse-title text-l font-bold text-gray-500">
                  Delivery details
                </div>
                <div className="collapse-content">
                  {/* Delivery details inputs */}
                  <div className="grid grid-cols-3 gap-2 font-bold text-gray-400">
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text text-info">Country</span>
                      </div>
                      <input
                        type="text"
                        placeholder={faker.location.country()}
                        className="input input-bordered w-full max-w-xs"
                        value={
                          orderUpdates.shippingDetails?.shippingCountry || ""
                        }
                        onChange={(e) => {
                          setOrderUpdates((prevState) => ({
                            ...prevState,
                            shippingDetails: {
                              ...prevState.shippingDetails,
                              shippingCountry: e.target.value,
                            },
                          }));
                        }}
                      />
                    </label>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text text-info">City</span>
                      </div>
                      <input
                        type="text"
                        placeholder={faker.location.city()}
                        className="input input-bordered w-full max-w-xs"
                        value={orderUpdates.shippingDetails?.shippingCity || ""}
                        onChange={(e) => {
                          setOrderUpdates((prevState) => ({
                            ...prevState,
                            shippingDetails: {
                              ...prevState.shippingDetails,
                              shippingCity: e.target.value,
                            },
                          }));
                        }}
                      />
                    </label>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text text-info">Address</span>
                      </div>
                      <input
                        type="text"
                        placeholder={faker.location.streetAddress()}
                        className="input input-bordered w-full max-w-xs"
                        value={
                          orderUpdates.shippingDetails?.shippingAddress || ""
                        }
                        onChange={(e) => {
                          setOrderUpdates((prevState) => ({
                            ...prevState,
                            shippingDetails: {
                              ...prevState.shippingDetails,
                              shippingAddress: e.target.value,
                            },
                          }));
                        }}
                      />
                    </label>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text text-info">Region</span>
                      </div>
                      <input
                        type="text"
                        placeholder="Europe"
                        className="input input-bordered w-full max-w-xs"
                        value={
                          orderUpdates.shippingDetails?.shippingRegion || ""
                        }
                        onChange={(e) => {
                          setOrderUpdates((prevState) => ({
                            ...prevState,
                            shippingDetails: {
                              ...prevState.shippingDetails,
                              shippingRegion: e.target.value,
                            },
                          }));
                        }}
                      />
                    </label>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text text-info">
                          Delivery Id
                        </span>
                      </div>
                      <input
                        type="text"
                        placeholder={faker.string.numeric(4)}
                        className="input input-bordered w-full max-w-xs"
                        value={orderUpdates.shippingDetails?.shippingId || ""}
                        onChange={(e) => {
                          setOrderUpdates((prevState) => ({
                            ...prevState,
                            shippingDetails: {
                              ...prevState.shippingDetails,
                              shippingId: e.target.value,
                            },
                          }));
                        }}
                      />
                    </label>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text text-info">
                          Delivery status
                        </span>
                      </div>
                      <input
                        type="text"
                        placeholder="Pickup success"
                        className="input input-bordered w-full max-w-xs"
                        value={
                          orderUpdates.shippingDetails?.shippingStatus || ""
                        }
                        onChange={(e) => {
                          setOrderUpdates((prevState) => ({
                            ...prevState,
                            shippingDetails: {
                              ...prevState.shippingDetails,
                              shippingStatus: e.target.value,
                            },
                          }));
                        }}
                      />
                    </label>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text text-info">
                          Client email
                        </span>
                      </div>
                      <input
                        type="text"
                        placeholder={faker.internet.email()}
                        className="input input-bordered w-full max-w-xs"
                        value={
                          orderUpdates.shippingDetails?.shippingClient
                            ?.clientEmail || ""
                        }
                        onChange={(e) => {
                          setOrderUpdates((prevState) => ({
                            ...prevState,
                            shippingDetails: {
                              ...prevState.shippingDetails,
                              shippingClient: {
                                ...prevState.shippingDetails?.shippingClient,
                                clientEmail: e.target.value,
                              },
                            },
                          }));
                        }}
                      />
                    </label>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text text-info">
                          Client name
                        </span>
                      </div>
                      <input
                        type="text"
                        placeholder={faker.person.fullName()}
                        className="input input-bordered w-full max-w-xs"
                        value={
                          orderUpdates.shippingDetails?.shippingClient
                            ?.clientName || ""
                        }
                        onChange={(e) => {
                          setOrderUpdates((prevState) => ({
                            ...prevState,
                            shippingDetails: {
                              ...prevState.shippingDetails,
                              shippingClient: {
                                ...prevState.shippingDetails?.shippingClient,
                                clientName: e.target.value,
                              },
                            },
                          }));
                        }}
                      />
                    </label>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text text-info">
                          Client phone
                        </span>
                      </div>
                      <input
                        type="text"
                        placeholder={faker.phone.number()}
                        className="input input-bordered w-full max-w-xs"
                        value={
                          orderUpdates.shippingDetails?.shippingClient
                            ?.clientPhone || ""
                        }
                        onChange={(e) => {
                          setOrderUpdates((prevState) => ({
                            ...prevState,
                            shippingDetails: {
                              ...prevState.shippingDetails,
                              shippingClient: {
                                ...prevState.shippingDetails?.shippingClient,
                                clientPhone: e.target.value,
                              },
                            },
                          }));
                        }}
                      />
                    </label>
                  </div>
                  {/* Delivery details inputs end */}
                </div>
              </div>
            </div>
            <div className="flex gap-2 font-bold text-gray-400">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-info">Current location</span>
                </div>
                <input
                  type="text"
                  placeholder="Budapest"
                  className="input input-bordered w-full max-w-xs"
                  value={orderUpdates.currentLocation || ""}
                  onChange={(e) => {
                    setOrderUpdates((prevState) => ({
                      ...prevState,
                      currentLocation: e.target.value,
                    }));
                  }}
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-info">Current Status</span>
                </div>
                <input
                  type="text"
                  placeholder="Assigned for pickup"
                  className="input input-bordered w-full max-w-xs"
                  value={orderUpdates.currentStatus || ""}
                  onChange={(e) => {
                    setOrderUpdates((prevState) => ({
                      ...prevState,
                      currentStatus: e.target.value,
                    }));
                  }}
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-info">Revenue</span>
                </div>
                <input
                  type="text"
                  placeholder="400$"
                  className="input input-bordered w-full max-w-xs"
                  value={orderUpdates.estimatedRevenue || ""}
                  onChange={(e) => {
                    setOrderUpdates((prevState) => ({
                      ...prevState,
                      estimatedRevenue: e.target.value,
                    }));
                  }}
                />
              </label>
            </div>
            {Object.keys(orderUpdates).length === 0 && (
              <div className="text-warning pt-3 text-sm font-bold">
                *No order changes were found. Update order option was disabled!
              </div>
            )}
            <div className="modal-action">
              <div className="flex gap-2">
                {/* if there is a button in form, it will close the modal */}
                <button
                  className="btn"
                  onClick={handleUpdateOrder}
                  disabled={Object.keys(orderUpdates).length === 0}
                >
                  Update order
                </button>
                <button className="btn">Close</button>
              </div>
            </div>
          </form>
        </div>
      </dialog>
      {/* Edit order modal end */}
      {/* modals end */}
      <div className="collapse collapse-arrow bg-base-200 shadow-xl">
        <input type="checkbox" />
        <div className="collapse-title text-l font-bold text-gray-500">
          Order Details
        </div>
        <div className="collapse-content">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="text-info">
                  <th></th>
                  <th>Product</th>
                  <th>Category</th>
                  <th>Weight</th>
                  <th>Calculated revenue</th>
                </tr>
              </thead>
              <tbody className="text-gray-400 font-bold">
                {/* row 1 */}
                <tr className="hover">
                  <th>1</th>
                  <td>{faker.commerce.productName()}</td>
                  <td>{faker.commerce.department()}</td>
                  <td>{faker.number.int({ max: 25 })}kg</td>
                  <td>{faker.string.numeric(3)}$</td>
                </tr>
                {/* row 2 */}
                <tr className="hover">
                  <th>2</th>
                  <td>{faker.commerce.productName()}</td>
                  <td>{faker.commerce.department()}</td>
                  <td>{faker.number.int({ max: 25 })}kg</td>
                  <td>{faker.string.numeric(3)}$</td>
                </tr>
                {/* row 3 */}
                <tr className="hover">
                  <th>3</th>
                  <td>{faker.commerce.productName()}</td>
                  <td>{faker.commerce.department()}</td>
                  <td>{faker.number.int({ max: 25 })}kg</td>
                  <td>{faker.string.numeric(3)}$</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="divider divider-vertical px-2"></div>
          <div className="overflow-x-auto">
            <table className="table ">
              {/* head */}
              <thead>
                <tr className="text-info">
                  <th></th>
                  <th>Address</th>
                  <th>Region</th>
                  <th>Contact name</th>
                  <th>Contact email</th>
                  <th>Contact phone</th>
                  <th>Delivery Id</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-400">
                {/* row 1 */}
                <tr className="font-bold">
                  <td className="text-gray-500 font-bold italic">
                    Pickup details
                  </td>
                  <td>{faker.location.streetAddress()}</td>
                  <td>{faker.location.country()}</td>
                  <td>{faker.person.fullName()}</td>
                  <td>{faker.internet.email()}</td>
                  <td>{faker.phone.number()}</td>
                  <td>#{faker.string.numeric(4)}</td>
                  <td>{"Pending"}</td>
                </tr>
                <tr className="font-bold">
                  <td className="text-gray-500 italic">Delivery details</td>
                  <td>{faker.location.streetAddress()}</td>
                  <td>{faker.location.country()}</td>
                  <td>{faker.person.fullName()}</td>
                  <td>{faker.internet.email()}</td>
                  <td>{faker.phone.number()}</td>
                  <td>#{faker.string.numeric(4)}</td>
                  <td>{"Pending"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 shadow-xl">
        <input type="checkbox" />
        <div className="collapse-title text-l font-bold text-gray-500">
          Order History
        </div>
        <div className="collapse-content">
          {/* collapsed order history table */}
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="text-info">
                  <th>Date</th>
                  <th>Update type</th>
                  <th>Update info</th>
                  <th>Updated by</th>
                </tr>
              </thead>
              <tbody className="text-gray-400 font-bold">
                {/* row 1 */}
                <tr className="hover">
                  <td>{faker.date.anytime().toDateString()}</td>
                  <td>
                    {
                      mockedUpdateType[
                        Math.floor(Math.random() * mockedUpdateType.length)
                      ]
                    }
                  </td>
                  <td>{faker.lorem.sentence()}</td>
                  <td>{faker.person.fullName()}</td>
                </tr>
                {/* row 2 */}
                <tr className="hover">
                  <td>{faker.date.anytime().toDateString()}</td>
                  <td>
                    {
                      mockedUpdateType[
                        Math.floor(Math.random() * mockedUpdateType.length)
                      ]
                    }
                  </td>
                  <td>{faker.lorem.sentence()}</td>
                  <td>{faker.person.fullName()}</td>
                </tr>
                {/* row 3 */}
                <tr className="hover">
                  <td>{faker.date.anytime().toDateString()}</td>
                  <td>
                    {
                      mockedUpdateType[
                        Math.floor(Math.random() * mockedUpdateType.length)
                      ]
                    }
                  </td>
                  <td>{faker.lorem.sentence()}</td>
                  <td>{faker.person.fullName()}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewOrderContent;
