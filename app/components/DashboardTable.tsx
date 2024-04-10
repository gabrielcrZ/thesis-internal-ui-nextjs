"use client";
import Link from "next/link";
import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import Modal from "./Modal";

const DashboardTable = () => {
  const mockedStatusTooltip = [
    <div className="tooltip tooltip-success tooltip-right" data-tip="Shipped">
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

  const [currentPage, setCurrentPage] = useState(1);
  const pageIncrease = () => {
    setCurrentPage(currentPage + 1);
  };
  const pageDecrease = () => {
    if (currentPage === 1) return;
    else setCurrentPage(currentPage - 1);
  };

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
          <tr className="hover">
            <td>
              <div className="flex items-center gap-3 pl-3">
                {
                  mockedStatusTooltip[
                    Math.floor(Math.random() * mockedStatusTooltip.length)
                  ]
                }
                <div>
                  <div className="font-bold">{`#${faker.string.numeric(
                    6
                  )}`}</div>
                  <div className="text-sm opacity-50">
                    {faker.location.country()}
                  </div>
                </div>
              </div>
            </td>
            <td>
              {faker.date.anytime().toLocaleDateString()}
              <br />
              <span className="badge badge-ghost badge-sm">
                {faker.company.name()}
              </span>
            </td>
            <td>{faker.location.countryCode("alpha-2")}</td>
            <th>
            <Modal btnName="View" title={`OrderNr. #${faker.string.numeric(6)}`}>
                Aici pun campurile
              </Modal>
            </th>
          </tr>
          {/* row 2 */}
          <tr className="hover">
            <td>
              <div className="flex items-center gap-3 pl-3">
                {
                  mockedStatusTooltip[
                    Math.floor(Math.random() * mockedStatusTooltip.length)
                  ]
                }
                <div>
                  <div className="font-bold">{`#${faker.string.numeric(
                    6
                  )}`}</div>
                  <div className="text-sm opacity-50">
                    {faker.location.country()}
                  </div>
                </div>
              </div>
            </td>
            <td>
              {faker.date.anytime().toLocaleDateString()}
              <br />
              <span className="badge badge-ghost badge-sm">
                {faker.company.name()}
              </span>
            </td>
            <td>{faker.location.countryCode("alpha-2")}</td>
            <th>
            <Modal btnName="View" title={`OrderNr. #${faker.string.numeric(6)}`}>
                Aici pun campurile
              </Modal>
            </th>
          </tr>
          {/* row 3 */}
          <tr className="hover">
            <td>
              <div className="flex items-center gap-3 pl-3">
                {
                  mockedStatusTooltip[
                    Math.floor(Math.random() * mockedStatusTooltip.length)
                  ]
                }
                <div>
                  <div className="font-bold">{`#${faker.string.numeric(
                    6
                  )}`}</div>
                  <div className="text-sm opacity-50">
                    {faker.location.country()}
                  </div>
                </div>
              </div>
            </td>
            <td>
              {faker.date.anytime().toLocaleDateString()}
              <br />
              <span className="badge badge-ghost badge-sm">
                {faker.company.name()}
              </span>
            </td>
            <td>{faker.location.countryCode("alpha-2")}</td>
            <th>
            <Modal btnName="View" title={`OrderNr. #${faker.string.numeric(6)}`}>
                Aici pun campurile
              </Modal>
            </th>
          </tr>
          {/* row 4 */}
          <tr className="hover">
            <td>
              <div className="flex items-center gap-3 pl-3">
                {
                  mockedStatusTooltip[
                    Math.floor(Math.random() * mockedStatusTooltip.length)
                  ]
                }
                <div>
                  <div className="font-bold">{`#${faker.string.numeric(
                    6
                  )}`}</div>
                  <div className="text-sm opacity-50">
                    {faker.location.country()}
                  </div>
                </div>
              </div>
            </td>
            <td>
              {faker.date.anytime().toLocaleDateString()}
              <br />
              <span className="badge badge-ghost badge-sm">
                {faker.company.name()}
              </span>
            </td>
            <td>{faker.location.countryCode("alpha-2")}</td>
            <th>
            <Modal btnName="View" title={`OrderNr. #${faker.string.numeric(6)}`}>
                Aici pun campurile
              </Modal>
            </th>
          </tr>
          {/* row 5 */}
          <tr className="hover">
            <td>
              <div className="flex items-center gap-3 pl-3">
                {
                  mockedStatusTooltip[
                    Math.floor(Math.random() * mockedStatusTooltip.length)
                  ]
                }
                <div>
                  <div className="font-bold">{`#${faker.string.numeric(
                    6
                  )}`}</div>
                  <div className="text-sm opacity-50">
                    {faker.location.country()}
                  </div>
                </div>
              </div>
            </td>
            <td>
              {faker.date.anytime().toLocaleDateString()}
              <br />
              <span className="badge badge-ghost badge-sm">
                {faker.company.name()}
              </span>
            </td>
            <td>{faker.location.countryCode("alpha-2")}</td>
            <th>
            <Modal btnName="View" title={faker.string.numeric(6)}>
                Aici pun campurile
              </Modal>
            </th>
          </tr>
        </tbody>
        {/* foot */}
        <tfoot></tfoot>
      </table>
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
