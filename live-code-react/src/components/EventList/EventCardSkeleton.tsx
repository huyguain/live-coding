'use client';

import React from 'react';

export function EventCardSkeleton() {
  return (
    <div className="animate-pulse rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="h-40 w-full rounded-md bg-gray-200" />
      <div className="mt-4 h-4 w-3/5 rounded bg-gray-200" />
      <div className="mt-2 h-3 w-2/5 rounded bg-gray-200" />
      <div className="mt-4 flex items-center space-x-2">
        <div className="h-3 w-16 rounded bg-gray-200" />
        <div className="h-3 w-20 rounded bg-gray-200" />
      </div>
      <div className="mt-4 h-3 w-24 rounded bg-gray-200" />
    </div>
  );
}
