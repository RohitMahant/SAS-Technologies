"use client";

import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname(); // Get the current pathname

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleNavClick = (path) => {
    setIsSidebarOpen(false);
    router.push(path); // Navigate programmatically
  };

  const getNavItemClasses = (path) =>
    `cursor-pointer ${
      pathname === path ? "font-cocoBold text-red-800" : "hover:text-textColor"
    }`;

  // Disable scrolling when sidebar is open
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
      {/* Desktop Navbar */}
      <nav className="hidden w-full lg:flex sticky z-10 bg-white md:h-16 lg:h-20 items-center justify-center md:gap-x-12 lg:gap-x-16 md:flex">
        <div>
          <img src="logo.png" alt="sas-technologiesLogo" className="md:h-14 lg:h-20" />
        </div>
        <div>
          <ul className="flex font-cocoRegular md:text-[18px] lg:text-1xl md:gap-x-16 lg:gap-x-20 justify-center">
            <li className={getNavItemClasses("/")} onClick={() => handleNavClick("/")}>
              HOME
            </li>
            <li className={getNavItemClasses("/retail")} onClick={() => handleNavClick("/retail")}>
              RETAIL
            </li>
            <li className={getNavItemClasses("/blogs")} onClick={() => handleNavClick("/blogs")}>
              BLOGS
            </li>
            <li className={getNavItemClasses("/wholesale")} onClick={() => handleNavClick("/wholesale")}>
              WHOLESALE
            </li>
            <li className={getNavItemClasses("/contact")} onClick={() => handleNavClick("/contact")}>
              CONTACT US
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden lg:hidden relative w-full h-16 border-b-2 border-textColor bg-white flex items-center justify-between">
        <div className="m-4" onClick={toggleSidebar}>
          {isSidebarOpen ? "" : <IoMenuSharp size={30} color="#03045E" className="cursor-pointer hover:text-textColor" />}
        </div>
        <div>
          <img src="logo.png" alt="sas-technologiesLogo" className="h-14 m-6" />
        </div>
      </nav>

      {/* Sidebar for Mobile */}
      <div
        className={`md:hidden lg:hidden fixed inset-y-0 left-0 bg-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 w-3/4 sm:w-2/3 md:w-1/2 z-50`}
      >
        <div className="flex justify-end items-center p-4">
          <IoCloseSharp size={40} color="#03045E" className="cursor-pointer hover:text-textColor" onClick={toggleSidebar} />
        </div>

        <ul className="font-cocoRegular text-1xl text-textColor space-y-12 p-6">
          <li className={getNavItemClasses("/")} onClick={() => handleNavClick("/")}>
            HOME
          </li>
          <li className={getNavItemClasses("/retail")} onClick={() => handleNavClick("/retail")}>
            RETAIL
          </li>
          <li className={getNavItemClasses("/blogs")} onClick={() => handleNavClick("/blogs")}>
            BLOGS
          </li>
          <li className={getNavItemClasses("/wholesale")} onClick={() => handleNavClick("/wholesale")}>
            WHOLESALE
          </li>
          <li className={getNavItemClasses("/contact")} onClick={() => handleNavClick("/contact")}>
            CONTACT US
          </li>

          {/* Dropdown for Products */}
          <li className="relative">
            <button className="w-full text-left flex justify-between items-center" onClick={toggleDropdown}>
              <span className="font-bold">PRODUCTS</span>
              <span>{isDropdownOpen ? "▲" : "▼"}</span>
            </button>
            {isDropdownOpen && (
              <ul className="absolute text-sm left-0 w-full shadow-lg p-4 space-y-2">
                <li><Link href="/ip-cameras">IP Cameras</Link></li>
                <li><Link href="/hd-cameras">HD Cameras</Link></li>
                <li><Link href="/nvr">NVR</Link></li>
                <li><Link href="/dvr">DVR</Link></li>
                <li><Link href="/hard-drives">Hard Drives</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      {/* Overlay when sidebar is open */}
      {isSidebarOpen && <div className="md:hidden lg:hidden fixed inset-0 bg-black opacity-50 z-40" onClick={toggleSidebar}></div>}
    </>
  );
}
