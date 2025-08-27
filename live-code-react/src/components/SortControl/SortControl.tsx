'use client';

import React from 'react';
import { useEvents } from '@/hooks/useEvents';
import { SORT_OPTIONS } from '@/utils/constants';

interface SortControlProps {
  className?: string;
}

export function SortControl({ className = '' }: SortControlProps) {
  const { sort, setSort } = useEvents();

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = SORT_OPTIONS.find(option => option.value === e.target.value);
    if (selectedOption) {
      setSort({
        field: selectedOption.field,
        direction: selectedOption.direction
      });
    }
  };

  const getCurrentSortValue = () => {
    return `${sort.field}-${sort.direction}`;
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
        Sắp xếp theo:
      </label>
      <select
        value={getCurrentSortValue()}
        onChange={handleSortChange}
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
