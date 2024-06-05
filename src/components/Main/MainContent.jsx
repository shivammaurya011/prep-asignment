import React from "react";
import "./MainContent.css";
import { Outlet } from "react-router-dom";

const MainContent = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default MainContent;
