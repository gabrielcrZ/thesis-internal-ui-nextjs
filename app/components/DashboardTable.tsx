"use client";
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

  const mockedStatusBadge = [
    <div className="badge badge-info gap-2">Ongoing</div>,
    <div className="badge badge-success gap-2">Shipped</div>,
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
              <Modal
                submitBtn="Update"
                btnName="View"
                title={
                  <div className="flex">
                    <div className="flex-1">
                      OrderNr. #{faker.string.numeric(6)}
                    </div>
                    <div className="flex-none">
                      {
                        mockedStatusBadge[
                          Math.floor(Math.random() * mockedStatusTooltip.length)
                        ]
                      }
                    </div>
                  </div>
                }
              >
                <div className="grid gap-1 font-bold text-neutral-content">
                  <p>• Date - {new Date().toLocaleDateString()}</p>
                  <p>• Shipping From - Romania</p>
                  <p>• Shipping To - Spain</p>
                  <p>• Weight - 0,5 Kg</p>
                  <p>• Assigned shipment - s103</p>
                </div>
              </Modal>
            </td>
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
              <Modal
                submitBtn="Update"
                btnName="View"
                title={
                  <div className="flex">
                    <div className="flex-1">
                      OrderNr. #{faker.string.numeric(6)}
                    </div>
                    <div className="flex-none">
                      {
                        mockedStatusBadge[
                          Math.floor(Math.random() * mockedStatusTooltip.length)
                        ]
                      }
                    </div>
                  </div>
                }
              >
                <div className="grid gap-1 font-bold text-neutral-content">
                  <p>• Date - {new Date().toLocaleDateString()}</p>
                  <p>• Shipping From - Romania</p>
                  <p>• Shipping To - Spain</p>
                  <p>• Weight - 0,5 Kg</p>
                  <p>• Assigned shipment - s103</p>
                </div>
              </Modal>
            </td>
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
              <Modal
                submitBtn="Update"
                btnName="View"
                title={
                  <div className="flex">
                    <div className="flex-1">
                      OrderNr. #{faker.string.numeric(6)}
                    </div>
                    <div className="flex-none">
                      {
                        mockedStatusBadge[
                          Math.floor(Math.random() * mockedStatusTooltip.length)
                        ]
                      }
                    </div>
                  </div>
                }
              >
                <div className="grid gap-1 font-bold text-neutral-content">
                  <p>• Date - {new Date().toLocaleDateString()}</p>
                  <p>• Shipping From - Romania</p>
                  <p>• Shipping To - Spain</p>
                  <p>• Weight - 0,5 Kg</p>
                  <p>• Assigned shipment - s103</p>
                </div>
              </Modal>
            </td>
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
              <Modal
                submitBtn="Update"
                btnName="View"
                title={
                  <div className="flex">
                    <div className="flex-1">
                      OrderNr. #{faker.string.numeric(6)}
                    </div>
                    <div className="flex-none">
                      {
                        mockedStatusBadge[
                          Math.floor(Math.random() * mockedStatusTooltip.length)
                        ]
                      }
                    </div>
                  </div>
                }
              >
                <div className="grid gap-1 font-bold text-neutral-content">
                  <p>• Date - {new Date().toLocaleDateString()}</p>
                  <p>• Shipping From - Romania</p>
                  <p>• Shipping To - Spain</p>
                  <p>• Weight - 0,5 Kg</p>
                  <p>• Assigned shipment - s103</p>
                </div>
              </Modal>
            </td>
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
              <Modal
                submitBtn="Update"
                btnName="View"
                title={
                  <div className="flex">
                    <div className="flex-1">
                      OrderNr. #{faker.string.numeric(6)}
                    </div>
                    <div className="flex-none">
                      {
                        mockedStatusBadge[
                          Math.floor(Math.random() * mockedStatusTooltip.length)
                        ]
                      }
                    </div>
                  </div>
                }
              >
                <div className="grid gap-1 font-bold text-neutral-content">
                  <p>• Date - {new Date().toLocaleDateString()}</p>
                  <p>• Shipping From - Romania</p>
                  <p>• Shipping To - Spain</p>
                  <p>• Weight - 0,5 Kg</p>
                  <p>• Assigned shipment - s103</p>
                </div>
              </Modal>
            </td>
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
