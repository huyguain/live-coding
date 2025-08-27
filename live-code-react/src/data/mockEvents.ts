import { Event } from '@/types/event';

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Lễ hội âm nhạc Rock Việt Nam 2024',
    description: 'Lễ hội âm nhạc rock lớn nhất Việt Nam với sự tham gia của các ban nhạc rock hàng đầu trong nước và quốc tế.',
    date: '2024-12-15',
    time: '18:00',
    location: {
      city: 'TP. Hồ Chí Minh',
      venue: 'Sân vận động Thống Nhất',
      address: '3 Đoàn Văn Bơ, Quận 4, TP.HCM'
    },
    category: 'music',
    price: {
      min: 200000,
      max: 800000,
      currency: 'VND'
    },
    image: '/images/rock-festival.jpg',
    organizer: 'Công ty TNHH Âm nhạc Việt',
    tags: ['rock', 'festival', 'live-music'],
    capacity: 5000,
    registeredCount: 3200,
    isFeatured: true
  },
  {
    id: '2',
    title: 'Hội thảo Công nghệ AI & Machine Learning',
    description: 'Hội thảo chuyên sâu về trí tuệ nhân tạo và machine learning với các chuyên gia hàng đầu thế giới.',
    date: '2024-11-20',
    time: '09:00',
    location: {
      city: 'Hà Nội',
      venue: 'Trung tâm Hội nghị Quốc gia',
      address: 'Mỹ Đình, Nam Từ Liêm, Hà Nội'
    },
    category: 'technology',
    price: {
      min: 500000,
      max: 1500000,
      currency: 'VND'
    },
    image: '/images/ai-conference.jpg',
    organizer: 'Vietnam AI Association',
    tags: ['AI', 'machine-learning', 'technology'],
    capacity: 800,
    registeredCount: 650,
    isFeatured: true
  },
  {
    id: '3',
    title: 'Giải bóng đá sinh viên toàn quốc',
    description: 'Giải đấu bóng đá dành cho sinh viên các trường đại học, cao đẳng trên toàn quốc.',
    date: '2024-10-25',
    time: '14:00',
    location: {
      city: 'Đà Nẵng',
      venue: 'Sân vận động Chi Lăng',
      address: 'Nguyễn Hữu Thọ, Hải Châu, Đà Nẵng'
    },
    category: 'sports',
    price: {
      min: 0,
      max: 0,
      currency: 'VND'
    },
    image: '/images/football-tournament.jpg',
    organizer: 'Bộ Giáo dục và Đào tạo',
    tags: ['football', 'students', 'tournament'],
    capacity: 3000,
    registeredCount: 2800,
    isFeatured: false
  },
  {
    id: '4',
    title: 'Workshop Khởi nghiệp cho người trẻ',
    description: 'Chuỗi workshop chia sẻ kinh nghiệm khởi nghiệp từ các doanh nhân thành công.',
    date: '2024-11-10',
    time: '13:30',
    location: {
      city: 'TP. Hồ Chí Minh',
      venue: 'Co-working Space WeWork',
      address: 'Landmark 81, Vinhomes Central Park, Bình Thạnh'
    },
    category: 'business',
    price: {
      min: 150000,
      max: 300000,
      currency: 'VND'
    },
    image: '/images/startup-workshop.jpg',
    organizer: 'Startup Vietnam Foundation',
    tags: ['startup', 'entrepreneurship', 'workshop'],
    capacity: 200,
    registeredCount: 180,
    isFeatured: false
  },
  {
    id: '5',
    title: 'Triển lãm nghệ thuật đương đại',
    description: 'Triển lãm các tác phẩm nghệ thuật đương đại của các họa sĩ trẻ Việt Nam.',
    date: '2024-12-01',
    time: '10:00',
    location: {
      city: 'Hà Nội',
      venue: 'Bảo tàng Mỹ thuật Việt Nam',
      address: '66 Nguyễn Thái Học, Ba Đình, Hà Nội'
    },
    category: 'art',
    price: {
      min: 50000,
      max: 100000,
      currency: 'VND'
    },
    image: '/images/art-exhibition.jpg',
    organizer: 'Bảo tàng Mỹ thuật Việt Nam',
    tags: ['art', 'exhibition', 'contemporary'],
    capacity: 500,
    registeredCount: 320,
    isFeatured: false
  },
  {
    id: '6',
    title: 'Lễ hội ẩm thực đường phố Hà Nội',
    description: 'Khám phá hương vị ẩm thực đường phố đặc trưng của Hà Nội với hơn 100 gian hàng.',
    date: '2024-11-30',
    time: '16:00',
    location: {
      city: 'Hà Nội',
      venue: 'Phố đi bộ Hồ Gươm',
      address: 'Khu vực xung quanh Hồ Gươm, Hoàn Kiếm'
    },
    category: 'food',
    price: {
      min: 0,
      max: 200000,
      currency: 'VND'
    },
    image: '/images/food-festival.jpg',
    organizer: 'Sở Du lịch Hà Nội',
    tags: ['food', 'street-food', 'festival'],
    capacity: 10000,
    registeredCount: 8500,
    isFeatured: true
  },
  {
    id: '7',
    title: 'Hội thảo Y tế cộng đồng',
    description: 'Hội thảo về các vấn đề y tế cộng đồng và phòng chống dịch bệnh.',
    date: '2024-10-15',
    time: '08:30',
    location: {
      city: 'Cần Thơ',
      venue: 'Trung tâm Y tế Dự phòng',
      address: '123 Nguyễn Văn Linh, Ninh Kiều, Cần Thơ'
    },
    category: 'health',
    price: {
      min: 0,
      max: 0,
      currency: 'VND'
    },
    image: '/images/health-seminar.jpg',
    organizer: 'Sở Y tế Cần Thơ',
    tags: ['health', 'community', 'prevention'],
    capacity: 400,
    registeredCount: 380,
    isFeatured: false
  },
  {
    id: '8',
    title: 'Khóa học tiếng Anh giao tiếp',
    description: 'Khóa học tiếng Anh giao tiếp cơ bản đến nâng cao với giáo viên bản ngữ.',
    date: '2024-11-05',
    time: '19:00',
    location: {
      city: 'Đà Nẵng',
      venue: 'Trung tâm Anh ngữ Apollo',
      address: '456 Trần Phú, Hải Châu, Đà Nẵng'
    },
    category: 'education',
    price: {
      min: 2000000,
      max: 5000000,
      currency: 'VND'
    },
    image: '/images/english-course.jpg',
    organizer: 'Apollo English Center',
    tags: ['english', 'communication', 'course'],
    capacity: 25,
    registeredCount: 20,
    isFeatured: false
  },
  {
    id: '9',
    title: 'Show diễn xiếc quốc tế',
    description: 'Chương trình xiếc đặc sắc với sự tham gia của các nghệ sĩ xiếc quốc tế.',
    date: '2024-12-20',
    time: '20:00',
    location: {
      city: 'TP. Hồ Chí Minh',
      venue: 'Nhà hát Bến Thành',
      address: '6 Mạc Đĩnh Chi, Quận 1, TP.HCM'
    },
    category: 'entertainment',
    price: {
      min: 300000,
      max: 1200000,
      currency: 'VND'
    },
    image: '/images/circus-show.jpg',
    organizer: 'Công ty Xiếc Việt Nam',
    tags: ['circus', 'performance', 'entertainment'],
    capacity: 800,
    registeredCount: 720,
    isFeatured: true
  },
  {
    id: '10',
    title: 'Lễ hội hoa Đà Lạt 2024',
    description: 'Lễ hội hoa truyền thống của Đà Lạt với hàng nghìn loài hoa đẹp.',
    date: '2024-12-25',
    time: '09:00',
    location: {
      city: 'Đà Lạt',
      venue: 'Công viên Yersin',
      address: 'Trần Hưng Đạo, Phường 10, Đà Lạt'
    },
    category: 'other',
    price: {
      min: 100000,
      max: 200000,
      currency: 'VND'
    },
    image: '/images/flower-festival.jpg',
    organizer: 'UBND TP. Đà Lạt',
    tags: ['flowers', 'festival', 'nature'],
    capacity: 15000,
    registeredCount: 12000,
    isFeatured: true
  }
];

export const getMockEvents = (): Event[] => {
  return mockEvents;
};

export const getMockEventById = (id: string): Event | undefined => {
  return mockEvents.find(event => event.id === id);
};
