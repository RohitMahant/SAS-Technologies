"use client";

import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("HOME");
  const router = useRouter();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNavClick = (page, path) => {
    setActivePage(page);
    setIsSidebarOpen(false);
    router.push(path); // Programmatic navigation
  };

  // Set active page based on current route
  useEffect(() => {
    const pathToPage = {
      "/": "HOME",
      "/contact": "CONTACT US",
    };
    setActivePage(pathToPage[router.pathname] || "HOME");
  }, [router.pathname]);

  const getNavItemClasses = (page) =>
    `cursor-pointer ${activePage === page ? "border-b-4 border-red-800 text-red-800" : "hover:text-textColor"}`;

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
      <nav className="hidden  lg:flex sticky z-10 bg-white  md:h-16 lg:h-20 items-center justify-center md:gap-x-12 lg:gap-x-16  md:flex">
        <div>
          <img src="logo.png" alt="sas-technologiesLogo" className="md:h-14 lg:h-20" />
        </div>
        <div>
          <ul className="flex font-mergeOne md:text-[26px] lg:text-2xl md:gap-x-16 lg:gap-x-20 justify-center">
            <li className={getNavItemClasses("HOME")} onClick={() => handleNavClick("HOME", "/")}><Link href="/">HOME</Link></li>
            <li className={getNavItemClasses("RETAIL")} onClick={() => handleNavClick("RETAIL", "/retail")}>RETAIL</li>
            <li className={getNavItemClasses("WHOLESALE")} onClick={() => handleNavClick("WHOLESALE", "/wholesale")}><Link href="/wholesale">WHOLESALE</Link></li>
            <li className={getNavItemClasses("CONTACT US")} onClick={() => handleNavClick("CONTACT US", "/contact")}><Link href="/contact">CONTACT US</Link></li>
          </ul>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden lg:hidden relative w-full h-16 border-b-2  border-textColor bg-white flex items-center justify-between">
        <div>
          <img src="logo.png" alt="sas-technologiesLogo" className="h-14 m-6" />
        </div>
        <div className="m-4" onClick={toggleSidebar}>
          {isSidebarOpen ? (
            ""
          ) : (
            <IoMenuSharp size={40} color="#03045E" className="cursor-pointer hover:text-textColor" />
          )}
        </div>
      </nav>

      {/* Sidebar for Mobile (Right Side) */}
      <div
        className={`md:hidden lg:hidden fixed inset-y-0 right-0 bg-white transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 w-3/4 sm:w-2/3 md:w-1/2 z-50`}
      >
        <div className="flex justify-end items-center p-4 ">
          <IoCloseSharp size={40} color="#03045E" className="cursor-pointer hover:text-textColor" onClick={toggleSidebar} />
        </div>
        <ul className="font-mergeOne text-center text-2xl text-textColor space-y-16 p-6">
          <li className={getNavItemClasses("HOME")} onClick={() => handleNavClick("HOME", "/")}><Link href="/">HOME</Link></li>
          <li className={getNavItemClasses("RETAIL")} onClick={() => handleNavClick("RETAIL", "/retail")}><Link href="/retail">RETAIL</Link></li>
          <li className={getNavItemClasses("WHOLESALE")} onClick={() => handleNavClick("WHOLESALE", "/wholesale")}><Link href="/wholesale">WHOLESALE</Link></li>
          <li className={getNavItemClasses("CONTACT US")} onClick={() => handleNavClick("CONTACT US", "/contact")}><Link href="/contact">CONTACT US</Link></li>
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
