"use client";
import React from "react";
import { useRouter } from "next/navigation";

const ServicesData = [
  {
    id: 1,
    cardName: "IP and HD Cameras",
    images: [
      "CP-GPC-TA50PL2C-SE-0360.jpg",
      "CP-GPC-DA50PL2-SE.jpg",
      "CP-URC-DC24PL2C-V3.jpg",
    ],
    desc:
      "We offer the finest selection of IP and HD Cameras of the finest Brands",
  },
  {
    id: 2,
    cardName: "DVR, NVR, and XVRs",
    images: ["CP-UVR-3201-E2H.jpg"],
    desc:
      "We offer the finest selection of NVR, DVR, and XVR systems for all your security needs.",
  },
  {
    id: 3,
    cardName: "DVR, NVR, and XVRs",
    images: ["CP-UVR-3201-E2H.jpg"],
    desc:
      "We offer the finest selection of NVR, DVR, and XVR systems for all your security needs.",
  },
];

export default function ProductCards() {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mt-12 w-full">
      {ServicesData.map((service) => (
        <div
          key={service.id}
          className="relative w-full h-64 lg:h-80 shadow-lg overflow-hidden group"
        >
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img
              src={service.images[0]}
              alt={service.cardName}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Expandable Content */}
          <div
            className="absolute bottom-0 w-full bg-black/70 text-white p-4 transition-all duration-500 ease-in-out group-hover:h-full h-16 flex flex-col hover:justify-center"
          >
            <div className="flex justify-between items-center">
            <h3 className="text-lg flex font-semibold">{service.cardName} 

            </h3>
            <button
              onClick={() => router.push("/retail")}
              className=" py-2 px-4 bg-transparent md:hidden border border-white text-white rounded  group-hover:opacity-100 hover:bg-primary hover:text-gray-700 transition-all duration-300"
            >
              View More
            </button>
            </div>
            <p
              className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              {service.desc}
            </p>
            <button
              onClick={() => router.push("/retail")}
              className="mt-3 py-2 px-4 bg-transparent border text-white rounded opacity-0 group-hover:opacity-100 hover:bg-primary hover:text-gray-700 transition-all duration-300"
            >
              View More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
