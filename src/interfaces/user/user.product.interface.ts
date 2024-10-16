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
}

export interface ProductSpecification {
  attribute: string;
  value: string;
}
