'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useDebounce } from '@/hooks/useDebounce';
import { useEvents } from '@/hooks/useEvents';
import { useSearchHistory } from '@/hooks/useSearchHistory';
import { SearchResults } from './SearchResults';

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

export function SearchBar({ placeholder = 'Tìm kiếm sự kiện...', className = '' }: SearchBarProps) {
  const { filters, setSearch, setCategory, events } = useEvents();
  const { addToHistory } = useSearchHistory();
  const [searchValue, setSearchValue] = useState(filters.search);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  
  // Debounce search input with loading state
  const { debouncedValue: debouncedSearchValue, isDebouncing } = useDebounce(searchValue, 300);

  // Update search when debounced value changes
  useEffect(() => {
    setSearch(debouncedSearchValue);
    if (debouncedSearchValue.trim()) {
      addToHistory(debouncedSearchValue);
    }
  }, [debouncedSearchValue, setSearch, addToHistory]);

  // Sync local state with Redux state when filters change
  useEffect(() => {
    setSearchValue(filters.search);
  }, [filters.search]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl/Cmd + K to focus search
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('search-input');
        searchInput?.focus();
      }
      
      // Escape to clear search
      if (e.key === 'Escape' && searchValue) {
        handleClear();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [searchValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleClear = () => {
    setSearchValue('');
    setSearch('');
    setShowResults(false);
  };

  const handleSelectEvent = (event: any) => {
    setSearchValue(event.title);
    setSearch(event.title);
    setShowResults(false);
  };

  const handleSelectCategory = (category: string) => {
    setCategory(category as any);
    setShowResults(false);
  };

  // Close results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <div className="relative">
        <input
          id="search-input"
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          onFocus={() => setShowResults(true)}
          placeholder={placeholder}
          className="w-full px-4 py-3 pl-12 pr-12 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
        />
        
        {/* Search Icon */}
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          {isDebouncing ? (
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500"></div>
          ) : (
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          )}
        </div>

        {/* Clear Button */}
        {searchValue && (
          <button
            onClick={handleClear}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 transition-colors"
            title="Xóa tìm kiếm (Esc)"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}

        {/* Keyboard Shortcut Hint */}
        {!searchValue && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <kbd className="px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-100 border border-gray-300 rounded">
              {navigator.platform.includes('Mac') ? '⌘' : 'Ctrl'}K
            </kbd>
          </div>
        )}

        {/* Search Results */}
        {showResults && (
          <SearchResults
            searchTerm={searchValue}
            events={events}
            onSelectEvent={handleSelectEvent}
            onSelectCategory={handleSelectCategory}
          />
        )}
      </div>
    </div>
  );
}
