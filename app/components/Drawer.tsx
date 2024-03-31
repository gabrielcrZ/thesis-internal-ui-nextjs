"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Content from "./content/Content";
import Link from "next/link";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleDrawerOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={isOpen ? "drawer lg:drawer-open" : "drawer"}>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <Navbar onClick={handleDrawerOpen} />
        <Content />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full text-base-content text-l bg-content">
          {/* Sidebar content here */}
          <li className="text-center text-l">Navigation</li>
          <div className="divider divider-vertical divider-primary"></div>
          <li>
            <Link href="/">
              <div> -{">"} Dashboard</div>
            </Link>
          </li>
          <li>
            <Link href="/orders">
              <div> -{">"} Orders</div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
