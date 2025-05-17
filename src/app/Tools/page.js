// // //CODE 1
// "use client"; // Ensures the file is treated as a client component

// import Navbar from "../Navbar";
// import "../globals.css";
// import React from "react";
// import Link from "next/link";
// import { useRouter } from "next/router";

// // Array of blog data for rendering multiple blog posts
// const blogPosts = [
//   // {
//   //   id:17,
//   //   title: "BE A PART OF A STATISTICS STUDY",
//   //   image: "/staword.jpeg", // Ensure this is the correct path
//   //   description: "WORD TEST",
//   // },
//   // {
//   //   id:18,
//   //   title: "BE A PART OF A STATISTICS STUDY",
//   //   image: "/staword.jpeg", // Ensure this is the correct path
//   //   description: "WORD TEST",
//   // },
//   {
//     id:11,
//     title: "TPR Lesson Plans",
//     image: "/tpr.jpg", // Ensure this is the correct path
//     description: "Interactive TPR LESSON PLANS!",
//   },
//   // {
//   //   id:20,
//   //   title: "TPR GAME",
//   //   image: "/tprgame.jpg", // Ensure this is the correct path
//   //   description: "IN DEVELOPMENT",
//   // },
//   {
//     id:19,
//     title: "BE A PART OF A STATISTICS STUDY",
//     image: "/staword.jpeg", // Ensure this is the correct path
//     description: "MINIMUM 525 WORDS TEST - By proceeding, you agree to participate in this vocabulary study. Your responses, including demographic and test data, will be used for research purposes only. No personally identifiable information is collected, and your data remains anonymous. Participation is voluntary, and you may exit at any time.",
//   },
//   {
//     id: 5,
//     title: "Precise Word Test CEFR NO FILE VERSION",
//     image: "/wordtestcefr2.jpg", // Ensure this is the correct path
//     description: "THE GREAT WORD TEST NO FILE VERSION",
//   },
//   {
//     id: 1,
//     title: "Slide Presentation with Text Board 1-LEVEL Single Folder Only.",
//     image: "/1level.jpg", // Ensure this is the correct path
//     description: "Build a presentation slide from a folder with text input.  UPLOAD ONLY AS MUCH RAM YOU HAVE!",
//   },
//   {
//     id: 2,
//     title: "Slide Presentation with Text Board 2-LEVEL Folders",
//     image: "/2level.jpg", // Ensure this is the correct path
//     description: "Build a presentation slide from a folder with text input. UPLOAD ONLY AS MUCH RAM YOU HAVE!",
//   },
//   // {
//   //   id: 3,
//   //   title: "Magic Ball",
//   //   image: "/magicball.jpg", // Ensure this is the correct path
//   //   description: "CEFR MAGIC BALL WORD GAME",
//   // },
//   // {
//   //   id: 4,
//   //   title: "Precise Word Test CEFR",
//   //   image: "/wordtest.jpg", // Ensure this is the correct path
//   //   description: "THE GREAT WORD TEST",
//   // },
//   {
//     id: 6,
//     title: "Magic Ball",
//     image: "/magicball.jpg", // Ensure this is the correct path
//     description: "CEFR MAGIC BALL WORD GAME NO FILE VERSION",
//   },
//   {
//     id: 7,
//     title: "JLPT CARD GAME",
//     image: "/jlpt1.jpg", // Ensure this is the correct path
//     description: "Japanese Flipcard Game",
//   },
//   // {
//   //   id: 8,
//   //   title: "82171 Nouns in English FlashCard Game",
//   //   image: "/80000.jpg", // Ensure this is the correct path
//   //   description: "Over 80000 English Nouns Flashcard Game",
//   // },
//   // {
//   //   id: 9,
//   //   title: "GRE 1500 FLIPCARD GAME",
//   //   image: "/GRE1.jpg", // Ensure this is the correct path
//   //   description: "GRE FLIP CARD GAME FOR PRACTICE",
//   // },
//   // {
//   //   id: 10,
//   //   title: "GRE 6021 FLIPCARD GAME",
//   //   image: "/GRE1.jpg", // Ensure this is the correct path
//   //   description: "GRE FLIP CARD GAME FOR PRACTICE 6021 words",
//   // },
//   // {
//   //   id:12,
//   //   title: "Pictionary",
//   //   image: "/pictionary.jpg", // Ensure this is the correct path
//   //   description: "THE GREAT PICTURE DICTIONARY!",
//   // },
// ];

// export function BlogDetails() {
//   const router = useRouter();
//   const { id } = router.query;

//   const blogPost = blogPosts.find((post) => post.id === Number(id));

//   if (!blogPost) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <Navbar />
//       <div className="p-4">
//         <h1 className="text-2xl font-bold mb-4 text-center">{blogPost.title}</h1>
//         <img
//           src={blogPost.image}
//           alt={blogPost.title}
//           className="w-full h-64 object-cover rounded-lg mb-4"
//         />
//         <p className="text-base text-gray-700 text-center">{blogPost.description}</p>
//       </div>
//     </div>
//   );
// }

// export default function BlogPage() {
//   return (
//   <div>
//     <div>
//       <Navbar />
//       <div className="p-4">
//         <h1 className="text-2xl font-bold mb-6 text-center">Tools</h1>

//         {/* Flex layout with wrap, responsive layout */}
//         <div className="flex flex-wrap gap-4 justify-center text-center">
//           {blogPosts.map((post) => (
//             <Link
//               key={post.id}
//               href={`/blog/${post.id}`}
//               className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 border-2 border-black rounded-lg overflow-hidden hover:shadow-lg transition-all text-center 
//                 ${post.id === 11 || post.id === 12 ? 'hide-on-phone' : ''}`}  // Add 'hide-on-phone' class to TPR Lesson Plans and Pictionary
//                 >
//               {/* Blog post card */}
//               <div className="flex flex-col h-full text-center">
//                 {/* Image section - Thumbnail size */}
//                 <div className="w-full h-full bg-gray-200">
//                   <img
//                     src={post.image}
//                     alt={post.title}
//                     className="object-contain w-full h-full"
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

//     <style jsx>{`
//         /* Phone (480px and below) */
//         @media (max-width: 480px) {
//           .hide-on-phone {
//               display: none;
//           }
//         }
//     `}
//    </style>
//   </div>
//   );
// }

//CODE 2
"use client";

import React, { useState, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import Navbar from "../Navbar";
import "../globals.css";
import Link from 'next/link';

const blogPosts = [
  {
    id: 11,
    title: "TPR Lesson Plans",
    image: "/tpr.jpg",
    description: "Interactive TPR LESSON PLANS!",
  },
  {
    id: 19,
    title: "BE A PART OF A STATISTICS STUDY",
    image: "/staword.jpeg",
    description:
      "MINIMUM 525 WORDS TEST - By proceeding, you agree to participate...",
  },
  {
    id: 5,
    title: "Precise Word Test CEFR NO FILE VERSION",
    image: "/wordtestcefr2.jpg",
    description: "THE GREAT WORD TEST NO FILE VERSION",
  },
  {
    id: 1,
    title: "Slide Presentation with Text Board 1-LEVEL",
    image: "/1level.jpg",
    description: "Build a presentation slide from a folder with text input.",
  },
  {
    id: 2,
    title: "Slide Presentation 2-LEVEL Folders",
    image: "/2level.jpg",
    description: "Upload only as much RAM you have!",
  },
  {
    id: 6,
    title: "Magic Ball",
    image: "/magicball.jpg",
    description: "CEFR MAGIC BALL WORD GAME NO FILE VERSION",
  },
  {
    id: 7,
    title: "JLPT CARD GAME",
    image: "/jlpt1.jpg",
    description: "Japanese Flipcard Game",
  },
];

function BlogPostCard({ post }) {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <mesh>
      <Html center>
        <Link href={`/blog/${post.id}`} className="block pointer-events-auto">
          <div className="w-72 max-w-48 p-4 bg-white rounded shadow text-center">
            <img
              src={post.image}
              alt={post.title}
              className="w-full max-h-72 object-contain rounded"
            />
            <h2 className="text-lg font-bold mt-2">{post.title}</h2>
            <p className="text-sm mt-1">{post.description}</p>
          </div>
        </Link>
      </Html>
    </mesh>
  );
}

export default function SinglePostViewer() {
  const [index, setIndex] = useState(0);
  const audioRef = useRef(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  const next = () => {
    playSound();
    setIndex((prev) => (prev + 1) % blogPosts.length);
  };

  const prev = () => {
    playSound();
    setIndex((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
  
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="mt-14 w-full h-screen bg-gray-100">
      <Navbar />

      {/* Fixed Left/Right Buttons */}
      <div className="fixed top-1/2 transform -translate-y-1/2 w-full px-4 z-10 pointer-events-none">
        <button
          onClick={prev}
          className="absolute left-0 ml-2 bg-black text-white px-4 py-2 rounded pointer-events-auto"
        >
          ◀
        </button>
        <button
          onClick={next}
          className="absolute right-0 mr-2 bg-black text-white px-4 py-2 rounded pointer-events-auto"
        >
          ▶
        </button>
      </div>

      {/* Sound Effect */}
      <audio ref={audioRef} src="/plugOut.wav" preload="auto" />

      {/* Canvas with single card */}
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight />
        <BlogPostCard post={blogPosts[index]} />
      </Canvas>
    </div>
  );
}
