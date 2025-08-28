import { useEffect } from 'react';
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

export const useEvents = () => {
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

  // Apply filters whenever filters or sort change
  useEffect(() => {
    dispatch(applyFilters());
  }, [dispatch, filters, sort]);

  // Get paginated events
  const getPaginatedEvents = () => {
    const startIndex = (pagination.currentPage - 1) * pagination.pageSize;
    const endIndex = startIndex + pagination.pageSize;
    return filteredEvents.slice(startIndex, endIndex);
  };

  // Get total pages
  const totalPages = Math.ceil(filteredEvents.length / pagination.pageSize);

  return {
    // State
    events,
    filteredEvents: getPaginatedEvents(),
    allFilteredEvents: filteredEvents,
    filters,
    sort,
    pagination,
    loading,
    error,
    totalPages,

    // Actions
    setSearch: (search: string) => dispatch(setSearchFilter(search)),
    setCategory: (category: typeof filters.category) => dispatch(setCategoryFilter(category)),
    setCity: (city: string) => dispatch(setCityFilter(city)),
    setPriceRange: (range: { min: number; max: number }) => dispatch(setPriceRangeFilter(range)),
    setDateRange: (range: { from: string; to: string }) => dispatch(setDateRangeFilter(range)),
    setSort: (newSort: typeof sort) => dispatch(setSort(newSort)),
    setCurrentPage: (page: number) => dispatch(setCurrentPage(page)),
    setPageSize: (size: number) => dispatch(setPageSize(size)),
    resetFilters: () => dispatch(resetFilters()),
  };
};
