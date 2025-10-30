"use client";
import React from "react";
import Buttons from "../components/Buttons";

export default function Home() {
  return (
    <main className="flex flex-col items-center text-center justify-center min-h-screen bg-gray-100 p-6 bg-[url('/Clouds.jpg')] bg-cover bg-center">
      <h3 className="text-7xl font-bold mb-8 text-yellow-300 [text-shadow:3px_3px_0_#000,-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000,1px_1px_0_#000]">
        Simpson Quotes
      </h3>
      <h3 className="bold">
        The Simpsons unirverse in one project, Quotes, Characters, Episodes, <br /> Locations and Iconics phrases
        from springField
      </h3>
    <Buttons />
    </main>
  );
}
