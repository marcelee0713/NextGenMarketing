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
  qualities: ProductQualities[];
  deliveryTime: string;
  createdAt: Date;
  isFeatured: boolean;
  salesAndEngagement: CombinedSalesEngagementData[];
}

export interface CombinedSalesEngagementData {
  date: Date;
  unitsSold: number;
  totalRevenue: number;
  engagementMetrics: EngagementMetrics;
}

export interface EngagementMetrics {
  views: number; // Total views of the product
  addsToCart: number; // Total adds to cart
  favorites: number; // Total times favorited
}

export interface ProductQualities {
  name: string;
  subtext?: string;
  thoughts: ProductThoughts[];
}

export interface ProductThoughts {
  name: string;
  value: number;
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

export interface SalesRechartData {
  totalUnitsSold: number;
  totalRevenue: number;
  totalRevenueByDiscount: number;
  date: string;
}

export interface EngagementRechartData {
  views: number; // Total views of the product
  addsToCart: number; // Total adds to cart
  favorites: number; // Total times favorited
  date: string;
}

export interface ProductAnalyzedData {
  marketValueRating: MarketValueRating;
  salesAndEngagement: OverAllCombinedSalesAndEngagement;
  ordersByProvince: OrdersByProvince[];
  userSuggestions: Map<number, ProductQualityUserSuggestions[]>;
  productQualityMonthlyAverage: Map<number, ProductQualityMonthlyAverage[]>;
  userId: string;
  businessId: string;
  productId: string;
}

export interface QualityRawDataMonth {
  dateStr: string;
  value: number;
  thoughtSelectedIndex: number;
  qualityIndex: number;
}

export interface ProductQualityMonthlyAverage {
  qualityName: string;
  qualityIndex: number;
  date: string;
  createdAt: Date;
  average: number;
}

export interface ProductQualityUserSuggestions {
  qualityName: string;
  qualityIndex: number;
  rating: number;
  suggestion: string;
  name: string;
  createdAt: Date;
}

export interface OverAllCombinedSalesAndEngagement {
  totalUnitsSold: number;
  totalRevenue: number;
  engagement: {
    totalViews: number;
    totalAddToCarts: number;
    totalFavorites: number;
  };
  salesAndEngagement: CombinedSalesEngagementData[];
}

export interface MarketValueRating {
  qualities: QualitiesAverageRatings[];
  average: number;
  totalResponses: number;
}

export interface QualitiesAverageRatings {
  name: string;
  totalAverage: number;
  totalUserRespondents: number;
}

export interface OrdersByProvince {
  province: string;
  amountOfSales: number;
}
