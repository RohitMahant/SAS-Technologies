"use client";
import { useEffect, useState } from "react";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch blogs from the backend
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blogs"); // Replace with your API endpoint
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="text-center text-lg py-10">Loading blogs...</div>;
  }

  return (
    <div className="px-4 py-6 font-cocoRegular">
      <h1 className="text-4xl font-cocoBold text-center">BLOGS</h1>
      <p className="text-center text-2xl p-3">Check out the amazing content we write</p>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="relative bg-gray-300 p-4 shadow-lg hover:shadow-xl transition-shadow  overflow-hidden"
          >
            {/* Image Section */}
            <div className="relative overflow-hidden rounded-t-lg">
              <img
                src={blog.image}
                alt={blog.title}
                className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105 hover:blur-sm"
              />
            </div>

            {/* Content Section */}
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-gray-300 to-transparent md:opacity-0 hover:opacity-100  transition-opacity duration-300 p-4">
              <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-700 mb-4">{blog.description}</p>
              <a
                href={`/blogs/${blog.id}`}
                className="text-red-800 font-cocoRegular hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
