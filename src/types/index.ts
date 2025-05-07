export interface Course {
  id: number;
  title: string;
  description: string;
  icon: string;
  duration: string;
  certificate: string;
  price: string;
  ageRange: string;
  startDays: number;
}

export interface Review {
  id: number;
  name: string;
  text: string;
  rating: number;
  course: string;
}