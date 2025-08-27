'use client';

import React from 'react';
import { useEvents } from '@/hooks/useEvents';
import { FilterChips } from './FilterChips';
import { CategoryFilter } from './CategoryFilter';
import { CityFilter } from './CityFilter';
import { PriceRangeFilter } from './PriceRangeFilter';
import { FilterStats } from './FilterStats';

interface FilterPanelProps {
  className?: string;
}

export function FilterPanel({ className = '' }: FilterPanelProps) {
  const { filters, setDateRange, resetFilters } = useEvents();

  const handleDateRangeChange = (field: 'from' | 'to') => (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateRange({
      ...filters.dateRange,
      [field]: e.target.value
    });
  };

  // Check if any filters are active
  const hasActiveFilters = 
    filters.category !== 'all' || 
    filters.city || 
    filters.priceRange.min > 0 || 
    filters.priceRange.max < 999999999 ||
    filters.dateRange.from ||
    filters.dateRange.to;

  return (
    <div className={`bg-white p-6 rounded-lg shadow-sm border border-gray-200 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Bộ lọc</h3>
        <button
          onClick={resetFilters}
          className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
        >
          Xóa tất cả
        </button>
      </div>

      <div className="space-y-6">
        {/* Category Filter */}
        <CategoryFilter />

        {/* City Filter */}
        <CityFilter />

        {/* Price Range Filter */}
        <PriceRangeFilter />

        {/* Date Range Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Khoảng ngày
          </label>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Từ ngày</label>
              <input
                type="date"
                value={filters.dateRange.from}
                onChange={handleDateRangeChange('from')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Đến ngày</label>
              <input
                type="date"
                value={filters.dateRange.to}
                onChange={handleDateRangeChange('to')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>
          </div>
        </div>

        {/* Active Filters Summary */}
        {hasActiveFilters && (
          <div className="pt-4 border-t border-gray-200">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Bộ lọc đang áp dụng:</h4>
            <FilterChips />
          </div>
        )}

        {/* Filter Statistics */}
        <FilterStats />
      </div>
    </div>
  );
}
