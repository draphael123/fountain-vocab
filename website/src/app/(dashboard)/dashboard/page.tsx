import { redirect } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WordCard } from '@/components/WordCard';
import { getCurrentUser } from '@/lib/auth';
import { getDailyWord, getWordById } from '@/data';
import { getProgressForDay, getUserHistory, getTotalWordsLearned, getTotalSentencesWritten } from '@/lib/db';
import { Flame, Trophy, BookOpen, PenLine, ArrowRight, CheckCircle, Clock } from 'lucide-react';
import { SentenceForm } from '@/components/SentenceForm';

export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect('/login');
  }

  const { word, dayNumber } = getDailyWord();
  const todayProgress = getProgressForDay(user.id, dayNumber);
  const history = getUserHistory(user.id, 7);
  const totalWords = getTotalWordsLearned(user.id);
  const totalSentences = getTotalSentencesWritten(user.id);

  const usedToday = !!todayProgress;

  return (
    <div className="min-h-screen flex flex-col bg-ink-50">
      <Header isLoggedIn currentStreak={user.current_streak} />

      <main className="flex-1 pt-28 pb-16 md:pt-32 md:pb-24">
        <div className="container-wide">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-ink-900">
              Welcome back, {user.name.split(' ')[0]}
            </h1>
            <p className="mt-1 text-ink-600">
              Day {dayNumber} of your vocabulary journey
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <div className="card p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gold-100 flex items-center justify-center">
                  <Flame className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-ink-900">{user.current_streak}</p>
                  <p className="text-sm text-ink-500">Current Streak</p>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-sage-100 flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-sage-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-ink-900">{user.longest_streak}</p>
                  <p className="text-sm text-ink-500">Best Streak</p>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-ink-100 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-ink-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-ink-900">{totalWords}</p>
                  <p className="text-sm text-ink-500">Words Learned</p>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gold-100 flex items-center justify-center">
                  <PenLine className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-ink-900">{totalSentences}</p>
                  <p className="text-sm text-ink-500">Sentences Written</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Today's Word */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="font-serif text-xl font-bold text-ink-900">Today&apos;s Word</h2>
                {usedToday && (
                  <span className="inline-flex items-center gap-1.5 text-sage-600 text-sm font-medium">
                    <CheckCircle className="w-4 h-4" />
                    Used today
                  </span>
                )}
              </div>

              <WordCard word={word} />

              {/* Sentence Form */}
              <div className="card p-6">
                <h3 className="font-semibold text-ink-900 mb-4">
                  {usedToday ? 'Your sentence' : 'Use this word in a sentence'}
                </h3>
                {usedToday && todayProgress?.user_sentence ? (
                  <div className="p-4 bg-sage-50 rounded-lg border border-sage-100">
                    <p className="text-ink-700 italic">&ldquo;{todayProgress.user_sentence}&rdquo;</p>
                    <p className="mt-2 text-sm text-sage-600">
                      Great work! You can update your sentence below.
                    </p>
                  </div>
                ) : null}
                <SentenceForm
                  wordId={word.id}
                  dayNumber={dayNumber}
                  existingSentence={todayProgress?.user_sentence || undefined}
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Recent Activity */}
              <div className="card p-6">
                <h3 className="font-semibold text-ink-900 mb-4">Recent Activity</h3>
                {history.length === 0 ? (
                  <p className="text-ink-500 text-sm">
                    Your word history will appear here once you start learning.
                  </p>
                ) : (
                  <ul className="space-y-3">
                    {history.slice(0, 5).map((item) => {
                      const historyWord = getWordById(item.word_id);
                      return (
                        <li key={item.id} className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-ink-100 flex items-center justify-center flex-shrink-0">
                            {item.user_sentence ? (
                              <CheckCircle className="w-4 h-4 text-sage-500" />
                            ) : (
                              <Clock className="w-4 h-4 text-ink-400" />
                            )}
                          </div>
                          <div className="min-w-0">
                            <p className="font-medium text-ink-900 truncate">
                              {historyWord?.word || 'Unknown'}
                            </p>
                            <p className="text-xs text-ink-500">Day {item.day_number}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                )}
                <Link
                  href="/history"
                  className="mt-4 inline-flex items-center text-sm font-medium text-ink-600 hover:text-ink-900"
                >
                  View all history
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              {/* Quick Links */}
              <div className="card p-6">
                <h3 className="font-semibold text-ink-900 mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <Link
                    href="/history"
                    className="block p-3 rounded-lg hover:bg-ink-50 transition-colors text-ink-700 hover:text-ink-900"
                  >
                    Word History
                  </Link>
                  <Link
                    href="/settings"
                    className="block p-3 rounded-lg hover:bg-ink-50 transition-colors text-ink-700 hover:text-ink-900"
                  >
                    Account Settings
                  </Link>
                  <Link
                    href="/extension"
                    className="block p-3 rounded-lg hover:bg-ink-50 transition-colors text-ink-700 hover:text-ink-900"
                  >
                    Get Browser Extension
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

