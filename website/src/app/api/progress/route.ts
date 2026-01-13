import { NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { recordProgress, getUserById, updateUserStreak, getProgressForDay } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const session = await getSession();

    if (!session) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    const { wordId, dayNumber, sentence } = await request.json();

    if (!wordId || !dayNumber) {
      return NextResponse.json(
        { error: 'Word ID and day number are required' },
        { status: 400 }
      );
    }

    // Check if this is the first time using a word today
    const existingProgress = getProgressForDay(session.userId, dayNumber);
    const isFirstUseToday = !existingProgress;

    // Record the progress
    recordProgress({
      userId: session.userId,
      wordId,
      userSentence: sentence || null,
      dayNumber,
    });

    // Update streak if this is first use today
    if (isFirstUseToday) {
      const user = getUserById(session.userId);
      if (user) {
        const today = new Date().toISOString().split('T')[0];
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

        let newStreak = 1;

        // If last activity was yesterday, continue streak
        if (user.last_activity_date === yesterday) {
          newStreak = user.current_streak + 1;
        }
        // If last activity was today (shouldn't happen with isFirstUseToday check)
        else if (user.last_activity_date === today) {
          newStreak = user.current_streak;
        }
        // Otherwise, start fresh

        const newLongestStreak = Math.max(newStreak, user.longest_streak);

        updateUserStreak(session.userId, newStreak, newLongestStreak, today);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Progress error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}

