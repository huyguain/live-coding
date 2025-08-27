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
