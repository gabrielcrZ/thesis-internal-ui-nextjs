"use client";
import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import Link from "next/link";

const mockedShippingStatus = [
  <div className="badge">Unknown</div>,
  <div className="badge badge-success">At destination</div>,
  <div className="badge badge-info">Shipment in progress</div>,
  <div className="badge badge-warning">Shipment not assigned</div>,
  <div className="badge badge-error">Order cancelled</div>,
];

const OrdersTable = () => {
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
            <th>OrderNr.</th>
            <th>Client</th>
            <th>Date</th>
            <th>ShippingTo</th>
            <th>Status</th>
            <th>Location</th>
            <th>LastUpdated</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover">
            <td>
              <Link
                href={`orders/viewOrder?orderId=${faker.string.numeric(8)}`}
              >
                <div className="font-bold">{`#${faker.string.numeric(8)}`}</div>
              </Link>
            </td>
            <td>
              <Link
                href={`clients/viewClient?clientName=${faker.company.name()}`}
              >
                <div className="font-bold">{faker.company.name()}</div>
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
          <tr className="hover">
            <td>
              <Link
                href={`orders/viewOrder?orderId=${faker.string.numeric(8)}`}
              >
                <div className="font-bold">{`#${faker.string.numeric(8)}`}</div>
              </Link>
            </td>
            <td>
              <Link
                href={`clients/viewClient?clientName=${faker.company.name()}`}
              >
                <div className="font-bold">{faker.company.name()}</div>
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
          <tr className="hover">
            <td>
              <Link
                href={`orders/viewOrder?orderId=${faker.string.numeric(8)}`}
              >
                <div className="font-bold">{`#${faker.string.numeric(8)}`}</div>
              </Link>
            </td>
            <td>
              <Link
                href={`clients/viewClient?clientName=${faker.company.name()}`}
              >
                <div className="font-bold">{faker.company.name()}</div>
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
          <tr className="hover">
            <td>
              <Link
                href={`orders/viewOrder?orderId=${faker.string.numeric(8)}`}
              >
                <div className="font-bold">{`#${faker.string.numeric(8)}`}</div>
              </Link>
            </td>
            <td>
              <Link
                href={`clients/viewClient?clientName=${faker.company.name()}`}
              >
                <div className="font-bold">{faker.company.name()}</div>
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
          <tr className="hover">
            <td>
              <Link
                href={`orders/viewOrder?orderId=${faker.string.numeric(8)}`}
              >
                <div className="font-bold">{`#${faker.string.numeric(8)}`}</div>
              </Link>
            </td>
            <td>
              <Link
                href={`clients/viewClient?clientName=${faker.company.name()}`}
              >
                <div className="font-bold">{faker.company.name()}</div>
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
          <tr className="hover">
            <td>
              <Link
                href={`orders/viewOrder?orderId=${faker.string.numeric(8)}`}
              >
                <div className="font-bold">{`#${faker.string.numeric(8)}`}</div>
              </Link>
            </td>
            <td>
              <Link
                href={`clients/viewClient?clientName=${faker.company.name()}`}
              >
                <div className="font-bold">{faker.company.name()}</div>
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
          <tr className="hover">
            <td>
              <Link
                href={`orders/viewOrder?orderId=${faker.string.numeric(8)}`}
              >
                <div className="font-bold">{`#${faker.string.numeric(8)}`}</div>
              </Link>
            </td>
            <td>
              <Link
                href={`clients/viewClient?clientName=${faker.company.name()}`}
              >
                <div className="font-bold">{faker.company.name()}</div>
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
          <tr className="hover">
            <td>
              <Link
                href={`orders/viewOrder?orderId=${faker.string.numeric(8)}`}
              >
                <div className="font-bold">{`#${faker.string.numeric(8)}`}</div>
              </Link>
            </td>
            <td>
              <Link
                href={`clients/viewClient?clientName=${faker.company.name()}`}
              >
                <div className="font-bold">{faker.company.name()}</div>
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
          <tr className="hover">
            <td>
              <Link
                href={`orders/viewOrder?orderId=${faker.string.numeric(8)}`}
              >
                <div className="font-bold">{`#${faker.string.numeric(8)}`}</div>
              </Link>
            </td>
            <td>
              <Link
                href={`clients/viewClient?clientName=${faker.company.name()}`}
              >
                <div className="font-bold">{faker.company.name()}</div>
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
          <tr className="hover">
            <td>
              <Link
                href={`orders/viewOrder?orderId=${faker.string.numeric(8)}`}
              >
                <div className="font-bold">{`#${faker.string.numeric(8)}`}</div>
              </Link>
            </td>
            <td>
              <Link
                href={`clients/viewClient?clientName=${faker.company.name()}`}
              >
                <div className="font-bold">{faker.company.name()}</div>
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
          <tr className="hover">
            <td>
              <Link
                href={`orders/viewOrder?orderId=${faker.string.numeric(8)}`}
              >
                <div className="font-bold">{`#${faker.string.numeric(8)}`}</div>
              </Link>
            </td>
            <td>
              <Link
                href={`clients/viewClient?clientName=${faker.company.name()}`}
              >
                <div className="font-bold">{faker.company.name()}</div>
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
          <tr className="hover">
            <td>
              <Link
                href={`orders/viewOrder?orderId=${faker.string.numeric(8)}`}
              >
                <div className="font-bold">{`#${faker.string.numeric(8)}`}</div>
              </Link>
            </td>
            <td>
              <Link
                href={`clients/viewClient?clientName=${faker.company.name()}`}
              >
                <div className="font-bold">{faker.company.name()}</div>
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
          <tr className="hover">
            <td>
              <Link
                href={`orders/viewOrder?orderId=${faker.string.numeric(8)}`}
              >
                <div className="font-bold">{`#${faker.string.numeric(8)}`}</div>
              </Link>
            </td>
            <td>
              <Link
                href={`clients/viewClient?clientName=${faker.company.name()}`}
              >
                <div className="font-bold">{faker.company.name()}</div>
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
          <tr className="hover">
            <td>
              <Link
                href={`orders/viewOrder?orderId=${faker.string.numeric(8)}`}
              >
                <div className="font-bold">{`#${faker.string.numeric(8)}`}</div>
              </Link>
            </td>
            <td>
              <Link
                href={`clients/viewClient?clientName=${faker.company.name()}`}
              >
                <div className="font-bold">{faker.company.name()}</div>
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
          <tr className="hover">
            <td>
              <Link
                href={`orders/viewOrder?orderId=${faker.string.numeric(8)}`}
              >
                <div className="font-bold">{`#${faker.string.numeric(8)}`}</div>
              </Link>
            </td>
            <td>
              <Link
                href={`clients/viewClient?clientName=${faker.company.name()}`}
              >
                <div className="font-bold">{faker.company.name()}</div>
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
  );
};

export default OrdersTable;
