import { BadgeType, FreeStatusType } from "@/types/partner/partner.types";

export interface IPartner {
  userId: string;
  freeStatus: FreeStatusType;
  badge: BadgeType;
  overAllRating: number;
  projectOnQueue: number; // Dynamic integer where it would check if a project has been finished.
  createdAt: Date;
}

export interface IPartnerProfile {
  userId: string;
  username: string;
  coverImage: string | null;
  profilePicture: string | null;
}
