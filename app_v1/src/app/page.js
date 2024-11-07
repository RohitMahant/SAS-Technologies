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
      <Header />
      <Carousel />
      <div className="m-6">
        <h1 className="text-center text-3xl md:text-5xl text-white font-mergeOne">
          What we Offer
        </h1>
        <p className="text-center text-white md:text-2xl m-4">
          A wide range of CCTV Cameras , Cables and Connectors
        </p>
        <p className="text-center text-white md:text-2xl m-4">
          Biometric and Alarm Systems{" "}
        </p>
      </div>
      <ProductCards />
      <br className="hidden md:block" />
      <h1 className="text-center text-white md:text-2xl m-4">Find all accessories here </h1>
      <br className="hidden md:block" />
      <ProductCards />
      <div className="w-full h-full md:flex justify-center items-center md:mt-20 mt-12 lg:gap-x-20">
        <div className="justify-center items-center">
          <h1 className="text-center font-mergeOne text-white text-2xl md:text-5xl">
            Available at best Prices
          </h1>
          <h1 className="text-center font-mergeOne text-white md:text-3xl m-2 md:m-6">
            We have the best prices for products 
          </h1>
          <h1 className="text-center font-mergeOne text-white md:text-3xl">
             both in Retail and Wholesale
          </h1>
        </div>
        <div className="mt-4">
          <div className="md:h-36 h-24 w-72 md:w-96 lg:w-[650px] lg:h-40 md:m-4 ml-[35px]  bg-tertiary"></div>
          <div className="md:h-36 h-24 w-72 md:w-96 lg:w-[650px] lg:h-40 md:m-4 ml-[35px] mt-2 bg-tertiary"></div>
          <div className="md:h-36 h-24 w-72 md:w-96 lg:w-[650px] lg:h-40 md:m-4 ml-[35px] mt-2 bg-tertiary"></div>
        </div>
      </div>
      <div>
      <div className="md:mt-20 m-6">
        <h1 className="text-center text-2xl md:text-5xl text-white font-mergeOne">
          Customer Satisfaction is our Goal
        </h1>
        <p className="text-center text-white md:text-2xl m-4">
          Over 200+ Products sold this year
        </p>
        <p className="text-center text-white md:text-2xl m-4">
          More than 2000 Satisfied customers 
        </p>
      </div>
      </div>
      <ReviewCards/>
      <div className="md:mt-20 m-6">
        <h1 className="text-center text-2xl md:text-5xl text-white font-mergeOne">
          Have a query ?
        </h1>
        <div className="justify-center items-center  mt-6">
        <button className="flex w-40  ml-[70px] h-10 justify-center text-white rounded-md bg-red-800  items-center gap-x-2">
          <IoIosCall size={25} color="white" className=""/>  Give us a call
        </button>
        <br/>
        <button className="flex justify-center ml-[70px] text-white  items-center w-40  h-10 rounded-md bg-red-800 gap-x-2">
          <FaMessage size={20} color="white"/> Send a message
        </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
