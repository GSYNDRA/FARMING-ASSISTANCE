import React from "react";
import Edit from "../../../components/Edit.jsx";
import Delete from "../../../components/Delete.jsx";
import AddButton from "../../../components/AddButton.jsx";
import image from "../../../assets/Rectangle 39.jpg";

const FInventory = () => {
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
            {/* row 1 */}
            <tr style={{ borderBottom: "none" }}>
              <td
                style={{ fontSize: "20px", width: "10%", borderBottom: "none" }}
              >
                1
              </td>
              <td style={{ width: "40%", borderBottom: "none" }}>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div>
                      <img
                        src={image} // Use your local image here
                        alt="image"
                      />
                    </div>
                  </div>
                  <div>
                    <div
                      style={{ fontSize: "20px", color: "black" }}
                      className=""
                    >
                      Phan Trung Tin
                    </div>
                  </div>
                </div>
              </td>
              <td
                style={{
                  fontSize: "20px",
                  color: "black",
                  width: "5%",
                  borderBottom: "none",
                }}
              >
                500
              </td>
              <td
                style={{
                  fontSize: "20px",
                  color: "black",
                  width: "10%",
                  borderBottom: "none",
                }}
              >
                0.000$
              </td>
              <td
                style={{
                  fontSize: "20px",
                  color: "black",
                  width: "40%",
                  borderBottom: "none",
                }}
              >
                Hàng không ai mua nên không thể bán. Hàng tồn kho nhiều thế kỉ
                ...
              </td>
              <td style={{ width: "5%", borderBottom: "none" }}>
                <div className="flex gap-1">
                  <Edit />
                  <Delete />
                </div>
              </td>
            </tr>
            {/* row 2 */}
            <tr style={{ borderBottom: "none" }}>
              <td
                style={{ fontSize: "20px", width: "10%", borderBottom: "none" }}
              >
                2
              </td>
              <td style={{ width: "40%", borderBottom: "none" }}>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div>
                      <img
                        src={image} // Use your local image here
                        alt="image"
                      />
                    </div>
                  </div>
                  <div>
                    <div
                      style={{ fontSize: "20px", color: "black" }}
                      className=""
                    >
                      Phan Trung Tin
                    </div>
                  </div>
                </div>
              </td>
              <td
                style={{
                  fontSize: "20px",
                  color: "black",
                  width: "5%",
                  borderBottom: "none",
                }}
              >
                500
              </td>
              <td
                style={{
                  fontSize: "20px",
                  color: "black",
                  width: "10%",
                  borderBottom: "none",
                }}
              >
                0.000$
              </td>
              <td
                style={{
                  fontSize: "20px",
                  color: "black",
                  width: "40%",
                  borderBottom: "none",
                }}
              >
                Hàng không ai mua nên không thể bán. Hàng tồn kho nhiều thế kỉ
                ...
              </td>
              <td style={{ width: "5%", borderBottom: "none" }}>
                <div className="flex gap-1">
                  <Edit />
                  <Delete />
                </div>
              </td>
            </tr>
            {/*row 3*/}
            <tr style={{ borderBottom: "none" }}>
              <td
                style={{ fontSize: "20px", width: "10%", borderBottom: "none" }}
              >
                3
              </td>
              <td style={{ width: "40%", borderBottom: "none" }}>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div>
                      <img
                        src={image} // Use your local image here
                        alt="image"
                      />
                    </div>
                  </div>
                  <div>
                    <div
                      style={{ fontSize: "20px", color: "black" }}
                      className=""
                    >
                      Phan Trung Tin
                    </div>
                  </div>
                </div>
              </td>
              <td
                style={{
                  fontSize: "20px",
                  color: "black",
                  width: "5%",
                  borderBottom: "none",
                }}
              >
                500
              </td>
              <td
                style={{
                  fontSize: "20px",
                  color: "black",
                  width: "10%",
                  borderBottom: "none",
                }}
              >
                0.000$
              </td>
              <td
                style={{
                  fontSize: "20px",
                  color: "black",
                  width: "40%",
                  borderBottom: "none",
                }}
              >
                Hàng không ai mua nên không thể bán. Hàng tồn kho nhiều thế kỉ
                ...
              </td>
              <td style={{ width: "5%", borderBottom: "none" }}>
                <div className="flex gap-1">
                  <Edit />
                  <Delete />
                </div>
              </td>
            </tr>
            {/* row 4*/}
            <tr style={{ borderBottom: "none" }}>
              <td
                style={{ fontSize: "20px", width: "10%", borderBottom: "none" }}
              >
                4
              </td>
              <td style={{ width: "40%", borderBottom: "none" }}>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div>
                      <img
                        src={image} // Use your local image here
                        alt="image"
                      />
                    </div>
                  </div>
                  <div>
                    <div
                      style={{ fontSize: "20px", color: "black" }}
                      className=""
                    >
                      Phan Trung Tin
                    </div>
                  </div>
                </div>
              </td>
              <td
                style={{
                  fontSize: "20px",
                  color: "black",
                  width: "5%",
                  borderBottom: "none",
                }}
              >
                500
              </td>
              <td
                style={{
                  fontSize: "20px",
                  color: "black",
                  width: "10%",
                  borderBottom: "none",
                }}
              >
                0.000$
              </td>
              <td
                style={{
                  fontSize: "20px",
                  color: "black",
                  width: "40%",
                  borderBottom: "none",
                }}
              >
                Hàng không ai mua nên không thể bán. Hàng tồn kho nhiều thế kỉ
                ...
              </td>
              <td style={{ width: "5%", borderBottom: "none" }}>
                <div className="flex gap-1">
                  <Edit />
                  <Delete />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FInventory;