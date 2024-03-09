import React from "react";
import Card from "./Card";
import Chrome from "../images/logo-chrome.svg";
import Opera from "../images/logo-opera.svg";

import Firefox from "../images/logo-firefox.svg";

function Extension() {
  return (
    <div className="p-5 text-center flex flex-col justify-center items-center">
      <div>
        <h2
          className="font-bold"
          style={{
            fontSize: "20px",
          }}
        >
          Download the extension
        </h2>
        <h4 className="text-slate-400 ">
          We’ve got more browsers in the pipeline. Please do let us know if
          <br /> you’ve got a favourite you’d like us to prioritize.
        </h4>
      </div>
      <div className="flex flex-col sm:flex-row">
        <Card src={Chrome} browser={"Chrome"} ver={"62"} />
        <Card mt={"mt-14"} src={Firefox} browser={"Firefox"} ver={"55"} />
        <Card mt={"mt-24"} src={Opera} browser={"Opera"} ver={"48"} />
      </div>
    </div>
  );
}

export default Extension;
