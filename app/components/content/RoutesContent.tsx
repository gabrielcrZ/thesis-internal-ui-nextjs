"use client";
import React from "react";
import RoutesTable from "../RoutesTable";
import Modal from "../Modal";

const RoutesContent = () => {
  return (
    <>
      <div className="my-5 px-3">
        <Modal submitBtn="Create" btnName="+ Add new route" title="Create a new shipping route">
          <form className="grid gap-2">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Departure Point</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Arrival Point</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Scheduled Arrival Time (days)</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Maximum Capacity (tones)</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </form>
        </Modal>
      </div>
      <RoutesTable />
    </>
  );
};

export default RoutesContent;
