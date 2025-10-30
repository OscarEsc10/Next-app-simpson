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
