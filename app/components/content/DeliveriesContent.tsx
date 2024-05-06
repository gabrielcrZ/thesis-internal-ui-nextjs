"use client";
import React, { useState } from "react";
import { faker } from "@faker-js/faker";

const DeliveriesContent = () => {
  const mockedShippingStatus = [
    <div className="badge badge-info">Ongoing delivery</div>,
    <div className="badge badge-warning">Not started</div>,
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const pageIncrease = () => {
    setCurrentPage(currentPage + 1);
  };
  const pageDecrease = () => {
    if (currentPage === 1) return;
    else setCurrentPage(currentPage - 1);
  };

  return (
    <div className="my-5 px-3">
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
              <th>Assigned transport</th>
              <th>LastUpdated</th>
            </tr>
          </thead>
          <tbody></tbody>
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

export default DeliveriesContent;
