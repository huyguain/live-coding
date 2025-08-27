# Live Coding Test - Senior React Frontend Developer

## Mục tiêu
Xây dựng UI danh sách sự kiện với các tính năng:
- Search (debounced)
- Filter (city, category, price range)
- Sort (date asc/desc)
- Pagination (client) hoặc infinite scroll

## Yêu cầu kỹ thuật
- Next.js với App Router
- Không dùng UI library nặng
- Zustand/Redux Toolkit cho state management
- Axios cho HTTP requests
- React Query (tùy chọn)

## Setup Project

### Bước 1: Tạo Next.js project với App Router

**Yêu cầu**: Node.js 18+ (khuyến nghị 20+)

```bash
# Kiểm tra version Node.js
node -v

# Nếu cần cài đặt/cập nhật Node.js
# nvm install 20 && nvm use 20
```

**Tạo project trong thư mục hiện tại:**
```bash
npx create-next-app@latest . --ts --eslint --tailwind --app --src-dir --import-alias "@/*" --use-npm
```

**Hoặc tạo project với tên riêng:**
```bash
npx create-next-app@latest next-events --ts --eslint --tailwind --app --src-dir --import-alias "@/*" --use-npm
cd next-events
```

**Giải thích các flag:**
- `--ts`: TypeScript
- `--tailwind`: Cấu hình Tailwind CSS
- `--app`: App Router (thay vì Pages Router)
- `--src-dir`: Sử dụng thư mục `src/`
- `--import-alias "@/*"`: Alias import cho đường dẫn
- `--use-npm`: Sử dụng npm (có thể đổi sang `--use-pnpm` hoặc `--use-yarn`)

### Bước 2: Chạy dự án
```bash
npm run dev
```

Mở `http://localhost:3000` để kiểm tra

### Bước 3: Kiểm tra App Router
Đảm bảo tồn tại các file:
- `src/app/layout.tsx`
- `src/app/page.tsx`

**Tạo thêm route (nếu cần):**
```bash
mkdir -p src/app/events
printf "export default function Page(){return <div>Events</div>}\n" > src/app/events/page.tsx
```

## Cấu trúc dự án
```
src/
├── app/                    # App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── events/            # Events route
│       └── page.tsx
├── components/             # React components
├── hooks/                  # Custom hooks
├── store/                  # Zustand store
├── types/                  # TypeScript types
└── utils/                  # Utility functions
```

## Tiếp theo
- Cài đặt dependencies (Redux Toolkit, Axios, React Query)
- Scaffold các thư mục và components cơ bản
- Implement UI và logic chính

## Phần 1: Cài đặt Dependencies (40-50 phút)

### Bước 1: Cài đặt Redux Toolkit và React Redux
```bash
npm install @reduxjs/toolkit react-redux
```

### Bước 2: Cài đặt Axios
```bash
npm install axios
```

### Bước 3: Cài đặt React Query
```bash
npm install @tanstack/react-query
```

### Bước 4: Cài đặt dependencies phụ trợ
```bash
npm install date-fns clsx
```

**Giải thích các packages:**
- `@reduxjs/toolkit react-redux`: State management cho filters, search, pagination
- `axios`: HTTP client để fetch data từ API
- `@tanstack/react-query`: Data fetching, caching và state synchronization
- `date-fns`: Xử lý date cho sorting và formatting
- `clsx`: Utility để combine CSS classes một cách linh hoạt

### Bước 5: Kiểm tra cài đặt
```bash
npm list @reduxjs/toolkit react-redux axios @tanstack/react-query
```

**Kết quả mong đợi:** Tất cả packages được cài đặt thành công với version mới nhất

### Bước 7: Tạo Types và Mock Data
Đã tạo cấu trúc thư mục và files cần thiết:

```bash
# Tạo thư mục
mkdir -p src/types src/utils src/data

# Kiểm tra cấu trúc
tree src/ -I node_modules
```

**Files đã tạo:**
- `src/types/event.ts` - TypeScript interfaces cho Event, filters, sorting, pagination
- `src/types/index.ts` - Export tất cả types
- `src/utils/constants.ts` - Constants cho cities, categories, price ranges, sort options
- `src/data/mockEvents.ts` - Mock data với 10 events mẫu (Việt Nam)

**Types chính:**
- `Event` - Interface chính cho sự kiện
- `EventCategory` - Các loại sự kiện (music, sports, technology, etc.)
- `EventFilters` - Filters cho search, category, city, price, date
- `EventSort` - Sorting theo field và direction
- `PaginationState` - Trạng thái pagination
- `EventListState` - State tổng hợp cho Redux store

### Bước 8: Setup Redux Store
Đã tạo Redux store với Redux Toolkit:

```bash
# Tạo thư mục store và hooks
mkdir -p src/store src/hooks
```

**Files đã tạo:**
- `src/store/eventSlice.ts` - Redux slice với actions cho filters, sorting, pagination
- `src/store/index.ts` - Root store configuration
- `src/store/hooks.ts` - Typed hooks cho Redux
- `src/components/Providers.tsx` - Redux Provider + React Query Provider
- `src/hooks/useEvents.ts` - Custom hook để sử dụng event state và actions
- `src/hooks/useDebounce.ts` - Hook debounce cho search

**Actions chính:**
- `setSearchFilter` - Cập nhật search term
- `setCategoryFilter` - Lọc theo category
- `setCityFilter` - Lọc theo thành phố
- `setPriceRangeFilter` - Lọc theo khoảng giá
- `setDateRangeFilter` - Lọc theo khoảng ngày
- `setSort` - Sắp xếp theo field và direction
- `setCurrentPage/setPageSize` - Pagination
- `resetFilters` - Reset tất cả filters
- `applyFilters` - Áp dụng filters và cập nhật filtered events

**Features:**
- Auto-apply filters khi filters/sort thay đổi
- Pagination tự động tính toán
- Search với debounce support
- Type-safe với TypeScript
- Tích hợp React Query cho data fetching

### Bước 9: Implement UI Components
Đã tạo các UI components chính:

```bash
# Tạo cấu trúc thư mục components
mkdir -p src/components/EventList src/components/SearchBar src/components/FilterPanel src/components/SortControl src/components/Pagination
```

**Components đã tạo:**
- `src/components/SearchBar/SearchBar.tsx` - Search bar với debounce 300ms
- `src/components/FilterPanel/FilterPanel.tsx` - Panel filters (category, city, price range)
- `src/components/SortControl/SortControl.tsx` - Dropdown sorting (date, price, title)
- `src/components/EventList/EventCard.tsx` - Card hiển thị thông tin sự kiện
- `src/components/EventList/EventList.tsx` - List events với loading/empty states
- `src/app/page.tsx` - Main page layout với tất cả components

**Features UI:**
- **SearchBar:** Debounced search với clear button và search icon
- **FilterPanel:** Category, city, price range filters với active filters display
- **SortControl:** Dropdown sorting với 6 options (date asc/desc, price asc/desc, title asc/desc)
- **EventCard:** Card đẹp với image placeholder, badges, price formatting, date formatting
- **EventList:** Grid responsive, loading spinner, error state, empty state
- **Responsive:** Mobile-first design với Tailwind CSS

**Layout:**
- Header với title và description
- Search bar và sort controls
- Sidebar filters + main content grid
- Responsive design (mobile, tablet, desktop)

### Bước 10: Tích hợp Redux Store
Đã tích hợp Redux store vào tất cả components:

**Components đã cập nhật:**
- `src/components/SearchBar/SearchBar.tsx` - Sync local state với Redux state
- `src/components/FilterPanel/FilterPanel.tsx` - Hiển thị active filters
- `src/components/EventList/EventList.tsx` - Hiển thị pagination info và thêm Pagination component
- `src/components/Pagination/Pagination.tsx` - Pagination component với Redux integration
- `src/components/ReduxDevTools.tsx` - DevTools để debug Redux state

**Features đã tích hợp:**
- **State Synchronization:** SearchBar sync local state với Redux
- **Active Filters Display:** FilterPanel hiển thị filters đang active
- **Pagination:** Full pagination với page numbers, prev/next buttons
- **Redux DevTools:** Debug panel để xem Redux state (development only)
- **Real-time Updates:** Tất cả components update real-time khi Redux state thay đổi

**Redux Flow:**
1. User tương tác với UI (search, filter, sort, pagination)
2. Components dispatch actions đến Redux store
3. Redux slice update state và apply filters
4. Components re-render với data mới
5. Pagination tự động tính toán và update

### Bước 11: Implement Search với Debounce
Đã implement search hoàn chỉnh với debounce và các tính năng nâng cao:

**Components đã tạo/cập nhật:**
- `src/hooks/useDebounce.ts` - Hook debounce với loading state
- `src/hooks/useSearchHistory.ts` - Hook quản lý search history với localStorage
- `src/components/SearchBar/SearchBar.tsx` - Search bar với debounce, keyboard shortcuts
- `src/components/SearchBar/SearchResults.tsx` - Search suggestions và results
- `src/components/SearchBar/index.ts` - Export components

**Features Search:**
- **Debounce 300ms** - Tránh spam API calls
- **Loading Indicator** - Spinner khi đang debouncing
- **Keyboard Shortcuts** - Ctrl/Cmd+K focus, Esc clear
- **Search Suggestions** - Hiển thị events và categories matching
- **Search History** - Lưu 10 search terms gần nhất
- **Click Outside** - Tự động đóng search results
- **Real-time Results** - Update Redux state và filter events

**Search Flow:**
1. User gõ vào search input
2. Loading spinner hiển thị (debouncing)
3. Sau 300ms, search term được gửi đến Redux
4. Redux filter events và update state
5. Components re-render với filtered results
6. Search term được lưu vào history
