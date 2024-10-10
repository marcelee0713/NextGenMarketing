import { ServiceClassType } from "@/types/services/services.types";

export interface OrderSummary {
  partnerId: string;
  serviceId: string;
  selectedClass: ServiceClassType;
  selectedAddOns: string[];
}
