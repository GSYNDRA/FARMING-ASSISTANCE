import React from "react";
import logo from "../../assets/logoSprout.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-[100px] flex sticky top-0 z-10 bg-white drop-shadow-md">
      <div className="flex justify-between items-center text-black w-full mx-10">
        <NavLink
          className="flex
  "
        >
          <img
            src={`${logo}`}
            className="h-[4rem] w-fit"
            alt=""
            style={{
              borderRadius: "6rem",
              border: "3px solid #63B6BD",
            }}
          />
          <span
            className="mx-4 my-auto"
            style={{
              color: "#1E1E1E",
              textShadow: "5px 5px 8px rgba(98, 181, 181, 0.30)",
              webkitTextStrokeWidth: 1,
              webkitTextStrokeColor: "#000",
              fontSize: "2rem",
              fontWeight: 700,
            }}
          >
            Sprout Farms
          </span>
        </NavLink>

        <div className="space-x-10">
          <NavLink>Home</NavLink>
          <NavLink>About Us</NavLink>
          <NavLink>Pages</NavLink>
        </div>

        <div>
          <NavLink
            to="/auth/login"
            className="bg-[#204E51] text-white px-8 py-3 rounded-lg"
          >
            Log in
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
