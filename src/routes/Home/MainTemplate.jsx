import React from "react";
import { Outlet } from "react-router-dom";

const MainTemplate = () => {
  return (
    <div className="">
      <Outlet />
    </div>
  );
};

export default MainTemplate;
