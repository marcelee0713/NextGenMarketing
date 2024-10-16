export type ProductCategoryType =
  | "Food"
  | "Cookware"
  | "Gadgets"
  | "Appliances"
  | "Clothes"
  | "Accessories"
  | "Tools"
  | "Toys";

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
