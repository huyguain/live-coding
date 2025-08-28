import { EventCategory } from '@/types/event';

export const CITIES = [
  'Hà Nội',
  'TP. Hồ Chí Minh',
  'Đà Nẵng',
  'Hải Phòng',
  'Cần Thơ',
  'Nha Trang',
  'Huế',
  'Vũng Tàu',
  'Đà Lạt',
  'Phú Quốc'
] as const;

export const CATEGORIES: { value: EventCategory; label: string; icon: string }[] = [
  { value: 'music', label: 'Âm nhạc', icon: '🎵' },
  { value: 'sports', label: 'Thể thao', icon: '⚽' },
  { value: 'technology', label: 'Công nghệ', icon: '💻' },
  { value: 'business', label: 'Kinh doanh', icon: '💼' },
  { value: 'education', label: 'Giáo dục', icon: '📚' },
  { value: 'entertainment', label: 'Giải trí', icon: '🎭' },
  { value: 'food', label: 'Ẩm thực', icon: '🍕' },
  { value: 'art', label: 'Nghệ thuật', icon: '🎨' },
  { value: 'health', label: 'Sức khỏe', icon: '🏥' },
  { value: 'other', label: 'Khác', icon: '🎪' }
];

export const PRICE_RANGES = [
  { label: 'Miễn phí', min: 0, max: 0 },
  { label: 'Dưới 100k', min: 0, max: 100000 },
  { label: '100k - 500k', min: 100000, max: 500000 },
  { label: '500k - 1M', min: 500000, max: 1000000 },
  { label: 'Trên 1M', min: 1000000, max: 999999999 }
];

export const SORT_OPTIONS = [
  { value: 'date-asc', label: 'Ngày tăng dần', field: 'date', direction: 'asc' },
  { value: 'date-desc', label: 'Ngày giảm dần', field: 'date', direction: 'desc' },
  { value: 'price-asc', label: 'Giá tăng dần', field: 'price', direction: 'asc' },
  { value: 'price-desc', label: 'Giá giảm dần', field: 'price', direction: 'desc' },
  { value: 'title-asc', label: 'Tên A-Z', field: 'title', direction: 'asc' },
  { value: 'title-desc', label: 'Tên Z-A', field: 'title', direction: 'desc' }
];

export const PAGE_SIZES = [10, 20, 50, 100, 200];

export const DEFAULT_FILTERS = {
  search: '',
  category: 'all' as const,
  city: '',
  priceRange: { min: 0, max: 999999999 },
  dateRange: { from: '', to: '' }
};

export const DEFAULT_SORT = {
  field: 'date' as const,
  direction: 'asc' as const
};

export const DEFAULT_PAGINATION = {
  currentPage: 1,
  pageSize: 20,
  totalItems: 0
};
