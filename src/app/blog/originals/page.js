//code 2
"use client";

import React from "react";
import Link from "next/link"; // ✅ import Link
import Navbar from "../../Navbar";
import "../../globals.css";

const stories = [
  "BRUSHING YOUR TEETH",
  "WASHING YOUR HANDS", 
  "DRINKING MILK",
  "TAKING VITAMINS",
  "MAKING COFFEE",
  "MAKING TOAST",
  "FEEDING THE CAT",
  "EATING CEREAL",
  "READING A BOOK",
  // "DRINKING TEA",
  // "EATING SCRAMBLED EGGS",
  // "EATING ICE CREAM",
  // "BREAKING A GLASS",
  // "CLEANING THE HOUSE",
  // "BREAKING A PLATE",
  // "FALLING DOWN",
  // "WASHING DISHES",
  // "GETTING SICK",
  // "GOING HOME",
  // "GIVING A PRESENT",
];

export default function OriginalsPage() {
  return (
    <div className="mt-14 w-full min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <Navbar />
      <h1 className="text-3xl font-bold mt-10 mb-6">Original Stories</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6 max-w-7xl">
        {stories.map((title, index) => (
          <Link
            key={index}
            href={`/blog/originals/${index + 1}`}  // ✅ here: real link to /blog/originals/1 etc
            className="cursor-pointer block bg-white rounded shadow hover:shadow-lg transition p-4 text-center"
          >
            <img
              src={`/${title.toLowerCase().replace(/\s/g, "-")}.jpg`} 
              alt={title}
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-lg font-bold mt-2">{title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
