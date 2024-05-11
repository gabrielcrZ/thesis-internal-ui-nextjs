"use client";
import React, { useState } from "react";
import { faker } from "@faker-js/faker";

const DeliveriesContent = () => {
  const mockedDeliveryStatus = [
    <div className="badge badge-info">Ongoing</div>,
    <div className="badge badge-warning">Pending</div>,
    <div className="badge badge-success">Finished</div>,
  ];

  const mockedDeliveryType = ["Pickup", "Shipping", "Delivery"];
  const [deliveryPage, setDeliveryPage] = useState(1);
  const [transportsPage, setTransportPage] = useState(1);
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
  const isDeliveryProcessed = true;

  return (
    <div className="grid gap-5 px-2">
      <div className="flex justify-between gap-5">
        <div className="card w-full bg-base-200 shadow-xl">
          <div className="card-body font-bold">
            <h1 className="card-title text-gray-500">Deliveries information</h1>
            <p className="font-medium text-l grid gap-2">
              <div className="badge badge-info">Started: 10</div>
              <div className="badge badge-warning">In progress: 10</div>
              <div className="badge badge-success">Finished: 10</div>
            </p>
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
            <p className="font-medium text-l grid gap-2">
              <div className="badge badge-info">Available: 10</div>
              <div className="badge badge-warning">
                Assigned to deliveries: 10
              </div>
              <div className="badge badge-success">In transit: 10</div>
            </p>
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
          {hasDeliveryAssigned ? (
            <div className="text-warning font-bold">{`Transport #${faker.string.numeric(
              6
            )} has an active delivery assigned to it (id: ${faker.string.numeric(
              6
            )}). You can proceed with the unassign operation or return back to deliveries overview.`}</div>
          ) : (
            <form method="post">
              <label className="form-control w-full max-w-sm">
                <div className="label">
                  <span className="label-text text-info font-bold">
                    Select delivery to be assigned
                  </span>
                </div>
                <select className="select select-bordered text-gray-500">
                  <option disabled selected>
                    Select delivery
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
                  <option value={faker.string.numeric(6)}>
                    #{faker.string.numeric(6)}
                  </option>
                </select>
              </label>
              <div className="modal-action">
                <div className="flex gap-2">
                  {hasDeliveryAssigned ? (
                    <button className="btn">Unassign</button>
                  ) : (
                    <button className="btn">Assign</button>
                  )}
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </form>
          )}
        </div>
      </dialog>
      <dialog id="my_modal_updateDelivery" className="modal">
        <div className="modal-box w-11/12 max-w-4xl">
          <h3 className="font-bold text-lg text-gray-500">Update delivery</h3>
          <form className="text-gray-400" method="post">
            <label className="form-control w-full max-w-sm">
              <div className="label">
                <span className="label-text text-info font-bold">
                  Delivery type
                </span>
              </div>
              <select className="select select-bordered text-gray-500">
                <option disabled selected>
                  Select type
                </option>
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
                <select className="select select-bordered  text-gray-500">
                  <option disabled selected>
                    Select region
                  </option>
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
                <select className="select select-bordered  text-gray-500">
                  <option disabled selected>
                    Select region
                  </option>
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
                />
              </label>
            </div>
            <div className="text-warning font-bold mt-5">
              *If the delivery it's already ongoing, this operation may fail.
            </div>
            <div className="modal-action">
              <div className="flex gap-2">
                <button className="btn">Update</button>
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
                {/* if there is a button in form, it will close the modal */}
              </div>
            </div>
          </form>
        </div>
      </dialog>
      <dialog id="my_modal_deleteTransport" className="modal">
        <div className="modal-box">
          <form method="post">
            <h3 className="font-bold text-lg text-gray-500">
              Delete transport
            </h3>
            <div className="text-red-500 font-bold">{`This action will delete transport #${faker.string.numeric(
              6
            )}. Before continuing, make sure there is no delivery assigned to this transport, otherwise this operation will fail.`}</div>
            <div className="modal-action">
              <div className="flex gap-2">
                <button className="btn">Proceed</button>
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </form>
        </div>
      </dialog>
      <dialog id="my_modal_cancelDelivery" className="modal">
        <div className="modal-box">
          <form method="post">
            <h3 className="font-bold text-lg text-gray-500">Cancel delivery</h3>
            <div className="text-red-500 font-bold">{`This action will cancel delivery #${faker.string.numeric(
              6
            )}. Before continuing, make sure that this delivery it's not assigned to any transport, otherwise this operation will fail.`}</div>
            <div className="modal-action">
              <div className="flex gap-2">
                <button className="btn">Proceed</button>
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
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
          <form className="text-gray-400 font-medium" method="post">
            <label className="form-control w-full max-w-sm">
              <div className="label">
                <span className="label-text text-info font-bold">
                  {`Select transport type`}
                </span>
              </div>
              <select className="select select-bordered text-gray-500">
                <option disabled selected>
                  Select type
                </option>
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
              <select className="select select-bordered  text-gray-500">
                <option disabled selected>
                  Select regions
                </option>
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
                  Assigned Region
                </span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-info font-bold">
                  Assigned Country
                </span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
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
              />
            </label>
            <div className="flex gap-5 mt-4 justify-center">
              <div className="flex gap-2">
                <span className="text-gray-500 font-medium">Pickup</span>
                <input type="checkbox" className="checkbox checkbox-success" />
              </div>
              <div className="flex gap-2">
                <span className="text-gray-500 font-medium">Shipping</span>
                <input type="checkbox" className="checkbox checkbox-success" />
              </div>
            </div>
            <div className="modal-action">
              <div className="flex gap-2">
                <button className="btn" type="submit">
                  Create
                </button>
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
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
          <form className="text-gray-400 font-medium" method="post">
            <label className="form-control w-full max-w-sm">
              <div className="label">
                <span className="label-text text-info font-bold">
                  Delivery type
                </span>
              </div>
              <select className="select select-bordered  text-gray-500">
                <option disabled selected>
                  Select type
                </option>
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
                <select className="select select-bordered  text-gray-500">
                  <option disabled selected>
                    Select region
                  </option>
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
                <select className="select select-bordered  text-gray-500">
                  <option disabled selected>
                    Select region
                  </option>
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
                />
              </label>
            </div>
            <div className="modal-action">
              <div className="flex gap-2">
                <button className="btn" type="submit">
                  Create
                </button>
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
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
