import { useState, useEffect } from 'react';

const SEARCH_HISTORY_KEY = 'event-search-history';
const MAX_HISTORY_ITEMS = 10;

export function useSearchHistory() {
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  // Load search history from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(SEARCH_HISTORY_KEY);
      if (saved) {
        setSearchHistory(JSON.parse(saved));
      }
    } catch (error) {
      console.error('Failed to load search history:', error);
    }
  }, []);

  // Save search history to localStorage
  const saveSearchHistory = (history: string[]) => {
    try {
      localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(history));
    } catch (error) {
      console.error('Failed to save search history:', error);
    }
  };

  // Add search term to history
  const addToHistory = (searchTerm: string) => {
    if (!searchTerm.trim()) return;

    setSearchHistory(prev => {
      const filtered = prev.filter(term => term.toLowerCase() !== searchTerm.toLowerCase());
      const newHistory = [searchTerm, ...filtered].slice(0, MAX_HISTORY_ITEMS);
      saveSearchHistory(newHistory);
      return newHistory;
    });
  };

  // Remove search term from history
  const removeFromHistory = (searchTerm: string) => {
    setSearchHistory(prev => {
      const newHistory = prev.filter(term => term !== searchTerm);
      saveSearchHistory(newHistory);
      return newHistory;
    });
  };

  // Clear all search history
  const clearHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem(SEARCH_HISTORY_KEY);
  };

  return {
    searchHistory,
    addToHistory,
    removeFromHistory,
    clearHistory,
  };
}
