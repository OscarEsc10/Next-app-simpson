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
