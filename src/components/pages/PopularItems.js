import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PopularItems = () => {
  const [loading, setLoading] = useState(true);
  const [popularItems, setPopularItems] = useState([]);

  useEffect(() => {
    getPopularItems();
  }, []);

  const getPopularItems = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products?limit=4");
      const products = await response.json();
      setPopularItems(products);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(`Unable to fetch products from URL`);
    }
  };

  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Popular Items
      </h2>

      {loading ? (
        <div className="animate-pulse mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {Array(4)
            .fill(undefined)
            .map((item, index) => (
              <Link key={index} to="" className="group">
                <div className="bg-slate-300 rounded-xl min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-m hover:opacity-75 lg:aspect-none lg:h-80">
                  &nbsp;
                </div>
                <div className="mt-4 bg-slate-300 rounded-xl flex justify-between">
                  &nbsp;
                </div>
              </Link>
            ))}
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {popularItems?.map((product) => (
            <Link
              key={product.id}
              to={"/shop/item/".concat(product.id)}
              className="group"
            >
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-white hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-contain object-center lg:h-full lg:w-full hover:opacity-75 transition"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    {product.title.length > 36
                      ? product.title.substring(0, 24) + "..."
                      : product.title}
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price.toLocaleString("en-AU", {
                    style: "currency",
                    currency: "AUD",
                  })}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default PopularItems;
