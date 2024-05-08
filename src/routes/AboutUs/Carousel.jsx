import React from "react";

const Carousel = () => {
  return (
    <div className="h-[50.375rem] bg-[url('/src/assets/carouselImg.png')]">
      <div
        className="relative"
        style={{
          background: "w-full rgba(30, 30, 30, 0.60)",
          content: "",
          height: "100%",
        }}
      ></div>
      <div className="absolute z-10">Hello</div>
    </div>
  );
};

export default Carousel;
