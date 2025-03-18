import React from "react";
import { Navbar, Sidebar } from "../components/layout";

function Gaming() {
  return (
    <div className="min-h-screen flex justify-center align-center   bg-amber-200  px-20   bg-center ">
      <Navbar />
      <Sidebar />
      <div className="pt-20">
        <h1>welcome to App section </h1>
      </div>
    </div>
  );
}

export default Gaming;
