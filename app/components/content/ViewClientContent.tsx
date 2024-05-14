"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { faker } from "@faker-js/faker";
import { clientUpdates } from "../types/Types";

const ViewClientContent = () => {
  const searchParams = useSearchParams();
  const clientId = searchParams.get("clientId");
  const mockedShippingStatus = [
    <div className="badge">Unknown</div>,
    <div className="badge badge-success">At destination</div>,
    <div className="badge badge-info">Shipment in progress</div>,
    <div className="badge badge-warning">Shipment not assigned</div>,
    <div className="badge badge-error">Order cancelled</div>,
  ];

  const [clientUpdates, setClientUpdates] = useState<clientUpdates>({});

  useEffect(() => {
    console.log(
      `A call has been made for retrieving client information. clientId: ${clientId}`
    );
  });

  const handleDeleteClient = () => {
    console.log(
      `A call for deleting the client has been made. clientId: ${clientId}`
    );
  };

  const handleUpdateClient = () => {
    console.log(
      `A call for updating the client has been made. clientId: ${clientId} and updates: ${JSON.stringify(
        clientUpdates,
        null,
        4
      )}`
    );
  };

  return (
    <div className="grid gap-5 px-2">
      <div className="flex justify-between gap-5">
        <div className="card w-full bg-base-200 shadow-xl">
          <div className="card-body">
            <h1 className="card-title text-gray-500">{`Client #${clientId}`}</h1>
            <h2 className="card-title text-info">{faker.company.name()}</h2>
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
                  <li className="text-warning">
                    <a
                      onClick={() =>
                        (
                          document.getElementById(
                            "my_modal_updateClient"
                          ) as HTMLDialogElement
                        ).showModal()
                      }
                    >
                      Update client
                    </a>
                  </li>
                  <li className="text-red-500">
                    <a
                      onClick={() =>
                        (
                          document.getElementById(
                            "my_modal_deleteClient"
                          ) as HTMLDialogElement
                        ).showModal()
                      }
                    >
                      Delete client
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-200 shadow-xl">
          <div className="card-body font-bold">
            <h1 className="card-title text-gray-500">Contact information</h1>
            <p className="text-info text-sm flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2.106 6.447A2 2 0 0 0 1 8.237V16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.236a2 2 0 0 0-1.106-1.789l-7-3.5a2 2 0 0 0-1.788 0l-7 3.5Zm1.48 4.007a.75.75 0 0 0-.671 1.342l5.855 2.928a2.75 2.75 0 0 0 2.46 0l5.852-2.927a.75.75 0 1 0-.67-1.341l-5.853 2.926a1.25 1.25 0 0 1-1.118 0l-5.856-2.928Z"
                  clipRule="evenodd"
                />
              </svg>
              {faker.internet.email()}
            </p>
            <p className="text-info text-sm flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
                  clipRule="evenodd"
                />
              </svg>
              {faker.location.streetAddress()}
            </p>
            <p className="text-info text-sm flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M8 16.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z" />
                <path
                  fillRule="evenodd"
                  d="M4 4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4Zm4-1.5v.75c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75V2.5h1A1.5 1.5 0 0 1 14.5 4v12a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 16V4A1.5 1.5 0 0 1 7 2.5h1Z"
                  clipRule="evenodd"
                />
              </svg>
              {faker.phone.number()}
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 shadow-xl">
        <input type="checkbox" />
        <div className="collapse-title text-l font-bold text-gray-500">
          Orders history
        </div>
        <div className="collapse-content">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="text-info">
                  <th></th>
                  <th>Date</th>
                  <th>Pickup from</th>
                  <th>Deliver to</th>
                  <th>Current location</th>
                  <th>Current status</th>
                  <th>Last updated</th>
                </tr>
              </thead>
              <tbody className="text-gray-400 font-medium">
                {/* row 1 */}
                <tr className="hover">
                  <th>1</th>
                  <td>{faker.date.anytime().toLocaleDateString()}</td>
                  <td>{faker.location.country()}</td>
                  <td>{faker.location.country()}</td>
                  <td>{faker.location.city()}</td>
                  <td>
                    {
                      mockedShippingStatus[
                        Math.floor(Math.random() * mockedShippingStatus.length)
                      ]
                    }
                  </td>
                  <td>{faker.date.anytime().toLocaleDateString()}</td>
                </tr>
                {/* row 2 */}
                <tr className="hover">
                  <th>2</th>
                  <td>{faker.date.anytime().toLocaleDateString()}</td>
                  <td>{faker.location.country()}</td>
                  <td>{faker.location.country()}</td>
                  <td>{faker.location.city()}</td>
                  <td>
                    {
                      mockedShippingStatus[
                        Math.floor(Math.random() * mockedShippingStatus.length)
                      ]
                    }
                  </td>
                  <td>{faker.date.anytime().toLocaleDateString()}</td>
                </tr>
                {/* row 3 */}
                <tr className="hover">
                  <th>3</th>
                  <td>{faker.date.anytime().toLocaleDateString()}</td>
                  <td>{faker.location.country()}</td>
                  <td>{faker.location.country()}</td>
                  <td>{faker.location.city()}</td>
                  <td>
                    {
                      mockedShippingStatus[
                        Math.floor(Math.random() * mockedShippingStatus.length)
                      ]
                    }
                  </td>
                  <td>{faker.date.anytime().toLocaleDateString()}</td>
                </tr>
                {/* row 4 */}
                <tr className="hover">
                  <th>4</th>
                  <td>{faker.date.anytime().toLocaleDateString()}</td>
                  <td>{faker.location.country()}</td>
                  <td>{faker.location.country()}</td>
                  <td>{faker.location.city()}</td>
                  <td>
                    {
                      mockedShippingStatus[
                        Math.floor(Math.random() * mockedShippingStatus.length)
                      ]
                    }
                  </td>
                  <td>{faker.date.anytime().toLocaleDateString()}</td>
                </tr>
                {/* row 5 */}
                <tr className="hover">
                  <th>5</th>
                  <td>{faker.date.anytime().toLocaleDateString()}</td>
                  <td>{faker.location.country()}</td>
                  <td>{faker.location.country()}</td>
                  <td>{faker.location.city()}</td>
                  <td>
                    {
                      mockedShippingStatus[
                        Math.floor(Math.random() * mockedShippingStatus.length)
                      ]
                    }
                  </td>
                  <td>{faker.date.anytime().toLocaleDateString()}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* //Update client modal */}
      <dialog id="my_modal_updateClient" className="modal">
        <div className="modal-box w-6/12 max-w-5xl">
          <h3 className="font-bold text-lg text-gray-500">Update client</h3>
          <div className="text-warning font-bold py-2 text-sm">
            No updates were provided. Update option has been disabled.
          </div>
          <form method="dialog">
            <div className="flex gap-2 mt-2 font-bold text-gray-400">
              {/* //Update client inputs */}
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-info">Client name</span>
                </div>
                <input
                  type="text"
                  placeholder={faker.person.fullName()}
                  className="input input-bordered w-full max-w-xs"
                  value={clientUpdates.clientName || ""}
                  onChange={(e) => {
                    setClientUpdates((prevState) => ({
                      ...prevState,
                      clientName: e.target.value,
                    }));
                  }}
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-info">Client Address</span>
                </div>
                <input
                  type="text"
                  placeholder={faker.location.streetAddress()}
                  className="input input-bordered w-full max-w-xs"
                  value={clientUpdates.clientAddress || ""}
                  onChange={(e) => {
                    setClientUpdates((prevState) => ({
                      ...prevState,
                      clientAddress: e.target.value,
                    }));
                  }}
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-info">Client phone</span>
                </div>
                <input
                  type="text"
                  placeholder={faker.phone.number()}
                  className="input input-bordered w-full max-w-xs"
                  value={clientUpdates.clientPhone || ""}
                  onChange={(e) => {
                    setClientUpdates((prevState) => ({
                      ...prevState,
                      clientPhone: e.target.value,
                    }));
                  }}
                />
              </label>
              {/* //Update client inputs end */}
            </div>
            <div className="modal-action">
              <div className="flex gap-2">
                <button
                  className="btn"
                  onClick={handleUpdateClient}
                  disabled={Object.keys(clientUpdates).length === 0}
                >
                  Update client
                </button>
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </div>
            </div>
          </form>
        </div>
      </dialog>
      {/* Update client modal end */}
      {/* Delete client modal */}
      <dialog id="my_modal_deleteClient" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-gray-500">Delete client</h3>
          <form method="dialog" className="font-bold text-red-500">
            {`Make sure client #${clientId} does not have any undergoing deliveries. Cancel any active deliveries first, otherwise this operation will fail!`}
            <div className="modal-action">
              <div className="flex gap-2">
                <button className="btn" onClick={handleDeleteClient}>
                  Proceed
                </button>
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </div>
            </div>
          </form>
        </div>
      </dialog>
      {/* Delete client modal end */}
    </div>
  );
};

export default ViewClientContent;
