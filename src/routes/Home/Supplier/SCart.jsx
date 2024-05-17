import React, { useEffect, useState } from "react";
import { cartLocal } from "../../../service/cartLocal";
import img from "../../../assets/GiangImg.png";
import { useNavigate } from "react-router-dom";

const SCart = () => {
  const [list, setList] = useState(cartLocal.get("cart"));
  const navigate = useNavigate();
  useEffect(() => {
    cartLocal.get("cart");
  }, [list]);

  const handleChangeQuantity = (id, quantityChange) => {
    setList(cartLocal.changeQuantity(id, quantityChange));
  };

  const totalPrice = (item, quantity) => {
    return item * quantity;
  };
  const calTotalPrice = (data) => {
    return data
      .map((item) => totalPrice(item.price, item.quantity))
      .reduce((acc, curr) => acc + curr, 0);
  };
  const cancelCart = () => {
    navigate("/supplier/store");
  };
  const orderProduct = () => {
    console.log(list);
  };

  const fetchCartList = () => {
    return list.map((item) => {
      return (
        <tr key={item.productId}>
          <td className="flex items-center space-x-4">
            <img className="w-12 h-12" src={img} alt="" />
            <span>{item.name}</span>
          </td>
          <td>Farmer</td>
          <td>
            {" "}
            <div className="flex space-x-4 text-black mb-2">
              <button
                className="border border-black rounded-full p-2 cursor-pointer"
                style={{
                  lineHeight: "0.5rem",
                }}
                onClick={() => {
                  handleChangeQuantity(item.id, -1);
                }}
              >
                -
              </button>
              <div className="border border-black px-4 rounded-lg">
                {item.quantity}
              </div>
              <button
                className="border border-black rounded-full p-2 cursor-pointer"
                style={{
                  lineHeight: "0.5rem",
                }}
                onClick={() => {
                  handleChangeQuantity(item.id, 1);
                }}
              >
                +
              </button>
            </div>
          </td>
          <td>${item.price}</td>
          <td>${totalPrice(item.price, item.quantity)}</td>
        </tr>
      );
    });
  };

  return (
    <div className="ml-4">
      <div>
        <div className="flex items-center justify-between">
          <div className="title-of-page w-[50%]">
            <div className="text-[#204E51] font-bold text-[2rem]">
              Welcome to Sprout Farm
            </div>
            <span className="!w-[100%]">
              Buy what You Like, Pay Less For It
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white w-full p-2 rounded-sm text-black">
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="bg-[#204E51]">
                <tr className="text-white">
                  <th>Product</th>
                  <th>Farmer</th>
                  <th>Quantities</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>{fetchCartList()}</tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="bg-[#204E51] flex mt-4 p-4 rounded-lg">
        <div className="w-[60%] text-[1.2rem] font-semibold text-white border-r-2">
          <div>
            Name: <span>Tran Dang Phuong Nam</span>
            Address: <span>123 Le Duc Tho, Go Vap</span>
            Phone: <span>012358981</span>
          </div>
        </div>

        <div className="align-middle w-[40%] mx-auto text-center">
          <div className="text-[1.5rem] text-white pb-4">
            Total: {calTotalPrice(list)}$
          </div>
          <div className="mx-auto space-x-10 text-white">
            <button
              className="mx-auto bg-red-700 py-2 px-4 rounded-2xl"
              onClick={() => {
                cancelCart();
              }}
            >
              Cancel
            </button>
            <button
              className="mx-auto bg-[#63B6BD] py-2 px-4 rounded-2xl"
              onClick={() => {
                orderProduct();
              }}
            >
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );

};

export default SCart;
