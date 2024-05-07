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
  const [currentPage, setCurrentPage] = useState(1);
  const pageIncrease = () => {
    setCurrentPage(currentPage + 1);
  };
  const pageDecrease = () => {
    if (currentPage === 1) return;
    else setCurrentPage(currentPage - 1);
  };

  return (
    //  at delivery you dont have an assigned transport, we'll have an assigned delivery in transports
    <div className="grid gap-5 px-2">
      <div className="flex justify-between gap-5">
        <div className="card w-full bg-base-200 shadow-xl">
          <div className="card-body font-bold">
            <h1 className="card-title text-gray-500">Transports information</h1>
            <p className="text-gray-400 font-medium text-sm flex gap-1">
              Available: 10
            </p>
            <p className="text-gray-400 font-medium text-sm flex gap-1">
              Assigned to deliveries: 10
            </p>
            <p className="text-gray-400 font-medium text-sm flex gap-1">
              In transit: 10
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card w-full bg-base-200 shadow-xl">
          <div className="card-body font-bold">
            <h1 className="card-title text-gray-500">Transports information</h1>
            <p className="text-gray-400 font-medium text-sm flex gap-1">
              Available: 10
            </p>
            <p className="text-gray-400 font-medium text-sm flex gap-1">
              Assigned to deliveries: 10
            </p>
            <p className="text-gray-400 font-medium text-sm flex gap-1">
              In transit: 10
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
      <div className="font-bold text-gray-500">Deliveries</div>
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
          <tbody className="font-medium text-gray-400">
            <tr className="hover">
              <td>#{faker.string.numeric(6)}</td>
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
              <td>#{faker.string.numeric(6)}</td>
              <td>{faker.date.anytime().toLocaleDateString()}</td>
            </tr>
            <tr className="hover">
              <td>#{faker.string.numeric(6)}</td>
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
              <td>#{faker.string.numeric(6)}</td>
              <td>{faker.date.anytime().toLocaleDateString()}</td>
            </tr>
            <tr className="hover">
              <td>#{faker.string.numeric(6)}</td>
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
              <td>#{faker.string.numeric(6)}</td>
              <td>{faker.date.anytime().toLocaleDateString()}</td>
            </tr>
            <tr className="hover">
              <td>#{faker.string.numeric(6)}</td>
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
              <td>#{faker.string.numeric(6)}</td>
              <td>{faker.date.anytime().toLocaleDateString()}</td>
            </tr>
            <tr className="hover">
              <td>#{faker.string.numeric(6)}</td>
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
              <td>#{faker.string.numeric(6)}</td>
              <td>{faker.date.anytime().toLocaleDateString()}</td>
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
      <div className="font-bold text-gray-500">Transports</div>
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
          <tbody className="font-medium text-gray-400">
            <tr className="hover">
              <td>#{faker.string.numeric(6)}</td>
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
              <td>#{faker.string.numeric(6)}</td>
              <td>{faker.date.anytime().toLocaleDateString()}</td>
            </tr>
            <tr className="hover">
              <td>#{faker.string.numeric(6)}</td>
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
              <td>#{faker.string.numeric(6)}</td>
              <td>{faker.date.anytime().toLocaleDateString()}</td>
            </tr>
            <tr className="hover">
              <td>#{faker.string.numeric(6)}</td>
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
              <td>#{faker.string.numeric(6)}</td>
              <td>{faker.date.anytime().toLocaleDateString()}</td>
            </tr>
            <tr className="hover">
              <td>#{faker.string.numeric(6)}</td>
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
              <td>#{faker.string.numeric(6)}</td>
              <td>{faker.date.anytime().toLocaleDateString()}</td>
            </tr>
            <tr className="hover">
              <td>#{faker.string.numeric(6)}</td>
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
              <td>#{faker.string.numeric(6)}</td>
              <td>{faker.date.anytime().toLocaleDateString()}</td>
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

export default DeliveriesContent;
