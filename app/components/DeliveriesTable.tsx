"use client";
import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import Link from "next/link";

const mockedShippingStatus = [
  <div className="badge badge-info">Ongoing delivery</div>,
  <div className="badge badge-warning">Not started</div>,
];

const RoutesTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageIncrease = () => {
    setCurrentPage(currentPage + 1);
  };
  const pageDecrease = () => {
    if (currentPage === 1) return;
    else setCurrentPage(currentPage - 1);
  };

  return (
    <div className="overflow-x-auto px-3">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>RouteId</th>
            <th>Departs From</th>
            <th>Arrives To</th>
            <th>{`Arrival Time`}</th>
            <th>Current Location</th>
            <th>Status</th>
            <th>{`Loaded (%)`}</th>
            <th>LastUpdated</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover">
            <td>
              <Link
                href={`routes/shipments?routeId=r${faker.string.numeric(4)}`}
              >
                <div className="font-bold">{`r${faker.string.numeric(4)}`}</div>
              </Link>
            </td>
            <td>{faker.location.country()}</td>
            <td>{faker.location.country()}</td>
            <td>{`${faker.number.int({ max: 10 })} days`}</td>
            <td>{faker.location.country()}</td>
            <td>
              {
                mockedShippingStatus[
                  Math.floor(Math.random() * mockedShippingStatus.length)
                ]
              }
            </td>
            <td>{`${faker.string.numeric(2)}%`}</td>
            <td>{faker.date.anytime().toDateString()}</td>
          </tr>
          <tr className="hover">
            <td>
              <Link
                href={`routes/shipments?routeId=r${faker.string.numeric(4)}`}
              >
                <div className="font-bold">{`r${faker.string.numeric(4)}`}</div>
              </Link>
            </td>
            <td>{faker.location.country()}</td>
            <td>{faker.location.country()}</td>
            <td>{`${faker.number.int({ max: 10 })} days`}</td>
            <td>{faker.location.country()}</td>
            <td>
              {
                mockedShippingStatus[
                  Math.floor(Math.random() * mockedShippingStatus.length)
                ]
              }
            </td>
            <td>{`${faker.string.numeric(2)}%`}</td>
            <td>{faker.date.anytime().toDateString()}</td>
          </tr>
          <tr className="hover">
            <td>
              <Link
                href={`routes/shipments?routeId=r${faker.string.numeric(4)}`}
              >
                <div className="font-bold">{`r${faker.string.numeric(4)}`}</div>
              </Link>
            </td>
            <td>{faker.location.country()}</td>
            <td>{faker.location.country()}</td>
            <td>{`${faker.number.int({ max: 10 })} days`}</td>
            <td>{faker.location.country()}</td>
            <td>
              {
                mockedShippingStatus[
                  Math.floor(Math.random() * mockedShippingStatus.length)
                ]
              }
            </td>
            <td>{`${faker.string.numeric(2)}%`}</td>
            <td>{faker.date.anytime().toDateString()}</td>
          </tr>
          <tr className="hover">
            <td>
              <Link
                href={`routes/shipments?routeId=r${faker.string.numeric(4)}`}
              >
                <div className="font-bold">{`r${faker.string.numeric(4)}`}</div>
              </Link>
            </td>
            <td>{faker.location.country()}</td>
            <td>{faker.location.country()}</td>
            <td>{`${faker.number.int({ max: 10 })} days`}</td>
            <td>{faker.location.country()}</td>
            <td>
              {
                mockedShippingStatus[
                  Math.floor(Math.random() * mockedShippingStatus.length)
                ]
              }
            </td>
            <td>{`${faker.string.numeric(2)}%`}</td>
            <td>{faker.date.anytime().toDateString()}</td>
          </tr>
          <tr className="hover">
            <td>
              <Link
                href={`routes/shipments?routeId=r${faker.string.numeric(4)}`}
              >
                <div className="font-bold">{`r${faker.string.numeric(4)}`}</div>
              </Link>
            </td>
            <td>{faker.location.country()}</td>
            <td>{faker.location.country()}</td>
            <td>{`${faker.number.int({ max: 10 })} days`}</td>
            <td>{faker.location.country()}</td>
            <td>
              {
                mockedShippingStatus[
                  Math.floor(Math.random() * mockedShippingStatus.length)
                ]
              }
            </td>
            <td>{`${faker.string.numeric(2)}%`}</td>
            <td>{faker.date.anytime().toDateString()}</td>
          </tr>
          <tr className="hover">
            <td>
              <Link
                href={`routes/shipments?routeId=r${faker.string.numeric(4)}`}
              >
                <div className="font-bold">{`r${faker.string.numeric(4)}`}</div>
              </Link>
            </td>
            <td>{faker.location.country()}</td>
            <td>{faker.location.country()}</td>
            <td>{`${faker.number.int({ max: 10 })} days`}</td>
            <td>{faker.location.country()}</td>
            <td>
              {
                mockedShippingStatus[
                  Math.floor(Math.random() * mockedShippingStatus.length)
                ]
              }
            </td>
            <td>{`${faker.string.numeric(2)}%`}</td>
            <td>{faker.date.anytime().toDateString()}</td>
          </tr>
          <tr className="hover">
            <td>
              <Link
                href={`routes/shipments?routeId=r${faker.string.numeric(4)}`}
              >
                <div className="font-bold">{`r${faker.string.numeric(4)}`}</div>
              </Link>
            </td>
            <td>{faker.location.country()}</td>
            <td>{faker.location.country()}</td>
            <td>{`${faker.number.int({ max: 10 })} days`}</td>
            <td>{faker.location.country()}</td>
            <td>
              {
                mockedShippingStatus[
                  Math.floor(Math.random() * mockedShippingStatus.length)
                ]
              }
            </td>
            <td>{`${faker.string.numeric(2)}%`}</td>
            <td>{faker.date.anytime().toDateString()}</td>
          </tr>
          <tr className="hover">
            <td>
              <Link
                href={`routes/shipments?routeId=r${faker.string.numeric(4)}`}
              >
                <div className="font-bold">{`r${faker.string.numeric(4)}`}</div>
              </Link>
            </td>
            <td>{faker.location.country()}</td>
            <td>{faker.location.country()}</td>
            <td>{`${faker.number.int({ max: 10 })} days`}</td>
            <td>{faker.location.country()}</td>
            <td>
              {
                mockedShippingStatus[
                  Math.floor(Math.random() * mockedShippingStatus.length)
                ]
              }
            </td>
            <td>{`${faker.string.numeric(2)}%`}</td>
            <td>{faker.date.anytime().toDateString()}</td>
          </tr>
          <tr className="hover">
            <td>
              <Link
                href={`routes/shipments?routeId=r${faker.string.numeric(4)}`}
              >
                <div className="font-bold">{`r${faker.string.numeric(4)}`}</div>
              </Link>
            </td>
            <td>{faker.location.country()}</td>
            <td>{faker.location.country()}</td>
            <td>{`${faker.number.int({ max: 10 })} days`}</td>
            <td>{faker.location.country()}</td>
            <td>
              {
                mockedShippingStatus[
                  Math.floor(Math.random() * mockedShippingStatus.length)
                ]
              }
            </td>
            <td>{`${faker.string.numeric(2)}%`}</td>
            <td>{faker.date.anytime().toDateString()}</td>
          </tr>
          <tr className="hover">
            <td>
              <Link
                href={`routes/shipments?routeId=r${faker.string.numeric(4)}`}
              >
                <div className="font-bold">{`r${faker.string.numeric(4)}`}</div>
              </Link>
            </td>
            <td>{faker.location.country()}</td>
            <td>{faker.location.country()}</td>
            <td>{`${faker.number.int({ max: 10 })} days`}</td>
            <td>{faker.location.country()}</td>
            <td>
              {
                mockedShippingStatus[
                  Math.floor(Math.random() * mockedShippingStatus.length)
                ]
              }
            </td>
            <td>{`${faker.string.numeric(2)}%`}</td>
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
  );
};

export default RoutesTable;
