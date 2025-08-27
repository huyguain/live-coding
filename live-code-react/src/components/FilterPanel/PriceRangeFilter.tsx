'use client';

import React, { useState, useEffect } from 'react';
import { useEvents } from '@/hooks/useEvents';
import { PRICE_RANGES } from '@/utils/constants';

interface PriceRangeFilterProps {
  className?: string;
}

export function PriceRangeFilter({ className = '' }: PriceRangeFilterProps) {
  const { filters, setPriceRange } = useEvents();
  const [localMin, setLocalMin] = useState(filters.priceRange.min);
  const [localMax, setLocalMax] = useState(filters.priceRange.max);

  // Sync local state with Redux state
  useEffect(() => {
    setLocalMin(filters.priceRange.min);
    setLocalMax(filters.priceRange.max);
  }, [filters.priceRange]);

  const handlePresetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRange = PRICE_RANGES.find(range => range.label === e.target.value);
    if (selectedRange) {
      setPriceRange({ min: selectedRange.min, max: selectedRange.max });
    }
  };

  const handleCustomChange = () => {
    const min = Math.min(localMin, localMax);
    const max = Math.max(localMin, localMax);
    setPriceRange({ min, max });
  };

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setLocalMin(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 999999999;
    setLocalMax(value);
  };

  const getCurrentPresetLabel = () => {
    const currentRange = PRICE_RANGES.find(
      range => range.min === filters.priceRange.min && range.max === filters.priceRange.max
    );
    return currentRange?.label || 'Tùy chỉnh';
  };

  const formatPrice = (price: number) => {
    if (price === 0) return 'Miễn phí';
    if (price >= 1000000) return `${(price / 1000000).toFixed(1)}M`;
    if (price >= 1000) return `${(price / 1000).toFixed(0)}k`;
    return price.toString();
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Khoảng giá
        </label>
        
        {/* Preset Options */}
        <select
          value={getCurrentPresetLabel()}
          onChange={handlePresetChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-3"
        >
          {PRICE_RANGES.map((range) => (
            <option key={range.label} value={range.label}>
              {range.label}
            </option>
          ))}
          <option value="Tùy chỉnh">Tùy chỉnh</option>
        </select>

        {/* Custom Range Inputs */}
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-xs text-gray-500 mb-1">Từ</label>
            <div className="relative">
              <input
                type="number"
                value={localMin}
                onChange={handleMinChange}
                onBlur={handleCustomChange}
                placeholder="0"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">
                VND
              </span>
            </div>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Đến</label>
            <div className="relative">
              <input
                type="number"
                value={localMax}
                onChange={handleMaxChange}
                onBlur={handleCustomChange}
                placeholder="999999999"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">
                VND
              </span>
            </div>
          </div>
        </div>

        {/* Current Range Display */}
        <div className="mt-2 p-2 bg-gray-50 rounded-md">
          <div className="text-xs text-gray-600">
            Khoảng giá hiện tại: 
            <span className="font-medium text-blue-600 ml-1">
              {formatPrice(filters.priceRange.min)} - {formatPrice(filters.priceRange.max)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
