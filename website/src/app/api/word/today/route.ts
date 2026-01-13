import { NextResponse } from 'next/server';
import { getDailyWord } from '@/data';
import { getSession } from '@/lib/auth';
import { getProgressForDay } from '@/lib/db';

export async function GET() {
  try {
    const { word, dayNumber } = getDailyWord();
    
    // Check if user is logged in and has progress for today
    const session = await getSession();
    let usedToday = false;
    let userSentence: string | null = null;

    if (session) {
      const progress = getProgressForDay(session.userId, dayNumber);
      if (progress) {
        usedToday = true;
        userSentence = progress.user_sentence;
      }
    }

    return NextResponse.json({
      word,
      dayNumber,
      usedToday,
      userSentence,
    });
  } catch (error) {
    console.error('Error fetching daily word:', error);
    return NextResponse.json(
      { error: 'Failed to fetch daily word' },
      { status: 500 }
    );
  }
}

