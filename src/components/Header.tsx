import React from "react";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";

export default function Header() {
  return (
    <header className="flex flex-row justify-around pt-4 pb-0">
      <h3
        className="text-2xl font-bold mb-8 text-yellow-300 
        [text-shadow:3px_3px_0_#000,-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000,1px_1px_0_#000]"
      >
        The Simpsons
      </h3>

      <nav className="flex flex-row gap-6 items-center">
        <Link href="/characters" className="text-xl cursor-pointer hover:text-yellow-400 transition">
          Characters
        </Link>
        <Link href="/episodes" className="text-xl cursor-pointer hover:text-yellow-400 transition">
          Episodes
        </Link>
        <Link href="/locations" className="text-xl cursor-pointer hover:text-yellow-400 transition">
          Locations
        </Link>
      </nav>

      <a
        href="https://github.com/OscarEsc10/Next-app-simpson"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 rounded-full bg-black-300 transition-colors 
        duration-200 border-2 border-black shadow-[3px_3px_0_#000] hover:shadow-[5px_5px_0_#000] 
        active:shadow-[2px_2px_0_#000] transform hover:-translate-y-0.5 active:translate-y-0"
        aria-label="View on GitHub"
      >
        <FiGithub className="text-black text-xl" />
      </a>
    </header>
  );
}
