import React from "react";
import logo from "../assets/images/razorpaylogo.png";
import { FaArrowRight } from "react-icons/fa";

function Navbar() {
  const anchorStyle =
    "text-sm hover:text-textcolor  border-b-2 border-transparent hover:text-base hover:border-textcolor  transition-all duration-200";
  return (
    <nav className="navbar flex items-center justify-between max-w-7xl m-auto">
      <div className="logo-container w-32">
        <img src={logo} alt="razorpay-logo" />
      </div>
      <div
        className="link-container flex gap-4
      "
      >
        <a href="" className={anchorStyle}>
          Agentic Stack
        </a>
        <a href="" className={anchorStyle}>
          Payments
        </a>
        <a href="" className={anchorStyle}>
          Banking+
        </a>
        <a href="" className={anchorStyle}>
          Payroll
        </a>
        <a href="" className={anchorStyle}>
          Engage
        </a>
        <a href="" className={anchorStyle}>
          Partners
        </a>
        <a href="" className={anchorStyle}>
          Resource
        </a>
        <a href="" className={anchorStyle}>
          Pricing
        </a>
      </div>
      <div className="button-container flex gap-4">
        <button className="login-btn text-textcolor px-4 py-2 text- text- border-2 border-textcolor  hover:font-semibold rounded-md transition-all duration-200">
          Login
        </button>
        <button className="group flex items-center gap-2 signup-btn bg-textcolor text-white px-4 py-2 text-sm rounded-md">
          Sign Up
          <FaArrowRight className="group-hover:translate-x-2  transition-all duration-200" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
