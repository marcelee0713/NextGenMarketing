import {
  IPartner,
  IPartnerProfile,
} from "@/interfaces/partner/partner.interface";

const partners: Record<string, IPartner> = {
  userId1: {
    badge: "BUDGET PICK",
    createdAt: new Date(),
    freeStatus: "REGULAR",
    email: "johnnydoe123@gmail.com",
    password: "@Mbatukam12",
    overAllRating: 0,
    projectOnQueue: 0,
    userId: "userId1",
  },
};

const partnersProfile: Record<string, IPartnerProfile> = {
  userId1: {
    coverImage: null,
    profilePicture: null,
    userId: "userId1",
    username: "johnnydoe123",
  },
};

// TODO: Populate the datas with the interfaces you created

export { partners, partnersProfile };
