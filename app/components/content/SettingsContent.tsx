"use client";
import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import { clientSettings } from "../types/Types";
import { useRouter } from "next/navigation";
import { convertMongoDate } from "../helpers/Helpers";

const SettingsContent = () => {
  const router = useRouter();
  const [updateInfo, setUpdateInfo] = useState<clientSettings>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [userInfo, setUserInfo] = useState<any>({});
  const pageIncrease = () => {
    setCurrentPage(currentPage + 1);
  };
  const pageDecrease = () => {
    if (currentPage === 1) return;
    else setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    try {
      const token = localStorage.getItem("auth-token");
      if (!token) {
        router.push("/users/login");
      } else {
        fetch(`http://localhost:3001/api/get-user-details`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify({ pageNumber: currentPage }),
        }).then((res) =>
          res.json().then((data) => {
            setUserInfo(data);
          })
        );
      }
    } catch (error: any) {
      console.log(error.message);
    }
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
            Settings - #Logged As {userInfo.userDetails?.email}
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
            {userInfo.userDetails?.role}
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
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  value={updateInfo?.email || ""}
                  onChange={(e) => {
                    setUpdateInfo((prevState) => ({
                      ...prevState,
                      email: e.target.value,
                    }));
                  }}
                />
              </label>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-info font-medium">
                  Old password
                </span>
              </div>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  className="grow"
                  value={updateInfo?.oldPassword || ""}
                  onChange={(e) => {
                    setUpdateInfo((prevState) => ({
                      ...prevState,
                      oldPassword: e.target.value,
                    }));
                  }}
                />
              </label>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-info  font-medium">
                  New password
                </span>
              </div>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  className="grow"
                  value={updateInfo?.newPassword || ""}
                  onChange={(e) => {
                    setUpdateInfo((prevState) => ({
                      ...prevState,
                      newPassword: e.target.value,
                    }));
                  }}
                />
              </label>
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
                {userInfo.userActions?.map((el: any, index: any) => {
                  return (
                    <tr>
                      <th>{index + 1}</th>
                      <td>{convertMongoDate(el.createdAt)}</td>
                      <td className="font-bold">{el.shortMessage}</td>
                      <td>#{el.referenceId}</td>
                    </tr>
                  );
                })}
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
