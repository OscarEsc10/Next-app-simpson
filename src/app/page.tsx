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
