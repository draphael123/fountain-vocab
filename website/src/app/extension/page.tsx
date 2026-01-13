import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Chrome, Globe, Highlighter, Bell, PenLine, Download, ArrowRight } from 'lucide-react';

export default function ExtensionPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-gold-50 via-ink-50 to-sage-50">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900">
              Browser Extension
            </h1>
            <p className="mt-6 text-xl text-ink-600 max-w-2xl mx-auto">
              Take your vocabulary practice everywhere you browse. Our extension brings today&apos;s
              word to life across the web.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#chrome"
                className="btn-primary text-lg px-8 py-4 flex items-center gap-2"
              >
                <Chrome className="w-5 h-5" />
                Download for Chrome
              </a>
              <a
                href="#firefox"
                className="btn-secondary text-lg px-8 py-4 flex items-center gap-2"
              >
                <Globe className="w-5 h-5" />
                Download for Firefox
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink-900 text-center mb-16">
              What the Extension Does
            </h2>

            <div className="grid gap-12">
              {/* Feature 1 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-gold-100 flex items-center justify-center">
                    <Highlighter className="w-7 h-7 text-gold-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-ink-900 mb-3">
                    Automatic Word Highlighting
                  </h3>
                  <p className="text-lg text-ink-600 leading-relaxed">
                    When today&apos;s word appears on any webpage, the extension subtly underlines
                    it. Hover over the highlighted word to see a quick definition tooltip. It&apos;s
                    like having a vocabulary spotter built into your browser.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-sage-100 flex items-center justify-center">
                    <PenLine className="w-7 h-7 text-sage-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-ink-900 mb-3">
                    Writing Helper
                  </h3>
                  <p className="text-lg text-ink-600 leading-relaxed">
                    Select any text and right-click to see &quot;Improve with today&apos;s
                    word&quot; in the context menu. The extension suggests how you might rewrite
                    your sentence to incorporate the word naturally. Perfect for emails,
                    documents, or social posts.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-ink-100 flex items-center justify-center">
                    <Bell className="w-7 h-7 text-ink-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-ink-900 mb-3">
                    Daily Reminders
                  </h3>
                  <p className="text-lg text-ink-600 leading-relaxed">
                    Optional notifications remind you to practice if you haven&apos;t used
                    today&apos;s word yet. Configure the time or disable entirely—it&apos;s your
                    choice. A gentle nudge to keep your streak alive.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-gold-100 flex items-center justify-center">
                    <Download className="w-7 h-7 text-gold-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-ink-900 mb-3">
                    Quick-Access Popup
                  </h3>
                  <p className="text-lg text-ink-600 leading-relaxed">
                    Click the extension icon to see today&apos;s word instantly. View the
                    definition, an example sentence, and mark it as used—all without leaving your
                    current tab. One click to open your full dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section className="py-16 md:py-24 bg-ink-50">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink-900 text-center mb-16">
              Installation
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Chrome */}
              <div id="chrome" className="card-elevated p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Chrome className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-ink-900">Google Chrome</h3>
                </div>
                <ol className="space-y-4 text-ink-700">
                  <li className="flex gap-3">
                    <span className="font-bold text-gold-600">1.</span>
                    <span>Click the button below to visit the Chrome Web Store</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-gold-600">2.</span>
                    <span>Click &quot;Add to Chrome&quot;</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-gold-600">3.</span>
                    <span>Pin the extension to your toolbar for easy access</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-gold-600">4.</span>
                    <span>Sign in with your Lexicon Daily account</span>
                  </li>
                </ol>
                <a
                  href="https://chrome.google.com/webstore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-6 w-full text-center"
                >
                  Get Chrome Extension
                </a>
              </div>

              {/* Firefox */}
              <div id="firefox" className="card-elevated p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-ink-900">Mozilla Firefox</h3>
                </div>
                <ol className="space-y-4 text-ink-700">
                  <li className="flex gap-3">
                    <span className="font-bold text-gold-600">1.</span>
                    <span>Click the button below to visit Firefox Add-ons</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-gold-600">2.</span>
                    <span>Click &quot;Add to Firefox&quot;</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-gold-600">3.</span>
                    <span>Grant the requested permissions</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-gold-600">4.</span>
                    <span>Sign in with your Lexicon Daily account</span>
                  </li>
                </ol>
                <a
                  href="https://addons.mozilla.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-6 w-full text-center"
                >
                  Get Firefox Extension
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Note */}
      <section className="py-16 md:py-24">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-2xl font-bold text-ink-900 mb-4">
            Privacy-Conscious Design
          </h2>
          <p className="text-lg text-ink-600 max-w-2xl mx-auto mb-6">
            The extension only activates to find today&apos;s word on pages you visit. It
            doesn&apos;t track your browsing history, collect personal data, or send information
            to third parties. Your vocabulary journey is yours alone.
          </p>
          <Link href="/privacy" className="link">
            Read our Privacy Policy
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-ink-950 text-ink-100">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Don&apos;t Have an Account Yet?
          </h2>
          <p className="mt-4 text-xl text-ink-400">
            Sign up free to start your vocabulary journey.
          </p>
          <div className="mt-8">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium
                       bg-gold-500 text-ink-900 hover:bg-gold-400 
                       transition-all duration-200 ease-out text-lg"
            >
              Create Free Account
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

