'use client';

import React from 'react';
import { useEvents } from '@/hooks/useEvents';
import { CATEGORIES, PRICE_RANGES } from '@/utils/constants';

interface FilterChipsProps {
  className?: string;
}

export function FilterChips({ className = '' }: FilterChipsProps) {
  const { filters, setCategory, setCity, setPriceRange, setDateRange } = useEvents();

  const getCurrentPriceRangeLabel = () => {
    const currentRange = PRICE_RANGES.find(
      range => range.min === filters.priceRange.min && range.max === filters.priceRange.max
    );
    return currentRange?.label || 'Tất cả';
  };

  const removeCategoryFilter = () => {
    setCategory('all');
  };

  const removeCityFilter = () => {
    setCity('');
  };

  const removePriceFilter = () => {
    setPriceRange({ min: 0, max: 999999999 });
  };

  const removeDateFilter = () => {
    setDateRange({ from: '', to: '' });
  };

  const hasActiveFilters = 
    filters.category !== 'all' || 
    filters.city || 
    filters.priceRange.min > 0 || 
    filters.priceRange.max < 999999999 ||
    filters.dateRange.from ||
    filters.dateRange.to;

  if (!hasActiveFilters) {
    return null;
  }

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {filters.category !== 'all' && (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
          <span className="mr-1">
            {CATEGORIES.find(c => c.value === filters.category)?.icon}
          </span>
          {CATEGORIES.find(c => c.value === filters.category)?.label}
          <button
            onClick={removeCategoryFilter}
            className="ml-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </span>
      )}

      {filters.city && (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
          <span className="mr-1">📍</span>
          {filters.city}
          <button
            onClick={removeCityFilter}
            className="ml-2 text-green-600 hover:text-green-800 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </span>
      )}

      {getCurrentPriceRangeLabel() !== 'Tất cả' && (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800">
          <span className="mr-1">💰</span>
          {getCurrentPriceRangeLabel()}
          <button
            onClick={removePriceFilter}
            className="ml-2 text-yellow-600 hover:text-yellow-800 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </span>
      )}

      {(filters.dateRange.from || filters.dateRange.to) && (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-800">
          <span className="mr-1">📅</span>
          {filters.dateRange.from && filters.dateRange.to 
            ? `${filters.dateRange.from} - ${filters.dateRange.to}`
            : filters.dateRange.from || filters.dateRange.to
          }
          <button
            onClick={removeDateFilter}
            className="ml-2 text-purple-600 hover:text-purple-800 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </span>
      )}
    </div>
  );
}
