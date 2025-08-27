'use client';

import React, { useState } from 'react';
import { useEvents } from '@/hooks/useEvents';
import { CATEGORIES } from '@/utils/constants';

interface CategoryFilterProps {
  className?: string;
}

export function CategoryFilter({ className = '' }: CategoryFilterProps) {
  const { filters, setCategory } = useEvents();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCategoryClick = (categoryValue: string) => {
    if (filters.category === categoryValue) {
      setCategory('all');
    } else {
      setCategory(categoryValue as any);
    }
  };

  const selectedCategory = CATEGORIES.find(c => c.value === filters.category);

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium text-gray-700">
          Danh mục
        </label>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs text-blue-600 hover:text-blue-800 transition-colors"
        >
          {isExpanded ? 'Thu gọn' : 'Xem tất cả'}
        </button>
      </div>

      {/* Selected Category Display */}
      {selectedCategory && (
        <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-lg">{selectedCategory.icon}</span>
              <span className="text-sm font-medium text-blue-900">
                {selectedCategory.label}
              </span>
            </div>
            <button
              onClick={() => setCategory('all')}
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Category Grid */}
      <div className={`grid grid-cols-2 gap-2 ${isExpanded ? 'block' : 'hidden'}`}>
        {CATEGORIES.map((category) => (
          <button
            key={category.value}
            onClick={() => handleCategoryClick(category.value)}
            className={`p-3 rounded-lg border transition-all duration-200 ${
              filters.category === category.value
                ? 'bg-blue-50 border-blue-300 text-blue-900 shadow-sm'
                : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300'
            }`}
          >
            <div className="flex flex-col items-center space-y-1">
              <span className="text-xl">{category.icon}</span>
              <span className="text-xs font-medium text-center">
                {category.label}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Quick Select Buttons */}
      {!isExpanded && (
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.slice(0, 4).map((category) => (
            <button
              key={category.value}
              onClick={() => handleCategoryClick(category.value)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                filters.category === category.value
                  ? 'bg-blue-100 text-blue-800 border border-blue-300'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.icon} {category.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
