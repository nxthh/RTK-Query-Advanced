import React from "react";
import NavbarBasic from "./navbar";
import { Outlet } from "react-router";
import FooterBasic from "./footer"

export default function RootLayout() {
  return (
    <>
      <NavbarBasic />
      <Outlet />
      <FooterBasic />
    </>
  );
}
