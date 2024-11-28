export interface FinanceEntry {
  date: string;
  description: string;
  amount: number;
  type: 'income' | 'expense' | 'donation';
}

export interface DonationSubgroup {
  year: string;
  donors: {
    name: string;
    amount: number;
    category: 'individual' | 'corporate';
  }[];
}

export const incomeDetails: FinanceEntry[] = [
  {
    date: '2023-01-15',
    description: 'Alumni Membership Fees',
    amount: 50000,
    type: 'income'
  },
  {
    date: '2023-02-20',
    description: 'Fundraising Event',
    amount: 75000,
    type: 'income'
  }
];

export const expenseDetails: FinanceEntry[] = [
  {
    date: '2023-03-10',
    description: 'Alumni Meet Venue Booking',
    amount: 30000,
    type: 'expense'
  },
  {
    date: '2023-04-05',
    description: 'Student Scholarship Fund',
    amount: 45000,
    type: 'expense'
  }
];

export const donationList: FinanceEntry[] = [
  {
    date: '2023-01-05',
    description: 'Donation from Mr. Rajesh Sharma',
    amount: 25000,
    type: 'donation'
  },
  {
    date: '2023-02-12',
    description: 'Corporate Sponsorship - Tech Solutions Inc.',
    amount: 100000,
    type: 'donation'
  }
];

export const donationSubgroups: DonationSubgroup[] = [
  {
    year: '2018-2021',
    donors: [
      {
        name: 'Rajesh Kumar',
        amount: 50000,
        category: 'individual'
      },
      {
        name: 'Tech Solutions Inc.',
        amount: 200000,
        category: 'corporate'
      },
      {
        name: 'Global Innovations',
        amount: 150000,
        category: 'corporate'
      }
    ]
  }
];
