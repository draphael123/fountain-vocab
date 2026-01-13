# Lexicon Daily

A complete vocabulary-improvement system consisting of a Next.js website and a browser extension. Master one advanced English word per day through contextual learning, active practice, and streak-based motivation.

## Overview

Lexicon Daily helps users learn, retain, and actively use advanced English vocabulary through:

- **Daily Word Delivery**: One carefully curated word per day with definition, pronunciation, examples, synonyms, and tone guidance
- **Active Practice**: Write sentences using each word to embed it in your memory
- **Streak Motivation**: Build daily streaks to maintain consistency
- **Browser Extension**: See today's word highlighted across the web, with quick definitions on hover
- **Progress Tracking**: Dashboard showing your learning history and statistics

## Project Structure

```
├── website/                 # Next.js website
│   ├── src/
│   │   ├── app/            # App router pages and API routes
│   │   ├── components/     # Reusable React components
│   │   ├── data/           # Vocabulary word data (500+ curated words)
│   │   ├── lib/            # Database and authentication utilities
│   │   └── types/          # TypeScript type definitions
│   └── package.json
│
├── extension/              # Browser extension (Chrome/Firefox)
│   ├── manifest.json       # Extension manifest (MV3)
│   ├── popup.html/css/js   # Extension popup UI
│   ├── background.js       # Service worker
│   ├── content.js/css      # Content script for word highlighting
│   └── icons/              # Extension icons
│
└── README.md
```

## Tech Stack

### Website
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: SQLite (via better-sqlite3)
- **Authentication**: JWT-based sessions with bcrypt

### Browser Extension
- **Manifest**: V3 (Chrome MV3, Firefox compatible)
- **Features**: Popup UI, content scripts, context menus, notifications

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Website Setup

1. Navigate to the website directory:
   ```bash
   cd website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create the data directory:
   ```bash
   mkdir data
   ```

4. (Optional) Set environment variables:
   ```bash
   # Create .env.local file
   echo "JWT_SECRET=your-secret-key-here" > .env.local
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000)

### Browser Extension Setup

#### Chrome

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" (toggle in top right)
3. Click "Load unpacked"
4. Select the `extension` folder
5. The extension icon should appear in your toolbar

#### Firefox

1. Open Firefox and navigate to `about:debugging`
2. Click "This Firefox" in the sidebar
3. Click "Load Temporary Add-on"
4. Select any file in the `extension` folder (e.g., `manifest.json`)

### Production Deployment

#### Vercel (Website)

1. Push your code to GitHub
2. Import the project to Vercel
3. Set the root directory to `website`
4. Add environment variables:
   - `JWT_SECRET`: A secure random string

#### Extension Stores

1. Create icon files (16x16, 32x32, 48x48, 128x128) in `extension/icons/`
2. Update the API_BASE URL in `popup.js` and `background.js` to your production domain
3. Package the extension:
   - Chrome: Zip the extension folder and upload to Chrome Web Store
   - Firefox: Zip and upload to Firefox Add-ons

## Features

### Website

#### Public Pages
- **Landing Page**: Product overview with today's word preview
- **How It Works**: Step-by-step guide to the learning process
- **Why Vocabulary**: Educational content on the importance of vocabulary
- **Extension Page**: Download instructions for the browser extension
- **Privacy Policy**: Data handling and privacy information

#### Authenticated Pages
- **Dashboard**: Today's word, streak stats, recent activity
- **History**: All learned words with user sentences
- **Settings**: Account and notification preferences

### Browser Extension

- **Quick Popup**: View today's word without leaving your current tab
- **Word Highlighting**: Automatic highlighting of today's word on any webpage
- **Hover Definitions**: See the definition by hovering over highlighted words
- **Writing Helper**: Right-click selected text to get suggestions for incorporating today's word
- **Daily Reminders**: Optional notifications if you haven't used the word yet

## Vocabulary Data

The system includes 500+ carefully curated words organized by:

- **Part of Speech**: noun, verb, adjective, adverb
- **Tone**: professional, poetic, assertive, sophisticated, contemplative

Words rotate daily (same word for all users) and cycle through without repetition.

### Adding More Words

To add more words, create additional files in `website/src/data/` following the existing pattern:

```typescript
export const wordsXXXtoYYY: Omit<Word, 'id'>[] = [
  {
    word: 'Example',
    phonetic: '/ɪɡˈzæmpəl/',
    partOfSpeech: 'noun',
    definition: 'A thing characteristic of its kind.',
    examples: [
      'This is an example sentence.',
      'Another example of usage.',
    ],
    synonyms: ['instance', 'sample', 'specimen'],
    tone: 'professional',
  },
  // ... more words
];
```

Then import and add to `website/src/data/index.ts`.

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/word/today` | GET | Get today's word with user progress |
| `/api/progress` | POST | Record word usage and sentence |
| `/api/auth/register` | POST | Create new account |
| `/api/auth/login` | POST | Sign in |
| `/api/auth/logout` | POST | Sign out |

## Customization

### Theming

The color scheme uses CSS variables defined in `website/src/app/globals.css`:

- **Ink**: Neutral grays for text and backgrounds
- **Gold**: Accent color for highlights and streaks
- **Sage**: Secondary accent for success states

### Fonts

- **Serif** (Libre Baskerville): Headlines and word display
- **Sans** (Source Sans 3): Body text
- **Mono** (JetBrains Mono): Phonetic spellings

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

For questions or issues, please open a GitHub issue or contact support@lexicondaily.com.

