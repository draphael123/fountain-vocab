'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, BookOpen, Flame } from 'lucide-react';

interface HeaderProps {
  isLoggedIn?: boolean;
  currentStreak?: number;
}

export function Header({ isLoggedIn = false, currentStreak = 0 }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ink-50/80 backdrop-blur-lg border-b border-ink-100">
      <nav className="container-wide py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-ink-900 flex items-center justify-center group-hover:bg-ink-800 transition-colors">
              <BookOpen className="w-5 h-5 text-gold-400" />
            </div>
            <span className="font-serif text-xl font-bold text-ink-900">
              Lexicon Daily
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/how-it-works"
              className="text-ink-600 hover:text-ink-900 transition-colors font-medium"
            >
              How It Works
            </Link>
            <Link
              href="/why-vocabulary"
              className="text-ink-600 hover:text-ink-900 transition-colors font-medium"
            >
              Why Vocabulary
            </Link>
            <Link
              href="/extension"
              className="text-ink-600 hover:text-ink-900 transition-colors font-medium"
            >
              Get Extension
            </Link>
          </div>

          {/* Auth Buttons / Streak Display */}
          <div className="hidden md:flex items-center gap-4">
            {isLoggedIn ? (
              <>
                {currentStreak > 0 && (
                  <div className="flex items-center gap-1.5 text-gold-600 font-medium">
                    <Flame className="w-5 h-5" />
                    <span>{currentStreak} day streak</span>
                  </div>
                )}
                <Link href="/dashboard" className="btn-secondary">
                  Dashboard
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-ink-600 hover:text-ink-900 transition-colors font-medium"
                >
                  Sign In
                </Link>
                <Link href="/signup" className="btn-primary">
                  Start Learning
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-ink-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-ink-700" />
            ) : (
              <Menu className="w-6 h-6 text-ink-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-ink-100 animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link
                href="/how-it-works"
                className="text-ink-600 hover:text-ink-900 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="/why-vocabulary"
                className="text-ink-600 hover:text-ink-900 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Why Vocabulary
              </Link>
              <Link
                href="/extension"
                className="text-ink-600 hover:text-ink-900 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Extension
              </Link>
              <div className="h-px bg-ink-100 my-2" />
              {isLoggedIn ? (
                <Link
                  href="/dashboard"
                  className="btn-primary text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="text-ink-600 hover:text-ink-900 transition-colors font-medium py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    className="btn-primary text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Start Learning
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

