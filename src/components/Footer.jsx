import React from "react";
import logo from "../images/logo-footer.svg";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import error from "../images/icon-error.svg";

function Footer() {
  return (
    <div className="">
      <div
        className="upper p-2 flex flex-col items-center text-center justify-center"
        width={250}
      >
        <h4 className="uppercase space-x-6 text-white">
          35,000 already joined
        </h4>
        <h2
          className="text-white font-bold"
          style={{
            fontSize: "28px",
          }}
        >
          Stay up-to-date with what <br /> we're doing
        </h2>
        <form className="flex flex-col lg:flex-row my-3">
          <div>
            <div
              style={{
                height: "40.5px",
                width: "250px",
              }}
              className=" flex p-2 bg-white justify-between rounded-sm "
            >
              <input
                type="email"
                required
                width={150}
                className="outline-none  border-0"
              />
              <img src={error} alt="" className="" width={20} height={10} />
            </div>

            <h5 className="error rounded-b-md">
              Whoops! , make sure it's an email
            </h5>
          </div>

          <button
            type="submit"
            style={{
              height: "40.5px",
            }}
            className="capitalize my-3 lg:my-0 rounded-sm mx-0 lg:mx-2 p-2  form-btn"
          >
            Contact us
          </button>
        </form>
      </div>
      <div className="lower px-6 flex flex-col lg:flex-row  justify-between items-center">
        <div>
          <ul
            style={{
              fontSize: "16px",
            }}
            className="nav-list text-white text-xl flex flex-col lg:flex-row justify-between items-center"
          >
            <li>
              <img src={logo} alt="" width={150} height={150} />
            </li>
            <li className="mx-2 uppercase my-2 lg:my-0">Features</li>
            <li className="mx-2 uppercase  my-2 lg:my-0">Pricing</li>
            <li className="mx-2 uppercase  my-2 lg:my-0">Contact</li>
          </ul>
        </div>
        <div className="flex p-4">
          <img className="mx-3 cursor-pointer" src={facebook} alt="" />
          <img className="mx-3 cursor-pointer" src={twitter} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
