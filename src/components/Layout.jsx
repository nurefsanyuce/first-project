import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children, navbarContent = null }) => {
  return (
    <>
      <Navbar content={navbarContent} />
      <Sidebar />

      <div className="content-wrapper">{children}</div>

      {/* Buraya sayfa içeriği (Dashboard, Users, Login) render edilecek */}
      <Footer />
    </>
  );
};
export default Layout;
