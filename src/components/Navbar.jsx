import React, { useRef, useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import logo from "../images/logo-bookmark.svg";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import hamburger from "../images/icon-hamburger.svg";
import mobileLogo from "../images/mobile-logo.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function Navbar() {
  const [openModal, setOpenModal] = useState(false);
  const mobileContainer = useRef(null);
  useGSAP(
    () => {
      gsap.from(".mobile-nav-list", {
        y: -600,
        scale: 0.2,
        duration: 1.2,
        ease: "power2.inOut",
        stagger: {
          each: 0.4,
        },
      });
    },
    { dependencies: [openModal], scope: mobileContainer }
  );

  return (
    <>
      <div className="flex flex-row justify-between items-center px-12 py-6 m-3 mb-9">
        <div>
          <img src={logo} alt="logo" width={200} height={200} />
        </div>
        <div className="sm:block hidden">
          <ul className="nav-list uppercase  flex justify-between items-center">
            <li className="mx-2 ">Features</li>
            <li className="mx-2">Pricing</li>
            <li className="mx-2">Contact</li>
            <li className="login-nav mx-2 font-semibold  rounded-sm">Login</li>
          </ul>
        </div>
        <div className="cursor-pointer sm:hidden block">
          <img
            src={hamburger}
            alt=""
            onClick={() => {
              setOpenModal(true);
            }}
          />
        </div>
      </div>
      {/* Modal */}
      {openModal && (
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
                  <div
                    className="cancel-icon flex items-center justify-center"
                    style={{
                      width: "40px",
                      height: "40px",
                    }}
                  >
                    <HiOutlineX
                      onClick={() => {
                        setOpenModal(false);
                      }}
                      style={{
                        color: "#fff",
                        fontWeight: "bolder",
                        display: "block",
                      }}
                      className="cursor-pointer text-xl "
                    />
                  </div>
                </div>
                <div>
                  <ul
                    ref={mobileContainer}
                    className="mobile-nav  text-center cursor-pointer  uppercase text-white text-2xl flex flex-col justify-between items-center"
                  >
                    <li
                      className="mx-2 my-2 mobile-nav-list  p-3"
                      style={{
                        width: "350px",

                        borderBottom: "1px solid gray",
                      }}
                    >
                      Features
                    </li>
                    <li
                      className="mx-2 mobile-nav-list my-2  p-4"
                      style={{
                        width: "350px",

                        borderBottom: "1px solid gray",
                      }}
                    >
                      Pricing
                    </li>
                    <li
                      className="mx-2 mobile-nav-list my-2 p-4"
                      style={{
                        width: "350px",

                        borderBottom: "1px solid gray",
                      }}
                    >
                      Contact
                    </li>
                    <li
                      className="mobile-login-nav mobile-nav-list font-semibold  p-3 my-3 mx-2  rounded-md"
                      style={{
                        width: "350px",
                        border: "3px solid white",
                      }}
                    >
                      Login
                    </li>
                  </ul>
                </div>
                <div className="flex p-4 items-center justify-center">
                  <img className="mx-3 cursor-pointer" src={facebook} alt="" />
                  <img className="mx-3 cursor-pointer" src={twitter} alt="" />
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default Navbar;
