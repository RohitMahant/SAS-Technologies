"use client";
import { useState, useEffect } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdClose, MdOutlineNavigateNext } from "react-icons/md";
import Products from "@/db/products.json";
import { GrPrevious } from "react-icons/gr";

export default function HdCameras() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null); // For dialog box
  const itemsPerPage = 8;

  // Filter products to show only "CCTV" with "HD" camera type
  const filteredProducts = Products.filter(
    (product) =>
      product.productType === "Accessories" && product.accessoryType?.includes('Rack')
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
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
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
                  className="flex-none md:h-96 w-[calc(50%-1.2rem)] sm:w-[calc(33.33%-1.5rem)] md:w-[calc(25%-1.5rem)] bg-white shadow-md border overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
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
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
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
                    src={selectedProduct.img}
                    alt={selectedProduct.name}
                    className="w-full h-64 object-contain mb-4"
                  />
                  <p className="text-gray-600">{selectedProduct.Description}</p>
                  <p className="font-semibold text-red-800">
                    Price: Rs {selectedProduct.Price}
                  </p>
                  <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                    Contact
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
