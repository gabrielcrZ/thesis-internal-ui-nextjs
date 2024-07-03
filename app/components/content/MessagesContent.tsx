"use client";
import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import { convertMongoDate, mapMessageBadge } from "../helpers/Helpers";

const MessagesContent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [messagesData, setMessagesData] = useState<any>({});
  const [tableData, setTableData] = useState<any[]>([]);
  const pageIncrease = () => {
    setCurrentPage(currentPage + 1);
  };
  const pageDecrease = () => {
    if (currentPage === 1) return;
    else setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    fetch(`http://localhost:3001/api/get-messages-count`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((res) =>
      res.json().then((data) => {
        setMessagesData(data);
      })
    );
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3001/api/get-paginated-messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pageNumber: currentPage }),
    }).then((res) =>
      res.json().then((data) => {
        setTableData(data.paginatedMessages);
      })
    );
  }, [currentPage]);

  const updateMessageStatus = async (messageId: string) => {
    try {
      await fetch(`http://localhost:3001/api/update-message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messageId: messageId }),
      });
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const randomMessages = [
    `A new order has been created #${faker.string.numeric(6)}`,
    `An order has been assigned to a delivery #${faker.string.numeric(6)}`,
    `An order has been assigned for pickup. Id #${faker.string.numeric(6)}`,
    `An order has been successfully picked up #${faker.string.numeric(6)}`,
    `Pickup process failed for a specific order #${faker.string.numeric(6)}`,
    `An order has been successfully delivered #${faker.string.numeric(6)}`,
  ];

  const randomBadges = [
    <p className="badge badge-info badge-sm"></p>,
    <p className="badge badge-error badge-sm"></p>,
    <p className="badge badge-warning badge-sm"></p>,
    <p className="badge badge-success badge-sm"></p>,
  ];

  return (
    <div className="px-2">
      <div className="grid gap-5">
        <div className="card bg-base-200 shadow-xl w-1/3">
          <div className="card-body font-bold">
            <h1 className="card-title text-gray-500">Messages library</h1>
            <div className="font-medium text-l grid gap-2">
              <div className="text-info text-sm font-bold flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 11.27c0-.246.033-.492.099-.73l1.523-5.521A2.75 2.75 0 0 1 5.273 3h9.454a2.75 2.75 0 0 1 2.651 2.019l1.523 5.52c.066.239.099.485.099.732V15a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3.73Zm3.068-5.852A1.25 1.25 0 0 1 5.273 4.5h9.454a1.25 1.25 0 0 1 1.205.918l1.523 5.52c.006.02.01.041.015.062H14a1 1 0 0 0-.86.49l-.606 1.02a1 1 0 0 1-.86.49H8.236a1 1 0 0 1-.894-.553l-.448-.894A1 1 0 0 0 6 11H2.53l.015-.062 1.523-5.52Z"
                    clipRule="evenodd"
                  />
                </svg>
                Inbox {messagesData.inbox}
              </div>
              <div className="text-success text-sm font-bold flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                  <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                </svg>
                Unchecked {messagesData.unchecked}
              </div>
            </div>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 shadow-xl">
          <input type="checkbox" />
          <div className="collapse-title text-l text-gray-500 font-bold pl-8">
            Show messages
          </div>
          <div className="collapse-content">
            <div className="join join-vertical w-full bg-base-200 text-sm text-gray-400 font-bold">
              {tableData.map((el: any, index: any) => {
                return (
                  <div
                    key={el._id}
                    className="collapse collapse-arrow join-item "
                    onClick={() => updateMessageStatus(el._id)}
                  >
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title flex gap-2">
                      {mapMessageBadge(el.messageStatus)}
                      <div> {convertMongoDate(el.createdAt)}</div>
                      <div>-</div>
                      <div>{el.shortMessage}</div>
                    </div>
                    <div className="collapse-content">
                      <table className="table">
                        {/* head */}
                        <thead>
                          <tr className="text-info">
                            <th>Date</th>
                            <th>From</th>
                            <th>Message</th>
                            <th>Reference</th>
                          </tr>
                        </thead>
                        <tbody className="font-medium text-gray-400">
                          <tr>
                            <td>{convertMongoDate(el.createdAt)}</td>
                            <td>{el.from}</td>
                            <td>{el.longMessage}</td>
                            <td>#{el.referenceId}</td>
                          </tr>
                        </tbody>
                        {/* foot */}
                        <tfoot></tfoot>
                      </table>
                    </div>
                  </div>
                );
              })}
            </div>
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

export default MessagesContent;
