import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Shop = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const prevLocationRef = useRef();

  useEffect(() => {
    getProducts();
    prevLocationRef.current = location;
  }, []);

  useEffect(() => {
    if (location.pathname !== prevLocationRef.current.pathname) getProducts();
    prevLocationRef.current = location;
  }, [location]);

  const getProducts = async () => {
    try {
      setLoading(true);
      const category = location.pathname.slice(
        location.pathname.lastIndexOf("/"),
        location.pathname.length
      );
      let url = "https://fakestoreapi.com/products";
      if (category !== "/shop" && category !== "/") {
        url += "/category" + category;
      }
      const response = await fetch(url);
      const products = await response.json();
      setProducts(products);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(`Unable to fetch products from url`);
    }
  };

  return (
    <div className="flex flex-col flex-grow mt-24">
      {loading ? (
        <div className="mx-auto max-w-2xl py-8 md:py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          <div className="animate-pulse grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {Array(8)
              .fill(undefined)
              .map((item, index) => (
                <Link key={index} to="" className="group">
                  <div className="bg-slate-300 h-56 w-56 rounded-xl aspect-w-1 aspect-h-1 overflow-hidden lg:aspect-w-7 xl:aspect-h-8">
                    &nbsp;
                  </div>
                  <h3 className="mt-4 text-sm bg-slate-300 rounded-xl text-gray-700">
                    &nbsp;
                  </h3>
                  <p className="bg-slate-300 w-16 rounded-xl mt-1 text-lg font-medium text-gray-900">
                    &nbsp;
                  </p>
                </Link>
              ))}
          </div>
        </div>
      ) : (
        <div className="mx-auto max-w-2xl py-8 md:py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products?.map((product) => (
              <Link
                key={product.id}
                to={"/shop/item/".concat(product.id)}
                className="group"
              >
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-white lg:aspect-w-7 lg:aspect-h-8">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain object-center group-hover:opacity-75 transition"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">
                  {product.title.length > 36
                    ? product.title.substring(0, 36) + "..."
                    : product.title}
                </h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.price.toLocaleString("en-AU", {
                    style: "currency",
                    currency: "AUD",
                  })}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
