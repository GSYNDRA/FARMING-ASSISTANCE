import React from "react";

const AddButton = () => {
  return (
    <div>
      <button
        className="btn btn-circle btn-outline"
        style={{
          borderColor: "#204E51",
          borderWidth: "4px",
          boxShadow: "1px 1px 2px 1px rgba(0, 0, 0, 0.3)", // Adjust shadow as needed
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#204E51"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            color="black"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    </div>
  );
};

export default AddButton;
