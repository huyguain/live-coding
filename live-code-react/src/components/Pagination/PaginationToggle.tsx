'use client';

import React from 'react';
import { useEvents } from '@/hooks/useEvents';

interface PaginationToggleProps {
  className?: string;
  onModeChange?: (mode: 'pagination' | 'infinite') => void;
}

export function PaginationToggle({ className = '', onModeChange }: PaginationToggleProps) {
  const { pagination, setCurrentPage } = useEvents();
  const [mode, setMode] = React.useState<'pagination' | 'infinite'>('pagination');

  const handleModeChange = (newMode: 'pagination' | 'infinite') => {
    setMode(newMode);
    // Reset to first page when switching modes
    setCurrentPage(1);
    onModeChange?.(newMode);
  };

  return (
    <div className={`flex items-center justify-center space-x-4 ${className}`}>
      <span className="text-sm font-medium text-gray-700">Chế độ hiển thị:</span>
      
      <div className="flex bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => handleModeChange('pagination')}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
            mode === 'pagination'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
            <span>Phân trang</span>
          </div>
        </button>
        
        <button
          onClick={() => handleModeChange('infinite')}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
            mode === 'infinite'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <span>Cuộn vô hạn</span>
          </div>
        </button>
      </div>

      {/* Mode Info */}
      <div className="text-xs text-gray-500">
        {mode === 'pagination' 
          ? 'Chuyển trang thủ công'
          : 'Tự động tải khi cuộn'
        }
      </div>
    </div>
  );
}
