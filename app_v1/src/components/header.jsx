"use client"

import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("HOME");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNavClick = (page) => {
    setActivePage(page);
    setIsSidebarOpen(false); // Close sidebar when a page is selected
  };

  const getNavItemClasses = (page) =>
    `cursor-pointer ${activePage === page ? "border-b-4 border-textColor text-textColor" : "hover:text-textColor"}`;

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden top-0 lg:flex sticky z-10 bg-secondary w-full md:h-16 lg:h-20 items-center justify-center md:gap-x-12 lg:gap-x-16 border-b-2 border-textColor md:flex">
        <div>
          <img src="logo.png" alt="sas-technologiesLogo" className="md:h-14 lg:h-20" />
        </div>
        <div>
          <ul className="flex font-mergeOne md:text-[24px] lg:text-3xl md:gap-x-16 lg:gap-x-20">
            <li className={getNavItemClasses("HOME")} onClick={() => handleNavClick("HOME")}>HOME</li>
            <li className={getNavItemClasses("RETAIL")} onClick={() => handleNavClick("RETAIL")}>RETAIL</li>
            <li className={getNavItemClasses("WHOLESALE")} onClick={() => handleNavClick("WHOLESALE")}>WHOLESALE</li>
            <li className={getNavItemClasses("CONTACT US")} onClick={() => handleNavClick("CONTACT US")}>CONTACT US</li>
          </ul>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden lg:hidden relative w-full h-16 border-b-2  border-textColor bg-secondary flex items-center justify-between">
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
        className={`md:hidden lg:hidden fixed inset-y-0 right-0 bg-secondary transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 w-3/4 sm:w-2/3 md:w-1/2 z-50`}
      >
        <div className="flex justify-end items-center p-4 ">
          <IoCloseSharp size={40} color="#03045E" className="cursor-pointer hover:text-textColor" onClick={toggleSidebar} />
        </div>
        <ul className="font-mergeOne text-2xl text-textColor space-y-16 p-6">
          <li className={getNavItemClasses("HOME")} onClick={() => handleNavClick("HOME")}>HOME</li>
          <li className={getNavItemClasses("RETAIL")} onClick={() => handleNavClick("RETAIL")}>RETAIL</li>
          <li className={getNavItemClasses("WHOLESALE")} onClick={() => handleNavClick("WHOLESALE")}>WHOLESALE</li>
          <li className={getNavItemClasses("CONTACT US")} onClick={() => handleNavClick("CONTACT US")}>CONTACT US</li>
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
