import { redirect } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { getCurrentUser } from '@/lib/auth';
import { getUserHistory } from '@/lib/db';
import { getWordById } from '@/data';
import { ArrowLeft, CheckCircle, Clock } from 'lucide-react';

export default async function HistoryPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect('/login');
  }

  const history = getUserHistory(user.id, 100);

  return (
    <div className="min-h-screen flex flex-col bg-ink-50">
      <Header isLoggedIn currentStreak={user.current_streak} />

      <main className="flex-1 pt-28 pb-16 md:pt-32 md:pb-24">
        <div className="container-wide max-w-4xl">
          <Link
            href="/dashboard"
            className="inline-flex items-center text-ink-600 hover:text-ink-900 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>

          <h1 className="font-serif text-3xl font-bold text-ink-900 mb-8">Word History</h1>

          {history.length === 0 ? (
            <div className="card p-12 text-center">
              <p className="text-ink-600 mb-4">
                You haven&apos;t learned any words yet. Start with today&apos;s word!
              </p>
              <Link href="/dashboard" className="btn-primary">
                Go to Dashboard
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {history.map((item) => {
                const word = getWordById(item.word_id);
                if (!word) return null;

                return (
                  <div key={item.id} className="card p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h2 className="font-serif text-2xl font-bold text-ink-900">
                            {word.word}
                          </h2>
                          <span className="text-sm text-ink-500">{word.phonetic}</span>
                          {item.user_sentence ? (
                            <CheckCircle className="w-5 h-5 text-sage-500" />
                          ) : (
                            <Clock className="w-5 h-5 text-ink-400" />
                          )}
                        </div>
                        <p className="text-ink-400 text-sm mb-2">
                          {word.partOfSpeech} • Day {item.day_number}
                        </p>
                        <p className="text-ink-700">{word.definition}</p>
                        {item.user_sentence && (
                          <div className="mt-4 p-4 bg-sage-50 rounded-lg border border-sage-100">
                            <p className="text-sm text-sage-600 font-medium mb-1">Your sentence:</p>
                            <p className="text-ink-700 italic">
                              &ldquo;{item.user_sentence}&rdquo;
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

