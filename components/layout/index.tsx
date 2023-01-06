import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type ParentProps = {
  children: React.ReactNode;
};

function Layout({ children }: ParentProps) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
