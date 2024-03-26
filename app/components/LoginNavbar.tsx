import React from "react";
import ThemeController from "./ThemeController";

const LoginNavbar = () => {
  return (
    <div className="navbar bg-primary">
      <div className="flex-1">
        <a className="btn btn-ghost text-l">GC - Dashboard</a>
      </div>
      <div className="flex-none">
        <ThemeController/>
      </div>
    </div>
  );
};

export default LoginNavbar;
