import {
  SERVICES_CATEGORIES,
  SERVICES_DELIVERY_TIME_FILTER_ARR,
  SERVICES_PROJECT_QUEUE_FILTER_ARR,
} from "@/constants/services";

export type ServiceClassType = "BASIC" | "STANDARD" | "PREMIUM";

export type ServiceCategoriesType = (typeof SERVICES_CATEGORIES)[number];

export type ServiceDeliveryTimeFilterType =
  (typeof SERVICES_DELIVERY_TIME_FILTER_ARR)[number];

export type ServiceProjectQueueFilterType =
  (typeof SERVICES_PROJECT_QUEUE_FILTER_ARR)[number];
