import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-[100px] flex justify-between items-center mx-10 text-black  sticky">
      <div
        className="flex
  "
      >
        <img
          src="/src/assets/logoSprout.png"
          alt=""
          style={{
            borderRadius: "6rem",
            border: "3px solid #63B6BD",
          }}
        />
        <span
          className="mx-4"
          style={{
            color: "#1E1E1E",
            textShadow: "5px 5px 8px rgba(98, 181, 181, 0.30)",
            webkitTextStrokeWidth: 1,
            webkitTextStrokeColor: "#000",
            fontSize: "2.8125rem",
            fontWeight: 700,
          }}
        >
          Sprout Farms
        </span>
      </div>

      <div className="space-x-10">
        <NavLink>Home</NavLink>
        <NavLink>About Us</NavLink>
        <NavLink>Pages</NavLink>
      </div>

      <div>
        <NavLink className="bg-[#204E51] text-white px-8 py-2 rounded-lg">
          Log in
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
