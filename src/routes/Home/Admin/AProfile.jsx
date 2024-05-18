import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { userLocal } from "../../../service/userLocal";
import { userInfor } from "../../../redux/userReducer/userThunk";

const AProfile = () => {
  const [information, setInformation] = useState({});
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { inforUser, roleName } = useSelector((state) => state.userReducer);

  useEffect(() => {
    const fetchUserInformation = async () => {
      dispatch(userInfor(userLocal.getUserId()));
      setLoading(false);
    };
    fetchUserInformation();
  }, [dispatch]);

  useEffect(() => {
    if (inforUser) {
      setInformation(inforUser);
    }
    console.log("useEffect ~ inforUser:", inforUser);
  }, [inforUser]);


  const showPage = () => {
    return (
      <div>
        <div
          style={{
            color: "#204E51",
            fontSize: "1.875rem",
            fontWeight: 600,
          }}
        >
          Your Profile
        </div>

        <div className="w-full bg-white rounded-xl p-8 h-fixed">
          <div className="h-fit mb-8">
            <div className="flex justify-center">
              <div className="w-[30%]">
                <div className="px-24">

                  <img
                    src={`${information.avatarImg}`}
                    className="rounded-full"
                    alt=""
                  />

                </div>
                <div className="text-center">
                  <div
                    style={{
                      color: "#000",
                      textAlign: "center",
                      fontSize: "1.875rem",
                      fontWeight: 500,
                    }}
                  >
                    {information.adminName}
                  </div>
                  <span
                    style={{
                      color: "#808080",
                      fontSize: "1.25rem",
                      fontWeight: 300,
                      textAlign: "center",
                    }}
                  >
                    {roleName}
                  </span>
                </div>
              </div>

              <div className="w-[70%]">
                <div
                  style={{
                    borderRadius: "0.9375rem",
                    border: "1px solid #D9D9D9",
                    background: "#FFF",
                    boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  {/* Item 1 */}
                  <div className="px-4 pt-4 text-black flex items-center space-x-4 w-[30rem]">
                    <div className="space-x-4 border border-black rounded-3xl p-2 w-[8rem]">
                      <i className="fa fa-user"></i>
                      <span
                        style={{
                          fontSize: "1rem",
                          fontWeight: 400,
                        }}
                      >
                        Name
                      </span>
                    </div>

                    <div>{information.adminName}</div>
                  </div>

                  {/* Item 2 */}
                  <div className="px-4 pt-4 text-black flex items-center space-x-4">
                    <div className="space-x-4 border border-black rounded-3xl p-2 w-[8rem]">
                      <i className="fa fa-cog"></i>
                      <span
                        style={{
                          fontSize: "1rem",
                          fontWeight: 400,
                        }}
                      >
                        Password
                      </span>
                    </div>

                    {information.user && <div>{information.user.password}</div>}

                  </div>

                  {/* Item 3 */}
                  <div className="px-4 pt-4 text-black flex items-center space-x-4">
                    <div className="space-x-4 border border-black rounded-3xl p-2 w-[8rem]">
                      <i className="fa fa-phone"></i>
                      <span
                        style={{
                          fontSize: "1rem",
                          fontWeight: 400,
                        }}
                      >
                        Phone
                      </span>
                    </div>

                    <div>{information.phone}</div>
                  </div>

                  {/* Item 4 */}
                  <div className="px-4 pt-4 text-black flex items-center space-x-4">
                    <div className="space-x-4 border border-black rounded-3xl p-2 w-[8rem]">
                      <i className="fa fa-envelope"></i>
                      <span
                        style={{
                          fontSize: "1rem",
                          fontWeight: 400,
                        }}
                      >
                        Email
                      </span>
                    </div>

                    <div>{information.email}</div>
                  </div>

                  {/* Item 5 */}
                  <div className="px-4 pt-4 text-black flex items-center space-x-4">
                    <div className="space-x-4 border border-black rounded-3xl p-2 w-[8rem]">
                      <i className="fa fa-address-book"></i>
                      <span
                        style={{
                          fontSize: "1rem",
                          fontWeight: 400,
                          width: "4rem",
                        }}
                      >
                        Address
                      </span>
                    </div>

                    <div>{information.address}</div>
                  </div>

                  <div className="flex justify-end mx-8 mb-2">
                    <div className="py-2 px-4 bg-[#63B6BD] text-white border rounded-2xl w-fit cursor-pointer">
                      Edit
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };


  return <div>{showPage()}</div>;

};

export default AProfile;
