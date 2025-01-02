"use client";
import { useRouter } from "next/navigation";

const solutionsData = [
  {
    id: "1",
    title: "Biometric Door Lock",
    description:
      "Advanced biometric lock with secure fingerprint access. This system offers cutting-edge security features such as tamper alerts, multi-user support, and app integration.",
    image: "/images/biometric_lock.jpg",
    category: "Private Property",
  },
  {
    id: "2",
    title: "CCTV Camera",
    description:
      "High-resolution CCTV cameras for complete surveillance. Offers night vision, remote monitoring, and motion detection capabilities.",
    image: "/images/cctv_camera.jpg",
    category: "Private Property",
  },
  {
    id: "3",
    title: "Smart Video Doorbell",
    description:
      "A video doorbell that allows you to see, hear, and speak to visitors at your door from your smartphone.",
    image: "/images/video_doorbell.jpg",
    category: "Private Property",
  },
  {
    id: "4",
    title: "Bank Security Systems",
    description:
      "Comprehensive banking security systems with features like vault protection, real-time monitoring, and alarm integration to ensure the safety of assets and personnel.",
    image: "/images/bank_security.jpg",
    category: "Banking",
  },
  {
    id: "5",
    title: "Smart Classroom Solutions",
    description:
      "Empower educational institutions with smart classroom solutions, including interactive whiteboards, student monitoring systems, and secure access control.",
    image: "/images/smart_classroom.jpg",
    category: "Schools",
  },
  {
    id: "6",
    title: "School Campus Surveillance",
    description:
      "High-quality surveillance systems designed specifically for school campuses, offering real-time monitoring and emergency alert systems.",
    image: "/images/school_surveillance.jpg",
    category: "Schools",
  },
  {
    id: "7",
    title: "Office Access Control",
    description:
      "Secure your office space with advanced access control systems, offering multi-level authorization and detailed access logs.",
    image: "/images/office_access.jpg",
    category: "Corporate",
  },
];

export default function Solutions() {
  const router = useRouter();

  const handleViewMore = (id) => {
    router.push(`/solutions/${id}`);
  };

  const categories = [
    ...new Set(solutionsData.map((solution) => solution.category)),
  ];

  return (
    <div className="px-4 py-6">
      <h1 className="text-4xl font-bold text-center">Our Solutions</h1>
      <p className="text-center text-2xl p-3">
        Explore our wide range of cutting-edge solutions tailored for different
        industries.
      </p>
      {categories.map((category) => (
        <div key={category} className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {category}
          </h2>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {solutionsData
              .filter((solution) => solution.category === category)
              .map((solution) => (
                <div
                  key={solution.id}
                  className="relative bg-gray-300 p-4 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="h-48 w-full object-cover rounded-lg"
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {solution.description.slice(0, 100)}...
                  </p>
                  <button
                    onClick={() => handleViewMore(solution.id)}
                    className="text-blue-600 hover:underline"
                  >
                    View More →
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
