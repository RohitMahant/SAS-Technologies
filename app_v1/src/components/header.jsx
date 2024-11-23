"use client";

import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { startTransition } from 'react';  // Start React transition
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname(); // Get the current pathname
  const dropdownRef = useRef(null); // Ref for detecting outside clicks

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleNavClick = (path) => {
    if(path===pathname){
      setIsSidebarOpen(false);
      setIsDropdownOpen(false);
    }
    else{
      setIsSidebarOpen(false);
      setIsDropdownOpen(false);
      startTransition(() => {
        setIsLoading(true); // Show loading spinner
        router.push(path); // Navigate programmatically
      });
    }
    
  };

  const getNavItemClasses = (path) =>
    `cursor-pointer ${
      pathname === path ? "font-cocoBold text-red-800" : "hover:text-textColor"
    }`;

 // Listen to Next.js router events to manage the loading state
 useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoading(false); // Hide loading spinner after a short delay
  }, 800); // Delay can be adjusted to match the typical loading time

  return () => clearTimeout(timer); // Clean up the timer
}, [pathname]);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup to reset scroll when component unmounts or sidebar closes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);

  return (
    <>
    {/* Loading spinner */}
      {isLoading && (
        <div className="fixed inset-0 bg-white flex justify-center items-center z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-800"></div>
        </div>
      )}
      {/* Desktop Navbar */}
      <nav className="hidden w-full border lg:flex sticky z-10 bg-white md:h-16 lg:h-20 items-center justify-center md:gap-x-12 lg:gap-x-16 md:flex">
        <div>
          <img
            onClick={() => {
              router.push("/");
            }}
            src="/logo.png"
            alt="sas-technologiesLogo"
            className="md:h-14 lg:h-20 cursor-pointer"
          />
        </div>
        <div>
          <ul className="flex font-cocoRegular md:text-[18px] lg:text-1xl md:gap-x-16 lg:gap-x-20 justify-center">
            <li
              className={getNavItemClasses("/")}
              onClick={() => handleNavClick("/")}
            >
              HOME
            </li>
            <li
              className={getNavItemClasses("/retail")}
              onClick={() => handleNavClick("/retail")}
            >
              RETAIL
            </li>
            <li
              className={getNavItemClasses("/solutions")}
              onClick={() => handleNavClick("/solutions")}
            >
              SOLUTIONS
            </li>
            <li
              className={getNavItemClasses("/wholesale")}
              onClick={() => handleNavClick("/wholesale")}
            >
              WHOLESALE
            </li>
            <li
              className={getNavItemClasses("/contact")}
              onClick={() => handleNavClick("/contact")}
            >
              CONTACT US
            </li>
            <li className="cursor-pointer group relative">
  <button
    className="w-full text-left flex justify-between items-center transition duration-300 rounded-md"
    onClick={toggleDropdown}
  >
    <span className="font-semibold text-gray-800">OUR PRODUCTS</span>
    <span className="text-gray-600 ml-3">
      {isDropdownOpen ? "▲" : "▼"}
    </span>
  </button>

{isDropdownOpen && (
  <ul
    className={`absolute bg-[#0096C7]/70 text-sm left-0 top-full transition-opacity duration-500  w-[250px] shadow-lg p-4 mt-2`}
    ref={dropdownRef}
  >
    <h2 className="text-lg font-bold text-white mb-3">
      Explore Our Range of Products
    </h2>
    {[
      { href: "/products/cctv/ip_cameras", label: "IP Cameras" },
      { href: "/products/cctv/hd_cameras", label: "HD Cameras" },
      { href: "/products/cctv/wifi_cameras", label: "WiFi Cameras" },
        { href: "/products/recorders/nvr", label: "Network Video Recorders (NVR)" },
        { href: "/products/recorders/dvr", label: "Digital Video Recorders (DVR)" },
        { href: "/products/door_devices/vdp", label: "Video Door Phones (VDP)" },
        { href: "/products/door_devices/door_locks", label: "Door Locks" },
        { href: "/products/accessories/smps", label: "Switch Mode Power Supplies (SMPS)" },
        { href: "/products/accessories/cables", label: "Cables" },
        { href: "/products/accessories/racks", label: "Racks" },
        { href: "/products/accessories/poe_switches", label: "POE Switches" },
        { href: "/products/accessories/routers", label: "Routers" },
        { href: "/products/accessories/biometrics", label: " Biometric Systems" },
        { href: "/retail", label: "All Accessories" },
    ].map((item, index) => (
      <li key={index} className="border-b last:border-b-0">
        <Link
          href={item.href}
          onClick={() => handleNavClick("/wholesale")}
          className="block py-2 text-white transition duration-300"
        >
          {item.label}
        </Link>
      </li>
    ))}
  </ul>
)}
</li>

          </ul>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden lg:hidden relative w-full h-16 border-b-2 border-textColor bg-white flex items-center justify-between">
        <div className="m-4" onClick={toggleSidebar}>
          {isSidebarOpen ? (
            ""
          ) : (
            <IoMenuSharp
              size={30}
              color="#03045E"
              className="cursor-pointer hover:text-textColor"
            />
          )}
        </div>
        <div>
          <img
            onClick={() => {
              router.push("/");
            }}
            src="/logo.png"
            alt="sas-technologiesLogo"
            className="h-14 m-6"
          />
        </div>
      </nav>

      {/* Sidebar for Mobile */}
      <div
        className={`md:hidden lg:hidden fixed inset-y-0 left-0 bg-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 w-3/4 sm:w-2/3 md:w-1/2 z-50`}
      >
        <div className="flex justify-end items-center p-4">
          <IoCloseSharp
            size={40}
            color="#03045E"
            className="cursor-pointer hover:text-textColor"
            onClick={toggleSidebar}
          />
        </div>

        <ul className="font-cocoRegular text-1xl text-textColor space-y-12 p-6">
          <li
            className={getNavItemClasses("/")}
            onClick={() => handleNavClick("/")}
          >
            HOME
          </li>
          <li className="relative group">
  <button 
    className="w-full text-left flex justify-between items-center  transition duration-300 rounded-md" 
    onClick={toggleDropdown}
  >
    <span className="font-semibold text-gray-800">OUR PRODUCTS</span>
    <span className="text-gray-600">{isDropdownOpen ? "▲" : "▼"}</span>
  </button>
  {isDropdownOpen && (
    <ul 
      className="absolute duration-500 bg-white text-sm left-0 w-full shadow-lg p-4 mt-2   border-gray-200 z-10 space-y-2 max-h-[500px] overflow-y-auto scrollbar-none scrollbar-thumb-gray-300 scrollbar-track-gray-100"
    >
      <h2 className="text-lg font-bold text-gray-700 mb-3">Explore Our Range of Products</h2>
      {[
        { href: "/products/cctv/ip_cameras", label: "IP Cameras" },
        { href: "/products/cctv/hd_cameras", label: "HD Cameras" },
        { href: "/products/cctv/wifi_cameras", label: "WiFi Cameras" },
          { href: "/products/recorders/nvr", label: "Network Video Recorders (NVR)" },
          { href: "/products/recorders/dvr", label: "Digital Video Recorders (DVR)" },
          { href: "/products/door_devices/vdp", label: "Video Door Phones (VDP)" },
          { href: "/products/door_devices/door_locks", label: "Door Locks" },
          { href: "/products/accessories/smps", label: "Switch Mode Power Supplies (SMPS)" },
          { href: "/products/accessories/cables", label: "Cables" },
          { href: "/products/accessories/poe_switches", label: "POE Switches" },

          { href: "/products/accessories/routers", label: "Routers" },
          { href: "/products/accessories/biometrics", label: " Biometric Systems" },
          { href: "/retail", label: "All Accessories" },
      ].map((item, index) => (
        <li key={index} className="border-b last:border-b-0">
          <Link 
            href={item.href} 
            onClick={() => handleNavClick(item.href)}
            className="block py-2 text-gray-700 hover:text-blue-500 transition duration-300"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )}
</li>


          <li className={getNavItemClasses("/retail")} onClick={() => handleNavClick("/retail")}>
            RETAIL
          </li>
          <li className={getNavItemClasses("/solutions")} onClick={() => handleNavClick("/solutions")}>
            SOLUTIONS
          </li>
          <li className={getNavItemClasses("/wholesale")} onClick={() => handleNavClick("/wholesale")}>
            WHOLESALE
          </li>
          <li className={getNavItemClasses("/contact")} onClick={() => handleNavClick("/contact")}>
            CONTACT US
          </li>

          {/* Add more mobile menu items */}
        </ul>
      </div>

      {/* Overlay when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="md:hidden lg:hidden fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}
