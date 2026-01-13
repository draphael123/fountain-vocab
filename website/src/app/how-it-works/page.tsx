import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowRight, BookOpen, PenLine, Flame, Repeat, CheckCircle } from 'lucide-react';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-narrow text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900">
            How It Works
          </h1>
          <p className="mt-6 text-xl text-ink-600 max-w-2xl mx-auto">
            A simple, effective system for building lasting vocabulary. Five minutes a day is all
            you need.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-8 mb-20">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gold-100 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-gold-600" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-bold text-gold-600 uppercase tracking-wider">
                    Step 1
                  </span>
                  <div className="h-px flex-1 bg-ink-100" />
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink-900 mb-4">
                  Learn Today&apos;s Word
                </h2>
                <p className="text-lg text-ink-600 leading-relaxed mb-4">
                  Each day, you receive one carefully selected word. No overwhelming lists—just a
                  single word to focus on. Every word comes with:
                </p>
                <ul className="space-y-3 text-ink-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-sage-500 flex-shrink-0 mt-0.5" />
                    <span>Phonetic pronunciation guide with audio playback</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-sage-500 flex-shrink-0 mt-0.5" />
                    <span>Clear, concise definition</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-sage-500 flex-shrink-0 mt-0.5" />
                    <span>Real-world example sentences showing proper usage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-sage-500 flex-shrink-0 mt-0.5" />
                    <span>Synonyms and tone guidance (professional, poetic, assertive, etc.)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-8 mb-20">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-sage-100 flex items-center justify-center">
                  <PenLine className="w-8 h-8 text-sage-600" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-bold text-sage-600 uppercase tracking-wider">
                    Step 2
                  </span>
                  <div className="h-px flex-1 bg-ink-100" />
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink-900 mb-4">
                  Use It in Your Own Sentence
                </h2>
                <p className="text-lg text-ink-600 leading-relaxed mb-4">
                  Active practice is the key to retention. Write your own sentence using the word.
                  This isn&apos;t busywork—it&apos;s how your brain forms lasting connections.
                </p>
                <p className="text-lg text-ink-600 leading-relaxed">
                  When you submit a sentence, the word is marked as &quot;used&quot; for the day.
                  Your sentence is saved to your history, building a personal record of your
                  growing vocabulary.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-8 mb-20">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gold-100 flex items-center justify-center">
                  <Flame className="w-8 h-8 text-gold-600" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-bold text-gold-600 uppercase tracking-wider">
                    Step 3
                  </span>
                  <div className="h-px flex-1 bg-ink-100" />
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink-900 mb-4">
                  Build Your Streak
                </h2>
                <p className="text-lg text-ink-600 leading-relaxed mb-4">
                  Consistency beats intensity. Each day you use the word, your streak grows.
                  The longer your streak, the more ingrained these words become in your active
                  vocabulary.
                </p>
                <p className="text-lg text-ink-600 leading-relaxed">
                  Miss a day? Your streak resets, but your progress doesn&apos;t. Every word
                  you&apos;ve learned stays in your history. Get back on track and start building
                  again.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-ink-100 flex items-center justify-center">
                  <Repeat className="w-8 h-8 text-ink-600" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-bold text-ink-600 uppercase tracking-wider">
                    Step 4
                  </span>
                  <div className="h-px flex-1 bg-ink-100" />
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink-900 mb-4">
                  Repeat Daily, Forever
                </h2>
                <p className="text-lg text-ink-600 leading-relaxed mb-4">
                  Our curated collection cycles through without repetition until complete. By the
                  time you&apos;ve seen every word, the earliest ones will benefit from review.
                </p>
                <p className="text-lg text-ink-600 leading-relaxed">
                  Vocabulary building is a lifelong pursuit. There&apos;s no end goal—just
                  continuous improvement. Five minutes a day compounds into mastery over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Browser Extension */}
      <section className="py-16 md:py-24 bg-ink-950 text-ink-100">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Take It Everywhere with the Browser Extension
            </h2>
            <p className="text-xl text-ink-400 mb-8 max-w-2xl mx-auto">
              Install our Chrome or Firefox extension to see today&apos;s word wherever you browse.
              Get subtle highlights when the word appears, quick definitions on hover, and writing
              suggestions in context menus.
            </p>
            <Link
              href="/extension"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium
                       bg-gold-500 text-ink-900 hover:bg-gold-400 
                       transition-all duration-200 ease-out text-lg"
            >
              Get the Extension
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink-900">
            Ready to Begin?
          </h2>
          <p className="mt-4 text-xl text-ink-600">
            Start building your vocabulary today. It&apos;s free.
          </p>
          <div className="mt-8">
            <Link href="/signup" className="btn-primary text-lg px-8 py-4">
              Create Your Account
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

