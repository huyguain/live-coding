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
  },
  {
    id: '11',
    title: 'Workshop Nhiếp ảnh cơ bản',
    description: 'Khóa học nhiếp ảnh cơ bản dành cho người mới bắt đầu, học cách chụp ảnh đẹp.',
    date: '2024-11-18',
    time: '14:00',
    location: {
      city: 'TP. Hồ Chí Minh',
      venue: 'Studio Ảnh Nghệ Thuật',
      address: '123 Nguyễn Huệ, Quận 1, TP.HCM'
    },
    category: 'art',
    price: {
      min: 800000,
      max: 1200000,
      currency: 'VND'
    },
    image: '/images/photography-workshop.jpg',
    organizer: 'Studio Ảnh Nghệ Thuật',
    tags: ['photography', 'workshop', 'art'],
    capacity: 15,
    registeredCount: 12,
    isFeatured: false
  },
  {
    id: '12',
    title: 'Giải chạy bộ Marathon Hà Nội',
    description: 'Giải chạy bộ marathon quốc tế với các cự ly 5km, 10km, 21km và 42km.',
    date: '2024-10-28',
    time: '06:00',
    location: {
      city: 'Hà Nội',
      venue: 'Quảng trường Ba Đình',
      address: 'Ba Đình, Hà Nội'
    },
    category: 'sports',
    price: {
      min: 150000,
      max: 500000,
      currency: 'VND'
    },
    image: '/images/marathon-hanoi.jpg',
    organizer: 'Sở Văn hóa và Thể thao Hà Nội',
    tags: ['marathon', 'running', 'sports'],
    capacity: 10000,
    registeredCount: 8500,
    isFeatured: true
  },
  {
    id: '13',
    title: 'Hội thảo Blockchain & Cryptocurrency',
    description: 'Hội thảo về công nghệ blockchain và tiền điện tử với các chuyên gia hàng đầu.',
    date: '2024-11-25',
    time: '09:00',
    location: {
      city: 'TP. Hồ Chí Minh',
      venue: 'Gem Center',
      address: '8 Nguyễn Bỉnh Khiêm, Quận 1, TP.HCM'
    },
    category: 'technology',
    price: {
      min: 300000,
      max: 800000,
      currency: 'VND'
    },
    image: '/images/blockchain-conference.jpg',
    organizer: 'Vietnam Blockchain Association',
    tags: ['blockchain', 'cryptocurrency', 'technology'],
    capacity: 300,
    registeredCount: 280,
    isFeatured: false
  },
  {
    id: '14',
    title: 'Lớp học nấu ăn truyền thống',
    description: 'Học cách nấu các món ăn truyền thống Việt Nam từ đầu bếp chuyên nghiệp.',
    date: '2024-11-12',
    time: '16:00',
    location: {
      city: 'Hà Nội',
      venue: 'Trường dạy nấu ăn Hà Nội',
      address: '45 Trần Phú, Ba Đình, Hà Nội'
    },
    category: 'food',
    price: {
      min: 500000,
      max: 800000,
      currency: 'VND'
    },
    image: '/images/cooking-class.jpg',
    organizer: 'Trường dạy nấu ăn Hà Nội',
    tags: ['cooking', 'vietnamese-food', 'traditional'],
    capacity: 20,
    registeredCount: 18,
    isFeatured: false
  },
  {
    id: '15',
    title: 'Yoga và Thiền định',
    description: 'Khóa học yoga và thiền định cơ bản, giúp thư giãn tinh thần và cải thiện sức khỏe.',
    date: '2024-11-08',
    time: '18:00',
    location: {
      city: 'Đà Nẵng',
      venue: 'Trung tâm Yoga Đà Nẵng',
      address: '78 Lê Duẩn, Hải Châu, Đà Nẵng'
    },
    category: 'health',
    price: {
      min: 200000,
      max: 400000,
      currency: 'VND'
    },
    image: '/images/yoga-meditation.jpg',
    organizer: 'Trung tâm Yoga Đà Nẵng',
    tags: ['yoga', 'meditation', 'health'],
    capacity: 30,
    registeredCount: 25,
    isFeatured: false
  },
  {
    id: '16',
    title: 'Lễ hội âm nhạc Jazz Quốc tế',
    description: 'Lễ hội jazz quốc tế với sự tham gia của các nghệ sĩ jazz nổi tiếng thế giới.',
    date: '2024-12-10',
    time: '19:00',
    location: {
      city: 'TP. Hồ Chí Minh',
      venue: 'Nhà hát Lớn TP.HCM',
      address: '7 Công Trường Lam Sơn, Quận 1, TP.HCM'
    },
    category: 'music',
    price: {
      min: 400000,
      max: 1000000,
      currency: 'VND'
    },
    image: '/images/jazz-festival.jpg',
    organizer: 'Công ty TNHH Âm nhạc Việt',
    tags: ['jazz', 'festival', 'international'],
    capacity: 1200,
    registeredCount: 1100,
    isFeatured: true
  },
  {
    id: '17',
    title: 'Hội thảo Marketing Digital',
    description: 'Hội thảo về marketing digital và chiến lược kinh doanh online trong thời đại số.',
    date: '2024-11-15',
    time: '13:00',
    location: {
      city: 'Hà Nội',
      venue: 'Trung tâm Hội nghị Melia',
      address: '44B Lý Thường Kiệt, Hoàn Kiếm, Hà Nội'
    },
    category: 'business',
    price: {
      min: 200000,
      max: 600000,
      currency: 'VND'
    },
    image: '/images/digital-marketing.jpg',
    organizer: 'Vietnam Marketing Association',
    tags: ['marketing', 'digital', 'business'],
    capacity: 500,
    registeredCount: 450,
    isFeatured: false
  },
  {
    id: '18',
    title: 'Khóa học tiếng Nhật cơ bản',
    description: 'Khóa học tiếng Nhật cơ bản dành cho người mới bắt đầu, học từ bảng chữ cái.',
    date: '2024-11-03',
    time: '19:30',
    location: {
      city: 'TP. Hồ Chí Minh',
      venue: 'Trung tâm Nhật ngữ Sakura',
      address: '123 Lê Lợi, Quận 1, TP.HCM'
    },
    category: 'education',
    price: {
      min: 3000000,
      max: 6000000,
      currency: 'VND'
    },
    image: '/images/japanese-course.jpg',
    organizer: 'Trung tâm Nhật ngữ Sakura',
    tags: ['japanese', 'language', 'course'],
    capacity: 20,
    registeredCount: 18,
    isFeatured: false
  },
  {
    id: '19',
    title: 'Show ảo thuật gia đình',
    description: 'Chương trình ảo thuật đặc sắc dành cho cả gia đình với nhiều tiết mục hấp dẫn.',
    date: '2024-12-22',
    time: '15:00',
    location: {
      city: 'Đà Nẵng',
      venue: 'Nhà hát Trưng Vương',
      address: '123 Trần Phú, Hải Châu, Đà Nẵng'
    },
    category: 'entertainment',
    price: {
      min: 150000,
      max: 400000,
      currency: 'VND'
    },
    image: '/images/magic-show.jpg',
    organizer: 'Công ty Giải trí Đà Nẵng',
    tags: ['magic', 'family', 'entertainment'],
    capacity: 600,
    registeredCount: 550,
    isFeatured: false
  },
  {
    id: '20',
    title: 'Lễ hội văn hóa dân tộc',
    description: 'Lễ hội văn hóa các dân tộc Việt Nam với các tiết mục biểu diễn đặc sắc.',
    date: '2024-12-30',
    time: '17:00',
    location: {
      city: 'Hà Nội',
      venue: 'Bảo tàng Dân tộc học',
      address: 'Nguyễn Văn Huyên, Cầu Giấy, Hà Nội'
    },
    category: 'other',
    price: {
      min: 0,
      max: 0,
      currency: 'VND'
    },
    image: '/images/cultural-festival.jpg',
    organizer: 'Bảo tàng Dân tộc học',
    tags: ['culture', 'ethnic', 'festival'],
    capacity: 2000,
    registeredCount: 1800,
    isFeatured: true
  },
  {
    id: '21',
    title: 'Workshop Thiết kế đồ họa',
    description: 'Học cách thiết kế đồ họa cơ bản với các công cụ hiện đại như Photoshop, Illustrator.',
    date: '2024-11-20',
    time: '14:00',
    location: {
      city: 'TP. Hồ Chí Minh',
      venue: 'Trung tâm Đào tạo CNTT',
      address: '456 Võ Văn Tần, Quận 3, TP.HCM'
    },
    category: 'technology',
    price: {
      min: 1000000,
      max: 2000000,
      currency: 'VND'
    },
    image: '/images/graphic-design.jpg',
    organizer: 'Trung tâm Đào tạo CNTT',
    tags: ['graphic-design', 'workshop', 'technology'],
    capacity: 25,
    registeredCount: 22,
    isFeatured: false
  },
  {
    id: '22',
    title: 'Giải bóng rổ sinh viên',
    description: 'Giải đấu bóng rổ dành cho sinh viên các trường đại học tại TP.HCM.',
    date: '2024-10-30',
    time: '16:00',
    location: {
      city: 'TP. Hồ Chí Minh',
      venue: 'Nhà thi đấu Phú Thọ',
      address: '219 Lý Thường Kiệt, Quận 10, TP.HCM'
    },
    category: 'sports',
    price: {
      min: 0,
      max: 0,
      currency: 'VND'
    },
    image: '/images/basketball-tournament.jpg',
    organizer: 'Sở Văn hóa và Thể thao TP.HCM',
    tags: ['basketball', 'students', 'tournament'],
    capacity: 1500,
    registeredCount: 1200,
    isFeatured: false
  },
  {
    id: '23',
    title: 'Hội thảo Du lịch bền vững',
    description: 'Hội thảo về phát triển du lịch bền vững và bảo vệ môi trường.',
    date: '2024-11-28',
    time: '09:00',
    location: {
      city: 'Nha Trang',
      venue: 'Khách sạn Sheraton',
      address: '26-28 Trần Phú, Lộc Thọ, Nha Trang'
    },
    category: 'business',
    price: {
      min: 300000,
      max: 800000,
      currency: 'VND'
    },
    image: '/images/sustainable-tourism.jpg',
    organizer: 'Sở Du lịch Khánh Hòa',
    tags: ['tourism', 'sustainable', 'environment'],
    capacity: 400,
    registeredCount: 350,
    isFeatured: false
  },
  {
    id: '24',
    title: 'Lớp học vẽ tranh sơn dầu',
    description: 'Học cách vẽ tranh sơn dầu từ cơ bản đến nâng cao với họa sĩ chuyên nghiệp.',
    date: '2024-11-14',
    time: '15:00',
    location: {
      city: 'Hà Nội',
      venue: 'Xưởng vẽ Nghệ thuật',
      address: '67 Nguyễn Thái Học, Ba Đình, Hà Nội'
    },
    category: 'art',
    price: {
      min: 600000,
      max: 1000000,
      currency: 'VND'
    },
    image: '/images/oil-painting.jpg',
    organizer: 'Xưởng vẽ Nghệ thuật',
    tags: ['painting', 'oil-paint', 'art'],
    capacity: 12,
    registeredCount: 10,
    isFeatured: false
  },
  {
    id: '25',
    title: 'Lễ hội ẩm thực miền Tây',
    description: 'Khám phá hương vị ẩm thực đặc trưng của miền Tây Nam Bộ với các món ăn truyền thống.',
    date: '2024-12-05',
    time: '17:00',
    location: {
      city: 'Cần Thơ',
      venue: 'Công viên Lưu Hữu Phước',
      address: 'Đường 30/4, Ninh Kiều, Cần Thơ'
    },
    category: 'food',
    price: {
      min: 0,
      max: 150000,
      currency: 'VND'
    },
    image: '/images/mekong-food.jpg',
    organizer: 'Sở Du lịch Cần Thơ',
    tags: ['mekong', 'food', 'traditional'],
    capacity: 8000,
    registeredCount: 7200,
    isFeatured: true
  }
];

export const getMockEvents = (): Event[] => {
  return mockEvents;
};

export const getMockEventById = (id: string): Event | undefined => {
  return mockEvents.find(event => event.id === id);
};

// Generate additional events for testing pagination
export const generateAdditionalEvents = (count: number): Event[] => {
  const additionalEvents: Event[] = [];
  
  for (let i = 26; i <= 25 + count; i++) {
    const categories: Event['category'][] = ['music', 'sports', 'technology', 'business', 'education', 'entertainment', 'food', 'art', 'health', 'other'];
    const cities = ['TP. Hồ Chí Minh', 'Hà Nội', 'Đà Nẵng', 'Cần Thơ', 'Nha Trang', 'Huế', 'Vũng Tàu', 'Đà Lạt', 'Phú Quốc', 'Hạ Long'];
    
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    const randomDate = new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1);
    const randomPrice = Math.floor(Math.random() * 2000000) + 50000;
    
    additionalEvents.push({
      id: i.toString(),
      title: `Sự kiện ${i} - ${randomCategory.charAt(0).toUpperCase() + randomCategory.slice(1)}`,
      description: `Mô tả chi tiết cho sự kiện ${i} thuộc danh mục ${randomCategory}. Đây là một sự kiện thú vị với nhiều hoạt động hấp dẫn.`,
      date: randomDate.toISOString().split('T')[0],
      time: `${Math.floor(Math.random() * 12) + 8}:${Math.floor(Math.random() * 4) * 15}`,
      location: {
        city: randomCity,
        venue: `Địa điểm ${i}`,
        address: `Địa chỉ ${i}, ${randomCity}`
      },
      category: randomCategory,
      price: {
        min: randomPrice,
        max: randomPrice + Math.floor(Math.random() * 500000),
        currency: 'VND'
      },
      image: `/images/event-${i}.jpg`,
      organizer: `Tổ chức ${i}`,
      tags: [randomCategory, 'event', `event-${i}`],
      capacity: Math.floor(Math.random() * 5000) + 100,
      registeredCount: Math.floor(Math.random() * 4000) + 50,
      isFeatured: Math.random() > 0.7
    });
  }
  
  return additionalEvents;
};

// Get all events including generated ones
export const getAllMockEvents = (): Event[] => {
  const baseEvents = [...mockEvents];
  const additionalEvents = generateAdditionalEvents(75); // Total 100 events
  return [...baseEvents, ...additionalEvents];
};
