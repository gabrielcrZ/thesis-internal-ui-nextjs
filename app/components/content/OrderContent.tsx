"use client";
import React, { useEffect, useState } from "react";
import { orderFilters } from "../types/Types";
import { faker } from "@faker-js/faker";
import Link from "next/link";

const OrderContent = () => {
  const mockedShippingStatus = [
    <div className="badge badge-success">At destination</div>,
    <div className="badge badge-info">In progress</div>,
    <div className="badge badge-warning">Not processed</div>,
    <div className="badge badge-error">Cancelled</div>,
  ];
  const defaultStartDate = `${new Date().getFullYear()}-01-01`;
  const defaultEndDate = `${new Date().getFullYear()}-12-31`;
  const [currentPage, setCurrentPage] = useState(1);
  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(defaultEndDate);
  const [orderId, setOrderId] = useState("");
  const [client, setClient] = useState("");

  const pageIncrease = () => {
    setCurrentPage(currentPage + 1);
  };
  const pageDecrease = () => {
    if (currentPage === 1) return;
    else setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    console.log(
      `A new call has been made because the pagination changed. Pagination: ${currentPage}`
    );
  }, [currentPage]);

  const clearFilters = () => {
    setStartDate(defaultStartDate);
    setEndDate(defaultEndDate);
    setOrderId("");
    setClient("");
  };

  const searchOrders = () => {
    let payload: orderFilters = {
      startDate: startDate,
      endDate: endDate, 
      orderId: orderId,
      clientName: client,
    };
    console.log(
      `A call has been made with payload: ${payload.clientName}, ${payload.orderId}, ${payload.startDate}, ${payload.endDate}`
    );
    setCurrentPage(1);
    clearFilters();
  };
  return (
    <div className="grid gap-3">
      <div className="collapse font-medium">
        <input type="checkbox" className="peer" />
        <div className="collapse-title flex text-base-content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
          Filters
        </div>
        <div className="collapse-content flex gap-5 overflow-x-auto">
          <form method="post" className="flex gap-3">
            <div className="flex">
              <input
                type="date"
                value={startDate}
                className="input input-bordered text-gray-400"
                onChange={(e) => {
                  setStartDate(e.target.value);
                }}
              />
              <div className="divider divider-horizontal"></div>
              <input
                type="date"
                value={endDate}
                className="input input-bordered text-gray-400"
                onChange={(e) => {
                  setEndDate(e.target.value);
                }}
              />
            </div>
            <label className="input input-bordered text-gray-400 flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="orderId"
                value={orderId}
                onChange={(e) => {
                  setOrderId(e.target.value);
                }}
              />
              <span className="badge badge-ghost font-medium">optional</span>
            </label>
            <label className="input input-bordered text-gray-400 flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="client"
                value={client}
                onChange={(e) => {
                  setClient(e.target.value);
                }}
              />
              <span className="badge badge-ghost font-medium">optional</span>
            </label>
          </form>
          <div className="flex items-center gap-2">
            <button className="btn btn-sm" onClick={searchOrders}>
              Apply
            </button>
            <button
              className="btn btn-sm"
              onClick={(e) => {
                clearFilters();
              }}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto px-3">
        <table className="table font-medium text-gray-400">
          {/* head */}
          <thead>
            <tr className="text-info">
              <th>OrderNr.</th>
              <th>Client</th>
              <th>Date</th>
              <th>Deliver To</th>
              <th>Status</th>
              <th>Location</th>
              <th>LastUpdated</th>
            </tr>
          </thead>
          <tbody>
            {/* tr1 */}
            <tr className="hover">
              <td className="text-gray-500">
                <Link
                  href={`orders/viewOrder?orderId=${faker.string.numeric(8)}`}
                >
                  <div className="font-bold hover:text-info">{`#${faker.string.numeric(
                    8
                  )}`}</div>
                </Link>
              </td>
              <td className="text-gray-500">
                <Link
                  href={`clients/viewClient?clientId=${faker.string.numeric(
                    8
                  )}`}
                >
                  <div className="font-bold hover:text-info">
                    {faker.company.name()}
                  </div>
                </Link>
              </td>
              <td>{faker.date.anytime().toDateString()}</td>
              <td>{faker.location.countryCode("alpha-3")}</td>
              <td>
                {
                  mockedShippingStatus[
                    Math.floor(Math.random() * mockedShippingStatus.length)
                  ]
                }
              </td>
              <td>{faker.location.country()}</td>
              <td>{faker.date.anytime().toDateString()}</td>
            </tr>
            {/* tr2 */}
            <tr className="hover">
              <td className="text-gray-500">
                <Link
                  href={`orders/viewOrder?orderId=${faker.string.numeric(8)}`}
                >
                  <div className="font-bold hover:text-info">{`#${faker.string.numeric(
                    8
                  )}`}</div>
                </Link>
              </td>
              <td className="text-gray-500">
                <Link
                  href={`clients/viewClient?clientId=${faker.string.numeric(
                    8
                  )}`}
                >
                  <div className="font-bold hover:text-info">
                    {faker.company.name()}
                  </div>
                </Link>
              </td>
              <td>{faker.date.anytime().toDateString()}</td>
              <td>{faker.location.countryCode("alpha-3")}</td>
              <td>
                {
                  mockedShippingStatus[
                    Math.floor(Math.random() * mockedShippingStatus.length)
                  ]
                }
              </td>
              <td>{faker.location.country()}</td>
              <td>{faker.date.anytime().toDateString()}</td>
            </tr>
            {/* tr3 */}
            <tr className="hover">
              <td className="text-gray-500">
                <Link
                  href={`orders/viewOrder?orderId=${faker.string.numeric(8)}`}
                >
                  <div className="font-bold hover:text-info">{`#${faker.string.numeric(
                    8
                  )}`}</div>
                </Link>
              </td>
              <td className="text-gray-500">
                <Link
                  href={`clients/viewClient?clientId=${faker.string.numeric(
                    8
                  )}`}
                >
                  <div className="font-bold hover:text-info">
                    {faker.company.name()}
                  </div>
                </Link>
              </td>
              <td>{faker.date.anytime().toDateString()}</td>
              <td>{faker.location.countryCode("alpha-3")}</td>
              <td>
                {
                  mockedShippingStatus[
                    Math.floor(Math.random() * mockedShippingStatus.length)
                  ]
                }
              </td>
              <td>{faker.location.country()}</td>
              <td>{faker.date.anytime().toDateString()}</td>
            </tr>
            {/* tr4 */}
            <tr className="hover">
              <td className="text-gray-500">
                <Link
                  href={`orders/viewOrder?orderId=${faker.string.numeric(8)}`}
                >
                  <div className="font-bold hover:text-info">{`#${faker.string.numeric(
                    8
                  )}`}</div>
                </Link>
              </td>
              <td className="text-gray-500">
                <Link
                  href={`clients/viewClient?clientId=${faker.string.numeric(
                    8
                  )}`}
                >
                  <div className="font-bold hover:text-info">
                    {faker.company.name()}
                  </div>
                </Link>
              </td>
              <td>{faker.date.anytime().toDateString()}</td>
              <td>{faker.location.countryCode("alpha-3")}</td>
              <td>
                {
                  mockedShippingStatus[
                    Math.floor(Math.random() * mockedShippingStatus.length)
                  ]
                }
              </td>
              <td>{faker.location.country()}</td>
              <td>{faker.date.anytime().toDateString()}</td>
            </tr>
            {/* tr5 */}
            <tr className="hover">
              <td className="text-gray-500">
                <Link
                  href={`orders/viewOrder?orderId=${faker.string.numeric(8)}`}
                >
                  <div className="font-bold hover:text-info">{`#${faker.string.numeric(
                    8
                  )}`}</div>
                </Link>
              </td>
              <td className="text-gray-500">
                <Link
                  href={`clients/viewClient?clientId=${faker.string.numeric(
                    8
                  )}`}
                >
                  <div className="font-bold hover:text-info">
                    {faker.company.name()}
                  </div>
                </Link>
              </td>
              <td>{faker.date.anytime().toDateString()}</td>
              <td>{faker.location.countryCode("alpha-3")}</td>
              <td>
                {
                  mockedShippingStatus[
                    Math.floor(Math.random() * mockedShippingStatus.length)
                  ]
                }
              </td>
              <td>{faker.location.country()}</td>
              <td>{faker.date.anytime().toDateString()}</td>
            </tr>
            {/* tr6 */}
            <tr className="hover">
              <td className="text-gray-500">
                <Link
                  href={`orders/viewOrder?orderId=${faker.string.numeric(8)}`}
                >
                  <div className="font-bold hover:text-info">{`#${faker.string.numeric(
                    8
                  )}`}</div>
                </Link>
              </td>
              <td className="text-gray-500">
                <Link
                  href={`clients/viewClient?clientId=${faker.string.numeric(
                    8
                  )}`}
                >
                  <div className="font-bold hover:text-info">
                    {faker.company.name()}
                  </div>
                </Link>
              </td>
              <td>{faker.date.anytime().toDateString()}</td>
              <td>{faker.location.countryCode("alpha-3")}</td>
              <td>
                {
                  mockedShippingStatus[
                    Math.floor(Math.random() * mockedShippingStatus.length)
                  ]
                }
              </td>
              <td>{faker.location.country()}</td>
              <td>{faker.date.anytime().toDateString()}</td>
            </tr>
            {/* tr7 */}
            <tr className="hover">
              <td className="text-gray-500">
                <Link
                  href={`orders/viewOrder?orderId=${faker.string.numeric(8)}`}
                >
                  <div className="font-bold hover:text-info">{`#${faker.string.numeric(
                    8
                  )}`}</div>
                </Link>
              </td>
              <td className="text-gray-500">
                <Link
                  href={`clients/viewClient?clientId=${faker.string.numeric(
                    8
                  )}`}
                >
                  <div className="font-bold hover:text-info">
                    {faker.company.name()}
                  </div>
                </Link>
              </td>
              <td>{faker.date.anytime().toDateString()}</td>
              <td>{faker.location.countryCode("alpha-3")}</td>
              <td>
                {
                  mockedShippingStatus[
                    Math.floor(Math.random() * mockedShippingStatus.length)
                  ]
                }
              </td>
              <td>{faker.location.country()}</td>
              <td>{faker.date.anytime().toDateString()}</td>
            </tr>
          </tbody>
          {/* foot */}
          <tfoot></tfoot>
        </table>
        <div className="join py-3 float-right">
          <button className="join-item btn" onClick={pageDecrease}>
            «
          </button>
          <button className="join-item btn ">{`Page ${currentPage}`}</button>
          <button className="join-item btn " onClick={pageIncrease}>
            »
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderContent;
