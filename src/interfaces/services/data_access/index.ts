import { BadgeType } from "@/types/partner/partner.types";
import {
  Reviews,
  Service,
  ServiceFAQs,
  ServicePackages,
  ServiceQuestions,
} from "../services.interface";

export interface IServicesItem {
  banner: string | null;
  pfp: string | null;
  username: string;
  badge: BadgeType;
  shortDescription: string;
  rating: number;
  ratePerHour: number;
}

export interface ServiceData {
  details: Service;
  gallery: string[];
  faqs: ServiceFAQs[];
  questions: ServiceQuestions[];
  packages: ServicePackages;
  reviews: Reviews[];
}
