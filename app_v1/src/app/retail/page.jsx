"use client";
import { useState, useEffect } from "react";
import { FaFilter, FaMagnifyingGlass } from "react-icons/fa6";
import { MdClose, MdOutlineNavigateNext, MdSkipPrevious } from "react-icons/md";
import Products from "@/db/products.json";
import { GrPrevious } from "react-icons/gr";

export default function Retail() {
  const [filterBar, setFilterBar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [filteredProducts, setFilteredProducts] = useState(Products);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const productTypes = ["CCTV", "IP", "HD", "DOME", "BULLET", "NVR", "AUDIO"];
  const companies = ["CP Plus", "Hikvision", "NEC", "SYNTEL", "I-Range"];

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
          product.category?.toLowerCase().includes(type.toLowerCase())
        );

      const matchesCompany =
        selectedCompany.length === 0 ||
        selectedCompany.some((company) =>
          product.product_name?.toLowerCase().includes(company.toLowerCase())
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

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <div className="relative min-h-screen flex flex-col">
        <div className="flex text-textColor font-mergeOne flex-1">
          {/* Filter Sidebar */}
          <div
            className={`fixed top-0 left-0 z-40 h-screen w-72 bg-white shadow-lg p-4 transform transition-transform duration-300 ease-in-out ${
              filterBar ? "translate-x-0" : "-translate-x-full"
            } lg:sticky lg:translate-x-0 lg:w-[380px]`}
          >
            {/* Sidebar Content */}
            <div className="flex justify-between items-center mb-4 lg:hidden">
              <h2 className="font-semibold text-1xl">Filter Products</h2>
              <MdClose
                size={24}
                onClick={() => setFilterBar(false)}
                className="cursor-pointer"
              />
            </div>
            {/* Filters */}
            <h3 className="font-sans font-bold text-[25px]">Product Type</h3>
            <hr />
            <div className="mt-4 grid grid-cols-2 mb-4">
              {productTypes.map((type) => (
                <div key={type} className="flex items-center">
                  <input
                    type="checkbox"
                    id={type}
                    value={type}
                    checked={selectedType.includes(type)}
                    onChange={() => toggleSelection(type, "type")}
                  />
                  <label htmlFor={type} className="ml-3 text-sm">
                    {type}
                  </label>
                </div>
              ))}
            </div>
            <hr />
            <h3 className="font-sans font-bold text-[25px] mt-4">Company</h3>
            <div className="mb-4">
              {companies.map((company) => (
                <div key={company} className="flex items-center">
                  <input
                    type="checkbox"
                    id={company}
                    value={company}
                    checked={selectedCompany.includes(company)}
                    onChange={() => toggleSelection(company, "company")}
                  />
                  <label htmlFor={company} className="ml-2">
                    {company}
                  </label>
                </div>
              ))}
            </div>
            <h3 className="font-sans font-bold text-[25px] mt-4">Price Range</h3>
            <div className="flex gap-2 items-center">
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([Number(e.target.value), priceRange[1]])
                }
                className="w-20 p-1 border rounded"
                placeholder="Min"
              />
              <span>-</span>
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], Number(e.target.value)])
                }
                className="w-20 p-1 border rounded"
                placeholder="Max"
              />
            </div>
            <button
              onClick={applyFilters}
              className="bg-red-800 text-white w-64 h-12 rounded mt-4 hover:bg-red-900"
            >
              Apply Filters
            </button>
            <button
              onClick={clearFilters}
              className="bg-red-800 w-64 h-12 hover:bg-red-900 text-white rounded mt-4"
            >
              Clear Filters
            </button>
          </div>

          {/* Main Section */}
          <div className="flex-1 flex flex-col">
            <div className="p-4 flex items-center  gap-3 bg-transparent">
              {/* Filter Icon */}

              <button
                onClick={() => setFilterBar(true)}
                className="flex md:hidden items-center gap-2 bg-transparent rounded-full text-white px-2 justify-center py-2  hover:bg-red-900"
              >
                <FaFilter size={20} className="text-textColor" />
          
              </button>
              {/* Search Bar */}
              <form className="relative flex md:justify-center">
              <div className="flex ">
               
                <input
                  type="text"
                  placeholder="Search Products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="md:w-96 w-56 pl-3 pr-4 py-2 border rounded focus:outline-none "
                />
                 <FaMagnifyingGlass className="relative top-3 left-3 text-gray-500" />
              </div>
              </form>
            </div>

            {/* Products */}
            <div className="flex-1 overflow-y-auto h-[80vh] flex justify-center flex-wrap gap-6 p-6">
              {paginatedProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex-none md:h-96 w-[calc(50%-1.2rem)] sm:w-[calc(33.33%-1.5rem)] md:w-[calc(25%-1.5rem)] bg-white shadow-md border overflow-hidden"
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full md:h-72 lg:h-72 h-32 object-contain"
                  />
                  <div className="md:p-4 p-1 text-primary bg-[#0096C7]/70">
                    <h3 className="text-[12px] md:text-md font-semibold">
                      {product.name}
                    </h3>
                    <p className="font-serif">Rs {product.Price}</p>
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
                <GrPrevious/>
              </button>
              <span className="self-center font-cocoRegular">
                Page <span className="font-serif">{currentPage}</span> of <span className="font-serif">{totalPages}</span>
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded ${
                  currentPage === totalPages
                    ? "bg-gray-300 text-gray-500"
                    : " text-black hover:bg-red-900"
                }`}
              >
                <MdOutlineNavigateNext />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
