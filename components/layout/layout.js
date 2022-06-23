import React from "react";

import Navbar from "../navbar";
import Footer from "./footer";

function Layout(props) {
  return (
    <div className="bg-slate-200 ">
      <Navbar />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
