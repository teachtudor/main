"use client";

import React from "react";
import Navbar from "../../Navbar"; // adjust path if necessary
import "../../globals.css";

export default function ComingSoonPage() {
  return (
    <div className="mt-14 w-full min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <Navbar />

      {/* COMING SOON text */}
      <h1 className="text-5xl font-bold mb-10 mt-10 text-center text-gray-800">
        COMING SOON
      </h1>

      {/* YouTube video iframe */}
      <div className="w-full max-w-3xl aspect-video mb-6">
        <iframe
          className="w-full h-full rounded-md shadow-md"
          src="https://www.youtube.com/embed/QpEfHVFilRc"
          title="Tom and Jerry | 1940's Mega Episode"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Video title */}
      <h2 className="text-2xl font-semibold text-gray-700 mt-2">
        Tom and Jerry - 1940's Classics
      </h2>
    </div>
  );
}
