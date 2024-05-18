import React, { useEffect } from "react";

import Item from "./SupplierItem.jsx/Item";

import img from "../../../assets/Rectangle 5.png";
import { useDispatch, useSelector } from "react-redux";
import { userLocal } from "../../../service/userLocal";
import { userStore } from "../../../redux/userReducer/userThunk";

const SStore = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.userReducer);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(userStore(userLocal.getRoleName()));
      fetchDataList();
    };
    fetchData();
  }, []);

  const fetchDataList = () => {
    return list.map((item) => {
      return <Item key={item.productId} data={item} />;
    });
  };

  return (
    <div className="ml-4">
      <div>
        <div className="flex items-center justify-between">
          <div className="title-of-page w-[50%]">
            <div className="text-[#204E51] font-bold text-[2rem] ">
              Welcome to Srpout Farm
            </div>
            <span className="!w-[100%]">
              Buy what You Like, Pay Less For It
            </span>
          </div>

          <div className="search-bar text-black flex space-x-4">
            <button>
              <i className="fa fa-filter text-[2rem] opacity-70"></i>
            </button>

            <label class="input input-bordered flex items-center gap-2 bg-white">
              <input type="text" class="grow" placeholder="Search" />
              <i className="fa fa-search"></i>
            </label>
          </div>
        </div>
      </div>

      {/* Store */}
      <div className="mt-8">
        <div className="grid grid-cols-3 gap-8">{fetchDataList()}</div>
      </div>
    </div>
  );
};

export default SStore;
