'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Send, Loader2 } from 'lucide-react';

interface SentenceFormProps {
  wordId: number;
  dayNumber: number;
  existingSentence?: string;
}

export function SentenceForm({ wordId, dayNumber, existingSentence }: SentenceFormProps) {
  const router = useRouter();
  const [sentence, setSentence] = useState(existingSentence || '');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!sentence.trim()) {
      setError('Please enter a sentence');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('/api/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          wordId,
          dayNumber,
          sentence: sentence.trim(),
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.error || 'Failed to save');
        setLoading(false);
        return;
      }

      setSuccess(true);
      setLoading(false);
      
      // Refresh the page to show updated stats
      router.refresh();
    } catch (err) {
      setError('An unexpected error occurred');
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      {error && (
        <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
          {error}
        </div>
      )}
      
      {success && (
        <div className="mb-4 p-3 rounded-lg bg-sage-50 border border-sage-200 text-sage-700 text-sm">
          Sentence saved! Your streak has been updated.
        </div>
      )}

      <div className="flex gap-3">
        <input
          type="text"
          value={sentence}
          onChange={(e) => setSentence(e.target.value)}
          placeholder="Write a sentence using this word..."
          className="input flex-1"
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading || !sentence.trim()}
          className="btn-primary px-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Send className="w-5 h-5" />
          )}
        </button>
      </div>
      <p className="mt-2 text-xs text-ink-500">
        Writing your own sentence helps embed the word in your memory.
      </p>
    </form>
  );
}

