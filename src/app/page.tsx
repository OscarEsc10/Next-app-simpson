"use client";
import React, { useState } from "react";
import Buttons from "../components/Buttons";
import SimpsonsModalTrailer from "../components/SimpsonsModalTrailer";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 bg-[url('/Clouds.jpg')] bg-cover bg-center">
        <h3 className="text-7xl font-bold mb-8 text-yellow-300 [text-shadow:3px_3px_0_#000,-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000,1px_1px_0_#000]">
          Simpson Quotes
        </h3>
        <h3 className="bold text-2xl text-center">
          The Simpsons universe in one project, Quotes, Characters, Episodes,{" "}
          <br /> Locations and Iconic phrases from Springfield
        </h3>
        <Buttons onTrailerClick={() => setIsModalOpen(true)} />
      </main>

      <SimpsonsModalTrailer
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
