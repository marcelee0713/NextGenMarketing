import { BadgeType, FreeStatusType } from "@/types/partner/partner.types";

export interface IPartner {
  partnerId: string;
  email: string;
  password: string;
  freeStatus: FreeStatusType;
  badge: BadgeType;
  overAllRating: number; // Dynamic integer
  projectOnQueue: number; // Dynamic integer where it would check if a project has been finished.
  createdAt: Date;
  isPro: boolean;
}

export interface IPartnerProfile {
  partnerId: string;
  username: string;
  coverImage: string | null;
  profilePicture: string | null;
}
