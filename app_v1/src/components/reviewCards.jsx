"use client";
import React from "react";
import { FaUser } from "react-icons/fa6";

const reviews = [
  {
    id: 1,
    image: "reviewer1.jpg",
    reviewerName: "Manoj Joshi",
    reviewText: "Fantastic product! It really helped in my daily tasks.",
    rating: 4.5,
  },
  {
    id: 2,
    image: "reviewer2.jpg",
    reviewerName: "Jhon Doe",
    reviewText: "Good quality, but delivery was a bit slow.",
    rating: 4,
  },
  {
    id: 3,
    image: "reviewer3.jpg",
    reviewerName: "Rohit Mahant",
    reviewText: "Exceeded expectations! Highly recommend.",
    rating: 5,
  },
  {
    id: 4,
    image: "reviewer4.jpg",
    reviewerName: "Killian MBappe",
    reviewText: "Decent product for the price.And it works",
    rating: 3.5,
  },
];

export default function ReviewCards() {
  return (
    <div className="mt-12 flex flex-wrap justify-center items-center gap-4 px-4">
      {reviews.map((review) => (
        <div
          key={review.id}
          className="bg-gradient-to-br from-[#0096C7] via-gray-300 to-gray-100 md:flex-col  text-gray-700 shadow-lg overflow-hidden w-full sm:w-72 md:w-60 lg:w-64 xl:w-72 p-4 flex justify-between items-center rounded-md transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-purple-300 hover:via-blue-200 hover:to-green-300"
        >
          <div className="flex justify-center items-center mb-3">
            <FaUser size={50} className="text-primary transition duration-300 hover:text-green-600" />
          </div>

          <div className="text-center">
            <h3 className="text-lg font-semibold">{review.reviewerName}</h3>
            <p className="text-gray-800 mt-2 text-sm sm:text-base">
              {review.reviewText}
            </p>
            <p className="text-yellow-600 mt-2 text-sm sm:text-base">
              Rating: <span className="font-serif">{review.rating} </span>⭐
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
