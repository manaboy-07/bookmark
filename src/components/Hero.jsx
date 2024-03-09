import React from "react";
import heroImg from "../images/illustration-hero.svg";

function Hero() {
  return (
    <>
      <div className="flex my-3 justify-between items-center px-12 m-3">
        <div>
          <div className="hero-text-section">
            <h2 className="hero-text">A simple Bookmark Manager</h2>
            <h3 className="small-text">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </h3>
          </div>
          <div className="my-3 flex">
            <button className="chrome-btn mx-2 p-2 cursor-pointer rounded-md font-bold">
              Get it on Chrome
            </button>
            <button className="firefox-btn mx-2 p-2 cursor-pointer rounded-md font-bold">
              Get it on Firefox
            </button>
          </div>
        </div>
        <div>
          <img src={heroImg} alt="hero-img" />
        </div>
      </div>
    </>
  );
}

export default Hero;
