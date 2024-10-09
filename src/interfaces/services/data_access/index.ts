import { BadgeType } from "@/types/partner/partner.types";
import {
  Reviews,
  Service,
  ServiceAddOns,
  ServiceFAQs,
  ServicePackages,
  ServiceQuestions,
} from "../services.interface";
import {
  ServiceCategoriesType,
  ServiceDeliveryTimeFilterType,
  ServiceProjectQueueFilterType,
} from "@/types/services/services.types";
import {
  IPartner,
  IPartnerProfile,
} from "@/interfaces/partner/partner.interface";

export interface IServicesItem {
  id: string;
  partnerId: string;
  banner: string | null;
  pfp: string | null;
  username: string;
  category: ServiceCategoriesType;
  badge: BadgeType;
  shortDescription: string;
  tags: string[];
  rating: number;
  isPro: boolean;
  projectQueue: number;
  ratePerHour: number;
  createdAt: number;
  deliveryTime: number;
}

export interface ServicesItemData {
  fullLength: number;
  filteredLength: number;
  items: IServicesItem[];
}

export interface ServiceData {
  details: Service;
  userDetails: IPartner;
  profile: IPartnerProfile;
  gallery: string[];
  faqs: ServiceFAQs[];
  questions: ServiceQuestions[];
  packages: ServicePackages;
  addOns: ServiceAddOns[];
  reviews: Reviews[];
}

export interface GetServicesParams {
  pagination: {
    skip: number;
    take: number;
  };
  filter?: {
    searchInput?: string; // will search tags and name
    category?: ServiceCategoriesType;
    customerRating?: number;
    projectQueue?: ServiceProjectQueueFilterType;
    deliveryTime?: ServiceDeliveryTimeFilterType;
    isPro?: boolean;
    priceRange?: {
      min?: number;
      max?: number;
    };
  };
  sortBy?: "asc" | "desc";
}
