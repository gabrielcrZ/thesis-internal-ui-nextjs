import React from "react";
import ThemeController from "./ThemeController";
import Link from "next/link";

const LoginNavbar = () => {
  return (
    <div className="navbar">
      <div className="flex-1">
        <Link href="/">
          <div className="btn btn-ghost text-l text-primary">GC - Dashboard</div>
        </Link>
      </div>
      <div className="flex-none">
        <ThemeController />
      </div>
    </div>
  );
};

export default LoginNavbar;
