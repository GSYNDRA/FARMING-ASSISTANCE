import React from "react";
import { Outlet, useParams } from "react-router-dom";
import Menu from "../../components/Menu";

const MainTemplate = () => {
  let { roleId, roleName } = useParams();
  return (
    <div className="bg-white">
      <Outlet />
    </div>
  );
};

export default MainTemplate;
