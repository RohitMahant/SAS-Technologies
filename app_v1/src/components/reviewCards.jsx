"use client";
import React from "react";

const reviews = [
  {
    id: 1,
    image: "reviewer1.jpg",
    reviewerName: "Alice Smith",
    reviewText: "Fantastic product! It really helped in my daily tasks.",
    rating: 4.5,
  },
  {
    id: 2,
    image: "reviewer2.jpg",
    reviewerName: "John Doe",
    reviewText: "Good quality, but delivery was a bit slow.",
    rating: 4,
  },
  {
    id: 3,
    image: "reviewer3.jpg",
    reviewerName: "Sarah Johnson",
    reviewText: "Exceeded expectations! Highly recommend.",
    rating: 5,
  },
  {
    id: 4,
    image: "reviewer4.jpg",
    reviewerName: "Michael Brown",
    reviewText: "Decent product for the price.",
    rating: 3.5,
  },
];

export default function ReviewCards() {
  return (
    <div className="relative flex overflow-x-scroll scrollbar-hide p-4 space-x-4 w-full">
      {reviews.map((review) => (
        <div
          key={review.id}
          className="bg-tertiary shadow-md rounded-lg overflow-hidden flex-shrink-0 w-36 md:w-72 lg:w-60 xl:w-72"
        >
          <img
            src={review.image}
            alt={review.reviewerName}
            className="h-20 md:h-44 w-full object-cover"
          />
          <div className="md:p-4">
            <h3 className="text-lg font-semibold">{review.reviewerName}</h3>
            <p className="text-gray-600 mt-2">{review.reviewText}</p>
            <p className="text-yellow-500 mt-2">Rating: {review.rating} ⭐</p>
          </div>
        </div>
      ))}
    </div>
  );
}
