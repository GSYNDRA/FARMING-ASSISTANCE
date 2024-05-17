import React from "react";

import Post from "../../../components/Button/Post";

const AAddTip = () => {
  return (
    <div className="relative w-[1123px] h-[509px] mx-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1123"
        height="509"
        viewBox="0 0 1123 509"
        fill="none"
        className="absolute top-0 left-0"
      >
        <path
          d="M0 15C0 6.71573 6.71573 0 15 0H1108C1116.28 0 1123 6.71573 1123 15V494C1123 502.284 1116.28 509 1108 509H15C6.71576 509 0 502.284 0 494V15Z"
          fill="#63B6BD"
        />
      </svg>
      <div
        className="absolute bg-white rounded-[15px] border border-zinc-300 shadow-lg"
        style={{
          width: "1057px",
          height: "110px",
          marginTop: "30px",
          marginLeft: "25px",
          display: "flex",
        }}
      >
        <div className="ml-[30px]">
          <div
            className=" mb-[5px]"
            style={{ color: "#000", fontSize: "25px", fontWeight: "700" }}
          >
            Title
          </div>
          <div
            className="absolute"
            style={{
              width: "1000px",
              height: "37px",
              borderRadius: "5px",
              border: "1px solid #000",
            }}
          ></div>
        </div>
      </div>
      <div
        className="absolute bg-white rounded-[15px] border border-zinc-300 shadow-lg"
        style={{
          width: "1057px",
          height: "281px",
          marginTop: "200px",
          marginLeft: "25px",
          display: "flex",
        }}
      >
        <div className="ml-[30px]">
          <div
            className=" mb-[5px]"
            style={{ color: "#000", fontSize: "30px", fontWeight: "700" }}
          >
            Content
          </div>
          <div
            className="absolute"
            style={{
              width: "1000px",
              height: "200px",
              borderRadius: "5px",
              border: "1px solid #000",
            }}
          ></div>
        </div>
      </div>
      <div
        className="absolute w-full"
        style={{
          top: "520px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <Post/>
        </div>
      </div>
    </div>
  );
};

export default AAddTip;
