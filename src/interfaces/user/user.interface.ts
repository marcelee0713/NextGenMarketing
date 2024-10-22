import {
  ProductCategoryType,
  ShipmentLocationsType,
} from "@/types/user/user.product.types";
import { UserSubscriptionType } from "@/types/user/user.types";
import { IProduct, IProductEvaluation } from "./user.product.interface";

export interface IUser {
  userId: string;
  subscriptionType: UserSubscriptionType;
  email: string;
  password: string;
  createdAt: Date; // When the account was created
  isVerified: boolean; // To check if the user’s email or account has been verified
  profile: IUserProfile;
  businessProfile: IUserBusinessProfile | null;
}

export interface IUserProfile {
  userId: string;
  username: string;
  name: {
    firstName: string;
    middleName: string | null;
    lastName: string;
  };
  bio: string;
  profilePicture: string | null;
  coverImage: string | null;
  addresses: IUserAdress[];
}

export interface IUserData {
  details: IUser;
  profile: IUserProfile;
}

export interface IUserProductOrders {
  orderId: string;
  users: {
    buyer: {
      userId: string;
      addressIndex: number;
    };
    seller: {
      userId: string;
      businessId: string;
    };
  };
  productDetails: {
    productId: string;
    addOnsIndexes: number[];
    promoCode: string | null;
  };
  details: {
    progress: Record<ShipmentProgressType, ProductShipmentProgress>;
    isCompleted: boolean;
    review?: {
      reviewId: string;
      createdAt: Date;
      updatedAt: Date | null;
    };
    ratedQualities: Map<string, OrderRatedProductQuality>;
  };
  createdAt: Date;
}

export interface OrderRatedProductQuality {
  productQualitiesIndex: number;
  createdAt: Date;
  updatedAt: Date | null;
  thoughtSelectedIndex: number;
  suggestions: string | null;
}

export interface ProductShipmentProgress {
  index: number;
  name: string;
  type: ShipmentProgressType;
  date: Date | null;
}

export type ShipmentProgressType =
  | "ORDER_PLACED"
  | "PAYMENT_CONFIRMED"
  | "SHIPPED_OUT"
  | "RECEIVED"
  | "COMPLETED";
export interface IUserAdress {
  fullName: string;
  phoneNumber: string;
  fullAddress: {
    houseNoStreetNo: string;
    region: string;
    province: string;
    city: string;
    barangay: string;
  };
  postalCode: number;
  labelAs: "HOME" | "WORK" | "LODGING";
}

export interface IUserBusinessProfile {
  ownerId: string;
  businessId: string;
  businessName: string;
  businessEmail: string;
  industry: string; // Industry type, e.g., retail, software, etc.
  businessWebsite: string | null; // Optional business website link
  location: string; // Where the business is located
  contactNumber: string; // For business communication
  description: string; // Short description of the business
  coverImage: string | null; // Optional cover image for the business profile
  socialMediaLinks: string[]; // Array of links to social media accounts
}

export interface GetProductsParams {
  pagination: {
    skip: number;
    take: number;
  };
  filter?: {
    category?: ProductCategoryType;
    deliveryLocations?: ShipmentLocationsType;
    customerRating?: number;
    priceRange?: {
      min?: number;
      max?: number;
    };
  };
  sortBy?: "desc" | "popular" | "trending";
}

export interface ProductsItemData {
  fullLength: number;
  filteredLength: number;
  featuredItems: IProduct[];
  items: IProduct[];
}

export interface ProductItemData {
  businessProfile: IUserBusinessProfile;
  data: IProduct;
  reviews: IProductEvaluation[];
}

export interface IProductItem {
  productId: string;
  businessId: string;
  ownerId: string;
  productName: string;
  tags: string[];
  productIntention: string;
  price: string;
  discountedPrice: string;
  gallery: {
    coverImage: string | null;
    images: string[];
  };
}
