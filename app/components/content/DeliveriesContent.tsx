"use client";
import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import {
  deliveriesValidation,
  deliveryUpdates,
  newDelivery,
  newTransport,
} from "../types/Types";
import {
  convertMongoCurrency,
  convertMongoDate,
  mapDeliveryStatus,
  mapTransportCapabilities,
} from "../helpers/Helpers";
import { useRouter } from "next/navigation";

const DeliveriesContent = () => {
  const mockedDeliveryStatus = [
    <div className="badge badge-info">Ongoing</div>,
    <div className="badge badge-warning">Pending</div>,
    <div className="badge badge-success">Finished</div>,
  ];

  const mockedDeliveryType = ["Pickup", "Shipping", "Delivery"];
  const [deliveryPage, setDeliveryPage] = useState(1);
  const [transportsPage, setTransportPage] = useState(1);
  const [newDelivery, setNewDelivery] = useState<newDelivery>({});
  const [newTransport, setNewTransport] = useState<newTransport>({
    transportCapabilities: {
      canPickup: false,
      canShip: false,
    },
  });
  const [currentDelivery, setCurrentDelivery] = useState("");
  const [currentTransport, setCurrentTransport] = useState("");
  const [deliveryUpdates, setDeliveryUpdates] = useState<deliveryUpdates>({
    deliveryType: undefined,
    placeOfDelivery: undefined,
    placeOfDeparture: undefined,
  });
  const [isFormValid, setIsFormValid] = useState<deliveriesValidation>({
    addTransport: false,
    addDelivery: false,
    updateDelivery: false,
    updateTransport: false,
  });
  const [selectedDelivery, setSelectedDelivery] = useState("");
  const [isAssignDelivery, setIsAssignDelivery] = useState(false);
  const [deliveryInformation, setDeliveryInformation] = useState<any>({});
  const [deliveryTable, setDeliveryTable] = useState<any[]>([]);
  const [transportsTable, setTransportsTable] = useState<any[]>([]);
  const router = useRouter();

  const validateAddDelivery = () => {
    const formValidationState = () => {
      if (
        newDelivery.deliveryType &&
        newDelivery.placeOfDelivery?.deliveryAddress &&
        newDelivery.placeOfDelivery.deliveryCity &&
        newDelivery.placeOfDelivery.deliveryRegion &&
        newDelivery.placeOfDeparture?.departureAddress &&
        newDelivery.placeOfDeparture.departureCity &&
        newDelivery.placeOfDeparture.departureRegion
      )
        return true;
      return false;
    };
    setIsFormValid((prevState) => ({
      ...prevState,
      addDelivery: formValidationState(),
    }));
  };

  const validateAddTransport = () => {
    const formValidationState = () => {
      if (
        newTransport.transportType &&
        newTransport.transportLocation?.transportCity &&
        newTransport.transportLocation?.transportRegion &&
        newTransport.transportCapabilities?.availableRegions &&
        (newTransport.transportCapabilities?.canPickup ||
          !newTransport.transportCapabilities?.canPickup) &&
        (newTransport.transportCapabilities?.canShip ||
          !newTransport.transportCapabilities?.canShip) &&
        newTransport.transportCapabilities?.transportCapacity
      )
        return true;
      return false;
    };
    setIsFormValid((prevState) => ({
      ...prevState,
      addTransport: formValidationState(),
    }));
  };

  const validateUpdateDelivery = () => {
    const formValidationState = () => {
      if (
        deliveryUpdates.deliveryType !== undefined ||
        deliveryUpdates.placeOfDelivery !== undefined ||
        deliveryUpdates.placeOfDeparture !== undefined
      )
        return true;
      return false;
    };
    setIsFormValid((prevState) => ({
      ...prevState,
      updateDelivery: formValidationState(),
    }));
  };

  const clearDeliveryUpdates = () => {
    setDeliveryUpdates({
      placeOfDelivery: undefined,
      placeOfDeparture: undefined,
      deliveryType: undefined,
    });
  };

  const validateAssignDelivery = () => {
    setIsAssignDelivery(selectedDelivery !== "");
  };

  useEffect(() => {
    validateAssignDelivery();
  }, [selectedDelivery]);

  useEffect(() => {
    validateAddDelivery();
  }, [newDelivery]);

  useEffect(() => {
    validateAddTransport();
  }, [newTransport]);

  useEffect(() => {
    validateUpdateDelivery();
  }, [deliveryUpdates]);

  const deliveryNext = () => {
    setDeliveryPage(deliveryPage + 1);
  };
  const deliveryPrev = () => {
    if (deliveryPage === 1) return;
    else setDeliveryPage(deliveryPage - 1);
  };

  const transportsNext = () => {
    setTransportPage(transportsPage + 1);
  };

  const transportsPrev = () => {
    if (transportsPage === 1) return;
    else setTransportPage(transportsPage - 1);
  };

  const handleAddDelivery = async () => {
    try {
      const token = localStorage.getItem("auth-token");
      if (!token) {
        router.push("/users/login");
      } else {
        await fetch(`http://localhost:3001/api/add-delivery`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify(newDelivery),
        });
      }
      setNewDelivery({});
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handleAddTransport = () => {
    setNewTransport({
      transportCapabilities: {
        canPickup: false,
        canShip: false,
      },
    });
    console.log(
      `A call has been made for adding a new transport, transportInfo: ${JSON.stringify(
        newTransport,
        null,
        4
      )}`
    );
    setTransportPage(1);
  };

  const handleUpdateDelivery = () => {
    console.log(
      `A call for updating a delivery has been made, deliveryUpdates: ${JSON.stringify(
        deliveryUpdates,
        null,
        4
      )}`
    );
    clearDeliveryUpdates();
  };

  const handleAssignDelivery = () => {
    console.log(`A call has been made for transport delivery assign`);
    setSelectedDelivery("");
  };

  const handleUnassignDelivery = () => {
    console.log(`A call has been made for transport delivery unassign`);
  };

  const handleDeleteTransport = () => {
    console.log(`A call has been made to delete transport`);
  };

  const handleCancelDelivery = () => {
    console.log("A call for canceling a delivery has been made");
  };

  useEffect(() => {
    fetch(`http://localhost:3001/api/get-deliveries-information`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((res) =>
      res.json().then((data) => {
        setDeliveryInformation(data);
      })
    );
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3001/api/get-transports-table`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pagination: transportsPage }),
    }).then((res) =>
      res.json().then((data) => {
        setTransportsTable(data.transports);
      })
    );
  }, [transportsPage]);

  useEffect(() => {
    fetch(`http://localhost:3001/api/get-deliveries-table`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pagination: deliveryPage }),
    }).then((res) =>
      res.json().then((data) => {
        setDeliveryTable(data.deliveries);
      })
    );
  }, [deliveryPage]);

  const mockedTransportTypes = ["Truck", "Van", "Plane", "Ship"];
  const mockedTransportCapabilities = [
    <div className="badge badge-success badge-sm">Yes</div>,
    <div className="badge badge-error badge-sm">No</div>,
  ];
  const mockedTransportStatus = [
    "Assigned for pickup",
    "Pickup success",
    "Pickup fail",
    "Assigned for shipping",
    "Shipping success",
    "Assigned for delivery",
    "Delivery success",
  ];

  const hasDeliveryAssigned = false;
  const hasTransportAvailableDeliveries = true;

  return (
    <div className="grid gap-5 px-2">
      <div className="flex justify-between gap-5">
        <div className="card w-full bg-base-200 shadow-xl">
          <div className="card-body font-bold">
            <h1 className="card-title text-gray-500">Deliveries information</h1>
            <div className="font-medium text-l grid gap-2">
              <div className="badge badge-info">
                Started:
                {deliveryInformation.deliveries?.unprocessedDeliveries ?? "0"}
              </div>
              <div className="badge badge-warning">
                In progress:
                {deliveryInformation.deliveries?.processedDeliveries ?? "0"}
              </div>
              <div className="badge badge-success">
                Finished:
                {deliveryInformation.deliveries?.completedDeliveries ?? "0"}
              </div>
            </div>
            <div className="card-actions justify-end">
              <button
                className="btn btn-info"
                onClick={() =>
                  (
                    document.getElementById(
                      "my_modal_addDelivery"
                    ) as HTMLDialogElement
                  ).showModal()
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M1 1.75A.75.75 0 0 1 1.75 1h1.628a1.75 1.75 0 0 1 1.734 1.51L5.18 3a65.25 65.25 0 0 1 13.36 1.412.75.75 0 0 1 .58.875 48.645 48.645 0 0 1-1.618 6.2.75.75 0 0 1-.712.513H6a2.503 2.503 0 0 0-2.292 1.5H17.25a.75.75 0 0 1 0 1.5H2.76a.75.75 0 0 1-.748-.807 4.002 4.002 0 0 1 2.716-3.486L3.626 2.716a.25.25 0 0 0-.248-.216H1.75A.75.75 0 0 1 1 1.75ZM6 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                </svg>
                Create
              </button>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-200 shadow-xl">
          <div className="card-body font-bold">
            <h1 className="card-title text-gray-500">Transports information</h1>
            <div className="font-medium text-l grid gap-2">
              <div className="badge badge-info">
                Available:
                {deliveryInformation.transports?.readyTransports ?? "0"}
              </div>
              <div className="badge badge-warning">
                Assigned to deliveries:
                {deliveryInformation.transports?.assignedTransports ?? "0"}
              </div>
              <div className="badge badge-success">
                In transit:
                {deliveryInformation.transports?.transitTransports ?? "0"}
              </div>
            </div>
            <div className="card-actions justify-end">
              <button
                className="btn btn-info"
                onClick={() =>
                  (
                    document.getElementById(
                      "my_modal_addTransport"
                    ) as HTMLDialogElement
                  ).showModal()
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M6.5 3c-1.051 0-2.093.04-3.125.117A1.49 1.49 0 0 0 2 4.607V10.5h9V4.606c0-.771-.59-1.43-1.375-1.489A41.568 41.568 0 0 0 6.5 3ZM2 12v2.5A1.5 1.5 0 0 0 3.5 16h.041a3 3 0 0 1 5.918 0h.791a.75.75 0 0 0 .75-.75V12H2Z" />
                  <path d="M6.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM13.25 5a.75.75 0 0 0-.75.75v8.514a3.001 3.001 0 0 1 4.893 1.44c.37-.275.61-.719.595-1.227a24.905 24.905 0 0 0-1.784-8.549A1.486 1.486 0 0 0 14.823 5H13.25ZM14.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                </svg>
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* //Deliveries modals */}
      <dialog id="my_modal_assignDelivery" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-gray-500">Assign delivery</h3>
          <form method="dialog">
            {hasDeliveryAssigned ? (
              <div className="text-warning font-bold">{`Transport #${faker.string.numeric(
                6
              )} has an active delivery assigned to it (id: ${faker.string.numeric(
                6
              )}). You can proceed with the unassign operation or return back to deliveries overview.`}</div>
            ) : hasTransportAvailableDeliveries ? (
              <label className="form-control w-full max-w-sm">
                <div className="label">
                  <span className="label-text text-info font-bold">
                    Select delivery to be assigned
                  </span>
                </div>
                <select
                  className="select select-bordered text-gray-500"
                  defaultValue={"Select delivery"}
                  onChange={(e) => {
                    setSelectedDelivery(e.target.value);
                  }}
                >
                  <option disabled>Select delivery</option>
                  <option value={faker.string.numeric(6)}>
                    #{faker.string.numeric(6)}
                  </option>
                  <option value={faker.string.numeric(6)}>
                    #{faker.string.numeric(6)}
                  </option>
                  <option value={faker.string.numeric(6)}>
                    #{faker.string.numeric(6)}
                  </option>
                  <option value={faker.string.numeric(6)}>
                    #{faker.string.numeric(6)}
                  </option>
                </select>
              </label>
            ) : (
              <div className="text-red-500 font-bold">
                No available deliveries were found for this transport. Consider
                adding one, then retry this operation.
              </div>
            )}
            <div className="modal-action">
              <div className="flex gap-2">
                {hasDeliveryAssigned ? (
                  <button className="btn" onClick={handleUnassignDelivery}>
                    Unassign
                  </button>
                ) : !hasTransportAvailableDeliveries ? (
                  <></>
                ) : (
                  <button
                    className="btn"
                    onClick={handleAssignDelivery}
                    disabled={!isAssignDelivery}
                  >
                    Assign
                  </button>
                )}
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </div>
            </div>
          </form>
        </div>
      </dialog>
      <dialog id="my_modal_updateDelivery" className="modal">
        <div className="modal-box w-11/12 max-w-4xl">
          <h3 className="font-bold text-lg text-gray-500">Update delivery</h3>
          {Object.keys(deliveryUpdates).length === 0 && (
            <div className="text-warning text-sm font-bold py-2">
              *Update delivery form was not filled in. Update option was
              disabled.
            </div>
          )}
          <form className="text-gray-400" method="dialog">
            <label className="form-control w-full max-w-sm">
              <div className="label">
                <span className="label-text text-info font-bold">
                  Delivery type
                </span>
              </div>
              <select
                className="select select-bordered text-gray-500"
                defaultValue={"Select type"}
                onChange={(e) => {
                  setDeliveryUpdates((prevState) => ({
                    ...prevState,
                    deliveryType: e.target.value,
                  }));
                }}
              >
                <option disabled>Select type</option>
                <option value="Pickup">Pickup</option>
                <option value="Shipping">Shipping</option>
                <option value="Delivery">Delivery</option>
              </select>
            </label>
            <div className="flex gap-2 mt-3">
              <label className="form-control w-full max-w-sm">
                <div className="label">
                  <span className="label-text text-info font-bold">
                    Departure region
                  </span>
                </div>
                <select
                  className="select select-bordered  text-gray-500"
                  defaultValue={"Select region"}
                  onChange={(e) => {
                    setDeliveryUpdates((prevState) => ({
                      ...prevState,
                      placeOfDeparture: {
                        ...prevState.placeOfDeparture,
                        departureRegion: e.target.value,
                      },
                    }));
                  }}
                >
                  <option disabled>Select region</option>
                  <option value="Africa">Africa</option>
                  <option value="Asia">Asia</option>
                  <option value="Central America">Central America</option>
                  <option value="Europe">Europe</option>
                  <option value="Middle East">Middle East</option>
                  <option value="North America">North America</option>
                  <option value="Pacific">Pacific</option>
                  <option value="South America">South America</option>
                </select>
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-info font-bold">
                    Departure city
                  </span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  value={deliveryUpdates.placeOfDeparture?.departureCity || ""}
                  onChange={(e) => {
                    setDeliveryUpdates((prevState) => ({
                      ...prevState,
                      placeOfDeparture: {
                        ...prevState.placeOfDeparture,
                        departureCity: e.target.value,
                      },
                    }));
                  }}
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-info font-bold">
                    Departure address
                  </span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  value={
                    deliveryUpdates.placeOfDeparture?.departureAddress || ""
                  }
                  onChange={(e) => {
                    setDeliveryUpdates((prevState) => ({
                      ...prevState,
                      placeOfDeparture: {
                        ...prevState.placeOfDeparture,
                        departureAddress: e.target.value,
                      },
                    }));
                  }}
                />
              </label>
            </div>
            <div className="flex gap-2">
              <label className="form-control w-full max-w-sm">
                <div className="label">
                  <span className="label-text text-info font-bold">
                    Delivery region
                  </span>
                </div>
                <select
                  className="select select-bordered  text-gray-500"
                  defaultValue={"Select region"}
                  onChange={(e) => {
                    setDeliveryUpdates((prevState) => ({
                      ...prevState,
                      placeOfDelivery: {
                        ...prevState.placeOfDelivery,
                        deliveryRegion: e.target.value,
                      },
                    }));
                  }}
                >
                  <option disabled>Select region</option>
                  <option value="Africa">Africa</option>
                  <option value="Asia">Asia</option>
                  <option value="Central America">Central America</option>
                  <option value="Europe">Europe</option>
                  <option value="Middle East">Middle East</option>
                  <option value="North America">North America</option>
                  <option value="Pacific">Pacific</option>
                  <option value="South America">South America</option>
                </select>
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-info font-bold">
                    Delivery city
                  </span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  value={deliveryUpdates.placeOfDelivery?.deliveryCity || ""}
                  onChange={(e) => {
                    setDeliveryUpdates((prevState) => ({
                      ...prevState,
                      placeOfDelivery: {
                        ...prevState.placeOfDelivery,
                        deliveryCity: e.target.value,
                      },
                    }));
                  }}
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-info font-bold">
                    Delivery address
                  </span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  value={deliveryUpdates.placeOfDelivery?.deliveryAddress || ""}
                  onChange={(e) => {
                    setDeliveryUpdates((prevState) => ({
                      ...prevState,
                      placeOfDelivery: {
                        ...prevState.placeOfDelivery,
                        deliveryAddress: e.target.value,
                      },
                    }));
                  }}
                />
              </label>
            </div>
            <div className="text-warning font-bold text-sm py-3">
              *If the delivery it's already ongoing, this operation may fail.
            </div>
            <div className="modal-action">
              <div className="flex gap-2">
                <button
                  className="btn"
                  disabled={!isFormValid.updateDelivery}
                  onClick={handleUpdateDelivery}
                >
                  Update
                </button>
                <button className="btn">Close</button>
                {/* if there is a button in form, it will close the modal */}
              </div>
            </div>
          </form>
        </div>
      </dialog>
      <dialog id="my_modal_deleteTransport" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <h3 className="font-bold text-lg text-gray-500">
              Delete transport
            </h3>
            <div className="text-red-500 font-bold">{`This action will delete transport #${faker.string.numeric(
              6
            )}. Before continuing, make sure there is no delivery assigned to this transport, otherwise this operation will fail.`}</div>
            <div className="modal-action">
              <div className="flex gap-2">
                <button className="btn" onClick={handleDeleteTransport}>
                  Proceed
                </button>
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </div>
            </div>
          </form>
        </div>
      </dialog>
      <dialog id="my_modal_cancelDelivery" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <h3 className="font-bold text-lg text-gray-500">Cancel delivery</h3>
            <div className="text-red-500 font-bold">{`This action will cancel delivery #${faker.string.numeric(
              6
            )}. Before continuing, make sure that this delivery it's not assigned to any transport, otherwise this operation will fail.`}</div>
            <div className="modal-action">
              <div className="flex gap-2">
                <button className="btn" onClick={handleCancelDelivery}>
                  Proceed
                </button>
                <button className="btn">Close</button>
                {/* if there is a button in form, it will close the modal */}
              </div>
            </div>
          </form>
        </div>
      </dialog>
      <dialog id="my_modal_addTransport" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-gray-500">
            Create new transport
          </h3>
          {!isFormValid.addTransport && (
            <div className="text-warning font-bold text-sm py-2">
              *Add transport form was not filled in. Create option was disabled.
            </div>
          )}
          <form className="text-gray-400 font-medium" method="dialog">
            <label className="form-control w-full max-w-sm">
              <div className="label">
                <span className="label-text text-info font-bold">
                  {`Select transport type`}
                </span>
              </div>
              <select
                className="select select-bordered text-gray-500"
                defaultValue={"Select type"}
                onChange={(e) => {
                  setNewTransport((prevState) => ({
                    ...prevState,
                    transportType: e.target.value,
                  }));
                }}
              >
                <option disabled>Select type</option>
                <option value="Truck">Truck</option>
                <option value="Van">Van</option>
                <option value="Plane">Plane</option>
                <option value="Ship">Ship</option>
              </select>
            </label>
            <label className="form-control w-full max-w-sm">
              <div className="label">
                <span className="label-text text-info font-bold">
                  Delivery regions
                </span>
              </div>
              <select
                className="select select-bordered  text-gray-500"
                defaultValue={"Select regions"}
                onChange={(e) => {
                  setNewTransport((prevState) => ({
                    ...prevState,
                    transportCapabilities: {
                      ...prevState.transportCapabilities,
                      availableRegions: [e.target.value],
                    },
                  }));
                }}
              >
                <option disabled>Select regions</option>
                <option value="Africa">Africa</option>
                <option value="Asia">Asia</option>
                <option value="Central America">Central America</option>
                <option value="Europe">Europe</option>
                <option value="Middle East">Middle East</option>
                <option value="North America">North America</option>
                <option value="Pacific">Pacific</option>
                <option value="South America">South America</option>
              </select>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-info font-bold">
                  Assigned region
                </span>
              </div>
              <select
                className="select select-bordered  text-gray-500"
                defaultValue={"Select region"}
                onChange={(e) => {
                  setNewTransport((prevState) => ({
                    ...prevState,
                    transportLocation: {
                      ...prevState.transportLocation,
                      transportRegion: e.target.value,
                    },
                  }));
                }}
              >
                <option disabled>Select region</option>
                <option value="Africa">Africa</option>
                <option value="Asia">Asia</option>
                <option value="Central America">Central America</option>
                <option value="Europe">Europe</option>
                <option value="Middle East">Middle East</option>
                <option value="North America">North America</option>
                <option value="Pacific">Pacific</option>
                <option value="South America">South America</option>
              </select>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-info font-bold">
                  Assigned city
                </span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                value={newTransport.transportLocation?.transportCity || ""}
                onChange={(e) => {
                  setNewTransport((prevState) => ({
                    ...prevState,
                    transportLocation: {
                      ...prevState.transportLocation,
                      transportCity: e.target.value,
                    },
                  }));
                }}
              />
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-info font-bold">
                  Capacity (kg)
                </span>
              </div>
              <input
                type="number"
                className="input input-bordered w-full max-w-xs"
                value={
                  newTransport.transportCapabilities?.transportCapacity || ""
                }
                onChange={(e) => {
                  setNewTransport((prevState) => ({
                    ...prevState,
                    transportCapabilities: {
                      ...prevState.transportCapabilities,
                      transportCapacity: e.target.value,
                    },
                  }));
                }}
              />
            </label>
            <div className="flex gap-5 mt-4 justify-center">
              <div className="flex gap-2">
                <span className="text-gray-500 font-medium">Pickup</span>
                <input
                  type="checkbox"
                  className="checkbox checkbox-success"
                  onChange={(e) => {
                    setNewTransport((prevState) => ({
                      ...prevState,
                      transportCapabilities: {
                        ...prevState.transportCapabilities,
                        canPickup: e.target.value === "on" ? true : false,
                      },
                    }));
                  }}
                />
              </div>
              <div className="flex gap-2">
                <span className="text-gray-500 font-medium">Shipping</span>
                <input
                  type="checkbox"
                  className="checkbox checkbox-success"
                  onChange={(e) => {
                    setNewTransport((prevState) => ({
                      ...prevState,
                      transportCapabilities: {
                        ...prevState.transportCapabilities,
                        canShip: e.target.value === "on" ? true : false,
                      },
                    }));
                  }}
                />
              </div>
            </div>
            <div className="modal-action">
              <div className="flex gap-2">
                <button
                  className="btn"
                  onClick={handleAddTransport}
                  disabled={!isFormValid.addTransport}
                >
                  Create
                </button>
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </div>
            </div>
          </form>
        </div>
      </dialog>
      <dialog id="my_modal_addDelivery" className="modal">
        <div className="modal-box w-11/12 max-w-4xl">
          <h3 className="font-bold text-lg text-gray-500">
            Create new delivery
          </h3>
          {!isFormValid.addDelivery && (
            <div className="text-warning font-bold text-sm pt-3">
              *Add delivery form was not filled in. Create option was disabled.
            </div>
          )}
          <form className="text-gray-400 font-medium" method="dialog">
            <label className="form-control w-full max-w-sm">
              <div className="label">
                <span className="label-text text-info font-bold">
                  Delivery type
                </span>
              </div>
              <select
                className="select select-bordered  text-gray-500"
                defaultValue={"Select type"}
                onChange={(e) => {
                  setNewDelivery((prevState) => ({
                    ...prevState,
                    deliveryType: e.target.value,
                  }));
                }}
              >
                <option disabled>Select type</option>
                <option value="Pickup">Pickup</option>
                <option value="Shipping">Shipping</option>
                <option value="Delivery">Delivery</option>
              </select>
            </label>
            <div className="flex gap-2 mt-3">
              <label className="form-control w-full max-w-sm">
                <div className="label">
                  <span className="label-text text-info font-bold">
                    Departure region
                  </span>
                </div>
                <select
                  className="select select-bordered  text-gray-500"
                  defaultValue={"Select region"}
                  onChange={(e) => {
                    setNewDelivery((prevState) => ({
                      ...prevState,
                      placeOfDeparture: {
                        ...prevState.placeOfDeparture,
                        departureRegion: e.target.value,
                      },
                    }));
                  }}
                >
                  <option disabled>Select region</option>
                  <option value="Africa">Africa</option>
                  <option value="Asia">Asia</option>
                  <option value="Central America">Central America</option>
                  <option value="Europe">Europe</option>
                  <option value="Middle East">Middle East</option>
                  <option value="North America">North America</option>
                  <option value="Pacific">Pacific</option>
                  <option value="South America">South America</option>
                </select>
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-info font-bold">
                    Departure country
                  </span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  value={newDelivery.placeOfDeparture?.departureCountry || ""}
                  onChange={(e) => {
                    setNewDelivery((prevState) => ({
                      ...prevState,
                      placeOfDeparture: {
                        ...prevState.placeOfDeparture,
                        departureCountry: e.target.value,
                      },
                    }));
                  }}
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-info font-bold">
                    Departure city
                  </span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  value={newDelivery.placeOfDeparture?.departureCity || ""}
                  onChange={(e) => {
                    setNewDelivery((prevState) => ({
                      ...prevState,
                      placeOfDeparture: {
                        ...prevState.placeOfDeparture,
                        departureCity: e.target.value,
                      },
                    }));
                  }}
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-info font-bold">
                    Departure address
                  </span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  value={newDelivery.placeOfDeparture?.departureAddress || ""}
                  onChange={(e) => {
                    setNewDelivery((prevState) => ({
                      ...prevState,
                      placeOfDeparture: {
                        ...prevState.placeOfDeparture,
                        departureAddress: e.target.value,
                      },
                    }));
                  }}
                />
              </label>
            </div>
            <div className="flex gap-2">
              <label className="form-control w-full max-w-sm">
                <div className="label">
                  <span className="label-text text-info font-bold">
                    Delivery region
                  </span>
                </div>
                <select
                  className="select select-bordered  text-gray-500"
                  defaultValue={"Select region"}
                  onChange={(e) => {
                    setNewDelivery((prevState) => ({
                      ...prevState,
                      placeOfDelivery: {
                        ...prevState.placeOfDelivery,
                        deliveryRegion: e.target.value,
                      },
                    }));
                  }}
                >
                  <option disabled>Select region</option>
                  <option value="Africa">Africa</option>
                  <option value="Asia">Asia</option>
                  <option value="Central America">Central America</option>
                  <option value="Europe">Europe</option>
                  <option value="Middle East">Middle East</option>
                  <option value="North America">North America</option>
                  <option value="Pacific">Pacific</option>
                  <option value="South America">South America</option>
                </select>
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-info font-bold">
                    Delivery country
                  </span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  value={newDelivery.placeOfDelivery?.deliveryCountry || ""}
                  onChange={(e) => {
                    setNewDelivery((prevState) => ({
                      ...prevState,
                      placeOfDelivery: {
                        ...prevState.placeOfDelivery,
                        deliveryCountry: e.target.value,
                      },
                    }));
                  }}
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-info font-bold">
                    Delivery city
                  </span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  value={newDelivery.placeOfDelivery?.deliveryCity || ""}
                  onChange={(e) => {
                    setNewDelivery((prevState) => ({
                      ...prevState,
                      placeOfDelivery: {
                        ...prevState.placeOfDelivery,
                        deliveryCity: e.target.value,
                      },
                    }));
                  }}
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-info font-bold">
                    Delivery address
                  </span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  value={newDelivery.placeOfDelivery?.deliveryAddress || ""}
                  onChange={(e) => {
                    setNewDelivery((prevState) => ({
                      ...prevState,
                      placeOfDelivery: {
                        ...prevState.placeOfDelivery,
                        deliveryAddress: e.target.value,
                      },
                    }));
                  }}
                />
              </label>
            </div>

            <div className="modal-action">
              <div className="flex gap-2">
                <button
                  className="btn"
                  disabled={!isFormValid.addDelivery}
                  onClick={handleAddDelivery}
                >
                  Create
                </button>
                <button className="btn">Close</button>
                {/* if there is a button in form, it will close the modal */}
              </div>
            </div>
          </form>
        </div>
      </dialog>
      {/* //Deliveries modals end */}
      <div className="collapse collapse-arrow bg-base-200 shadow-xl">
        <input type="checkbox" />
        <div className="collapse-title text-l font-bold text-gray-500">
          Deliveries
        </div>
        <div className="collapse-content">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="text-info">
                  <th>Id</th>
                  <th>Type</th>
                  <th>Departs From</th>
                  <th>Deliver To</th>
                  <th>Status</th>
                  <th>Estimated cost</th>
                  <th>LastUpdated</th>
                </tr>
              </thead>
              <tbody className="font-medium text-gray-400">
                {deliveryTable.map((el: any, index: any) => {
                  return (
                    <tr className="hover" key={el._id}>
                      <td>
                        <div className="dropdown dropdown-hover dropdown-right">
                          <div
                            tabIndex={0}
                            role="button"
                            className="font-bold hover:text-info"
                          >
                            #{el._id}
                          </div>
                          <ul
                            tabIndex={0}
                            className="dropdown-content z-[2] menu p-2 shadow bg-base-200 rounded-box w-52"
                          >
                            <li className="text-warning">
                              <a
                                onClick={() => {
                                  setCurrentDelivery(el._id);
                                  (
                                    document.getElementById(
                                      "my_modal_updateDelivery"
                                    ) as HTMLDialogElement
                                  ).showModal();
                                }}
                              >
                                Update delivery
                              </a>
                            </li>
                            <li className="text-red-500">
                              <a
                                onClick={() => {
                                  setCurrentDelivery(el._id);
                                  (
                                    document.getElementById(
                                      "my_modal_cancelDelivery"
                                    ) as HTMLDialogElement
                                  ).showModal();
                                }}
                              >
                                Cancel delivery
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>{el.deliveryType}</td>
                      <td>{el.placeOfDeparture.departureCity}</td>
                      <td>{el.placeOfDelivery.deliveryCity}</td>
                      <td>{mapDeliveryStatus(el.currentStatus)}</td>
                      <td>{convertMongoCurrency(el.estimatedDeliveryCost)}</td>
                      <td>{convertMongoDate(el.updatedAt)}</td>
                    </tr>
                  );
                })}
                {/* <tr className="hover">
                  <td>
                    <div className="dropdown dropdown-hover">
                      <div
                        tabIndex={0}
                        role="button"
                        className="font-bold hover:text-info"
                      >
                        #{faker.string.numeric(6)}
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52"
                      >
                        <li className="text-warning">
                          <a
                            onClick={() =>
                              (
                                document.getElementById(
                                  "my_modal_updateDelivery"
                                ) as HTMLDialogElement
                              ).showModal()
                            }
                          >
                            Update delivery
                          </a>
                        </li>
                        <li className="text-red-500">
                          <a
                            onClick={() =>
                              (
                                document.getElementById(
                                  "my_modal_cancelDelivery"
                                ) as HTMLDialogElement
                              ).showModal()
                            }
                          >
                            Cancel delivery
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td>
                    {
                      mockedDeliveryType[
                        Math.floor(Math.random() * mockedDeliveryType.length)
                      ]
                    }
                  </td>
                  <td>{faker.location.country()}</td>
                  <td>{faker.location.country()}</td>
                  <td>
                    {
                      mockedDeliveryStatus[
                        Math.floor(Math.random() * mockedDeliveryStatus.length)
                      ]
                    }
                  </td>
                  <td>{faker.number.int({ min: 10000, max: 35000 })}$</td>
                  <td>{faker.date.anytime().toLocaleDateString()}</td>
                </tr>
                <tr className="hover">
                  <td>
                    <div className="dropdown dropdown-hover">
                      <div
                        tabIndex={0}
                        role="button"
                        className="font-bold hover:text-info"
                      >
                        #{faker.string.numeric(6)}
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52"
                      >
                        <li className="text-warning">
                          <a
                            onClick={() =>
                              (
                                document.getElementById(
                                  "my_modal_updateDelivery"
                                ) as HTMLDialogElement
                              ).showModal()
                            }
                          >
                            Update delivery
                          </a>
                        </li>
                        <li className="text-red-500">
                          <a
                            onClick={() =>
                              (
                                document.getElementById(
                                  "my_modal_cancelDelivery"
                                ) as HTMLDialogElement
                              ).showModal()
                            }
                          >
                            Cancel delivery
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td>
                    {
                      mockedDeliveryType[
                        Math.floor(Math.random() * mockedDeliveryType.length)
                      ]
                    }
                  </td>
                  <td>{faker.location.country()}</td>
                  <td>{faker.location.country()}</td>
                  <td>
                    {
                      mockedDeliveryStatus[
                        Math.floor(Math.random() * mockedDeliveryStatus.length)
                      ]
                    }
                  </td>
                  <td>{faker.number.int({ min: 10000, max: 35000 })}$</td>
                  <td>{faker.date.anytime().toLocaleDateString()}</td>
                </tr>
                <tr className="hover">
                  <td>
                    <div className="dropdown dropdown-hover">
                      <div
                        tabIndex={0}
                        role="button"
                        className="font-bold hover:text-info"
                      >
                        #{faker.string.numeric(6)}
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52"
                      >
                        <li className="text-warning">
                          <a
                            onClick={() =>
                              (
                                document.getElementById(
                                  "my_modal_updateDelivery"
                                ) as HTMLDialogElement
                              ).showModal()
                            }
                          >
                            Update delivery
                          </a>
                        </li>
                        <li className="text-red-500">
                          <a
                            onClick={() =>
                              (
                                document.getElementById(
                                  "my_modal_cancelDelivery"
                                ) as HTMLDialogElement
                              ).showModal()
                            }
                          >
                            Cancel delivery
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td>
                    {
                      mockedDeliveryType[
                        Math.floor(Math.random() * mockedDeliveryType.length)
                      ]
                    }
                  </td>
                  <td>{faker.location.country()}</td>
                  <td>{faker.location.country()}</td>
                  <td>
                    {
                      mockedDeliveryStatus[
                        Math.floor(Math.random() * mockedDeliveryStatus.length)
                      ]
                    }
                  </td>
                  <td>{faker.number.int({ min: 10000, max: 35000 })}$</td>
                  <td>{faker.date.anytime().toLocaleDateString()}</td>
                </tr>
                <tr className="hover">
                  <td>
                    <div className="dropdown dropdown-hover">
                      <div
                        tabIndex={0}
                        role="button"
                        className="font-bold hover:text-info"
                      >
                        #{faker.string.numeric(6)}
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52"
                      >
                        <li className="text-warning">
                          <a
                            onClick={() =>
                              (
                                document.getElementById(
                                  "my_modal_updateDelivery"
                                ) as HTMLDialogElement
                              ).showModal()
                            }
                          >
                            Update delivery
                          </a>
                        </li>
                        <li className="text-red-500">
                          <a
                            onClick={() =>
                              (
                                document.getElementById(
                                  "my_modal_cancelDelivery"
                                ) as HTMLDialogElement
                              ).showModal()
                            }
                          >
                            Cancel delivery
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td>
                    {
                      mockedDeliveryType[
                        Math.floor(Math.random() * mockedDeliveryType.length)
                      ]
                    }
                  </td>
                  <td>{faker.location.country()}</td>
                  <td>{faker.location.country()}</td>
                  <td>
                    {
                      mockedDeliveryStatus[
                        Math.floor(Math.random() * mockedDeliveryStatus.length)
                      ]
                    }
                  </td>
                  <td>{faker.number.int({ min: 10000, max: 35000 })}$</td>
                  <td>{faker.date.anytime().toLocaleDateString()}</td>
                </tr>
                <tr className="hover">
                  <td>
                    <div className="dropdown dropdown-hover">
                      <div
                        tabIndex={0}
                        role="button"
                        className="font-bold hover:text-info"
                      >
                        #{faker.string.numeric(6)}
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52"
                      >
                        <li className="text-warning">
                          <a
                            onClick={() =>
                              (
                                document.getElementById(
                                  "my_modal_updateDelivery"
                                ) as HTMLDialogElement
                              ).showModal()
                            }
                          >
                            Update delivery
                          </a>
                        </li>
                        <li className="text-red-500">
                          <a
                            onClick={() =>
                              (
                                document.getElementById(
                                  "my_modal_cancelDelivery"
                                ) as HTMLDialogElement
                              ).showModal()
                            }
                          >
                            Cancel delivery
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td>
                    {
                      mockedDeliveryType[
                        Math.floor(Math.random() * mockedDeliveryType.length)
                      ]
                    }
                  </td>
                  <td>{faker.location.country()}</td>
                  <td>{faker.location.country()}</td>
                  <td>
                    {
                      mockedDeliveryStatus[
                        Math.floor(Math.random() * mockedDeliveryStatus.length)
                      ]
                    }
                  </td>
                  <td>{faker.number.int({ min: 10000, max: 35000 })}$</td>
                  <td>{faker.date.anytime().toLocaleDateString()}</td>
                </tr> */}
              </tbody>
              {/* foot */}
              <tfoot></tfoot>
            </table>
            <div className="join py-3 float-right">
              <button className="join-item btn" onClick={deliveryPrev}>
                «
              </button>
              <button className="join-item btn ">{`Page ${deliveryPage}`}</button>
              <button className="join-item btn " onClick={deliveryNext}>
                »
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 shadow-xl">
        <input type="checkbox" />
        <div className="collapse-title text-l font-bold text-gray-500">
          Transports
        </div>
        <div className="collapse-content">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="text-info">
                  <th>Id</th>
                  <th>Type</th>
                  <th>Can Ship</th>
                  <th>Can Pickup</th>
                  <th>Capacity (kg)</th>
                  <th>Status</th>
                  <th>Assigned delivery</th>
                </tr>
              </thead>
              <tbody className="font-medium text-gray-400">
                {transportsTable.map((el: any, index: any) => {
                  return (
                    <tr className="hover" key={el._id}>
                      <td>
                        <div className="dropdown dropdown-hover dropdown-right">
                          <div
                            tabIndex={0}
                            role="button"
                            className="font-bold hover:text-info"
                          >
                            #{el._id}
                          </div>
                          <ul
                            tabIndex={0}
                            className="dropdown-content z-[2] menu p-2 shadow bg-base-200 rounded-box w-52"
                          >
                            <li className="text-warning">
                              {el.currentStatus === "Ready" && (
                                <a
                                  onClick={() => {
                                    setCurrentTransport(el._id);
                                    (
                                      document.getElementById(
                                        "my_modal_assignDelivery"
                                      ) as HTMLDialogElement
                                    ).showModal();
                                  }}
                                >
                                  Assign delivery
                                </a>
                              )}
                              {el.currentStatus === "Assigned to delivery" && (
                                <a>Unassign delivery</a>
                              )}
                            </li>
                            <li className="text-red-500">
                              <a
                                onClick={() => {
                                  setCurrentTransport(el._id);
                                  (
                                    document.getElementById(
                                      "my_modal_deleteTransport"
                                    ) as HTMLDialogElement
                                  ).showModal();
                                }}
                              >
                                Delete transport
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>{el.transportType}</td>
                      <td>
                        {mapTransportCapabilities(
                          el.transportCapabilities.canShip
                        )}
                      </td>
                      <td>
                        {mapTransportCapabilities(
                          el.transportCapabilities.canPickup
                        )}
                      </td>
                      <td>
                        {parseInt(
                          el.transportCapabilities.transportCapacity
                        ).toLocaleString("en-US")}
                      </td>
                      <td>{el.currentStatus}</td>
                      <td>#{el.assignedShipment}</td>
                    </tr>
                  );
                })}
                {/* <tr className="hover">
                  <td>
                    <div className="dropdown dropdown-hover">
                      <div
                        tabIndex={0}
                        role="button"
                        className="font-bold hover:text-info"
                      >
                        #{faker.string.numeric(6)}
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52"
                      >
                        <li className="text-warning">
                          <a
                            onClick={() =>
                              (
                                document.getElementById(
                                  "my_modal_assignDelivery"
                                ) as HTMLDialogElement
                              ).showModal()
                            }
                          >
                            Assign delivery
                          </a>
                        </li>
                        <li className="text-red-500">
                          <a
                            onClick={() =>
                              (
                                document.getElementById(
                                  "my_modal_deleteTransport"
                                ) as HTMLDialogElement
                              ).showModal()
                            }
                          >
                            Delete transport
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td>
                    {
                      mockedTransportTypes[
                        Math.floor(Math.random() * mockedTransportTypes.length)
                      ]
                    }
                  </td>
                  <td>
                    {
                      mockedTransportCapabilities[
                        Math.floor(
                          Math.random() * mockedTransportCapabilities.length
                        )
                      ]
                    }
                  </td>
                  <td>
                    {
                      mockedTransportCapabilities[
                        Math.floor(
                          Math.random() * mockedTransportCapabilities.length
                        )
                      ]
                    }
                  </td>
                  <td>{faker.number.int({ min: 500, max: 10000 })}</td>
                  <td>
                    {
                      mockedTransportStatus[
                        Math.floor(Math.random() * mockedTransportStatus.length)
                      ]
                    }
                  </td>
                  <td>#{faker.string.numeric(6)}</td>
                </tr>
                <tr className="hover">
                  <td>
                    <div className="dropdown dropdown-hover">
                      <div
                        tabIndex={0}
                        role="button"
                        className="font-bold hover:text-info"
                      >
                        #{faker.string.numeric(6)}
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52"
                      >
                        <li className="text-warning">
                          <a
                            onClick={() =>
                              (
                                document.getElementById(
                                  "my_modal_assignDelivery"
                                ) as HTMLDialogElement
                              ).showModal()
                            }
                          >
                            Assign delivery
                          </a>
                        </li>
                        <li className="text-red-500">
                          <a
                            onClick={() =>
                              (
                                document.getElementById(
                                  "my_modal_deleteTransport"
                                ) as HTMLDialogElement
                              ).showModal()
                            }
                          >
                            Delete transport
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td>
                    {
                      mockedTransportTypes[
                        Math.floor(Math.random() * mockedTransportTypes.length)
                      ]
                    }
                  </td>
                  <td>
                    {
                      mockedTransportCapabilities[
                        Math.floor(
                          Math.random() * mockedTransportCapabilities.length
                        )
                      ]
                    }
                  </td>
                  <td>
                    {
                      mockedTransportCapabilities[
                        Math.floor(
                          Math.random() * mockedTransportCapabilities.length
                        )
                      ]
                    }
                  </td>
                  <td>{faker.number.int({ min: 500, max: 10000 })}</td>
                  <td>
                    {
                      mockedTransportStatus[
                        Math.floor(Math.random() * mockedTransportStatus.length)
                      ]
                    }
                  </td>
                  <td>#{faker.string.numeric(6)}</td>
                </tr>
                <tr className="hover">
                  <td>
                    <div className="dropdown dropdown-hover">
                      <div
                        tabIndex={0}
                        role="button"
                        className="font-bold hover:text-info"
                      >
                        #{faker.string.numeric(6)}
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52"
                      >
                        <li className="text-warning">
                          <a
                            onClick={() =>
                              (
                                document.getElementById(
                                  "my_modal_assignDelivery"
                                ) as HTMLDialogElement
                              ).showModal()
                            }
                          >
                            Assign delivery
                          </a>
                        </li>
                        <li className="text-red-500">
                          <a
                            onClick={() =>
                              (
                                document.getElementById(
                                  "my_modal_deleteTransport"
                                ) as HTMLDialogElement
                              ).showModal()
                            }
                          >
                            Delete transport
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td>
                    {
                      mockedTransportTypes[
                        Math.floor(Math.random() * mockedTransportTypes.length)
                      ]
                    }
                  </td>
                  <td>
                    {
                      mockedTransportCapabilities[
                        Math.floor(
                          Math.random() * mockedTransportCapabilities.length
                        )
                      ]
                    }
                  </td>
                  <td>
                    {
                      mockedTransportCapabilities[
                        Math.floor(
                          Math.random() * mockedTransportCapabilities.length
                        )
                      ]
                    }
                  </td>
                  <td>{faker.number.int({ min: 500, max: 10000 })}</td>
                  <td>
                    {
                      mockedTransportStatus[
                        Math.floor(Math.random() * mockedTransportStatus.length)
                      ]
                    }
                  </td>
                  <td>#{faker.string.numeric(6)}</td>
                </tr>
                <tr className="hover">
                  <td>
                    <div className="dropdown dropdown-hover">
                      <div
                        tabIndex={0}
                        role="button"
                        className="font-bold hover:text-info"
                      >
                        #{faker.string.numeric(6)}
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52"
                      >
                        <li className="text-warning">
                          <a
                            onClick={() =>
                              (
                                document.getElementById(
                                  "my_modal_assignDelivery"
                                ) as HTMLDialogElement
                              ).showModal()
                            }
                          >
                            Assign delivery
                          </a>
                        </li>
                        <li className="text-red-500">
                          <a
                            onClick={() =>
                              (
                                document.getElementById(
                                  "my_modal_deleteTransport"
                                ) as HTMLDialogElement
                              ).showModal()
                            }
                          >
                            Delete transport
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td>
                    {
                      mockedTransportTypes[
                        Math.floor(Math.random() * mockedTransportTypes.length)
                      ]
                    }
                  </td>
                  <td>
                    {
                      mockedTransportCapabilities[
                        Math.floor(
                          Math.random() * mockedTransportCapabilities.length
                        )
                      ]
                    }
                  </td>
                  <td>
                    {
                      mockedTransportCapabilities[
                        Math.floor(
                          Math.random() * mockedTransportCapabilities.length
                        )
                      ]
                    }
                  </td>
                  <td>{faker.number.int({ min: 500, max: 10000 })}</td>
                  <td>
                    {
                      mockedTransportStatus[
                        Math.floor(Math.random() * mockedTransportStatus.length)
                      ]
                    }
                  </td>
                  <td>#{faker.string.numeric(6)}</td>
                </tr>
                <tr className="hover">
                  <td>
                    <div className="dropdown dropdown-hover">
                      <div
                        tabIndex={0}
                        role="button"
                        className="font-bold hover:text-info"
                      >
                        #{faker.string.numeric(6)}
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52"
                      >
                        <li className="text-warning">
                          <a
                            onClick={() =>
                              (
                                document.getElementById(
                                  "my_modal_assignDelivery"
                                ) as HTMLDialogElement
                              ).showModal()
                            }
                          >
                            Assign delivery
                          </a>
                        </li>
                        <li className="text-red-500">
                          <a
                            onClick={() =>
                              (
                                document.getElementById(
                                  "my_modal_deleteTransport"
                                ) as HTMLDialogElement
                              ).showModal()
                            }
                          >
                            Delete transport
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td>
                    {
                      mockedTransportTypes[
                        Math.floor(Math.random() * mockedTransportTypes.length)
                      ]
                    }
                  </td>
                  <td>
                    {
                      mockedTransportCapabilities[
                        Math.floor(
                          Math.random() * mockedTransportCapabilities.length
                        )
                      ]
                    }
                  </td>
                  <td>
                    {
                      mockedTransportCapabilities[
                        Math.floor(
                          Math.random() * mockedTransportCapabilities.length
                        )
                      ]
                    }
                  </td>
                  <td>{faker.number.int({ min: 500, max: 10000 })}</td>
                  <td>
                    {
                      mockedTransportStatus[
                        Math.floor(Math.random() * mockedTransportStatus.length)
                      ]
                    }
                  </td>
                  <td>#{faker.string.numeric(6)}</td>
                </tr> */}
              </tbody>
              {/* foot */}
              <tfoot></tfoot>
            </table>
            <div className="join py-3 float-right">
              <button className="join-item btn" onClick={transportsPrev}>
                «
              </button>
              <button className="join-item btn ">{`Page ${transportsPage}`}</button>
              <button className="join-item btn " onClick={transportsNext}>
                »
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveriesContent;
