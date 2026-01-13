import { Word } from '@/types';
import { words001to100 } from './words-001-100';
import { words101to200 } from './words-101-200';
import { words201to300 } from './words-201-300';
import { words301to400 } from './words-301-400';
import { words401to500 } from './words-401-500';

// Combine all word sets and assign IDs
const allWordsRaw = [
  ...words001to100,
  ...words101to200,
  ...words201to300,
  ...words301to400,
  ...words401to500,
];

// Export all words with IDs
export const allWords: Word[] = allWordsRaw.map((word, index) => ({
  ...word,
  id: index + 1,
}));

// Total number of words available
export const TOTAL_WORDS = allWords.length;

/**
 * Get the word of the day based on a deterministic rotation.
 * Same word for all users on the same day.
 * Cycles through all words before repeating.
 */
export function getDailyWord(): { word: Word; dayNumber: number } {
  // Use a fixed epoch date for consistent rotation
  const epoch = new Date('2024-01-01').getTime();
  const now = new Date();
  // Reset to start of day in UTC for consistency
  const today = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
  
  const daysSinceEpoch = Math.floor((today.getTime() - epoch) / (1000 * 60 * 60 * 24));
  const wordIndex = daysSinceEpoch % TOTAL_WORDS;
  const dayNumber = daysSinceEpoch + 1;
  
  return {
    word: allWords[wordIndex],
    dayNumber,
  };
}

/**
 * Get word by ID
 */
export function getWordById(id: number): Word | undefined {
  return allWords.find((word) => word.id === id);
}

/**
 * Get the current day number (days since epoch)
 */
export function getCurrentDayNumber(): number {
  const epoch = new Date('2024-01-01').getTime();
  const now = new Date();
  const today = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
  return Math.floor((today.getTime() - epoch) / (1000 * 60 * 60 * 24)) + 1;
}

/**
 * Search words by text (for autocomplete or search features)
 */
export function searchWords(query: string, limit = 10): Word[] {
  const lowerQuery = query.toLowerCase();
  return allWords
    .filter(
      (word) =>
        word.word.toLowerCase().includes(lowerQuery) ||
        word.definition.toLowerCase().includes(lowerQuery) ||
        word.synonyms.some((syn) => syn.toLowerCase().includes(lowerQuery))
    )
    .slice(0, limit);
}

/**
 * Get words by tone
 */
export function getWordsByTone(tone: Word['tone']): Word[] {
  return allWords.filter((word) => word.tone === tone);
}

/**
 * Get random words (for practice mode or suggestions)
 */
export function getRandomWords(count: number): Word[] {
  const shuffled = [...allWords].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

