import React from "react";
import { Outlet } from "react-router-dom";

const MainTemplate = () => {
  return (
    <div className="bg-white">
      <Outlet />
    </div>
  );
};

export default MainTemplate;
