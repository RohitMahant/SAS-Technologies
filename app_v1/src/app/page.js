import Header from "@/components/header";
import Carousel from "@/components/heroCarousel";
import ProductCards from "@/components/productCards";
import Footer from "@/components/footer";
import ReviewCards from "@/components/reviewCards";
import { IoIosCall } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="font-mergeOne">
      <Carousel />
      <div className="mt-12 m-6 md:mt-56">
        <h1 className="text-center text-3xl md:text-5xl text-white font-mergeOne">
          Explore What We Offer
        </h1>
        <p className="text-center text-white md:text-2xl m-4">
          Discover a comprehensive range of cutting-edge CCTV cameras, premium quality cables, and durable connectors designed to enhance your security system.
        </p>
        <p className="text-center text-white md:text-2xl m-4">
          Equip your premises with advanced biometric systems and reliable alarm systems for a seamless blend of safety and convenience.
        </p>
      </div>
      <ProductCards />
      <br className="hidden md:block" />
      <h1 className="text-center text-white md:mt-44 mt-24 md:text-2xl m-4">
        Your One-Stop Shop for Accessories
      </h1>
      <p className="text-center text-white md:text-lg m-4">
        From racks and hard drives to all essential tools and accessories, we have everything you need to complete your setup.
      </p>
      <br className="hidden md:block" />
      <ProductCards />
      <div className="w-full h-full md:flex justify-center items-center md:mt-44 mt-24 lg:gap-x-20">
        <div className="justify-center items-center mt-16">
          <h1 className="text-center font-mergeOne text-white text-2xl md:text-5xl">
            Affordable Prices, Unbeatable Value
          </h1>
          <h1 className="text-center font-mergeOne text-white md:text-3xl m-2 md:m-6">
            Shop with confidence knowing we offer competitive prices 
          </h1>
          <h1 className="text-center font-mergeOne text-white md:text-3xl">
            for both retail and wholesale buyers.
          </h1>
        </div>
        <div className="mt-4 items-center justify-center">
          <div className="md:h-36 h-24 w-72 md:w-96 lg:w-[650px] lg:h-40 md:m-4 ml-[35px] bg-tertiary">
            <img src="prices_card1.png" alt="prices_card1" className="h-full"/>
          </div>
          <div className="md:h-36 h-24 w-72 md:w-96 lg:w-[650px] lg:h-40 md:m-4 ml-[35px] mt-2 bg-tertiary">
          <img src="prices_card2.png" alt="prices_card2" className="h-full"/>
          </div>
          <div className="md:h-36 h-24 w-72 md:w-96 lg:w-[650px] lg:h-40 md:m-4 ml-[35px] mt-2 bg-tertiary">
          <img src="prices_card3.png" alt="prices_card3" className="h-full"/>
          </div>
        </div>
      </div>
      <div>
        <div className="md:mt-56 mt-24 m-6">
          <h1 className="text-center text-2xl md:text-5xl text-white font-mergeOne">
            Your Satisfaction, Our Mission
          </h1>
          <p className="text-center text-white md:text-2xl m-4">
            Proudly serving our customers with over 200+ products sold this year alone!
          </p>
          <p className="text-center text-white md:text-2xl m-4">
            Join our growing family of 2,000+ satisfied customers who trust us for their security needs.
          </p>
        </div>
      </div>
      <ReviewCards />
      <div className="md:mt-20 m-6 md:m-14">
        <h1 className="text-center text-2xl md:text-5xl text-white font-mergeOne">
          Got Questions? We’re Here to Help
        </h1>
        <div className="justify-center items-center w-full md:flex mt-6">
          <button className="flex w-40 ml-[70px] h-10 justify-center text-white rounded-md bg-red-800 items-center gap-x-2">
            <IoIosCall size={25} color="white" className="" /> Give us a call
          </button>
          <br />
          <button className="flex justify-center ml-[70px] text-white items-center w-40 h-10 rounded-md gap-x-2 bg-red-800 ">
            <FaMessage size={20} color="white" /> Message us
          </button>
        </div>
      </div>
    </div>
  );
}
