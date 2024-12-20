import { IPartner } from "@/interfaces/partner/partner.interface";

/**
 * The key string is the id of the partner
 */
const PARTNERS: Record<string, IPartner> = {
  partnerId1: {
    badge: "BUDGET PICK",
    createdAt: new Date(),
    freeStatus: "TIER 1",
    email: "user1@gmail.com",
    password: "P@ssword123",
    overAllRating: 4.3,
    projectOnQueue: 3,
    partnerId: "partnerId1",
    isPro: true,
  },
  partnerId2: {
    badge: "TOP RATED",
    createdAt: new Date(),
    freeStatus: "TIER 2",
    email: "user2@hotmail.com",
    password: "P@ssword123",
    overAllRating: 3.8,
    projectOnQueue: 5,
    partnerId: "partnerId2",
    isPro: true,
  },
  partnerId3: {
    badge: "CUSTOMER'S CHOICE",
    createdAt: new Date(),
    freeStatus: "TIER 1",
    email: "user3@yahoo.com",
    password: "P@ssword123",
    overAllRating: 4.9,
    projectOnQueue: 2,
    partnerId: "partnerId3",
    isPro: true,
  },
  partnerId4: {
    badge: "TRUSTED",
    createdAt: new Date(),
    freeStatus: "TIER 3",
    email: "user4@gmail.com",
    password: "P@ssword123",
    overAllRating: 4.7,
    projectOnQueue: 7,
    partnerId: "partnerId4",
    isPro: false,
  },
  partnerId5: {
    badge: "BUDGET PICK",
    createdAt: new Date(),
    freeStatus: "TIER 1",
    email: "user5@yahoo.com",
    password: "P@ssword123",
    overAllRating: 4.1,
    projectOnQueue: 1,
    partnerId: "partnerId5",
    isPro: true,
  },
  partnerId6: {
    badge: "TOP RATED",
    createdAt: new Date(),
    freeStatus: "TIER 2",
    email: "user6@gmail.com",
    password: "P@ssword123",
    overAllRating: 3.5,
    projectOnQueue: 9,
    partnerId: "partnerId6",
    isPro: true,
  },
  partnerId7: {
    badge: "TRUSTED",
    createdAt: new Date(),
    freeStatus: "TIER 1",
    email: "user7@hotmail.com",
    password: "P@ssword123",
    overAllRating: 4.6,
    projectOnQueue: 4,
    partnerId: "partnerId7",
    isPro: true,
  },
  partnerId8: {
    badge: "CUSTOMER'S CHOICE",
    createdAt: new Date(),
    freeStatus: "TIER 2",
    email: "user8@gmail.com",
    password: "P@ssword123",
    overAllRating: 3.9,
    projectOnQueue: 6,
    partnerId: "partnerId8",
    isPro: true,
  },
  partnerId9: {
    badge: "BUDGET PICK",
    createdAt: new Date(),
    freeStatus: "TIER 1",
    email: "user9@gmail.com",
    password: "P@ssword123",
    overAllRating: 4.0,
    projectOnQueue: 8,
    partnerId: "partnerId9",
    isPro: true,
  },
  partnerId10: {
    badge: "TOP RATED",
    createdAt: new Date(),
    freeStatus: "TIER 2",
    email: "user10@hotmail.com",
    password: "P@ssword123",
    overAllRating: 4.5,
    projectOnQueue: 2,
    partnerId: "partnerId10",
    isPro: true,
  },
};

export { PARTNERS };
