import { ProductCategoryType } from "@/types/user/user.product.types";

export interface IProduct {
  productId: string;
  businessId: string;
  ownerId: string; // References the user who owns the product
  name: string;
  description: string;
  tags: string[];
  category: ProductCategoryType; // Define categories like Food, Clothing, Electronics, etc.
  price: number;
  coverImage: string | null;
  images: string[];
  ratings: number; // Dynamically can be changed whenever someone posted a product evaluation
  createdAt: Date;
}

export interface IProductEvaluation {
  evaluationId: string;
  productId: string; // Reference to the product being evaluated
  reviewerId: string;
  rating: number; // Rating score out of 5
  comment: string;
  createdAt: Date;
}
