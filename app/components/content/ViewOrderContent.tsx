"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";

const ViewOrderContent = () => {
  const mockedShippingStatus = [
    <div className="badge">Unknown</div>,
    <div className="badge badge-success">At destination</div>,
    <div className="badge badge-info">Shipment in progress</div>,
    <div className="badge badge-warning">Shipment not assigned</div>,
    <div className="badge badge-error">Order cancelled</div>,
  ];

  const [showModal, setShowModal] = useState(false);

  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  return (
    <div className="flex gap-5 px-5">
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="card-title text-[#36A2EB]">{`Order #${orderId}`}</h1>
          <p>
            {
              mockedShippingStatus[
                Math.floor(Math.random() * mockedShippingStatus.length)
              ]
            }
          </p>
          <div className="card-actions justify-end">
            <div className="dropdown dropdown-end">
              <div className="dropdown dropdown-bottom">
                <div tabIndex={0} role="button" className="btn">
                  Actions
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu shadow bg-[#36A2EB] rounded-box w-52"
                >
                  <li>
                    <a>Update</a>
                  </li>
                  <li>
                    <a>Cancel</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="collapse bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          View Order History
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default ViewOrderContent;
