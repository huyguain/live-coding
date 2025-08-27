export interface Event {
  id: string;
  title: string;
  description: string;
  date: string; // ISO date string
  time: string; // HH:mm format
  location: {
    city: string;
    venue: string;
    address: string;
  };
  category: EventCategory;
  price: {
    min: number;
    max: number;
    currency: string;
  };
  image: string;
  organizer: string;
  tags: string[];
  capacity: number;
  registeredCount: number;
  isFeatured: boolean;
}

export type EventCategory = 
  | 'music'
  | 'sports'
  | 'technology'
  | 'business'
  | 'education'
  | 'entertainment'
  | 'food'
  | 'art'
  | 'health'
  | 'other';

export interface EventFilters {
  search: string;
  category: EventCategory | 'all';
  city: string;
  priceRange: {
    min: number;
    max: number;
  };
  dateRange: {
    from: string;
    to: string;
  };
}

export interface EventSort {
  field: 'date' | 'price' | 'title';
  direction: 'asc' | 'desc';
}

export interface PaginationState {
  currentPage: number;
  pageSize: number;
  totalItems: number;
}

export interface EventListState {
  events: Event[];
  filteredEvents: Event[];
  filters: EventFilters;
  sort: EventSort;
  pagination: PaginationState;
  loading: boolean;
  error: string | null;
}
