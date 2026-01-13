// Content script for Lexicon Daily - highlights today's word on web pages

let currentWord = null;
let highlightedElements = [];
let tooltipElement = null;
let suggestionElement = null;

// Initialize content script
async function init() {
  try {
    // Get stored word data
    const data = await chrome.storage.local.get(['dailyWord']);
    
    if (data.dailyWord && data.dailyWord.word) {
      currentWord = data.dailyWord.word;
      highlightWord();
    }
  } catch (error) {
    console.error('Lexicon Daily: Error initializing content script', error);
  }
}

// Listen for messages from background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'UPDATE_WORD') {
    currentWord = message.word;
    clearHighlights();
    highlightWord();
  } else if (message.type === 'SHOW_SUGGESTION') {
    showSuggestion(message.originalText, message.suggestion, message.word);
  }
  return true;
});

// Highlight the current word throughout the page
function highlightWord() {
  if (!currentWord) return;

  const wordPattern = new RegExp(`\\b${escapeRegExp(currentWord.word)}\\b`, 'gi');
  
  // Walk through all text nodes
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: (node) => {
        // Skip script, style, and other non-visible elements
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        
        const tagName = parent.tagName.toLowerCase();
        if (['script', 'style', 'textarea', 'input', 'noscript'].includes(tagName)) {
          return NodeFilter.FILTER_REJECT;
        }
        
        // Skip if parent is already a highlight
        if (parent.classList.contains('lexicon-highlight')) {
          return NodeFilter.FILTER_REJECT;
        }

        // Check if text contains the word
        if (wordPattern.test(node.textContent)) {
          return NodeFilter.FILTER_ACCEPT;
        }
        
        return NodeFilter.FILTER_REJECT;
      },
    }
  );

  const nodesToProcess = [];
  let node;
  while ((node = walker.nextNode())) {
    nodesToProcess.push(node);
  }

  // Process nodes
  for (const textNode of nodesToProcess) {
    highlightTextNode(textNode, wordPattern);
  }
}

// Highlight a specific text node
function highlightTextNode(textNode, pattern) {
  const text = textNode.textContent;
  const matches = [...text.matchAll(pattern)];
  
  if (matches.length === 0) return;

  const fragment = document.createDocumentFragment();
  let lastIndex = 0;

  for (const match of matches) {
    // Add text before match
    if (match.index > lastIndex) {
      fragment.appendChild(
        document.createTextNode(text.slice(lastIndex, match.index))
      );
    }

    // Add highlighted match
    const span = document.createElement('span');
    span.className = 'lexicon-highlight';
    span.textContent = match[0];
    span.addEventListener('mouseenter', showTooltip);
    span.addEventListener('mouseleave', hideTooltip);
    fragment.appendChild(span);
    highlightedElements.push(span);

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
  }

  // Replace original node
  textNode.parentNode.replaceChild(fragment, textNode);
}

// Clear all highlights
function clearHighlights() {
  for (const el of highlightedElements) {
    const textNode = document.createTextNode(el.textContent);
    el.parentNode.replaceChild(textNode, el);
  }
  highlightedElements = [];
}

// Show tooltip on hover
function showTooltip(event) {
  if (!currentWord) return;

  hideTooltip(); // Remove any existing tooltip

  const target = event.target;
  const rect = target.getBoundingClientRect();

  tooltipElement = document.createElement('div');
  tooltipElement.className = 'lexicon-tooltip';
  tooltipElement.innerHTML = `
    <div class="lexicon-tooltip-header">
      <span class="lexicon-tooltip-word">${currentWord.word}</span>
      <span class="lexicon-tooltip-pos">${currentWord.partOfSpeech}</span>
    </div>
    <p class="lexicon-tooltip-definition">${currentWord.definition}</p>
    <div class="lexicon-tooltip-footer">
      <span class="lexicon-tooltip-tone">${currentWord.tone}</span>
      <span class="lexicon-tooltip-brand">Lexicon Daily</span>
    </div>
  `;

  document.body.appendChild(tooltipElement);

  // Position tooltip
  const tooltipRect = tooltipElement.getBoundingClientRect();
  let top = rect.bottom + window.scrollY + 8;
  let left = rect.left + window.scrollX;

  // Adjust if tooltip goes off screen
  if (left + tooltipRect.width > window.innerWidth) {
    left = window.innerWidth - tooltipRect.width - 16;
  }
  if (top + tooltipRect.height > window.innerHeight + window.scrollY) {
    top = rect.top + window.scrollY - tooltipRect.height - 8;
  }

  tooltipElement.style.top = `${top}px`;
  tooltipElement.style.left = `${left}px`;
}

// Hide tooltip
function hideTooltip() {
  if (tooltipElement) {
    tooltipElement.remove();
    tooltipElement = null;
  }
}

// Show writing suggestion
function showSuggestion(originalText, suggestion, word) {
  hideSuggestion(); // Remove any existing suggestion

  suggestionElement = document.createElement('div');
  suggestionElement.className = 'lexicon-suggestion';
  suggestionElement.innerHTML = `
    <div class="lexicon-suggestion-header">
      <svg class="lexicon-suggestion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 20h9"></path>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
      </svg>
      <span>Improve with "${word.word}"</span>
      <button class="lexicon-suggestion-close" aria-label="Close">&times;</button>
    </div>
    <div class="lexicon-suggestion-content">
      <p class="lexicon-suggestion-original">"${originalText}"</p>
      <p class="lexicon-suggestion-text">${suggestion}</p>
    </div>
    <div class="lexicon-suggestion-footer">
      <span><strong>${word.word}</strong>: ${word.definition}</span>
    </div>
  `;

  // Add close handler
  suggestionElement.querySelector('.lexicon-suggestion-close').addEventListener('click', hideSuggestion);
  
  // Close on click outside
  setTimeout(() => {
    document.addEventListener('click', handleSuggestionOutsideClick);
  }, 100);

  document.body.appendChild(suggestionElement);

  // Position near selection or center
  const selection = window.getSelection();
  if (selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    
    suggestionElement.style.top = `${rect.bottom + window.scrollY + 16}px`;
    suggestionElement.style.left = `${Math.max(16, rect.left + window.scrollX)}px`;
  }
}

// Hide suggestion
function hideSuggestion() {
  if (suggestionElement) {
    suggestionElement.remove();
    suggestionElement = null;
    document.removeEventListener('click', handleSuggestionOutsideClick);
  }
}

// Handle clicks outside suggestion
function handleSuggestionOutsideClick(event) {
  if (suggestionElement && !suggestionElement.contains(event.target)) {
    hideSuggestion();
  }
}

// Escape special regex characters
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Re-highlight on dynamic content changes (with debounce)
let mutationTimeout = null;
const observer = new MutationObserver(() => {
  if (mutationTimeout) clearTimeout(mutationTimeout);
  mutationTimeout = setTimeout(() => {
    if (currentWord) {
      highlightWord();
    }
  }, 500);
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});

