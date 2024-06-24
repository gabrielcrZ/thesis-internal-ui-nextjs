"use client";
import React, { useEffect, useState } from "react";
import ThemeController from "./ThemeController";
import Indicator from "./Indicator";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = (props: any) => {
  const [messagesCount, setMessagesCount] = useState(0);
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    router.push("/users/login");
  };

  useEffect(() => {
    fetch("http://localhost:3001/api/get-unchecked-messages", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setMessagesCount(data.count);
      });
  }, []);

  return (
    <div className="navbar">
      {!props.isLoginPath && (
        <div className="flex-none">
          <button className="btn btn-square" onClick={props.onClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      )}
      <div className="flex-1 pl-2">
        <Link href="/">
          <div className="btn text-l ">SA - Dashboard</div>
        </Link>
      </div>
      <div className="flex-none">
        <ThemeController />
      </div>
      {!props.isLoginPath && (
        <div className="flex-none">
          <Indicator messagesCount={messagesCount} />
        </div>
      )}
      {!props.isLoginPath && (
        <div className="dropdown dropdown-hover dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </div>
          <ul className="dropdown-content z-[2] menu p-1 shadow rounded-box w-52 text-gray-400 bg-base-100 font-medium">
            <li>
              <Link href="/users/settings">View user</Link>
            </li>
            <li onClick={handleLogout}>
              <div>Logout</div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
