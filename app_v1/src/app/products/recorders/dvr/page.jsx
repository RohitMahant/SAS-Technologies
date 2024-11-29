"use client";
import { useState, useEffect } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdClose, MdOutlineNavigateNext } from "react-icons/md";
import Products from "@/db/products.json";
import { GrPrevious } from "react-icons/gr";

export default function DVR() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null); // For dialog box
  const itemsPerPage = 8;

  const [showDialog,setShowDialog] = useState(false)

  const isMobile = () => /Mobi|Android/i.test(navigator.userAgent);
  const handleCall = () => {
    if (isMobile()) {
      window.location.href = `tel:${ "9802012042"}`;
      setShowDialog(false)
    } else {
      setShowDialog(true); // Show dialog for desktop users
    }
  };

  const closeDialog = () =>{setShowDialog(false)}

  // Filter products to show only "CCTV" with "HD" camera type
  const filteredProducts = Products.filter(
    (product) =>
      product.productType === "DVR"
  );

  // Search functionality
  const searchedProducts = filteredProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(searchedProducts.length / itemsPerPage);
  const paginatedProducts = searchedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      // Smooth scroll to the top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Handle Previous Page
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      // Smooth scroll to the top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="relative min-h-screen flex flex-col">
        <div className="flex text-textColor font-sans flex-1">
          {/* Main Section */}
          <div className="flex-1 flex flex-col">
            <div className="p-4 flex items-center justify-center gap-3 bg-transparent">
              {/* Search Bar */}
              <form className="relative lg:ml-5 flex md:justify-center">
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Search Products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="md:w-96 w-56 pl-3 pr-4 py-2 border rounded focus:outline-none "
                  />
                  <button className="flex items-center justify-center p-3 ml-5 rounded-full bg-red-700">
                    <FaMagnifyingGlass className="relative text-white" />
                  </button>
                </div>
              </form>
            </div>

            {/* Products */}
            <div className="flex-1 overflow-y-auto h-[80vh] flex justify-center flex-wrap gap-6 p-6">
              {paginatedProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex-none md:h-96 h-52 w-[calc(50%-1.2rem)] sm:w-[calc(33.33%-1.5rem)] md:w-[calc(25%-1.5rem)] bg-white shadow-md border overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelectedProduct(product)} // Open dialog
                >
                  <img
                    src={`/${product.img}`}
                    alt={product.name}
                    className="w-full md:h-72 transition-all duration-500 hover:lg:h-72 lg:h-64 h-28 p-2 object-contain"
                  />
                  <div className="md:p-4 p-1 text-gray-600 text-center">
                    <h3 className="md:text-[18px] text-[12px] font-semibold">
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
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-4 m-6 mt-4">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded ${
                  currentPage === 1
                    ? " text-black"
                    : " text-red-800 hover:bg-red-900"
                }`}
              >
                <GrPrevious />
              </button>
              <span className="self-center font-sans">
                Page <span>{currentPage}</span> of <span>{totalPages}</span>
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded ${
                  currentPage === totalPages
                    ? "bg-gray-300 text-gray-500"
                    : " text-black "
                }`}
              >
                <MdOutlineNavigateNext />
              </button>
            </div>

           {/* Dialog Box */}
           {selectedProduct && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40">
                <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-1/2">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">
                      {selectedProduct.name}
                    </h2>
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
          <ul className="list-disc pl-5 space-y-1">
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
                    Get best Price
                  </button>
                </div>
                {showDialog && (
                  <div className="fixed inset-0 flex items-center justify-center z-50 ">
                    <div className="bg-[#0096C7]/80 text-white rounded-lg p-4 shadow-md w-full max-w-xs text-center opacity-100 scale-100 transition-all duration-300 transform">
                      <p className="text-sm font-medium">Want to call us ?</p>
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
        </div>
      </div>
    </>
  );
}
