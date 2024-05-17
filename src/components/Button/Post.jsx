import React, { useState } from "react";

const Post = () => {
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

  const handleDisable = (disabled) => {
    setIsDisabled(disabled);
  };

  return (
    <div
      className="w-[230px] h-[58px] bg-emerald-300 rounded-[10px] flex justify-center items-center"
      onClick={handleMouseDown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        borderRadius: "15px",
        border: "0px solid #000",
        overflow: "visible",
        backgroundColor: isHovered && !isDisabled ? "#63B6BD" : "#63B6BD",
        boxShadow:
          isPressed && !isDisabled
            ? "4px 4px 4px rgba(0, 0, 0, 0.3) inset"
            : "none",
      }}
    >
      <div
        className="text-white text-lg font-bold font-['Montserrat']"
        style={{
          color: isHovered && !isDisabled ? "#FFFFFF" : "#FFFFFF",
          fontWeight: 700,
          fontSize: "25px",
          color: '#204E51',
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        Post
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

export default Post;
