'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowLeft, Loader2, LogOut } from 'lucide-react';

export default function SettingsPage() {
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/');
    } catch (error) {
      console.error('Logout error:', error);
      setLoggingOut(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-ink-50">
      <Header isLoggedIn />

      <main className="flex-1 pt-28 pb-16 md:pt-32 md:pb-24">
        <div className="container-wide max-w-2xl">
          <Link
            href="/dashboard"
            className="inline-flex items-center text-ink-600 hover:text-ink-900 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>

          <h1 className="font-serif text-3xl font-bold text-ink-900 mb-8">Settings</h1>

          <div className="space-y-6">
            {/* Account Section */}
            <div className="card p-6">
              <h2 className="font-semibold text-ink-900 mb-4">Account</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-ink-500">Email</label>
                  <p className="text-ink-700">Your email is managed through your account.</p>
                </div>
              </div>
            </div>

            {/* Notifications Section */}
            <div className="card p-6">
              <h2 className="font-semibold text-ink-900 mb-4">Notifications</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-ink-700">Daily Reminders</p>
                    <p className="text-sm text-ink-500">
                      Get reminded if you haven&apos;t used today&apos;s word
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-ink-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-gold-400 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-ink-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold-500"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-ink-700">Weekly Summary</p>
                    <p className="text-sm text-ink-500">
                      Receive a weekly email with your progress
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-ink-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-gold-400 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-ink-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold-500"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Extension Section */}
            <div className="card p-6">
              <h2 className="font-semibold text-ink-900 mb-4">Browser Extension</h2>
              <p className="text-ink-600 mb-4">
                Enhance your learning with our browser extension. Highlight today&apos;s word across
                the web, get quick definitions, and more.
              </p>
              <Link href="/extension" className="btn-secondary inline-flex">
                Get Extension
              </Link>
            </div>

            {/* Danger Zone */}
            <div className="card p-6 border-red-200">
              <h2 className="font-semibold text-red-700 mb-4">Sign Out</h2>
              <p className="text-ink-600 mb-4">
                Sign out of your account on this device.
              </p>
              <button
                onClick={handleLogout}
                disabled={loggingOut}
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium
                         bg-red-50 text-red-700 hover:bg-red-100 
                         transition-all duration-200 ease-out
                         disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loggingOut ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Signing out...
                  </>
                ) : (
                  <>
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

