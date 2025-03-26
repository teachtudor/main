// //CODE 2
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


//code 3
"use client";
import React, { Suspense, useRef } from "react";
import { useRouter } from 'next/navigation';
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import Navbar from "../Navbar";
import "../globals.css";
import Link from "next/link";
import { TextureLoader } from "three";

const blogPosts = [
  {
    id: 11,
    title: "TPR Lesson Plans",
    image: "/tpr.jpg",
    description: "Interactive TPR LESSON PLANS!",
  },
  {
    id: 19,
    title: "Statistics Study",
    image: "/staword.jpeg",
    description: "Vocabulary study test.",
  },
  {
    id: 5,
    title: "Precise Word Test",
    image: "/wordtestcefr2.jpg",
    description: "Word test - no file version.",
  },
  {
    id: 1,
    title: "Slide Presentation 1-Level",
    image: "/1level.jpg",
    description: "Upload folders for presentation.",
  },
  {
    id: 2,
    title: "Slide Presentation 2-Level",
    image: "/2level.jpg",
    description: "Upload nested folders for presentation.",
  },
  {
    id: 6,
    title: "Magic Ball",
    image: "/magicball.jpg",
    description: "CEFR Magic Ball word game.",
  },
  {
    id: 7,
    title: "JLPT Card Game",
    image: "/jlpt1.jpg",
    description: "Japanese Flipcard Game.",
  },
];

// Cube Component with orbit and auto-rotation
// function BlogCube({ image }) {
//   const cubeRef = useRef();
//   const texture = useLoader(TextureLoader, image);

//   useFrame(() => {
//     if (cubeRef.current) {
//       cubeRef.current.rotation.y += 0.005; // auto-rotate
//       cubeRef.current.rotation.x += 0.002;
//     }
//   });

//   return (
//     <mesh ref={cubeRef}>
//       <boxGeometry args={[5, 5, 5]} />
//       {[...Array(6)].map((_, i) => (
//         <meshBasicMaterial key={i} attach={`material-${i}`} map={texture} />
//       ))}
//     </mesh>
//   );
// }

function BlogCube({ image, route }) {
  const cubeRef = useRef();
  const texture = useLoader(TextureLoader, image);
  const router = useRouter();

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.y += 0.005;
      cubeRef.current.rotation.x += 0.002;
    }
  });

  return (
    <mesh
      ref={cubeRef}
      onClick={() => router.push(route)}
      scale={1}
      cursor="pointer"
    >
      <boxGeometry args={[8, 8, 8]} />
      {[...Array(6)].map((_, i) => (
        <meshBasicMaterial key={i} attach={`material-${i}`} map={texture} />
      ))}
    </mesh>
  );
}


export default function BlogPage() {
  return (
    // <div>
    //   <Navbar />
    //   <div className="p-4">
    //     <h1 className="text-2xl font-bold mb-6 text-center">Tools (3D Cubes)</h1>

    //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
    //       {blogPosts.map((post) => (
    //         <div key={post.id} className="border border-black rounded-lg p-4 shadow-lg bg-white">
    //           <Link href={`/blog/${post.id}`} className="block mb-4 text-center font-semibold">
    //             {post.title}
    //           </Link>
    //           <div className="w-full h-64">
    //             <Canvas camera={{ position: [4, 4, 4] }}>
    //               <ambientLight />
    //               <Suspense fallback={null}>
    //                 <BlogCube image={post.image} />
    //                 <OrbitControls enableZoom={false} autoRotate={false} />
    //               </Suspense>
    //             </Canvas>
    //           </div>
    //           <p className="text-center mt-4 text-sm">{post.description}</p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div>
      <Navbar/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
        {blogPosts.map((post) => (
          <div key={post.id} className="flex flex-col items-center">
            <Link href={`/blog/${post.id}`} className="mb-2 text-center font-semibold hover:underline">
              {/* {post.title} */}
            </Link>
            <div className="w-full h-64">
              {/* <Canvas camera={{ position: [4, 4, 4] }}>
                <ambientLight />
                <Suspense fallback={null}>
                  <BlogCube image={post.image} />
                  <OrbitControls enableZoom={false} autoRotate={false} />
                </Suspense>
              </Canvas> */}
              <Canvas camera={{ position: [7, 7, 7] }}>
                <ambientLight intensity ={3}/>
                <Suspense fallback={null}>
                  <BlogCube image={post.image} route={`/blog/${post.id}`} />
                  <OrbitControls enableZoom={false} autoRotate={false} />
                </Suspense>
              </Canvas>

              
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}


