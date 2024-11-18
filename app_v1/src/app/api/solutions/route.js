export async function GET(request) {
  const blogs = [
    {
      "id": 1,
      "title": "Smart Biometric Lock",
      "description": "Secure your home with advanced biometric locking systems.",
      "image": "/images/biometric_lock.jpg"
    },
    {
      "id": 2,
      "title": "HD CCTV Camera",
      "description": "Keep an eye on your surroundings with our high-resolution CCTV cameras.",
      "image": "/images/cctv_camera.jpg"
    },
    {
      "id": 3,
      "title": "CCTV Accessories",
      "description": "Explore a range of accessories for your surveillance systems.",
      "image": "/images/cctv_accessories.jpg"
    }
  ]
  
  
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
