"use client";
import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import Link from "next/link";

const ClientsContent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageIncrease = () => {
    setCurrentPage(currentPage + 1);
  };
  const pageDecrease = () => {
    if (currentPage === 1) return;
    else setCurrentPage(currentPage - 1);
  };
  return (
    <div className="grid gap-5 px-2">
      <div className="collapse collapse-arrow bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-l font-bold text-gray-500">
          Search
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="overflow-x-auto px-3">
        <table className="table font-medium text-gray-400">
          {/* head */}
          <thead>
            <tr className="text-info">
              <th>Email</th>
              <th>Registered On</th>
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Check</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover">
              {/* tr1 */}
              <td className="text-gray-500 font-bold">
                {faker.internet.email()}
              </td>
              <td>{faker.date.anytime().toLocaleDateString()}</td>
              <td>{faker.person.fullName()}</td>
              <td>{faker.location.streetAddress()}</td>
              <td>{faker.phone.number()}</td>
              <td>
                <Link
                  href={`clients/viewClient?clientId=${faker.string.numeric(
                    6
                  )}`}
                  className="hover:text-info"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </td>
            </tr>
            {/* tr2 */}
            <tr className="hover">
              {/* tr1 */}
              <td className="text-gray-500 font-bold">
                {faker.internet.email()}
              </td>
              <td>{faker.date.anytime().toLocaleDateString()}</td>
              <td>{faker.person.fullName()}</td>
              <td>{faker.location.streetAddress()}</td>
              <td>{faker.phone.number()}</td>
              <td>
                <Link
                  href={`clients/viewClient?clientId=${faker.string.numeric(
                    6
                  )}`}
                  className="hover:text-info"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </td>
            </tr>
            {/* tr3 */}
            <tr className="hover">
              {/* tr1 */}
              <td className="text-gray-500 font-bold">
                {faker.internet.email()}
              </td>
              <td>{faker.date.anytime().toLocaleDateString()}</td>
              <td>{faker.person.fullName()}</td>
              <td>{faker.location.streetAddress()}</td>
              <td>{faker.phone.number()}</td>
              <td>
                <Link
                  href={`clients/viewClient?clientId=${faker.string.numeric(
                    6
                  )}`}
                  className="hover:text-info"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </td>
            </tr>
            {/* tr4 */}
            <tr className="hover">
              {/* tr1 */}
              <td className="text-gray-500 font-bold">
                {faker.internet.email()}
              </td>
              <td>{faker.date.anytime().toLocaleDateString()}</td>
              <td>{faker.person.fullName()}</td>
              <td>{faker.location.streetAddress()}</td>
              <td>{faker.phone.number()}</td>
              <td>
                <Link
                  href={`clients/viewClient?clientId=${faker.string.numeric(
                    6
                  )}`}
                  className="hover:text-info"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </td>
            </tr>
            {/* tr5 */}
            <tr className="hover">
              {/* tr1 */}
              <td className="text-gray-500 font-bold">
                {faker.internet.email()}
              </td>
              <td>{faker.date.anytime().toLocaleDateString()}</td>
              <td>{faker.person.fullName()}</td>
              <td>{faker.location.streetAddress()}</td>
              <td>{faker.phone.number()}</td>
              <td>
                <Link
                  href={`clients/viewClient?clientId=${faker.string.numeric(
                    6
                  )}`}
                  className="hover:text-info"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </td>
            </tr>
            {/* tr6 */}
            <tr className="hover">
              {/* tr1 */}
              <td className="text-gray-500 font-bold">
                {faker.internet.email()}
              </td>
              <td>{faker.date.anytime().toLocaleDateString()}</td>
              <td>{faker.person.fullName()}</td>
              <td>{faker.location.streetAddress()}</td>
              <td>{faker.phone.number()}</td>
              <td>
                <Link
                  href={`clients/viewClient?clientId=${faker.string.numeric(
                    6
                  )}`}
                  className="hover:text-info"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </td>
            </tr>
            {/* tr7 */}
            <tr className="hover">
              {/* tr1 */}
              <td className="text-gray-500 font-bold">
                {faker.internet.email()}
              </td>
              <td>{faker.date.anytime().toLocaleDateString()}</td>
              <td>{faker.person.fullName()}</td>
              <td>{faker.location.streetAddress()}</td>
              <td>{faker.phone.number()}</td>
              <td>
                <Link
                  href={`clients/viewClient?clientId=${faker.string.numeric(
                    6
                  )}`}
                  className="hover:text-info"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </td>
            </tr>
            {/* tr8 */}
            <tr className="hover">
              {/* tr1 */}
              <td className="text-gray-500 font-bold">
                {faker.internet.email()}
              </td>
              <td>{faker.date.anytime().toLocaleDateString()}</td>
              <td>{faker.person.fullName()}</td>
              <td>{faker.location.streetAddress()}</td>
              <td>{faker.phone.number()}</td>
              <td>
                <Link
                  href={`clients/viewClient?clientId=${faker.string.numeric(
                    6
                  )}`}
                  className="hover:text-info"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </td>
            </tr>
            {/* tr9 */}
            <tr className="hover">
              {/* tr1 */}
              <td className="text-gray-500 font-bold">
                {faker.internet.email()}
              </td>
              <td>{faker.date.anytime().toLocaleDateString()}</td>
              <td>{faker.person.fullName()}</td>
              <td>{faker.location.streetAddress()}</td>
              <td>{faker.phone.number()}</td>
              <td>
                <Link
                  href={`clients/viewClient?clientId=${faker.string.numeric(
                    6
                  )}`}
                  className="hover:text-info"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </td>
            </tr>
            {/* tr10 */}
            <tr className="hover">
              {/* tr1 */}
              <td className="text-gray-500 font-bold">
                {faker.internet.email()}
              </td>
              <td>{faker.date.anytime().toLocaleDateString()}</td>
              <td>{faker.person.fullName()}</td>
              <td>{faker.location.streetAddress()}</td>
              <td>{faker.phone.number()}</td>
              <td>
                <Link
                  href={`clients/viewClient?clientId=${faker.string.numeric(
                    6
                  )}`}
                  className="hover:text-info"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </td>
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

export default ClientsContent;
