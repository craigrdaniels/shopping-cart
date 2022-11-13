import React, { useContext, useState } from "react";
import { ShoppingBagIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { useLocation, Link } from "react-router-dom";
import { CartContext } from "./App";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  const { cart, setOpen } = useContext(CartContext);
  const [navOpen, setNavOpen] = useState(false);
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
      w-screen
      min-h-16
      max-h-32
      px-2
      sm:px-4
      lg:px-8
      flex
      justify-between
      items-stretch
      shadow
      flex-shrink
      flex-wrap
      z-10
    "
      >
        <h1 className="inline-flex flex-grow items-center text-xl font-medium">
          <Link to="/">Fashionista</Link>
        </h1>
        <nav>
          <ul className="flex h-16 gap-8 justify-around items-stretchjustify-self-end text-gray-700">
            <li
              className={`invisible md:visible inline-flex items-center border-b-2 ${
                location.pathname.length === 1
                  ? "border-indigo-600 hover:border-indigo-700"
                  : "border-transparent hover:border-gray-300"
              } px-1 pt-1 font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 transition`}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={`invisible md:visible inline-flex items-center border-b-2 ${
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
            <li className="md:invisible inline-flex relative items-center border-b-2 border-transparent mx-4 px-1 pt-1 font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 transition">
              <Link onClick={() => setNavOpen(true)}>
                <Bars3Icon className="h-6 w-6" />
              </Link>
            </li>
          </ul>
        </nav>
        {active ? (
          <div className="w-full collapse hidden md:inline-flex flex-grow justify-center md:gap-6 lg:gap-16">
            <nav className="inline-flex items-start">
              <ul className="flex h-8 justify-evenly md:gap-6 lg:gap-16 items-stretch text-gray-700">
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
          </div>
        ) : (
          ""
        )}
      </div>
      <HamburgerMenu show={navOpen} setNavOpen={setNavOpen} />
    </>
  );
};

export default Navbar;
