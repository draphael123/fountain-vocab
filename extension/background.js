// Background service worker for Lexicon Daily extension

const API_BASE = 'https://lexicondaily.com';

// Initialize extension
chrome.runtime.onInstalled.addListener(async () => {
  console.log('Lexicon Daily extension installed');
  
  // Set up context menu
  chrome.contextMenus.create({
    id: 'improve-with-word',
    title: 'Improve with today\'s word',
    contexts: ['selection'],
  });

  // Set up daily alarm for word refresh
  chrome.alarms.create('dailyRefresh', {
    when: getNextMidnight(),
    periodInMinutes: 24 * 60, // Every 24 hours
  });

  // Set up reminder alarm
  chrome.alarms.create('dailyReminder', {
    when: getReminderTime(),
    periodInMinutes: 24 * 60,
  });

  // Fetch initial word
  await fetchDailyWord();
});

// Handle alarms
chrome.alarms.onAlarm.addListener(async (alarm) => {
  if (alarm.name === 'dailyRefresh') {
    await fetchDailyWord();
  } else if (alarm.name === 'dailyReminder') {
    await checkAndRemind();
  }
});

// Handle context menu clicks
chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId === 'improve-with-word' && info.selectionText) {
    await handleImproveWithWord(info.selectionText, tab);
  }
});

// Handle messages from popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'WORD_USED') {
    updateBadge(true);
  }
  return true;
});

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

    // Update badge
    updateBadge(data.usedToday);

    // Notify content scripts
    notifyContentScripts(data.word);

    return data;
  } catch (error) {
    console.error('Error fetching daily word:', error);
    return null;
  }
}

// Update extension badge
function updateBadge(usedToday) {
  if (usedToday) {
    chrome.action.setBadgeText({ text: '✓' });
    chrome.action.setBadgeBackgroundColor({ color: '#607263' });
  } else {
    chrome.action.setBadgeText({ text: '!' });
    chrome.action.setBadgeBackgroundColor({ color: '#e8ba3b' });
  }
}

// Notify all content scripts about the new word
async function notifyContentScripts(word) {
  try {
    const tabs = await chrome.tabs.query({});
    for (const tab of tabs) {
      if (tab.id) {
        chrome.tabs.sendMessage(tab.id, {
          type: 'UPDATE_WORD',
          word: word,
        }).catch(() => {
          // Tab might not have content script loaded
        });
      }
    }
  } catch (error) {
    console.error('Error notifying content scripts:', error);
  }
}

// Handle "Improve with word" context menu action
async function handleImproveWithWord(selectedText, tab) {
  try {
    const data = await chrome.storage.local.get(['dailyWord']);
    
    if (!data.dailyWord) {
      return;
    }

    const word = data.dailyWord.word;
    
    // Create a suggestion (simple template-based approach)
    const suggestion = createWritingSuggestion(selectedText, word);
    
    // Send suggestion to content script for display
    chrome.tabs.sendMessage(tab.id, {
      type: 'SHOW_SUGGESTION',
      originalText: selectedText,
      suggestion: suggestion,
      word: word,
    });
  } catch (error) {
    console.error('Error handling improve with word:', error);
  }
}

// Create a writing suggestion
function createWritingSuggestion(originalText, word) {
  // Simple suggestion logic - in a real app, this could use AI
  const suggestions = [
    `Consider: "${originalText}" could be enhanced by incorporating "${word.word}" to convey ${word.tone} tone.`,
    `Try using "${word.word}" (${word.definition.toLowerCase()}) to strengthen this passage.`,
    `The word "${word.word}" might elegantly replace or supplement part of this text.`,
  ];
  
  return suggestions[Math.floor(Math.random() * suggestions.length)];
}

// Check if user needs a reminder
async function checkAndRemind() {
  try {
    const data = await chrome.storage.local.get(['dailyWord', 'settings']);
    
    // Check if reminders are enabled (default: true)
    const settings = data.settings || { remindersEnabled: true };
    if (!settings.remindersEnabled) {
      return;
    }

    // Check if word was used today
    if (data.dailyWord && !data.dailyWord.usedToday) {
      chrome.notifications.create({
        type: 'basic',
        iconUrl: 'icons/icon128.png',
        title: 'Lexicon Daily',
        message: `Don't forget today's word: ${data.dailyWord.word.word}! Keep your streak alive.`,
        priority: 1,
      });
    }
  } catch (error) {
    console.error('Error checking reminder:', error);
  }
}

// Get next midnight timestamp
function getNextMidnight() {
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  return tomorrow.getTime();
}

// Get reminder time (default: 6 PM local time)
function getReminderTime() {
  const now = new Date();
  const reminder = new Date(now);
  reminder.setHours(18, 0, 0, 0);
  
  // If it's already past 6 PM, set for tomorrow
  if (now > reminder) {
    reminder.setDate(reminder.getDate() + 1);
  }
  
  return reminder.getTime();
}

// Listen for tab updates to inject content script
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url && !tab.url.startsWith('chrome://')) {
    try {
      const data = await chrome.storage.local.get(['dailyWord']);
      if (data.dailyWord) {
        chrome.tabs.sendMessage(tabId, {
          type: 'UPDATE_WORD',
          word: data.dailyWord.word,
        }).catch(() => {
          // Content script not loaded yet, which is fine
        });
      }
    } catch (error) {
      // Ignore errors for tabs where we can't inject
    }
  }
});

