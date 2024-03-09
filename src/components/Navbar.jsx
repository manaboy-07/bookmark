import React from "react";
import { HiOutlineX } from "react-icons/hi";
import logo from "../images/logo-bookmark.svg";
import mobileLogo from "../images/mobile-logo.svg";
function Navbar() {
  return (
    <>
      <div className="flex flex-row justify-between items-center px-12 py-6 m-3 mb-9">
        <div>
          <img src={logo} alt="logo" width={200} height={200} />
        </div>
        <div>
          <ul className="nav-list uppercase text-xl flex justify-between items-center">
            <li className="mx-2 ">Features</li>
            <li className="mx-2">Pricing</li>
            <li className="mx-2">Contact</li>
            <li className="login-nav mx-2  rounded-md">Login</li>
          </ul>
        </div>
      </div>
      <div className="lg:hidden sm:block flex flex-col">
        <section className="overlay">
          <div className="my-modal">
            <div className="modal-container">
              <div
                className="flex justify-between my-4 mx-3 px-3 py-6 items-center"
                style={{
                  width: "350px",
                  borderBottom: "1px solid gray",
                }}
              >
                <img src={mobileLogo} alt="logo" width={200} height={200} />
                <div>
                  <HiOutlineX
                    style={{
                      color: "#fff",
                      fontWeight: "bolder",
                      display: "block",
                    }}
                    className="cursor-pointer text-xl"
                  />
                </div>
              </div>
              <div>
                <ul className="mobile-nav text-center cursor-pointer  uppercase text-white text-2xl flex flex-col justify-between items-center">
                  <li
                    className="mx-2 my-2   p-3"
                    style={{
                      width: "350px",

                      borderBottom: "1px solid gray",
                    }}
                  >
                    Features
                  </li>
                  <li
                    className="mx-2 my-2  p-4"
                    style={{
                      width: "350px",

                      borderBottom: "1px solid gray",
                    }}
                  >
                    Pricing
                  </li>
                  <li
                    className="mx-2  my-2 p-4"
                    style={{
                      width: "350px",

                      borderBottom: "1px solid gray",
                    }}
                  >
                    Contact
                  </li>
                  <li
                    className="mobile-login-nav font-semibold  p-3 my-3 mx-2  rounded-md"
                    style={{
                      width: "350px",
                      border: "3px solid white",
                    }}
                  >
                    Login
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Navbar;
