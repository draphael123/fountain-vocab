import Link from 'next/link';
import { BookOpen, Github, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-ink-300">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-ink-800 flex items-center justify-center group-hover:bg-ink-700 transition-colors">
                <BookOpen className="w-5 h-5 text-gold-400" />
              </div>
              <span className="font-serif text-xl font-bold text-ink-100">
                Lexicon Daily
              </span>
            </Link>
            <p className="mt-4 text-sm text-ink-400 leading-relaxed">
              Elevate your vocabulary one word at a time. Build lasting language skills through
              daily practice and contextual learning.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-ink-100 mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/how-it-works"
                  className="text-ink-400 hover:text-ink-200 transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/extension"
                  className="text-ink-400 hover:text-ink-200 transition-colors"
                >
                  Browser Extension
                </Link>
              </li>
              <li>
                <Link
                  href="/why-vocabulary"
                  className="text-ink-400 hover:text-ink-200 transition-colors"
                >
                  Why Vocabulary
                </Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h4 className="font-semibold text-ink-100 mb-4">Account</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/login"
                  className="text-ink-400 hover:text-ink-200 transition-colors"
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="text-ink-400 hover:text-ink-200 transition-colors"
                >
                  Create Account
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-ink-400 hover:text-ink-200 transition-colors"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-ink-100 mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-ink-400 hover:text-ink-200 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-ink-400 hover:text-ink-200 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-ink-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-ink-500">
            © {currentYear} Lexicon Daily. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-ink-800 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-ink-400" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-ink-800 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-ink-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

