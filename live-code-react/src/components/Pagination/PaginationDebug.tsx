'use client';

import React from 'react';
import { useEvents } from '@/hooks/useEvents';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';

export function PaginationDebug() {
  const paginationData = useEvents();
  const infiniteData = useInfiniteScroll();

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-300 rounded-lg p-4 shadow-lg max-w-md z-50">
      <h3 className="font-bold text-sm mb-2">🔍 Pagination Debug</h3>
      
      <div className="space-y-2 text-xs">
        <div>
          <strong>Pagination Mode:</strong>
          <div className="ml-2">
            <div>Current Page: {paginationData.pagination.currentPage}</div>
            <div>Page Size: {paginationData.pagination.pageSize}</div>
            <div>Total Items: {paginationData.pagination.totalItems}</div>
            <div>Total Pages: {paginationData.totalPages}</div>
            <div>Filtered Events: {paginationData.filteredEvents.length}</div>
            <div>All Filtered: {paginationData.allFilteredEvents.length}</div>
          </div>
        </div>
        
        <div>
          <strong>Infinite Scroll Mode:</strong>
          <div className="ml-2">
            <div>Current Page: {infiniteData.pagination.currentPage}</div>
            <div>Page Size: {infiniteData.pagination.pageSize}</div>
            <div>Total Items: {infiniteData.pagination.totalItems}</div>
            <div>Total Pages: {infiniteData.totalPages}</div>
            <div>Filtered Events: {infiniteData.filteredEvents.length}</div>
            <div>All Filtered: {infiniteData.allFilteredEvents.length}</div>
            <div>Has More: {infiniteData.hasMore ? 'Yes' : 'No'}</div>
          </div>
        </div>
        
        <div>
          <strong>Filters:</strong>
          <div className="ml-2">
            <div>Search: "{paginationData.filters.search}"</div>
            <div>Category: {paginationData.filters.category}</div>
            <div>City: {paginationData.filters.city}</div>
            <div>Price: {paginationData.filters.priceRange.min} - {paginationData.filters.priceRange.max}</div>
          </div>
        </div>
        
        <div>
          <strong>Sort:</strong>
          <div className="ml-2">
            <div>{paginationData.sort.field} ({paginationData.sort.direction})</div>
          </div>
        </div>
      </div>
    </div>
  );
}
