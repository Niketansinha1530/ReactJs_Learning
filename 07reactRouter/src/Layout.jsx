import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { Outlet } from "react-router-dom";
//outlet ya dheyan rakhyega ki upar ka same rahay or nichay ka

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
