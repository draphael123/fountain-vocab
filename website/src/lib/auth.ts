import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { getUserById, getUserByEmail, createUser, updateUserStreak } from './db';
import bcrypt from 'bcryptjs';

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'your-secret-key-change-in-production'
);

const COOKIE_NAME = 'lexicon_session';

export interface SessionPayload {
  userId: number;
  email: string;
  name: string;
}

// Create a JWT token
async function createToken(payload: SessionPayload): Promise<string> {
  return new SignJWT({ ...payload } as Record<string, unknown>)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('7d')
    .setIssuedAt()
    .sign(JWT_SECRET);
}

// Verify and decode a JWT token
async function verifyToken(token: string): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload as unknown as SessionPayload;
  } catch {
    return null;
  }
}

// Get the current session from cookies
export async function getSession(): Promise<SessionPayload | null> {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(COOKIE_NAME);
  
  if (!sessionCookie) {
    return null;
  }

  return verifyToken(sessionCookie.value);
}

// Create a new session (login)
export async function createSession(payload: SessionPayload): Promise<void> {
  const token = await createToken(payload);
  const cookieStore = await cookies();
  
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  });
}

// Destroy the session (logout)
export async function destroySession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

// Register a new user
export async function register(
  email: string,
  password: string,
  name: string
): Promise<{ success: true; userId: number } | { success: false; error: string }> {
  // Check if user already exists
  const existingUser = getUserByEmail(email);
  if (existingUser) {
    return { success: false, error: 'An account with this email already exists' };
  }

  // Hash password
  const passwordHash = await bcrypt.hash(password, 12);

  // Create user
  try {
    const userId = createUser({ email, passwordHash, name });
    return { success: true, userId };
  } catch (error) {
    return { success: false, error: 'Failed to create account' };
  }
}

// Login user
export async function login(
  email: string,
  password: string
): Promise<{ success: true; user: SessionPayload } | { success: false; error: string }> {
  const user = getUserByEmail(email);
  
  if (!user) {
    return { success: false, error: 'Invalid email or password' };
  }

  const passwordValid = await bcrypt.compare(password, user.password_hash);
  
  if (!passwordValid) {
    return { success: false, error: 'Invalid email or password' };
  }

  const sessionPayload: SessionPayload = {
    userId: user.id,
    email: user.email,
    name: user.name,
  };

  return { success: true, user: sessionPayload };
}

// Get full user data (with streak calculation)
export async function getCurrentUser() {
  const session = await getSession();
  if (!session) return null;

  const user = getUserById(session.userId);
  if (!user) return null;

  // Calculate if streak should be reset
  const today = new Date().toISOString().split('T')[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
  
  if (user.last_activity_date && user.last_activity_date < yesterday) {
    // Streak broken - reset to 0
    updateUserStreak(user.id, 0, user.longest_streak, user.last_activity_date);
    return { ...user, current_streak: 0 };
  }

  return user;
}

