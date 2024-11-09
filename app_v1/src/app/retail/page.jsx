"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { useState } from "react";
import { useEffect } from "react";
import { FaFilter, FaMagnifyingGlass} from "react-icons/fa6";

import Products from "@/db/products.json";
import { MdClose } from "react-icons/md";

export default function Retail() {
  const [filterBar, setFilterBar] = useState(false);
  const [selectedType, setSelectedType] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [filteredProducts, setFilteredProducts] = useState(Products);

  const productTypes = ["CCTV", "Rack", "Connector", "Hard Drive"];
  const companies = ["CP Plus", "Hikvision", "Other Brands"];

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



  const applyFilters = () => {
    const filtered = Products.filter((product) => {
      const matchesType =
        selectedType.length === 0 || selectedType.includes(product.productType);
      const matchesCompany =
        selectedCompany.length === 0 ||
        selectedCompany.includes(product.company);
      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesType && matchesCompany && matchesPrice;
    });
    setFilteredProducts(filtered);
    setFilterBar(false); // Close filter sidebar after applying filters on mobile
  };


  useEffect(() => {
    if (filterBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup to reset scroll when component unmounts or sidebar closes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [filterBar]);

  return (
    <>
    <div className="relative min-h-screen flex flex-col">

      <div className="flex text-textColor font-mergeOne flex-1">
        {/* Filter Sidebar - Mobile Friendly */}
        <div
          className={`fixed  top-0 left-0 border-b-2 border z-40 h-scren h-screen  w-64 bg-white shadow-lg p-4 transform transition-transform duration-300 ease-in-out ${
            filterBar ? "translate-x-0" : "-translate-x-full"
          } lg:sticky lg:translate-x-0 lg:w-[380px]`}
        >
          <div className="flex justify-between items-center mb-4 lg:hidden">
            <h2 className="font-semibold text-1xl">Filter Products</h2>
            <MdClose
              size={24}
              onClick={() => setFilterBar(false)}
              className="cursor-pointer"
            />
          </div>
          
          {/* Product Type Filter */}
          <div className="mb-4">
            <h3 className="font-medium">Product Type</h3>
            {productTypes.map((type) => (
              <div key={type} className="flex items-center">
                <input
                  type="checkbox"
                  id={type}
                  value={type}
                  checked={selectedType.includes(type)}
                  onChange={() => toggleSelection(type, "type")}
                />
                <label htmlFor={type} className="ml-2">{type}</label>
              </div>
            ))}
          </div>

          {/* Company Filter */}
          <div className="mb-4">
            <h3 className="font-medium">Company</h3>
            {companies.map((company) => (
              <div key={company} className="flex items-center">
                <input
                  type="checkbox"
                  id={company}
                  value={company}
                  checked={selectedCompany.includes(company)}
                  onChange={() => toggleSelection(company, "company")}
                />
                <label htmlFor={company} className="ml-2">{company}</label>
              </div>
            ))}
          </div>

          {/* Price Range Filter */}
          <div className="mb-4">
            <h3 className="font-medium">Price Range</h3>
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
          </div>

          {/* Apply Filters Button */}
          <button
            onClick={applyFilters}
            className="bg-red-800 text-white px-4 py-2 rounded mt-4"
          >
            Apply Filters
          </button>
          <button
            onClick={applyFilters}
            className="bg-red-800 m-2 text-white px-4 py-2 rounded mt-4"
          >
          Clear Filters
          </button>
        </div>

        {/* Products Section */}
        <div className="flex-1 flex flex-col">
          <div className="justify-center flex md:flex-col items-center md:h-16 lg:h-20 h-12 w-full sticky top-0 bg-transparent z-20">
            <div className="md:m-3 flex justify-center items-center lg:hidden md:block h-12 w-12 bg-transparent">
              <FaFilter
                size={28}
                color="white"
                onClick={() => {
                  setFilterBar(!filterBar);
                }}
              />
            </div>
            <form className="m-6 justify-center flex items-center">
              <div className="bg-white lg:hidden w-60 md:hidden h-10 rounded flex justify-center items-center">
                <input
                  type="text"
                  placeholder="search products"
                  className="lg:block m-3 md:m-3 md:w-[700px] md:h-14 w-full rounded placeholder:text-sm outline-none focus:ring-0"
                  required
                  style={{ boxShadow: "none" }}
                />
                <button className="m-3">
                  <FaMagnifyingGlass />
                </button>
              </div>

              <div className="bg-white w-[700px] md:block lg:flex hidden items-center justify-evenly h-14 rounded">
                <input
                  type="text"
                  placeholder="search products"
                  className="hidden lg:block md:block md:w-[600px] md:h-14 p-2 rounded placeholder:text-sm outline-none focus:ring-0"
                  required
                  style={{ boxShadow: "none" }}
                />
                <button className="">
                  <FaMagnifyingGlass />
                </button>
              </div>
            </form>
          </div>

          <div className="flex-1 overflow-y-auto h-[80vh] flex justify-center items-center flex-wrap gap-6 p-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="flex-none w-[calc(50%-1.2rem)] sm:w-[calc(33.33%-1.5rem)] md:w-[calc(25%-1.5rem)] lg:w-[calc(25%-1.5rem)] bg-white shadow-md rounded-md overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full md:h-72 lg:h-72 h-36 object-cover"
                />
                <div className="md:p-4 p-1">
                  <h3 className="text-sm md:text-md font-semibold">
                    {product.productType}
                  </h3>
                  <p className="text-gray-600">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
    {filterBar && (
        <div
          className="md:hidden lg:hidden fixed inset-0 bg-black opacity-50 z-30" 
          // onClick={setFilterBar(!filterBar)}
        ></div>
      )}
    </>
  );
}
