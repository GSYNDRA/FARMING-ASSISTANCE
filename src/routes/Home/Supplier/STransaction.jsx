import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { transDetail, userTrans } from "../../../redux/userReducer/userThunk";
import TransInfor from "./TransList/TransInfor";

const STransaction = () => {
  const [detail, setDetail] = useState(null);
  const dispatch = useDispatch();
  const { inforUser, transList } = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (inforUser?.supplierID) {
      dispatch(userTrans(inforUser.supplierID));
    }
  }, [dispatch, inforUser?.supplierID]);

  useEffect(() => {
    if (detail) {
      displayDetailTransaction(detail);
      fetchListOfProduct();
    }
  });

  const fetchListOfProduct = () => {
    return (
      <div key={detail.productId}>
        <span>{detail.name}</span>
        <span>{detail.price}</span>
        <span>{detail.quantity}</span>
      </div>
    );
  };
  const displayDetailTransaction = (data) => {
    setDetail(data);
  };

  const fetchDetailCard = () => {
    if (!detail) return <div>Select a transaction to see details</div>;

    return (
      <div>
        <div className="text-[#204E51] font-semibold text-[1.5rem]">
          Transaction Detail
        </div>
        <div>
          <span className="text-[1.2rem] font-semibold">Information</span>{" "}
          <br />
          <span>Name: {detail.supplier.supplierName} </span> <br />
          <span>Phone: {detail.supplier.phone} </span>
          <br />
          <span>Email: {detail.supplier.email}</span> <br />
          <span>Address: {detail.supplier.address}</span>
        </div>

        <div className=" space-y-8 leading-8">
          <span className="text-[1.2rem] font-semibold">Product List</span>
          <span>{fetchListOfProduct()}</span>
        </div>
      </div>
    );
  };

  const fetchTransactionList = () => {
    return transList?.map((item) => (
      <tr key={item.transactionID}>
        <td># {item.transactionID}</td>
        <td>$ {item.totalPrice}</td>

        <td>
          <button
            className="text-primary"
            onClick={() => {
              displayDetailTransaction(item);
            }}
          >
            See more
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="ml-4">
      <div>
        <div className="flex items-center justify-between">
          <div className="title-of-page w-[50%]">
            <div className="text-[#204E51] font-bold text-[2rem] ">
              Welcome to Srpout Farm
            </div>
            <span className="!w-[100%]">See your order</span>
          </div>
        </div>
      </div>

      <div className="flex space-x-4">
        {/* Order history */}
        <div className="bg-white w-[40%] p-2 rounded-sm text-black">
          <div>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead className="bg-[#204E51]">
                  <tr className="text-white">
                    <th>TransactionID</th>
                    <th>Total Price</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>{fetchTransactionList()}</tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="border rounded-lg shadow-xl bg-white p-4 w-[70%] h-fit sticky text-black">
          {fetchDetailCard()}
        </div>
      </div>
    </div>
  );
};

export default STransaction;
