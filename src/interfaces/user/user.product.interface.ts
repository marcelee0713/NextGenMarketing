import {
  ProductCategoryType,
  ShipmentLocationsType,
} from "@/types/user/user.product.types";

export interface IProduct {
  productId: string;
  businessId: string;
  ownerId: string;
  name: string;
  description: string;
  productIntention: string;
  tags: string[];
  category: ProductCategoryType;
  price: number;
  discount: number;
  coverImage: string | null;
  images: string[];
  ratings: number;
  specifications: ProductSpecification[];
  faqs: ProductFAQs[];
  addOns: ProductAddOns[];
  deliveryLocation: ShipmentLocationsType;
  createdAt: Date;
  isFeatured: boolean;
}

export interface IProductEvaluation {
  evaluationId: string;
  productId: string; // Reference to the product being evaluated
  reviewerId: string;
  rating: number; // Rating score out of 5
  comment: string;
  createdAt: Date;
  likes: string[];
}

export interface ProductSpecification {
  attribute: string;
  value: string;
}

export interface ProductFAQs {
  productId: string;
  questions: string;
  answer: string;
}

export interface ProductAddOns {
  productId: string;
  header: string;
  description: string;
  price: number;
}
