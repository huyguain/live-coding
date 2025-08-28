'use client';

import React, { useState } from 'react';
import { Pagination } from './Pagination';
import { InfiniteScroll } from './InfiniteScroll';
import { PaginationToggle } from './PaginationToggle';
import { useEventData, PaginationMode } from '@/hooks/useEventData';

interface PaginationContainerProps {
  className?: string;
  showToggle?: boolean;
}

export function PaginationContainer({ className = '', showToggle = true }: PaginationContainerProps) {
  const [mode, setMode] = useState<PaginationMode>('pagination');
  const eventData = useEventData(mode);

  const handleModeChange = (newMode: PaginationMode) => {
    setMode(newMode);
    // Reset to first page when switching modes
    eventData.setCurrentPage(1);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Toggle between pagination modes */}
      {showToggle && (
        <PaginationToggle onModeChange={handleModeChange} />
      )}

      {/* Render appropriate pagination component */}
      {mode === 'pagination' ? (
        <Pagination />
      ) : (
        <InfiniteScroll />
      )}
    </div>
  );
}
