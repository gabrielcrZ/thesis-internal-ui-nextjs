import React from "react";

const Footer = () => {

  return (
    <footer className="footer footer-center p-4 text-info font-bold">
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved by Shipping App</p>
      </aside>
    </footer>
  );
};

export default Footer;
