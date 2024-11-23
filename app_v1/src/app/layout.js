import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react"


const mergeOne = localFont({
  src: "./fonts/MergeOne-Regular.woff",
  variable: "--font-merge-one",
  weight: "100 900",
});

const cocoBold = localFont({
  src: "./fonts/Coco-Gothic-Bold-trial.ttf",
  variable: "--font-coco-bold",
  weight: "100 900",
});

const cocoRegular = localFont({
  src: "./fonts/Coco-Gothic-Regular-trial.ttf",
  variable: "--font-coco-regular",
  weight: "100 900",
});

export const metadata = {
  title: "SAS Technologies - CCTV Camera & Security Solutions in Gurgaon",
  description: "SAS Technologies offers high-quality CCTV cameras, IP cameras, and security solutions in Gurgaon. Explore our products for home, business, and industrial security needs.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="relative bg-primary">
        <Header/>
        {children}
        <Analytics />
        <Footer/>
      </body>
    </html>
  );
}
