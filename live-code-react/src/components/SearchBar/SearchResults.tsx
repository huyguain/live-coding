'use client';

import React from 'react';
import { Event } from '@/types/event';
import { CATEGORIES } from '@/utils/constants';
import { useSearchHistory } from '@/hooks/useSearchHistory';

interface SearchResultsProps {
  searchTerm: string;
  events: Event[];
  onSelectEvent: (event: Event) => void;
  onSelectCategory: (category: string) => void;
  className?: string;
}

export function SearchResults({ 
  searchTerm, 
  events, 
  onSelectEvent, 
  onSelectCategory, 
  className = '' 
}: SearchResultsProps) {
  const { searchHistory, removeFromHistory } = useSearchHistory();

  // Show search history when no search term
  if (!searchTerm.trim()) {
    if (searchHistory.length === 0) {
      return null;
    }

    return (
      <div className={`absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50 ${className}`}>
        <div className="p-2">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-3 py-2">
            Tìm kiếm gần đây
          </h3>
          {searchHistory.map((term, index) => (
            <button
              key={index}
              onClick={() => onSelectEvent({ title: term } as any)}
              className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-md transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm text-gray-900">{term}</span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFromHistory(term);
                  }}
                  className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-gray-600 transition-opacity"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Filter events that match search term
  const matchingEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.organizer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  ).slice(0, 5); // Limit to 5 results

  // Find matching categories
  const matchingCategories = CATEGORIES.filter(category =>
    category.label.toLowerCase().includes(searchTerm.toLowerCase())
  ).slice(0, 3);

  if (matchingEvents.length === 0 && matchingCategories.length === 0) {
    return (
      <div className={`absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50 ${className}`}>
        <div className="p-4 text-center text-gray-500">
          <svg className="w-8 h-8 mx-auto mb-2 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
          </svg>
          <p>Không tìm thấy kết quả cho "{searchTerm}"</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto ${className}`}>
      {/* Events Results */}
      {matchingEvents.length > 0 && (
        <div className="p-2">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-3 py-2">
            Sự kiện ({matchingEvents.length})
          </h3>
          {matchingEvents.map((event) => (
            <button
              key={event.id}
              onClick={() => onSelectEvent(event)}
              className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-md transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xs text-gray-600">
                      {CATEGORIES.find(c => c.value === event.category)?.icon}
                    </span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {event.title}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {event.location.city} • {event.date}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Categories Results */}
      {matchingCategories.length > 0 && (
        <div className="p-2 border-t border-gray-100">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-3 py-2">
            Danh mục ({matchingCategories.length})
          </h3>
          {matchingCategories.map((category) => (
            <button
              key={category.value}
              onClick={() => onSelectCategory(category.value)}
              className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-md transition-colors"
            >
              <div className="flex items-center space-x-3">
                <span className="text-lg">{category.icon}</span>
                <span className="text-sm text-gray-900">{category.label}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
