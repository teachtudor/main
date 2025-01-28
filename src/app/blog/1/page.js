// "use client";

// import React, { useState } from "react";

// export default function SlideCreator() {
//   const [images, setImages] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [showFilename, setShowFilename] = useState(false);
//   const [addedTexts, setAddedTexts] = useState([]);
//   const [textInput, setTextInput] = useState("");

//   const handleFolderSelect = (event) => {
//     const files = Array.from(event.target.files).filter((file) =>
//       file.type.startsWith("image/"),
//     );

//     const sortedFiles = files.sort((a, b) => a.name.localeCompare(b.name));
//     setImages(sortedFiles);
//     setCurrentIndex(0);
//   };

//   const handleNextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const handlePrevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       (prevIndex - 1 + images.length) % images.length,
//     );
//   };

//   const handleToggleFilename = () => {
//     setShowFilename((prevState) => !prevState);
//   };

//   const handleAddText = () => {
//     if (textInput.trim() !== "") {
//       setAddedTexts([...addedTexts, textInput]);
//       setTextInput("");
//     }
//   };

//   const handleDeleteText = (index) => {
//     const updatedTexts = addedTexts.filter((_, i) => i !== index);
//     setAddedTexts(updatedTexts);
//   };

//   const handleDownload = () => {
//     const blob = new Blob([addedTexts.join("\n")], { type: "text/plain" });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = "words.txt";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold text-center mb-4">Slide Creator</h1>

//       <div className="text-center mb-6">
//         <input
//           type="file"
//           webkitdirectory=""
//           mozdirectory=""
//           directory=""
//           multiple
//           onChange={handleFolderSelect}
//           className="cursor-pointer p-2 border rounded-lg"
//         />
//       </div>

//       {images.length > 0 && (
//         <div className="text-center mb-6">
//           <div
//             className="w-full h-64 bg-gray-200 flex items-center justify-center border border-gray-300 rounded-lg cursor-pointer"
//             onClick={handleToggleFilename}
//           >
//             {showFilename ? (
//               <p className="text-lg font-semibold text-gray-800">
//                 {images[currentIndex].name}
//               </p>
//             ) : (
//               <img
//                 src={URL.createObjectURL(images[currentIndex])}
//                 alt="Slide"
//                 className="h-full object-contain"
//               />
//             )}
//           </div>

//           <div className="flex justify-center gap-4 mt-4">
//             <button
//               className="p-2 bg-gray-800 text-white rounded-lg"
//               onClick={handlePrevSlide}
//             >
//               Previous
//             </button>
//             <button
//               className="p-2 bg-gray-800 text-white rounded-lg"
//               onClick={handleNextSlide}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       )}

//       <div className="text-center mb-6">
//         <input
//           type="text"
//           value={textInput}
//           onChange={(e) => setTextInput(e.target.value)}
//           placeholder="Add a word or phrase"
//           className="p-2 border rounded-lg w-2/3"
//         />
//         <button
//           onClick={handleAddText}
//           className="p-2 bg-green-600 text-white ml-4 rounded-lg"
//         >
//           Add
//         </button>
//       </div>

//       <div className="text-center mb-6">
//         {addedTexts.map((text, index) => (
//           <div
//             key={index}
//             className="flex items-center justify-center gap-2 mb-2"
//           >
//             <span>{text}</span>
//             <button
//               onClick={() => handleDeleteText(index)}
//               className="p-1 bg-red-600 text-white rounded-lg"
//             >
//               ➔
//             </button>
//           </div>
//         ))}
//       </div>

//       {addedTexts.length > 0 && (
//         <div className="text-center">
//           <button
//             onClick={handleDownload}
//             className="p-2 bg-blue-600 text-white rounded-lg"
//           >
//             Download Words
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

//CODE 2
// "use client";

// import React, { useState } from "react";

// export default function SlideCreator() {
//   const [images, setImages] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [showFilename, setShowFilename] = useState(false);
//   const [addedTexts, setAddedTexts] = useState([]);
//   const [textInput, setTextInput] = useState("");

//   const handleFolderSelect = (event) => {
//     const files = Array.from(event.target.files).filter((file) =>
//       file.type.startsWith("image/")
//     );
//     const sortedFiles = files.sort((a, b) => a.name.localeCompare(b.name));
//     setImages(sortedFiles);
//     setCurrentIndex(0);
//   };

//   const handleNextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const handlePrevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   const handleToggleFilename = () => {
//     setShowFilename((prevState) => !prevState);
//   };

//   const handleAddText = () => {
//     if (textInput.trim() !== "") {
//       setAddedTexts([...addedTexts, textInput]);
//       setTextInput("");
//     }
//   };

//   const handleDeleteText = (index) => {
//     const updatedTexts = addedTexts.filter((_, i) => i !== index);
//     setAddedTexts(updatedTexts);
//   };

//   const handleDownload = () => {
//     const blob = new Blob([addedTexts.join("\n")], { type: "text/plain" });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = "words.txt";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold text-center mb-4">Slide Creator</h1>

//       <div className="text-center mb-6">
//         <input
//           type="file"
//           webkitdirectory=""
//           mozdirectory=""
//           directory=""
//           multiple
//           onChange={handleFolderSelect}
//           className="cursor-pointer p-2 border rounded-lg"
//         />
//       </div>

//       {images.length > 0 && (
//         <div className="text-center mb-6">
//           <div
//             className="w-full max-w-md h-64 bg-gray-200 flex items-center justify-center border border-black rounded-md mx-auto cursor-pointer"
//             onClick={handleToggleFilename}
//           >
//             {showFilename ? (
//               <p className="text-lg font-semibold text-gray-800">
//                 {images[currentIndex].name}
//               </p>
//             ) : (
//               <img
//                 src={URL.createObjectURL(images[currentIndex])}
//                 alt="Slide"
//                 className="h-full object-contain"
//               />
//             )}
//           </div>

//           <div className="flex justify-center gap-4 mt-4">
//             <button
//               className="p-2 bg-gray-800 text-white rounded-lg"
//               onClick={handlePrevSlide}
//             >
//               Previous
//             </button>
//             <button
//               className="p-2 bg-gray-800 text-white rounded-lg"
//               onClick={handleNextSlide}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       )}

//       <div className="text-center mb-6">
//         <input
//           type="text"
//           value={textInput}
//           onChange={(e) => setTextInput(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && handleAddText()}
//           placeholder="Add a word or phrase"
//           className="p-2 border rounded-lg w-2/3"
//         />
//         <button
//           onClick={handleAddText}
//           className="p-2 bg-green-600 text-white ml-4 rounded-lg"
//         >
//           Add
//         </button>
//       </div>

//       <div className="text-center mb-6">
//         <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
//           {addedTexts.map((text, index) => (
//             <div
//               key={index}
//               className="flex items-center gap-2 p-2 border border-gray-400 rounded-lg"
//             >
//               <span>{text}</span>
//               <button
//                 onClick={() => handleDeleteText(index)}
//                 className="p-1 bg-red-600 text-white rounded-lg"
//               >
//                 ➔
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {addedTexts.length > 0 && (
//         <div className="text-center">
//           <button
//             onClick={handleDownload}
//             className="p-2 bg-blue-600 text-white rounded-lg"
//           >
//             Download Words
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

//CODE 3
// "use client";

// import React, { useState } from "react";
// import Navbar from "../../Navbar";
// import "../../globals.css"; 

// export default function SlideCreator() {
//   const [images, setImages] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [showFilename, setShowFilename] = useState(false);
//   const [addedTexts, setAddedTexts] = useState([]);
//   const [textInput, setTextInput] = useState("");

//   const handleFolderSelect = (event) => {
//     const files = Array.from(event.target.files).filter((file) =>
//       file.type.startsWith("image/")
//     );
//     const sortedFiles = files.sort((a, b) => a.name.localeCompare(b.name));
//     setImages(sortedFiles);
//     setCurrentIndex(0);
//   };

//   const handleNextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const handlePrevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   const handleToggleFilename = () => {
//     setShowFilename((prevState) => !prevState);
//   };

//   const handleAddText = () => {
//     if (textInput.trim() !== "") {
//       setAddedTexts([...addedTexts, textInput]);
//       setTextInput("");
//     }
//   };

//   const handleDeleteText = (index) => {
//     const updatedTexts = addedTexts.filter((_, i) => i !== index);
//     setAddedTexts(updatedTexts);
//   };

//   const handleDownload = () => {
//     const blob = new Blob([addedTexts.join("\n")], { type: "text/plain" });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = "words.txt";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div>
//       <Navbar />
    
//       <div className="p-4">
        


//         <h1 className="text-2xl font-bold text-center mb-4">Slide Creator</h1>

//         <div className="text-center mb-6">
//           <input
//             type="file"
//             webkitdirectory=""
//             mozdirectory=""
//             directory=""
//             multiple
//             onChange={handleFolderSelect}
//             className="cursor-pointer p-2 border rounded-lg"
//           />
//         </div>

//         {images.length > 0 && (
//           <div className="text-center mb-6">
//             <div
//               className="w-full max-w-md h-64 bg-gray-200 flex items-center justify-center border border-black rounded-md mx-auto cursor-pointer"
//               onClick={handleToggleFilename}
//             >
//               {showFilename ? (
//                 <p className="text-lg font-semibold text-gray-800">
//                   {images[currentIndex].name}
//                 </p>
//               ) : (
//                 <img
//                   src={URL.createObjectURL(images[currentIndex])}
//                   alt="Slide"
//                   className="h-full object-contain"
//                 />
//               )}
//             </div>

//             <div className="flex justify-center gap-4 mt-4">
//               <button
//                 className="p-2 bg-gray-800 text-white rounded-lg"
//                 onClick={handlePrevSlide}
//               >
//                 Previous
//               </button>
//               <button
//                 className="p-2 bg-gray-800 text-white rounded-lg"
//                 onClick={handleNextSlide}
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         )}

//         <div className="text-center mb-6">
//           <input
//             type="text"
//             value={textInput}
//             onChange={(e) => setTextInput(e.target.value)}
//             onKeyDown={(e) => e.key === "Enter" && handleAddText()}
//             placeholder="Add a word or phrase"
//             className="p-2 border rounded-lg w-2/3"
//           />
//           <button
//             onClick={handleAddText}
//             className="p-2 bg-green-600 text-white ml-4 rounded-lg"
//           >
//             Add
//           </button>
//         </div>

//         <div className="text-center mb-6">
//           <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
//             {addedTexts.map((text, index) => (
//               <div
//                 key={index}
//                 className="flex items-center gap-2 p-2 border border-gray-400 rounded-lg hover:bg-blue-200 transition"
//               >
//                 <span>{text}</span>
//                 <button
//                   onClick={() => handleDeleteText(index)}
//                   className="p-1 bg-[#8F9779] text-white rounded-lg" // Light army green
//                 >
//                   ➔
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         {addedTexts.length > 0 && (
//           <div className="text-center">
//             <button
//               onClick={handleDownload}
//               className="p-2 bg-blue-600 text-white rounded-lg"
//             >
//               Download Words
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

///CODE 4
// "use client";

// import React, { useState, useEffect } from "react";
// import Navbar from "../../Navbar";
// import "../../globals.css";

// export default function SlideCreator() {
//   const [images, setImages] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [showFilename, setShowFilename] = useState(false);
//   const [addedTexts, setAddedTexts] = useState([]);
//   const [textInput, setTextInput] = useState("");

//   const [currentImageURL, setCurrentImageURL] = useState(null);

//   useEffect(() => {
//     if (images[currentIndex]) {
//       const url = URL.createObjectURL(images[currentIndex]);
//       setCurrentImageURL(url);

//       return () => URL.revokeObjectURL(url); // Cleanup to prevent memory leaks
//     }
//   }, [images, currentIndex]);

//   const handleFolderSelect = (event) => {
//     const files = Array.from(event.target.files).filter((file) =>
//       file.type.startsWith("image/")
//     );
//     const sortedFiles = files.sort((a, b) => a.name.localeCompare(b.name));
//     setImages(sortedFiles);
//     setCurrentIndex(0);
//   };

//   const handleNextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const handlePrevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   const handleToggleFilename = () => {
//     setShowFilename((prevState) => !prevState);
//   };

//   const handleAddText = () => {
//     if (textInput.trim() !== "") {
//       setAddedTexts([...addedTexts, textInput]);
//       setTextInput("");
//     }
//   };

//   const handleDeleteText = (index) => {
//     const updatedTexts = addedTexts.filter((_, i) => i !== index);
//     setAddedTexts(updatedTexts);
//   };

//   const handleDownload = () => {
//     const blob = new Blob([addedTexts.join("\n")], { type: "text/plain" });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = "words.txt";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === "ArrowRight") {
//         handleNextSlide();
//       } else if (e.key === "ArrowLeft") {
//         handlePrevSlide();
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [images]);

//   return (
//     <div>
//       <Navbar />
//       <div className="p-4">
//         <h1 className="text-2xl font-bold text-center mb-4">Slide Creator</h1>

//         <div className="text-center mb-6">
//           <input
//             type="file"
//             webkitdirectory=""
//             mozdirectory=""
//             directory=""
//             multiple
//             onChange={handleFolderSelect}
//             className="cursor-pointer p-2 border rounded-lg"
//           />
//         </div>

//         {images.length > 0 && (
//           <div className="text-center mb-6">
//             <div
//               className="w-full max-w-md h-64 bg-gray-200 flex items-center justify-center border border-black rounded-md mx-auto cursor-pointer relative"
//               onClick={handleToggleFilename}
//             >
//               {showFilename ? (
//                 <p className="text-lg font-semibold text-gray-800">
//                   {images[currentIndex].name}
//                 </p>
//               ) : (
//                 currentImageURL && (
//                   <img
//                     src={currentImageURL}
//                     alt="Slide"
//                     className="h-full object-contain transition-transform transform-gpu"
//                   />
//                 )
//               )}
//             </div>

//             <div className="flex justify-center gap-4 mt-4">
//               <button
//                 className="p-2 bg-gray-800 text-white rounded-lg"
//                 onClick={handlePrevSlide}
//               >
//                 Previous
//               </button>
//               <button
//                 className="p-2 bg-gray-800 text-white rounded-lg"
//                 onClick={handleNextSlide}
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         )}

//         <div className="text-center mb-6">
//           <input
//             type="text"
//             value={textInput}
//             onChange={(e) => setTextInput(e.target.value)}
//             onKeyDown={(e) => e.key === "Enter" && handleAddText()}
//             placeholder="Add a word or phrase"
//             className="p-2 border rounded-lg w-2/3"
//           />
//           <button
//             onClick={handleAddText}
//             className="p-2 bg-green-600 text-white ml-4 rounded-lg"
//           >
//             Add
//           </button>
//         </div>

//         <div className="text-center mb-6">
//           <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
//             {addedTexts.map((text, index) => (
//               <div
//                 key={index}
//                 className="flex items-center gap-2 p-2 border border-gray-400 rounded-lg hover:bg-blue-200 transition"
//               >
//                 <span>{text}</span>
//                 <button
//                   onClick={() => handleDeleteText(index)}
//                   className="p-1 bg-[#8F9779] text-white rounded-lg"
//                 >
//                   ➔
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         {addedTexts.length > 0 && (
//           <div className="text-center">
//             <button
//               onClick={handleDownload}
//               className="p-2 bg-blue-600 text-white rounded-lg"
//             >
//               Download Words
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

//CODE 5
// "use client";

// import React, { useState, useEffect } from "react";
// import Navbar from "../../Navbar";
// import jsPDF from "jspdf";
// import "../../globals.css";

// export default function SlideCreator() {
//   const [images, setImages] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [showFilename, setShowFilename] = useState(false);
//   const [addedTexts, setAddedTexts] = useState([]);
//   const [textInput, setTextInput] = useState("");

//   const [currentImageURL, setCurrentImageURL] = useState(null);

//   useEffect(() => {
//     if (images[currentIndex]) {
//       const url = URL.createObjectURL(images[currentIndex]);
//       setCurrentImageURL(url);

//       return () => URL.revokeObjectURL(url); // Cleanup to prevent memory leaks
//     }
//   }, [images, currentIndex]);

//   const handleFolderSelect = (event) => {
//     const files = Array.from(event.target.files).filter((file) =>
//       file.type.startsWith("image/")
//     );
//     const sortedFiles = files.sort((a, b) => a.name.localeCompare(b.name));
//     setImages(sortedFiles);
//     setCurrentIndex(0);
//   };

//   const handleNextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const handlePrevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   const handleToggleFilename = () => {
//     setShowFilename((prevState) => !prevState);
//   };

//   const handleAddText = () => {
//     if (textInput.trim() !== "") {
//       setAddedTexts([...addedTexts, textInput]);
//       setTextInput("");
//     }
//   };

//   const handleDeleteText = (index) => {
//     const updatedTexts = addedTexts.filter((_, i) => i !== index);
//     setAddedTexts(updatedTexts);
//   };

//   const handleDownload = () => {
//     const blob = new Blob([addedTexts.join("\n")], { type: "text/plain" });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = "words.txt";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handleExportToPDF = async () => {
//     const pdf = new jsPDF();
//     for (let i = 0; i < images.length; i++) {
//       const imageUrl = URL.createObjectURL(images[i]);
//       const img = new Image();
//       img.src = imageUrl;

//       await new Promise((resolve) => {
//         img.onload = () => {
//           const imgWidth = 190;
//           const imgHeight = (img.height / img.width) * imgWidth;

//           if (i !== 0) pdf.addPage();
//           pdf.addImage(img, "JPEG", 10, 10, imgWidth, imgHeight);
//           pdf.text(images[i].name, 10, imgHeight + 20);

//           URL.revokeObjectURL(imageUrl); // Cleanup
//           resolve();
//         };
//       });
//     }

//     pdf.save("images.pdf");
//   };

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === "ArrowRight") {
//         handleNextSlide();
//       } else if (e.key === "ArrowLeft") {
//         handlePrevSlide();
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [images]);

//   return (
//     <div>
//       <Navbar />
//       <div className="p-4">
//         <h1 className="text-2xl font-bold text-center mb-4">Slide Creator</h1>

//         <div className="text-center mb-6">
//           <input
//             type="file"
//             webkitdirectory=""
//             mozdirectory=""
//             directory=""
//             multiple
//             onChange={handleFolderSelect}
//             className="cursor-pointer p-2 border rounded-lg"
//           />
//         </div>

//         {images.length > 0 && (
//           <div className="text-center mb-6">
//             <div
//               className="w-full max-w-md h-64 bg-gray-200 flex items-center justify-center border border-black rounded-md mx-auto cursor-pointer relative"
//               onClick={handleToggleFilename}
//             >
//               {showFilename ? (
//                 <p className="text-lg font-semibold text-gray-800">
//                   {images[currentIndex].name}
//                 </p>
//               ) : (
//                 currentImageURL && (
//                   <img
//                     src={currentImageURL}
//                     alt="Slide"
//                     className="h-full object-contain transition-transform transform-gpu"
//                   />
//                 )
//               )}
//             </div>

//             <div className="flex justify-center gap-4 mt-4">
//               <button
//                 className="p-2 bg-gray-800 text-white rounded-lg"
//                 onClick={handlePrevSlide}
//               >
//                 Previous
//               </button>
//               <button
//                 className="p-2 bg-gray-800 text-white rounded-lg"
//                 onClick={handleNextSlide}
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         )}

//         <div className="text-center mb-6">
//           <input
//             type="text"
//             value={textInput}
//             onChange={(e) => setTextInput(e.target.value)}
//             onKeyDown={(e) => e.key === "Enter" && handleAddText()}
//             placeholder="Add a word or phrase"
//             className="p-2 border rounded-lg w-2/3"
//           />
//           <button
//             onClick={handleAddText}
//             className="p-2 bg-green-600 text-white ml-4 rounded-lg"
//           >
//             Add
//           </button>
//         </div>

//         <div className="text-center mb-6">
//           <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
//             {addedTexts.map((text, index) => (
//               <div
//                 key={index}
//                 className="flex items-center gap-2 p-2 border border-gray-400 rounded-lg hover:bg-blue-200 transition"
//               >
//                 <span>{text}</span>
//                 <button
//                   onClick={() => handleDeleteText(index)}
//                   className="p-1 bg-[#8F9779] text-white rounded-lg"
//                 >
//                   ➔
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         {addedTexts.length > 0 && (
//           <div className="text-center">
//             <button
//               onClick={handleDownload}
//               className="p-2 bg-blue-600 text-white rounded-lg mr-4"
//             >
//               Download Words
//             </button>
//             <button
//               onClick={handleExportToPDF}
//               className="p-2 bg-purple-600 text-white rounded-lg"
//             >
//               Export to PDF
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

//CODE 6
// "use client";

// import React, { useState, useEffect } from "react";
// import Navbar from "../../Navbar";
// import jsPDF from "jspdf";
// import "../../globals.css";

// export default function SlideCreator() {
//   const [images, setImages] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [showFilename, setShowFilename] = useState(false);
//   const [addedTexts, setAddedTexts] = useState([]);
//   const [textInput, setTextInput] = useState("");

//   const [currentImageURL, setCurrentImageURL] = useState(null);

//   useEffect(() => {
//     if (images[currentIndex]) {
//       const url = URL.createObjectURL(images[currentIndex]);
//       setCurrentImageURL(url);

//       return () => URL.revokeObjectURL(url); // Cleanup to prevent memory leaks
//     }
//   }, [images, currentIndex]);

//   const handleFolderSelect = (event) => {
//     const files = Array.from(event.target.files).filter((file) =>
//       file.type.startsWith("image/")
//     );
//     const sortedFiles = files.sort((a, b) => a.name.localeCompare(b.name));
//     setImages(sortedFiles);
//     setCurrentIndex(0);
//   };

//   const handleNextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const handlePrevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   const handleToggleFilename = () => {
//     setShowFilename((prevState) => !prevState);
//   };

//   const handleAddText = () => {
//     if (textInput.trim() !== "") {
//       setAddedTexts([...addedTexts, textInput]);
//       setTextInput("");
//     }
//   };

//   const handleDeleteText = (index) => {
//     const updatedTexts = addedTexts.filter((_, i) => i !== index);
//     setAddedTexts(updatedTexts);
//   };

//   const handleDownload = () => {
//     const blob = new Blob([addedTexts.join("\n")], { type: "text/plain" });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = "words.txt";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handleExportToPDF = async () => {
//     const pdf = new jsPDF();
//     for (let i = 0; i < images.length; i++) {
//       const imageUrl = URL.createObjectURL(images[i]);
//       const img = new Image();
//       img.src = imageUrl;

//       await new Promise((resolve) => {
//         img.onload = () => {
//           const imgWidth = 190;
//           const imgHeight = (img.height / img.width) * imgWidth;

//           if (i !== 0) pdf.addPage();
//           pdf.addImage(img, "JPEG", 10, 10, imgWidth, imgHeight);
//           const fileName = images[i].name.replace(/\.[^/.]+$/, ""); // Remove the file extension
//           pdf.text(fileName, 10, imgHeight + 20);

//           URL.revokeObjectURL(imageUrl); // Cleanup
//           resolve();
//         };
//       });
//     }

//     // Add a final page for the added texts
//     if (addedTexts.length > 0) {
//       pdf.addPage();
//       pdf.setFontSize(12);
//       pdf.text("Added Words and Phrases:", 10, 20);
//       addedTexts.forEach((text, index) => {
//         pdf.text(`${index + 1}. ${text}`, 10, 30 + index * 10);
//       });
//     }

//     pdf.save("images.pdf");
//   };

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === "ArrowRight") {
//         handleNextSlide();
//       } else if (e.key === "ArrowLeft") {
//         handlePrevSlide();
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [images]);

//   return (
//     <div>
//       <Navbar />
//       <div className="p-4">
//         <h1 className="text-2xl font-bold text-center mb-4">Slide Creator</h1>

//         <div className="text-center mb-6">
//           <input
//             type="file"
//             webkitdirectory=""
//             mozdirectory=""
//             directory=""
//             multiple
//             onChange={handleFolderSelect}
//             className="cursor-pointer p-2 border rounded-lg"
//           />
//         </div>

//         {images.length > 0 && (
//           <div className="text-center mb-6">
//             <div
//               className="w-full max-w-md h-64 bg-gray-200 flex items-center justify-center border border-black rounded-md mx-auto cursor-pointer relative"
//               onClick={handleToggleFilename}
//             >
//               {showFilename ? (
//                 <p className="text-lg font-semibold text-gray-800">
//                   {images[currentIndex].name.replace(/\.[^/.]+$/, "")} {/* Remove file extension */}
//                 </p>
//               ) : (
//                 currentImageURL && (
//                   <img
//                     src={currentImageURL}
//                     alt="Slide"
//                     className="h-full object-contain transition-transform transform-gpu"
//                   />
//                 )
//               )}
//             </div>

//             <div className="flex justify-center gap-4 mt-4">
//               <button
//                 className="p-2 bg-gray-800 text-white rounded-lg"
//                 onClick={handlePrevSlide}
//               >
//                 Previous
//               </button>
//               <button
//                 className="p-2 bg-gray-800 text-white rounded-lg"
//                 onClick={handleNextSlide}
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         )}

//         <div className="text-center mb-6">
//           <input
//             type="text"
//             value={textInput}
//             onChange={(e) => setTextInput(e.target.value)}
//             onKeyDown={(e) => e.key === "Enter" && handleAddText()}
//             placeholder="Add a word or phrase"
//             className="p-2 border rounded-lg w-2/3"
//           />
//           <button
//             onClick={handleAddText}
//             className="p-2 bg-green-600 text-white ml-4 rounded-lg"
//           >
//             Add
//           </button>
//         </div>

//         <div className="text-center mb-6">
//           <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
//             {addedTexts.map((text, index) => (
//               <div
//                 key={index}
//                 className="flex items-center gap-2 p-2 border border-gray-400 rounded-lg hover:bg-blue-200 transition"
//               >
//                 <span>{text}</span>
//                 <button
//                   onClick={() => handleDeleteText(index)}
//                   className="p-1 bg-[#8F9779] text-white rounded-lg"
//                 >
//                   ➔
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         {addedTexts.length > 0 && (
//           <div className="text-center">
//             <button
//               onClick={handleDownload}
//               className="p-2 bg-blue-600 text-white rounded-lg mr-4"
//             >
//               Download Words
//             </button>
//             <button
//               onClick={handleExportToPDF}
//               className="p-2 bg-purple-600 text-white rounded-lg"
//             >
//               Export to PDF
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

//CODE 7 DOESN'T WORK BUT USE AS REFERENCE
// "use client";

// import React, { useState, useEffect } from "react";
// import Navbar from "../../Navbar";
// import jsPDF from "jspdf";
// import "../../globals.css";

// export default function SlideCreator() {
//   const [images, setImages] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [showFilename, setShowFilename] = useState(false);
//   const [addedTexts, setAddedTexts] = useState([]);
//   const [textInput, setTextInput] = useState("");
//   const [currentImageURL, setCurrentImageURL] = useState(null);
//   const [folderName, setFolderName] = useState(""); // Added state for folder name
//   const [folderStructure, setFolderStructure] = useState([]); // Added state for folder structure

//   useEffect(() => {
//     if (images[currentIndex]) {
//       const url = URL.createObjectURL(images[currentIndex]);
//       setCurrentImageURL(url);

//       return () => URL.revokeObjectURL(url); // Cleanup to prevent memory leaks
//     }
//   }, [images, currentIndex]);

//   const handleFolderSelect = (event) => {
//     const files = Array.from(event.target.files).filter((file) =>
//       file.type.startsWith("image/")
//     );

//     // Extract the folder name from the input files path
//     const folderPath = event.target.files[0]?.webkitRelativePath?.split("/")[0];
//     setFolderName(folderPath || "Unknown Folder");

//     // Organize files into folder structure (nested folders first)
//     const folderStructure = buildFolderStructure(files);
//     setFolderStructure(folderStructure);
//     setImages(files);
//     setCurrentIndex(0);
//   };

//   // Helper function to organize files into folder structure
//   const buildFolderStructure = (files) => {
//     const folderMap = {};
//     files.forEach((file) => {
//       const path = file.webkitRelativePath.split("/");
//       const folder = path[0];
//       const subfolder = path[1];
//       const filename = path.slice(2).join("/");

//       if (!folderMap[folder]) {
//         folderMap[folder] = {};
//       }

//       if (subfolder) {
//         if (!folderMap[folder][subfolder]) {
//           folderMap[folder][subfolder] = [];
//         }
//         folderMap[folder][subfolder].push(file);
//       } else {
//         folderMap[folder][filename] = file;
//       }
//     });

//     return Object.entries(folderMap).map(([folderName, subfolders]) => ({
//       folderName,
//       subfolders: Object.entries(subfolders).map(([subfolderName, files]) => ({
//         subfolderName,
//         files,
//       })),
//     }));
//   };

//   const handleNextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const handlePrevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   const handleToggleFilename = () => {
//     setShowFilename((prevState) => !prevState);
//   };

//   const handleAddText = () => {
//     if (textInput.trim() !== "") {
//       setAddedTexts([...addedTexts, textInput]);
//       setTextInput("");
//     }
//   };

//   const handleDeleteText = (index) => {
//     const updatedTexts = addedTexts.filter((_, i) => i !== index);
//     setAddedTexts(updatedTexts);
//   };

//   const handleDownload = () => {
//     const blob = new Blob([addedTexts.join("\n")], { type: "text/plain" });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = "words.txt";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handleExportToPDF = async () => {
//     const pdf = new jsPDF();
//     let pageHeight = pdf.internal.pageSize.height;
//     let yOffset = 10; // Starting position

//     // Iterate through folders and subfolders to print images and file names
//     for (const folder of folderStructure) {
//       pdf.setFontSize(16);
//       pdf.text(folder.folderName, 10, yOffset); // Folder name as title
//       yOffset += 10;

//       // Iterate through subfolders and print images
//       for (const subfolder of folder.subfolders) {
//         const imagesInSubfolder = subfolder.files;

//         pdf.setFontSize(14);
//         pdf.text(subfolder.subfolderName, 10, yOffset); // Subfolder name as title
//         yOffset += 10;

//         // Sort the images by their numeric file names (e.g., 1.jpg, 2.jpg)
//         imagesInSubfolder.sort((a, b) => {
//           const numA = parseInt(a.name.split('.')[0], 10);
//           const numB = parseInt(b.name.split('.')[0], 10);
//           return numA - numB;
//         });

//         // Iterate through images in subfolder and print each image
//         for (const image of imagesInSubfolder) {
//           const imageUrl = URL.createObjectURL(image);
//           const img = new Image();
//           img.src = imageUrl;

//           await new Promise((resolve) => {
//             img.onload = () => {
//               const imgWidth = 190;
//               const imgHeight = (img.height / img.width) * imgWidth;

//               // Check if the image fits on the current page
//               if (yOffset + imgHeight > pageHeight - 20) {
//                 pdf.addPage(); // Add a new page if it doesn't fit
//                 yOffset = 10;
//               }

//               pdf.addImage(img, "JPEG", 10, yOffset, imgWidth, imgHeight);
//               const fileName = image.name.replace(/\.[^/.]+$/, ""); // Remove file extension
//               pdf.text(fileName, 10, yOffset + imgHeight + 5); // File name below the image
//               yOffset += imgHeight + 15; // Adjust yOffset for the next image

//               URL.revokeObjectURL(imageUrl); // Cleanup
//               resolve();
//             };
//           });
//         }

//         // Print file names after the set of images for the subfolder
//         if (yOffset + 10 > pageHeight - 20) {
//           pdf.addPage();
//           yOffset = 10;
//         }

//         pdf.setFontSize(12);
//         pdf.text("Files in this folder:", 10, yOffset);
//         yOffset += 10;

//         imagesInSubfolder.forEach((image) => {
//           if (yOffset + 10 > pageHeight - 20) {
//             pdf.addPage();
//             yOffset = 10;
//           }
//           const fileName = image.name.replace(/\.[^/.]+$/, "");
//           pdf.text(fileName, 10, yOffset);
//           yOffset += 10;
//         });
//       }
//     }

//     // Add a page for the added vocabulary words
//     if (addedTexts.length > 0) {
//       if (yOffset + 10 > pageHeight - 20) {
//         pdf.addPage();
//         yOffset = 10;
//       }
//       pdf.setFontSize(12);
//       pdf.text("Added Words and Phrases:", 10, yOffset);
//       yOffset += 10;

//       addedTexts.forEach((text, index) => {
//         if (yOffset + 10 > pageHeight - 20) {
//           pdf.addPage();
//           yOffset = 10;
//         }
//         pdf.text(`${text}`, 10, yOffset);
//         yOffset += 10;
//       });
//     }

//     // Save the PDF
//     pdf.save("images.pdf");
//   };

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === "ArrowRight") {
//         handleNextSlide();
//       } else if (e.key === "ArrowLeft") {
//         handlePrevSlide();
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [images]);

//   return (
//     <div>
//       <Navbar />
//       <div className="p-4">
//         <h1 className="text-2xl font-bold text-center mb-4">Slide Creator</h1>

//         <div className="text-center mb-6">
//           <input
//             type="file"
//             webkitdirectory=""
//             mozdirectory=""
//             directory=""
//             multiple
//             onChange={handleFolderSelect}
//             className="cursor-pointer p-2 border rounded-lg"
//           />
//         </div>

//         {images.length > 0 && (
//           <div className="text-center mb-6">
//             <div
//               className="w-full max-w-md h-64 bg-gray-200 flex items-center justify-center border border-black rounded-md mx-auto cursor-pointer relative"
//               onClick={handleToggleFilename}
//             >
//               {showFilename ? (
//                 <p className="text-lg font-semibold text-gray-800">
//                   {images[currentIndex].name.replace(/\.[^/.]+$/, "")}
//                 </p>
//               ) : (
//                 currentImageURL && (
//                   <img
//                     src={currentImageURL}
//                     alt="Slide"
//                     className="h-full object-contain transition-transform transform-gpu"
//                   />
//                 )
//               )}
//             </div>

//             <div className="flex justify-center gap-4 mt-4">
//               <button
//                 className="p-2 bg-gray-800 text-white rounded-lg"
//                 onClick={handlePrevSlide}
//               >
//                 Previous
//               </button>
//               <button
//                 className="p-2 bg-gray-800 text-white rounded-lg"
//                 onClick={handleNextSlide}
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         )}

//         <div className="text-center mb-6">
//           <input
//             type="text"
//             value={textInput}
//             onChange={(e) => setTextInput(e.target.value)}
//             onKeyDown={(e) => e.key === "Enter" && handleAddText()}
//             placeholder="Add a word or phrase"
//             className="p-2 border rounded-lg w-2/3"
//           />
//           <button
//             onClick={handleAddText}
//             className="p-2 bg-green-600 text-white ml-4 rounded-lg"
//           >
//             Add
//           </button>
//         </div>

//         <div className="text-center mb-6">
//           <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
//             {addedTexts.map((text, index) => (
//               <div
//                 key={index}
//                 className="flex items-center gap-2 p-2 border border-gray-400 rounded-lg hover:bg-blue-200 transition"
//               >
//                 <span>{text}</span>
//                 <button
//                   onClick={() => handleDeleteText(index)}
//                   className="p-1 bg-[#8F9779] text-white rounded-lg"
//                 >
//                   ➔
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         {addedTexts.length > 0 && (
//           <div className="text-center">
//             <button
//               onClick={handleDownload}
//               className="p-2 bg-blue-600 text-white rounded-lg mr-4"
//             >
//               Download Words
//             </button>
//             <button
//               onClick={handleExportToPDF}
//               className="p-2 bg-purple-600 text-white rounded-lg"
//             >
//               Export to PDF
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

//CODE 8 DOESN'T WORK COMPLETELY BUT SOME GOOD THINGS
// "use client";

// import React, { useState, useEffect } from "react";
// import Navbar from "../../Navbar";
// import jsPDF from "jspdf";
// import "../../globals.css";

// export default function SlideCreator() {
//   const [images, setImages] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [showFilename, setShowFilename] = useState(false);
//   const [addedTexts, setAddedTexts] = useState([]);
//   const [textInput, setTextInput] = useState("");
//   const [currentImageURL, setCurrentImageURL] = useState(null);
//   const [folderName, setFolderName] = useState(""); // Added state for folder name
//   const [folderStructure, setFolderStructure] = useState([]); // Added state for folder structure

//   useEffect(() => {
//     if (images[currentIndex]) {
//       const url = URL.createObjectURL(images[currentIndex]);
//       setCurrentImageURL(url);

//       return () => URL.revokeObjectURL(url); // Cleanup to prevent memory leaks
//     }
//   }, [images, currentIndex]);

//   const handleFolderSelect = (event) => {
//     const files = Array.from(event.target.files).filter((file) =>
//       file.type.startsWith("image/")
//     );

//     // Extract the folder name from the input files path
//     const folderPath = event.target.files[0]?.webkitRelativePath?.split("/")[0];
//     setFolderName(folderPath || "Unknown Folder");

//     // Organize files into folder structure (nested folders first)
//     const folderStructure = buildFolderStructure(files);
//     setFolderStructure(folderStructure);
//     setImages(files);
//     setCurrentIndex(0);
//   };

//   // Helper function to organize files into folder structure
//   const buildFolderStructure = (files) => {
//     const folderMap = {};
//     files.forEach((file) => {
//       const path = file.webkitRelativePath.split("/");
//       const folder = path[0];
//       const subfolder = path[1];
//       const filename = path.slice(2).join("/");

//       if (!folderMap[folder]) {
//         folderMap[folder] = {};
//       }

//       if (subfolder) {
//         if (!folderMap[folder][subfolder]) {
//           folderMap[folder][subfolder] = [];
//         }
//         folderMap[folder][subfolder].push(file);
//       } else {
//         folderMap[folder][filename] = file;
//       }
//     });

//     return Object.entries(folderMap).map(([folderName, subfolders]) => ({
//       folderName,
//       subfolders: Object.entries(subfolders).map(([subfolderName, files]) => ({
//         subfolderName,
//         files,
//       })),
//     }));
//   };

//   const handleNextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const handlePrevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   const handleToggleFilename = () => {
//     setShowFilename((prevState) => !prevState);
//   };

//   const handleAddText = () => {
//     if (textInput.trim() !== "") {
//       setAddedTexts([...addedTexts, textInput]);
//       setTextInput("");
//     }
//   };

//   const handleDeleteText = (index) => {
//     const updatedTexts = addedTexts.filter((_, i) => i !== index);
//     setAddedTexts(updatedTexts);
//   };

//   const handleDownload = () => {
//     const blob = new Blob([addedTexts.join("\n")], { type: "text/plain" });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = "words.txt";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handleExportToPDF = async () => {
//     const pdf = new jsPDF();
//     let pageHeight = pdf.internal.pageSize.height;
//     let yOffset = 10; // Starting position

//     // Iterate through folders and subfolders to print images and file names
//     for (const folder of folderStructure) {
//       pdf.setFontSize(16);
//       pdf.text(folder.folderName, 10, yOffset); // Folder name as title
//       yOffset += 10;

//       // Iterate through subfolders and print images
//       for (const subfolder of folder.subfolders) {
//         const imagesInSubfolder = subfolder.files;

//         pdf.setFontSize(14);
//         pdf.text(subfolder.subfolderName, 10, yOffset); // Subfolder name as title
//         yOffset += 10;

//         // Sort the images by their numeric file names (e.g., 1.jpg, 2.jpg)
//         imagesInSubfolder.sort((a, b) => {
//           const numA = parseInt(a.name.split('.')[0], 10);
//           const numB = parseInt(b.name.split('.')[0], 10);
//           return numA - numB;
//         });

//         // Add a new page for each subfolder
//         pdf.addPage();
//         yOffset = 10;

//         // Iterate through images in subfolder and print each image
//         for (const image of imagesInSubfolder) {
//           const imageUrl = URL.createObjectURL(image);
//           const img = new Image();
//           img.src = imageUrl;

//           await new Promise((resolve) => {
//             img.onload = () => {
//               const imgWidth = 190;
//               const imgHeight = (img.height / img.width) * imgWidth;

//               // Check if the image fits on the current page
//               if (yOffset + imgHeight > pageHeight - 20) {
//                 pdf.addPage(); // Add a new page if it doesn't fit
//                 yOffset = 10;
//               }

//               pdf.addImage(img, "JPEG", 10, yOffset, imgWidth, imgHeight);
//               const fileName = image.name.replace(/\.[^/.]+$/, ""); // Remove file extension
//               pdf.text(fileName, 10, yOffset + imgHeight + 5); // File name below the image
//               yOffset += imgHeight + 15; // Adjust yOffset for the next image

//               URL.revokeObjectURL(imageUrl); // Cleanup
//               resolve();
//             };
//           });
//         }

//         // Print folder name above the file names after the set of images for the subfolder
//         if (yOffset + 10 > pageHeight - 20) {
//           pdf.addPage();
//           yOffset = 10;
//         }

//         pdf.setFontSize(12);
//         pdf.text(subfolder.subfolderName, 10, yOffset); // Subfolder name above the files
//         yOffset += 10;

//         imagesInSubfolder.forEach((image) => {
//           if (yOffset + 10 > pageHeight - 20) {
//             pdf.addPage();
//             yOffset = 10;
//           }
//           const fileName = image.name.replace(/\.[^/.]+$/, "");
//           pdf.text(fileName, 10, yOffset);
//           yOffset += 10;
//         });
//       }
//     }

//     // Add a page for the added vocabulary words
//     if (addedTexts.length > 0) {
//       if (yOffset + 10 > pageHeight - 20) {
//         pdf.addPage();
//         yOffset = 10;
//       }
//       pdf.setFontSize(12);
//       pdf.text("Added Words and Phrases:", 10, yOffset);
//       yOffset += 10;

//       addedTexts.forEach((text, index) => {
//         if (yOffset + 10 > pageHeight - 20) {
//           pdf.addPage();
//           yOffset = 10;
//         }
//         pdf.text(`${text}`, 10, yOffset);
//         yOffset += 10;
//       });
//     }

//     // Save the PDF
//     pdf.save("images.pdf");
//   };

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === "ArrowRight") {
//         handleNextSlide();
//       } else if (e.key === "ArrowLeft") {
//         handlePrevSlide();
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [images]);

//   return (
//     <div>
//       <Navbar />
//       <div className="p-4">
//         <h1 className="text-2xl font-bold text-center mb-4">Slide Creator</h1>

//         <div className="text-center mb-6">
//           <input
//             type="file"
//             webkitdirectory=""
//             mozdirectory=""
//             directory=""
//             multiple
//             onChange={handleFolderSelect}
//             className="cursor-pointer p-2 border rounded-lg"
//           />
//         </div>

//         {images.length > 0 && (
//           <div className="text-center mb-6">
//             <div
//               className="w-full max-w-md h-64 bg-gray-200 flex items-center justify-center border border-black rounded-md mx-auto cursor-pointer relative"
//               onClick={handleToggleFilename}
//             >
//               {showFilename ? (
//                 <p className="text-lg font-semibold text-gray-800">
//                   {images[currentIndex].name.replace(/\.[^/.]+$/, "")}
//                 </p>
//               ) : (
//                 currentImageURL && (
//                   <img
//                     src={currentImageURL}
//                     alt="Slide"
//                     className="h-full object-contain transition-transform transform-gpu"
//                   />
//                 )
//               )}
//             </div>

//             <div className="flex justify-center gap-4 mt-4">
//               <button
//                 className="p-2 bg-gray-800 text-white rounded-lg"
//                 onClick={handlePrevSlide}
//               >
//                 Previous
//               </button>
//               <button
//                 className="p-2 bg-gray-800 text-white rounded-lg"
//                 onClick={handleNextSlide}
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         )}

//         <div className="text-center mb-6">
//           <input
//             type="text"
//             value={textInput}
//             onChange={(e) => setTextInput(e.target.value)}
//             onKeyDown={(e) => e.key === "Enter" && handleAddText()}
//             placeholder="Add a word or phrase"
//             className="p-2 border rounded-lg w-2/3"
//           />
//           <button
//             onClick={handleAddText}
//             className="p-2 bg-green-600 text-white ml-4 rounded-lg"
//           >
//             Add
//           </button>
//         </div>

//         <div className="text-center mb-6">
//           <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
//             {addedTexts.map((text, index) => (
//               <div
//                 key={index}
//                 className="flex items-center gap-2 p-2 border border-gray-400 rounded-lg hover:bg-blue-200 transition"
//               >
//                 <span>{text}</span>
//                 <button
//                   onClick={() => handleDeleteText(index)}
//                   className="p-1 bg-[#8F9779] text-white rounded-lg"
//                 >
//                   ➔
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         {addedTexts.length > 0 && (
//           <div className="text-center">
//             <button
//               onClick={handleDownload}
//               className="p-2 bg-blue-600 text-white rounded-lg mr-4"
//             >
//               Download Words
//             </button>
//             <button
//               onClick={handleExportToPDF}
//               className="p-2 bg-purple-600 text-white rounded-lg"
//             >
//               Export to PDF
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

//CODE 9 SOME PROBLEMS
// "use client";

// import React, { useState, useEffect } from "react";
// import Navbar from "../../Navbar";
// import jsPDF from "jspdf";
// import "../../globals.css";

// export default function SlideCreator() {
//   const [images, setImages] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [showFilename, setShowFilename] = useState(false);
//   const [addedTexts, setAddedTexts] = useState([]);
//   const [textInput, setTextInput] = useState("");
//   const [currentImageURL, setCurrentImageURL] = useState(null);
//   const [folderName, setFolderName] = useState(""); // Added state for folder name
//   const [folderStructure, setFolderStructure] = useState([]); // Added state for folder structure

//   useEffect(() => {
//     if (images[currentIndex]) {
//       const url = URL.createObjectURL(images[currentIndex]);
//       setCurrentImageURL(url);

//       return () => URL.revokeObjectURL(url); // Cleanup to prevent memory leaks
//     }
//   }, [images, currentIndex]);

//   const handleFolderSelect = (event) => {
//     const files = Array.from(event.target.files).filter((file) =>
//       file.type.startsWith("image/")
//     );

//     // Extract the folder name from the input files path
//     const folderPath = event.target.files[0]?.webkitRelativePath?.split("/")[0];
//     setFolderName(folderPath || "Unknown Folder");

//     // Organize files into folder structure (nested folders first)
//     const folderStructure = buildFolderStructure(files);
//     setFolderStructure(folderStructure);
//     setImages(files);
//     setCurrentIndex(0);
//   };

//   // Helper function to organize files into folder structure
//   const buildFolderStructure = (files) => {
//     const folderMap = {};
//     files.forEach((file) => {
//       const path = file.webkitRelativePath.split("/");
//       const folder = path[0];
//       const subfolder = path[1];
//       const filename = path.slice(2).join("/");

//       if (!folderMap[folder]) {
//         folderMap[folder] = {};
//       }

//       if (subfolder) {
//         if (!folderMap[folder][subfolder]) {
//           folderMap[folder][subfolder] = [];
//         }
//         folderMap[folder][subfolder].push(file);
//       } else {
//         folderMap[folder][filename] = file;
//       }
//     });

//     return Object.entries(folderMap).map(([folderName, subfolders]) => ({
//       folderName,
//       subfolders: Object.entries(subfolders).map(([subfolderName, files]) => ({
//         subfolderName,
//         files,
//       })),
//     }));
//   };

//   const handleNextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const handlePrevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   const handleToggleFilename = () => {
//     setShowFilename((prevState) => !prevState);
//   };

//   const handleAddText = () => {
//     if (textInput.trim() !== "") {
//       setAddedTexts([...addedTexts, textInput]);
//       setTextInput("");
//     }
//   };

//   const handleDeleteText = (index) => {
//     const updatedTexts = addedTexts.filter((_, i) => i !== index);
//     setAddedTexts(updatedTexts);
//   };

//   const handleDownload = () => {
//     const blob = new Blob([addedTexts.join("\n")], { type: "text/plain" });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = "words.txt";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handleExportToPDF = async () => {
//     const pdf = new jsPDF();
//     let pageHeight = pdf.internal.pageSize.height;
//     let yOffset = 10; // Starting position

//     // Iterate through folders and subfolders to print images and file names
//     for (const folder of folderStructure) {
//       pdf.setFontSize(16);
//       pdf.text(folder.folderName, 10, yOffset); // Folder name as title
//       yOffset += 10;

//       // Add a new page for the folder
//       pdf.addPage();
//       yOffset = 10;

//       // Iterate through subfolders and print images
//       for (const subfolder of folder.subfolders) {
//         const imagesInSubfolder = subfolder.files;

//         pdf.setFontSize(14);
//         pdf.text(subfolder.subfolderName, 10, yOffset); // Subfolder name as title
//         yOffset += 10;

//         // Sort the images by their numeric file names (e.g., 1.jpg, 2.jpg)
//         imagesInSubfolder.sort((a, b) => {
//           const numA = parseInt(a.name.split('.')[0], 10);
//           const numB = parseInt(b.name.split('.')[0], 10);
//           return numA - numB;
//         });

//         // Add a new page for each subfolder
//         pdf.addPage();
//         yOffset = 10;

//         // Iterate through images in subfolder and print each image
//         for (const image of imagesInSubfolder) {
//           const imageUrl = URL.createObjectURL(image);
//           const img = new Image();
//           img.src = imageUrl;

//           await new Promise((resolve) => {
//             img.onload = () => {
//               const imgWidth = 190;
//               const imgHeight = (img.height / img.width) * imgWidth;

//               // Check if the image fits on the current page
//               if (yOffset + imgHeight > pageHeight - 20) {
//                 pdf.addPage(); // Add a new page if it doesn't fit
//                 yOffset = 10;
//               }

//               pdf.addImage(img, "JPEG", 10, yOffset, imgWidth, imgHeight);
//               const fileName = image.name.replace(/\.[^/.]+$/, ""); // Remove file extension
//               pdf.text(fileName, 10, yOffset + imgHeight + 5); // File name below the image
//               yOffset += imgHeight + 15; // Adjust yOffset for the next image

//               URL.revokeObjectURL(imageUrl); // Cleanup
//               resolve();
//             };
//           });
//         }

//         // Print folder name above the file names after the set of images for the subfolder
//         if (yOffset + 10 > pageHeight - 20) {
//           pdf.addPage();
//           yOffset = 10;
//         }

//         pdf.setFontSize(12);
//         pdf.text(subfolder.subfolderName, 10, yOffset); // Subfolder name above the files
//         yOffset += 10;

//         imagesInSubfolder.forEach((image) => {
//           if (yOffset + 10 > pageHeight - 20) {
//             pdf.addPage();
//             yOffset = 10;
//           }
//           const fileName = image.name.replace(/\.[^/.]+$/, "");
//           pdf.text(fileName, 10, yOffset);
//           yOffset += 10;
//         });
//       }
//     }

//     // Add a page for the added vocabulary words
//     if (addedTexts.length > 0) {
//       pdf.addPage();
//       yOffset = 10;
//       pdf.setFontSize(12);
//       pdf.text("Added Words and Phrases:", 10, yOffset);
//       yOffset += 10;

//       addedTexts.forEach((text, index) => {
//         if (yOffset + 10 > pageHeight - 20) {
//           pdf.addPage();
//           yOffset = 10;
//         }
//         pdf.text(`${text}`, 10, yOffset);
//         yOffset += 10;
//       });
//     }

//     // Save the PDF
//     pdf.save("images.pdf");
//   };

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === "ArrowRight") {
//         handleNextSlide();
//       } else if (e.key === "ArrowLeft") {
//         handlePrevSlide();
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [images]);

//   return (
//     <div>
//       <Navbar />
//       <div className="p-4">
//         <h1 className="text-2xl font-bold text-center mb-4">Slide Creator</h1>

//         <div className="text-center mb-6">
//           <input
//             type="file"
//             webkitdirectory=""
//             mozdirectory=""
//             directory=""
//             multiple
//             onChange={handleFolderSelect}
//             className="cursor-pointer p-2 border rounded-lg"
//           />
//         </div>

//         {images.length > 0 && (
//           <div className="text-center mb-6">
//             <div
//               className="w-full max-w-md h-64 bg-gray-200 flex items-center justify-center border border-black rounded-md mx-auto cursor-pointer relative"
//               onClick={handleToggleFilename}
//             >
//               {showFilename ? (
//                 <p className="text-lg font-semibold text-gray-800">
//                   {images[currentIndex].name.replace(/\.[^/.]+$/, "")}
//                 </p>
//               ) : (
//                 currentImageURL && (
//                   <img
//                     src={currentImageURL}
//                     alt="Slide"
//                     className="h-full object-contain transition-transform transform-gpu"
//                   />
//                 )
//               )}
//             </div>

//             <div className="flex justify-center gap-4 mt-4">
//               <button
//                 className="p-2 bg-gray-800 text-white rounded-lg"
//                 onClick={handlePrevSlide}
//               >
//                 Previous
//               </button>
//               <button
//                 className="p-2 bg-gray-800 text-white rounded-lg"
//                 onClick={handleNextSlide}
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         )}

//         <div className="text-center mb-6">
//           <input
//             type="text"
//             value={textInput}
//             onChange={(e) => setTextInput(e.target.value)}
//             onKeyDown={(e) => e.key === "Enter" && handleAddText()}
//             placeholder="Add a word or phrase"
//             className="p-2 border rounded-lg w-2/3"
//           />
//           <button
//             onClick={handleAddText}
//             className="p-2 bg-green-600 text-white ml-4 rounded-lg"
//           >
//             Add
//           </button>
//         </div>

//         <div className="text-center mb-6">
//           <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
//             {addedTexts.map((text, index) => (
//               <div
//                 key={index}
//                 className="flex items-center gap-2 p-2 border border-gray-400 rounded-lg hover:bg-blue-200 transition"
//               >
//                 <span>{text}</span>
//                 <button
//                   onClick={() => handleDeleteText(index)}
//                   className="p-1 bg-[#8F9779] text-white rounded-lg"
//                 >
//                   ➔
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         {addedTexts.length > 0 && (
//           <div className="text-center">
//             <button
//               onClick={handleDownload}
//               className="p-2 bg-blue-600 text-white rounded-lg mr-4"
//             >
//               Download Words
//             </button>
//             <button
//               onClick={handleExportToPDF}
//               className="p-2 bg-purple-600 text-white rounded-lg"
//             >
//               Export to PDF
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

//CODE 10 IT ONLY PRINTS THE SLIDES
// "use client";

// import React, { useState, useEffect } from "react";
// import Navbar from "../../Navbar";
// import jsPDF from "jspdf";
// import "../../globals.css";

// export default function SlideCreator() {
//   const [folderStructure, setFolderStructure] = useState([]);
//   const [currentSlides, setCurrentSlides] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [showFilename, setShowFilename] = useState(false);

//   const handleFolderSelect = (event) => {
//     const files = Array.from(event.target.files).filter((file) =>
//       file.type.startsWith("image/")
//     );

//     const folderStructure = buildFolderStructure(files);
//     setFolderStructure(folderStructure);

//     const allSlides = flattenSlides(folderStructure);
//     setCurrentSlides(allSlides);
//     setCurrentIndex(0);
//   };

//   const buildFolderStructure = (files) => {
//     const folderMap = {};

//     files.forEach((file) => {
//       const path = file.webkitRelativePath.split("/");
//       const level1 = path[0]; // First-level folder
//       const level2 = path[1]; // Second-level folder
//       const filename = path.slice(2).join("/");

//       if (!folderMap[level1]) folderMap[level1] = {};
//       if (!folderMap[level1][level2]) folderMap[level1][level2] = [];
//       folderMap[level1][level2].push(file);
//     });

//     return Object.entries(folderMap)
//       .map(([level1Name, level2Folders]) => ({
//         folderName: level1Name,
//         subfolders: Object.entries(level2Folders)
//           .map(([level2Name, files]) => ({
//             subfolderName: level2Name,
//             files: files.sort((a, b) => extractNumber(a.name) - extractNumber(b.name)),
//           }))
//           .sort((a, b) => extractNumber(a.subfolderName) - extractNumber(b.subfolderName)),
//       }))
//       .sort((a, b) => extractNumber(a.folderName) - extractNumber(b.folderName));
//   };

//   const extractNumber = (name) => {
//     const match = name.match(/^(\d+)\./); // Match the numeric prefix followed by a dot
//     return match ? parseInt(match[1], 10) : Number.MAX_SAFE_INTEGER;
//   };

//   const flattenSlides = (structure) => {
//     const slides = [];
//     structure.forEach((level1) => {
//       level1.subfolders.forEach((level2) => {
//         level2.files.forEach((file) => {
//           slides.push({
//             level1: level1.folderName,
//             level2: level2.subfolderName,
//             file,
//           });
//         });
//       });
//     });
//     return slides;
//   };

//   const handleNextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % currentSlides.length);
//   };

//   const handlePrevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       (prevIndex - 1 + currentSlides.length) % currentSlides.length
//     );
//   };

//   const handleToggleFilename = () => {
//     setShowFilename((prevState) => !prevState);
//   };

//   const handleExportToPDF = async () => {
//     const pdf = new jsPDF();
//     let pageHeight = pdf.internal.pageSize.height;
//     let yOffset = 10;

//     for (const level1 of folderStructure) {
//       pdf.setFontSize(16);
//       pdf.text(level1.folderName, 10, yOffset);
//       yOffset += 10;

//       for (const level2 of level1.subfolders) {
//         for (const file of level2.files) {
//           const imgURL = URL.createObjectURL(file);
//           const img = new Image();
//           img.src = imgURL;

//           await new Promise((resolve) => {
//             img.onload = () => {
//               const imgWidth = 190;
//               const imgHeight = (img.height / img.width) * imgWidth;

//               if (yOffset + imgHeight + 20 > pageHeight - 20) {
//                 pdf.addPage();
//                 yOffset = 10;
//               }

//               pdf.addImage(img, "JPEG", 10, yOffset, imgWidth, imgHeight);
//               pdf.text(file.name.replace(/\.[^/.]+$/, ""), 10, yOffset + imgHeight + 10);
//               yOffset += imgHeight + 20;

//               URL.revokeObjectURL(imgURL);
//               resolve();
//             };
//           });
//         }
//       }
//     }

//     pdf.save("slides.pdf");
//   };

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === "ArrowRight") handleNextSlide();
//       else if (e.key === "ArrowLeft") handlePrevSlide();
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [currentSlides]);

//   return (
//     <div>
//       <Navbar />
//       <div className="p-4">
//         <h1 className="text-2xl font-bold text-center mb-4">Slide Creator</h1>
//         <div className="text-center mb-6">
//           <input
//             type="file"
//             webkitdirectory=""
//             directory=""
//             multiple
//             onChange={handleFolderSelect}
//             className="cursor-pointer p-2 border rounded-lg"
//           />
//         </div>
//         {currentSlides.length > 0 && (
//           <div className="text-center mb-6">
//             <div
//               className="w-full max-w-md h-64 bg-gray-200 flex items-center justify-center border border-black rounded-md mx-auto cursor-pointer relative"
//               onClick={handleToggleFilename}
//             >
//               {showFilename ? (
//                 <p className="text-lg font-semibold text-gray-800">
//                   {currentSlides[currentIndex].file.name.replace(/\.[^/.]+$/, "")}
//                 </p>
//               ) : (
//                 <img
//                   src={URL.createObjectURL(currentSlides[currentIndex].file)}
//                   alt="Slide"
//                   className="h-full object-contain transition-transform"
//                 />
//               )}
//             </div>
//             <div className="flex justify-center gap-4 mt-4">
//               <button
//                 className="p-2 bg-gray-800 text-white rounded-lg"
//                 onClick={handlePrevSlide}
//               >
//                 Previous
//               </button>
//               <button
//                 className="p-2 bg-gray-800 text-white rounded-lg"
//                 onClick={handleNextSlide}
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         )}
//         <div className="text-center">
//           <button
//             onClick={handleExportToPDF}
//             className="p-2 bg-purple-600 text-white rounded-lg"
//           >
//             Export to PDF
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

//CODE 11 ALMOST THERE
// "use client";

// import React, { useState, useEffect } from "react";
// import Navbar from "../../Navbar";
// import jsPDF from "jspdf";
// import "../../globals.css";

// export default function SlideCreator() {
//   const [folderStructure, setFolderStructure] = useState([]);
//   const [currentSlides, setCurrentSlides] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [showFilename, setShowFilename] = useState(false);

//   const handleFolderSelect = (event) => {
//     const files = Array.from(event.target.files).filter((file) =>
//       file.type.startsWith("image/")
//     );

//     const folderStructure = buildFolderStructure(files);
//     setFolderStructure(folderStructure);

//     const allSlides = flattenSlides(folderStructure);
//     setCurrentSlides(allSlides);
//     setCurrentIndex(0);
//   };

//   const buildFolderStructure = (files) => {
//     const folderMap = {};

//     files.forEach((file) => {
//       const path = file.webkitRelativePath.split("/");
//       const level1 = path[0]; // First-level folder
//       const level2 = path[1]; // Second-level folder
//       const filename = path.slice(2).join("/");

//       if (!folderMap[level1]) folderMap[level1] = {};
//       if (!folderMap[level1][level2]) folderMap[level1][level2] = [];
//       folderMap[level1][level2].push(file);
//     });

//     return Object.entries(folderMap)
//       .map(([level1Name, level2Folders]) => ({
//         folderName: level1Name,
//         subfolders: Object.entries(level2Folders)
//           .map(([level2Name, files]) => ({
//             subfolderName: level2Name,
//             files: files.sort((a, b) => extractNumber(a.name) - extractNumber(b.name)),
//           }))
//           .sort((a, b) => extractNumber(a.subfolderName) - extractNumber(b.subfolderName)),
//       }))
//       .sort((a, b) => extractNumber(a.folderName) - extractNumber(b.folderName));
//   };

//   const extractNumber = (name) => {
//     const match = name.match(/^(\d+)\./); // Match the numeric prefix followed by a dot
//     return match ? parseInt(match[1], 10) : Number.MAX_SAFE_INTEGER;
//   };

//   const flattenSlides = (structure) => {
//     const slides = [];
//     structure.forEach((level1) => {
//       level1.subfolders.forEach((level2) => {
//         level2.files.forEach((file) => {
//           slides.push({
//             level1: level1.folderName,
//             level2: level2.subfolderName,
//             file,
//           });
//         });
//       });
//     });
//     return slides;
//   };

//   const handleNextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % currentSlides.length);
//   };

//   const handlePrevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       (prevIndex - 1 + currentSlides.length) % currentSlides.length
//     );
//   };

//   const handleToggleFilename = () => {
//     setShowFilename((prevState) => !prevState);
//   };

//   const handleExportToPDF = async () => {
//     const pdf = new jsPDF();
//     let pageHeight = pdf.internal.pageSize.height;
//     let yOffset = 10;

//     for (const level1 of folderStructure) {
//       pdf.setFontSize(16);
//       pdf.text(level1.folderName, 10, yOffset);
//       yOffset += 10;

//       for (const level2 of level1.subfolders) {
//         pdf.setFontSize(14);
//         pdf.text(level2.subfolderName, 10, yOffset);
//         yOffset += 10;

//         for (const file of level2.files) {
//           const imgURL = URL.createObjectURL(file);
//           const img = new Image();
//           img.src = imgURL;

//           await new Promise((resolve) => {
//             img.onload = () => {
//               const imgWidth = 190;
//               const imgHeight = (img.height / img.width) * imgWidth;

//               if (yOffset + imgHeight + 20 > pageHeight - 20) {
//                 pdf.addPage();
//                 yOffset = 10;
//               }

//               pdf.addImage(img, "JPEG", 10, yOffset, imgWidth, imgHeight);
//               pdf.text(file.name.replace(/\.[^/.]+$/, ""), 10, yOffset + imgHeight + 10);
//               yOffset += imgHeight + 20;

//               URL.revokeObjectURL(imgURL);
//               resolve();
//             };
//           });
//         }

//         // Add the second-level folder name and file list after all images
//         pdf.addPage();
//         pdf.text(level2.subfolderName, 10, 10);
//         pdf.text(" ", 10, 20); // Blank line
//         yOffset = 30;
//         for (const file of level2.files) {
//           pdf.text(file.name, 10, yOffset);
//           yOffset += 10;
//         }
//         pdf.addPage();
//       }
//     }

//     pdf.save("slides.pdf");
//   };

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === "ArrowRight") handleNextSlide();
//       else if (e.key === "ArrowLeft") handlePrevSlide();
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [currentSlides]);

//   return (
//     <div>
//       <Navbar />
//       <div className="p-4">
//         <h1 className="text-2xl font-bold text-center mb-4">Slide Creator</h1>
//         <div className="text-center mb-6">
//           <input
//             type="file"
//             webkitdirectory=""
//             directory=""
//             multiple
//             onChange={handleFolderSelect}
//             className="cursor-pointer p-2 border rounded-lg"
//           />
//         </div>
//         {currentSlides.length > 0 && (
//           <div className="text-center mb-6">
//             <div
//               className="w-full max-w-md h-64 bg-gray-200 flex items-center justify-center border border-black rounded-md mx-auto cursor-pointer relative"
//               onClick={handleToggleFilename}
//             >
//               {showFilename ? (
//                 <p className="text-lg font-semibold text-gray-800">
//                   {currentSlides[currentIndex].file.name.replace(/\.[^/.]+$/, "")}
//                 </p>
//               ) : (
//                 <img
//                   src={URL.createObjectURL(currentSlides[currentIndex].file)}
//                   alt="Slide"
//                   className="h-full object-contain transition-transform"
//                 />
//               )}
//             </div>
//             <div className="flex justify-center gap-4 mt-4">
//               <button
//                 className="p-2 bg-gray-800 text-white rounded-lg"
//                 onClick={handlePrevSlide}
//               >
//                 Previous
//               </button>
//               <button
//                 className="p-2 bg-gray-800 text-white rounded-lg"
//                 onClick={handleNextSlide}
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         )}
//         <div className="text-center">
//           <button
//             onClick={handleExportToPDF}
//             className="p-2 bg-purple-600 text-white rounded-lg"
//           >
//             Export to PDF
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

//CODE 12 EVEN CLOSER, NO VOCAB BOARD THOUGH. TITLES ARE IN A PAGE BY ITSELF
// "use client";

// import React, { useState, useEffect } from "react";
// import Navbar from "../../Navbar";
// import jsPDF from "jspdf";
// import "../../globals.css";

// export default function SlideCreator() {
//   const [folderStructure, setFolderStructure] = useState([]);
//   const [currentSlides, setCurrentSlides] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [showFilename, setShowFilename] = useState(false);

//   const handleFolderSelect = (event) => {
//     const files = Array.from(event.target.files).filter((file) =>
//       file.type.startsWith("image/")
//     );

//     const folderStructure = buildFolderStructure(files);
//     setFolderStructure(folderStructure);

//     const allSlides = flattenSlides(folderStructure);
//     setCurrentSlides(allSlides);
//     setCurrentIndex(0);
//   };

//   const buildFolderStructure = (files) => {
//     const folderMap = {};

//     files.forEach((file) => {
//       const path = file.webkitRelativePath.split("/");
//       const level1 = path[0]; // First-level folder
//       const level2 = path[1]; // Second-level folder
//       const filename = path.slice(2).join("/");

//       if (!folderMap[level1]) folderMap[level1] = {};
//       if (!folderMap[level1][level2]) folderMap[level1][level2] = [];
//       folderMap[level1][level2].push(file);
//     });

//     return Object.entries(folderMap)
//       .map(([level1Name, level2Folders]) => ({
//         folderName: level1Name,
//         subfolders: Object.entries(level2Folders)
//           .map(([level2Name, files]) => ({
//             subfolderName: level2Name,
//             files: files.sort((a, b) => extractNumber(a.name) - extractNumber(b.name)),
//           }))
//           .sort((a, b) => extractNumber(a.subfolderName) - extractNumber(b.subfolderName)),
//       }))
//       .sort((a, b) => extractNumber(a.folderName) - extractNumber(b.folderName));
//   };

//   const extractNumber = (name) => {
//     const match = name.match(/^(\d+)\./); // Match the numeric prefix followed by a dot
//     return match ? parseInt(match[1], 10) : Number.MAX_SAFE_INTEGER;
//   };

//   const flattenSlides = (structure) => {
//     const slides = [];
//     structure.forEach((level1) => {
//       level1.subfolders.forEach((level2) => {
//         level2.files.forEach((file) => {
//           slides.push({
//             level1: level1.folderName,
//             level2: level2.subfolderName,
//             file,
//           });
//         });
//       });
//     });
//     return slides;
//   };

//   const handleNextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % currentSlides.length);
//   };

//   const handlePrevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       (prevIndex - 1 + currentSlides.length) % currentSlides.length
//     );
//   };

//   const handleToggleFilename = () => {
//     setShowFilename((prevState) => !prevState);
//   };

//   const handleExportToPDF = async () => {
//     const pdf = new jsPDF();
//     let pageHeight = pdf.internal.pageSize.height;
//     let yOffset = 10;

//     for (const level1 of folderStructure) {
//       pdf.setFontSize(16);
//       pdf.text(level1.folderName, 10, yOffset);
//       yOffset += 10;

//       for (const level2 of level1.subfolders) {
//         let firstImage = true;

//         for (const file of level2.files) {
//           if (firstImage) {
//             // Add second-level folder name before the first image
//             pdf.setFontSize(14);
//             pdf.text(level2.subfolderName, 10, yOffset);
//             yOffset += 10;
//             firstImage = false;
//           }

//           const imgURL = URL.createObjectURL(file);
//           const img = new Image();
//           img.src = imgURL;

//           await new Promise((resolve) => {
//             img.onload = () => {
//               const imgWidth = 190;
//               const imgHeight = (img.height / img.width) * imgWidth;

//               if (yOffset + imgHeight + 20 > pageHeight - 20) {
//                 pdf.addPage();
//                 yOffset = 10;
//               }

//               pdf.addImage(img, "JPEG", 10, yOffset, imgWidth, imgHeight);
//               pdf.text(file.name.replace(/\.[^/.]+$/, ""), 10, yOffset + imgHeight + 10);
//               yOffset += imgHeight + 20;

//               URL.revokeObjectURL(imgURL);
//               resolve();
//             };
//           });
//         }

//         // Add the second-level folder name and file list after all images
//         pdf.addPage();
//         pdf.setFontSize(14);
//         pdf.text(level2.subfolderName, 10, 10);
//         pdf.text(" ", 10, 20); // Blank line
//         yOffset = 30;

//         for (const file of level2.files) {
//           pdf.text(file.name.replace(/\.[^/.]+$/, ""), 10, yOffset);
//           yOffset += 10;
//         }
//         pdf.addPage();
//       }
//     }

//     pdf.save("slides.pdf");
//   };

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === "ArrowRight") handleNextSlide();
//       else if (e.key === "ArrowLeft") handlePrevSlide();
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [currentSlides]);

//   return (
//     <div>
//       <Navbar />
//       <div className="p-4">
//         <h1 className="text-2xl font-bold text-center mb-4">Slide Creator</h1>
//         <div className="text-center mb-6">
//           <input
//             type="file"
//             webkitdirectory=""
//             directory=""
//             multiple
//             onChange={handleFolderSelect}
//             className="cursor-pointer p-2 border rounded-lg"
//           />
//         </div>
//         {currentSlides.length > 0 && (
//           <div className="text-center mb-6">
//             <div
//               className="w-full max-w-md h-64 bg-gray-200 flex items-center justify-center border border-black rounded-md mx-auto cursor-pointer relative"
//               onClick={handleToggleFilename}
//             >
//               {showFilename ? (
//                 <p className="text-lg font-semibold text-gray-800">
//                   {currentSlides[currentIndex].file.name.replace(/\.[^/.]+$/, "")}
//                 </p>
//               ) : (
//                 <img
//                   src={URL.createObjectURL(currentSlides[currentIndex].file)}
//                   alt="Slide"
//                   className="h-full object-contain transition-transform"
//                 />
//               )}
//             </div>
//             <div className="flex justify-center gap-4 mt-4">
//               <button
//                 className="p-2 bg-gray-800 text-white rounded-lg"
//                 onClick={handlePrevSlide}
//               >
//                 Previous
//               </button>
//               <button
//                 className="p-2 bg-gray-800 text-white rounded-lg"
//                 onClick={handleNextSlide}
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         )}
//         <div className="text-center">
//           <button
//             onClick={handleExportToPDF}
//             className="p-2 bg-purple-600 text-white rounded-lg"
//           >
//             Export to PDF
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

//CODE 13 WORKS BUT THE DOWNLOAD BUTTON IS OFF SOMEWHERE. 
// "use client";

// import React, { useState, useEffect } from "react";
// import Navbar from "../../Navbar";
// import jsPDF from "jspdf";
// import "../../globals.css";

// export default function SlideCreator() {
//   const [folderStructure, setFolderStructure] = useState([]);
//   const [currentSlides, setCurrentSlides] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [showFilename, setShowFilename] = useState(false);
//   const [words, setWords] = useState([]);
//   const [newWord, setNewWord] = useState("");

//   const handleFolderSelect = (event) => {
//     const files = Array.from(event.target.files).filter((file) =>
//       file.type.startsWith("image/")
//     );

//     const folderStructure = buildFolderStructure(files);
//     setFolderStructure(folderStructure);

//     const allSlides = flattenSlides(folderStructure);
//     setCurrentSlides(allSlides);
//     setCurrentIndex(0);
//   };

//   const buildFolderStructure = (files) => {
//     const folderMap = {};

//     files.forEach((file) => {
//       const path = file.webkitRelativePath.split("/");
//       const level1 = path[0]; // First-level folder
//       const level2 = path[1]; // Second-level folder
//       const filename = path.slice(2).join("/");

//       if (!folderMap[level1]) folderMap[level1] = {};
//       if (!folderMap[level1][level2]) folderMap[level1][level2] = [];
//       folderMap[level1][level2].push(file);
//     });

//     return Object.entries(folderMap)
//       .map(([level1Name, level2Folders]) => ({
//         folderName: level1Name,
//         subfolders: Object.entries(level2Folders)
//           .map(([level2Name, files]) => ({
//             subfolderName: level2Name,
//             files: files.sort((a, b) => extractNumber(a.name) - extractNumber(b.name)),
//           }))
//           .sort((a, b) => extractNumber(a.subfolderName) - extractNumber(b.subfolderName)),
//       }))
//       .sort((a, b) => extractNumber(a.folderName) - extractNumber(b.folderName));
//   };

//   const extractNumber = (name) => {
//     const match = name.match(/^(\d+)\./); // Match the numeric prefix followed by a dot
//     return match ? parseInt(match[1], 10) : Number.MAX_SAFE_INTEGER;
//   };

//   const flattenSlides = (structure) => {
//     const slides = [];
//     structure.forEach((level1) => {
//       level1.subfolders.forEach((level2) => {
//         level2.files.forEach((file) => {
//           slides.push({
//             level1: level1.folderName,
//             level2: level2.subfolderName,
//             file,
//           });
//         });
//       });
//     });
//     return slides;
//   };

//   const handleNextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % currentSlides.length);
//   };

//   const handlePrevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       (prevIndex - 1 + currentSlides.length) % currentSlides.length
//     );
//   };

//   const handleToggleFilename = () => {
//     setShowFilename((prevState) => !prevState);
//   };

//   const handleExportToPDF = async () => {
//     const pdf = new jsPDF();
//     let pageHeight = pdf.internal.pageSize.height;
//     let yOffset = 10;

//     for (const level1 of folderStructure) {
//       pdf.setFontSize(16);
//       pdf.text(level1.folderName, 10, yOffset);
//       yOffset += 10;

//       for (const level2 of level1.subfolders) {
//         let firstImage = true;

//         for (const file of level2.files) {
//           if (firstImage) {
//             // Add second-level folder name before the first image
//             pdf.setFontSize(14);
//             pdf.text(level2.subfolderName, 10, yOffset);
//             yOffset += 10;
//             firstImage = false;
//           }

//           const imgURL = URL.createObjectURL(file);
//           const img = new Image();
//           img.src = imgURL;

//           await new Promise((resolve) => {
//             img.onload = () => {
//               const imgWidth = 190;
//               const imgHeight = (img.height / img.width) * imgWidth;

//               if (yOffset + imgHeight + 20 > pageHeight - 20) {
//                 pdf.addPage();
//                 yOffset = 10;
//               }

//               pdf.addImage(img, "JPEG", 10, yOffset, imgWidth, imgHeight);
//               pdf.text(file.name.replace(/\.[^/.]+$/, ""), 10, yOffset + imgHeight + 10);
//               yOffset += imgHeight + 20;

//               URL.revokeObjectURL(imgURL);
//               resolve();
//             };
//           });
//         }

//         // Add the second-level folder name and file list after all images
//         pdf.addPage();
//         pdf.setFontSize(14);
//         pdf.text(level2.subfolderName, 10, 10);
//         pdf.text(" ", 10, 20); // Blank line
//         yOffset = 30;

//         for (const file of level2.files) {
//           pdf.text(file.name.replace(/\.[^/.]+$/, ""), 10, yOffset);
//           yOffset += 10;
//         }
//         pdf.addPage();
//       }
//     }

//     pdf.save("slides.pdf");
//   };

//   const handleAddWord = () => {
//     if (newWord.trim() !== "") {
//       setWords([...words, newWord]);
//       setNewWord("");
//     }
//   };

//   const handleDeleteWord = (word) => {
//     setWords(words.filter((w) => w !== word));
//   };

//   const handleDownloadWords = () => {
//     const blob = new Blob([words.join("\n")], { type: "text/plain" });
//     const link = document.createElement("a");
//     link.href = URL.createObjectURL(blob);
//     link.download = "words.txt";
//     link.click();
//   };

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === "ArrowRight") handleNextSlide();
//       else if (e.key === "ArrowLeft") handlePrevSlide();
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [currentSlides]);

//   return (
//     <div>
//       <Navbar />
//       <div className="p-4">
//         <h1 className="text-2xl font-bold text-center mb-4">Slide Creator</h1>
//         <div className="text-center mb-6">
//           <input
//             type="file"
//             webkitdirectory=""
//             directory=""
//             multiple
//             onChange={handleFolderSelect}
//             className="cursor-pointer p-2 border rounded-lg"
//           />
//         </div>
//         {currentSlides.length > 0 && (
//           <div className="text-center mb-6">
//             <div
//               className="w-full max-w-md h-64 bg-gray-200 flex items-center justify-center border border-black rounded-md mx-auto cursor-pointer relative"
//               onClick={handleToggleFilename}
//             >
//               {showFilename ? (
//                 <p className="text-lg font-semibold text-gray-800">
//                   {currentSlides[currentIndex].file.name.replace(/\.[^/.]+$/, "")}
//                 </p>
//               ) : (
//                 <img
//                   src={URL.createObjectURL(currentSlides[currentIndex].file)}
//                   alt="Slide"
//                   className="h-full object-contain transition-transform"
//                 />
//               )}
//             </div>
//             <div className="flex justify-center gap-4 mt-4">
//               <button
//                 className="p-2 bg-gray-800 text-white rounded-lg"
//                 onClick={handlePrevSlide}
//               >
//                 Previous
//               </button>
//               <button
//                 className="p-2 bg-gray-800 text-white rounded-lg"
//                 onClick={handleNextSlide}
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         )}
//         <div className="text-center">
//           <button
//             onClick={handleExportToPDF}
//             className="p-2 bg-purple-600 text-white rounded-lg"
//           >
//             Export to PDF
//           </button>
//         </div>

//         <div className="text-center mt-6">
//           <input
//             type="text"
//             value={newWord}
//             onChange={(e) => setNewWord(e.target.value)}
//             className="p-2 border rounded-lg"
//             placeholder="Type a word"
//           />
//           <button
//             onClick={handleAddWord}
//             className="p-2 ml-2 bg-green-500 text-white rounded-lg"
//           >
//             Add Word
//           </button>
//         </div>

//         <div className="mt-4">
//           <div className="flex flex-wrap justify-center gap-4">
//             {words.map((word, index) => (
//               <div
//                 key={index}
//                 className="flex items-center bg-green-100 p-2 rounded-lg"
//               >
//                 <span>{word}</span>
//                 <button
//                   onClick={() => handleDeleteWord(word)}
//                   className="ml-2 text-green-500"
//                 >
//                   ➔
//                 </button>
//               </div>
//             ))}
//           </div>
//           <button
//             onClick={handleDownloadWords}
//             className="p-2 mt-4 bg-blue-600 text-white rounded-lg"
//           >
//             Download Words
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// CODE 14 WORKS FOR BATCHES
// "use client";

// import React, { useState, useEffect } from "react";
// import Navbar from "../../Navbar";
// import jsPDF from "jspdf";
// import "../../globals.css";

// export default function SlideCreator() {
//   const [folderStructure, setFolderStructure] = useState([]);
//   const [currentSlides, setCurrentSlides] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [showFilename, setShowFilename] = useState(false);
//   const [words, setWords] = useState([]);
//   const [newWord, setNewWord] = useState("");

//   const handleFolderSelect = (event) => {
//     const files = Array.from(event.target.files).filter((file) =>
//       file.type.startsWith("image/")
//     );

//     const folderStructure = buildFolderStructure(files);
//     setFolderStructure(folderStructure);

//     const allSlides = flattenSlides(folderStructure);
//     setCurrentSlides(allSlides);
//     setCurrentIndex(0);
//   };

//   const buildFolderStructure = (files) => {
//     const folderMap = {};

//     files.forEach((file) => {
//       const path = file.webkitRelativePath.split("/");
//       const level1 = path[0]; // First-level folder
//       const level2 = path[1]; // Second-level folder
//       const filename = path.slice(2).join("/");

//       if (!folderMap[level1]) folderMap[level1] = {};
//       if (!folderMap[level1][level2]) folderMap[level1][level2] = [];
//       folderMap[level1][level2].push(file);
//     });

//     return Object.entries(folderMap)
//       .map(([level1Name, level2Folders]) => ({
//         folderName: level1Name,
//         subfolders: Object.entries(level2Folders)
//           .map(([level2Name, files]) => ({
//             subfolderName: level2Name,
//             files: files.sort((a, b) => extractNumber(a.name) - extractNumber(b.name)),
//           }))
//           .sort((a, b) => extractNumber(a.subfolderName) - extractNumber(b.subfolderName)),
//       }))
//       .sort((a, b) => extractNumber(a.folderName) - extractNumber(b.folderName));
//   };

//   const extractNumber = (name) => {
//     const match = name.match(/^(\d+)\./); // Match the numeric prefix followed by a dot
//     return match ? parseInt(match[1], 10) : Number.MAX_SAFE_INTEGER;
//   };

//   const flattenSlides = (structure) => {
//     const slides = [];
//     structure.forEach((level1) => {
//       level1.subfolders.forEach((level2) => {
//         level2.files.forEach((file) => {
//           slides.push({
//             level1: level1.folderName,
//             level2: level2.subfolderName,
//             file,
//           });
//         });
//       });
//     });
//     return slides;
//   };

//   const handleNextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % currentSlides.length);
//   };

//   const handlePrevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       (prevIndex - 1 + currentSlides.length) % currentSlides.length
//     );
//   };

//   const handleToggleFilename = () => {
//     setShowFilename((prevState) => !prevState);
//   };

//   const handleExportToPDF = async () => {
//     const pdf = new jsPDF();
//     let pageHeight = pdf.internal.pageSize.height;
//     let yOffset = 10;

//     //Defining margin here
//     const margin = 10;

//     for (const level1 of folderStructure) {
//       pdf.setFontSize(16);
//       pdf.text(level1.folderName, 10, yOffset);
//       yOffset += 10;

//       for (const level2 of level1.subfolders) {
//         let firstImage = true;

//         for (const file of level2.files) {
//           if (firstImage) {
//             // Add second-level folder name before the first image
//             pdf.setFontSize(14);
//             pdf.text(level2.subfolderName, 10, yOffset);
//             yOffset += 10;
//             firstImage = false;
//           }

//           const imgURL = URL.createObjectURL(file);
//           const img = new Image();
//           img.src = imgURL;

//           await new Promise((resolve) => {
//             img.onload = () => {
//               const imgWidth = 190;
//               const imgHeight = (img.height / img.width) * imgWidth;

//               if (yOffset + imgHeight + 20 > pageHeight - 20) {
//                 pdf.addPage();
//                 yOffset = 10;
//               }

//               pdf.addImage(img, "JPEG", 10, yOffset, imgWidth, imgHeight);
//               pdf.text(file.name.replace(/\.[^/.]+$/, ""), 10, yOffset + imgHeight + 10);
//               yOffset += imgHeight + 20;

//               URL.revokeObjectURL(imgURL);
//               resolve();
//             };
//           });
//         }

//         // Add the second-level folder name and file list after all images
//         pdf.addPage();
//         pdf.setFontSize(14);
//         pdf.text(level2.subfolderName, 10, 10);
//         pdf.text(" ", 10, 20); // Blank line
//         yOffset = 30;

//         for (const file of level2.files) {
//           pdf.text(file.name.replace(/\.[^/.]+$/, ""), 10, yOffset);
//           yOffset += 10;
//         }
//         pdf.addPage();
//       }
//     }

//     // Add Vocabulary page with numbered words
//     // pdf.addPage();
//     pdf.setFontSize(16);
//     pdf.text("Vocabulary", 10, 15); // Title of the page
//     yOffset = 25; // Space for the title

//     // Add words with numbering
//     words.forEach((word, index) => {
//       if (yOffset + 10 > pageHeight - margin) {
//         pdf.addPage(); // Create a new page if it doesn't fit
//         yOffset = margin + 10; // Reset yOffset for the new page
//       }
      
//       pdf.setFontSize(12);
//       pdf.text(`${index + 1}. ${word}`, margin, yOffset);
//       yOffset += 10; // Increase yOffset for the next word
//     });

//     pdf.save("slides.pdf");
//   };

//   const handleAddWord = () => {
//     if (newWord.trim() !== "") {
//       setWords([...words, newWord]);
//       setNewWord("");
//     }
//   };

//   const handleDeleteWord = (word) => {
//     setWords(words.filter((w) => w !== word));
//   };

//   const handleDownloadWords = () => {
//     const blob = new Blob([words.join("\n")], { type: "text/plain" });
//     const link = document.createElement("a");
//     link.href = URL.createObjectURL(blob);
//     link.download = "words.txt";
//     link.click();
//   };

//   // Listen for Enter key to add the word
//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       handleAddWord();
//     }
//   };

//   useEffect(() => {
//     const handleKeyDownEvent = (e) => {
//       if (e.key === "ArrowRight") handleNextSlide();
//       else if (e.key === "ArrowLeft") handlePrevSlide();
//     };

//     window.addEventListener("keydown", handleKeyDownEvent);
//     return () => window.removeEventListener("keydown", handleKeyDownEvent);
//   }, [currentSlides]);

//   return (
//     <div>
//       <Navbar />
//       <div className="p-4">
//         <h1 className="text-2xl font-bold text-center mb-4">Slide Creator</h1>
//         <div className="text-center mb-6">
//           <input
//             type="file"
//             webkitdirectory=""
//             directory=""
//             multiple
//             onChange={handleFolderSelect}
//             className="cursor-pointer p-2 border rounded-lg"
//           />
//         </div>
//         {currentSlides.length > 0 && (
//           <div className="text-center mb-6">
//             <div
//               className="w-full max-w-md h-64 bg-gray-200 flex items-center justify-center border border-black rounded-md mx-auto cursor-pointer relative"
//               onClick={handleToggleFilename}
//             >
//               {showFilename ? (
//                 <p className="text-lg font-semibold text-gray-800">
//                   {currentSlides[currentIndex].file.name.replace(/\.[^/.]+$/, "")}
//                 </p>
//               ) : (
//                 <img
//                   src={URL.createObjectURL(currentSlides[currentIndex].file)}
//                   alt="Slide"
//                   className="h-full object-contain transition-transform"
//                 />
//               )}
//             </div>
//             <div className="flex justify-center gap-4 mt-4">
//               <button
//                 className="p-2 bg-gray-800 text-white rounded-lg"
//                 onClick={handlePrevSlide}
//               >
//                 Previous
//               </button>
//               <button
//                 className="p-2 bg-gray-800 text-white rounded-lg"
//                 onClick={handleNextSlide}
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         )}
//         <div className="text-center mb-4">
//           <button
//             onClick={handleExportToPDF}
//             className="p-2 bg-purple-600 text-white rounded-lg"
//           >
//             Export to PDF
//           </button>
//           <button
//             onClick={handleDownloadWords}
//             className="p-2 ml-4 bg-blue-600 text-white rounded-lg"
//           >
//             Download Words
//           </button>
//         </div>

//         {/* Word Input and Add Word Button below the other buttons */}
//         <div className="text-center mb-4">
//           <input
//             type="text"
//             value={newWord}
//             onChange={(e) => setNewWord(e.target.value)}
//             onKeyDown={handleKeyDown}
//             className="p-2 border rounded-lg"
//             placeholder="Type a word"
//           />
//           <button
//             onClick={handleAddWord}
//             className="p-2 ml-2 bg-green-500 text-white rounded-lg"
//           >
//             Add Word
//           </button>
//         </div>

//         {/* Display added words */}
//         <div className="mt-4">
//           <div className="flex flex-wrap justify-center gap-4">
//             {words.map((word, index) => (
//               <div
//                 key={index}
//                 className="flex items-center bg-green-100 p-2 rounded-lg"
//               >
//                 <span>{word}</span>
//                 <button
//                   onClick={() => handleDeleteWord(word)}
//                   className="ml-2 text-green-500"
//                 >
//                   ➔
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

//CODE 15 WORKS FOR SINGLE FOLDERS ONLY

"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar";
import jsPDF from "jspdf";
import "../../globals.css";

export default function SlideCreator() {
  const [folderStructure, setFolderStructure] = useState([]);
  const [currentSlides, setCurrentSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFilename, setShowFilename] = useState(false);
  const [words, setWords] = useState([]);
  const [newWord, setNewWord] = useState("");

  const handleFolderSelect = (event) => {
    const files = Array.from(event.target.files).filter((file) =>
      file.type.startsWith("image/")
    );

    const folderStructure = buildFolderStructure(files);
    setFolderStructure(folderStructure);

    const allSlides = flattenSlides(folderStructure);
    setCurrentSlides(allSlides);
    setCurrentIndex(0);
  };

  const buildFolderStructure = (files) => {
    const folderMap = {};

    files.forEach((file) => {
      const path = file.webkitRelativePath.split("/");
      const level1 = path[0]; // First-level folder
      const level2 = path[1]; // Second-level folder
      const filename = path.slice(2).join("/");

      if (!folderMap[level1]) folderMap[level1] = {};
      if (!folderMap[level1][level2]) folderMap[level1][level2] = [];
      folderMap[level1][level2].push(file);
    });

    return Object.entries(folderMap)
      .map(([level1Name, level2Folders]) => ({
        folderName: level1Name,
        subfolders: Object.entries(level2Folders)
          .map(([level2Name, files]) => ({
            subfolderName: level2Name,
            files: files.sort((a, b) => extractNumber(a.name) - extractNumber(b.name)),
          }))
          .sort((a, b) => extractNumber(a.subfolderName) - extractNumber(b.subfolderName)),
      }))
      .sort((a, b) => extractNumber(a.folderName) - extractNumber(b.folderName));
  };

  const extractNumber = (name) => {
    const match = name.match(/^(\d+)\./); // Match the numeric prefix followed by a dot
    return match ? parseInt(match[1], 10) : Number.MAX_SAFE_INTEGER;
  };

  const flattenSlides = (structure) => {
    const slides = [];
    structure.forEach((level1) => {
      level1.subfolders.forEach((level2) => {
        level2.files.forEach((file) => {
          slides.push({
            level1: level1.folderName,
            level2: level2.subfolderName,
            file,
          });
        });
      });
    });
    return slides;
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % currentSlides.length);
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + currentSlides.length) % currentSlides.length
    );
  };

  const handleToggleFilename = () => {
    setShowFilename((prevState) => !prevState);
  };

  const handleExportToPDF = async () => {
    const pdf = new jsPDF();
    let pageHeight = pdf.internal.pageSize.height;
    let yOffset = 10;
    const margin = 10;
  
    // Ensure folderStructure contains data and has the expected structure
    if (folderStructure.length > 0 && folderStructure[0].subfolders) {
      const level1 = folderStructure[0]; // Only one folder, hence first element
  
      // Check if the folder has subfolders (for multi-folder or single folder structures)
      const files = level1.subfolders.flatMap(subfolder => subfolder.files || []);
      
      if (files.length === 0) {
        console.error("No files found in the folder structure.");
        return;
      }
  
      // Print the folder name on the top of the page
      pdf.setFontSize(16);
      pdf.text(level1.folderName, 10, yOffset);
      yOffset += 20; // Move yOffset down after the folder name
  
      // Print each image (one per page with file name under it)
      for (const file of files) {
        const imgURL = URL.createObjectURL(file);
        const img = new Image();
        img.src = imgURL;
  
        await new Promise((resolve) => {
          img.onload = () => {
            const imgWidth = 190;
            const imgHeight = (img.height / img.width) * imgWidth;
  
            if (yOffset + imgHeight + 20 > pageHeight - 20) {
              pdf.addPage(); // Add a new page if there's not enough space
              yOffset = margin; // Reset yOffset for the new page
            }
  
            // Add the image
            pdf.addImage(img, "JPEG", 10, yOffset, imgWidth, imgHeight);
            yOffset += imgHeight + 10; // Move yOffset down after the image
  
            // Add the file name (without extension) below the image
            pdf.setFontSize(12);
            pdf.text(file.name.replace(/\.[^/.]+$/, ""), 10, yOffset);
            yOffset += 10; // Move yOffset down after the filename
  
            URL.revokeObjectURL(imgURL); // Clean up the object URL
            resolve();
          };
        });
      }
  
      // After all images, add the folder name and list the file names
      pdf.addPage();
      pdf.setFontSize(16);
      pdf.text(level1.folderName, 10, 15); // Folder name at the top
      yOffset = 25;
  
      pdf.setFontSize(12);
      files.forEach((file) => {
        if (yOffset + 10 > pageHeight - margin) {
          pdf.addPage(); // Create a new page if it doesn't fit
          yOffset = margin; // Reset yOffset for the new page
        }
        
        // Add the file names (without extensions)
        pdf.text(file.name.replace(/\.[^/.]+$/, ""), 10, yOffset);
        yOffset += 10; // Move yOffset down for the next file name
      });
  
      // Add a vocabulary page at the end
      pdf.addPage();
      pdf.setFontSize(16);
      pdf.text("Vocabulary", 10, 15); // Title of the page
      yOffset = 30; // Adjust starting offset below the title
  
      // Add the words list
      words.forEach((word, index) => {
        if (yOffset + 10 > pageHeight - margin) {
          pdf.addPage(); // Create a new page if it doesn't fit
          yOffset = margin; // Reset yOffset for the new page
        }
  
        pdf.setFontSize(12);
        pdf.text(`${index + 1}. ${word}`, margin, yOffset);
        yOffset += 10; // Increase yOffset for the next word
      });
  
      // Save the PDF
      pdf.save("slides.pdf");
    } else {
      console.error("Invalid folder structure.");
    }
  };
  
  const handleAddWord = () => {
    if (newWord.trim() !== "") {
      setWords([...words, newWord]);
      setNewWord("");
    }
  };

  const handleDeleteWord = (word) => {
    setWords(words.filter((w) => w !== word));
  };

  const handleDownloadWords = () => {
    const blob = new Blob([words.join("\n")], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "words.txt";
    link.click();
  };

  // Listen for Enter key to add the word
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddWord();
    }
  };

  useEffect(() => {
    const handleKeyDownEvent = (e) => {
      if (e.key === "ArrowRight") handleNextSlide();
      else if (e.key === "ArrowLeft") handlePrevSlide();
    };

    window.addEventListener("keydown", handleKeyDownEvent);
    return () => window.removeEventListener("keydown", handleKeyDownEvent);
  }, [currentSlides]);

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl font-bold text-center mb-4">Slide Creator</h1>
        <div className="text-center mb-6">
          <input
            type="file"
            webkitdirectory=""
            directory=""
            multiple
            onChange={handleFolderSelect}
            className="cursor-pointer p-2 border rounded-lg"
          />
        </div>
        {currentSlides.length > 0 && (
          <div className="text-center mb-6">
            <div
              className="w-full max-w-md h-64 bg-gray-200 flex items-center justify-center border border-black rounded-md mx-auto cursor-pointer relative"
              onClick={handleToggleFilename}
            >
              {showFilename ? (
                <p className="text-lg font-semibold text-gray-800">
                  {currentSlides[currentIndex].file.name.replace(/\.[^/.]+$/, "")}
                </p>
              ) : (
                <img
                  src={URL.createObjectURL(currentSlides[currentIndex].file)}
                  alt="Slide"
                  className="h-full object-contain transition-transform"
                />
              )}
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <button
                className="p-2 bg-gray-800 text-white rounded-lg"
                onClick={handlePrevSlide}
              >
                Previous
              </button>
              <button
                className="p-2 bg-gray-800 text-white rounded-lg"
                onClick={handleNextSlide}
              >
                Next
              </button>
            </div>
          </div>
        )}
        <div className="text-center mb-4">
          <button
            onClick={handleExportToPDF}
            className="p-2 bg-purple-600 text-white rounded-lg"
          >
            Export to PDF
          </button>
          <button
            onClick={handleDownloadWords}
            className="p-2 ml-4 bg-blue-600 text-white rounded-lg"
          >
            Download Words
          </button>
        </div>

        {/* Word Input and Add Word Button below the other buttons */}
        <div className="text-center mb-4">
          <input
            type="text"
            value={newWord}
            onChange={(e) => setNewWord(e.target.value)}
            onKeyDown={handleKeyDown}
            className="p-2 border rounded-lg"
            placeholder="Type a word"
          />
          <button
            onClick={handleAddWord}
            className="p-2 ml-2 bg-green-500 text-white rounded-lg"
          >
            Add Word
          </button>
        </div>

        {/* Display added words */}
        <div className="mt-4">
          <div className="flex flex-wrap justify-center gap-4">
            {words.map((word, index) => (
              <div
                key={index}
                className="flex items-center bg-green-100 p-2 rounded-lg"
              >
                <span>{word}</span>
                <button
                  onClick={() => handleDeleteWord(word)}
                  className="ml-2 text-green-500"
                >
                  ➔
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

