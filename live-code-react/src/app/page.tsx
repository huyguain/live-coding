'use client';

import { SearchBar } from '@/components/SearchBar';
import { FilterPanel, FilterChips } from '@/components/FilterPanel';
import { SortControl } from '@/components/SortControl';
import { EventList } from '@/components/EventList';
import { ReduxDevTools } from '@/components/ReduxDevTools';
import { PaginationDebug } from '@/components/Pagination/PaginationDebug';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Danh sách sự kiện
          </h1>
          <p className="text-gray-600">
            Khám phá các sự kiện thú vị và đăng ký tham gia ngay hôm nay
          </p>
        </div>

        {/* Search and Sort Controls */}
        <div className="mb-6 space-y-4">
          <SearchBar />
          <div className="flex justify-between items-center">
            <SortControl />
          </div>
          
          {/* Active Filters */}
          <FilterChips />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <FilterPanel />
          </div>

          {/* Events List */}
          <div className="lg:col-span-3">
            <EventList />
          </div>
        </div>
      </div>

      {/* Redux DevTools (Development only) */}
      <ReduxDevTools />
      
      {/* Pagination Debug */}
      <PaginationDebug />
    </div>
  );
}
