import fs from "fs";
import path from "path";

const folders = [
  "src/app/simpsons",
  "src/app/pokemon",
  "src/components",
  "src/hooks",
  "src/types",
  "src/utils",
  "src/styles",
];

const files = {
  "src/app/simpsons/page.tsx": `\
'use client';
import SimpsonsQuote from '@/components/SimpsonsQuote';

export default function SimpsonsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-yellow-200">
      <h1 className="text-3xl font-bold mb-6">The Simpsons Quotes</h1>
      <SimpsonsQuote />
    </main>
  );
}
`,

  "src/components/SimpsonsQuote.tsx": `\
'use client';
import { useSimpsonsQuote } from '@/hooks/useSimpsonsQuote';

export default function SimpsonsQuote() {
  const { quote, loading, fetchQuote } = useSimpsonsQuote();

  if (loading) return <p>Loading...</p>;
  if (!quote) return <p>No quote available</p>;

  return (
    <div className="text-center p-6 bg-white rounded-2xl shadow">
      <img src={quote.image} alt={quote.character} className="mx-auto w-32 rounded-full mb-4" />
      <p className="text-lg italic">"{quote.quote}"</p>
      <p className="font-semibold mt-2">- {quote.character}</p>
      <button
        onClick={fetchQuote}
        className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
      >
        New Quote
      </button>
    </div>
  );
}
`,

  "src/hooks/useSimpsonsQuote.ts": `\
import { useState, useEffect } from 'react';
import type { SimpsonsQuoteType } from '@/types/simpsons';

export const useSimpsonsQuote = () => {
  const [quote, setQuote] = useState<SimpsonsQuoteType | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    try {
      setLoading(true);
      const res = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
      const data = await res.json();
      setQuote(data[0]);
    } catch (err) {
      console.error('Error fetching quote:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return { quote, loading, fetchQuote };
};
`,

  "src/types/simpsons.ts": `\
export interface SimpsonsQuoteType {
  quote: string;
  character: string;
  image: string;
  characterDirection: string;
}
`,

  "src/styles/globals.css": `\
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: 'Inter', sans-serif;
}
`,

  "src/utils/constants.ts": `\
export const API_URLS = {
  SIMPSONS: 'https://thesimpsonsquoteapi.glitch.me/quotes',
  POKEMON: 'https://pokeapi.co/api/v2/pokemon?limit=10',
};
`,

  "src/app/page.tsx": `\
'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-8">Choose Your API</h1>
      <div className="flex gap-6">
        <Link
          href="/simpsons"
          className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black rounded-lg font-semibold"
        >
          Simpsons Quotes
        </Link>
        <Link
          href="/pokemon"
          className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold"
        >
          PokéAPI
        </Link>
      </div>
    </main>
  );
}
`,
};

folders.forEach((folder) => {
  fs.mkdirSync(path.resolve(folder), { recursive: true });
});

Object.entries(files).forEach(([filePath, content]) => {
  fs.writeFileSync(path.resolve(filePath), content);
});

console.log("✅ Project structure for Simpsons & Pokémon APIs created successfully!");
