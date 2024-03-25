"use client";
import React, { useState } from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawerOpen = () => {
    console.log(isOpen);
    if (isOpen) setIsOpen(false);
    else setIsOpen(true);
  };

  return (
    <div className={isOpen ? "drawer lg:drawer-open" : "drawer"}>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <Navbar onClick={handleDrawerOpen} />
        <Hero />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full text-base-content">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
