export default async function SolutionDetail({ params }) {
    const { id } = await params; // Unwrap the `params` promise
  
    const solutionsData = [
      {
        id: "1",
        title: "Biometric Door Lock",
        description:
          "Advanced biometric lock with secure fingerprint access. This system offers cutting-edge security features such as tamper alerts, multi-user support, and app integration.",
        image: "/sol_1.jpg",
        features: [
          "Fingerprint recognition",
          "Tamper-proof design",
          "App integration",
          "Multi-user support",
        ],
      },
      {
        id: "2",
        title: "CCTV Camera",
        description:
          "High-resolution CCTV cameras for complete surveillance. Offers night vision, remote monitoring, and motion detection capabilities.",
        image: "/sol_2.webp",
        features: [
          "Night vision",
          "Motion detection",
          "Remote monitoring",
          "High-resolution video",
        ],
      },
      {
        id: "3",
        title: "Smart Video Doorbell",
        description:
          "A video doorbell that allows you to see, hear, and speak to visitors at your door from your smartphone.",
        image: "/sol_3.jpg",
        features: [
          "Two-way audio",
          "HD video",
          "Mobile notifications",
          "Cloud storage support",
        ],
      },
      {
        id: "4",
        title: "Smart Video Doorbell",
        description:
          "A video doorbell that allows you to see, hear, and speak to visitors at your door from your smartphone.",
        image: "/sol_4.jpg",
        features: [
          "Two-way audio",
          "HD video",
          "Mobile notifications",
          "Cloud storage support",
        ],
      },
    ];
  
    const solution = solutionsData.find((item) => item.id === id);
  
    if (!solution) {
      return <div>Solution not found</div>;
    }
  
    return (
      <div className="p-6 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">{solution.title}</h1>
        <img
          src={solution.image}
          alt={solution.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <p className="text-lg mb-4">{solution.description}</p>
        <ul className="list-disc list-inside">
          {solution.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    );
  }
  