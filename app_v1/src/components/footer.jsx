import Link from "next/link";
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitch, IoLogoTwitter } from "react-icons/io";
export default function Footer() {
    return (
      <div className="bg-white border text-gray-700 font-cocoRegular py-8">
        <div className="container mx-auto px-4">


          {/* Footer Top Section */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
            {/* Column 1: Company Info */}
            <div>
              <h3 className="text-md font-cocoBold mb-4">Company</h3>
              <ul className="text-sm">
                <li className="mb-2"><Link href="/" className="hover:text-gray-300">Home</Link></li>
                <li className="mb-2"><Link href="/retail" className="hover:text-gray-300">Retail</Link></li>
                <li className="mb-2"><Link href="/retail" className="hover:text-gray-300">Wholesale</Link></li>
                <li className="mb-2"><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
              </ul>
            </div>
  
            {/* Column 2: Products */}
            <div>
              <h3 className="text-md font-cocoBold mb-4">Authorised Sellers by</h3>
              <ul className="text-sm">
                <li className="">
                  <img src="cp-plus.png" alt="cpplus " className="h-16"/>
                </li>
                
              </ul>
            </div>

            <div>
              <h3 className="text-md font-cocoBold mb-4">Products</h3>
              <ul className="text-sm">
                <li className="mb-2"><Link href="/ip-cameras" className="hover:text-gray-300">IP Cameras</Link></li>
                <li className="mb-2"><Link href="/hd-cameras" className="hover:text-gray-300">HD Cameras</Link></li>
                <li className="mb-2"><Link href="/nvr" className="hover:text-gray-300">NVR</Link></li>
                <li className="mb-2"><Link href="/dvr" className="hover:text-gray-300">DVR</Link></li>
                <li className="mb-2"><Link href="/hard-drives" className="hover:text-gray-300">Biometrics</Link></li>
              </ul>
            </div>
  
            {/* Column 3: Social MediLink */}
            <div>
              <h3 className="text-md font-cocoBold mb-4 text-center">Follow Us</h3>
              <div className="flex justify-center space-x-6">
                <Link href="https://facebook.com" className="hover:text-gray-900 ">
                  <IoLogoFacebook size={30}/>
                </Link>
                <Link href="https://twitter.com" className="hover:text-gray-900">
                 <IoLogoTwitter  size={30}/>
                </Link>
                <Link href="https://instagram.com" className="hover:text-gray-900">
                  <IoLogoInstagram  size={30}/>
                </Link>
                <Link href="https://instagram.com" className="hover:text-gray-900">
                 <IoLogoLinkedin  size={30}/>
                </Link>
              </div>
            </div>
          </div>
  
          {/* Footer Bottom Section */}
          <div className="mt-8 text-center text-sm">
            <p>&copy; <span className="font-serif">{new Date().getFullYear()}</span> SAS Technologies. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    );
  }
  