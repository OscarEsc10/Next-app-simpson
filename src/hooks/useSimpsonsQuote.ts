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
