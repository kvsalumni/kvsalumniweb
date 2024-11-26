export interface BatchCoordinator {
  batch: string;
  name: string;
  contact: string;
  image: string;
  email?: string;
  phone?: string;
}

export const batchCoordinators: BatchCoordinator[] = [
  {
    batch: "1965-1970",
    name: "Mr. Rajesh Kumar",
    contact: "Delhi, India",
    image: "/assets/images/batch-coordinators/1965-1970.jpg",
    email: "rajesh.kumar@example.com",
    phone: "+91 9876543210"
  },
  {
    batch: "1971-1975",
    name: "Dr. Anil Sharma",
    contact: "Mumbai, India", 
    image: "/assets/images/batch-coordinators/1971-1975.jpg",
    email: "anil.sharma@example.com",
    phone: "+91 9988776655"
  },
  {
    batch: "1976-1980",
    name: "Mrs. Sunita Patel",
    contact: "Bangalore, India",
    image: "/assets/images/batch-coordinators/1976-1980.jpg",
    email: "sunita.patel@example.com",
    phone: "+91 9123456789"
  }
];
