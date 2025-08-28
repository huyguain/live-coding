import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { useEvents } from './useEvents';
import { useInfiniteScroll } from './useInfiniteScroll';

export type PaginationMode = 'pagination' | 'infinite';

export const useEventData = (mode: PaginationMode = 'pagination') => {
  const paginationHook = useEvents();
  const infiniteScrollHook = useInfiniteScroll();
  
  const [currentMode, setCurrentMode] = useState<PaginationMode>(mode);

  useEffect(() => {
    setCurrentMode(mode);
  }, [mode]);

  // Return appropriate hook data based on mode
  if (currentMode === 'infinite') {
    return {
      ...infiniteScrollHook,
      mode: currentMode,
      setMode: setCurrentMode
    };
  }

  return {
    ...paginationHook,
    mode: currentMode,
    setMode: setCurrentMode
  };
};
