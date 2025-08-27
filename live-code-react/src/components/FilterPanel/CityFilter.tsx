'use client';

import React, { useState, useMemo } from 'react';
import { useEvents } from '@/hooks/useEvents';
import { CITIES } from '@/utils/constants';

interface CityFilterProps {
  className?: string;
}

export function CityFilter({ className = '' }: CityFilterProps) {
  const { filters, setCity } = useEvents();
  const [searchTerm, setSearchTerm] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  // Group cities by region
  const cityGroups = useMemo(() => {
    const groups = {
      'Miền Bắc': ['Hà Nội', 'Hải Phòng'],
      'Miền Trung': ['Đà Nẵng', 'Huế'],
      'Miền Nam': ['TP. Hồ Chí Minh', 'Cần Thơ'],
      'Du lịch': ['Nha Trang', 'Vũng Tàu', 'Đà Lạt', 'Phú Quốc']
    };
    return groups;
  }, []);

  // Filter cities based on search term
  const filteredCities = useMemo(() => {
    if (!searchTerm) return CITIES;
    return CITIES.filter(city => 
      city.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleCityClick = (city: string) => {
    if (filters.city === city) {
      setCity('');
    } else {
      setCity(city);
    }
  };

  const selectedCity = filters.city;

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium text-gray-700">
          Thành phố
        </label>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs text-blue-600 hover:text-blue-800 transition-colors"
        >
          {isExpanded ? 'Thu gọn' : 'Xem tất cả'}
        </button>
      </div>

      {/* Selected City Display */}
      {selectedCity && (
        <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-lg">📍</span>
              <span className="text-sm font-medium text-green-900">
                {selectedCity}
              </span>
            </div>
            <button
              onClick={() => setCity('')}
              className="text-green-600 hover:text-green-800 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Search Input */}
      {isExpanded && (
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm thành phố..."
            className="w-full px-3 py-2 pl-8 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
          />
          <svg
            className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      )}

      {/* City List */}
      {isExpanded ? (
        <div className="max-h-48 overflow-y-auto border border-gray-200 rounded-md">
          {Object.entries(cityGroups).map(([region, cities]) => {
            const regionCities = cities.filter(city => 
              filteredCities.includes(city)
            );
            
            if (regionCities.length === 0) return null;

            return (
              <div key={region} className="border-b border-gray-100 last:border-b-0">
                <div className="px-3 py-2 bg-gray-50 text-xs font-medium text-gray-600 uppercase tracking-wide">
                  {region}
                </div>
                {regionCities.map((city) => (
                  <button
                    key={city}
                    onClick={() => handleCityClick(city)}
                    className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-50 transition-colors ${
                      selectedCity === city ? 'bg-blue-50 text-blue-900' : 'text-gray-700'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <span>📍</span>
                      <span>{city}</span>
                      {selectedCity === city && (
                        <svg className="w-4 h-4 text-blue-600 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            );
          })}
        </div>
      ) : (
        /* Quick Select Buttons */
        <div className="flex flex-wrap gap-2">
          {CITIES.slice(0, 6).map((city) => (
            <button
              key={city}
              onClick={() => handleCityClick(city)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                selectedCity === city
                  ? 'bg-green-100 text-green-800 border border-green-300'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              📍 {city}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
