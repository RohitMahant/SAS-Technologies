"use client";
import Header from "@/components/header";
import Carousel from "@/components/heroCarousel";
import ProductCards from "@/components/productCards";
import Footer from "@/components/footer";
import ReviewCards from "@/components/reviewCards";
import { IoIosCall, IoIosMail } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="font-cocoRegular">
      <Carousel />
      <div className="mt-12 m-4 md:mt-56">
        <h1 className="text-center text-gray-800 text-3xl md:text-5xl  font-cocoBold">
          Explore What We Offer
        </h1>
        <p className="text-center  md:text-2xl m-4">
          Discover a comprehensive range of cutting-edge CCTV cameras, premium
          quality cables, and durable connectors designed to enhance your
          security system.
        </p>
        <p className="text-center  md:text-2xl m-4">
          Equip your premises with advanced biometric systems and reliable alarm
          systems for a seamless blend of safety and convenience.
        </p>
      </div>
      <ProductCards />
      <br className="hidden md:block" />
      <h1 className="text-center font-cocoBold md:mt-44 mt-16 md:text-3xl m-4">
        Your One-Stop Shop for Accessories
      </h1>
      <p className="text-center md:text-2xl m-4">
        From racks and hard drives to all essential tools and accessories, we
        have everything you need to complete your setup.
      </p>
      <br className="hidden md:block" />
      <ProductCards />
      <div className="w-full h-full   justify-center items-center md:mt-44 mt-24 lg:gap-x-20">
        <div className="justify-center items-center mt-16">
          <h1 className="text-center font-cocoBold  text-2xl md:text-5xl">
            Affordable Prices, Unbeatable Value
          </h1>
          <h1 className="text-center font-cocoRegular  md:text-3xl m-2 md:m-6">
            Shop with confidence knowing we offer competitive prices
          </h1>
          <h1 className="text-center font-cocoRegular  md:text-3xl">
            for both retail and wholesale buyers.
          </h1>
          <div className="w-full flex justify-center mt-4">
            <button
              onClick={() => router.push("/wholesale")}
              className="mt-auto py-2 px-4 transition-all duration-500 bg-white  border text-gray-700  rounded font-cocoRegular3 hover:bg-primary hover:text-gray-700"
            >
              <span>View Wholesale </span>
            </button>
            
          </div>

          <div className="mt-4 items-center justify-center">
            <div className="w-full md:flex justify-center">
              <div className="md:h-36  h-24 w-72 md:w-96 lg:w-[650px] lg:h-40 md:m-4 ml-[35px] bg-tertiary">
                <img
                  src="prices_card1.png"
                  alt="prices_card1"
                  className="h-full"
                />
              </div>
            </div>
            <div className="w-full md:flex justify-center">
              <div className="md:h-36 h-24 w-72 md:w-96 lg:w-[650px] lg:h-40 md:m-4 ml-[35px] mt-2 bg-tertiary">
                <img
                  src="prices_card2.png"
                  alt="prices_card2"
                  className="h-full"
                />
              </div>
            </div>
            <div className="md:flex justify-center w-full">
              <div className="md:h-36 h-24 w-72 md:w-96 lg:w-[650px] lg:h-40 md:m-4 ml-[35px] mt-2 bg-tertiary">
                <img
                  src="prices_card3.png"
                  alt="prices_card3"
                  className="h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* New Section: Exclusive Brands */}
        {/* New Section: Exclusive Brands */}
        <div className="w-full p-6 text-center mt-36">
          <h1 className="text-2xl md:text-5xl font-cocoBold">
            Exclusive Brands with Quality Products
          </h1>
          <p className="text-lg md:text-2xl mt-4 text-center">
            We take pride in offering a curated selection of products from
            industry-leading brands renowned for their exceptional durability,
            unmatched reliability, and superior quality. Each product is
            meticulously crafted to meet the highest standards, ensuring
            long-lasting performance and delivering unparalleled value to our
            customers.
          </p>
          {/* Infinite Logo Strip */}
          <div className="relative overflow-hidden mt-24">
            <div className="flex gap-12 animate-infinite-scroll">
              <img
                src="cp-plus.png"
                alt="CP Plus Logo"
                className="h-44 md:h-72 transition-transform duration-300 hover:scale-110"
              />
              <img
                src="Hikvision.svg"
                alt="Hikvision Logo"
                className="h-44 md:h-72 transition-transform duration-300 hover:scale-110"
              />
              {/* <img
              src="/logos/irange.png"
              alt="IRange Logo"
              className="h-12 md:h-20 transition-transform duration-300 hover:scale-110"
            /> */}
              <img
                src="dahua.png"
                alt="dahua Logo"
                className="h-44 md:h-72 transition-transform duration-300 hover:scale-110"
              />
              {/* <img
              src="/logos/brand5.png"
              alt="Brand 5 Logo"
              className="h-12 md:h-20 transition-transform duration-300 hover:scale-110"
            /> */}
              {/* Repeat logos for seamless scroll */}
              <img
                src="cp-plus.png"
                alt="CP Plus Logo"
                className="h-44 md:h-72 transition-transform duration-300 hover:scale-110"
              />
              <img
                src="Hikvision.svg"
                alt="Hikvision Logo"
                className="h-44 md:h-72 transition-transform duration-300 hover:scale-110"
              />
              {/* <img
              src="/logos/irange.png"
              alt="IRange Logo"
              className="h-12 md:h-20 transition-transform duration-300 hover:scale-110"
            /> */}
              <img
                src="dahua.png"
                alt="dahua Logo"
                className="h-44 md:h-72 transition-transform duration-300 hover:scale-110"
              />
              {/* <img
              src="/logos/brand5.png"
              alt="Brand 5 Logo"
              className="h-12 md:h-20 transition-transform duration-300 hover:scale-110"
            /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="md:mt-20"> 
        <h1 className="text-center text-gray-800 text-3xl md:text-5xl  font-cocoBold">
          ABOUT US
        </h1>
      </div>
      <div>
        <div className=" mt-12 m-6 ">
          <div className="w-full flex justify-center">
            <img src="logo.png" alt="logo" className="" />
          </div>
          <h1 className="text-center text-2xl md:text-5xl  font-cocoBold">
            Your Satisfaction, Our Mission
          </h1>
          <h1 className="text-center text-1xl md:text-4xl mt-12 font-cocoBold">
            Been in the business since{" "}
            <span className="font-bold font-serif text-2xl">2001</span>
          </h1>
          <p className="text-center  md:text-2xl m-4">
            Proudly serving our customers with over
            <span className="font-serif m-2 text-2xl font-bold">15000+</span>
            products sold till date!
          </p>
          <p className="text-center  md:text-2xl m-4">
            Join our growing family of a
            <span className="font-serif m-2 text-2xl font-bold">1000+</span>
            satisfied customers who trust us for their security needs.
          </p>
        </div>
      </div>
      <ReviewCards />
      <div className="relative bg-gradient-to-r from-violet-200 via-gray-400 to-primary p-10 md:mt-20 m-6 md:m-14 rounded-lg shadow-lg">
  <h1 className="text-center text-2xl md:text-5xl font-cocoBold text-white leading-tight">
    Got Questions? <br /> We’re Here to Help
  </h1>
  <div className="flex justify-center mt-8">
    <button className="flex items-center justify-center w-48 h-12 rounded-md bg-white text-green-600 font-semibold shadow-md hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-105 gap-x-2">
      Contact Us
    </button>
  </div>
</div>
      <div className="md:hidden fixed bottom-4 right-4 z-50">
        <button
          onClick={() => (window.location.href = "tel:+1234567890")}
          className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300"
        >
          <IoIosCall size={30} color="white" />
        </button>
        <button
          onClick={() => (window.location.href = "tel:+1234567890")}
          className="w-14 h-14 rounded-full bg-red-800 flex mt-2 items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300"
        >
          <IoIosMail size={30} color="white" />
        </button>
      </div>
    </div>
  );
}
