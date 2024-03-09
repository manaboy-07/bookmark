import React from "react";
import heroImg from "../images/illustration-hero.svg";

function Hero() {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row  my-3 justify-between items-center px-12 m-3">
        <div>
          <div className="hero-text-section p-4 text-center lg:text-start">
            <h2 className="text-5xl font-semibold">
              A simple Bookmark Manager
            </h2>
            <h3 className="small-text py-3 text-center lg:text-start">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </h3>
          </div>
          <div className="my-1 flex justify-center lg:justify-start">
            <button className="chrome-btn mx-2 p-2 cursor-pointer rounded-md ">
              Get it on Chrome
            </button>
            <button className="firefox-btn mx-2 p-2 cursor-pointer rounded-md ">
              Get it on Firefox
            </button>
          </div>
        </div>
        <div>
          <img src={heroImg} alt="hero-img" className="my-2" />
        </div>
      </div>
    </>
  );
}

export default Hero;
