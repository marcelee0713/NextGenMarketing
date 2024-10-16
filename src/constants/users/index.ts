import { IUser } from "@/interfaces/user/user.interface";
import USER_PROFILES from "./profiles";
import USER_BUSINESS_PROFILES from "./business";

/**
 * The key string is the id of the user.
 */
const USERS: Record<string, IUser> = {
  userId1: {
    userId: "userId1",
    isVerified: true,
    email: "johnmarston@hotlook.com",
    password: "P@ssword123",
    businessProfile: USER_BUSINESS_PROFILES["userId1"], // Linked business profile
    profile: USER_PROFILES["userId1"],
    subscriptionType: "STARTER",
    createdAt: new Date(),
  },
  userId2: {
    userId: "userId2",
    isVerified: true,
    email: "steven.williams@corporate.com",
    password: "P@ssword123",
    businessProfile: null, // No business profile linked
    profile: USER_PROFILES["userId2"],
    subscriptionType: "GROWTH",
    createdAt: new Date(),
  },
  userId3: {
    userId: "userId3",
    isVerified: true,
    email: "amelia.hughes@freshthreads.com",
    password: "P@ssword123",
    businessProfile: USER_BUSINESS_PROFILES["userId3"], // Linked business profile
    profile: USER_PROFILES["userId3"],
    subscriptionType: "BUSINESS",
    createdAt: new Date(),
  },
  userId4: {
    userId: "userId4",
    isVerified: true,
    email: "james.khan@urbantech.com",
    password: "P@ssword123",
    businessProfile: null, // No business profile linked
    profile: USER_PROFILES["userId4"],
    subscriptionType: "STARTER",
    createdAt: new Date(),
  },
  userId5: {
    userId: "userId5",
    isVerified: true,
    email: "karen.miller@naturebliss.com",
    password: "P@ssword123",
    businessProfile: USER_BUSINESS_PROFILES["userId5"], // Linked business profile
    profile: USER_PROFILES["userId5"],
    subscriptionType: "ENTERPRISE",
    createdAt: new Date(),
  },
  userId6: {
    userId: "userId6",
    isVerified: true,
    email: "michael.stone@stonetrade.com",
    password: "P@ssword123",
    businessProfile: USER_BUSINESS_PROFILES["userId6"], // Linked business profile
    profile: USER_PROFILES["userId6"],
    subscriptionType: "ENTERPRISE",
    createdAt: new Date(),
  },
  userId7: {
    userId: "userId7",
    isVerified: true,
    email: "linda.green@greennaturals.com",
    password: "P@ssword123",
    businessProfile: null, // No business profile linked
    profile: USER_PROFILES["userId7"],
    subscriptionType: "GROWTH",
    createdAt: new Date(),
  },
  userId8: {
    userId: "userId8",
    isVerified: true,
    email: "robert.clark@clarkfinance.com",
    password: "P@ssword123",
    businessProfile: USER_BUSINESS_PROFILES["userId8"], // Linked business profile
    profile: USER_PROFILES["userId8"],
    subscriptionType: "GROWTH",
    createdAt: new Date(),
  },
  userId9: {
    userId: "userId9",
    isVerified: true,
    email: "sophie.brown@sbphoto.com",
    password: "P@ssword123",
    businessProfile: null, // No business profile linked
    profile: USER_PROFILES["userId9"],
    subscriptionType: "STARTER",
    createdAt: new Date(),
  },
  userId10: {
    userId: "userId10",
    isVerified: true,
    email: "david.hall@hallscuisine.com",
    password: "P@ssword123",
    businessProfile: null, // No business profile linked
    profile: USER_PROFILES["userId10"],
    subscriptionType: "GROWTH",
    createdAt: new Date(),
  },
};

export default USERS;
