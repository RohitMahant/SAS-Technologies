"use client";
import { useState, useEffect } from "react";
import { FaFilter, FaMagnifyingGlass } from "react-icons/fa6";
import { MdClose, MdOutlineNavigateNext } from "react-icons/md";
import Products from "@/db/products.json";
import { GrPrevious } from "react-icons/gr";

export default function Retail() {
  const [filterBar, setFilterBar] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [filteredProducts, setFilteredProducts] = useState(Products);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null); // For dialog box
  const [isProductVisible, setIsProductVisible] = useState(false); // To trigger animation
  const itemsPerPage = 8;

  const isMobile = () => /Mobi|Android/i.test(navigator.userAgent);
  const handleCall = () => {
    if (isMobile()) {
      window.location.href = `tel:${"9802012042"}`;
    } else {
      setShowDialog(true); // Show dialog for desktop users
    }
  };

  const closeDialog = () =>{setShowDialog(false)}

  const productTypes = [
    "CCTV",
    "DVR",
    "NVR",
    "Biometrics",
    "Cables",
    "Racks",
    "SMPS",
    "POE",
    "Hardrives",
    "Other",
  ];
  const companies = [
    "CP Plus",
    "Hikvision",
    "HawkVision",
    "WD Surveillance",
    "I-Range",
  ];

  const toggleSelection = (value, selectionType) => {
    const setSelection =
      selectionType === "type" ? setSelectedType : setSelectedCompany;
    const selected = selectionType === "type" ? selectedType : selectedCompany;

    if (selected.includes(value)) {
      setSelection(selected.filter((item) => item !== value));
    } else {
      setSelection([...selected, value]);
    }
  };

  useEffect(() => {
    if (filterBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [filterBar]);

  const applyFilters = () => {
    const filtered = Products.filter((product) => {
      const matchesType =
        selectedType.length === 0 ||
        selectedType.some((type) =>
          product.productType?.toLowerCase().includes(type.toLowerCase())
        );

      const matchesCompany =
        selectedCompany.length === 0 ||
        selectedCompany.some((company) =>
          product.company?.toLowerCase().includes(company.toLowerCase())
        );

      const productPrice = parseInt(product.price, 10);
      const matchesPrice =
        !isNaN(productPrice) &&
        productPrice >= priceRange[0] &&
        productPrice <= priceRange[1];

      const matchesSearch =
        searchTerm === "" ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesType && matchesCompany && matchesPrice && matchesSearch;
    });

    setFilteredProducts(filtered);
    setCurrentPage(1);
    setFilterBar(false);
  };

  const clearFilters = () => {
    setSelectedType([]);
    setSelectedCompany([]);
    setPriceRange([0, 1000]);
    setSearchTerm("");
    setFilteredProducts(Products);
    setCurrentPage(1);
    setFilterBar(false);
  };

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  // Handle Next Page
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsProductVisible(true); // Start animating the content
    }, 800); // 2 seconds delay
    return () => clearTimeout(timer);
  }, [filteredProducts]); // Ensure it runs when filtered products change

  return (
    <>
      <div className="relative min-h-screen flex flex-col">
        <div className="flex text-textColor font-sans flex-1">
          {/* Filter Sidebar */}
          <div
            className={`fixed top-0 left-0 z-40 h-screen w-72 bg-white shadow-lg p-4 transform transition-transform duration-300 ease-in-out ${
              filterBar ? "translate-x-0" : "-translate-x-full"
            } lg:sticky lg:translate-x-0 lg:w-[320px] xl:w-[300px]`}
          >
            {/* Sidebar Header */}
            <div className="flex justify-between items-center mb-4 lg:hidden">
              <h2 className="font-bold text-xl text-gray-800">
                Filter Products
              </h2>
              <MdClose
                size={24}
                onClick={() => setFilterBar(false)}
                className="cursor-pointer text-gray-600 hover:text-gray-800"
              />
            </div>

            {/* Product Type Filter */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                <FaFilter className="text-red-600" /> Product Type
              </h3>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {productTypes.map((type) => (
                  <label key={type} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value={type}
                      checked={selectedType.includes(type)}
                      onChange={() => toggleSelection(type, "type")}
                      className="accent-red-600"
                    />
                    <span className="text-sm text-gray-600">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Company Filter */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                <FaFilter className="text-red-600" /> Company
              </h3>
              <div className="mt-2">
                {companies.map((company) => (
                  <label key={company} className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      value={company}
                      checked={selectedCompany.includes(company)}
                      onChange={() => toggleSelection(company, "company")}
                      className="accent-red-600"
                    />
                    <span className="text-sm text-gray-600">{company}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                <FaFilter className="text-red-600" /> Price Range
              </h3>
              <div className="flex gap-2 items-center mt-2">
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) =>
                    setPriceRange([Number(e.target.value), priceRange[1]])
                  }
                  className="w-20 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-red-200"
                  placeholder="Min"
                />
                <span>-</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], Number(e.target.value)])
                  }
                  className="w-20 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-red-200"
                  placeholder="Max"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <button
                onClick={applyFilters}
                className="bg-red-600 text-white font-semibold py-2 px-4 rounded shadow hover:bg-red-700 transition"
              >
                Apply Filters
              </button>
              <button
                onClick={clearFilters}
                className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded shadow hover:bg-gray-400 transition"
              >
                Clear Filters
              </button>
            </div>
          </div>

          {/* Main Section */}
          <div className="flex-1 flex flex-col">
            <div className="p-4 flex items-center justify-center gap-3 bg-transparent">
              {/* Filter Icon */}

              <button
                onClick={() => setFilterBar(true)}
                className="flex md:hidden items-center gap-2 bg-transparent rounded-full text-white px-2 justify-center py-2"
              >
                <FaFilter size={20} className="text-textColor" />
              </button>
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
                  <button className="flex items-center justify-center  p-3 ml-5 rounded-full bg-red-700">
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
                  className={`flex-none md:h-96 h-52 w-[calc(50%-1.2rem)] sm:w-[calc(33.33%-1.5rem)] md:w-[calc(25%-1.5rem)] bg-white shadow-md border  overflow-hidden hover:shadow-lg transition-all duration-500 transform ${
                    isProductVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
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
            <div className="flex justify-center gap-4  m-6 mt-4">
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
                Page <span className="">{currentPage}</span> of{" "}
                <span className="font-serif">{totalPages}</span>
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
            <div />
            <div />

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
