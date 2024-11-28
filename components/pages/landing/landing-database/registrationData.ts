export interface RegistrationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  passoutYear: number;
  section: 'Science' | 'Commerce' | 'Arts';
  membershipType: 'Normal' | 'Golden';
  address?: string;
  city?: string;
  state?: string;
  country: string;
  pinCode?: string;
  currentProfession?: string;
  interests?: string[];
}

export const defaultInterests = [
  'Networking',
  'Mentorship',
  'Alumni Events',
  'Fundraising',
  'Community Service',
  'Professional Development',
  'Cultural Activities'
];

export const validateRegistrationForm = (data: Partial<RegistrationFormData>): { 
  isValid: boolean; 
  errors: Partial<Record<keyof RegistrationFormData, string>> 
} => {
  const errors: Partial<Record<keyof RegistrationFormData, string>> = {};

  // Required field validations
  if (!data.firstName?.trim()) errors.firstName = 'First Name is required';
  if (!data.lastName?.trim()) errors.lastName = 'Last Name is required';
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!emailRegex.test(data.email)) {
    errors.email = 'Invalid email format';
  }

  // Phone number validation (basic)
  const phoneRegex = /^[0-9]{10}$/;
  if (!data.phoneNumber?.trim()) {
    errors.phoneNumber = 'Phone Number is required';
  } else if (!phoneRegex.test(data.phoneNumber.replace(/\s+/g, ''))) {
    errors.phoneNumber = 'Invalid phone number (10 digits required)';
  }

  // Passout year validation
  const currentYear = new Date().getFullYear();
  if (!data.passoutYear) {
    errors.passoutYear = 'Passout Year is required';
  } else if (data.passoutYear < 1950 || data.passoutYear > currentYear) {
    errors.passoutYear = `Passout Year must be between 1950 and ${currentYear}`;
  }

  // Section validation
  if (!data.section) errors.section = 'Section is required';

  // Membership type validation
  if (!data.membershipType) errors.membershipType = 'Membership Type is required';

  // Country validation
  if (!data.country?.trim()) errors.country = 'Country is required';

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
