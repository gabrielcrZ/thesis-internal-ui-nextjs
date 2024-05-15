"use client";
import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import { clientSettings } from "../types/Types";

const SettingsContent = () => {
  const [updateInfo, setUpdateInfo] = useState<clientSettings>({});
  const [currentPage, setCurrentPage] = useState(1);
  const pageIncrease = () => {
    setCurrentPage(currentPage + 1);
  };
  const pageDecrease = () => {
    if (currentPage === 1) return;
    else setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    console.log(
      `A call has been made for retrieving data or pagination changes. Pagination ${currentPage}`
    );
  }, [currentPage]);

  const handleUpdateUser = () => {
    setUpdateInfo({});
    console.log(
      `A call for updating user information has been made. Updates: ${JSON.stringify(
        updateInfo,
        null,
        4
      )}`
    );
  };

  return (
    <div className="grid px-2 gap-5">
      <div className="card bg-base-200 shadow-xl w-1/3">
        <div className="card-body font-bold">
          <h1 className="card-title text-gray-500">
            Settings - #Logged As gabrieltest@gmail.com
          </h1>
          <div className="text-red-500 text-sm font-bold flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M10 1c-1.828 0-3.623.149-5.371.435a.75.75 0 0 0-.629.74v.387c-.827.157-1.642.345-2.445.564a.75.75 0 0 0-.552.698 5 5 0 0 0 4.503 5.152 6 6 0 0 0 2.946 1.822A6.451 6.451 0 0 1 7.768 13H7.5A1.5 1.5 0 0 0 6 14.5V17h-.75C4.56 17 4 17.56 4 18.25c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75c0-.69-.56-1.25-1.25-1.25H14v-2.5a1.5 1.5 0 0 0-1.5-1.5h-.268a6.453 6.453 0 0 1-.684-2.202 6 6 0 0 0 2.946-1.822 5 5 0 0 0 4.503-5.152.75.75 0 0 0-.552-.698A31.804 31.804 0 0 0 16 2.562v-.387a.75.75 0 0 0-.629-.74A33.227 33.227 0 0 0 10 1ZM2.525 4.422C3.012 4.3 3.504 4.19 4 4.09V5c0 .74.134 1.448.38 2.103a3.503 3.503 0 0 1-1.855-2.68Zm14.95 0a3.503 3.503 0 0 1-1.854 2.68C15.866 6.449 16 5.74 16 5v-.91c.496.099.988.21 1.475.332Z"
                clipRule="evenodd"
              />
            </svg>
            Super Administrator
          </div>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 shadow-xl">
        <input type="checkbox" />
        <div className="collapse-title text-l font-bold text-gray-500">
          Update information
        </div>
        <div className="collapse-content grid gap-3">
          <form method="post" className="flex gap-3 text-gray-400">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-info font-medium">Email</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                value={updateInfo?.email || ""}
                onChange={(e) => {
                  setUpdateInfo((prevState) => ({
                    ...prevState,
                    email: e.target.value,
                  }));
                }}
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-info font-medium">
                  Old password
                </span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                value={updateInfo?.oldPassword || ""}
                onChange={(e) => {
                  setUpdateInfo((prevState) => ({
                    ...prevState,
                    oldPassword: e.target.value,
                  }));
                }}
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-info  font-medium">
                  New password
                </span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                value={updateInfo?.newPassword || ""}
                onChange={(e) => {
                  setUpdateInfo((prevState) => ({
                    ...prevState,
                    newPassword: e.target.value,
                  }));
                }}
              />
            </label>
            <button
              className="btn self-end"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                handleUpdateUser();
              }}
              disabled={Object.keys(updateInfo).length === 0}
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 shadow-xl">
        <input type="checkbox" />
        <div className="collapse-title text-l font-bold text-gray-500">
          Actions history
        </div>
        <div className="collapse-content">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="text-info font-medium">
                <tr>
                  <th></th>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Reference</th>
                </tr>
              </thead>
              <tbody className="text-gray-400">
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>{faker.date.anytime().toLocaleDateString()}</td>
                  <td className="font-bold">{faker.lorem.sentence()}</td>
                  <td>#{faker.string.numeric(6)}</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>2</th>
                  <td>{faker.date.anytime().toLocaleDateString()}</td>
                  <td className="font-bold">{faker.lorem.sentence()}</td>
                  <td>#{faker.string.numeric(6)}</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>3</th>
                  <td>{faker.date.anytime().toLocaleDateString()}</td>
                  <td className="font-bold">{faker.lorem.sentence()}</td>
                  <td>#{faker.string.numeric(6)}</td>
                </tr>
                {/* row 4 */}
                <tr>
                  <th>4</th>
                  <td>{faker.date.anytime().toLocaleDateString()}</td>
                  <td className="font-bold">{faker.lorem.sentence()}</td>
                  <td>#{faker.string.numeric(6)}</td>
                </tr>
                {/* row 5 */}
                <tr>
                  <th>5</th>
                  <td>{faker.date.anytime().toLocaleDateString()}</td>
                  <td className="font-bold">{faker.lorem.sentence()}</td>
                  <td>#{faker.string.numeric(6)}</td>
                </tr>
                {/* row 6 */}
                <tr>
                  <th>6</th>
                  <td>{faker.date.anytime().toLocaleDateString()}</td>
                  <td className="font-bold">{faker.lorem.sentence()}</td>
                  <td>#{faker.string.numeric(6)}</td>
                </tr>
                {/* row 7 */}
                <tr>
                  <th>7</th>
                  <td>{faker.date.anytime().toLocaleDateString()}</td>
                  <td className="font-bold">{faker.lorem.sentence()}</td>
                  <td>#{faker.string.numeric(6)}</td>
                </tr>
                {/* row 8 */}
                <tr>
                  <th>8</th>
                  <td>{faker.date.anytime().toLocaleDateString()}</td>
                  <td className="font-bold">{faker.lorem.sentence()}</td>
                  <td>#{faker.string.numeric(6)}</td>
                </tr>
                {/* row 9  */}
                <tr>
                  <th>9</th>
                  <td>{faker.date.anytime().toLocaleDateString()}</td>
                  <td className="font-bold">{faker.lorem.sentence()}</td>
                  <td>#{faker.string.numeric(6)}</td>
                </tr>
                {/* row 10 */}
                <tr>
                  <th>10</th>
                  <td>{faker.date.anytime().toLocaleDateString()}</td>
                  <td className="font-bold">{faker.lorem.sentence()}</td>
                  <td>#{faker.string.numeric(6)}</td>
                </tr>
              </tbody>
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
      </div>
    </div>
  );
};

export default SettingsContent;
