import React, { useState } from "react";

import img from "../../../../assets/Rectangle 5.png";
import { cartLocal } from "../../../../service/cartLocal";

const Item = ({ data }) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    if (quantity < data.quantity) setQuantity(quantity + 1);
  };

  const moreDetail = () => {
    console.log("Item ~ moreDetail");
  };

  const addToCart = () => {
    let product = {
      id: data.productId,
      name: data.productName,
      price: data.price,
      quantity: quantity,
    };
    cartLocal.addToCart(product);
  };

  return (
    <div
      className="bg-white p-2 rounded-2xl cursor-pointer"
      style={{
        boxShadow: "10px 10px 10px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="space-y-8 w-full px-8" onClick={moreDetail}>
        <div className="text-[#204E51] text-center font-bold text-[1.5rem]">
          {data.productName}
        </div>

        <div className="space-y-2 text-center text-[#204E51]">
          <div
            className="mx-auto border rounded-2xl w-[80%] py-4"
            style={{
              boxShadow: "5px 5px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <img src={img} alt="" className="mx-auto" />
          </div>
          <div>
            <span className="text-[1.5rem] font-semibold">
              ${data.price}/kg
            </span>
          </div>

          <div className="text-left">{data.desc}</div>
        </div>

        <div>
          <div className="flex justify-between items-center">
            <div className="text-[#204E51] text-[1.25rem] font-semibold">
              {data.farmerName}
            </div>

            <div>
              <div class="rating rating-md">
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex justify-between mx-4">
          <div>
            <div className="flex space-x-4 text-black mb-2">
              <button
                className="border border-black rounded-full p-2 cursor-pointer"
                style={{
                  lineHeight: "0.5rem",
                }}
                onClick={handleDecreaseQuantity}
              >
                -
              </button>
              <div className="border border-black px-4 rounded-lg">
                {quantity}
              </div>
              <button
                className="border border-black rounded-full p-2 cursor-pointer"
                style={{
                  lineHeight: "0.5rem",
                }}
                onClick={handleIncreaseQuantity}
              >
                +
              </button>
            </div>
            <span>{data.quantity}kg in stock</span>
          </div>

          {/* Button Add to cart  */}
          <div className="text-black">
            <button
              onClick={addToCart}
              className="px-4 py-2 border rounded-xl border-black hover:bg-[#63B6BD] hover:text-white hover:border-[transparent]"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
