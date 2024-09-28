import { ProjectStatus } from "@/types/project.types";
import { ServiceClassType } from "@/types/services/services.types";

export interface Service {
  serviceId: string;
  overview: string;
  shortDescription: string;
  about: string;
  banner: string | null;
  rating: number;
  tags: string[];
  likes: string[];
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

export interface ServicePackages {
  serviceId: string;
  packages: {
    basic: Package; // Default class type should be BASIC
    standard: Package; // Default class type should be STANDARD
    premium: Package; // Default class type should be PREMIUM
  };
}

export interface ServiceAddOns {
  serviceId: string;
  header: string;
  description: string;
  durationTime: number; // Days for example if the value is 1 it'll be 1 day
  price: number; // Let's make it PHP instead
  additionalSubHeader: string | null;
}

export interface Reviews {
  serviceReviewsId: string;
  projectStatus: ProjectStatus;
  serviceId: string;
  reviewerId: string; // It could be a userId or partnerId
  rating: number;
  comment: string;
  createdAt: Date;
  likes: string[]; // An array of userId, only business owners can like it btw.
}

export interface Package {
  class: ServiceClassType;
  price: number; // Make it PHP instead
  description: string;
  servicesPackagesId: string;
  edge: string;
  delivery: number;
  includes: string[];
}
