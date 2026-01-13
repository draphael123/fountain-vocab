'use client';

import { Word } from '@/types';
import { Volume2 } from 'lucide-react';
import clsx from 'clsx';

interface WordCardProps {
  word: Word;
  showExamples?: boolean;
  compact?: boolean;
}

export function WordCard({ word, showExamples = true, compact = false }: WordCardProps) {
  const toneClasses: Record<Word['tone'], string> = {
    professional: 'tone-professional',
    poetic: 'tone-poetic',
    assertive: 'tone-assertive',
    sophisticated: 'tone-sophisticated',
    contemplative: 'tone-contemplative',
  };

  const speakWord = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word.word);
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  if (compact) {
    return (
      <div className="card p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-serif text-2xl font-bold text-ink-900">{word.word}</h3>
            <p className="phonetic mt-1">{word.phonetic}</p>
          </div>
          <span className={clsx('tone-badge', toneClasses[word.tone])}>{word.tone}</span>
        </div>
        <p className="mt-3 text-ink-400 text-sm">{word.partOfSpeech}</p>
        <p className="mt-2 text-ink-700">{word.definition}</p>
      </div>
    );
  }

  return (
    <div className="card-elevated p-8 md:p-12">
      {/* Word Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-4">
            <h2 className="word-display text-ink-900">{word.word}</h2>
            <button
              onClick={speakWord}
              className="p-3 rounded-full hover:bg-ink-100 transition-colors group"
              aria-label="Pronounce word"
            >
              <Volume2 className="w-6 h-6 text-ink-400 group-hover:text-ink-600" />
            </button>
          </div>
          <div className="flex items-center gap-4 mt-3">
            <span className="phonetic">{word.phonetic}</span>
            <span className="text-ink-300">•</span>
            <span className="text-ink-500 italic">{word.partOfSpeech}</span>
          </div>
        </div>
        <span className={clsx('tone-badge', toneClasses[word.tone])}>{word.tone}</span>
      </div>

      {/* Definition */}
      <div className="mt-8">
        <p className="text-xl md:text-2xl text-ink-800 leading-relaxed font-light">
          {word.definition}
        </p>
      </div>

      {/* Examples */}
      {showExamples && (
        <div className="mt-8 pt-8 border-t border-ink-100">
          <h3 className="text-sm font-semibold text-ink-500 uppercase tracking-wider mb-4">
            Examples
          </h3>
          <ul className="space-y-4">
            {word.examples.map((example, index) => (
              <li
                key={index}
                className="text-ink-700 leading-relaxed pl-4 border-l-2 border-gold-300"
              >
                &ldquo;{example}&rdquo;
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Synonyms */}
      <div className="mt-8 pt-8 border-t border-ink-100">
        <h3 className="text-sm font-semibold text-ink-500 uppercase tracking-wider mb-4">
          Synonyms
        </h3>
        <div className="flex flex-wrap gap-2">
          {word.synonyms.map((synonym, index) => (
            <span
              key={index}
              className="px-3 py-1.5 rounded-lg bg-ink-100 text-ink-700 text-sm"
            >
              {synonym}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

