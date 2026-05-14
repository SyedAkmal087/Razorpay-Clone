import React from "react";
import bestselling from "../assets/images/bestselling.avif";
import { FaArrowRight } from "react-icons/fa";

function HeroSection() {
  return (
    <div className="hero-section m-auto max-w-7xl h-[600px]">
      <div className="boxes max-w-full flex h-full">
        <div className="right-box flex justify-center flex-col gap-6 w-1/2 h-full">
          <h1 className="header text-5xl font-bold">
            <span className="text-textcolor">
              Sell in India. Settle Globaly <br />
            </span>
            Without an India Entity
          </h1>
          <p className="hero-para text-gray-500 text-sm">
            Reach millions of buyers via UPI, Rupay, Netbanking, Cards and more
          </p>
          <div className="btns flex items-center gap-6">
            <button className="group flex items-center gap-2 signup-btn bg-textcolor text-white px-6 py-4 text-base font-Semibold rounded-md">
              Sign Up Now
              <FaArrowRight className="group-hover:translate-x-2  transition-all duration-200" />
            </button>
            <p className="text-textcolor text-lg font-bold">Know More</p>
          </div>
        </div>
        <div className="left-box flex justify-end w-1/2 h-full">
          <img src={bestselling} alt="hero-section-image" className="h-full" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
