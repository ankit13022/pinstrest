import React from "react";
import "./mainLayouts.css";
import { Outlet } from "react-router";
import LeftBar from "../../components/leftBar/LeftBar";
import Topbar from "../../components/topBar/Topbar";
const mainLayouts = () => {
  return (
    <div className="app">
      <LeftBar />
      <div className="content">
        <Topbar />
        <Outlet />
      </div>
    </div>
  );
};

export default mainLayouts;
