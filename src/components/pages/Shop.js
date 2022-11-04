import React, { useState, useEffect } from "react";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      setProducts(products);
    } catch (error) {
      console.error(`Unable to fetch products from url`);
    }
  };

  return (
    <div>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols1 gapy-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products?.map((product) => (
            <a
              key={product.id}
              href={"/item/".concat(product.id)}
              className="group"
            >
              <div className="border aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-white lg:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-contain object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                ${product.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
