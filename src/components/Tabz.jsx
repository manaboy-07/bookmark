import React from "react";
import Button from "./Button";

function Tabz({ src, text, header }) {
  return (
    <div className="flex p-12 mx-4  flex-col-reverse lg:flex-row justify-between items-center">
      <div className="my-3 ml-4">
        <img src={src} alt="" />
      </div>
      <div className="my-4 ml-5 p-3 mr-16">
        <h1
          className="font-bold my-4"
          style={{
            fontSize: "28px",
          }}
        >
          {header}
        </h1>
        <h4
          className="text-slate-400 my-4"
          fontSize="22px"
          style={{
            maxWidth: "368px",
          }}
        >
          {text}
        </h4>
        <Button />
      </div>
    </div>
  );
}

export default Tabz;
