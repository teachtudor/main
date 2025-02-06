//CODE 3
"use client"; // Ensures the file is treated as a client component

import Navbar from "../../Navbar";
import "../../globals.css";
import React from "react";
import Link from "next/link"; 

// Array of blog data for rendering multiple blog posts
const blogPosts = [
  {
    id: 12,
    title: "KITCHEN TPR",
    image: "/kitchen.jpg", // Ensure this is the correct path
    description: "Kitchen TPR Lesson",
  },
  {
    id: 13,
    title: "BATHROOM",
    image: "/bathroom.jpg", // Ensure this is the correct path
    description: "Bathroom TPR Lesson",
  },
  // {
  //   id: 14,
  //   title: "BEDROOM TPR",
  //   image: "/bedroom.jpg", // Ensure this is the correct path
  //   description: "Bedroom TPR Lesson",
  // },
  // {
  //   id: 15,
  //   title: "LIVING ROOM TPR",
  //   image: "/livingroom.jpg", // Ensure this is the correct path
  //   description: "Living Room TPR Lesson",
  // },
  // {
  //   id: 16,
  //   title: "CITY TPR",
  //   image: "/city.jpg", // Ensure this is the correct path
  //   description: "City TPR Lesson",
  // },
];

export default function BlogPage() {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-6 text-center">INTERACTIVE TPR LESSONS</h1>

        {/* Flex layout with wrap, responsive layout */}
        <div className="flex flex-wrap gap-4 justify-center text-center">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 border-2 border-black rounded-lg overflow-hidden hover:shadow-lg transition-all text-center"
            >
              {/* Blog post card */}
              <div className="flex flex-col h-full text-center">
                {/* Image section - Thumbnail size */}
                <div className="w-full h-full bg-gray-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-contain w-full h-full"
                  />
                </div>
                {/* Text content section */}
                <div className="p-2 flex flex-col justify-between bg-white">
                  <h2 className="text-sm font-bold text-gray-800 text-center">
                    {post.title}
                  </h2>
                  <p className="text-xs text-gray-600 text-center">
                    {post.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}


