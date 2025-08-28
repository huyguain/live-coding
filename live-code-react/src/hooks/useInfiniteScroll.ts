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
    filters,
    sort,
    loading,
    error
  } = useAppSelector((state) => state.events);

  const [displayedEvents, setDisplayedEvents] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [allFilteredEvents, setAllFilteredEvents] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  // Apply filters whenever filters or sort change
  useEffect(() => {
    dispatch(applyFilters());
    // Reset displayed events when filters change
    setDisplayedEvents([]);
    setHasMore(true);
    setAllFilteredEvents([]);
    setCurrentPage(1);
  }, [dispatch, filters, sort]);

  // Get all filtered events (not just current page)
  useEffect(() => {
    // Get all events and apply filters manually for infinite scroll
    let filtered = [...events];

    // Apply search filter
    if (filters.search.trim()) {
      const searchTerm = filters.search.toLowerCase();
      filtered = filtered.filter(event =>
        event.title.toLowerCase().includes(searchTerm) ||
        event.description.toLowerCase().includes(searchTerm) ||
        event.organizer.toLowerCase().includes(searchTerm) ||
        event.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      );
    }

    // Apply category filter
    if (filters.category !== 'all') {
      filtered = filtered.filter(event => event.category === filters.category);
    }

    // Apply city filter
    if (filters.city) {
      filtered = filtered.filter(event => event.location.city === filters.city);
    }

    // Apply price range filter
    if (filters.priceRange.min > 0 || filters.priceRange.max < 999999999) {
      filtered = filtered.filter(event => 
        event.price.min >= filters.priceRange.min && 
        event.price.max <= filters.priceRange.max
      );
    }

    // Apply date range filter
    if (filters.dateRange.from || filters.dateRange.to) {
      filtered = filtered.filter(event => {
        const eventDate = new Date(event.date);
        if (filters.dateRange.from && eventDate < new Date(filters.dateRange.from)) return false;
        if (filters.dateRange.to && eventDate > new Date(filters.dateRange.to)) return false;
        return true;
      });
    }

    // Apply sorting
    filtered.sort((a, b) => {
      if (sort.field === 'date') {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return sort.direction === 'asc' ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
      } else if (sort.field === 'price') {
        const priceA = a.price.min;
        const priceB = b.price.min;
        return sort.direction === 'asc' ? priceA - priceB : priceB - priceA;
      } else if (sort.field === 'title') {
        return sort.direction === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
      }
      return 0;
    });

    setAllFilteredEvents(filtered);
  }, [events, filters, sort]);

  // Update displayed events when allFilteredEvents change
  useEffect(() => {
    const startIndex = 0;
    const endIndex = currentPage * pageSize;
    const newEvents = allFilteredEvents.slice(startIndex, endIndex);
    
    setDisplayedEvents(newEvents);
    setHasMore(endIndex < allFilteredEvents.length);
  }, [allFilteredEvents, currentPage, pageSize]);

  // Load more events
  const loadMore = useCallback(() => {
    if (!loading && hasMore) {
      setCurrentPage(prev => prev + 1);
    }
  }, [loading, hasMore]);

  // Get total pages for pagination mode
  const totalPages = Math.ceil(allFilteredEvents.length / pageSize);

  return {
    // State
    events,
    filteredEvents: displayedEvents,
    allFilteredEvents: allFilteredEvents,
    filters,
    sort,
    pagination: { currentPage, pageSize, totalItems: allFilteredEvents.length },
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
    setCurrentPage: (page: number) => setCurrentPage(page),
    setPageSize: (size: number) => setPageSize(size),
    resetFilters: () => dispatch(resetFilters()),
    loadMore,
  };
};
