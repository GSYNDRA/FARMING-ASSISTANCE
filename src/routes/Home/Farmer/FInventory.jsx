import React, { useEffect, useState } from "react";
import Edit from "../../../components/Edit.jsx";
import Delete from "../../../components/Delete.jsx";
import AddButton from "../../../components/AddButton.jsx";
import { useSelector } from "react-redux";

const FInventory = () => {
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true)
  const {inforUser} = useSelector((state) => state.userReducer)
  console.log(inventory)

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await fetch(`http://localhost:8080/farmer/inventory/${inforUser.farmerID}`);
        const data = await response.json();
        if (data.message === "successfully" && Array.isArray(data.content)) {
          setInventory(data.content);
        } else {
          console.error("Unexpected data format:", data);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching inventory:", error);
        setLoading(false);
      }
    };

    fetchInventory();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <span
            className="ml-2"
            style={{
              fontSize: "30px",
              color: "#204E51",
              fontWeight: 700,
              paddingRight: "10px",
            }}
          >
            Add
          </span>
          <AddButton />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table
          className="table"
          style={{ lineHeight: "1.5", borderCollapse: "collapse" }}
        >
          {/* head */}
          <thead style={{ borderBottom: "2px solid #204E51" }}>
            <tr>
              <th style={{ fontSize: "25px", color: "#204E51", width: "10%" }}>
                ID
              </th>
              <th style={{ fontSize: "25px", color: "#204E51", width: "20%" }}>
                Name
              </th>
              <th style={{ fontSize: "25px", color: "#204E51", width: "10%" }}>
                QTY.
              </th>
              <th style={{ fontSize: "25px", color: "#204E51", width: "10%" }}>
                Price
              </th>
              <th style={{ fontSize: "25px", color: "#204E51", width: "40%" }}>
                Description
              </th>
              <th
                style={{ fontSize: "25px", color: "#204E51", width: "10%" }}
              ></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item) => (
              <tr key={item.inventoryProductID} style={{ borderBottom: "none" }}>
                <td style={{ fontSize: "20px", width: "10%", borderBottom: "none" }}>
                  {item.inventoryProductID}
                </td>
                <td style={{ width: "40%", borderBottom: "none" }}>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-[100px] h-[100px]">
                        <img
                          src={`${item.image}`} 
                          alt=""
                        />
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: "20px", color: "black" }}>
                        {item.productName || "N/A"} {/* Fallback to "N/A" if productName is null */}
                      </div>
                    </div>
                  </div>
                </td>
                <td style={{ fontSize: "20px", color: "black", width: "5%", borderBottom: "none" }}>
                  {item.quantity}
                </td>
                <td style={{ fontSize: "20px", color: "black", width: "10%", borderBottom: "none" }}>
                  {item.price}
                </td>
                <td style={{ fontSize: "20px", color: "black", width: "40%", borderBottom: "none" }}>
                  {item.description}
                </td>
                <td style={{ width: "5%", borderBottom: "none" }}>
                  <div className="flex gap-1">
                    <Edit />
                    <Delete />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FInventory;
