import React from "react";
import Button from "./Button";
import tab1Img from "../images/illustration-features-tab-1.svg";
function Tab1() {
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center text-center">
          <h2
            className="font-bold my-3"
            style={{
              fontSize: "28px",
            }}
          >
            Features
          </h2>
          <h4 className="text-slate-400 text-center">
            Our aim is to make it quick and easy for you to access your <br />
            favourite websites. Your bookmarks sync between your devices <br />{" "}
            so you can access them on the go.
          </h4>
        </div>
      </div>
      <div className="flex p-12 flex-wrap-reverse justify-between items-center">
        <div className="my-4 ml-4">
          <img src={tab1Img} alt="" />
        </div>
        <div className="my-4 p-4 mr-16">
          <h1
            className="font-bold my-4"
            style={{
              fontSize: "28px",
            }}
          >
            Bookmark in one click
          </h1>
          <h4
            className="text-slate-400 my-4"
            style={{
              maxWidth: "368px",
            }}
          >
            Organize your bookmarks however you like. Our simple drag-and-drop
            interface gives you complete control over how you manage your
            favourite sites.
          </h4>
          <Button />
        </div>
      </div>
    </>
  );
}

export default Tab1;
