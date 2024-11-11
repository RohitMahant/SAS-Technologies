"use client"
import React from "react";
import Products from "@/db/products.json";

export default function ProductCards() {
  return (
    <div className="relative flex overflow-x-scroll scrollbar-hide p-4 space-x-4 md:mt-44 mt-24  w-full">
      {Products.map((product) => (
        <div
          key={product.id}
          className="bg-white hover:opacity-80 cursor-pointer transition-all duration-500 shadow-md overflow-hidden flex-shrink-0 w-36 md:w-72 lg:w-60 xl:w-72"
        >
          <img
            src={product.img}
            alt={product.name}
            className="h-32 lg:h-52 md:h-44 w-full object-contain"
          />
          <div className="md:p-4 p-2 text-white bg-red-800 border">
            <h3 className="text-lg font-semibold">{product.productType}</h3>
            <p className="text-white font-sans font-semibold">Rs {product.Price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
