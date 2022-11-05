import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { StarIcon, CheckIcon } from "@heroicons/react/24/outline";

const Item = () => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState();
  const location = useLocation();

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  useEffect(() => {
    getItem();
  }, []);

  const getItem = async () => {
    try {
      setLoading(true);
      const id = location.pathname.slice(
        location.pathname.lastIndexOf("/"),
        location.pathname.length
      );
      const response = await fetch(
        "https://fakestoreapi.com/products/".concat(id)
      );
      const item = await response.json();
      setItem(item);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(`Unable to fetch products from url`);
    }
  };

  return (
    <>
      {loading ? (
        <div className="bg-white">
          <div className="animate-pulse mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            {/* Product details */}
            <div className="lg:max-w-lg lg:self-end">
              <div className="mt-4">
                <h1 className="text-3xl bg-slate-300 rounded-xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  &nbsp;
                </h1>
              </div>

              <section aria-labelledby="information-heading" className="mt-4">
                <h2 id="information-heading" className="sr-only">
                  Product information
                </h2>

                <div className="flex items-center">
                  <p className="text-lg w-16 bg-slate-300 rounded-xl text-gray-900 sm:text-xl">
                    &nbsp;
                  </p>

                  <div className="ml-4 border-l border-gray-300 pl-4">
                    <h2 className="sr-only">Reviews</h2>
                    <div className="flex items-center">
                      <div>
                        <div className="flex w-32 bg-slate-300 rounded-xl items-center">
                          &nbsp;
                        </div>
                        <p className="sr-only">
                          {item?.rating.rate} out of 5 stars
                        </p>
                      </div>
                      <p className="ml-2 w-24 bg-slate-300 rounded-xl text-sm text-gray-500">
                        &nbsp;
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-6">
                  <p className="text-base h-32 bg-slate-300 rounded-xl text-gray-500">
                    &nbsp;
                  </p>
                </div>

                <div className="mt-6 bg-slate-300 rounded-xl flex items-center">
                  &nbsp;
                  <p className="ml-2 bg-slate-300 rounded-xl w-48 text-sm text-gray-500">
                    &nbsp;
                  </p>
                </div>
              </section>
            </div>

            {/* Product image */}
            <div className="mt-10 bg-slate-300 rounded-xl lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
              <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
                &nbsp;
              </div>
            </div>

            {/* Product form */}
            <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
              <section aria-labelledby="options-heading">
                <h2 id="options-heading" className="sr-only">
                  Product options
                </h2>

                <form>
                  <div className="mt-10">
                    <button className="flex bg-slate-300 rounded-xl w-full items-center justify-center border border-transparent py-3 px-8 text-base font-medium text-white">
                      &nbsp;
                    </button>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            {/* Product details */}
            <div className="lg:max-w-lg lg:self-end">
              <div className="mt-4">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {item?.title}
                </h1>
              </div>

              <section aria-labelledby="information-heading" className="mt-4">
                <h2 id="information-heading" className="sr-only">
                  Product information
                </h2>

                <div className="flex items-center">
                  <p className="text-lg text-gray-900 sm:text-xl">
                    ${item?.price}
                  </p>

                  <div className="ml-4 border-l border-gray-300 pl-4">
                    <h2 className="sr-only">Reviews</h2>
                    <div className="flex items-center">
                      <div>
                        <div className="flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                              key={rating}
                              className={classNames(
                                item?.rating.rate > rating
                                  ? "text-yellow-400"
                                  : "text-gray-300",
                                "h-5 w-5 flex-shrink-0"
                              )}
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                        <p className="sr-only">
                          {item?.rating.rate} out of 5 stars
                        </p>
                      </div>
                      <p className="ml-2 text-sm text-gray-500">
                        {item?.rating.count} reviews
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-6">
                  <p className="text-base text-gray-500">{item?.description}</p>
                </div>

                <div className="mt-6 flex items-center">
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <p className="ml-2 text-sm text-gray-500">
                    In stock and ready to ship
                  </p>
                </div>
              </section>
            </div>

            {/* Product image */}
            <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
              <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
                <img
                  src={item?.image}
                  alt={item?.title}
                  className="h-full w-full object-contain object-center"
                />
              </div>
            </div>

            {/* Product form */}
            <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
              <section aria-labelledby="options-heading">
                <h2 id="options-heading" className="sr-only">
                  Product options
                </h2>

                <form>
                  <div className="mt-10">
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                    >
                      Add to bag
                    </button>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Item;
