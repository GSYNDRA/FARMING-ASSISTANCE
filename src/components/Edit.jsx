// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const Edit = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleMouseEnter = () => {
    if (!isPressed && !isDisabled) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseDown = () => {
    if (!isDisabled) {
      setIsHovered(false);
      setIsPressed(true);
      setTimeout(() => {
        setIsPressed(false);
      }, 200);
    }
  };

  // eslint-disable-next-line no-unused-vars
  const handleDisable = (disabled) => {
    setIsDisabled(disabled);
  };

  return (
    <div
      className="w-[70px] h-[35px] bg-emerald-300 rounded-[10px] shadow border-black"
      onClick={handleMouseDown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        borderRadius: "10px",
        overflow: "visible",
        backgroundColor: isHovered && !isDisabled ? "#63B6BD" : "#63B6BD",
        boxShadow:
          isPressed && !isDisabled
            ? "4px 4px 4px rgba(0, 0, 0, 0.3) inset"
            : "none",
      }}
    >
      <div
        className="text-center text-white text-lg font-bold font-['Montserrat']"
        style={{
          color: isHovered && !isDisabled ? "#FFFFFF" : "#FFFFFF",
          fontWeight: 700,
          fontSize: "18px",
          zIndex: 1,
          alignItems: "center", // Vertically center align content
          justifyItems: "center",
          paddingTop: '3px'
        }}
      >
        Edit
      </div>

      {/* Disabled overlay (if disabled) */}
      {isDisabled && (
        <div
          className="bg-gray-300 absolute left-0 top-0 h-full w-full rounded-[15px] opacity-50"
          style={{ pointerEvents: "none" }}
        />
      )}
    </div>
  );
};

export default Edit;
