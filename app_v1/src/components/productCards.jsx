"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Products from "@/db/products.json";
import { useState } from "react";
import { MdClose } from "react-icons/md";

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
    <div className="w-full">
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
              onClick={() => router.push("/contact")}
              className="mt-3 py-2 px-4 bg-transparent border text-white rounded opacity-0 group-hover:opacity-100 hover:bg-primary hover:text-gray-700 transition-all duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      ))}
    </div>
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
              onClick={() => router.push("/contact")}
              className="mt-3 py-2 px-4 bg-transparent border text-white rounded opacity-0 group-hover:opacity-100 hover:bg-primary hover:text-gray-700 transition-all duration-300"
            >
              Contact us
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export  function ProductCard3() {
  const [selectedProduct, setSelectedProduct] = useState(null); // For dialog box
  const [showDialog, setShowDialog] = useState(false);

  // Filter products for Hikvision and select the first 5
  const hikvisionProducts = Products.filter(
    (product) => product.company === "Hikvision"
  ).slice(0, 5);

  const handleCall = () => {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      window.location.href = `tel:${"9802012042"}`;
      setShowDialog(false);
    } else {
      setShowDialog(true); // Show dialog for desktop users
    }
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  return (
    <div className="relative min-h-screen flex flex-col">

      {/* Product Cards */}
      <div className="flex flex-wrap gap-6 p-6">
        {hikvisionProducts.map((product) => (
          <div
            key={product.id}
            className="flex-none md:h-96 h-48 w-[calc(50%-1.2rem)] sm:w-[calc(33.33%-1.5rem)] md:w-[calc(25%-1.5rem)] bg-white shadow-md border overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setSelectedProduct(product)} // Open dialog
          >
            <img
              src={`/${product.img}`}
              alt={product.name}
              className="w-full md:h-72 transition-all duration-500 hover:lg:h-72 lg:h-64 h-28 p-2 object-contain"
            />
            <div className="md:p-4 p-1 text-gray-600 text-center">
              <h3 className="md:text-[18px] text-[12px] font-sans font-semibold">
                {product.name}
              </h3>
              <p className="font-sans text-[12px] md:text-[15px]">
                {product.Description}
              </p>
              <p className="font-sans text-red-800 text-[12px] md:text-[15px]">
                Rs {product.Price}
              </p>
            </div>
          </div>
          
        ))}
        <div className="w-full  flex justify-center items-center">
          <button 
          onClick={()=>{router.push('/retail')}}
          className="bg-slate-500 text-white px-3 py-2 rounded-md">View More</button>

        </div>
      </div>

      {/* Dialog Box */}
      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-1/2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">{selectedProduct.name}</h2>
              <MdClose
                className="cursor-pointer text-gray-600"
                size={24}
                onClick={() => setSelectedProduct(null)}
              />
            </div>
            <img
              src={`/${selectedProduct.img}`}
              alt={selectedProduct.name}
              className="w-full h-64 object-contain mb-4"
            />
            {/* Bullet Point Description */}
            <div className="text-gray-600 mb-4">
              <p className="font-semibold mb-2">Description:</p>
              {selectedProduct.list && selectedProduct.list.length > 0 ? (
                <ul className="list-disc pl-5 space-y-1 h-60 overflow-y-auto">
                  {selectedProduct.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>No features available for this product.</p>
              )}
            </div>
            <p className="font-semibold text-red-800">
              Price: Rs {selectedProduct.Price}
            </p>
            <button
              onClick={handleCall}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Get Best Price
            </button>
          </div>
          {showDialog && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-[#0096C7]/80 text-white rounded-lg p-4 shadow-md w-full max-w-xs text-center opacity-100 scale-100 transition-all duration-300 transform">
                <p className="text-sm font-medium">Want to call us?</p>
                <p className="mt-1 text-xs">Dial this</p>
                <h1 className="text-md font-sans mt-1">9802012042</h1>
                <button
                  className="mt-4 px-4 py-2 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition"
                  onClick={closeDialog}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export  function ProductCard4() {
  const [selectedProduct, setSelectedProduct] = useState(null); // For dialog box
  const [showDialog, setShowDialog] = useState(false);
  
  const router = useRouter();
  // Filter products for Hikvision and select the first 5
  const hikvisionProducts = Products.filter(
    (product) => product.company === "CP Plus"
  ).slice(0, 5);

  const handleCall = () => {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      window.location.href = `tel:${"9802012042"}`;
      setShowDialog(false);
    } else {
      setShowDialog(true); // Show dialog for desktop users
    }
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  return (
    <div className="relative min-h-screen flex flex-col">

      {/* Product Cards */}
      <div className="flex flex-wrap gap-6 p-6">
        {hikvisionProducts.map((product) => (
          <div
            key={product.id}
            className="flex-none md:h-96 h-48 w-[calc(50%-1.2rem)] sm:w-[calc(33.33%-1.5rem)] md:w-[calc(25%-1.5rem)] bg-white shadow-md border overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setSelectedProduct(product)} // Open dialog
          >
            <img
              src={`/${product.img}`}
              alt={product.name}
              className="w-full md:h-72 transition-all duration-500 hover:lg:h-72 lg:h-64 h-28 p-2 object-contain"
            />
            <div className="md:p-4 p-1 text-gray-600 text-center">
              <h3 className="md:text-[18px] text-[12px] font-sans font-semibold">
                {product.name}
              </h3>
              <p className="font-sans text-[12px] md:text-[15px]">
                {product.Description}
              </p>
              <p className="font-sans text-red-800 text-[12px] md:text-[15px]">
                Rs {product.Price}
              </p>
            </div>
          </div>
          
        ))}
        <div className="w-full flex justify-center items-center">
          <button 
          onClick={()=>{router.push('/retail')}}
          className="bg-slate-500 text-white px-3 py-2 rounded-md">View More</button>

        </div>
      </div>

      {/* Dialog Box */}
      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-1/2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">{selectedProduct.name}</h2>
              <MdClose
                className="cursor-pointer text-gray-600"
                size={24}
                onClick={() => setSelectedProduct(null)}
              />
            </div>
            <img
              src={`/${selectedProduct.img}`}
              alt={selectedProduct.name}
              className="w-full h-64 object-contain mb-4"
            />
            {/* Bullet Point Description */}
            <div className="text-gray-600 mb-4">
              <p className="font-semibold mb-2">Description:</p>
              {selectedProduct.list && selectedProduct.list.length > 0 ? (
                <ul className="list-disc pl-5 space-y-1 h-60 overflow-y-auto">
                  {selectedProduct.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>No features available for this product.</p>
              )}
            </div>
            <p className="font-semibold text-red-800">
              Price: Rs {selectedProduct.Price}
            </p>
            <button
              onClick={handleCall}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Get Best Price
            </button>
          </div>
          {showDialog && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-[#0096C7]/80 text-white rounded-lg p-4 shadow-md w-full max-w-xs text-center opacity-100 scale-100 transition-all duration-300 transform">
                <p className="text-sm font-medium">Want to call us?</p>
                <p className="mt-1 text-xs">Dial this</p>
                <h1 className="text-md font-sans mt-1">9802012042</h1>
                <button
                  className="mt-4 px-4 py-2 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition"
                  onClick={closeDialog}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}


export  function ProductCards5() {
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


