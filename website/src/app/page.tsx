import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WordCard } from '@/components/WordCard';
import { getDailyWord, TOTAL_WORDS } from '@/data';
import {
  ArrowRight,
  Sparkles,
  Target,
  TrendingUp,
  Clock,
  CheckCircle2,
  Chrome,
} from 'lucide-react';

export default function HomePage() {
  const { word, dayNumber } = getDailyWord();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-gold-50 via-ink-50 to-sage-50" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.05) 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-100 text-gold-700 text-sm font-medium mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              <span>Day {dayNumber} • {TOTAL_WORDS} words in rotation</span>
            </div>

            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-ink-900 leading-tight animate-slide-up">
              Elevate Your Vocabulary,{' '}
              <span className="text-gradient">One Word at a Time</span>
            </h1>

            <p className="mt-6 text-xl md:text-2xl text-ink-600 max-w-2xl mx-auto leading-relaxed animate-slide-up animate-delay-100">
              Master sophisticated English vocabulary through daily practice, contextual learning,
              and streak-based motivation. Speak and write with precision and elegance.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animate-delay-200">
              <Link href="/signup" className="btn-primary text-lg px-8 py-4">
                Start Learning Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/how-it-works" className="btn-ghost text-lg px-8 py-4">
                See How It Works
              </Link>
            </div>
          </div>

          {/* Today's Word Preview */}
          <div className="mt-20 max-w-3xl mx-auto animate-slide-up animate-delay-300">
            <p className="text-center text-sm font-medium text-ink-500 uppercase tracking-wider mb-6">
              Today&apos;s Word
            </p>
            <WordCard word={word} showExamples={false} />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink-900">
              A Complete System for Language Mastery
            </h2>
            <p className="mt-4 text-lg text-ink-600">
              More than just a word list. A structured approach to building lasting vocabulary.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-gold-100 flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-gold-600" />
              </div>
              <h3 className="font-serif text-xl font-bold text-ink-900 mb-3">
                One Word Daily
              </h3>
              <p className="text-ink-600 leading-relaxed">
                Focus on a single, carefully curated word each day. Deep understanding beats
                shallow exposure. Quality over quantity.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-sage-600" />
              </div>
              <h3 className="font-serif text-xl font-bold text-ink-900 mb-3">
                Contextual Learning
              </h3>
              <p className="text-ink-600 leading-relaxed">
                Each word comes with pronunciation, real-world examples, synonyms, and tone
                guidance. Learn how and when to use it.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-ink-100 flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-ink-600" />
              </div>
              <h3 className="font-serif text-xl font-bold text-ink-900 mb-3">
                Streak Motivation
              </h3>
              <p className="text-ink-600 leading-relaxed">
                Build momentum with daily streaks. Use each word in a sentence to mark it as
                learned and keep your streak alive.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="card p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-gold-100 flex items-center justify-center mb-6">
                <Chrome className="w-6 h-6 text-gold-600" />
              </div>
              <h3 className="font-serif text-xl font-bold text-ink-900 mb-3">
                Browser Extension
              </h3>
              <p className="text-ink-600 leading-relaxed">
                Highlight today&apos;s word across the web. Get reminders, quick definitions, and
                suggestions while you browse.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="card p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-6 h-6 text-sage-600" />
              </div>
              <h3 className="font-serif text-xl font-bold text-ink-900 mb-3">
                Active Practice
              </h3>
              <p className="text-ink-600 leading-relaxed">
                Write your own sentences using each word. Active use embeds vocabulary in your
                memory far better than passive reading.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="card p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-ink-100 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-ink-600" />
              </div>
              <h3 className="font-serif text-xl font-bold text-ink-900 mb-3">
                Curated Selection
              </h3>
              <p className="text-ink-600 leading-relaxed">
                {TOTAL_WORDS}+ hand-picked words. Elegant, professional vocabulary that elevates
                your communication. No archaic obscurities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-ink-950 text-ink-100">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold">
            Ready to Expand Your Vocabulary?
          </h2>
          <p className="mt-6 text-xl text-ink-400 max-w-xl mx-auto">
            Join thousands of professionals and lifelong learners building sophisticated language
            skills, one word at a time.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium
                       bg-gold-500 text-ink-900 hover:bg-gold-400 
                       transition-all duration-200 ease-out text-lg"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

