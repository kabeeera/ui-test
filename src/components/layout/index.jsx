import React from "react";
import Header from "../header";
import Footer from "../footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="content">{children}</main>
    </div>
  );
};

export default Layout;
