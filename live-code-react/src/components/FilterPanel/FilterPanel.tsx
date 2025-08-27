'use client';

import React from 'react';
import { useEvents } from '@/hooks/useEvents';
import { CATEGORIES, CITIES, PRICE_RANGES } from '@/utils/constants';

interface FilterPanelProps {
  className?: string;
}

export function FilterPanel({ className = '' }: FilterPanelProps) {
  const { filters, setCategory, setCity, setPriceRange, resetFilters } = useEvents();

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value as any);
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(e.target.value);
  };

  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRange = PRICE_RANGES.find(range => range.label === e.target.value);
    if (selectedRange) {
      setPriceRange({ min: selectedRange.min, max: selectedRange.max });
    }
  };

  const getCurrentPriceRangeLabel = () => {
    const currentRange = PRICE_RANGES.find(
      range => range.min === filters.priceRange.min && range.max === filters.priceRange.max
    );
    return currentRange?.label || 'Tất cả';
  };

  // Check if any filters are active
  const hasActiveFilters = 
    filters.category !== 'all' || 
    filters.city || 
    filters.priceRange.min > 0 || 
    filters.priceRange.max < 999999999;

  return (
    <div className={`bg-white p-6 rounded-lg shadow-sm border border-gray-200 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Bộ lọc</h3>
        <button
          onClick={resetFilters}
          className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
        >
          Xóa tất cả
        </button>
      </div>

      <div className="space-y-4">
        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Danh mục
          </label>
          <select
            value={filters.category}
            onChange={handleCategoryChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">Tất cả danh mục</option>
            {CATEGORIES.map((category) => (
              <option key={category.value} value={category.value}>
                {category.icon} {category.label}
              </option>
            ))}
          </select>
        </div>

        {/* City Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Thành phố
          </label>
          <select
            value={filters.city}
            onChange={handleCityChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Tất cả thành phố</option>
            {CITIES.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Khoảng giá
          </label>
          <select
            value={getCurrentPriceRangeLabel()}
            onChange={handlePriceRangeChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="Tất cả">Tất cả</option>
            {PRICE_RANGES.map((range) => (
              <option key={range.label} value={range.label}>
                {range.label}
              </option>
            ))}
          </select>
        </div>

        {/* Active Filters Summary */}
        {hasActiveFilters && (
          <div className="pt-4 border-t border-gray-200">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Bộ lọc đang áp dụng:</h4>
            <div className="flex flex-wrap gap-2">
              {filters.category !== 'all' && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                  {CATEGORIES.find(c => c.value === filters.category)?.label}
                </span>
              )}
              {filters.city && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                  {filters.city}
                </span>
              )}
              {getCurrentPriceRangeLabel() !== 'Tất cả' && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">
                  {getCurrentPriceRangeLabel()}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
