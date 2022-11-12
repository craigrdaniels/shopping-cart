import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PopularItems from "./PopularItems";

const Home = () => {
  return (
    <>
      <div className="flex flex-col flex-grow relative bg-indigo-800 group">
        <div className="absolute inset-0 overflow-hidden">
          <img
            className="h-full w-full object-cover object-top group-hover:scale-105 transition duration-700 ease-in-out"
            src="/images/hannah-morgan-ycVFts5Ma4s-unsplash.jpg"
            alt=""
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-400 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative mr-0 max-w-8xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-right text-2xl tracking-tight [text-shadow:_1px_1px_0_rgb(0_0_0_/_40%)] text-white sm:text-5xl lg:text-6xl">
            Fashion direct to your doorstep
          </h1>
          <p className="text-right mt-6 text-xl [text-shadow:_1px_1px_0_rgb(0_0_0_/_40%)] text-white">
            Become a Fashionista without leaving your home
          </p>
          <p className="text-right mt-6 text-xl">
            <Link
              to="/shop"
              className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Shop Now
            </Link>
          </p>
        </div>
      </div>
      <PopularItems />
    </>
  );
};

export default Home;
