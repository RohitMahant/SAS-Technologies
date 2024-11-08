"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { useState } from "react";
import { FaFilter, FaMagnifyingGlass } from "react-icons/fa6";

export default function Retail() {

  const [filterBar, setFilterBar] = useState(true);

  return (
    <div className="relative">
      <Header />
      <div className="flex">
        <div
          className={`${
            filterBar ? "block" : "hidden"
          } lg:block z-50 h-screen w-[300px]  bg-white`}
        ></div>

        <div className="flex  justify-center items-center md:h-16 lg:h-20 h-12 w-full top-0 sticky bg-transparent ">
          <div className="md:m-3  flex justify-center items-center  lg:hidden md:block  h-12 w-12 bg-transparent">
            <FaFilter
              size={28}
              color="white"
              onClick={() => {
                setFilterBar(!filterBar);
              }}
            />
          </div>
          <form className="flex items-center ">
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
      </div>

      <Footer />
    </div>
  );
}
