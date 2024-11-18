"use client";
import { useRouter } from "next/navigation";

const solutionsData = [
  {
    id: "1",
    title: "Biometric Door Lock",
    description:
      "Advanced biometric lock with secure fingerprint access. This system offers cutting-edge security features such as tamper alerts, multi-user support, and app integration.",
    image: "/images/biometric_lock.jpg",
  },
  {
    id: "2",
    title: "CCTV Camera",
    description:
      "High-resolution CCTV cameras for complete surveillance. Offers night vision, remote monitoring, and motion detection capabilities.",
    image: "/images/cctv_camera.jpg",
  },
  {
    id: "3",
    title: "Smart Video Doorbell",
    description:
      "A video doorbell that allows you to see, hear, and speak to visitors at your door from your smartphone.",
    image: "/images/video_doorbell.jpg",
  },
];

export default function Solutions() {
  const router = useRouter();

  const handleViewMore = (id) => {
    router.push(`/solutions/${id}`);
  };

  return (
    <div className="px-4 py-6">
      <h1 className="text-4xl font-bold text-center">Our Solutions</h1>
      <p className="text-center text-2xl p-3">
        Explore our cutting-edge security solutions.
      </p>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {solutionsData.map((solution) => (
          <div
            key={solution.id}
            className="relative bg-gray-300 p-4 shadow-lg hover:shadow-xl transition-shadow"
          >
            <img
              src={solution.image}
              alt={solution.title}
              className="h-48 w-full object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold mb-2">{solution.title}</h2>
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
  );
}
