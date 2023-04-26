import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/footer";

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;