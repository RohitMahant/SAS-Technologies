"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { useState } from "react";
import { FaFilter, FaMagnifyingGlass } from "react-icons/fa6";
import Products from "@/db/products.json";
export default function Retail() {
  const [filterBar, setFilterBar] = useState(false);

  return (
    <div className="relative ">
      <div className="flex h-screen">
        <div
          className={`${
            filterBar ? "block" : "hidden"
          } lg:block z-30 h-screen lg:w-[380px] w-52 border-t-2 md:w-[300px] bg-white`}
        ></div>

        <div className="justify-center  md:flex-col items-center md:h-16 lg:h-20 h-12 w-full top-0 sticky bg-transparent ">
          <div className="justify-center flex md:flex-col items-center md:h-16 lg:h-20 h-12 w-full top-0 sticky bg-transparent ">
            <div className="md:m-3  flex justify-center items-center  lg:hidden md:block  h-12 w-12 bg-transparent">
              <FaFilter
                size={28}
                color="white"
                onClick={() => {
                  setFilterBar(!filterBar);
                }}
              />
            </div>
            <form className="m-6 justify-center flex items-center ">
              <div className="bg-white lg:hidden w-60 md:hidden h-10 rounded flex justify-center items-center ">
                <input
                  type="text"
                  placeholder="search products"
                  className="lg:block md:m-3 md:w-[700px] md:h-14 w-p-2 rounded placeholder:text-sm outline-none focus:ring-0 "
                  required
                  style={{ boxShadow: "none" }}
                />
                <button className="">
                  <FaMagnifyingGlass />
                </button>
              </div>

              <div className="bg-white w-[700px] md:block  lg:flex hidden items-center justify-evenly h-14 rounded">
                <input
                  type="text"
                  placeholder="search products"
                  className="hidden lg:block md:block md:w-[600px] md:h-14 p-2 rounded placeholder:text-sm outline-none focus:ring-0 "
                  required
                  style={{ boxShadow: "none" }}
                />
                <button className="">
                  <FaMagnifyingGlass />
                </button>
              </div>
            </form>
          </div>
          <div className="w-full relative h-[72vh] mt-12  overflow-y-auto flex justify-center items-center flex-wrap gap-6 p-6">
            {Products.map((product) => (
              <div
                key={product.id}
                className="flex-none w-[calc(50%-1.2rem)] sm:w-[calc(33.33%-1.5rem)] md:w-[calc(25%-1.5rem)] lg:w-[calc(25%-1.5rem)] bg-white shadow-md rounded-md overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full md:h-72 lg:h-72 h-36 object-cover"
                />
                <div className="md:p-4 p-1">
                  <h3 className="text-sm md:text-md font-semibold">
                    {product.productType}
                  </h3>
                  <p className="text-gray-600">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    
    </div>
  );
}
