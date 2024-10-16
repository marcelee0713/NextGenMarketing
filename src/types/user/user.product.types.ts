export const PRODUCT_CATEGORIES = [
  "Food",
  "Cookware",
  "Gadgets",
  "Appliances",
  "Clothes",
  "Accessories",
  "Tools",
  "Toys",
] as const;

export type ProductCategoryType = (typeof PRODUCT_CATEGORIES)[number];

export const SHIPMENT_LOCATIONS_ARR_TYPE = [
  "Metro Manila",
  "North Luzon",
  "Overseas",
  "Domestic",
  "South Luzon",
  "Visayas",
  "Mindanao",
];

export const SHIPMENT_LOCATIONS_ARR = [
  "Metro Manila",
  "North Luzon",
  "Overseas",
  "Domestic",
  "South Luzon",
  "Visayas",
  "Mindanao",
] as const;

export type ShipmentLocationsType = (typeof SHIPMENT_LOCATIONS_ARR)[number];
