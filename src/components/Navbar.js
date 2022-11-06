import React, { useContext } from "react";
import {
  ShoppingBagIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useLocation, Link } from "react-router-dom";
import { CartContext } from "./App";

const Navbar = () => {
  const { cart, setOpen } = useContext(CartContext);
  const location = useLocation();
  let active = false;

  if (location.pathname.substring(0, 5) === "/shop") active = true;

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
          <Link to="/">Fashionista</Link>
        </h1>
        <nav className="w-1/3">
          <ul className="flex h-16 justify-around items-stretchjustify-self-end text-gray-700">
            <li
              className={`inline-flex items-center border-b-2 ${
                location.pathname.length === 1
                  ? "border-indigo-600 hover:border-indigo-700"
                  : "border-transparent hover:border-gray-300"
              } px-1 pt-1 font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 transition`}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={`inline-flex items-center border-b-2 ${
                location.pathname.substring(0, 5) === "/shop"
                  ? "border-indigo-600 hover:border-indigo-700"
                  : "border-transparent hover:border-gray-300"
              } px-1 pt-1 font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 transition`}
            >
              <Link to="/shop">Shop</Link>
            </li>
            <li className="inline-flex relative items-center border-b-2 border-transparent px-1 pt-1 font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 transition">
              <Link onClick={() => setOpen(true)}>
                <ShoppingBagIcon className="h-6 w-6" />
              </Link>
              {cart.length > 0 ? (
                <div className="absolute top-4 left-5 inline-flex items-center justify-center text-white text-sm bg-indigo-600 rounded-full w-4 h-4">
                  {cart.length}
                </div>
              ) : undefined}
            </li>
          </ul>
        </nav>
        {active ? (
          <div className="w-full inline-flex justify-center sm:gap-6 lg:gap-16">
            <nav className="inline-flex items-start">
              <ul className="flex h-8 justify-evenly sm:gap-6 lg:gap-16 items-stretch text-gray-700">
                <li className="inline-flex items-center border-b border-transparent px-1 pt-1 text-gray-600 hover:border-gray-300 hover:text-gray-700 transition">
                  <Link to="/shop/men's clothing">Men</Link>
                </li>
                <li className="inline-flex items-center border-b border-transparent px-1 pt-1 text-gray-600 hover:border-gray-300 hover:text-gray-700 transition">
                  <Link to="/shop/women's clothing">Women</Link>
                </li>
                <li className="inline-flex items-center border-b border-transparent px-1 pt-1 text-gray-600 hover:border-gray-300 hover:text-gray-700 transition">
                  <Link to="/shop/jewelery">Jewelery</Link>
                </li>
                <li className="inline-flex items-center border-b border-transparent px-1 pt-1 text-gray-600 hover:border-gray-300 hover:text-gray-700 transition">
                  <Link to="/shop/electronics">Electronics</Link>
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
