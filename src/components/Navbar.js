import React from "react";
import {
  ShoppingBagIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  let active = false;

  if (location.pathname === "/shop") active = true;

  return (
    <>
      <div
        className="
      bg-white
      text-gray-900
      mx-auto
      w-full
      min-h-16
      px-2
      sm:px-4
      lg:px-8
      flex
      justify-between
      items-stretch
      shadow
      flex-grow
      flex-wrap
      z-10
    "
      >
        <h1 className="inline-flex items-center text-xl font-medium">
          Fashionista
        </h1>
        <nav className="w-1/3">
          <ul className="flex h-16 justify-around items-stretchjustify-self-end text-gray-700">
            <li className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
              <a href="/">Home</a>
            </li>
            <li className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
              <a href="/shop">Shop</a>
            </li>
            <li className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
              <a href="#">
                <ShoppingBagIcon className="h-6 w-6" />
              </a>
            </li>
          </ul>
        </nav>
        {active ? (
          <div className="w-full inline-flex justify-center sm:gap-6 lg:gap-16">
            <nav className="inline-flex items-start">
              <ul className="flex h-8 justify-evenly sm:gap-6 lg:gap-16 items-stretch text-gray-700">
                <li className="inline-flex items-center border-b border-transparent px-1 pt-1 text-gray-600 hover:border-gray-300 hover:text-gray-700">
                  <a href="/shop/men">Men</a>
                </li>
                <li className="inline-flex items-center border-b border-transparent px-1 pt-1 text-gray-600 hover:border-gray-300 hover:text-gray-700">
                  <a href="/shop/women">Women</a>
                </li>
                <li className="inline-flex items-center border-b border-transparent px-1 pt-1 text-gray-600 hover:border-gray-300 hover:text-gray-700">
                  <a href="/shop/accessories">Accessories</a>
                </li>
              </ul>
            </nav>
            <div className="inline-flex items-center justify-center px-2 lg:ml-6">
              <div className="w-full">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MagnifyingGlassIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    id="search"
                    name="search"
                    className="block w-full bg-white items-center pl-10 pr-3 leading-4 place-holder-gray-500 focus:placeholder-gray-400 focus:outline-none sm:text-sm"
                    placeholder="Search"
                    type="search"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Navbar;
