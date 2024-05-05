"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { faker } from "@faker-js/faker";

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

  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  //Pickup cases
  const hasAvailablePickups = false;
  const isPickupSuccess = false;
  const hasPickupAssigned = false;


  return (
    <div className="grid gap-5 px-2">
      <div className="flex justify-between gap-5">
        <div className="card w-full bg-base-200 shadow-xl">
          <div className="card-body">
            <h1 className="card-title text-gray-500">{`Order #${orderId}`}</h1>
            <p>
              {
                mockedShippingStatus[
                  Math.floor(Math.random() * mockedShippingStatus.length)
                ]
              }
            </p>
            <div className="card-actions justify-end">
              <div className="dropdown dropdown-hover dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-info btn-sm">
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
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-200 text-gray-500 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Assigned delivery #Not assigned</h2>
            <p className="text-sm">Delivery type: N/A</p>
            <p className="text-red-500 font-bold">
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
            </p>
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
          <form method="post">
            {isPickupSuccess ? (
              <div className="text-success font-bold">
                {`Order #${orderId} has been already picked up and is now available in our local storage facility.`}
              </div>
            ) : hasPickupAssigned ? (
              <div className="text-warning font-bold">
                {`Order #${orderId} has an been already assigned to a pickup. Id: #${faker.string.numeric(
                  4
                )}`}
              </div>
            ) : hasAvailablePickups ? (
              <label className="form-control w-full max-w-xs">
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
                >
                  <option disabled selected>
                    Select pickup
                  </option>
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
          </form>
          <div className="modal-action">
            <form className="flex gap-3" method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                className={`btn ${
                  !hasAvailablePickups || isPickupSuccess || hasPickupAssigned
                    ? "btn-disabled"
                    : ""
                }`}
                type="submit"
              >
                Assign
              </button>
              <button className="btn">Close</button>
            </form>
          </div>
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
          <form method="post">
            {isPickupSuccess ? (
              <div className="text-success font-bold">
                {`Order #${orderId} has been already picked up and is now available in our local storage facility.`}
              </div>
            ) : hasPickupAssigned ? (
              <div className="text-warning font-bold">
                {`Order #${orderId} has an been already assigned to a shipment. Id: #${faker.string.numeric(
                  4
                )}`}
              </div>
            ) : hasAvailablePickups ? (
              <label className="form-control w-full max-w-xs">
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
                >
                  <option disabled selected>
                    Select pickup
                  </option>
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
          </form>
          <div className="modal-action">
            <form className="flex gap-3" method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                className={`btn ${
                  !hasAvailablePickups || isPickupSuccess || hasPickupAssigned
                    ? "btn-disabled"
                    : ""
                }`}
                type="submit"
              >
                Assign
              </button>
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      {/* Shipping modal end */}
      <dialog
        id="my_modal_delivery"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <dialog
        id="my_modal_cancel"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <dialog id="my_modal_editOrder" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg text-gray-500">
            Update order #{orderId}
          </h3>
          <form method="post">
            <div className="grid gap-2 mt-2">
              <div className="collapse collapse-arrow bg-base-200">
                <input type="checkbox" />
                <div className="collapse-title text-l font-bold text-gray-500">
                  Product details
                </div>
                <div className="collapse-content">
                  <p>hello</p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-200">
                <input type="checkbox" />
                <div className="collapse-title text-l font-bold text-gray-500">
                  Pickup details
                </div>
                <div className="collapse-content">
                  <p>hello</p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-200">
                <input type="checkbox" />
                <div className="collapse-title text-l font-bold text-gray-500">
                  Delivery details
                </div>
                <div className="collapse-content">
                  <p>hello</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-info">Current location</span>
                </div>
                <input
                  type="text"
                  placeholder="Budapest"
                  className="input input-bordered w-full max-w-xs"
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
                />
              </label>
            </div>
          </form>
          <div className="modal-action">
            <form className="flex gap-3" method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn" type="submit">
                Update order
              </button>
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
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
