import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Event, EventFilters, EventSort, PaginationState, EventListState } from '@/types/event';
import { DEFAULT_FILTERS, DEFAULT_SORT, DEFAULT_PAGINATION } from '@/utils/constants';
import { getMockEvents } from '@/data/mockEvents';

const initialState: EventListState = {
  events: getMockEvents(),
  filteredEvents: getMockEvents(),
  filters: DEFAULT_FILTERS,
  sort: DEFAULT_SORT,
  pagination: DEFAULT_PAGINATION,
  loading: false,
  error: null
};

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    // Set loading state
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    // Set error state
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },

    // Update search filter
    setSearchFilter: (state, action: PayloadAction<string>) => {
      state.filters.search = action.payload;
      state.pagination.currentPage = 1; // Reset to first page
    },

    // Update category filter
    setCategoryFilter: (state, action: PayloadAction<EventFilters['category']>) => {
      state.filters.category = action.payload;
      state.pagination.currentPage = 1;
    },

    // Update city filter
    setCityFilter: (state, action: PayloadAction<string>) => {
      state.filters.city = action.payload;
      state.pagination.currentPage = 1;
    },

    // Update price range filter
    setPriceRangeFilter: (state, action: PayloadAction<{ min: number; max: number }>) => {
      state.filters.priceRange = action.payload;
      state.pagination.currentPage = 1;
    },

    // Update date range filter
    setDateRangeFilter: (state, action: PayloadAction<{ from: string; to: string }>) => {
      state.filters.dateRange = action.payload;
      state.pagination.currentPage = 1;
    },

    // Update sort
    setSort: (state, action: PayloadAction<EventSort>) => {
      state.sort = action.payload;
    },

    // Update pagination
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.pagination.currentPage = action.payload;
    },

    setPageSize: (state, action: PayloadAction<number>) => {
      state.pagination.pageSize = action.payload;
      state.pagination.currentPage = 1; // Reset to first page
    },

    // Reset all filters
    resetFilters: (state) => {
      state.filters = DEFAULT_FILTERS;
      state.sort = DEFAULT_SORT;
      state.pagination.currentPage = 1;
    },

    // Apply filters and update filtered events
    applyFilters: (state) => {
      let filtered = [...state.events];

      // Apply search filter
      if (state.filters.search.trim()) {
        const searchTerm = state.filters.search.toLowerCase();
        filtered = filtered.filter(event =>
          event.title.toLowerCase().includes(searchTerm) ||
          event.description.toLowerCase().includes(searchTerm) ||
          event.organizer.toLowerCase().includes(searchTerm) ||
          event.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
      }

      // Apply category filter
      if (state.filters.category !== 'all') {
        filtered = filtered.filter(event => event.category === state.filters.category);
      }

      // Apply city filter
      if (state.filters.city) {
        filtered = filtered.filter(event => event.location.city === state.filters.city);
      }

      // Apply price range filter
      filtered = filtered.filter(event =>
        event.price.min >= state.filters.priceRange.min &&
        event.price.max <= state.filters.priceRange.max
      );

      // Apply date range filter
      if (state.filters.dateRange.from) {
        filtered = filtered.filter(event => event.date >= state.filters.dateRange.from);
      }
      if (state.filters.dateRange.to) {
        filtered = filtered.filter(event => event.date <= state.filters.dateRange.to);
      }

      // Apply sorting
      filtered.sort((a, b) => {
        let aValue: any, bValue: any;

        switch (state.sort.field) {
          case 'date':
            aValue = new Date(a.date).getTime();
            bValue = new Date(b.date).getTime();
            break;
          case 'price':
            aValue = a.price.min;
            bValue = b.price.min;
            break;
          case 'title':
            aValue = a.title.toLowerCase();
            bValue = b.title.toLowerCase();
            break;
          default:
            return 0;
        }

        if (state.sort.direction === 'asc') {
          return aValue > bValue ? 1 : -1;
        } else {
          return aValue < bValue ? 1 : -1;
        }
      });

      // Update filtered events and pagination
      state.filteredEvents = filtered;
      state.pagination.totalItems = filtered.length;
      state.pagination.currentPage = Math.min(
        state.pagination.currentPage,
        Math.ceil(filtered.length / state.pagination.pageSize)
      );
    }
  }
});

export const {
  setLoading,
  setError,
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
} = eventSlice.actions;

export default eventSlice.reducer;
