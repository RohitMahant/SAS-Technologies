import React from 'react';

export default function AboutUs() {
    const products = [
        { href: "/products/cctv/ip_cameras", label: "IP Cameras" },
        { href: "/products/cctv/hd_cameras", label: "HD Cameras" },
        { href: "/products/cctv/wifi_cameras", label: "WiFi Cameras" },
        { href: "/products/recorders/nvr", label: "Network Video Recorders (NVR)" },
        { href: "/products/recorders/dvr", label: "Digital Video Recorders (DVR)" },
        { href: "/products/door_devices/vdp", label: "Video Door Phones (VDP)" },
        { href: "/products/door_devices/door_locks", label: "Door Locks" },
        { href: "/products/accessories/smps", label: "Switch Mode Power Supplies (SMPS)" },
        { href: "/products/accessories/cables", label: "Cables" },
        { href: "/products/accessories/poe_switches", label: "POE Switches" },
        { href: "/products/accessories/routers", label: "Routers" },
        { href: "/products/accessories/biometrics", label: "Biometric Systems" },
        { href: "/retail", label: "All Accessories" },
    ];

    return (
        <div className="bg-gray-100 text-gray-800 p-8">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-center font-cocoBold">About Us</h1>
                {/* <img src="/about_1.jpeg" className='p-2'/> */}
            </header>
            <main className="space-y-6">
                <section>
                    <p className="text-lg leading-relaxed">
                        <strong>SAS Technologies</strong> is a leading distributor of high-quality CCTV and security solutions, catering exclusively to dealers and installers. We specialize in providing advanced surveillance products from globally recognized brands, ensuring our partners have access to the best technology at competitive prices.
                    </p>
                    <p className="text-lg leading-relaxed">
                        As an authorized distributor of Prama, we offer genuine, premium-grade CCTV cameras and systems with full support, including warranties and technical assistance. In addition, we supply a wide range of other leading brands such as Hikvision, CP Plus, WD, Consistent, Godrej, and D-Link, enabling us to provide comprehensive, tailored solutions that meet the diverse needs of our clients.
                    </p>
                    <p className="text-lg leading-relaxed">
                        At SAS Technologies, we don’t just distribute products – we build partnerships. We are committed to being a reliable source for security dealers and installers, offering the best products, competitive pricing, and unmatched customer service. With us, you can focus on growing your business while we provide the tools and support you need.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Join SAS Technologies, where technology meets trust, and together, let’s create safer spaces for everyone.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold">Explore Our Solutions</h2>
                    <ul className="list-disc list-inside mt-4 space-y-2">
                        <li><a href="/solutions" className="text-blue-500 hover:underline">View Our Solutions</a></li>
                        <li><a href="/wholesale" className="text-blue-500 hover:underline">Wholesale Options</a></li>
                        <li><a href="/contact" className="text-blue-500 hover:underline">Contact Us</a></li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold">Authorized Sellers</h2>
                    <ul className="list-disc list-inside mt-4 space-y-2">
                        <li>Prama: Authentic CCTV products with warranties and support</li>
                        <li>Hikvision: Advanced surveillance technology</li>
                        <li>CP Plus: High-quality security solutions</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold">Products We Sell</h2>
                    <ul className="list-disc list-inside mt-4 space-y-2">
                        {products.map((item, index) => (
                            <li key={index}><a href={item.href} className="text-blue-500 hover:underline">{item.label}</a></li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold">Company Information</h2>
                    <p><strong>Industry:</strong> Security and Investigations</p>
                    <p><strong>Company Size:</strong> 11-50 employees</p>
                    <p><strong>Headquarters:</strong> Gurugram, Haryana</p>
                </section>
            </main>

            <footer className="mt-8 text-center text-gray-600">
                <p>&copy; 2025 SAS Technologies. All rights reserved.</p>
            </footer>
        </div>
    );
}
