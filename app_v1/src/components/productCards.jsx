"use client";
import React from "react";
import { useRouter } from "next/navigation";

const ServicesData1 = [
  {
    id: 1,
    cardName: "IP Cameras",
    images: [
      "CP-GPC-TA50PL2C-SE-0360.jpg",
      "CP-GPC-DA50PL2-SE.jpg",
      "CP-URC-DC24PL2C-V3.jpg",
    ],
    desc:
      "We offer the finest selection of IP Cameras of the finest Brands",
    href:"/products/cctv/ip_cameras"  
  },
  {
    id: 6,
    cardName: "HD Cameras",
    images: [
      "hikvision_camera.webp",
      "CP-GPC-DA50PL2-SE.jpg",
      "CP-URC-DC24PL2C-V3.jpg",
    ],
    desc:
      "We offer the finest selection of HD Cameras of the finest Brands",
      href:"/products/cctv/hd_cameras"  
  },
  
  {
    id: 2,
    cardName: "NVRs",
    images: ["CP-UVR-3201-E2H.jpg"],
    desc:
      "We offer the finest selection of NVR, DVR, and XVR systems for all your security needs.",
      href:"/products/recorders/nvr"  
  },
  {
    id: 7,
    cardName: "DVRs",
    images: ["CP-UVR-3201-E2H.jpg"],
    desc:
      "We offer the finest selection of NVR, DVR, and XVR systems for all your security needs.",
      href:"/products/recorders/dvr"  
  },
  {
    id: 3,
    cardName: "Wifi Cameras",
    images: ["hawkvision_camera.png"],
    desc:
      "Wifi Cameras available at most affordable prices",
      href:"/products/cctv/wifi_cameras"  
  },
  {
    id: 4,
    cardName: "Biometric Systems",
    images: ["CP-VTA-T2324-U.jpg"],
    desc:
      "State of the art Biometric locks and Attendance systems",
      href:"/products/biometrics"  
  },
  {
    id: 5,
    cardName: "Video Door Phones",
    images: ["video_door_phones.png"],
    desc:
      "Best quality video door phones satisfying your security needs.",
      href:"/products/door_devices/vdp" 
  },
];

const ServicesData2 = [
  {
    id: 1,
    cardName: "Racks",
    images: [
      "(CP-HA-RK4535VM-2U).jpg",
      "CP-GPC-DA50PL2-SE.jpg",
      "CP-URC-DC24PL2C-V3.jpg",
    ],
    desc:
      "We offer the finest selection of IP Cameras of the finest Brands",
      href:"/products/accessories/racks" 
  },
  {
    id: 6,
    cardName: "Routers",
    images: [
      "CP-XR-DE21-S.jpg",
      "CP-GPC-DA50PL2-SE.jpg",
      "CP-URC-DC24PL2C-V3.jpg",
    ],
    desc:
      "We offer the finest selection of HD Cameras of the finest Brands",
      href:"/products/accessories/routers" 
  },
  
  {
    id: 2,
    cardName: "SMPS",
    images: ["CP-DPS-PD04V2-12D.jpg"],
    desc:
      "We offer the finest selection of NVR, DVR, and XVR systems for all your security needs.",
      href:"/products/accessories/smps" 
  },
  {
    id: 3,
    cardName: "POE Switch",
    images: ["CP-ANW-GPU8G2-F2.jpg"],
    desc:
      "Wifi Cameras available at most affordable prices",
      href:"/products/accessories/poe_switches" 
  },
  {
    id: 4,
    cardName: "Monitors",
    images: ["CP UEM 19AH.jpg"],
    desc:
      "State of the art Biometric locks and Attendance systems",
      href:"/products/accessories/monitors" 
  },
  {
    id: 5,
    cardName: "Cables",
    images: ["CP-WCC-90R.jpg"],
    desc:
      "Best quality video door phones satisfying your security needs.",
      href:"/products/accessories/cables" 
  },
];

export  function ProductCards1() {
  const router = useRouter();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4 mt-12 w-full place-items-center">
      {ServicesData1.map((service) => (
        <div
          key={service.id}
          className="relative w-full lg:w-4/5 h-56 lg:h-56 shadow-lg  bg-white overflow-hidden group"
        >
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img
              src={`/${service.images[0]}`}
              alt={service.cardName}
              className="w-full h-full md:object-contain object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Expandable Content */}
          <div
            className="absolute bottom-0 w-full bg-[#0096C7]/80 text-white md:p-4 p-2 transition-all duration-500 ease-in-out group-hover:h-full h-14 md:h-16 flex flex-col hover:justify-center"
          >
            <div className="flex justify-between items-center">
            <h3 className="md:text-lg text-sm flex font-semibold">{service.cardName} 

            </h3>
    
            </div>
            <p
              className="mt-2 opacity-0 text-sm md:text-md group-hover:opacity-100 transition-opacity duration-300"
            >
              {service.desc}
            </p>
            <button
              onClick={() => router.push(service.href)}
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


export  function ProductCards2() {
  const router = useRouter();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4 mt-12 w-full place-items-center">
      {ServicesData2.map((service) => (
        <div
          key={service.id}
          className="relative w-full lg:w-4/5 h-56 lg:h-56 shadow-lg  bg-white overflow-hidden group"
        >
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img
             src={`/${service.images[0]}`}
              alt={service.cardName}
              className="w-full h-full md:object-cover object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Expandable Content */}
          <div
            className="absolute bottom-0 w-full bg-[#0096C7]/80 text-white md:p-4 p-2 transition-all duration-500 ease-in-out group-hover:h-full h-14 md:h-16 flex flex-col hover:justify-center"
          >
            <div className="flex justify-between items-center">
            <h3 className="md:text-lg text-sm flex font-semibold">{service.cardName} 

            </h3>
    
            </div>
            <p
              className="mt-2 opacity-0 text-sm md:text-md group-hover:opacity-100 transition-opacity duration-300"
            >
              {service.desc}
            </p>
            <button
              onClick={() => router.push(service.href)}
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
