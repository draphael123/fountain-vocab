import Database from 'better-sqlite3';
import path from 'path';

// Database file location
const dbPath = path.join(process.cwd(), 'data', 'lexicon.db');

// Singleton database instance
let db: Database.Database | null = null;

export function getDb(): Database.Database {
  if (!db) {
    // Ensure directory exists
    const fs = require('fs');
    const dir = path.dirname(dbPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    db = new Database(dbPath);
    db.pragma('journal_mode = WAL');
    
    // Initialize tables
    initializeTables(db);
  }
  return db;
}

function initializeTables(database: Database.Database) {
  // Users table
  database.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      name TEXT NOT NULL,
      created_at TEXT DEFAULT (datetime('now')),
      current_streak INTEGER DEFAULT 0,
      longest_streak INTEGER DEFAULT 0,
      last_activity_date TEXT
    )
  `);

  // User progress table - tracks word usage
  database.exec(`
    CREATE TABLE IF NOT EXISTS user_progress (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      word_id INTEGER NOT NULL,
      used_at TEXT DEFAULT (datetime('now')),
      user_sentence TEXT,
      day_number INTEGER NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
      UNIQUE(user_id, day_number)
    )
  `);

  // Create indexes for faster queries
  database.exec(`
    CREATE INDEX IF NOT EXISTS idx_user_progress_user_id ON user_progress(user_id);
    CREATE INDEX IF NOT EXISTS idx_user_progress_day_number ON user_progress(day_number);
  `);
}

// User operations
export interface CreateUserParams {
  email: string;
  passwordHash: string;
  name: string;
}

export function createUser(params: CreateUserParams) {
  const db = getDb();
  const stmt = db.prepare(`
    INSERT INTO users (email, password_hash, name)
    VALUES (?, ?, ?)
  `);
  const result = stmt.run(params.email, params.passwordHash, params.name);
  return result.lastInsertRowid as number;
}

export function getUserByEmail(email: string) {
  const db = getDb();
  const stmt = db.prepare(`
    SELECT id, email, password_hash, name, created_at, current_streak, longest_streak, last_activity_date
    FROM users WHERE email = ?
  `);
  return stmt.get(email) as {
    id: number;
    email: string;
    password_hash: string;
    name: string;
    created_at: string;
    current_streak: number;
    longest_streak: number;
    last_activity_date: string | null;
  } | undefined;
}

export function getUserById(id: number) {
  const db = getDb();
  const stmt = db.prepare(`
    SELECT id, email, name, created_at, current_streak, longest_streak, last_activity_date
    FROM users WHERE id = ?
  `);
  return stmt.get(id) as {
    id: number;
    email: string;
    name: string;
    created_at: string;
    current_streak: number;
    longest_streak: number;
    last_activity_date: string | null;
  } | undefined;
}

export function updateUserStreak(userId: number, currentStreak: number, longestStreak: number, lastActivityDate: string) {
  const db = getDb();
  const stmt = db.prepare(`
    UPDATE users
    SET current_streak = ?, longest_streak = ?, last_activity_date = ?
    WHERE id = ?
  `);
  stmt.run(currentStreak, longestStreak, lastActivityDate, userId);
}

// Progress operations
export interface RecordProgressParams {
  userId: number;
  wordId: number;
  userSentence: string | null;
  dayNumber: number;
}

export function recordProgress(params: RecordProgressParams) {
  const db = getDb();
  const stmt = db.prepare(`
    INSERT INTO user_progress (user_id, word_id, user_sentence, day_number)
    VALUES (?, ?, ?, ?)
    ON CONFLICT(user_id, day_number) DO UPDATE SET
      user_sentence = excluded.user_sentence
  `);
  stmt.run(params.userId, params.wordId, params.userSentence, params.dayNumber);
}

export function getProgressForDay(userId: number, dayNumber: number) {
  const db = getDb();
  const stmt = db.prepare(`
    SELECT id, user_id, word_id, used_at, user_sentence, day_number
    FROM user_progress
    WHERE user_id = ? AND day_number = ?
  `);
  return stmt.get(userId, dayNumber) as {
    id: number;
    user_id: number;
    word_id: number;
    used_at: string;
    user_sentence: string | null;
    day_number: number;
  } | undefined;
}

export function getUserHistory(userId: number, limit = 30) {
  const db = getDb();
  const stmt = db.prepare(`
    SELECT id, user_id, word_id, used_at, user_sentence, day_number
    FROM user_progress
    WHERE user_id = ?
    ORDER BY day_number DESC
    LIMIT ?
  `);
  return stmt.all(userId, limit) as Array<{
    id: number;
    user_id: number;
    word_id: number;
    used_at: string;
    user_sentence: string | null;
    day_number: number;
  }>;
}

export function getTotalWordsLearned(userId: number) {
  const db = getDb();
  const stmt = db.prepare(`
    SELECT COUNT(*) as count FROM user_progress WHERE user_id = ?
  `);
  const result = stmt.get(userId) as { count: number };
  return result.count;
}

export function getTotalSentencesWritten(userId: number) {
  const db = getDb();
  const stmt = db.prepare(`
    SELECT COUNT(*) as count FROM user_progress WHERE user_id = ? AND user_sentence IS NOT NULL
  `);
  const result = stmt.get(userId) as { count: number };
  return result.count;
}

