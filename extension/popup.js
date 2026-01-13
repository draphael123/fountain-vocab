// API endpoint
const API_BASE = 'https://lexicondaily.com';

// DOM elements
const elements = {
  loading: document.getElementById('loading'),
  content: document.getElementById('content'),
  notLoggedIn: document.getElementById('not-logged-in'),
  word: document.getElementById('word'),
  phonetic: document.getElementById('phonetic'),
  partOfSpeech: document.getElementById('part-of-speech'),
  toneBadge: document.getElementById('tone-badge'),
  definition: document.getElementById('definition'),
  example: document.getElementById('example'),
  dayNumber: document.getElementById('day-number'),
  usedBadge: document.getElementById('used-badge'),
  streakBadge: document.getElementById('streak-badge'),
  streakCount: document.getElementById('streak-count'),
  markUsedBtn: document.getElementById('mark-used-btn'),
  dashboardLink: document.getElementById('dashboard-link'),
};

// Tone class mapping
const toneClasses = {
  professional: 'tone-professional',
  poetic: 'tone-poetic',
  assertive: 'tone-assertive',
  sophisticated: 'tone-sophisticated',
  contemplative: 'tone-contemplative',
};

// Initialize popup
async function init() {
  try {
    // Get stored data
    const data = await chrome.storage.local.get(['dailyWord', 'user', 'lastFetch']);
    
    // Check if we need to fetch fresh data
    const now = Date.now();
    const oneHour = 60 * 60 * 1000;
    const needsFetch = !data.lastFetch || (now - data.lastFetch > oneHour);

    if (needsFetch) {
      await fetchDailyWord();
    } else if (data.dailyWord) {
      renderWord(data.dailyWord);
    } else {
      await fetchDailyWord();
    }

    // Set up event listeners
    setupEventListeners();
  } catch (error) {
    console.error('Error initializing popup:', error);
    showError('Failed to load. Please try again.');
  }
}

// Fetch daily word from API
async function fetchDailyWord() {
  try {
    const response = await fetch(`${API_BASE}/api/word/today`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch daily word');
    }

    const data = await response.json();
    
    // Store the data
    await chrome.storage.local.set({
      dailyWord: data,
      lastFetch: Date.now(),
    });

    renderWord(data);
  } catch (error) {
    console.error('Error fetching daily word:', error);
    
    // Try to use cached data
    const cached = await chrome.storage.local.get(['dailyWord']);
    if (cached.dailyWord) {
      renderWord(cached.dailyWord);
    } else {
      showError('Unable to load word. Check your connection.');
    }
  }
}

// Render word data
function renderWord(data) {
  const { word, dayNumber, usedToday, userSentence } = data;

  // Hide loading, show content
  elements.loading.classList.add('hidden');
  elements.content.classList.remove('hidden');

  // Update word info
  elements.word.textContent = word.word;
  elements.phonetic.textContent = word.phonetic;
  elements.partOfSpeech.textContent = word.partOfSpeech;
  elements.definition.textContent = word.definition;
  elements.dayNumber.textContent = dayNumber;

  // Set tone badge
  elements.toneBadge.textContent = word.tone;
  elements.toneBadge.className = `tone-badge ${toneClasses[word.tone] || 'tone-professional'}`;

  // Set example
  if (word.examples && word.examples.length > 0) {
    elements.example.textContent = `"${word.examples[0]}"`;
  }

  // Update used status
  if (usedToday) {
    elements.usedBadge.classList.remove('hidden');
    elements.markUsedBtn.textContent = 'Already Used Today';
    elements.markUsedBtn.classList.add('used');
    elements.markUsedBtn.disabled = true;
  } else {
    elements.usedBadge.classList.add('hidden');
    elements.markUsedBtn.disabled = false;
  }

  // Update dashboard link
  elements.dashboardLink.href = `${API_BASE}/dashboard`;

  // Check for user session and show streak
  checkUserSession();
}

// Check user session
async function checkUserSession() {
  try {
    const data = await chrome.storage.local.get(['user']);
    
    if (data.user && data.user.currentStreak !== undefined) {
      elements.streakBadge.classList.remove('hidden');
      elements.streakCount.textContent = data.user.currentStreak;
    }
  } catch (error) {
    console.error('Error checking user session:', error);
  }
}

// Mark word as used
async function markAsUsed() {
  const btn = elements.markUsedBtn;
  const originalText = btn.innerHTML;
  
  btn.disabled = true;
  btn.innerHTML = `
    <svg class="btn-icon spinner" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"/>
    </svg>
    Saving...
  `;

  try {
    const data = await chrome.storage.local.get(['dailyWord']);
    
    if (!data.dailyWord) {
      throw new Error('No word data available');
    }

    const response = await fetch(`${API_BASE}/api/progress`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        wordId: data.dailyWord.word.id,
        dayNumber: data.dailyWord.dayNumber,
        sentence: null,
      }),
    });

    if (!response.ok) {
      if (response.status === 401) {
        // Not logged in - redirect to login
        window.open(`${API_BASE}/login`, '_blank');
        btn.disabled = false;
        btn.innerHTML = originalText;
        return;
      }
      throw new Error('Failed to mark as used');
    }

    // Update UI
    elements.usedBadge.classList.remove('hidden');
    btn.textContent = 'Already Used Today';
    btn.classList.add('used');
    btn.disabled = true;

    // Update stored data
    const updatedData = {
      ...data.dailyWord,
      usedToday: true,
    };
    await chrome.storage.local.set({ dailyWord: updatedData });

    // Notify background script to update badge
    chrome.runtime.sendMessage({ type: 'WORD_USED' });
  } catch (error) {
    console.error('Error marking word as used:', error);
    btn.disabled = false;
    btn.innerHTML = originalText;
    alert('Failed to save. Please try again or sign in on the website.');
  }
}

// Show error message
function showError(message) {
  elements.loading.classList.add('hidden');
  elements.content.classList.remove('hidden');
  elements.word.textContent = 'Error';
  elements.definition.textContent = message;
}

// Set up event listeners
function setupEventListeners() {
  elements.markUsedBtn.addEventListener('click', markAsUsed);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', init);

