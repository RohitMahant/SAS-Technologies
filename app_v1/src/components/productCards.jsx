"use client"
import React from "react";

const products = [
  {
    id: 1,
    image: "product1.jpg",
    title: "Product 1",
    price: "$49.99",
  },
  {
    id: 2,
    image: "product2.jpg",
    title: "Product 2",
    price: "$59.99",
  },
  {
    id: 3,
    image: "product3.jpg",
    title: "Product 3",
    price: "$69.99",
  },
  {
    id: 4,
    image: "product4.jpg",
    title: "Product 4",
    price: "$79.99",
  },
  {
    id: 5,
    image: "product1.jpg",
    title: "Product 1",
    price: "$49.99",
  },
  {
    id: 6,
    image: "product2.jpg",
    title: "Product 2",
    price: "$59.99",
  },
  {
    id: 7,
    image: "product3.jpg",
    title: "Product 3",
    price: "$69.99",
  },
  {
    id: 8,
    image: "product4.jpg",
    title: "Product 4",
    price: "$79.99",
  },
];

export default function ProductCards() {
  return (
    <div className="relative flex overflow-x-scroll scrollbar-hide p-4 space-x-4 md:mt-44 mt-24  w-full">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-md overflow-hidden flex-shrink-0 w-36 md:w-72 lg:w-60 xl:w-72"
        >
          <img
            src={product.image}
            alt={product.title}
            className="h-20 lg:h-52 md:h-44 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-gray-600">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
