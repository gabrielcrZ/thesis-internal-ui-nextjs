"use client";
import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Link from "next/link";
import { convertMongoDate, mapOrderStatusTooltip } from "./helpers/Helpers";
// import useSWR from "swr";

const DashboardTable = () => {
  // const fetcher = (url: any) =>
  //   fetch(url, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }).then((res) => res.json());

  // const { data, error } = useSWR(
  //   "http://localhost:3001/api/get-dashboard-metrics",
  //   fetcher
  // );
  // console.log(data);
  const [tableData, setTableData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const mockedStatusTooltip = [
    <div className="tooltip tooltip-success tooltip-right" data-tip="Delivered">
      <div className="badge badge-success badge-sm"></div>
    </div>,
    <div className="tooltip tooltip-info tooltip-right" data-tip="Ongoing">
      <div className="badge badge-info badge-sm"></div>
    </div>,
    <div
      className="tooltip tooltip-warning tooltip-right"
      data-tip="Unprocessed"
    >
      <div className="badge badge-warning badge-sm"></div>
    </div>,
    <div className="tooltip tooltip-error tooltip-right" data-tip="Cancelled">
      <div className="badge badge-error badge-sm"></div>
    </div>,
  ];

  const mockedStatusBadge = [
    <div className="badge badge-info gap-2">Ongoing</div>,
    <div className="badge badge-success gap-2">Delivered</div>,
    <div className="badge badge-warning gap-2">Unprocessed</div>,
    <div className="badge badge-error gap-2">Cancelled</div>,
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const pageIncrease = () => {
    setCurrentPage(currentPage + 1);
  };
  const pageDecrease = () => {
    if (currentPage === 1) return;
    else setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    fetch("http://localhost:3001/api/get-dashboard-table-contents", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pageNumber: currentPage }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTableData(data.orders);
        setIsLoading(false);
      });
  }, [currentPage]);

  if (isLoading)
    return (
      <span className="loading loading-ring loading-lg text-gray-500 justify-self-center"></span>
    );

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>OrderNr.</th>
            <th>Date</th>
            <th>Shipping To</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {tableData &&
            tableData.map((el, index) => {
              return (
                <tr key={el._id} className="hover">
                  <td>
                    <div className="flex items-center gap-3 pl-3">
                      {mapOrderStatusTooltip(el.currentStatus)}
                      <div>
                        <div className="text-gray-400">#{el._id}</div>
                        <div className="badge badge-ghost badge-sm">
                          {el.shippingDetails.shippingCity}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-gray-400">
                    {convertMongoDate(el.createdAt)}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {el.pickupDetails.pickupClient.clientName}
                    </span>
                  </td>
                  <td className="text-gray-400">
                    {el.shippingDetails.shippingCountry}
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-info"
                      onClick={() =>
                        (
                          document.getElementById(
                            `my_modal_view${index + 1}`
                          ) as HTMLDialogElement
                        ).showModal()
                      }
                    >
                      View
                    </button>
                  </td>
                </tr>
              );
            })}
          {/* <tr className="hover">
            <td>
              <div className="flex items-center gap-3 pl-3">
                {
                  mockedStatusTooltip[
                    Math.floor(Math.random() * mockedStatusTooltip.length)
                  ]
                }
                <div>
                  <div className="text-gray-400">{`#${faker.string.numeric(
                    6
                  )}`}</div>
                  <div className="badge badge-ghost badge-sm">
                    {faker.location.country()}
                  </div>
                </div>
              </div>
            </td>
            <td className="text-gray-400">
              {faker.date.anytime().toLocaleDateString()}
              <br />
              <span className="badge badge-ghost badge-sm">
                {faker.company.name()}
              </span>
            </td>
            <td className="text-gray-400">
              {faker.location.countryCode("alpha-2")}
            </td>
            <td>
              <button
                className="btn btn-sm btn-info"
                onClick={() =>
                  (
                    document.getElementById(
                      "my_modal_view1"
                    ) as HTMLDialogElement
                  ).showModal()
                }
              >
                View
              </button>
            </td>
          </tr> */}
          {/* row 2 */}
          {/* <tr className="hover">
            <td>
              <div className="flex items-center gap-3 pl-3">
                {
                  mockedStatusTooltip[
                    Math.floor(Math.random() * mockedStatusTooltip.length)
                  ]
                }
                <div>
                  <div className="text-gray-400">{`#${faker.string.numeric(
                    6
                  )}`}</div>
                  <div className="badge badge-ghost badge-sm">
                    {faker.location.country()}
                  </div>
                </div>
              </div>
            </td>
            <td className="text-gray-400">
              {faker.date.anytime().toLocaleDateString()}
              <br />
              <span className="badge badge-ghost badge-sm">
                {faker.company.name()}
              </span>
            </td>
            <td className="text-gray-400">
              {faker.location.countryCode("alpha-2")}
            </td>
            <td>
              <button
                className="btn btn-sm btn-info"
                onClick={() =>
                  (
                    document.getElementById(
                      "my_modal_view2"
                    ) as HTMLDialogElement
                  ).showModal()
                }
              >
                View
              </button>
            </td>
          </tr> */}
          {/* row 3 */}
          {/* <tr className="hover">
            <td>
              <div className="flex items-center gap-3 pl-3">
                {
                  mockedStatusTooltip[
                    Math.floor(Math.random() * mockedStatusTooltip.length)
                  ]
                }
                <div>
                  <div className="text-gray-400">{`#${faker.string.numeric(
                    6
                  )}`}</div>
                  <div className="badge badge-ghost badge-sm">
                    {faker.location.country()}
                  </div>
                </div>
              </div>
            </td>
            <td className="text-gray-400">
              {faker.date.anytime().toLocaleDateString()}
              <br />
              <span className="badge badge-ghost badge-sm">
                {faker.company.name()}
              </span>
            </td>
            <td className="text-gray-400">
              {faker.location.countryCode("alpha-2")}
            </td>
            <td>
              <button
                className="btn btn-sm btn-info"
                onClick={() =>
                  (
                    document.getElementById(
                      "my_modal_view3"
                    ) as HTMLDialogElement
                  ).showModal()
                }
              >
                View
              </button>
            </td>
          </tr> */}
          {/* row 4 */}
          {/* <tr className="hover">
            <td>
              <div className="flex items-center gap-3 pl-3">
                {
                  mockedStatusTooltip[
                    Math.floor(Math.random() * mockedStatusTooltip.length)
                  ]
                }
                <div>
                  <div className="text-gray-400">{`#${faker.string.numeric(
                    6
                  )}`}</div>
                  <div className="badge badge-ghost badge-sm">
                    {faker.location.country()}
                  </div>
                </div>
              </div>
            </td>
            <td className="text-gray-400">
              {faker.date.anytime().toLocaleDateString()}
              <br />
              <span className="badge badge-ghost badge-sm">
                {faker.company.name()}
              </span>
            </td>
            <td className="text-gray-400">
              {faker.location.countryCode("alpha-2")}
            </td>
            <td>
              <button
                className="btn btn-sm btn-info"
                onClick={() =>
                  (
                    document.getElementById(
                      "my_modal_view4"
                    ) as HTMLDialogElement
                  ).showModal()
                }
              >
                View
              </button>
            </td>
          </tr> */}
          {/* row 5 */}
          {/* <tr className="hover">
            <td>
              <div className="flex items-center gap-3 pl-3">
                {
                  mockedStatusTooltip[
                    Math.floor(Math.random() * mockedStatusTooltip.length)
                  ]
                }
                <div>
                  <div className="text-gray-400">{`#${faker.string.numeric(
                    6
                  )}`}</div>
                  <div className="badge badge-ghost badge-sm">
                    {faker.location.country()}
                  </div>
                </div>
              </div>
            </td>
            <td className="text-gray-400">
              {faker.date.anytime().toLocaleDateString()}
              <br />
              <span className="badge badge-ghost badge-sm">
                {faker.company.name()}
              </span>
            </td>
            <td className="text-gray-400">
              {faker.location.countryCode("alpha-2")}
            </td>
            <td>
              <button
                className="btn btn-sm btn-info"
                onClick={() =>
                  (
                    document.getElementById(
                      "my_modal_view5"
                    ) as HTMLDialogElement
                  ).showModal()
                }
              >
                View
              </button>
            </td>
          </tr> */}
        </tbody>
        {/* foot */}
        <tfoot></tfoot>
      </table>
      {/* //View modals */}
      {tableData &&
        tableData.map((el, index) => {
          return (
            <dialog
              key={`${el._id}-modal`}
              id={`my_modal_view${index + 1}`}
              className="modal"
            >
              <div className="modal-box w-11/12 max-w-xl">
                <h3 className="font-bold text-l text-info">{`Order #${el._id}`}</h3>
                <ul className="grid grid-cols-2 gap-1 text-sm font-medium text-gray-400 pt-2">
                  <li>• Date - {convertMongoDate(el.createdAt)}</li>
                  <li>• Shipping From - {el.pickupDetails.pickupCity}</li>
                  <li>
                    • Assigned Shipment - {el.shippingDetails.shippingId ?? "Not assigned"}
                  </li>
                  <li>• Shipping To - {el.shippingDetails.shippingCity}</li>
                  <li>• Revenue - {el.estimatedRevenue}$</li>
                  <li>• Current Location - {el.currentLocation}</li>
                  <li>• Last Updated - {convertMongoDate(el.updatedAt)}</li>
                  <li>• Current Status - {el.currentStatus}</li>
                </ul>
                <div className="modal-action">
                  <form className="flex gap-2" method="dialog">
                    <Link
                      className="btn"
                      href={`/orders/viewOrder?orderId=${el._id}`}
                    >
                      Check order
                    </Link>
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          );
        })}
      {/* <dialog id="my_modal_view2" className="modal">
        <div className="modal-box w-11/12 max-w-xl">
          <h3 className="font-bold text-l text-gray-500">{`Order #${faker.string.numeric(
            8
          )}`}</h3>
          <ul className="grid grid-cols-2 gap-1 text-sm font-medium text-gray-400 pt-2">
            <li>• Date - {new Date().toLocaleDateString()}</li>
            <li>• Shipping From - {faker.location.country()}</li>
            <li>• Assigned shipment - #{faker.string.numeric()}</li>
            <li>• Shipping To - {faker.location.country()}</li>
            <li>• Revenue - {faker.number.int({ min: 1000, max: 60000 })}$</li>
            <li>• Current location - {faker.location.country()}</li>
            <li>
              • Estimated cost - {faker.number.int({ min: 100, max: 50000 })}$
            </li>
            <li>• Contact - {faker.phone.number()}</li>
          </ul>
          <div className="modal-action">
            <form className="flex gap-2" method="dialog">
              <Link
                className="btn"
                href={`/orders/viewOrder?orderId=${faker.string.numeric(8)}`}
              >
                Check order
              </Link>
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <dialog id="my_modal_view3" className="modal">
        <div className="modal-box w-11/12 max-w-xl">
          <h3 className="font-bold text-l text-gray-500">{`Order #${faker.string.numeric(
            8
          )}`}</h3>
          <ul className="grid grid-cols-2 gap-1 text-sm font-medium text-gray-400 pt-2">
            <li>• Date - {new Date().toLocaleDateString()}</li>
            <li>• Shipping From - {faker.location.country()}</li>
            <li>• Assigned shipment - #{faker.string.numeric()}</li>
            <li>• Shipping To - {faker.location.country()}</li>
            <li>• Revenue - {faker.number.int({ min: 1000, max: 60000 })}$</li>
            <li>• Current location - {faker.location.country()}</li>
            <li>
              • Estimated cost - {faker.number.int({ min: 100, max: 50000 })}$
            </li>
            <li>• Contact - {faker.phone.number()}</li>
          </ul>
          <div className="modal-action">
            <form className="flex gap-2" method="dialog">
              <Link
                className="btn"
                href={`/orders/viewOrder?orderId=${faker.string.numeric(8)}`}
              >
                Check order
              </Link>
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <dialog id="my_modal_view4" className="modal">
        <div className="modal-box w-11/12 max-w-xl">
          <h3 className="font-bold text-l text-gray-500">{`Order #${faker.string.numeric(
            8
          )}`}</h3>
          <ul className="grid grid-cols-2 gap-1 text-sm font-medium text-gray-400 pt-2">
            <li>• Date - {new Date().toLocaleDateString()}</li>
            <li>• Shipping From - {faker.location.country()}</li>
            <li>• Assigned shipment - #{faker.string.numeric()}</li>
            <li>• Shipping To - {faker.location.country()}</li>
            <li>• Revenue - {faker.number.int({ min: 1000, max: 60000 })}$</li>
            <li>• Current location - {faker.location.country()}</li>
            <li>
              • Estimated cost - {faker.number.int({ min: 100, max: 50000 })}$
            </li>
            <li>• Contact - {faker.phone.number()}</li>
          </ul>
          <div className="modal-action">
            <form className="flex gap-2" method="dialog">
              <Link
                className="btn"
                href={`/orders/viewOrder?orderId=${faker.string.numeric(8)}`}
              >
                Check order
              </Link>
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <dialog id="my_modal_view5" className="modal">
        <div className="modal-box w-11/12 max-w-xl">
          <h3 className="font-bold text-l text-gray-500">{`Order #${faker.string.numeric(
            8
          )}`}</h3>
          <ul className="grid grid-cols-2 gap-1 text-sm font-medium text-gray-400 pt-2">
            <li>• Date - {new Date().toLocaleDateString()}</li>
            <li>• Shipping From - {faker.location.country()}</li>
            <li>• Assigned shipment - #{faker.string.numeric()}</li>
            <li>• Shipping To - {faker.location.country()}</li>
            <li>• Revenue - {faker.number.int({ min: 1000, max: 60000 })}$</li>
            <li>• Current location - {faker.location.country()}</li>
            <li>
              • Estimated cost - {faker.number.int({ min: 100, max: 50000 })}$
            </li>
            <li>• Contact - {faker.phone.number()}</li>
          </ul>
          <div className="modal-action">
            <form className="flex gap-2" method="dialog">
              <Link
                className="btn"
                href={`/orders/viewOrder?orderId=${faker.string.numeric(8)}`}
              >
                Check order
              </Link>
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog> */}
      {/* //View modals end */}
      <div className="join pr-5 float-right mt-1">
        <button className="join-item btn" onClick={pageDecrease}>
          «
        </button>
        <button className="join-item btn">{`Page ${currentPage}`}</button>
        <button className="join-item btn" onClick={pageIncrease}>
          »
        </button>
      </div>
    </div>
  );
};

export default DashboardTable;
