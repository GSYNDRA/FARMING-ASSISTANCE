import React from "react";
import avtImg from "../../../assets/Rectangle 39.jpg";

const FProfile = () => {
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

      <div className="w-full bg-white rounded-xl p-8 h-[40rem]">
        <div className="h-fit mb-8">
          <div className="flex justify-center">
            <div className="w-[25%]">
              <div className="px-24">
                <img src={avtImg} alt="" />
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
                  Phuong Nam
                </div>
                <span
                  style={{
                    color: "#808080",
                    fontSize: "1.25rem",
                    fontWeight: 300,
                    textAlign: "center",
                  }}
                >
                  Customer
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
                      Account
                    </span>
                  </div>

                  <div>namngo123</div>
                </div>

                {/* Item 2 */}
                <div className="px-4 pt-4 text-black flex items-center space-x-4">
                  <div className="space-x-3 border border-black rounded-3xl p-2 w-[8rem]">
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

                  <div>*********</div>
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

                  <div>0938254478</div>
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

                  <div>nhatminhak@gmail.com</div>
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

                  <div>namngo123</div>
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

        <hr className="my-2" />

        <div className="">
          <div
            className=" flex"
            style={{
              borderRadius: "0.9375rem",
              border: "1px solid #D9D9D9",
              boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div className="w-[30%] text-black p-4 border-r-2">
              <div className="flex space-x-8 mb-4">
                <i className="fa fa-wallet text-[3rem]"></i>
                <div>
                  <div
                    className="text-[1.5rem]"
                    style={{
                      lineHeight: "normal",
                    }}
                  >
                    Wallet
                  </div>
                  <span>Your account balance</span>
                </div>
              </div>

              <div className="flex justify-center flex-wrap">
                <div className="space-x-4 border border-black rounded-3xl p-2 w-[8rem] text-[1rem] font-[400] text-center">
                  <span>Balance</span>
                </div>

                <div className="w-[100%] mx-auto text-center mt-4">
                  <span>300.000.000 VND</span>
                </div>
              </div>
            </div>
            <div className="w-[70%] text-black p-4">
              <div className="flex space-x-8 mb-4">
                <i className="fa fa-credit-card text-[3rem]"></i>
                <div>
                  <div
                    className="text-[1.5rem]"
                    style={{
                      lineHeight: "normal",
                    }}
                  >
                    Wallet
                  </div>
                  <span>Your account balance</span>
                </div>
              </div>

              <div className="flex justify-center flex-wrap space-y-4">
                <div className="w-[100%] mx-auto text-center">
                  <span>300.000.000 VND</span>
                </div>

                <button className="space-x-4 border border-black rounded-3xl p-2 px-4 text-[1rem] font-[400] text-center hover:bg-[#63B6BD] hover:text-white">
                  <span>Change your payment</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FProfile;
