import React from "react";
import bgDots from "../images/bg-dots.svg";
import chrome from "../images/logo-chrome.svg";
function Card({ src, ver, browser, mt }) {
  return (
    <div
      className={`p-8 flex ${
        mt ? mt : null
      } mx-4 my-4 justify-center items-center extension-container`}
    >
      <div className="flex my-3 flex-col justify-center items-center">
        <img src={src} alt={browser} />
        <div className="text-center my-3">
          <h2 className="text-black font-bold">Add to {browser}</h2>
          <h4 className="text-slate-400">Minimum version {ver}</h4>
        </div>
        <img src={bgDots} alt="" className="my-4" />
        <button
          style={{
            height: "40px",
            width: "260px",
            fontSize: "16px",
          }}
          className="extension-btn my-3 mt-4 rounded-md font-bold cursor-pointer"
        >
          Add & install Extension
        </button>
      </div>
    </div>
  );
}

export default Card;
