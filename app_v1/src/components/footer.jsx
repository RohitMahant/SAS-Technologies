export default function Footer() {
    return (
      <div className="bg-white text-gray-700 font-cocoRegular py-8">
        <div className="container mx-auto px-4">


          {/* Footer Top Section */}

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Column 1: Company Info */}
            <div>
              <h3 className="text-md font-cocoBold mb-4">Company</h3>
              <ul className="text-sm">
                <li className="mb-2"><a href="/" className="hover:text-gray-300">About Us</a></li>
                <li className="mb-2"><a href="/services" className="hover:text-gray-300">Services</a></li>
                <li className="mb-2"><a href="/contact" className="hover:text-gray-300">Contact</a></li>
              </ul>
            </div>
  
            {/* Column 2: Products */}
            <div>
              <h3 className="text-md font-cocoBold mb-4">Products</h3>
              <ul className="text-sm">
                <li className="mb-2"><a href="/ip-cameras" className="hover:text-gray-300">IP Cameras</a></li>
                <li className="mb-2"><a href="/hd-cameras" className="hover:text-gray-300">HD Cameras</a></li>
                <li className="mb-2"><a href="/nvr" className="hover:text-gray-300">NVR</a></li>
                <li className="mb-2"><a href="/dvr" className="hover:text-gray-300">DVR</a></li>
                <li className="mb-2"><a href="/hard-drives" className="hover:text-gray-300">Hard Drives</a></li>
              </ul>
            </div>
  
            {/* Column 3: Social Media */}
            <div>
              <h3 className="text-md font-cocoBold mb-4">Follow Us</h3>
              <div className="flex justify-center space-x-6">
                <a href="https://facebook.com" className="hover:text-gray-300">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com" className="hover:text-gray-300">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com" className="hover:text-gray-300">
                  <i className="fab fa-instagram"></i>
                </a>
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
  