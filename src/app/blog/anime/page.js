"use client";

import React from "react";
import Navbar from "../../Navbar";
import "../../globals.css";
import Link from "next/link";

// Originals List
const anime = [
  "PREPARING A SMOOTHIE",
  "DECORATING A ROOM",
  "TAKING A WALK",
  "DRIVING A CAR",
  "PACKING A SUITCASE",
  "BUYING GROCERIES",
  "BUILDING A SANDCASTLE",
  "BAKING A CAKE",
  "CALLING A FRIEND",
  "HELPING A NEIGHBOR",
  "WATCHING THE SOCCER GAME",
  "WASHING THE CAR",
  "GOING TO THE DENTIST",
  "FEEDING THE DOG",
  "COOKING BREAKFAST",
  "MAKING A SALAD",
].map((title, index) => ({
  id: index + 1,
  title,
  image: `/${title.toLowerCase().replace(/\s/g, "-")}.jpg`,
  description: `Story about ${title.toLowerCase()}.`,
}));

export default function OriginalsBlogPage() {
  return (
    <div className="mt-14 w-full min-h-screen bg-gray-100 flex flex-col items-center">
      <Navbar />
      <h1 className="text-3xl font-bold mt-10 mb-6">Anime Stories</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6 max-w-7xl">
        {anime.map((post) => (
          <Link
            key={post.id}
            href={`/blog/anime/${post.id}`}
            className="block bg-white rounded shadow hover:shadow-lg transition p-4 text-center"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-lg font-bold mt-2">{post.title}</h2>
            <p className="text-sm text-gray-600 mt-1">{post.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
