//CODE 3
// "use client"; // Ensures the file is treated as a client component

// import Navbar from "../../Navbar";
// import "../../globals.css";
// import React from "react";
// import Link from "next/link"; 

// // Array of blog data for rendering multiple blog posts
// const blogPosts = [
//   {
//     id: 12,
//     title: "KITCHEN TPR",
//     image: "/kitchen.jpg", // Ensure this is the correct path
//     description: "Kitchen TPR Lesson",
//   },
//   {
//     id: 13,
//     title: "BATHROOM",
//     image: "/bathroom.jpg", // Ensure this is the correct path
//     description: "Bathroom TPR Lesson",
//   },
//   // {
//   //   id: 14,
//   //   title: "BEDROOM TPR",
//   //   image: "/bedroom.jpg", // Ensure this is the correct path
//   //   description: "Bedroom TPR Lesson",
//   // },
//   // {
//   //   id: 15,
//   //   title: "LIVING ROOM TPR",
//   //   image: "/livingroom.jpg", // Ensure this is the correct path
//   //   description: "Living Room TPR Lesson",
//   // },
//   // {
//   //   id: 16,
//   //   title: "CITY TPR",
//   //   image: "/city.jpg", // Ensure this is the correct path
//   //   description: "City TPR Lesson",
//   // },
// ];

// export default function BlogPage() {
//   return (
//     <div>
//       <Navbar />
//       <div className="p-4">
//         <h1 className="text-2xl font-bold mb-6 text-center">INTERACTIVE TPR LESSONS</h1>

//         {/* Flex layout with wrap, responsive layout */}
//         <div className="flex flex-wrap gap-4 justify-center text-center">
//           {blogPosts.map((post) => (
//             <Link
//               key={post.id}
//               href={`/blog/${post.id}`}
//               className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 border-2 border-black rounded-lg overflow-hidden hover:shadow-lg transition-all text-center"
//             >
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
//   );
// }


//CODE 1
// 'use client';
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import Navbar from '../../Navbar';

// export default function Kitchen() {
//   const [actions, setActions] = useState({
//     fridgeOpen: false,
//     faucetOn: false,
//     stoveOn: false,
//     ovenOn: false,
//     ovenDoorOpen: false,
//     microwaveOn: false,
//     microwaveDoorOpen: false,
//     toasterOn: false,
//     breadInToaster: false,
//     blenderOn: false,
//     blenderLidOn: false,
//     kettleOn: false,
//     kettleFilled: false,
//     lightsOn: false,
//     sitting: false,
//   });

//   const [category, setCategory] = useState('');
//   const [alphabetFilter, setAlphabetFilter] = useState('');

//   const toggleAction = (action) => {
//     setActions(prev => ({
//       ...prev,
//       [action]: !prev[action],
//     }));
//   };

//   const categories = ['Kitchen', 'Appliances', 'Furniture'];
//   const items = {
//     Kitchen: ['Fridge', 'Stove', 'Oven'],
//     Appliances: ['Faucet', 'Microwave', 'Blender', 'Toaster', 'Kettle'],
//     Furniture: ['Chair', 'Table'],
//   };

//   const filterItems = (category) => {
//     return items[category]?.filter(item => item.toLowerCase().startsWith(alphabetFilter.toLowerCase()));
//   };

//   return (
//     <div>
//         <Navbar />
//         <div className="flex">
//             {/* Categories on the Left */}
//             <div className="flex flex-col space-y-4 p-6">
//                 {categories.map((cat) => (
//                     <button
//                         key={cat}
//                         className={`p-2 bg-blue-500 text-white rounded-lg ${category === cat ? 'bg-blue-700' : ''}`}
//                         onClick={() => setCategory(cat)}
//                     >
//                         {cat}
//                     </button>
//                 ))}
//             </div>

//             {/* Whiteboard Area */}
//             <div className="flex flex-col items-center justify-center w-full max-w-6xl bg-white p-6 border rounded-lg shadow-md">
                
//                 {/* Alphabet Filter */}
//                 <div className="flex space-x-4 mb-4">
//                     {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => (
//                         <button
//                             key={letter}
//                             className={`p-2 rounded-full ${alphabetFilter === letter ? 'bg-gray-400' : 'bg-gray-200'}`}
//                             onClick={() => setAlphabetFilter(letter)}
//                         >
//                             {letter}
//                         </button>
//                     ))}
//                 </div>

//                 {/* Kitchen Scene */}
//                 <div className="relative w-full max-w-6xl h-[600px] bg-white border rounded-lg shadow-md">
//                     {filterItems(category).map((item, index) => {
//                         const actionState = actions[`${item.toLowerCase()}On`];
//                         return (
//                             <motion.img
//                                 key={index}
//                                 src={actionState ? `/${item.toLowerCase()}-on.png` : `/${item.toLowerCase()}-off.png`}
//                                 alt={item}
//                                 className="absolute top-10 left-10 w-40 h-auto kitchen-item"
//                                 animate={{ x: actionState ? 20 : 0 }}
//                                 onClick={() => toggleAction(`${item.toLowerCase()}On`)}
//                             />
//                         );
//                     })}
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="grid grid-cols-3 gap-4 mt-6 w-full max-w-4xl mx-auto">
//                     {filterItems(category).map((item, index) => (
//                         <button
//                             key={index}
//                             onClick={() => toggleAction(`${item.toLowerCase()}On`)}
//                             className="p-2 bg-green-500 text-white rounded-lg"
//                         >
//                             {actions[`${item.toLowerCase()}On`] ? `Turn Off ${item}` : `Turn On ${item}`}
//                         </button>
//                     ))}
//                 </div>
//             </div>
//         </div>

//         <style jsx>{`
//             .flex {
//                 display: flex;
//             }

//             .flex-col {
//                 flex-direction: column;
//             }

//             .grid {
//                 display: grid;
//                 grid-template-columns: repeat(3, 1fr);
//                 gap: 1rem;
//             }

//             button {
//                 padding: 0.75rem 1.5rem;
//                 font-size: 1.125rem;
//                 font-weight: bold;
//                 color: white;
//                 border: none;
//                 border-radius: 8px;
//                 cursor: pointer;
//                 transition: transform 0.2s, box-shadow 0.2s;
//             }

//             button:hover {
//                 transform: scale(1.1);
//                 box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
//             }

//             button:disabled {
//                 opacity: 0.5;
//                 cursor: not-allowed;
//             }

//             .absolute {
//                 position: absolute;
//             }

//             .w-40 {
//                 width: 10rem;
//             }

//             .h-auto {
//                 height: auto;
//             }

//             .cursor-pointer {
//                 cursor: pointer;
//             }

//             /* Responsive Design */
//             @media (max-width: 1024px) {
//                 .grid {
//                     grid-template-columns: repeat(2, 1fr); /* Tablet: 2 columns */
//                 }
//             }

//             @media (max-width: 768px) {
//                 .grid {
//                     grid-template-columns: 1fr; /* Mobile: 1 column */
//                 }
//             }

//             /* Phone (480px and below) */
//             @media (max-width: 480px) {
//                 .hide-on-phone {
//                     display: none;
//                 }
//             }
//         `}</style>
//     </div>
//   );
// }

//CODE 2
// 'use client';
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import Navbar from '../../Navbar';

// export default function Kitchen() {
//   const [actions, setActions] = useState({
//     fridgeOpen: false,
//     faucetOn: false,
//     stoveOn: false,
//     ovenOn: false,
//     ovenDoorOpen: false,
//     microwaveOn: false,
//     microwaveDoorOpen: false,
//     toasterOn: false,
//     breadInToaster: false,
//     blenderOn: false,
//     blenderLidOn: false,
//     kettleOn: false,
//     kettleFilled: false,
//     lightsOn: false,
//     sitting: false,
//   });

//   const [category, setCategory] = useState('Kitchen');
//   const [alphabetFilter, setAlphabetFilter] = useState('');

//   const toggleAction = (action) => {
//     setActions(prev => ({
//       ...prev,
//       [action]: !prev[action],
//     }));
//   };

//   const categories = ['Kitchen', 'Appliances', 'Furniture'];
//   const items = {
//     Kitchen: ['Fridge', 'Stove', 'Oven'],
//     Appliances: ['Faucet', 'Microwave', 'Blender', 'Toaster', 'Kettle'],
//     Furniture: ['Chair', 'Table'],
//   };

//   const filterItems = (category) => {
//     return items[category]?.filter(item => item.toLowerCase().startsWith(alphabetFilter.toLowerCase())) || [];
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="flex">
//         {/* Categories on the Left */}
//         <div className="flex flex-col space-y-4 p-6">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               className={`p-2 bg-blue-500 text-white rounded-lg ${category === cat ? 'bg-blue-700' : ''}`}
//               onClick={() => setCategory(cat)}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Whiteboard Area */}
//         <div className="flex flex-col items-center justify-center w-full max-w-6xl bg-white p-6 border rounded-lg shadow-md">
//           {/* Alphabet Filter */}
//           <div className="flex space-x-4 mb-4">
//             {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => (
//               <button
//                 key={letter}
//                 className={`p-2 rounded-full ${alphabetFilter === letter ? 'bg-gray-400' : 'bg-gray-200'}`}
//                 onClick={() => setAlphabetFilter(letter)}
//               >
//                 {letter}
//               </button>
//             ))}
//           </div>

//           {/* Kitchen Scene */}
//           <div className="relative w-full max-w-6xl h-[600px] bg-white border rounded-lg shadow-md">
//             {filterItems(category).map((item, index) => {
//               const actionState = actions[`${item.toLowerCase()}On`];
//               return (
//                 <motion.img
//                   key={index}
//                   src={actionState ? `/${item.toLowerCase()}-on.png` : `/${item.toLowerCase()}-off.png`}
//                   alt={item}
//                   className="absolute top-10 left-10 w-40 h-auto kitchen-item"
//                   animate={{ x: actionState ? 20 : 0 }}
//                   onClick={() => toggleAction(`${item.toLowerCase()}On`)}
//                 />
//               );
//             })}
//           </div>

//           {/* Action Buttons */}
//           <div className="grid grid-cols-3 gap-4 mt-6 w-full max-w-4xl mx-auto">
//             {filterItems(category).map((item, index) => (
//               <button
//                 key={index}
//                 onClick={() => toggleAction(`${item.toLowerCase()}On`)}
//                 className="p-2 bg-green-500 text-white rounded-lg"
//               >
//                 {actions[`${item.toLowerCase()}On`] ? `Turn Off ${item}` : `Turn On ${item}`}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .flex {
//           display: flex;
//         }

//         .flex-col {
//           flex-direction: column;
//         }

//         .grid {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 1rem;
//         }

//         button {
//           padding: 0.75rem 1.5rem;
//           font-size: 1.125rem;
//           font-weight: bold;
//           color: white;
//           border: none;
//           border-radius: 8px;
//           cursor: pointer;
//           transition: transform 0.2s, box-shadow 0.2s;
//         }

//         button:hover {
//           transform: scale(1.1);
//           box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
//         }

//         button:disabled {
//           opacity: 0.5;
//           cursor: not-allowed;
//         }

//         .absolute {
//           position: absolute;
//         }

//         .w-40 {
//           width: 10rem;
//         }

//         .h-auto {
//           height: auto;
//         }

//         .cursor-pointer {
//           cursor: pointer;
//         }

//         /* Responsive Design */
//         @media (max-width: 1024px) {
//           .grid {
//             grid-template-columns: repeat(2, 1fr); /* Tablet: 2 columns */
//           }
//         }

//         @media (max-width: 768px) {
//           .grid {
//             grid-template-columns: 1fr; /* Mobile: 1 column */
//           }
//         }

//         /* Phone (480px and below) */
//         @media (max-width: 480px) {
//           .hide-on-phone {
//             display: none;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }


//CODE 3
// 'use client';
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import Navbar from '../../Navbar';

// export default function Kitchen() {
//   const [actions, setActions] = useState({
//     fridgeOpen: false,
//     faucetOn: false,
//     stoveOn: false,
//     ovenOn: false,
//     ovenDoorOpen: false,
//     microwaveOn: false,
//     microwaveDoorOpen: false,
//     toasterOn: false,
//     breadInToaster: false,
//     blenderOn: false,
//     blenderLidOn: false,
//     kettleOn: false,
//     kettleFilled: false,
//     lightsOn: false,
//     sitting: false,
//   });

//   const [category, setCategory] = useState('Kitchen');
//   const [alphabetFilter, setAlphabetFilter] = useState('');

//   const toggleAction = (action) => {
//     setActions(prev => ({
//       ...prev,
//       [action]: !prev[action],
//     }));
//   };

//   const categories = ['Kitchen', 'Appliances', 'Furniture'];
//   const items = {
//     Kitchen: ['Fridge', 'Stove', 'Oven'],
//     Appliances: ['Faucet', 'Microwave', 'Blender', 'Toaster', 'Kettle'],
//     Furniture: ['Chair', 'Table'],
//   };

//   const filterItems = (category) => {
//     return items[category]?.filter(item => item.toLowerCase().startsWith(alphabetFilter.toLowerCase())) || [];
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="flex">
//         {/* Categories on the Left */}
//         <div className="flex flex-col space-y-4 p-6">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               className={`p-2 bg-blue-500 text-white rounded-lg ${category === cat ? 'bg-blue-700' : ''}`}
//               onClick={() => setCategory(cat)}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Whiteboard Area */}
//         <div className="flex flex-col items-center justify-center w-full max-w-6xl bg-white p-6 border rounded-lg shadow-md">
//           {/* Alphabet Filter */}
//           <div className="grid grid-cols-13 gap-2 mb-4 w-full">
//             {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => (
//               <button
//                 key={letter}
//                 className={`p-2 rounded-full ${alphabetFilter === letter ? 'bg-gray-400' : 'bg-gray-200'}`}
//                 onClick={() => setAlphabetFilter(letter)}
//               >
//                 {letter}
//               </button>
//             ))}
//           </div>

//           {/* Kitchen Scene */}
//           <div className="relative w-full max-w-6xl h-[600px] bg-white border rounded-lg shadow-md">
//             {filterItems(category).map((item, index) => {
//               const actionState = actions[`${item.toLowerCase()}On`];
//               return (
//                 <motion.img
//                   key={index}
//                   src={actionState ? `/${item.toLowerCase()}-on.png` : `/${item.toLowerCase()}-off.png`}
//                   alt={item}
//                   className="absolute top-10 left-10 w-40 h-auto kitchen-item"
//                   animate={{ x: actionState ? 20 : 0 }}
//                   onClick={() => toggleAction(`${item.toLowerCase()}On`)}
//                 />
//               );
//             })}
//           </div>

//           {/* Action Buttons */}
//           <div className="grid grid-cols-3 gap-4 mt-6 w-full max-w-4xl mx-auto overflow-auto z-10">
//             {filterItems(category).map((item, index) => (
//               <button
//                 key={index}
//                 onClick={() => toggleAction(`${item.toLowerCase()}On`)}
//                 className="p-2 bg-green-500 text-white rounded-lg"
//               >
//                 {actions[`${item.toLowerCase()}On`] ? `Turn Off ${item}` : `Turn On ${item}`}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .flex {
//           display: flex;
//         }

//         .flex-col {
//           flex-direction: column;
//         }

//         .grid {
//           display: grid;
//           gap: 1rem;
//         }

//         .grid-cols-13 {
//           grid-template-columns: repeat(13, 1fr);
//         }
        
//         .grid-cols-3{
//           grid-template-columns: repeat(3, 1fr);
//         }

//         button {
//           padding: 0.75rem 1.5rem;
//           font-size: 1.125rem;
//           font-weight: bold;
//           color: white;
//           border: none;
//           border-radius: 8px;
//           cursor: pointer;
//           transition: transform 0.2s, box-shadow 0.2s;
//         }

//         button:hover {
//           transform: scale(1.1);
//           box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
//         }

//         button:disabled {
//           opacity: 0.5;
//           cursor: not-allowed;
//         }

//         .absolute {
//           position: absolute;
//         }

//         .w-40 {
//           width: 10rem;
//         }

//         .h-auto {
//           height: auto;
//         }

//         .cursor-pointer {
//           cursor: pointer;
//         }

//         /* Responsive Design */
//         @media (max-width: 1024px) {
//           .grid {
//             grid-template-columns: repeat(2, 1fr); /* Tablet: 2 columns */
//           }
//         }

//         @media (max-width: 768px) {
//           .grid {
//             grid-template-columns: 1fr; /* Mobile: 1 column */
//           }
//         }

//         /* Phone (480px and below) */
//         @media (max-width: 480px) {
//           .hide-on-phone {
//             display: none;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

//CODE 4
// 'use client';
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import Navbar from '../../Navbar';

// export default function Kitchen() {
//   const [actions, setActions] = useState({
//     fridgeOpen: false,
//     faucetOn: false,
//     stoveOn: false,
//     ovenOn: false,
//     ovenDoorOpen: false,
//     microwaveOn: false,
//     microwaveDoorOpen: false,
//     toasterOn: false,
//     breadInToaster: false,
//     blenderOn: false,
//     blenderLidOn: false,
//     kettleOn: false,
//     kettleFilled: false,
//     lightsOn: false,
//     sitting: false,
//   });

//   const [category, setCategory] = useState('Kitchen');
//   const [alphabetFilter, setAlphabetFilter] = useState('A');

//   const toggleAction = (action) => {
//     setActions(prev => ({
//       ...prev,
//       [action]: !prev[action],
//     }));
//   };

//   // const categories = ['Kitchen', 'Appliances', 'Furniture'];
//   // const items = {
//   //   Kitchen: ['Fridge', 'Stove', 'Oven'],
//   //   Appliances: ['Faucet', 'Microwave', 'Blender', 'Toaster', 'Kettle'],
//   //   Furniture: ['Chair', 'Table'],
//   // };

//   const categories = ['Household Appliances & Electronics', 'Doors, Windows & Furniture', 'Clothing and Accessories', 'Kitchen & Food', 'Personal Actions & Movements', 'Vehicles & Travel', 'Objects & Tools'];
//   const items = {
//     'Household Appliances & Electronics':['TV','Computer']
    
   
//   };

//   const filterItems = (category) => {
//     return items[category]?.filter(item => item.toLowerCase().startsWith(alphabetFilter.toLowerCase())) || [];
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="flex items-center justify-center min-h-screen bg-gray-100">
//         {/* Categories on the Left */}
//         <div className="flex flex-col space-y-4 p-6 justify-start">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               className={`p-2 bg-blue-500 text-white rounded-lg ${category === cat ? 'bg-blue-700' : ''}`}
//               onClick={() => setCategory(cat)}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Whiteboard Area */}
//         <div className="flex flex-col items-center justify-center w-full max-w-6xl bg-white p-6 border rounded-lg shadow-md">
//           {/* Alphabet Filter */}
//           <div className="grid grid-cols-13 gap-2 mb-4 w-full">
//             {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => (
//               <button
//                 key={letter}
//                 className={`p-2 rounded-full ${alphabetFilter === letter ? 'bg-gray-400' : 'bg-gray-200'}`}
//                 onClick={() => setAlphabetFilter(letter)}
//               >
//                 {letter}
//               </button>
//             ))}
//           </div>

//           {/* Kitchen Scene */}
//           <div className="relative w-full max-w-6xl h-[600px] bg-white border rounded-lg shadow-md justify-start items-start">
//             {filterItems(category).map((item, index) => {
//               const actionState = actions[`${item.toLowerCase()}On`];
//               return (
//                 <motion.img
//                   key={index}
//                   src={actionState ? `/${item.toLowerCase()}-on.png` : `/${item.toLowerCase()}-off.png`}
//                   alt={item}
//                   className="absolute top-10 left-10 w-40 h-auto kitchen-item"
//                   animate={{ x: actionState ? 20 : 0 }}
//                   onClick={() => toggleAction(`${item.toLowerCase()}On`)}
//                 />
//               );
//             })}
//           </div>
       
//           {/* Action Buttons Section */}
//           <div className="action-buttons w-full max-w-4xl mt-6">
//               <div className="grid grid-cols-3 gap-4">
//                 {filterItems(category).map((item, index) => (
//                   <button
//                     key={index}
//                     onClick={() => toggleAction(`${item.toLowerCase()}On`)}
//                     className="p-2 bg-green-500 text-white rounded-lg"
//                   >
//                     {actions[`${item.toLowerCase()}On`] ? `Turn Off ${item}` : `Turn On ${item}`}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//       <style jsx>{`
//         .flex {
//           display: flex;
//         }

//         .flex-col {
//           flex-direction: column;
//         }

//         .grid {
//           display: grid;
//           gap: 1rem;
//         }

//         .grid-cols-13 {
//           grid-template-columns: repeat(13, 1fr);
//         }

//         button {
//           padding: 0.75rem 1.5rem;
//           font-size: 1.125rem;
//           font-weight: bold;
//           color: white;
//           border: none;
//           border-radius: 8px;
//           cursor: pointer;
//           transition: transform 0.2s, box-shadow 0.2s;
//         }

//         button:hover {
//           transform: scale(1.1);
//           box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
//         }

//         button:disabled {
//           opacity: 0.5;
//           cursor: not-allowed;
//         }

//         .absolute {
//           position: absolute;
//         }

//         .w-40 {
//           width: 10rem;
//         }

//         .h-auto {
//           height: auto;
//         }

//         .cursor-pointer {
//           cursor: pointer;
//         }

//         /* Responsive Design */
//         @media (max-width: 1024px) {
//           .grid {
//             grid-template-columns: repeat(2, 1fr); /* Tablet: 2 columns */
//           }
//         }

//         @media (max-width: 768px) {
//           .grid {
//             grid-template-columns: 1fr; /* Mobile: 1 column */
//           }
//         }

//         /* Phone (480px and below) */
//         @media (max-width: 480px) {
//           .hide-on-phone {
//             display: none;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }


//CODE 5
// 'use client';
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import Navbar from '../../Navbar';

// export default function Kitchen() {
//   const [actions, setActions] = useState({
//     // Household Appliances & Electronics (toggle)
//     airconditionerOn: false,
//     alarmOn: false,
//     blenderOn: false,
//     cameraOn: false,
//     coffeemakerOn: false,
//     computerOn: false,
//     dishwasherOn: false,
//     fanOn: false,
//     flashlightOn: false,
//     heaterOn: false,
//     kettleOn: false,
//     microwaveOn: false,
//     radioOn: false,
//     tvOn: false,
//     washingmachineOn: false,

//     // Doors, Windows & Furniture (openClose, lockUnlock, pullUpPullDown)
//     boxOpen: false,
//     curtainOpen: false,
//     doorOpen: false,
//     drawerOpen: false,
//     garagedoorOpen: false,
//     suitcaseOpen: false,
//     windowOpen: false,
//     doorLocked: false,
//     blindsUp: false,

//     // Clothing and Accessories (putOnTakeOff, pullUpPullDown)
//     glassesOn: false,
//     hatOn: false,
//     jacketOn: false,
//     jacketUp: false, // For pullUpPullDown (zipping up/down)
//     necklaceOn: false,
//     seatbeltOn: false,
//     shoesOn: false,

//     // Kitchen & Food (openClose, toggle)
//     fridgeOpen: false,
//     faucetOn: false,
//     ovenOn: false,

//     // Personal Actions & Movements (openClose, pickUpHangUp, sitStand, pickUpPutDown)
//     eyesOpen: false,
//     phonePickedUp: false,
//     sitting: false, // For sitStand (sit down/stand up)
//     bookPickedUp: false, // Assuming you meant 'pickUpPutDown' not 'pickUpPutDownd'

//     // Vehicles & Travel (startStop, plugInUnplug)
//     carStarted: false,
//     chargerPluggedIn: false,

//     // Objects & Tools (putTake)
//     carPut: false,
//     chargerPut: false,
//   });

//   const [category, setCategory] = useState('Household Appliances & Electronics');
//   const [alphabetFilter, setAlphabetFilter] = useState('A');

//   const toggleAction = (item, type) => {
//     setActions(prev => {
//       let key;
      
//       // Define the key based on the type of action
//       switch (type) {
//         case 'toggle': // turn on/off
//           key = item.toLowerCase().replace(/ /g, '') + 'On';
//           break;
//         case 'openClose': // open/close
//           key = item.toLowerCase().replace(/ /g, '') + 'Open';
//           break;
//         case 'putOnTakeOff': // put on/take off
//           key = item.toLowerCase().replace(/ /g, '') + 'On';
//           break;
//         case 'pullUpPullDown': // pull up/pull down
//           key = item.toLowerCase().replace(/ /g, '') + 'Up';
//           break;
//         case 'lockUnlock': // lock/unlock
//           key = item.toLowerCase().replace(/ /g, '') + 'Locked';
//           break;
//         case 'zipUnzip': // zip/unzip
//           key = item.toLowerCase().replace(/ /g, '') + 'Zipped';
//           break;
//         case 'sitStand': // sit down/stand up
//           key = 'sitting';
//           break;
//         case 'pickUpHangUp': // pick up/hang up
//           key = item.toLowerCase().replace(/ /g, '') + 'PickedUp';
//           break;
//         case 'pickUpPutDown': // pick up/put down
//           key = item.toLowerCase().replace(/ /g, '') + 'PickedUp';
//           break;
//         case 'startStop': // start/stop
//           key = item.toLowerCase().replace(/ /g, '') + 'Started';
//           break;
//         case 'plugInUnplug': // plug in/unplug
//           key = item.toLowerCase().replace(/ /g, '') + 'PluggedIn';
//           break;
//         case 'putTake': // put/take
//           key = item.toLowerCase().replace(/ /g, '') + 'Put';
//           break;
//         default:
//           return prev;
//       }
  
//       // Toggle the action state
//       return {
//         ...prev,
//         [key]: !prev[key]
//       };
//     });
//   };
  

//   const categories = [
//     'Household Appliances & Electronics',
//     'Doors, Windows & Furniture',
//     'Clothing and Accessories',
//     'Kitchen & Food',
//     'Personal Actions & Movements',
//     'Vehicles & Travel',
//     'Objects & Tools'
//   ];

//   const items = {
//     'Household Appliances & Electronics': [
//       { name: 'Air Conditioner', type: 'toggle' },
//       { name: 'Alarm', type: 'toggle' },
//       { name: 'Blender', type: 'toggle' },
//       { name: 'Camera', type: 'toggle' },
//       { name: 'Coffee Maker', type: 'toggle' },
//       { name: 'Computer', type: 'toggle' },
//       { name: 'Dishwasher', type: 'toggle' },
//       { name: 'Fan', type: 'toggle' },
//       { name: 'Flashlight', type: 'toggle' },
//       { name: 'Heater', type: 'toggle' },
//       { name: 'Kettle', type: 'toggle' },
//       { name: 'Microwave', type: 'toggle' },
//       { name: 'Radio', type: 'toggle' },
//       { name: 'TV', type: 'toggle' },
//       { name: 'Washing Machine', type: 'toggle' }
//     ],
//     'Doors, Windows & Furniture': [
//       { name: 'Box', type: 'openClose' },
//       { name: 'Curtain', type: 'openClose' },
//       { name: 'Door', type: 'openClose' },
//       { name: 'Drawer', type: 'openClose' },
//       { name: 'Garage Door', type: 'openClose' },
//       { name: 'Suitcase', type: 'openClose' },
//       { name: 'Window', type: 'openClose' },
//       { name: 'Door(lock)', type: 'lockUnlock' },
//       { name: 'Blinds', type: 'pullUpPullDown' },
//     ],
//     'Clothing and Accessories': [
//       { name: 'Glasses', type: 'putOnTakeOff' },
//       { name: 'Hat', type: 'putOnTakeOff' },
//       { name: 'Jacket(wear)', type: 'putOnTakeOff' },
//       { name: 'Necklace', type: 'putOnTakeOff' },
//       { name: 'Seatbelt', type: 'putOnTakeOff' },
//       { name: 'Shoes', type: 'putOnTakeOff' },
//       { name: 'Jacket(zip)', type: 'pullUpPullDown' }
//     ],
//     'Kitchen & Food': [
//       { name: 'Fridge', type: 'openClose' },
//       { name: 'Faucet', type: 'toggle' },
//       { name: 'Oven', type: 'toggle' }
//     ],
//     'Personal Actions & Movements': [
//       { name: 'Eyes', type: 'openClose' },
//       { name: 'Phone', type: 'pickUpHangUp' },
//       { name: 'Chair', type: 'sitStand' },
//       { name: 'Book', type: 'pickUpPutDown' }
//     ],
//     'Vehicles & Travel': [
//       { name: 'Car', type: 'startStop' },
//       { name: 'Charger', type: 'plugInUnplug' }
//     ],
//     'Objects & Tools': [
//       { name: 'Cup', type: 'putTake' },
//       { name: 'Paper', type: 'putTake' },
//       { name: 'Pen', type: 'putTake' },
//       { name: 'Phone', type: 'putTake' },
//       { name: 'Toy', type: 'putTake' },
//     ],

//   };
  

//   const filterItems = (category) => {
//     return items[category]?.filter(item => item.name.toLowerCase().startsWith(alphabetFilter.toLowerCase())) || [];
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="flex items-center justify-center min-h-screen bg-gray-100">
//         {/* Categories on the Left */}
//         <div className="flex flex-col space-y-4 p-6 justify-start">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               className={`p-2 bg-blue-500 text-white rounded-lg ${category === cat ? 'bg-blue-700' : ''}`}
//               onClick={() => setCategory(cat)}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Whiteboard Area */}
//         <div className="flex flex-col items-center justify-center w-full max-w-6xl bg-white p-6 border rounded-lg shadow-md">
//           {/* Alphabet Filter */}
//           <div className="grid grid-cols-13 gap-2 mb-4 w-full">
//             {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => (
//               <button
//                 key={letter}
//                 className={`p-2 rounded-full ${alphabetFilter === letter ? 'bg-gray-400' : 'bg-gray-200'}`}
//                 onClick={() => setAlphabetFilter(letter)}
//               >
//                 {letter}
//               </button>
//             ))}
//           </div>

//           {/* Scene Display */}
//           <div className="relative w-full max-w-6xl h-[600px] bg-white border rounded-lg shadow-md justify-start items-start">
//             {filterItems(category).map((item, index) => {
//               const actionState = actions[`${item.name.toLowerCase().replace(/ /g, '')}On`] || actions[`${item.name.toLowerCase().replace(/ /g, '')}Open`] || actions.sitting;
              
//               // Grid settings
//               const columns = 3;
//               const rows = 2;
//               const spacingX = 250; // Horizontal spacing between items
//               const spacingY = 220; // Vertical spacing between items
//               const marginX = 40;   // Left margin from the edge of the whiteboard
//               const marginY = 40;   // Top margin from the edge of the whiteboard

//               // Calculate position based on index
//               const col = index % columns;
//               const row = Math.floor(index / columns);
              
//               return (
//                 <motion.img
//                   key={index}
//                   src={actionState ? `/${item.name.toLowerCase().replace(/ /g, '')}-on.png` : `/${item.name.toLowerCase().replace(/ /g, '')}-off.png`}
//                   alt={item.name}
//                   className="absolute w-40 h-auto kitchen-item"
//                   style={{
//                     left: `${marginX + col * spacingX}px`,
//                     top: `${marginY + row * spacingY}px`,
//                   }}
//                   animate={{ x: actionState ? 20 : 0 }}
//                   onClick={() => toggleAction(item.name, item.type)}
//                 />
//               );
//             })}
//           </div>

//           {/* Action Buttons Section */}
//           <div className="action-buttons w-full max-w-4xl mt-6">
//             <div className="grid grid-cols-3 gap-4">
//               {filterItems(category).map((item, index) => {
//                 const keyBase = item.name.toLowerCase().replace(/ /g, '');
//                 const actionState = 
//                   actions[`${keyBase}On`] || 
//                   actions[`${keyBase}Open`] || 
//                   actions[`${keyBase}Up`] || 
//                   actions[`${keyBase}Locked`] || 
//                   actions[`${keyBase}Zipped`] || 
//                   actions[`${keyBase}PickedUp`] || 
//                   actions[`${keyBase}Started`] || 
//                   actions[`${keyBase}PluggedIn`] || 
//                   actions[`${keyBase}Put`] || 
//                   actions.sitting;  // For sit/stand actions

//                 let label;

//                 // Handle each action type
//                 switch (item.type) {
//                   case 'toggle':
//                     label = actionState ? `Turn Off ${item.name}` : `Turn On ${item.name}`;
//                     break;
//                   case 'openClose':
//                     label = actionState ? `Close ${item.name}` : `Open ${item.name}`;
//                     break;
//                   case 'putOnTakeOff':
//                     label = actionState ? `Take Off ${item.name}` : `Put On ${item.name}`;
//                     break;
//                   case 'pullUpPullDown':
//                     label = actionState ? `Pull Down ${item.name}` : `Pull Up ${item.name}`;
//                     break;
//                   case 'lockUnlock':
//                     label = actionState ? `Unlock ${item.name}` : `Lock ${item.name}`;
//                     break;
//                   case 'zipUnzip':
//                     label = actionState ? `Unzip ${item.name}` : `Zip Up ${item.name}`;
//                     break;
//                   case 'sitStand':
//                     label = actionState ? `Stand Up` : `Sit Down`;
//                     break;
//                   case 'pickUpHangUp':
//                     label = actionState ? `Hang Up ${item.name}` : `Pick Up ${item.name}`;
//                     break;
//                   case 'pickUpPutDown':
//                     label = actionState ? `Put Down ${item.name}` : `Pick Up ${item.name}`;
//                     break;
//                   case 'startStop':
//                     label = actionState ? `Stop ${item.name}` : `Start ${item.name}`;
//                     break;
//                   case 'plugInUnplug':
//                     label = actionState ? `Unplug ${item.name}` : `Plug In ${item.name}`;
//                     break;
//                   case 'putTake':
//                     label = actionState ? `Take ${item.name}` : `Put ${item.name}`;
//                     break;
//                   default:
//                     label = `${item.name}`; // Default label if no type matches
//                 }

//                 return (
//                   <button
//                     key={index}
//                     onClick={() => toggleAction(item.name, item.type)}
//                     className="p-2 bg-green-500 text-white rounded-lg"
//                   >
//                     {label}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>

//         </div>
//       </div>

//       <style jsx>{`
//         .flex {
//           display: flex;
//         }

//         .flex-col {
//           flex-direction: column;
//         }

//         .grid {
//           display: grid;
//           gap: 1rem;
//         }

//         .grid-cols-13 {
//           grid-template-columns: repeat(13, 1fr);
//         }

//         button {
//           padding: 0.75rem 1.5rem;
//           font-size: 1.125rem;
//           font-weight: bold;
//           color: white;
//           border: none;
//           border-radius: 8px;
//           cursor: pointer;
//           transition: transform 0.2s, box-shadow 0.2s;
//         }

//         button:hover {
//           transform: scale(1.1);
//           box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
//         }

//         button:disabled {
//           opacity: 0.5;
//           cursor: not-allowed;
//         }

//         .absolute {
//           position: absolute;
//         }

//         .w-40 {
//           width: 10rem;
//         }

//         .h-auto {
//           height: auto;
//         }

//         /* Responsive Design */
//         @media (max-width: 1024px) {
//           .grid {
//             grid-template-columns: repeat(2, 1fr);
//           }
//         }

//         @media (max-width: 768px) {
//           .grid {
//             grid-template-columns: 1fr;
//           }
//         }

//         @media (max-width: 480px) {
//           .hide-on-phone {
//             display: none;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }


//CODE 6 SAFETY MEASURE :)
// 'use client';
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import Navbar from '../../Navbar';

// export default function Kitchen() {
//   const [actions, setActions] = useState({
//     // Household Appliances & Electronics (toggle)
//     airconditionerOn: false,
//     alarmOn: false,
//     blenderOn: false,
//     cameraOn: false,
//     coffeemakerOn: false,
//     computerOn: false,
//     dishwasherOn: false,
//     fanOn: false,
//     flashlightOn: false,
//     heaterOn: false,
//     kettleOn: false,
//     microwaveOn: false,
//     radioOn: false,
//     tvOn: false,
//     washingmachineOn: false,

//     // Doors, Windows & Furniture (openClose, lockUnlock, pullUpPullDown)
//     boxOpen: false,
//     curtainOpen: false,
//     doorOpen: false,
//     drawerOpen: false,
//     garagedoorOpen: false,
//     suitcaseOpen: false,
//     windowOpen: false,
//     doorLocked: false,
//     blindsUp: false,

//     // Clothing and Accessories (putOnTakeOff, pullUpPullDown)
//     glassesOn: false,
//     hatOn: false,
//     jacketOn: false,
//     jacketUp: false, // For pullUpPullDown (zipping up/down)
//     necklaceOn: false,
//     seatbeltOn: false,
//     shoesOn: false,

//     // Kitchen & Food (openClose, toggle)
//     fridgeOpen: false,
//     faucetOn: false,
//     ovenOn: false,

//     // Personal Actions & Movements (openClose, pickUpHangUp, sitStand, pickUpPutDown)
//     eyesOpen: false,
//     phonePickedUp: false,
//     sitting: false, // For sitStand (sit down/stand up)
//     bookPickedUp: false, // Assuming you meant 'pickUpPutDown' not 'pickUpPutDownd'

//     // Vehicles & Travel (startStop, plugInUnplug)
//     carStarted: false,
//     chargerPluggedIn: false,

//     // Objects & Tools (putTake)
//     carPut: false,
//     chargerPut: false,
//   });

//   const [category, setCategory] = useState('Household Appliances & Electronics');
//   const [alphabetFilter, setAlphabetFilter] = useState('A');

//   const toggleAction = (item, type) => {
//     setActions(prev => {
//       let key;
      
//       // Define the key based on the type of action
//       switch (type) {
//         case 'toggle': // turn on/off
//           key = item.toLowerCase().replace(/ /g, '') + 'On';
//           break;
//         case 'openClose': // open/close
//           key = item.toLowerCase().replace(/ /g, '') + 'Open';
//           break;
//         case 'putOnTakeOff': // put on/take off
//           key = item.toLowerCase().replace(/ /g, '') + 'On';
//           break;
//         case 'pullUpPullDown': // pull up/pull down
//           key = item.toLowerCase().replace(/ /g, '') + 'Up';
//           break;
//         case 'lockUnlock': // lock/unlock
//           key = item.toLowerCase().replace(/ /g, '') + 'Locked';
//           break;
//         case 'zipUnzip': // zip/unzip
//           key = item.toLowerCase().replace(/ /g, '') + 'Zipped';
//           break;
//         case 'sitStand': // sit down/stand up
//           key = 'sitting';
//           break;
//         case 'pickUpHangUp': // pick up/hang up
//           key = item.toLowerCase().replace(/ /g, '') + 'PickedUp';
//           break;
//         case 'pickUpPutDown': // pick up/put down
//           key = item.toLowerCase().replace(/ /g, '') + 'PickedUp';
//           break;
//         case 'startStop': // start/stop
//           key = item.toLowerCase().replace(/ /g, '') + 'Started';
//           break;
//         case 'plugInUnplug': // plug in/unplug
//           key = item.toLowerCase().replace(/ /g, '') + 'PluggedIn';
//           break;
//         case 'putTake': // put/take
//           key = item.toLowerCase().replace(/ /g, '') + 'Put';
//           break;
//         default:
//           return prev;
//       }
  
//       // Toggle the action state
//       return {
//         ...prev,
//         [key]: !prev[key]
//       };
//     });
//   };
  

//   const categories = [
//     'Household Appliances & Electronics',
//     'Doors, Windows & Furniture',
//     'Clothing and Accessories',
//     'Kitchen & Food',
//     'Personal Actions & Movements',
//     'Vehicles & Travel',
//     'Objects & Tools'
//   ];

//   const items = {
//     'Household Appliances & Electronics': [
//       { name: 'Air Conditioner', type: 'toggle' },
//       { name: 'Alarm', type: 'toggle' },
//       { name: 'Blender', type: 'toggle' },
//       { name: 'Camera', type: 'toggle' },
//       { name: 'Coffee Maker', type: 'toggle' },
//       { name: 'Computer', type: 'toggle' },
//       { name: 'Dishwasher', type: 'toggle' },
//       { name: 'Fan', type: 'toggle' },
//       { name: 'Flashlight', type: 'toggle' },
//       { name: 'Heater', type: 'toggle' },
//       { name: 'Kettle', type: 'toggle' },
//       { name: 'Microwave', type: 'toggle' },
//       { name: 'Radio', type: 'toggle' },
//       { name: 'TV', type: 'toggle' },
//       { name: 'Washing Machine', type: 'toggle' }
//     ],
//     'Doors, Windows & Furniture': [
//       { name: 'Box', type: 'openClose' },
//       { name: 'Curtain', type: 'openClose' },
//       { name: 'Door', type: 'openClose' },
//       { name: 'Drawer', type: 'openClose' },
//       { name: 'Garage Door', type: 'openClose' },
//       { name: 'Suitcase', type: 'openClose' },
//       { name: 'Window', type: 'openClose' },
//       { name: 'Door(lock)', type: 'lockUnlock' },
//       { name: 'Blinds', type: 'pullUpPullDown' },
//     ],
//     'Clothing and Accessories': [
//       { name: 'Glasses', type: 'putOnTakeOff' },
//       { name: 'Hat', type: 'putOnTakeOff' },
//       { name: 'Jacket(wear)', type: 'putOnTakeOff' },
//       { name: 'Necklace', type: 'putOnTakeOff' },
//       { name: 'Seatbelt', type: 'putOnTakeOff' },
//       { name: 'Shoes', type: 'putOnTakeOff' },
//       { name: 'Jacket(zip)', type: 'pullUpPullDown' }
//     ],
//     'Kitchen & Food': [
//       { name: 'Fridge', type: 'openClose' },
//       { name: 'Faucet', type: 'toggle' },
//       { name: 'Oven', type: 'toggle' }
//     ],
//     'Personal Actions & Movements': [
//       { name: 'Eyes', type: 'openClose' },
//       { name: 'Phone', type: 'pickUpHangUp' },
//       { name: 'Chair', type: 'sitStand' },
//       { name: 'Book', type: 'pickUpPutDown' }
//     ],
//     'Vehicles & Travel': [
//       { name: 'Car', type: 'startStop' },
//       { name: 'Charger', type: 'plugInUnplug' }
//     ],
//     'Objects & Tools': [
//       { name: 'Cup', type: 'putTake' },
//       { name: 'Paper', type: 'putTake' },
//       { name: 'Pen', type: 'putTake' },
//       { name: 'Phone', type: 'putTake' },
//       { name: 'Toy', type: 'putTake' },
//     ],

//   };
  

//   const filterItems = (category) => {
//     return items[category]?.filter(item => item.name.toLowerCase().startsWith(alphabetFilter.toLowerCase())) || [];
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="flex items-center justify-center min-h-screen bg-gray-100">
//         {/* Categories on the Left */}
//         <div className="flex flex-col space-y-4 p-6 justify-start">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               className={`p-2 bg-blue-500 text-white rounded-lg ${category === cat ? 'bg-blue-700' : ''}`}
//               onClick={() => setCategory(cat)}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Whiteboard Area */}
//         <div className="flex flex-col items-center justify-center w-full max-w-6xl bg-white p-6 border rounded-lg shadow-md">
//           {/* Alphabet Filter */}
//           <div className="grid grid-cols-13 gap-2 mb-4 w-full">
//             {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => (
//               <button
//                 key={letter}
//                 className={`p-2 rounded-full ${alphabetFilter === letter ? 'bg-gray-400' : 'bg-gray-200'}`}
//                 onClick={() => setAlphabetFilter(letter)}
//               >
//                 {letter}
//               </button>
//             ))}
//           </div>

//           {/* Scene Display */}
//           <div className="relative w-full max-w-6xl h-[600px] bg-white border rounded-lg shadow-md justify-start items-start">
//             {filterItems(category).map((item, index) => {
//               const actionState = actions[`${item.name.toLowerCase().replace(/ /g, '')}On`] || actions[`${item.name.toLowerCase().replace(/ /g, '')}Open`] || actions.sitting;
              
//               // Grid settings
//               const columns = 3;
//               const rows = 2;
//               const spacingX = 250; // Horizontal spacing between items
//               const spacingY = 220; // Vertical spacing between items
//               const marginX = 40;   // Left margin from the edge of the whiteboard
//               const marginY = 40;   // Top margin from the edge of the whiteboard

//               // Calculate position based on index
//               const col = index % columns;
//               const row = Math.floor(index / columns);
              
//               return (
//                 <motion.img
//                   key={index}
//                   src={actionState ? `/${item.name.toLowerCase().replace(/ /g, '')}-on.png` : `/${item.name.toLowerCase().replace(/ /g, '')}-off.png`}
//                   alt={item.name}
//                   className="absolute w-40 h-auto kitchen-item"
//                   style={{
//                     left: `${marginX + col * spacingX}px`,
//                     top: `${marginY + row * spacingY}px`,
//                   }}
//                   animate={{ x: actionState ? 20 : 0 }}
//                   onClick={() => toggleAction(item.name, item.type)}
//                 />
//               );
//             })}
//           </div>

//           {/* Action Buttons Section */}
//           <div className="action-buttons w-full max-w-4xl mt-6">
//             <div className="grid grid-cols-3 gap-4">
//               {filterItems(category).map((item, index) => {
//                 const keyBase = item.name.toLowerCase().replace(/ /g, '');
//                 const actionState = 
//                   actions[`${keyBase}On`] || 
//                   actions[`${keyBase}Open`] || 
//                   actions[`${keyBase}Up`] || 
//                   actions[`${keyBase}Locked`] || 
//                   actions[`${keyBase}Zipped`] || 
//                   actions[`${keyBase}PickedUp`] || 
//                   actions[`${keyBase}Started`] || 
//                   actions[`${keyBase}PluggedIn`] || 
//                   actions[`${keyBase}Put`] || 
//                   actions.sitting;  // For sit/stand actions

//                 let label;

//                 // Handle each action type
//                 switch (item.type) {
//                   case 'toggle':
//                     label = actionState ? `Turn Off ${item.name}` : `Turn On ${item.name}`;
//                     break;
//                   case 'openClose':
//                     label = actionState ? `Close ${item.name}` : `Open ${item.name}`;
//                     break;
//                   case 'putOnTakeOff':
//                     label = actionState ? `Take Off ${item.name}` : `Put On ${item.name}`;
//                     break;
//                   case 'pullUpPullDown':
//                     label = actionState ? `Pull Down ${item.name}` : `Pull Up ${item.name}`;
//                     break;
//                   case 'lockUnlock':
//                     label = actionState ? `Unlock ${item.name}` : `Lock ${item.name}`;
//                     break;
//                   case 'zipUnzip':
//                     label = actionState ? `Unzip ${item.name}` : `Zip Up ${item.name}`;
//                     break;
//                   case 'sitStand':
//                     label = actionState ? `Stand Up` : `Sit Down`;
//                     break;
//                   case 'pickUpHangUp':
//                     label = actionState ? `Hang Up ${item.name}` : `Pick Up ${item.name}`;
//                     break;
//                   case 'pickUpPutDown':
//                     label = actionState ? `Put Down ${item.name}` : `Pick Up ${item.name}`;
//                     break;
//                   case 'startStop':
//                     label = actionState ? `Stop ${item.name}` : `Start ${item.name}`;
//                     break;
//                   case 'plugInUnplug':
//                     label = actionState ? `Unplug ${item.name}` : `Plug In ${item.name}`;
//                     break;
//                   case 'putTake':
//                     label = actionState ? `Take ${item.name}` : `Put ${item.name}`;
//                     break;
//                   default:
//                     label = `${item.name}`; // Default label if no type matches
//                 }

//                 return (
//                   <button
//                     key={index}
//                     onClick={() => toggleAction(item.name, item.type)}
//                     className="p-2 bg-green-500 text-white rounded-lg"
//                   >
//                     {label}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>

//         </div>
//       </div>

//       <style jsx>{`
//         .flex {
//           display: flex;
//         }

//         .flex-col {
//           flex-direction: column;
//         }

//         .grid {
//           display: grid;
//           gap: 1rem;
//         }

//         .grid-cols-13 {
//           grid-template-columns: repeat(13, 1fr);
//         }

//         button {
//           padding: 0.75rem 1.5rem;
//           font-size: 1.125rem;
//           font-weight: bold;
//           color: white;
//           border: none;
//           border-radius: 8px;
//           cursor: pointer;
//           transition: transform 0.2s, box-shadow 0.2s;
//         }

//         button:hover {
//           transform: scale(1.1);
//           box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
//         }

//         button:disabled {
//           opacity: 0.5;
//           cursor: not-allowed;
//         }

//         .absolute {
//           position: absolute;
//         }

//         .w-40 {
//           width: 10rem;
//         }

//         .h-auto {
//           height: auto;
//         }

//         /* Responsive Design */
//         @media (max-width: 1024px) {
//           .grid {
//             grid-template-columns: repeat(2, 1fr);
//           }
//         }

//         @media (max-width: 768px) {
//           .grid {
//             grid-template-columns: 1fr;
//           }
//         }

//         @media (max-width: 480px) {
//           .hide-on-phone {
//             display: none;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

//CODE 7 NO LETTERS
// 'use client';
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import Navbar from '../../Navbar';

// export default function Kitchen() {
//   const [actions, setActions] = useState({
//     // Household Appliances & Electronics (toggle)
//     airconditionerOn: false,
//     alarmOn: false,
//     blenderOn: false,
//     cameraOn: false,
//     coffeemakerOn: false,
//     computerOn: false,
//     dishwasherOn: false,
//     fanOn: false,
//     flashlightOn: false,
//     heaterOn: false,
//     kettleOn: false,
//     microwaveOn: false,
//     radioOn: false,
//     tvOn: false,
//     washingmachineOn: false,

//     // Doors, Windows & Furniture (openClose, lockUnlock, pullUpPullDown)
//     boxOpen: false,
//     curtainOpen: false,
//     doorOpen: false,
//     drawerOpen: false,
//     garagedoorOpen: false,
//     suitcaseOpen: false,
//     windowOpen: false,
//     doorLocked: false,
//     blindsUp: false,

//     // Clothing and Accessories (putOnTakeOff, pullUpPullDown)
//     glassesOn: false,
//     hatOn: false,
//     jacketOn: false,
//     jacketUp: false, // For pullUpPullDown (zipping up/down)
//     necklaceOn: false,
//     seatbeltOn: false,
//     shoesOn: false,

//     // Kitchen & Food (openClose, toggle)
//     fridgeOpen: false,
//     faucetOn: false,
//     ovenOn: false,

//     // Personal Actions & Movements (openClose, pickUpHangUp, sitStand, pickUpPutDown)
//     eyesOpen: false,
//     phonePickedUp: false,
//     sitting: false, // For sitStand (sit down/stand up)
//     bookPickedUp: false, // Assuming you meant 'pickUpPutDown' not 'pickUpPutDownd'

//     // Vehicles & Travel (startStop, plugInUnplug)
//     carStarted: false,
//     chargerPluggedIn: false,

//     // Objects & Tools (putTake)
//     carPut: false,
//     chargerPut: false,
//   });

//   const [category, setCategory] = useState('Household Appliances & Electronics');
//   const [alphabetFilter, setAlphabetFilter] = useState('A');

//   const toggleAction = (item, type) => {
//     setActions(prev => {
//       let key;
      
//       // Define the key based on the type of action
//       switch (type) {
//         case 'toggle': // turn on/off
//           key = item.toLowerCase().replace(/ /g, '') + 'On';
//           break;
//         case 'openClose': // open/close
//           key = item.toLowerCase().replace(/ /g, '') + 'Open';
//           break;
//         case 'putOnTakeOff': // put on/take off
//           key = item.toLowerCase().replace(/ /g, '') + 'On';
//           break;
//         case 'pullUpPullDown': // pull up/pull down
//           key = item.toLowerCase().replace(/ /g, '') + 'Up';
//           break;
//         case 'lockUnlock': // lock/unlock
//           key = item.toLowerCase().replace(/ /g, '') + 'Locked';
//           break;
//         case 'zipUnzip': // zip/unzip
//           key = item.toLowerCase().replace(/ /g, '') + 'Zipped';
//           break;
//         case 'sitStand': // sit down/stand up
//           key = 'sitting';
//           break;
//         case 'pickUpHangUp': // pick up/hang up
//           key = item.toLowerCase().replace(/ /g, '') + 'PickedUp';
//           break;
//         case 'pickUpPutDown': // pick up/put down
//           key = item.toLowerCase().replace(/ /g, '') + 'PickedUp';
//           break;
//         case 'startStop': // start/stop
//           key = item.toLowerCase().replace(/ /g, '') + 'Started';
//           break;
//         case 'plugInUnplug': // plug in/unplug
//           key = item.toLowerCase().replace(/ /g, '') + 'PluggedIn';
//           break;
//         case 'putTake': // put/take
//           key = item.toLowerCase().replace(/ /g, '') + 'Put';
//           break;
//         default:
//           return prev;
//       }
  
//       // Toggle the action state
//       return {
//         ...prev,
//         [key]: !prev[key]
//       };
//     });
//   };
  

//   const categories = [
//     'Household Appliances & Electronics',
//     'Doors, Windows & Furniture',
//     'Clothing and Accessories',
//     'Kitchen & Food',
//     'Personal Actions & Movements',
//     'Vehicles & Travel',
//     'Objects & Tools'
//   ];

//   const items = {
//     'Household Appliances & Electronics': [
//       { name: 'Air Conditioner', type: 'toggle' },
//       { name: 'Alarm', type: 'toggle' },
//       { name: 'Blender', type: 'toggle' },
//       { name: 'Camera', type: 'toggle' },
//       { name: 'Coffee Maker', type: 'toggle' },
//       { name: 'Computer', type: 'toggle' },
//       { name: 'Dishwasher', type: 'toggle' },
//       { name: 'Fan', type: 'toggle' },
//       { name: 'Flashlight', type: 'toggle' },
//       { name: 'Heater', type: 'toggle' },
//       { name: 'Kettle', type: 'toggle' },
//       { name: 'Microwave', type: 'toggle' },
//       { name: 'Radio', type: 'toggle' },
//       { name: 'TV', type: 'toggle' },
//       { name: 'Washing Machine', type: 'toggle' }
//     ],
//     'Doors, Windows & Furniture': [
//       { name: 'Box', type: 'openClose' },
//       { name: 'Curtain', type: 'openClose' },
//       { name: 'Door', type: 'openClose' },
//       { name: 'Drawer', type: 'openClose' },
//       { name: 'Garage Door', type: 'openClose' },
//       { name: 'Suitcase', type: 'openClose' },
//       { name: 'Window', type: 'openClose' },
//       { name: 'Door(lock)', type: 'lockUnlock' },
//       { name: 'Blinds', type: 'pullUpPullDown' },
//     ],
//     'Clothing and Accessories': [
//       { name: 'Glasses', type: 'putOnTakeOff' },
//       { name: 'Hat', type: 'putOnTakeOff' },
//       { name: 'Jacket(wear)', type: 'putOnTakeOff' },
//       { name: 'Necklace', type: 'putOnTakeOff' },
//       { name: 'Seatbelt', type: 'putOnTakeOff' },
//       { name: 'Shoes', type: 'putOnTakeOff' },
//       { name: 'Jacket(zip)', type: 'pullUpPullDown' }
//     ],
//     'Kitchen & Food': [
//       { name: 'Fridge', type: 'openClose' },
//       { name: 'Faucet', type: 'toggle' },
//       { name: 'Oven', type: 'toggle' }
//     ],
//     'Personal Actions & Movements': [
//       { name: 'Eyes', type: 'openClose' },
//       { name: 'Phone', type: 'pickUpHangUp' },
//       { name: 'Chair', type: 'sitStand' },
//       { name: 'Book', type: 'pickUpPutDown' }
//     ],
//     'Vehicles & Travel': [
//       { name: 'Car', type: 'startStop' },
//       { name: 'Charger', type: 'plugInUnplug' }
//     ],
//     'Objects & Tools': [
//       { name: 'Cup', type: 'putTake' },
//       { name: 'Paper', type: 'putTake' },
//       { name: 'Pen', type: 'putTake' },
//       { name: 'Phone', type: 'putTake' },
//       { name: 'Toy', type: 'putTake' },
//     ],

//   };
  

//   const filterItems = (category) => {
//     return items[category]?.filter(item => item.name.toLowerCase().startsWith(alphabetFilter.toLowerCase())) || [];
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="flex items-center justify-center min-h-screen bg-gray-100">
//         {/* Categories on the Left */}
//         <div className="flex flex-col space-y-4 p-6 justify-start">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               className={`p-2 bg-blue-500 text-white rounded-lg ${category === cat ? 'bg-blue-700' : ''}`}
//               onClick={() => setCategory(cat)}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Whiteboard Area */}
//         <div className="flex flex-col items-center justify-center w-full max-w-6xl bg-white p-6 border rounded-lg shadow-md">
//           {/* Alphabet Filter */}
//           <div className="grid grid-cols-13 gap-2 mb-4 w-full">
//             {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => (
//               <button
//                 key={letter}
//                 className={`p-2 rounded-full ${alphabetFilter === letter ? 'bg-gray-400' : 'bg-gray-200'}`}
//                 onClick={() => setAlphabetFilter(letter)}
//               >
//                 {letter}
//               </button>
//             ))}
//           </div>

//           {/* Scene Display */}
//           <div className="relative w-full max-w-6xl h-[600px] bg-white border rounded-lg shadow-md justify-start items-start">
//             {filterItems(category).map((item, index) => {
//               const actionState = actions[`${item.name.toLowerCase().replace(/ /g, '')}On`] || actions[`${item.name.toLowerCase().replace(/ /g, '')}Open`] || actions.sitting;
              
//               // Grid settings
//               const columns = 3;
//               const rows = 2;
//               const spacingX = 250; // Horizontal spacing between items
//               const spacingY = 220; // Vertical spacing between items
//               const marginX = 40;   // Left margin from the edge of the whiteboard
//               const marginY = 40;   // Top margin from the edge of the whiteboard

//               // Calculate position based on index
//               const col = index % columns;
//               const row = Math.floor(index / columns);
              
//               return (
//                 <motion.img
//                   key={index}
//                   src={actionState ? `/${item.name.toLowerCase().replace(/ /g, '')}-on.png` : `/${item.name.toLowerCase().replace(/ /g, '')}-off.png`}
//                   alt={item.name}
//                   className="absolute w-40 h-auto kitchen-item"
//                   style={{
//                     left: `${marginX + col * spacingX}px`,
//                     top: `${marginY + row * spacingY}px`,
//                   }}
//                   animate={{ x: actionState ? 20 : 0 }}
//                   onClick={() => toggleAction(item.name, item.type)}
//                 />
//               );
//             })}
//           </div>

//           {/* Action Buttons Section */}
//           <div className="action-buttons w-full max-w-4xl mt-6">
//             <div className="grid grid-cols-3 gap-4">
//               {filterItems(category).map((item, index) => {
//                 const keyBase = item.name.toLowerCase().replace(/ /g, '');
//                 const actionState = 
//                   actions[`${keyBase}On`] || 
//                   actions[`${keyBase}Open`] || 
//                   actions[`${keyBase}Up`] || 
//                   actions[`${keyBase}Locked`] || 
//                   actions[`${keyBase}Zipped`] || 
//                   actions[`${keyBase}PickedUp`] || 
//                   actions[`${keyBase}Started`] || 
//                   actions[`${keyBase}PluggedIn`] || 
//                   actions[`${keyBase}Put`] || 
//                   actions.sitting;  // For sit/stand actions

//                 let label;

//                 // Handle each action type
//                 switch (item.type) {
//                   case 'toggle':
//                     label = actionState ? `Turn Off ${item.name}` : `Turn On ${item.name}`;
//                     break;
//                   case 'openClose':
//                     label = actionState ? `Close ${item.name}` : `Open ${item.name}`;
//                     break;
//                   case 'putOnTakeOff':
//                     label = actionState ? `Take Off ${item.name}` : `Put On ${item.name}`;
//                     break;
//                   case 'pullUpPullDown':
//                     label = actionState ? `Pull Down ${item.name}` : `Pull Up ${item.name}`;
//                     break;
//                   case 'lockUnlock':
//                     label = actionState ? `Unlock ${item.name}` : `Lock ${item.name}`;
//                     break;
//                   case 'zipUnzip':
//                     label = actionState ? `Unzip ${item.name}` : `Zip Up ${item.name}`;
//                     break;
//                   case 'sitStand':
//                     label = actionState ? `Stand Up` : `Sit Down`;
//                     break;
//                   case 'pickUpHangUp':
//                     label = actionState ? `Hang Up ${item.name}` : `Pick Up ${item.name}`;
//                     break;
//                   case 'pickUpPutDown':
//                     label = actionState ? `Put Down ${item.name}` : `Pick Up ${item.name}`;
//                     break;
//                   case 'startStop':
//                     label = actionState ? `Stop ${item.name}` : `Start ${item.name}`;
//                     break;
//                   case 'plugInUnplug':
//                     label = actionState ? `Unplug ${item.name}` : `Plug In ${item.name}`;
//                     break;
//                   case 'putTake':
//                     label = actionState ? `Take ${item.name}` : `Put ${item.name}`;
//                     break;
//                   default:
//                     label = `${item.name}`; // Default label if no type matches
//                 }

//                 return (
//                   <button
//                     key={index}
//                     onClick={() => toggleAction(item.name, item.type)}
//                     className="p-2 bg-green-500 text-white rounded-lg"
//                   >
//                     {label}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>

//         </div>
//       </div>

//       <style jsx>{`
//         .flex {
//           display: flex;
//         }

//         .flex-col {
//           flex-direction: column;
//         }

//         .grid {
//           display: grid;
//           gap: 1rem;
//         }

//         .grid-cols-13 {
//           grid-template-columns: repeat(13, 1fr);
//         }

//         button {
//           padding: 0.75rem 1.5rem;
//           font-size: 1.125rem;
//           font-weight: bold;
//           color: white;
//           border: none;
//           border-radius: 8px;
//           cursor: pointer;
//           transition: transform 0.2s, box-shadow 0.2s;
//         }

//         button:hover {
//           transform: scale(1.1);
//           box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
//         }

//         button:disabled {
//           opacity: 0.5;
//           cursor: not-allowed;
//         }

//         .absolute {
//           position: absolute;
//         }

//         .w-40 {
//           width: 10rem;
//         }

//         .h-auto {
//           height: auto;
//         }

//         /* Responsive Design */
//         @media (max-width: 1024px) {
//           .grid {
//             grid-template-columns: repeat(2, 1fr);
//           }
//         }

//         @media (max-width: 768px) {
//           .grid {
//             grid-template-columns: 1fr;
//           }
//         }

//         @media (max-width: 480px) {
//           .hide-on-phone {
//             display: none;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

//CODE 8
// 'use client';
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import Navbar from '../../Navbar';

// export default function Kitchen() {
//   const [actions, setActions] = useState({
//     // Household Appliances & Electronics (toggle)
//     airconditionerOn: false,
//     alarmOn: false,
//     blenderOn: false,
//     cameraOn: false,
//     coffeemakerOn: false,
//     computerOn: false,
//     dishwasherOn: false,
//     fanOn: false,
//     flashlightOn: false,
//     heaterOn: false,
//     kettleOn: false,
//     microwaveOn: false,
//     radioOn: false,
//     tvOn: false,
//     washingmachineOn: false,

//     // Doors, Windows & Furniture (openClose, lockUnlock, pullUpPullDown)
//     boxOpen: false,
//     curtainOpen: false,
//     doorOpen: false,
//     drawerOpen: false,
//     garagedoorOpen: false,
//     suitcaseOpen: false,
//     windowOpen: false,
//     doorLocked: false,
//     blindsUp: false,

//     // Clothing and Accessories (putOnTakeOff, pullUpPullDown)
//     glassesOn: false,
//     hatOn: false,
//     jacketOn: false,
//     jacketUp: false, // For pullUpPullDown (zipping up/down)
//     necklaceOn: false,
//     seatbeltOn: false,
//     shoesOn: false,

//     // Kitchen & Food (openClose, toggle)
//     fridgeOpen: false,
//     faucetOn: false,
//     ovenOn: false,

//     // Personal Actions & Movements (openClose, pickUpHangUp, sitStand, pickUpPutDown)
//     eyesOpen: false,
//     phonePickedUp: false,
//     sitting: false, // For sitStand (sit down/stand up)
//     bookPickedUp: false, // Assuming you meant 'pickUpPutDown' not 'pickUpPutDownd'

//     // Vehicles & Travel (startStop, plugInUnplug)
//     carStarted: false,
//     chargerPluggedIn: false,

//     // Objects & Tools (putTake)
//     carPut: false,
//     chargerPut: false,
//   });

//   const [category, setCategory] = useState('Household Appliances & Electronics');
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 8;

//   const toggleAction = (item, type) => {
//     setActions(prev => {
//       let key;
//       // Define the key based on the type of action
//       switch (type) {
//         case 'toggle': // turn on/off
//           key = item.toLowerCase().replace(/ /g, '') + 'On';
//           break;
//         case 'openClose': // open/close
//           key = item.toLowerCase().replace(/ /g, '') + 'Open';
//           break;
//         case 'putOnTakeOff': // put on/take off
//           key = item.toLowerCase().replace(/ /g, '') + 'On';
//           break;
//         case 'pullUpPullDown': // pull up/pull down
//           key = item.toLowerCase().replace(/ /g, '') + 'Up';
//           break;
//         case 'lockUnlock': // lock/unlock
//           key = item.toLowerCase().replace(/ /g, '') + 'Locked';
//           break;
//         case 'zipUnzip': // zip/unzip
//           key = item.toLowerCase().replace(/ /g, '') + 'Zipped';
//           break;
//         case 'sitStand': // sit down/stand up
//           key = 'sitting';
//           break;
//         case 'pickUpHangUp': // pick up/hang up
//           key = item.toLowerCase().replace(/ /g, '') + 'PickedUp';
//           break;
//         case 'pickUpPutDown': // pick up/put down
//           key = item.toLowerCase().replace(/ /g, '') + 'PickedUp';
//           break;
//         case 'startStop': // start/stop
//           key = item.toLowerCase().replace(/ /g, '') + 'Started';
//           break;
//         case 'plugInUnplug': // plug in/unplug
//           key = item.toLowerCase().replace(/ /g, '') + 'PluggedIn';
//           break;
//         case 'putTake': // put/take
//           key = item.toLowerCase().replace(/ /g, '') + 'Put';
//           break;
//         default:
//           return prev;
//       }

//       // Toggle the action state
//       return {
//         ...prev,
//         [key]: !prev[key]
//       };
//     });
//   };

//   const categories = [
//     'Household Appliances & Electronics',
//     'Doors, Windows & Furniture',
//     'Clothing and Accessories',
//     'Kitchen & Food',
//     'Personal Actions & Movements',
//     'Vehicles & Travel',
//     'Objects & Tools'
//   ];

//   const items = {
//     'Household Appliances & Electronics': [
//       { name: 'Air Conditioner', type: 'toggle' },
//       { name: 'Alarm', type: 'toggle' },
//       { name: 'Blender', type: 'toggle' },
//       { name: 'Camera', type: 'toggle' },
//       { name: 'Coffee Maker', type: 'toggle' },
//       { name: 'Computer', type: 'toggle' },
//       { name: 'Dishwasher', type: 'toggle' },
//       { name: 'Fan', type: 'toggle' },
//       { name: 'Flashlight', type: 'toggle' },
//       { name: 'Heater', type: 'toggle' },
//       { name: 'Kettle', type: 'toggle' },
//       { name: 'Microwave', type: 'toggle' },
//       { name: 'Radio', type: 'toggle' },
//       { name: 'TV', type: 'toggle' },
//       { name: 'Washing Machine', type: 'toggle' }
//     ],
//     'Doors, Windows & Furniture': [
//       { name: 'Box', type: 'openClose' },
//       { name: 'Curtain', type: 'openClose' },
//       { name: 'Door', type: 'openClose' },
//       { name: 'Drawer', type: 'openClose' },
//       { name: 'Garage Door', type: 'openClose' },
//       { name: 'Suitcase', type: 'openClose' },
//       { name: 'Window', type: 'openClose' },
//       { name: 'Door(lock)', type: 'lockUnlock' },
//       { name: 'Blinds', type: 'pullUpPullDown' },
//     ],
//     'Clothing and Accessories': [
//       { name: 'Glasses', type: 'putOnTakeOff' },
//       { name: 'Hat', type: 'putOnTakeOff' },
//       { name: 'Jacket(wear)', type: 'putOnTakeOff' },
//       { name: 'Necklace', type: 'putOnTakeOff' },
//       { name: 'Seatbelt', type: 'putOnTakeOff' },
//       { name: 'Shoes', type: 'putOnTakeOff' },
//       { name: 'Jacket(zip)', type: 'pullUpPullDown' }
//     ],
//     'Kitchen & Food': [
//       { name: 'Fridge', type: 'openClose' },
//       { name: 'Faucet', type: 'toggle' },
//       { name: 'Oven', type: 'toggle' }
//     ],
//     'Personal Actions & Movements': [
//       { name: 'Eyes', type: 'openClose' },
//       { name: 'Phone', type: 'pickUpHangUp' },
//       { name: 'Chair', type: 'sitStand' },
//       { name: 'Book', type: 'pickUpPutDown' }
//     ],
//     'Vehicles & Travel': [
//       { name: 'Car', type: 'startStop' },
//       { name: 'Charger', type: 'plugInUnplug' }
//     ],
//     'Objects & Tools': [
//       { name: 'Cup', type: 'putTake' },
//       { name: 'Paper', type: 'putTake' },
//       { name: 'Pen', type: 'putTake' },
//       { name: 'Phone', type: 'putTake' },
//       { name: 'Toy', type: 'putTake' },
//     ],
//   };

//   const filterItems = (category) => {
//     return items[category]?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) || [];
//   };

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="flex items-center justify-center min-h-screen bg-gray-100">
//         {/* Categories on the Left */}
//         <div className="flex flex-col space-y-4 p-6 justify-start">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               className={`p-2 bg-blue-500 text-white rounded-lg ${category === cat ? 'bg-blue-700' : ''}`}
//               onClick={() => setCategory(cat)}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Whiteboard Area */}
//         <div className="flex flex-col items-center justify-center w-full max-w-6xl bg-white p-6 border rounded-lg shadow-md">
//           {/* Dots for Pages */}
//           <div className="flex space-x-2 mb-4">
//             {Array(Math.ceil(filterItems(category).length / itemsPerPage)).fill().map((_, index) => (
//               <button
//                 key={index}
//                 className={`p-2 rounded-full ${currentPage === index + 1 ? 'bg-black' : 'bg-gray-400'}`}
//                 onClick={() => handlePageChange(index + 1)}
//               ></button>
//             ))}
//           </div>

//           {/* Scene Display */}
//           <div className="relative w-full max-w-6xl h-[600px] bg-white border rounded-lg shadow-md justify-start items-start image-container">
//             {filterItems(category).map((item, index) => {
//               const actionState = actions[`${item.name.toLowerCase().replace(/ /g, '')}On`] || actions[`${item.name.toLowerCase().replace(/ /g, '')}Open`] || actions.sitting;
              
//               // Grid settings
//               const columns = 3;
//               const rows = 2;
//               const spacingX = 250; // Horizontal spacing between items
//               const spacingY = 220; // Vertical spacing between items
//               const marginX = 40;   // Left margin from the edge of the whiteboard
//               const marginY = 40;   // Top margin from the edge of the whiteboard

//               // Calculate position based on index
//               const col = index % columns;
//               const row = Math.floor(index / columns);
              
//               return (
//                 <motion.img
//                   key={index}
//                   src={actionState ? `/${item.name.toLowerCase().replace(/ /g, '')}-on.png` : `/${item.name.toLowerCase().replace(/ /g, '')}-off.png`}
//                   alt={item.name}
//                   className=" w-40 h-auto object-contain"
//                   style={{
//                     left: `${marginX + col * spacingX}px`,
//                     top: `${marginY + row * spacingY}px`,
//                   }}
//                   animate={{ x: actionState ? 20 : 0 }}
//                   onClick={() => toggleAction(item.name, item.type)}
//                 />
//               );
//             })}
//           </div>

//           {/* Action Buttons Section */}
//           <div className="action-buttons w-full max-w-4xl mt-6">
//             <div className="grid grid-cols-3 gap-4">
//               {filterItems(category).map((item, index) => {
//                 const keyBase = item.name.toLowerCase().replace(/ /g, '');
//                 const actionState = actions[`${keyBase}On`] || actions[`${keyBase}Open`] || actions.sitting;
//                 return (
//                   <button
//                     key={index}
//                     className="action-button py-2 px-4 bg-blue-500 text-white rounded-md shadow-md"
//                     onClick={() => toggleAction(item.name, item.type)}
//                   >
//                     {actionState ? `Turn off ${item.name}` : `Turn on ${item.name}`}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//       <style jsx>{`
//           .image-container {
//           position: relative;
//           display: flex;
//           flex-wrap: wrap;
//           justify-content: center;
//           align-items: center;
//           gap: 55px;
         
//         }
//           .image-container-item {
//           position: relative;
//           max-width: 20%  /* Control the max width of each image */
//           height: auto;    /* Maintain aspect ratio */
//           transition: transform 0.3s ease-in-out; /* Smooth transition for zooming */
//         }

//       `}
//       </style>
//     </div>
//   );
// }

//CODE 9  USEFUL
// 'use client';
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import Navbar from '../../Navbar';

// export default function Kitchen() {
//   const [actions, setActions] = useState({
//     airconditionerOn: false,
//     alarmOn: false,
//     blenderOn: false,
//     cameraOn: false,
//     coffeemakerOn: false,
//     computerOn: false,
//     dishwasherOn: false,
//     fanOn: false,
//     flashlightOn: false,
//     heaterOn: false,
//     kettleOn: false,
//     microwaveOn: false,
//     radioOn: false,
//     tvOn: false,
//     washingmachineOn: false,
//     boxOpen: false,
//     curtainOpen: false,
//     doorOpen: false,
//     drawerOpen: false,
//     garagedoorOpen: false,
//     suitcaseOpen: false,
//     windowOpen: false,
//     doorLocked: false,
//     blindsUp: false,
//     glassesOn: false,
//     hatOn: false,
//     jacketOn: false,
//     jacketUp: false,
//     necklaceOn: false,
//     seatbeltOn: false,
//     shoesOn: false,
//     fridgeOpen: false,
//     faucetOn: false,
//     ovenOn: false,
//     eyesOpen: false,
//     phonePickedUp: false,
//     sitting: false,
//     bookPickedUp: false,
//     carStarted: false,
//     chargerPluggedIn: false,
//     carPut: false,
//     chargerPut: false,
//   });

//   const [category, setCategory] = useState('Household Appliances & Electronics');

//   const toggleAction = (item, type) => {
//     setActions(prev => {
//       let key;
//       switch (type) {
//         case 'toggle':
//           key = item.toLowerCase().replace(/ /g, '') + 'On';
//           break;
//         case 'openClose':
//           key = item.toLowerCase().replace(/ /g, '') + 'Open';
//           break;
//         case 'putOnTakeOff':
//           key = item.toLowerCase().replace(/ /g, '') + 'On';
//           break;
//         case 'pullUpPullDown':
//           key = item.toLowerCase().replace(/ /g, '') + 'Up';
//           break;
//         case 'lockUnlock':
//           key = item.toLowerCase().replace(/ /g, '') + 'Locked';
//           break;
//         case 'zipUnzip':
//           key = item.toLowerCase().replace(/ /g, '') + 'Zipped';
//           break;
//         case 'sitStand':
//           key = 'sitting';
//           break;
//         case 'pickUpHangUp':
//         case 'pickUpPutDown':
//           key = item.toLowerCase().replace(/ /g, '') + 'PickedUp';
//           break;
//         case 'startStop':
//           key = item.toLowerCase().replace(/ /g, '') + 'Started';
//           break;
//         case 'plugInUnplug':
//           key = item.toLowerCase().replace(/ /g, '') + 'PluggedIn';
//           break;
//         case 'putTake':
//           key = item.toLowerCase().replace(/ /g, '') + 'Put';
//           break;
//         default:
//           return prev;
//       }
//       return { ...prev, [key]: !prev[key] };
//     });
//   };

//   const categories = [
//     'Household Appliances & Electronics',
//     'Doors, Windows & Furniture',
//     'Clothing and Accessories',
//     'Kitchen & Food',
//     'Personal Actions & Movements',
//     'Vehicles & Travel',
//     'Objects & Tools'
//   ];

//   const items = {
//     'Household Appliances & Electronics': [
//       { name: 'Air Conditioner', type: 'toggle' },
//       { name: 'Alarm', type: 'toggle' },
//       { name: 'Blender', type: 'toggle' },
//       { name: 'Camera', type: 'toggle' },
//       { name: 'Coffee Maker', type: 'toggle' },
//       { name: 'Computer', type: 'toggle' },
//       { name: 'Dishwasher', type: 'toggle' },
//       { name: 'Fan', type: 'toggle' },
//       { name: 'Flashlight', type: 'toggle' },
//       { name: 'Heater', type: 'toggle' },
//       { name: 'Kettle', type: 'toggle' },
//       { name: 'Microwave', type: 'toggle' },
//       { name: 'Radio', type: 'toggle' },
//       { name: 'TV', type: 'toggle' },
//       { name: 'Washing Machine', type: 'toggle' }
//     ],
//     'Doors, Windows & Furniture': [
//       { name: 'Box', type: 'openClose' },
//       { name: 'Curtain', type: 'openClose' },
//       { name: 'Door', type: 'openClose' },
//       { name: 'Drawer', type: 'openClose' },
//       { name: 'Garage Door', type: 'openClose' },
//       { name: 'Suitcase', type: 'openClose' },
//       { name: 'Window', type: 'openClose' },
//       { name: 'Door(lock)', type: 'lockUnlock' },
//       { name: 'Blinds', type: 'pullUpPullDown' },
//     ],
//     'Clothing and Accessories': [
//       { name: 'Glasses', type: 'putOnTakeOff' },
//       { name: 'Hat', type: 'putOnTakeOff' },
//       { name: 'Jacket(wear)', type: 'putOnTakeOff' },
//       { name: 'Necklace', type: 'putOnTakeOff' },
//       { name: 'Seatbelt', type: 'putOnTakeOff' },
//       { name: 'Shoes', type: 'putOnTakeOff' },
//       { name: 'Jacket(zip)', type: 'pullUpPullDown' }
//     ],
//     'Kitchen & Food': [
//       { name: 'Fridge', type: 'openClose' },
//       { name: 'Faucet', type: 'toggle' },
//       { name: 'Oven', type: 'toggle' }
//     ],
//     'Personal Actions & Movements': [
//       { name: 'Eyes', type: 'openClose' },
//       { name: 'Phone', type: 'pickUpHangUp' },
//       { name: 'Chair', type: 'sitStand' },
//       { name: 'Book', type: 'pickUpPutDown' }
//     ],
//     'Vehicles & Travel': [
//       { name: 'Car', type: 'startStop' },
//       { name: 'Charger', type: 'plugInUnplug' }
//     ],
//     'Objects & Tools': [
//       { name: 'Cup', type: 'putTake' },
//       { name: 'Paper', type: 'putTake' },
//       { name: 'Pen', type: 'putTake' },
//       { name: 'Phone', type: 'putTake' },
//       { name: 'Toy', type: 'putTake' },
//     ],
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="flex items-center justify-center min-h-screen bg-gray-100">
//         <div className="flex flex-col space-y-4 p-6">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               className={`p-2 bg-blue-500 text-white rounded-lg ${category === cat ? 'bg-blue-700' : ''}`}
//               onClick={() => setCategory(cat)}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         <div className="flex flex-col items-center justify-center w-full max-w-4xl bg-white p-6 border rounded-lg shadow-md">
//           <div className="grid grid-cols-3 gap-4 mt-6 w-full">
//             {items[category]?.map((item, index) => {
//               const actionState = actions[`${item.name.toLowerCase().replace(/ /g, '')}On`] || actions[`${item.name.toLowerCase().replace(/ /g, '')}Open`] || actions.sitting;
//               return (
//                 <motion.img
//                   key={index}
//                   src={actionState ? `/${item.name.toLowerCase().replace(/ /g, '')}-on.png` : `/${item.name.toLowerCase().replace(/ /g, '')}-off.png`}
//                   alt={item.name}
//                   className="w-32 h-auto object-contain"
//                   onClick={() => toggleAction(item.name, item.type)}
//                 />
//               );
//             })}
//           </div>

//           <div className="grid grid-cols-3 gap-4 mt-6 w-full max-w-4xl">
//             {items[category]?.map((item, index) => {
//               const keyBase = item.name.toLowerCase().replace(/ /g, '');
//               const actionState = actions[`${keyBase}On`] || actions[`${keyBase}Open`] || actions.sitting;
//               return (
//                 <button
//                   key={index}
//                   className="py-2 px-4 bg-blue-500 text-white rounded-md shadow-md"
//                   onClick={() => toggleAction(item.name, item.type)}
//                 >
//                   {actionState ? `Turn off ${item.name}` : `Turn on ${item.name}`}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


//CODE 10
// 'use client';
// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Navbar from '../../Navbar';

// export default function Kitchen() {
//   const [actions, setActions] = useState({
//     airconditionerOn: false,
//     alarmOn: false,
//     blenderOn: false,
//     cameraOn: false,
//     coffeemakerOn: false,
//     computerOn: false,
//     cupPutPick: false,
//     dishwasherOn: false,
//     fanOn: false,
//     flashlightOn: false,
//     heaterOn: false,
//     kettleOn: false,
//     microwaveOn: false,
//     radioOn: false,
//     tvOn: false,
//     washingmachineOn: false,
//     boxOpen: false,
//     curtainOpen: false,
//     doorOpen: false,
//     drawerOpen: false,
//     garagedoorOpen: false,
//     suitcaseOpen: false,
//     windowOpen: false,
//     doorLocked: false,
//     blindsUp: false,
//     glassesOn: false,
//     hatOn: false,
//     jacketOn: false,
//     jacketUp: false,
//     necklaceOn: false,
//     seatbeltOn: false,
//     shoesOn: false,
//     fridgeOpen: false,
//     faucetOn: false,
//     ovenOn: false,
//     eyesOpen: false,
//     phonePickUp: false,
//     sitting: false,
//     bookPick: false,
//     carStarted: false,
//     chargerPluggedIn: false,
//     carPut: false,
//     chargerPut: false,
//     chairSit: false,
//   });

//   const [category, setCategory] = useState('Household Appliances & Electronics');
//   const [currentPage, setCurrentPage] = useState(0);
//   const imagesPerPage = 6;

//   const toggleAction = (item, type) => {
//     setActions(prev => {
//       let key;
//       switch (type) {
//         case 'toggle':
//           key = item.toLowerCase().replace(/ /g, '') + 'On';
//           break;
//         case 'openClose':
//           key = item.toLowerCase().replace(/ /g, '') + 'Open';
//           break;
//         case 'putOnTakeOff':
//           key = item.toLowerCase().replace(/ /g, '') + 'PutOn';
//           break;
//         case 'pullUpPullDown':
//           key = item.toLowerCase().replace(/ /g, '') + 'PullUp';
//           break;
//         case 'lockUnlock':
//           key = item.toLowerCase().replace(/ /g, '') + 'Locked';
//           break;
//         case 'zipUnzip':
//           key = item.toLowerCase().replace(/ /g, '') + 'Zipped';
//           break;
//         case 'sitStand':
//           key = item.toLowerCase().replace(/ /g, '') + 'Sit';
//         case 'pickUpHangUp':
//           key = item.toLowerCase().replace(/ /g, '') + 'PickUp';
//           break;
//         case 'pickUpPutDown':
//           key = item.toLowerCase().replace(/ /g, '') + 'PickUp';
//           break;
//         case 'startStop':
//           key = item.toLowerCase().replace(/ /g, '') + 'Started';
//           break;
//         case 'plugInUnplug':
//           key = item.toLowerCase().replace(/ /g, '') + 'PluggedIn';
//           break;
//         case 'putPick':
//           key = item.toLowerCase().replace(/ /g, '') + 'PutPick';
//           break;
//         case 'fillEmpty':
//           key = item.toLowerCase().replace(/ /g, '') + 'Fill';
//           break;
//         default:
//           return prev;
//       }
//       return { ...prev, [key]: !prev[key] };
//     });
//   };

//   const categories = [
//     'Household Appliances & Electronics',
//     'Doors, Windows & Furniture',
//     'Clothing and Accessories',
//     'Kitchen & Food',
//     'Personal Actions & Movements',
//     'Vehicles & Travel',
//     'Objects & Tools'
//   ];

//   const items = {
//     'Household Appliances & Electronics': [
//       { name: 'Air Conditioner', type: 'toggle' },
//       { name: 'Alarm', type: 'toggle' },
//       { name: 'Blender', type: 'toggle' },
//       { name: 'Camera', type: 'toggle' },
//       { name: 'Coffee Maker', type: 'toggle' },
//       { name: 'Computer', type: 'toggle' },
//       { name: 'Dishwasher', type: 'toggle' },
//       { name: 'Fan', type: 'toggle' },
//       { name: 'Flashlight', type: 'toggle' },
//       { name: 'Heater', type: 'toggle' },
//       { name: 'Kettle', type: 'fillEmpty' },
//       { name: 'Microwave', type: 'toggle' },
//       { name: 'Radio', type: 'toggle' },
//       { name: 'TV', type: 'toggle' },
//       { name: 'Washing Machine', type: 'toggle' }
//     ],
//     'Doors, Windows & Furniture': [
//       { name: 'Box', type: 'openClose' },
//       { name: 'Curtain', type: 'openClose' },
//       { name: 'Door', type: 'openClose' },
//       { name: 'Drawer', type: 'openClose' },
//       { name: 'Garage Door', type: 'openClose' },
//       { name: 'Suitcase', type: 'openClose' },
//       { name: 'Window', type: 'openClose' },
//       { name: 'Door(lock)', type: 'lockUnlock' },
//       { name: 'Blinds', type: 'pullUpPullDown' },
//     ],
//     'Clothing and Accessories': [
//       { name: 'Glasses', type: 'putOnTakeOff' },
//       { name: 'Hat', type: 'putOnTakeOff' },
//       { name: 'Jacket(wear)', type: 'putOnTakeOff' },
//       { name: 'Necklace', type: 'putOnTakeOff' },
//       { name: 'Seatbelt', type: 'putOnTakeOff' },
//       { name: 'Shoes', type: 'putOnTakeOff' },
//       { name: 'Jacket(zip)', type: 'pullUpPullDown' }
//     ],
//     'Kitchen & Food': [
//       { name: 'Fridge', type: 'openClose' },
//       { name: 'Faucet', type: 'toggle' },
//       { name: 'Oven', type: 'openClose' }
//     ],
//     'Personal Actions & Movements': [
//       { name: 'Eyes', type: 'openClose' },
//       { name: 'Phone', type: 'pickUpHangUp' },
//       { name: 'Chair', type: 'sitStand' },
//       { name: 'Book', type: 'pickUpPutDown' }
//     ],
//     'Vehicles & Travel': [
//       { name: 'Car', type: 'startStop' },
//       { name: 'Charger', type: 'plugInUnplug' }
//     ],
//     'Objects & Tools': [
//       { name: 'Cup', type: 'putPick' },
//       // { name: 'Paper', type: 'putPick' },
//       // { name: 'Pen', type: 'putPick' },
//       // { name: 'Toy', type: 'putPick' },
//     ],

//   };

//   const currentItems = items[category]?.slice(currentPage * imagesPerPage, (currentPage + 1) * imagesPerPage) || [];
//   const totalPages = Math.ceil(items[category]?.length / imagesPerPage);

//   // Listen for keyboard events
//   useEffect(() => {
//     const handleKeyPress = (event) => {
//       if (event.key === 'ArrowLeft') {
//         setCurrentPage((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
//       } else if (event.key === 'ArrowRight') {
//         setCurrentPage((prev) => (prev + 1 < totalPages ? prev + 1 : prev));
//       }
//     };

//     window.addEventListener('keydown', handleKeyPress);

//     // Cleanup event listener
//     return () => {
//       window.removeEventListener('keydown', handleKeyPress);
//     };
//   }, [totalPages]);

//   return (
//     <div>
//       <Navbar />
//       <div className="flex items-center justify-center min-h-screen bg-gray-100">
//         <div className="flex flex-col space-y-4 p-6">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               className={`p-2 bg-blue-500 text-white rounded-lg ${category === cat ? 'bg-blue-700' : ''}`}
//               onClick={() => {
//                 setCategory(cat);
//                 setCurrentPage(0); // Reset page when changing category
//               }}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* <div className="flex flex-col items-center justify-center w-full max-w-4xl bg-white p-6 border rounded-lg shadow-md"> */}
//         <div className="flex flex-col items-center justify-center w-[800px] h-[600px] bg-white p-6 border rounded-lg shadow-md">
//           <div className="grid grid-cols-3 gap-4 mt-6 w-full h-[500px] justify-items-center place-items-center">
//             {currentItems.map((item, index) => {
//               const keyBase = item.name.toLowerCase().replace(/ /g, '');
//               // const actionState = actions[`${keyBase}On`] || actions[`${keyBase}Open`] || actions[`${keyBase}PutDown`] || actions[`${keyBase}Fill`] || actions[`${keyBase}PutOn`] || actions.sitting;
//               const actionState = actions[`${keyBase}On`]           // toggle
//                   || actions[`${keyBase}Open`]                        // openClose
//                   || actions[`${keyBase}PutOn`]                       // putOnTakeOff
//                   || actions[`${keyBase}PullUp`]                      // pullUpPullDown
//                   || actions[`${keyBase}Locked`]                      // lockUnlock
//                   || actions[`${keyBase}Zipped`]                      // zipUnzip
//                   || actions.sitting                                  // sitStand
//                   || actions[`${keyBase}PickUp`]                  // pickUpHangUp //pickUpPutDown 
//                   || actions[`${keyBase}Started`]                     // startStop
//                   || actions[`${keyBase}PluggedIn`]                   // plugInUnplug
//                   || actions[`${keyBase}PutTake`]                      // putPick
//                   || actions[`${keyBase}Fill`]
//                   || actions[`${keyBase}PutPick`];                       // fillEmpty

//               return (
//                 <motion.img
//                   key={index}
//                   src={actionState ? `/${keyBase}-on.png` : `/${keyBase}-off.png`}
//                   alt={item.name}
//                   // className="w-32 h-auto object-contain"
//                   className="w-[150px] h-[150px] object-contain"
//                   onClick={() => toggleAction(item.name, item.type)}
//                 />
//               );
//             })}
//           </div>

//           <div className="flex justify-center mt-4 space-x-2">
//             {Array.from({ length: totalPages }, (_, i) => (
//               <button
//                 key={i}
//                 className={`w-3 h-3 rounded-full ${currentPage === i ? 'bg-blue-500' : 'bg-gray-300'}`}
//                 onClick={() => setCurrentPage(i)}
//               />
//             ))}
//           </div>

//           {/* Action Buttons */}
//           <div className="grid grid-cols-3 gap-4 mt-6 w-full max-w-4xl">
//             {currentItems.map((item, index) => {
//               const keyBase = item.name.toLowerCase().replace(/ /g, '');
//               // const actionState = actions[`${keyBase}On`] || actions[`${keyBase}Open`] || actions[`${keyBase}Put`] || actions[`${keyBase}Fill`] || actions[`${keyBase}PutOn`] || actions.sitting;
//               const actionState = actions[`${keyBase}On`]           // toggle
//                   || actions[`${keyBase}Open`]                        // openClose
//                   || actions[`${keyBase}PutOn`]                       // putOnTakeOff
//                   || actions[`${keyBase}PullUp`]                      // pullUpPullDown
//                   || actions[`${keyBase}Locked`]                      // lockUnlock
//                   || actions[`${keyBase}Zipped`]                      // zipUnzip
//                   || actions.sitting                                  // sitStand
//                   || actions[`${keyBase}PickUp`]                  // pickUpHangUp //PickUpPutDown
//                   || actions[`${keyBase}Started`]                     // startStop
//                   || actions[`${keyBase}PluggedIn`]                   // plugInUnplug
//                   || actions[`${keyBase}PutTake`]                      // putPick
//                   || actions[`${keyBase}PutPick`]
//                   || actions[`${keyBase}Fill`];                       // fillEmpty
              
//               // Determine action label based on action type
//               let actionLabel = '';
//               switch (item.type) {
//                 case 'toggle':
//                   actionLabel = actionState ? `Turn off ${item.name}` : `Turn on ${item.name}`;
//                   break;
//                 case 'openClose':
//                   actionLabel = actionState ? `Close ${item.name}` : `Open ${item.name}`;
//                   break;
//                 case 'putOnTakeOff':
//                   actionLabel = actionState ? `Take off ${item.name}` : `Put on ${item.name}`;
//                   break;
//                 case 'pullUpPullDown':
//                   actionLabel = actionState ? `Pull down ${item.name}` : `Pull up ${item.name}`;
//                   break;
//                 case 'lockUnlock':
//                   actionLabel = actionState ? `Unlock ${item.name}` : `Lock ${item.name}`;
//                   break;
//                 case 'zipUnzip':
//                   actionLabel = actionState ? `Unzip ${item.name}` : `Zip up ${item.name}`;
//                   break;
//                 case 'sitStand':
//                   actionLabel = actionState ? `Stand up from ${item.name}` : `Sit on ${item.name}`;
//                   break;
//                 case 'pickUpHangUp':
//                   actionLabel = actionState ? `Pick Up ${item.name}` : `Hang up ${item.name}`;
//                   break;
//                 case 'pickUpPutDown':
//                   actionLabel = actionState ? `Put down ${item.name}` : `Pick up ${item.name}`;
//                   break;
//                 case 'startStop':
//                   actionLabel = actionState ? `Stop ${item.name}` : `Start ${item.name}`;
//                   break;
//                 case 'plugInUnplug':
//                   actionLabel = actionState ? `Unplug ${item.name}` : `Plug in ${item.name}`;
//                   break;
//                 case 'putTake':
//                   actionLabel = actionState ? `Put ${item.name}` : `Take ${item.name}`;
//                   break;
//                 case 'fillEmpty':
//                   actionLabel = actionState ? `Fill ${item.name}` : `Empty ${item.name}`;
//                   break;
//                 case 'putPick':
//                   actionLabel = actionState ? `Put Down ${item.name}` : `Pick Up ${item.name}`;
//                   break;
//                 default:
//                   actionLabel = 'Unknown Action';
//                   break;
//               }
              
//               return (
//                 <button
//                   key={index}
//                   // className="py-2 px-4 bg-blue-500 text-white rounded-md shadow-md"
//                   className="px-4 py-2 bg-blue-500 text-white rounded-lg text-xs sm:text-sm md:text-base"
//                   onClick={() => toggleAction(item.name, item.type)}
//                 >
//                   {actionLabel}
//                 </button>
//               );
//             })}

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

//CODE 11
'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../Navbar';

export default function Kitchen() {
  const [actions, setActions] = useState({
    airconditionerOn: false,
    alarmOn: false,
    blenderOn: false,
    cameraOn: false,
    coffeemakerOn: false,
    computerOn: false,
    cupPutPick: false,
    dishwasherOn: false,
    fanOn: false,
    flashlightOn: false,
    heaterOn: false,
    kettleOn: false,
    microwaveOn: false,
    radioOn: false,
    tvOn: false,
    washingmachineOn: false,
    boxOpen: false,
    curtainOpen: false,
    doorOpen: false,
    drawerOpen: false,
    garagedoorOpen: false,
    suitcaseOpen: false,
    windowOpen: false,
    doorLocked: false,
    blindsUp: false,
    glassesOn: false,
    hatOn: false,
    jacketOn: false,
    jacketUp: false,
    necklaceOn: false,
    seatbeltOn: false,
    shoesOn: false,
    fridgeOpen: false,
    faucetOn: false,
    ovenOn: false,
    eyesOpen: false,
    phonePickUp: false,
    sitting: false,
    bookPick: false,
    carStarted: false,
    chargerPluggedIn: false,
    carPut: false,
    chargerPut: false,
    chairSit: false,
    lampOn: false,
    vacuumPluggedIn: false,
    microphoneMute: false,
    tableFold: false,
    couchCover: false,
    attachCover: false,
    armchairMoveLeft:false,
    bedAssemble: false,
    trunkOpen: false,
    doorbellPress: false,
    shoelacesTie: false,
    coatHangUp: false,
    shirtButton: false,
    socksPutOn: false,
    sleevesRollUp: false,
    glovesWear: false,
    eggsStir: false,
    milkPour: false,
    carrotChop: false,
    breadSlice: false,
    applePeel: false,
    eggFry: false,
    runOn: false,
    jumpOn: false,
    lyingOn: false,
    raiseOn: false,
    whisperOn: false,
    biteOn: false,
    carGetIn: false,
    vanLoad: false,
    headlightsOn: false,
    luggagePack: false,
    nailHit: false,
    wallPaint: false,
    holeDig: false,
    textHighlight: false,
    noteWrite: false,
    sketchDraw: false,
    shelfAttach: false,
    eggsStir: false,
    milkPour: false,
    carrotChop: false,
    bedLie: false,
    runOn: false,
    jumpOn: false,
    carGetOn: false,
    vanLoad: false,
    wallPaint: false,
    holeDig: false,
    textHighlight: false,
    noteWrite: false,
  });

  const [category, setCategory] = useState('Household Appliances & Electronics');
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 6;

  const toggleAction = (item, type) => {
    setActions(prev => {
      let key;
      switch (type) {
        case 'toggle':
          key = item.toLowerCase().replace(/ /g, '') + 'On';
          break;
        case 'openClose':
          key = item.toLowerCase().replace(/ /g, '') + 'Open';
          break;
        case 'putOnTakeOff':
          key = item.toLowerCase().replace(/ /g, '') + 'PutOn';
          break;
        case 'pullUpPullDown':
          key = item.toLowerCase().replace(/ /g, '') + 'PullUp';
          break;
        case 'lockUnlock':
          key = item.toLowerCase().replace(/ /g, '') + 'Locked';
          break;
        case 'zipUnzip':
          key = item.toLowerCase().replace(/ /g, '') + 'Zipped';
          break;
        case 'sitStand':
          key = item.toLowerCase().replace(/ /g, '') + 'Sit';
        case 'pickUpHangUp':
          key = item.toLowerCase().replace(/ /g, '') + 'PickUp';
          break;
        case 'pickUpPutDown':
          key = item.toLowerCase().replace(/ /g, '') + 'PickUp';
          break;
        case 'startStop':
          key = item.toLowerCase().replace(/ /g, '') + 'Started';
          break;
        case 'plugInUnplug':
          key = item.toLowerCase().replace(/ /g, '') + 'PluggedIn';
          break;
        case 'putPick':
          key = item.toLowerCase().replace(/ /g, '') + 'PutPick';
          break;
        case 'fillEmpty':
          key = item.toLowerCase().replace(/ /g, '') + 'Fill';
          break;
        case 'muteUnmute':
          key = item.toLowerCase().replace(/ /g, '') + 'Mute';
          break;
        case 'scrollUpScrollDown':
          key = item.toLowerCase().replace(/ /g, '') + 'ScrollUp';
          break;
        case 'foldUnfold':
          key = item.toLowerCase().replace(/ /g, '') + 'Fold';
          break;
        case 'coverUncover':
          key = item.toLowerCase().replace(/ /g, '') + 'Cover';
          break;
        case 'attachDetach':
          key = item.toLowerCase().replace(/ /g, '') + 'Attach';
          break;  
        case 'tieUntie':
          key = item.toLowerCase().replace(/ /g, '') + 'Tie';
          break;
        case 'hangUpTakeDown':
          key = item.toLowerCase().replace(/ /g, '') + 'HangUp';
          break;
        case 'buttonUnbutton':
          key = item.toLowerCase().replace(/ /g, '') + 'Button';
          break;
        case 'stirStopStirring':
          key = item.toLowerCase().replace(/ /g, '') + 'Stir';
          break;
        case 'pourStopPouring':
          key = item.toLowerCase().replace(/ /g, '') + 'Pour';
          break;
        case 'chopStopChopping':
          key = item.toLowerCase().replace(/ /g, '') + 'Chop';
          break;
        case 'runStopRunning':
          key = item.toLowerCase().replace(/ /g, '') + 'Stir';
          break;
        case 'jumpLand':
          key = item.toLowerCase().replace(/ /g, '') + 'Pour';
          break;
        case 'lieDownGetUp':
          key = item.toLowerCase().replace(/ /g, '') + 'Chop';
          break;
        case 'getInGetOut':
          key = item.toLowerCase().replace(/ /g, '') + 'GetIn';
          break;
        case 'packUnpack':
          key = item.toLowerCase().replace(/ /g, '') + 'Load';
        case 'hitStopHitting':
          key = item.toLowerCase().replace(/ /g, '') + 'Hit';
          break;
        case 'loadUnload':
          key = item.toLowerCase().replace(/ /g, '') + 'Load';
          break;
        case 'paintStopPainting':
          key = item.toLowerCase().replace(/ /g, '') + 'Paint';
          break;
        case 'digStopDigging':
          key = item.toLowerCase().replace(/ /g, '') + 'Dig';
          break;
        case 'highlightEraseHighlight':
          key = item.toLowerCase().replace(/ /g, '') + 'Highlight';
          break;
        case 'writeStopWriting':
          key = item.toLowerCase().replace(/ /g, '') + 'Write';
          break;
        default:
          return prev;
      }
      return { ...prev, [key]: !prev[key] };
    });
  };

  const categories = [
    'Household Appliances & Electronics',
    'Doors, Windows & Furniture',
    'Clothing and Accessories',
    'Kitchen & Food',
    'Personal Actions & Movements',
    'Vehicles & Travel',
    'Objects & Tools'
  ];

  const items = {
    'Household Appliances & Electronics': [
      { name: 'Air Conditioner', type: 'toggle' },
      { name: 'Alarm', type: 'toggle' },
      { name: 'Blender', type: 'toggle' },
      { name: 'Camera', type: 'toggle' },
      { name: 'Coffee Maker', type: 'toggle' },
      { name: 'Computer', type: 'toggle' },
      { name: 'Dishwasher', type: 'toggle' },
      { name: 'Fan', type: 'toggle' },
      { name: 'Flashlight', type: 'toggle' },
      { name: 'Heater', type: 'toggle' },
      { name: 'Kettle', type: 'fillEmpty' },
      { name: 'Microwave', type: 'toggle' },
      { name: 'Radio', type: 'toggle' },
      { name: 'TV', type: 'toggle' },
      { name: 'Washing Machine', type: 'toggle' },
      { name: 'Lamp', type: 'toggle' },
      { name: 'Vacuum', type: 'plugInUnplug' },
      { name: 'Microphone', type: 'muteUnmute' },
      { name: 'Mouse', type: 'scrollUpScrollDown' }

    ],
    'Doors, Windows & Furniture': [
      { name: 'Box', type: 'openClose' },
      { name: 'Curtain', type: 'openClose' },
      { name: 'Door', type: 'openClose' },
      { name: 'Drawer', type: 'openClose' },
      { name: 'Garage Door', type: 'openClose' },
      { name: 'Suitcase', type: 'openClose' },
      { name: 'Window', type: 'openClose' },
      { name: 'Door(lock)', type: 'lockUnlock' },
      { name: 'Blinds', type: 'pullUpPullDown' },
      { name: 'Table', type: 'foldUnfold' },
      { name: 'Couch', type: 'coverUncover' },
      { name: 'Shelf', type: 'attachDetach' },

    ],
    'Clothing and Accessories': [
      { name: 'Glasses', type: 'putOnTakeOff' },
      { name: 'Hat', type: 'putOnTakeOff' },
      { name: 'Jacket(wear)', type: 'putOnTakeOff' },
      { name: 'Necklace', type: 'putOnTakeOff' },
      { name: 'Seatbelt', type: 'putOnTakeOff' },
      { name: 'Shoes', type: 'putOnTakeOff' },
      { name: 'Jacket(zip)', type: 'pullUpPullDown' },
      { name: 'Shoelaces', type: 'tieUntie' },
      { name: 'Coat', type: 'hangUpTakeDown' },
      { name: 'Shirt', type: 'buttonUnbutton' }
    ],
    'Kitchen & Food': [
      { name: 'Fridge', type: 'openClose' },
      { name: 'Faucet', type: 'toggle' },
      { name: 'Oven', type: 'openClose' },
      { name: 'Eggs', type: 'stirStopStirring' },
      { name: 'Milk', type: 'pourStopPouring' },
      { name: 'Carrot', type: 'chopStopChopping' }
    ],
    'Personal Actions & Movements': [
      { name: 'Eyes', type: 'openClose' },
      { name: 'Phone', type: 'pickUpHangUp' },
      { name: 'Chair', type: 'sitStand' },
      { name: 'Book', type: 'pickUpPutDown' },
      { name: 'Run', type: 'runStopRunning' },
      { name: 'Jump', type: 'jumpLand' },
      { name: 'Bed', type: 'lieDownGetUp' }
    ],
    'Vehicles & Travel': [
      { name: 'Car', type: 'startStop' },
      { name: 'Charger', type: 'plugInUnplug' },
      { name: 'CarGetOut', type: 'getInGetOut' },
      { name: 'Luggage', type: 'packUnpack' },
      { name: 'Van', type: 'loadUnload'}
    ],
    'Objects & Tools': [
      { name: 'Cup', type: 'putPick' },
      { name: 'Nail', type: 'hitStopHitting' },
      { name: 'Wall', type: 'paintStopPainting'},
      { name: 'Hole', type: 'digStopDigging'},
      { name: 'Text', type: 'highlightEraseHighlight'},
      { name: 'Note', type: 'writeStopWriting'}
      // { name: 'Paper', type: 'putPick' },
      // { name: 'Pen', type: 'putPick' },
      // { name: 'Toy', type: 'putPick' },
    ],

  };

  const currentItems = items[category]?.slice(currentPage * imagesPerPage, (currentPage + 1) * imagesPerPage) || [];
  const totalPages = Math.ceil(items[category]?.length / imagesPerPage);

  // Listen for keyboard events
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowLeft') {
        setCurrentPage((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
      } else if (event.key === 'ArrowRight') {
        setCurrentPage((prev) => (prev + 1 < totalPages ? prev + 1 : prev));
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    // Cleanup event listener
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [totalPages]);

  return (
    <div>
      <Navbar />
      {/* <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex flex-col space-y-4 p-6"> */}
      <div className="mt-14 flex flex-col items-center justify-center min-h-screen">
        {/* <div className="flex flex-wrap justify-center space-x-2 p-2"> Buttons in a row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-2 ">
          
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-2 py-1 w-auto bg-blue-500 text-white rounded-lg ${category === cat ? 'bg-blue-700' : ''}`}
              onClick={() => {
                setCategory(cat);
                setCurrentPage(0); // Reset page when changing category
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* <div className="flex flex-col items-center justify-center w-full max-w-4xl bg-white p-6 border rounded-lg shadow-md"> */}
        {/* <div className="flex flex-col items-center justify-center w-[800px] h-[600px] bg-white p-6 border rounded-lg shadow-md"> */}
        <div className="flex flex-col items-center justify-center w-full max-w-[800px] min-h-[600px] bg-white p-6 border rounded-lg shadow-md">

          <div className="grid grid-cols-3 gap-4 mt-6 w-full h-[500px] justify-items-center place-items-center">
            {currentItems.map((item, index) => {
              const keyBase = item.name.toLowerCase().replace(/ /g, '');
              // const actionState = actions[`${keyBase}On`] || actions[`${keyBase}Open`] || actions[`${keyBase}PutDown`] || actions[`${keyBase}Fill`] || actions[`${keyBase}PutOn`] || actions.sitting;
              const actionState = actions[`${keyBase}On`]           // toggle
                  || actions[`${keyBase}Open`]                        // openClose
                  || actions[`${keyBase}PutOn`]                       // putOnTakeOff
                  || actions[`${keyBase}PullUp`]                      // pullUpPullDown
                  || actions[`${keyBase}Locked`]                      // lockUnlock
                  || actions[`${keyBase}Zipped`]                      // zipUnzip
                  || actions.sitting                                  // sitStand
                  || actions[`${keyBase}PickUp`]                  // pickUpHangUp //pickUpPutDown 
                  || actions[`${keyBase}Started`]                     // startStop
                  || actions[`${keyBase}PluggedIn`]                   // plugInUnplug
                  || actions[`${keyBase}PutTake`]                      // putPick
                  || actions[`${keyBase}Fill`]
                  || actions[`${keyBase}Mute`]
                  || actions[`${keyBase}ScrollUp`]
                  || actions[`${keyBase}PutPick`]                       // fillEmpty
                  || actions[`${keyBase}Fold`]
                  || actions[`${keyBase}Cover`]
                  || actions[`${keyBase}Attach`]
                  || actions[`${keyBase}Tie`]
                  || actions[`${keyBase}HangUp`]
                  || actions[`${keyBase}Button`]
                  || actions[`${keyBase}Stir`]
                  || actions[`${keyBase}Pour`]
                  || actions[`${keyBase}Chop`]
                  || actions[`${keyBase}Run`]
                  || actions[`${keyBase}Jump`]
                  || actions[`${keyBase}Lie`]
                  || actions[`${keyBase}GetIn`]
                  || actions[`${keyBase}Pack`]
                  || actions[`${keyBase}Hit`]
                  || actions[`${keyBase}Load`]
                  || actions[`${keyBase}Paint`]
                  || actions[`${keyBase}Dig`]
                  || actions[`${keyBase}Highlight`]
                  || actions[`${keyBase}Write`];
              return (
                <motion.img
                  key={index}
                  src={actionState ? `/${keyBase}-on.png` : `/${keyBase}-off.png`}
                  alt={item.name}
                  // className="w-32 h-auto object-contain"
                  className="w-[150px] h-[150px] object-contain"
                  onClick={() => toggleAction(item.name, item.type)}
                />
              );
            })}
          </div>

          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full ${currentPage === i ? 'bg-blue-500' : 'bg-gray-300'}`}
                onClick={() => setCurrentPage(i)}
              />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-3 gap-4 mt-6 w-full max-w-4xl">
            {currentItems.map((item, index) => {
              const keyBase = item.name.toLowerCase().replace(/ /g, '');
              // const actionState = actions[`${keyBase}On`] || actions[`${keyBase}Open`] || actions[`${keyBase}Put`] || actions[`${keyBase}Fill`] || actions[`${keyBase}PutOn`] || actions.sitting;
              const actionState = actions[`${keyBase}On`]           // toggle
                  || actions[`${keyBase}Open`]                        // openClose
                  || actions[`${keyBase}PutOn`]                       // putOnTakeOff
                  || actions[`${keyBase}PullUp`]                      // pullUpPullDown
                  || actions[`${keyBase}Locked`]                      // lockUnlock
                  || actions[`${keyBase}Zipped`]                      // zipUnzip
                  || actions.sitting                                  // sitStand
                  || actions[`${keyBase}PickUp`]                  // pickUpHangUp //PickUpPutDown
                  || actions[`${keyBase}Started`]                     // startStop
                  || actions[`${keyBase}PluggedIn`]                   // plugInUnplug
                  || actions[`${keyBase}PutTake`]                      // putPick
                  || actions[`${keyBase}PutPick`]
                  || actions[`${keyBase}Fill`]                       // fillEmpty
                  || actions[`${keyBase}Mute`]
                  || actions[`${keyBase}ScrollUp`]
                  || actions[`${keyBase}PutPick`]  
                  || actions[`${keyBase}Fold`]
                  || actions[`${keyBase}Cover`]
                  || actions[`${keyBase}Attach`]
                  || actions[`${keyBase}Tie`]
                  || actions[`${keyBase}HangUp`]
                  || actions[`${keyBase}Button`]
                  || actions[`${keyBase}Stir`]
                  || actions[`${keyBase}Pour`]
                  || actions[`${keyBase}Chop`]
                  || actions[`${keyBase}Run`]
                  || actions[`${keyBase}Jump`]
                  || actions[`${keyBase}Lie`]
                  || actions[`${keyBase}GetIn`]
                  || actions[`${keyBase}Pack`]
                  || actions[`${keyBase}Hit`]
                  || actions[`${keyBase}Load`]
                  || actions[`${keyBase}Paint`]
                  || actions[`${keyBase}Dig`]
                  || actions[`${keyBase}Highlight`]
                  || actions[`${keyBase}Write`];
              // Determine action label based on action type
              let actionLabel = '';
              switch (item.type) {
                case 'toggle':
                  actionLabel = actionState ? `Turn off ${item.name}` : `Turn on ${item.name}`;
                  break;
                case 'openClose':
                  actionLabel = actionState ? `Close ${item.name}` : `Open ${item.name}`;
                  break;
                case 'putOnTakeOff':
                  actionLabel = actionState ? `Take off ${item.name}` : `Put on ${item.name}`;
                  break;
                case 'pullUpPullDown':
                  actionLabel = actionState ? `Pull down ${item.name}` : `Pull up ${item.name}`;
                  break;
                case 'lockUnlock':
                  actionLabel = actionState ? `Unlock ${item.name}` : `Lock ${item.name}`;
                  break;
                case 'zipUnzip':
                  actionLabel = actionState ? `Unzip ${item.name}` : `Zip up ${item.name}`;
                  break;
                case 'sitStand':
                  actionLabel = actionState ? `Stand up from ${item.name}` : `Sit on ${item.name}`;
                  break;
                case 'pickUpHangUp':
                  actionLabel = actionState ? `Pick Up ${item.name}` : `Hang up ${item.name}`;
                  break;
                case 'pickUpPutDown':
                  actionLabel = actionState ? `Put down ${item.name}` : `Pick up ${item.name}`;
                  break;
                case 'startStop':
                  actionLabel = actionState ? `Stop ${item.name}` : `Start ${item.name}`;
                  break;
                case 'plugInUnplug':
                  actionLabel = actionState ? `Unplug ${item.name}` : `Plug in ${item.name}`;
                  break;
                case 'putTake':
                  actionLabel = actionState ? `Put ${item.name}` : `Take ${item.name}`;
                  break;
                case 'fillEmpty':
                  actionLabel = actionState ? `Fill ${item.name}` : `Empty ${item.name}`;
                  break;
                case 'putPick':
                  actionLabel = actionState ? `Put Down ${item.name}` : `Pick Up ${item.name}`;
                  break;
                case 'muteUnmute':
                  actionLabel = actionState ? `Mute ${item.name}` : `Unmute ${item.name}`;
                  break;
                case 'scrollUpScrollDown':
                  actionLabel = actionState ? `Scroll Down ${item.name}` : `Scroll Up ${item.name}`;
                  break;
                case 'foldUnfold':
                  actionLabel = actionState ? `Fold ${item.name}` : `Unfold ${item.name}`;
                  break;
                case 'coverUncover':
                  actionLabel = actionState ? `Uncover ${item.name}` : `Cover ${item.name}`;
                  break;
                case 'attachDetach':
                  actionLabel = actionState ? `Detach ${item.name}` : `Attach ${item.name}`;
                  break;
                case 'tieUntie':
                  actionLabel = actionState ? `Untie ${item.name}` : `Tie ${item.name}`;
                  break;
                case 'hangUpTakeDown':
                  actionLabel = actionState ? `Take Down ${item.name}` : `Hang Up ${item.name}`;
                  break;
                case 'buttonUnbutton':
                  actionLabel = actionState ? `Unbutton ${item.name}` : `Button ${item.name}`;
                  break;
                case 'stirStopStirring':
                  actionLabel = actionState ? `Stop Stirring ${item.name}` : `Stir ${item.name}`;
                  break;
                case 'pourStopPouring':
                  actionLabel = actionState ? `Stop Pouring ${item.name}` : `Pour ${item.name}`;
                  break;
                case 'chopStopChopping':
                  actionLabel = actionState ? `Stop Chopping ${item.name}s` : `Chop ${item.name}s`;
                  break;
                case 'runStopRunning':
                  actionLabel = actionState ? `Stop Running` : `Run`;
                  break;
                case 'jumpLand':
                  actionLabel = actionState ? `Land` : `${item.name}`;
                  break;
                case 'lieDownGetUp':
                  actionLabel = actionState ? `Get Up` : `Lie down in ${item.name}`;
                  break;
                case 'getInGetOut':
                  actionLabel = actionState ? `Get in the car` : `Get out of the car`;
                  break;
                case 'packUnpack':
                  actionLabel = actionState ? `Unpack ${item.name}` : `Pack ${item.name}`;
                  break;
                case 'hitStopHitting':
                  actionLabel = actionState ? `Stop hitting the ${item.name}` : `Hit the ${item.name}`;
                  break;
                case 'loadUnload':
                  actionLabel = actionState ? `Unload the ${item.name}` : `Load the ${item.name}`;
                  break;
                case 'paintStopPainting':
                  actionLabel = actionState ? `Stop Painting the ${item.name}` : `Paint the ${item.name}`;
                  break;
                case 'digStopDigging':
                  actionLabel = actionState ? `Stop Digging` : `Dig`;
                  break;
                case 'highlightEraseHighlight':
                  actionLabel = actionState ? `Erase Highlight` : `Highlight the ${item.name}`;
                  break;
                case 'writeStopWriting':
                  actionLabel = actionState ? `Stop writing the ${item.name}` : `Write the ${item.name}`;
                  break;

                default:
                  actionLabel = 'Unknown Action';
                  break;
              }
              
              return (
                <button
                  key={index}
                  // className="py-2 px-4 bg-blue-500 text-white rounded-md shadow-md"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg text-xs sm:text-sm md:text-base"
                  onClick={() => toggleAction(item.name, item.type)}
                >
                  {actionLabel}
                </button>
              );
            })}

          </div>
        </div>
      </div>
    </div>
  );
}
