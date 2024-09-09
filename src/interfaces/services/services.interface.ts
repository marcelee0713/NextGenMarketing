import { ServiceClassType } from "@/types/services/services.types";

export interface Service {
  serviceId: string;
  partnerId: string;
  overview: string;
  shortDescription: string;
  about: string;
  banner: string | null;
  rating: number;
  tags: string[];
  likes: string[]; // An array of userId, only business owners can save it on favorites.
  createdAt: Date;
}

export interface ServiceImages {
  serviceId: string;
  images: string[]; // Maximum of 5?
}

export interface ServiceFAQs {
  serviceId: string;
  questions: string;
  answer: string;
}

export interface ServiceQuestions {
  serviceId: string;
  userId: string; // Yung userId ng nag tanong
  question: string;
  answer: string | null;
  createdAt: Date;
}

export interface ServiceReviews {
  serviceReviewsId: string;
  serviceId: string;
  reviews: Reviews[];
}

export interface ServicePackages {
  serviceId: string;
  packages: {
    basic: Package; // Default class type should be BASIC
    standard: Package; // Default class type should be STANDARD
    premium: Package; // Default class type should be PREMIUM
  };
}

export interface Reviews {
  serviceReviewsId: string;
  userId: string;
  rating: number;
  comment: number;
  createdAt: Date;
  likes: string[]; // An array of userId, only business owners can like it btw.
}

export interface Package {
  class: ServiceClassType;
  servicesPackagesId: string;
  edge: string;
  delivery: number;
  includes: string[];
}
