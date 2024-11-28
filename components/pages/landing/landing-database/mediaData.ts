export interface MediaItem {
  id: string;
  title: string;
  description?: string;
  mediaUrl: string;
  type: 'photo' | 'video';
  year: number;
  category: 'alumni-meet' | 'memories' | 'event';
}

export const mediaGallery: MediaItem[] = [
  {
    id: 'AM001',
    title: 'Annual Alumni Meet 2022',
    description: 'Reunion of KVS alumni from across the country',
    mediaUrl: '/assets/images/media/IMG-MED-001.jpeg',
    type: 'photo',
    year: 2022,
    category: 'alumni-meet'
  },
  {
    id: 'AV001',
    title: 'Golden Jubilee Celebration',
    description: 'Commemorating 50 years of school legacy',
    mediaUrl: '/assets/images/media/IMG-MED-002.jpeg',
    type: 'video',
    year: 2020,
    category: 'event'
  },
  {
    id: 'MEM001',
    title: 'Nostalgic School Days',
    description: 'Memories from our school years',
    mediaUrl: '/assets/images/media/IMG-MED-003.jpeg',
    type: 'photo',
    year: 2018,
    category: 'memories'
  },
  {
    id: 'AM002',
    title: 'Alumni Sports Meet',
    description: 'Rekindling the spirit of sports',
    mediaUrl: '/assets/images/media/IMG-MED-004.jpeg',
    type: 'photo',
    year: 2021,
    category: 'alumni-meet'
  },
  {
    id: 'AV002',
    title: 'Farewell Ceremony',
    description: 'Bidding goodbye to our beloved teachers',
    mediaUrl: '/assets/images/media/IMG-MED-005.jpeg',
    type: 'video',
    year: 2019,
    category: 'event'
  },
  {
    id: 'MEM002',
    title: 'Classroom Memories',
    description: 'Snapshots from our classrooms',
    mediaUrl: '/assets/images/media/IMG-MED-006.jpeg',
    type: 'photo',
    year: 2017,
    category: 'memories'
  },
  {
    id: 'AM003',
    title: 'Alumni Cultural Fest',
    description: 'Celebrating cultural diversity',
    mediaUrl: '/assets/images/media/IMG-MED-007.jpeg',
    type: 'photo',
    year: 2022,
    category: 'alumni-meet'
  },
  {
    id: 'AV003',
    title: 'School Anniversary Video',
    description: 'Highlights of our school journey',
    mediaUrl: '/assets/images/media/IMG-MED-008.jpeg',
    type: 'video',
    year: 2021,
    category: 'event'
  },
  {
    id: 'MEM003',
    title: 'Friendship Moments',
    description: 'Cherished moments with school friends',
    mediaUrl: '/assets/images/media/IMG-MED-009.jpeg',
    type: 'photo',
    year: 2020,
    category: 'memories'
  },
  {
    id: 'AM004',
    title: 'Alumni Charity Event',
    description: 'Making a difference together',
    mediaUrl: '/assets/images/media/IMG-MED-010.jpeg',
    type: 'photo',
    year: 2023,
    category: 'alumni-meet'
  }
];
