import Header from "@/components/header";
import Carousel from "@/components/heroCarousel";
import ProductCards from "@/components/productCards";


export default function Home() {
  return (
       <div className="font-mergeOne">
         <Header/>
         <Carousel/>
         <div className="m-6">
          <h1 className="text-center text-3xl md:text-5xl text-white font-mergeOne">What we Offer</h1>
          <p className="text-center text-white md:text-2xl m-4">A wide range of CCTV Cameras , Cables and Connectors</p>
          <p className="text-center text-white md:text-2xl m-4">Biometric and Alarm Systems </p>

         </div>
         <ProductCards/>
         <div className="m-10 w-full md:flex justify-between">
            <div>
              <h1>Available at best Prices</h1>
              <h1>We have the best prices for products both in Retail and Wholesale</h1>
            </div>
            <div className=" bg-secondary">
              
            </div>
         </div>
       </div>
  );
}
