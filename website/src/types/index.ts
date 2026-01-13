// Core vocabulary word structure
export interface Word {
  id: number;
  word: string;
  phonetic: string;
  partOfSpeech: 'noun' | 'verb' | 'adjective' | 'adverb';
  definition: string;
  examples: string[];
  synonyms: string[];
  tone: 'professional' | 'poetic' | 'assertive' | 'sophisticated' | 'contemplative';
}

// User progress tracking
export interface UserProgress {
  id: number;
  userId: number;
  wordId: number;
  usedAt: string;
  userSentence: string | null;
}

// User account
export interface User {
  id: number;
  email: string;
  name: string;
  createdAt: string;
  currentStreak: number;
  longestStreak: number;
  lastActivityDate: string | null;
}

// Session data
export interface Session {
  userId: number;
  email: string;
  name: string;
}

// API response types
export interface DailyWordResponse {
  word: Word;
  dayNumber: number;
  usedToday: boolean;
  userSentence: string | null;
}

export interface UserStatsResponse {
  currentStreak: number;
  longestStreak: number;
  totalWordsLearned: number;
  totalSentencesWritten: number;
}

export interface WordHistoryItem {
  word: Word;
  usedAt: string;
  userSentence: string | null;
}

