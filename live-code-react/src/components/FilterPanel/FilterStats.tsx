'use client';

import React from 'react';
import { useEvents } from '@/hooks/useEvents';

interface FilterStatsProps {
  className?: string;
}

export function FilterStats({ className = '' }: FilterStatsProps) {
  const { events, filteredEvents, pagination } = useEvents();

  const totalEvents = events.length;
  const filteredCount = pagination.totalItems;
  const currentPageCount = filteredEvents.length;
  const filterPercentage = totalEvents > 0 ? Math.round((filteredCount / totalEvents) * 100) : 0;

  return (
    <div className={`bg-gray-50 p-4 rounded-lg ${className}`}>
      <h4 className="text-sm font-medium text-gray-700 mb-3">Thống kê</h4>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Tổng sự kiện:</span>
          <span className="font-medium text-gray-900">{totalEvents}</span>
        </div>
        
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Kết quả tìm thấy:</span>
          <span className="font-medium text-blue-600">{filteredCount}</span>
        </div>
        
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Hiển thị:</span>
          <span className="font-medium text-gray-900">{currentPageCount}</span>
        </div>
        
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Tỷ lệ lọc:</span>
          <span className="font-medium text-green-600">{filterPercentage}%</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-3">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>0</span>
          <span>{totalEvents}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${filterPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Filter Status */}
      {filteredCount < totalEvents && (
        <div className="mt-3 p-2 bg-blue-50 border border-blue-200 rounded-md">
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
            </svg>
            <span className="text-xs text-blue-800">
              Đang lọc: {totalEvents - filteredCount} sự kiện bị ẩn
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
