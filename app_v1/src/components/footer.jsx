import Link from "next/link";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io";
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
              <li className="mb-2">
                <Link href="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/retail" className="hover:text-gray-300">
                  Retail
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/retail" className="hover:text-gray-300">
                  Wholesale
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Products */}
          <div>
            <h3 className="text-md font-cocoBold mb-4">Look for cameras</h3>
            <ul className="text-sm">
              {[
                { href: "/products/cctv/ip_cameras", label: "IP Cameras" },
                { href: "/products/cctv/hd_cameras", label: "HD Cameras" },
                { href: "/products/cctv/wifi_cameras", label: "WiFi Cameras" },
              ].map((item, index) => (
                <li key={index} className="text-sm ">
                  <Link
                    href={item.href}
                    className="block py-1 text-gray-700 hover:text-blue-500  text-sm transition duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-cocoBold mb-4">
              Look for DVR , NVR and VDPs
            </h3>
            <ul className="text-sm">
              {[
                {
                  href: "/products/recorders/nvr",
                  label: "Network Video Recorders (NVR)",
                },
                {
                  href: "/products/recorders/dvr",
                  label: "Digital Video Recorders (DVR)",
                },
                {
                  href: "/products/door_devices/vdp",
                  label: "Video Door Phones (VDP)",
                },
              ].map((item, index) => (
                <li key={index} className="text-sm ">
                  <Link
                    href={item.href}
                    className="block py-1 text-gray-700 hover:text-blue-500  text-sm transition duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-cocoBold mb-4">Look for Accessories</h3>
            <ul className="text-sm">
              {[
                {
                  href: "/products/accessories/smps",
                  label: "Switch Mode Power Supplies (SMPS)",
                },
                { href: "/products/accessories/cables", label: "Cables" },
                {
                  href: "/products/accessories/poe_switches",
                  label: "POE Switches",
                },

                { href: "/products/accessories/routers", label: "Routers" },
                {
                  href: "/products/accessories/biometrics",
                  label: " Biometric Systems",
                },
                { href: "/retail", label: "All Accessories" },
              ].map((item, index) => (
                <li key={index} className="text-sm ">
                  <Link
                    href={item.href}
                    className="block py-1 text-gray-700 hover:text-blue-500  text-sm transition duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Products */}
          <div>
            <h3 className="text-md font-cocoBold mb-4">
              Authorised Sellers by
            </h3>
            <ul className="text-sm md:flex">
              <li className="z-30">
                <img src="cp-plus.png" alt="cpplus " className="h-16 cursor-pointer"  />
              </li>
              <li className="z-30">
                <img src="Hikvision.svg" alt="cpplus " className="h-16 cursor-pointer"  />
              </li>
              <li className="z-30">
                <img src="prama_logo.png" alt="cpplus " className="h-10 cursor-pointer"  />
              </li>
            </ul>
          </div>

      
          {/* Column 3: Social MediLink */}
          <div>
            <h3 className="text-md font-cocoBold mb-4 text-center">
              Follow Us
            </h3>
            <div className="flex justify-center md:space-x-6 space-x-3">
              <Link
                href="https://facebook.com"
                className="hover:text-gray-900 flex items-center "
              >
                <IoLogoFacebook size={30} />
              </Link>
              <Link href="https://twitter.com" className="hover:text-gray-900 flex items-center ">
                <IoLogoTwitter size={30} />
              </Link>
              <Link
                href="https://instagram.com"
                className="hover:text-gray-900 flex items-center "
              >
                <IoLogoInstagram size={30} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/sas-technologies5/"
                className="hover:text-gray-900 flex items-center "
              >
                <IoLogoLinkedin size={30} />
              </Link>
              <Link
                href="https://www.indiamart.com/sas-technologies-gurgaon/"
                className="hidden md:block hover:text-gray-900"
              >
                <img src="/indiamart.png" alt="indiamart_sas_technoogies" className="h-16"/>
              </Link>

            </div>
            <Link
                href="https://www.indiamart.com/sas-technologies-gurgaon/"
                className="md:hidden block hover:text-gray-900"
              >
                <img src="/indiamart.png" alt="indiamart_sas_technoogies" className="h-16"/>
              </Link>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 text-center text-sm">
          <p className="font-sans">
            &copy;{" "}
            <span className="font-serif">{new Date().getFullYear()}</span> SAS
            Technologies. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
