export interface MembershipEntry {
  id: string;
  name: string;
  batch: string;
  email: string;
  phone: string;
  currentDesignation: string;
  membershipType: 'golden' | 'normal';
  joinedDate: string;
}

export const goldenMembersList: MembershipEntry[] = [
  {
    id: 'GM001',
    name: 'Dr. Rajesh Kumar',
    batch: '1970-1975',
    email: 'rajesh.kumar@example.com',
    phone: '+91 9876543210',
    currentDesignation: 'Chief Executive Officer',
    membershipType: 'golden',
    joinedDate: '2010-05-15'
  },
  {
    id: 'GM002',
    name: 'Mrs. Sunita Sharma',
    batch: '1965-1970',
    email: 'sunita.sharma@example.com',
    phone: '+91 9988776655',
    currentDesignation: 'Senior Government Advisor',
    membershipType: 'golden',
    joinedDate: '2012-03-20'
  },
  {
    id: 'GM003',
    name: 'Mr. Anil Patel',
    batch: '1975-1980',
    email: 'anil.patel@example.com',
    phone: '+91 9123456789',
    currentDesignation: 'Distinguished Professor',
    membershipType: 'golden',
    joinedDate: '2015-11-10'
  }
];

export const normalMembersList: MembershipEntry[] = [
  {
    id: 'NM001',
    name: 'Rahul Gupta',
    batch: '1990-1995',
    email: 'rahul.gupta@example.com',
    phone: '+91 8765432109',
    currentDesignation: 'Software Engineer',
    membershipType: 'normal',
    joinedDate: '2020-01-15'
  },
  {
    id: 'NM002',
    name: 'Priya Mehta',
    batch: '1985-1990',
    email: 'priya.mehta@example.com',
    phone: '+91 7654321098',
    currentDesignation: 'Marketing Manager',
    membershipType: 'normal',
    joinedDate: '2018-07-22'
  },
  {
    id: 'NM003',
    name: 'Vikram Singh',
    batch: '1995-2000',
    email: 'vikram.singh@example.com',
    phone: '+91 6543210987',
    currentDesignation: 'Entrepreneur',
    membershipType: 'normal',
    joinedDate: '2022-03-05'
  }
];
