'use client';

import React, { useMemo, useState } from 'react';
import { useDebounce } from '@/hooks/useDebounce';
import { SearchResults } from '@/components/SearchBar/SearchResults';
import { getAllMockEvents } from '@/data/mockEvents';
import Link from 'next/link';

export default function ExamPage() {
  const allEvents = useMemo(() => getAllMockEvents(), []);
  const [query, setQuery] = useState('');
  const { debouncedValue, isDebouncing } = useDebounce(query, 300);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-xl font-semibold text-gray-900">Exam Mode: Search Only</h1>
          <Link href="/" className="text-sm text-blue-600 hover:underline">← Quay lại trang chính</Link>
        </div>

        <div className="relative">
          <div className="flex items-center rounded-lg border border-gray-300 bg-white px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Tìm sự kiện, danh mục... (Ctrl/Cmd+K)"
              className="flex-1 ml-2 outline-none placeholder:text-gray-400"
              aria-label="Tìm kiếm"
            />
            {isDebouncing && (
              <div className="ml-2 animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600" />
            )}
          </div>

          <SearchResults
            searchTerm={debouncedValue}
            events={allEvents}
            onSelectEvent={() => {}}
            onSelectCategory={() => {}}
          />
        </div>

        <div className="mt-6 text-xs text-gray-500">
          Gợi ý luyện tập: chỉ cần đảm bảo search debounced và suggestion hiển thị đúng. Không cần Redux, filter, sort hay pagination.
        </div>
      </div>
    </div>
  );
}
