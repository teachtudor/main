"use client";

import React, { useState, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import Navbar from "../../Navbar";
import "../../globals.css";
import Link from "next/link";

const blogSections = [
  {
    id: "originals",
    title: "ORIGINALS",
    image: "/originals.jpg", // Create a cover.jpg inside /public/originals
    description: "Daily routine original stories.",
  },
  {
    id: "anime",
    title: "ANIME",
    image: "/anime.jpg", // Create a cover.jpg inside /public/anime
    description: "Anime-style illustrated stories.",
  },
];

function BlogSectionCard({ post }) {
  return (
    <mesh>
      <Html center>
        <Link href={`/blog/${post.id}`} className="block pointer-events-auto">
          <div className="w-[260px] p-4 bg-white rounded shadow text-center">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto object-contain rounded"
            />
            <h2 className="text-4xl font-bold mt-2">{post.title}</h2>
            <p className="text-2xl mt-1">{post.description}</p>
          </div>
        </Link>
      </Html>
    </mesh>
  );
}

export default function BlogSectionSelector() {
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
    setIndex((prev) => (prev + 1) % blogSections.length);
  };

  const prev = () => {
    playSound();
    setIndex((prev) => (prev - 1 + blogSections.length) % blogSections.length);
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
        <BlogSectionCard post={blogSections[index]} />
      </Canvas>
    </div>
  );
}
