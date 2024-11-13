import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Head from "next/head";


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
  title: "sastechnologies",
  description: "CCTV Camera sellers in Gurgaon",
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
        <Footer/>
      </body>
    </html>
  );
}
