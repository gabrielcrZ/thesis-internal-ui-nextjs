"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Content from "./Content";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleDrawerOpen = () => {
    if (isOpen) setIsOpen(false);
    else setIsOpen(true);
  };

  return (
    <div className={isOpen ? "drawer lg:drawer-open" : "drawer"}>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <Navbar onClick={handleDrawerOpen} />
        <Content/>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full text-base-content text-l">
          {/* Sidebar content here */}
          <li className="text-center text-l">Navigation</li>
          <div className="divider divider-vertical divider-primary"></div>
          <li>
            <a> -{">"} Dashboard</a>
          </li>
          <li>
            <a> -{">"} Orders</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
