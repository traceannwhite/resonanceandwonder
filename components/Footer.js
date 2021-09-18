import React from "react";

const Footer = () => {
  return (
    <footer className="footer-container">
      Copyright by <span>Trace White </span>
      {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
