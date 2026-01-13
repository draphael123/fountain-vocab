import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lexicon Daily — Elevate Your Vocabulary',
  description: 'Master one powerful word each day. Build a sophisticated vocabulary through daily practice, contextual learning, and streak-based motivation.',
  keywords: ['vocabulary', 'learning', 'english', 'words', 'education', 'professional development'],
  authors: [{ name: 'Lexicon Daily' }],
  openGraph: {
    title: 'Lexicon Daily — Elevate Your Vocabulary',
    description: 'Master one powerful word each day. Build a sophisticated vocabulary through daily practice.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}

