import { useState, useEffect, useCallback } from 'react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import {
  setSearchFilter,
  setCategoryFilter,
  setCityFilter,
  setPriceRangeFilter,
  setDateRangeFilter,
  setSort,
  setCurrentPage,
  setPageSize,
  resetFilters,
  applyFilters
} from '@/store/eventSlice';

export const useInfiniteScroll = () => {
  const dispatch = useAppDispatch();
  const {
    events,
    filteredEvents,
    filters,
    sort,
    pagination,
    loading,
    error
  } = useAppSelector((state) => state.events);

  const [displayedEvents, setDisplayedEvents] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState(true);

  // Apply filters whenever filters or sort change
  useEffect(() => {
    dispatch(applyFilters());
    // Reset displayed events when filters change
    setDisplayedEvents([]);
    setHasMore(true);
  }, [dispatch, filters, sort]);

  // Update displayed events when filtered events change
  useEffect(() => {
    const startIndex = 0;
    const endIndex = pagination.currentPage * pagination.pageSize;
    const newEvents = filteredEvents.slice(startIndex, endIndex);
    
    setDisplayedEvents(newEvents);
    setHasMore(endIndex < filteredEvents.length);
  }, [filteredEvents, pagination.currentPage, pagination.pageSize]);

  // Load more events
  const loadMore = useCallback(() => {
    if (!loading && hasMore) {
      dispatch(setCurrentPage(pagination.currentPage + 1));
    }
  }, [dispatch, loading, hasMore, pagination.currentPage, setCurrentPage]);

  // Get total pages for pagination mode
  const totalPages = Math.ceil(pagination.totalItems / pagination.pageSize);

  return {
    // State
    events,
    filteredEvents: displayedEvents,
    allFilteredEvents: filteredEvents,
    filters,
    sort,
    pagination,
    loading,
    error,
    totalPages,
    hasMore,

    // Actions
    setSearch: (search: string) => dispatch(setSearchFilter(search)),
    setCategory: (category: typeof filters.category) => dispatch(setCategoryFilter(category)),
    setCity: (city: string) => dispatch(setCityFilter(city)),
    setPriceRange: (range: { min: number; max: number }) => dispatch(setPriceRangeFilter(range)),
    setDateRange: (range: { from: string; to: string }) => dispatch(setDateRangeFilter(range)),
    setSort: (sort: typeof sort) => dispatch(setSort(sort)),
    setCurrentPage: (page: number) => dispatch(setCurrentPage(page)),
    setPageSize: (size: number) => dispatch(setPageSize(size)),
    resetFilters: () => dispatch(resetFilters()),
    loadMore,
  };
};
