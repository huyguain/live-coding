'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';

interface InfiniteScrollProps {
  className?: string;
  onLoadMore?: () => void;
}

export function InfiniteScroll({ className = '', onLoadMore }: InfiniteScrollProps) {
  const { pagination, hasMore, loadMore, loading, allFilteredEvents } = useInfiniteScroll();
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadingRef = useRef<HTMLDivElement>(null);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;
      if (target.isIntersecting && !loading && hasMore) {
        console.log('Loading more events...', { currentPage: pagination.currentPage, hasMore });
        loadMore();
        onLoadMore?.();
      }
    },
    [loading, hasMore, loadMore, onLoadMore, pagination.currentPage]
  );

  useEffect(() => {
    const element = loadingRef.current;
    if (element) {
      observerRef.current = new IntersectionObserver(handleObserver, {
        root: null,
        rootMargin: '20px',
        threshold: 0.1,
      });
      observerRef.current.observe(element);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [handleObserver]);

  const startItem = 1;
  const endItem = Math.min(pagination.currentPage * pagination.pageSize, allFilteredEvents.length);
  const totalItems = allFilteredEvents.length;

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Progress Info */}
      <div className="text-center">
        <div className="text-sm text-gray-600 mb-2">
          Đã tải {endItem} trong tổng số {totalItems} sự kiện
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 max-w-md mx-auto">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(endItem / pagination.totalItems) * 100}%` }}
          ></div>
        </div>
        
        <div className="text-xs text-gray-500 mt-1">
          {Math.round((endItem / totalItems) * 100)}% hoàn thành
        </div>
      </div>

      {/* Loading Indicator */}
      {loading && (
        <div className="flex items-center justify-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-2 text-sm text-gray-600">Đang tải thêm...</span>
        </div>
      )}

      {/* End of Content */}
      {!hasMore && totalItems > 0 && (
        <div className="text-center py-4">
          <div className="text-sm text-gray-500">
            🎉 Đã tải xong tất cả {totalItems} sự kiện
          </div>
        </div>
      )}

      {/* Observer Target */}
      <div ref={loadingRef} className="h-4" />
    </div>
  );
}
