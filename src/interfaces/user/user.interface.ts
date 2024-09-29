import { UserSubscriptionType } from "@/types/user/user.types";

export interface IUser {
  userId: string;
  subscriptionType: UserSubscriptionType;
  email: string;
  password: string;
  createdAt: Date; // When the account was created
  isVerified: boolean; // To check if the user’s email or account has been verified
  profile: IUserProfile;
  businessProfile: IUserBusinessProfile | null;
}

export interface IUserProfile {
  userId: string;
  username: string;
  name: {
    firstName: string;
    middleName: string | null;
    lastName: string;
  };
  bio: string;
  profilePicture: string | null;
  coverImage: string | null;
}

export interface IUserBusinessProfile {
  ownerId: string;
  businessId: string;
  businessName: string;
  businessEmail: string;
  industry: string; // Industry type, e.g., retail, software, etc.
  businessWebsite: string | null; // Optional business website link
  location: string; // Where the business is located
  contactNumber: string; // For business communication
  description: string; // Short description of the business
  coverImage: string | null; // Optional cover image for the business profile
  socialMediaLinks: string[]; // Array of links to social media accounts
}
