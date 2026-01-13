import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowRight, Quote } from 'lucide-react';

export default function WhyVocabularyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-narrow">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 text-center">
            Why Vocabulary Matters
          </h1>
          <p className="mt-6 text-xl text-ink-600 text-center max-w-2xl mx-auto">
            The words you use shape how you think, how you&apos;re perceived, and what you can
            achieve.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <article className="prose-custom text-lg">
            <h2 className="font-serif text-3xl font-bold text-ink-900 mb-6">
              Language Shapes Thought
            </h2>
            <p>
              The vocabulary you possess directly influences the thoughts you can form. Words are
              not merely labels for pre-existing ideas—they are tools that enable new forms of
              thinking. When you learn the word &quot;perspicacious,&quot; you gain the ability to
              identify and articulate a specific type of insight that &quot;smart&quot; or
              &quot;perceptive&quot; cannot fully capture.
            </p>
            <p>
              Research in cognitive science confirms this: the vocabulary available to a speaker
              affects perception, memory, and reasoning. A richer vocabulary means a richer inner
              life, more nuanced understanding, and more precise communication.
            </p>

            <h2 className="font-serif text-3xl font-bold text-ink-900 mb-6 mt-12">
              Professional Impact
            </h2>
            <p>
              In professional contexts, vocabulary is a signal. The words you choose in meetings,
              emails, and presentations shape how others perceive your competence, credibility, and
              authority. A well-placed sophisticated word demonstrates knowledge, confidence, and
              careful thinking.
            </p>
            <p>
              This isn&apos;t about using complex words to impress or obscure meaning. It&apos;s
              about having the right word available when you need it—the precise term that captures
              exactly what you mean, no more and no less.
            </p>

            <div className="my-12 p-8 bg-ink-50 rounded-2xl border border-ink-100">
              <Quote className="w-10 h-10 text-gold-500 mb-4" />
              <blockquote className="text-2xl font-serif text-ink-800 leading-relaxed italic">
                &quot;The difference between the almost right word and the right word is really a
                large matter—it&apos;s the difference between the lightning bug and the
                lightning.&quot;
              </blockquote>
              <cite className="block mt-4 text-ink-600 not-italic">— Mark Twain</cite>
            </div>

            <h2 className="font-serif text-3xl font-bold text-ink-900 mb-6 mt-12">
              Reading Comprehension
            </h2>
            <p>
              Vocabulary is the strongest predictor of reading comprehension. The more words you
              know, the more you understand when you read. This creates a virtuous cycle: better
              vocabulary leads to more reading, which leads to even better vocabulary.
            </p>
            <p>
              Advanced texts in any field—technical papers, literary fiction, historical analysis,
              legal documents—assume a sophisticated vocabulary. Gaps in vocabulary become barriers
              to knowledge acquisition.
            </p>

            <h2 className="font-serif text-3xl font-bold text-ink-900 mb-6 mt-12">
              Writing Quality
            </h2>
            <p>
              Strong writing demands a broad vocabulary. Without the right words, you resort to
              circumlocution, imprecision, or cliché. With them, you can be concise, accurate, and
              compelling.
            </p>
            <p>
              Each word carries connotations beyond its dictionary definition. &quot;Walk,&quot;
              &quot;stroll,&quot; &quot;stride,&quot; &quot;saunter,&quot; and &quot;amble&quot; all
              describe bipedal locomotion, but each evokes a different image, pace, and attitude.
              The writer who knows all five can choose precisely; the writer who knows only one must
              hope it fits.
            </p>

            <h2 className="font-serif text-3xl font-bold text-ink-900 mb-6 mt-12">
              Social Connection
            </h2>
            <p>
              Language is the primary medium of human connection. The ability to express yourself
              precisely—to name emotions, describe experiences, and articulate ideas—enables deeper
              relationships and more meaningful conversations.
            </p>
            <p>
              A sophisticated vocabulary also enables code-switching: adapting your language to
              different contexts and audiences. You can be formal in a boardroom and casual with
              friends, technical with experts and accessible with newcomers.
            </p>

            <h2 className="font-serif text-3xl font-bold text-ink-900 mb-6 mt-12">
              The Compound Effect
            </h2>
            <p>
              Vocabulary building is an investment that compounds over time. Each word you add
              creates new connections, new possibilities for expression, new ways of thinking. The
              gap between someone who learns one word a day and someone who doesn&apos;t widens
              dramatically over months and years.
            </p>
            <p>
              Five minutes a day. One word at a time. The commitment is small, but the returns are
              significant.
            </p>
          </article>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h3 className="font-serif text-2xl font-bold text-ink-900">
              Ready to Invest in Your Vocabulary?
            </h3>
            <p className="mt-4 text-lg text-ink-600">
              Start your daily practice today.
            </p>
            <div className="mt-8">
              <Link href="/signup" className="btn-primary text-lg px-8 py-4">
                Begin Learning
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

