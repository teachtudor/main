// "use client"; // Ensures the file is treated as a client component

// import Navbar from "../Navbar";
// import "../globals.css";
// import React from "react";
// import Link from "next/link";

// // Array of blog data for rendering multiple blog posts
// const blogPosts = [
//   {
//     id: 1,
//     title: "Slide Presentation with Text Board",
//     image: "/slidePresentationLogo.jpg", // Ensure this is the correct path
//     description: "Build a presentation slide from a folder with text input.",
//   },
//   {
//     id: 2,
//     title: "Tool 2",
//     image: "/uc.jpg", // Ensure this is the correct path
//     description: "",
//   },
//   {
//     id: 3,
//     title: "Tool 3",
//     image: "/uc.jpg", // Ensure this is the correct path
//     description: "",
//   },
//   {
//     id: 4,
//     title: "Tool 4",
//     image: "/uc.jpg", // Ensure this is the correct path
//     description: "",
//   },
//   {
//     id: 5,
//     title: "Tool 5",
//     image: "/uc.jpg", // Ensure this is the correct path
//     description: "",
//   },
//   {
//     id: 6,
//     title: "Tool 6",
//     image: "/uc.jpg", // Ensure this is the correct path
//     description: "",
//   },
// ];

// export default function BlogPage() {
//   return (
//     <div>
//       <Navbar />
//       <div className="p-4">
//         <h1 className="text-2xl font-bold mb-6 text-center">Tools</h1>

//         {/* Flex layout with wrap, responsive layout */}
//         <div className="flex flex-wrap gap-4 justify-between">
//           {blogPosts.map((post) => (
//             <Link
//               key={post.id}
//               href={`/blog/${post.id}`}
//               className="w-1/6 p-2 border-2 border-black rounded-lg overflow-hidden hover:shadow-lg transition-all"
//             >
//               {/* Blog post card */}
//               <div className="flex flex-col h-full">
//                 {/* Image section - Thumbnail size */}
//                 <div className="w-full h-32 bg-gray-200">
//                   <img
//                     src={post.image}
//                     alt={post.title}
//                     className="object-cover w-full h-full"
//                   />
//                 </div>
//                 {/* Text content section */}
//                 <div className="p-2 flex flex-col justify-between bg-white">
//                   <h2 className="text-sm font-bold text-gray-800 text-center">
//                     {post.title}
//                   </h2>
//                   <p className="text-xs text-gray-600 text-center">
//                     {post.description}
//                   </p>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

//CODE 2
"use client"; // Ensures the file is treated as a client component

import Navbar from "../Navbar";
import "../globals.css";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// Array of blog data for rendering multiple blog posts
const blogPosts = [
  {
    id: 1,
    title: "Slide Presentation with Text Board Single Folder Only.",
    image: "/slidePresentationLogo.jpg", // Ensure this is the correct path
    description: "Build a presentation slide from a folder with text input.",
  },
  {
    id: 2,
    title: "Slide Presentation with Text Board Batch Folders",
    image: "/slidePresentationLogo.jpg", // Ensure this is the correct path
    description: "Build a presentation slide from a folder with text input.",
  },
  {
    id: 3,
    title: "Magic Ball",
    image: "/magicball.jpg", // Ensure this is the correct path
    description: "CEFR MAGIC BALL WORD GAME",
  },
  {
    id: 4,
    title: "Precise Word Test CEFR",
    image: "/wordtest.jpg", // Ensure this is the correct path
    description: "THE GREAT WORD TEST",
  },
];

export function BlogDetails() {
  const router = useRouter();
  const { id } = router.query;

  const blogPost = blogPosts.find((post) => post.id === Number(id));

  if (!blogPost) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">{blogPost.title}</h1>
        <img
          src={blogPost.image}
          alt={blogPost.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <p className="text-base text-gray-700 text-center">{blogPost.description}</p>
      </div>
    </div>
  );
}

// export default function BlogPage() {
//   return (
//     <div>
//       <Navbar />
//       <div className="p-4">
//         <h1 className="text-2xl font-bold mb-6 text-center">Tools</h1>

//         {/* Flex layout with wrap, responsive layout */}
//         <div className="flex flex-wrap gap-4 justify-between">
//           {blogPosts.map((post) => (
//             <Link
//               key={post.id}
//               href={`/blog/${post.id}`}
//               className="w-1/6 p-2 border-2 border-black rounded-lg overflow-hidden hover:shadow-lg transition-all"
//             >
//               {/* Blog post card */}
//               <div className="flex flex-col h-full">
//                 {/* Image section - Thumbnail size */}
//                 <div className="w-full h-32 bg-gray-200">
//                   <img
//                     src={post.image}
//                     alt={post.title}
//                     className="object-cover w-full h-full"
//                   />
//                 </div>
//                 {/* Text content section */}
//                 <div className="p-2 flex flex-col justify-between bg-white">
//                   <h2 className="text-sm font-bold text-gray-800 text-center">
//                     {post.title}
//                   </h2>
//                   <p className="text-xs text-gray-600 text-center">
//                     {post.description}
//                   </p>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

export default function BlogPage() {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-6 text-center">Tools</h1>

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
                <div className="w-full h-32 bg-gray-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full"
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

