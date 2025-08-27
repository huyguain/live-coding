'use client';

import React, { useState } from 'react';
import { Pagination } from './Pagination';
import { InfiniteScroll } from './InfiniteScroll';
import { PaginationToggle } from './PaginationToggle';

interface PaginationContainerProps {
  className?: string;
  showToggle?: boolean;
}

export function PaginationContainer({ className = '', showToggle = true }: PaginationContainerProps) {
  const [mode, setMode] = useState<'pagination' | 'infinite'>('pagination');

  const handleModeChange = (newMode: 'pagination' | 'infinite') => {
    setMode(newMode);
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
