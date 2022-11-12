import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-center items-center h-8 w-full text-gray-800 bg-white">
      <span>Craig Daniels, 2022</span>
      <a href="https://github.com/craigrdaniels/shopping-cart">
        <img
          className="items-center ml-2 h-4 w-4 hover:scale-110 duration-200"
          src="/GitHub-Mark-120px-plus.png"
          alt="GitHub"
        ></img>
      </a>
    </div>
  );
};

export default Footer;
