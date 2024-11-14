export async function GET(request) {
  const blogs = [
    {
      id: 1,
      title: "Introduction to Next.js",
      description: "Learn the basics of Next.js.",
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fnetwork-security&psig=AOvVaw2Mqrw7Z7SHMflMzacZVn2G&ust=1731655602203000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLjW9vml24kDFQAAAAAdAAAAABAE", // Replace with actual image URLs
    },
    {
      id: 2,
      title: "Getting Started with Tailwind CSS",
      description: "A guide to Tailwind CSS.",
      image: "https://via.placeholder.com/600x400",
    },
    // Add more blogs...
  ];
  
  return new Response(JSON.stringify(blogs), {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
  });
}

export async function POST(request) {
  const body = await request.json();

  // Example: Return the data received in the POST request
  return new Response(JSON.stringify({ message: 'Blog received', data: body }), {
    headers: { 'Content-Type': 'application/json' },
    status: 201,
  });
}
