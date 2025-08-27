import { useState, useEffect } from 'react';
import { EventFilters } from '@/types/event';
import { DEFAULT_FILTERS } from '@/utils/constants';

const FILTER_STATE_KEY = 'event-filter-state';

export function useFilterState() {
  const [filterState, setFilterState] = useState<EventFilters>(DEFAULT_FILTERS);

  // Load filter state from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(FILTER_STATE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Merge with default filters to ensure all properties exist
        setFilterState({ ...DEFAULT_FILTERS, ...parsed });
      }
    } catch (error) {
      console.error('Failed to load filter state:', error);
    }
  }, []);

  // Save filter state to localStorage
  const saveFilterState = (state: EventFilters) => {
    try {
      localStorage.setItem(FILTER_STATE_KEY, JSON.stringify(state));
    } catch (error) {
      console.error('Failed to save filter state:', error);
    }
  };

  // Update filter state
  const updateFilterState = (updates: Partial<EventFilters>) => {
    const newState = { ...filterState, ...updates };
    setFilterState(newState);
    saveFilterState(newState);
  };

  // Reset filter state
  const resetFilterState = () => {
    setFilterState(DEFAULT_FILTERS);
    localStorage.removeItem(FILTER_STATE_KEY);
  };

  return {
    filterState,
    updateFilterState,
    resetFilterState,
  };
}
