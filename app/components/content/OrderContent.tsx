"use client";
import React, { useEffect, useState } from "react";
import { ordersFilters } from "../types/Types";
// import { faker } from "@faker-js/faker";
import Link from "next/link";
import {
  convertMongoDate,
  mapShippingStatus,
  mapCurrentLocation,
} from "../helpers/Helpers";

const OrderContent = () => {
  const defaultStartDate = `${new Date().getFullYear()}-01-01`;
  const defaultEndDate = `${new Date().getFullYear()}-12-31`;
  const [tableData, setTableData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState<ordersFilters>({
    timeFilter: {
      startDate: defaultStartDate,
      endDate: defaultEndDate,
    },
    filters: {},
    pageNumber: 1,
  });

  const pageIncrease = () => {
    setFilters((prevState) => ({
      ...prevState,
      pageNumber: prevState.pageNumber + 1,
    }));
  };
  const pageDecrease = () => {
    if (filters.pageNumber === 1) return;
    setFilters((prevState) => ({
      ...prevState,
      pageNumber: prevState.pageNumber - 1,
    }));
  };

  useEffect(() => {
    fetch("http://localhost:3001/api/get-orders-table-contents", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(filters),
    })
      .then((res) => res.json())
      .then((data) => {
        setTableData(data.orders);
        setIsLoading(false);
      });
  }, [filters.pageNumber]);

  const clearFilters = () => {
    setFilters({
      timeFilter: {
        startDate: defaultStartDate,
        endDate: defaultEndDate,
      },
      filters: {},
      pageNumber: 1,
    });
    // to add call when clearingFilters to get the unfiltered data
  };

  const searchFilteredOrders = async () => {
    try {
      setFilters((prevState) => ({
        ...prevState,
        pageNumber: 1,
      }));
      await fetch("http://localhost:3001/api/get-orders-table-contents", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(filters),
      })
        .then((res) => res.json())
        .then((data) => {
          setTableData(data.orders);
          setIsLoading(false);
        });
    } catch (error: any) {
      console.log(error.message);
    }
  };

  if (isLoading)
    return (
      <></>
    );

  return (
    <div>
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
                value={filters.timeFilter?.startDate || defaultStartDate}
                className="input input-bordered text-gray-400"
                onChange={(e) => {
                  setFilters((prevState) => ({
                    ...prevState,
                    timeFilter: {
                      ...prevState.timeFilter,
                      startDate: e.target.value,
                    },
                  }));
                }}
              />
              <div className="divider divider-horizontal"></div>
              <input
                type="date"
                value={filters.timeFilter?.endDate || defaultEndDate}
                className="input input-bordered text-gray-400"
                onChange={(e) => {
                  setFilters((prevState) => ({
                    ...prevState,
                    timeFilter: {
                      ...prevState.timeFilter,
                      endDate: e.target.value,
                    },
                  }));
                }}
              />
            </div>
            <label className="input input-bordered text-gray-400 flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="orderId"
                value={filters.filters?.orderId || ""}
                onChange={(e) => {
                  setFilters((prevState) => ({
                    ...prevState,
                    filters: {
                      ...prevState.filters,
                      orderId: e.target.value,
                    },
                  }));
                }}
              />
              <span className="badge badge-ghost font-medium">optional</span>
            </label>
            <label className="input input-bordered text-gray-400 flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="client"
                value={filters.filters?.clientName || ""}
                onChange={(e) => {
                  setFilters((prevState) => ({
                    ...prevState,
                    filters: {
                      ...prevState.filters,
                      clientName: e.target.value,
                    },
                  }));
                }}
              />
              <span className="badge badge-ghost font-medium">optional</span>
            </label>
          </form>
          <div className="flex items-center gap-2">
            <button className="btn btn-sm" onClick={searchFilteredOrders}>
              Apply
            </button>
            <button className="btn btn-sm" onClick={clearFilters}>
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
              <th>Shipping Status</th>
              <th>Location</th>
              <th>LastUpdated</th>
            </tr>
          </thead>
          <tbody>
            {tableData &&
              tableData.map((el, index) => {
                return (
                  <tr key={el._id} className="hover">
                    <td className="text-gray-500">
                      <Link
                        href={`orders/viewOrder?orderId=${tableData[index]._id}`}
                      >
                        <div className="font-bold hover:text-info">{`#${tableData[index]._id}`}</div>
                      </Link>
                    </td>
                    <td className="text-gray-500">
                      <Link
                        href={`clients/viewClient?clientId=${tableData[index].clientId}`}
                      >
                        <div className="font-bold hover:text-info">
                          {
                            tableData[index].pickupDetails.pickupClient
                              .clientName
                          }
                        </div>
                      </Link>
                    </td>
                    <td>{convertMongoDate(tableData[index].createdAt)}</td>
                    <td>{tableData[index].shippingDetails.shippingCountry}</td>
                    <td>{mapShippingStatus(tableData[index])}</td>
                    <td>{mapCurrentLocation(tableData[index])}</td>
                    <td>{convertMongoDate(tableData[index].updatedAt)}</td>
                  </tr>
                );
              })}
          </tbody>
          <tfoot></tfoot>
        </table>
        <div className="join py-3 float-right">
          <button className="join-item btn" onClick={pageDecrease}>
            «
          </button>
          <button className="join-item btn ">{`Page ${filters.pageNumber}`}</button>
          <button className="join-item btn " onClick={pageIncrease}>
            »
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderContent;
