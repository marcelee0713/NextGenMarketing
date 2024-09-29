import { IUserProfile } from "@/interfaces/user/user.interface";

/**
 * The key string is the id of the user.
 */
const USER_PROFILES: Record<string, IUserProfile> = {
  userId1: {
    userId: "userId1",
    username: "johnmarston1873",
    bio: "Owner of Marston Organic Produce, focusing on high-quality organic fruits and vegetables.",
    coverImage: null,
    name: {
      firstName: "John",
      middleName: null,
      lastName: "Marston",
    },
    profilePicture: null,
  },
  userId2: {
    userId: "userId2",
    username: "stevenwilliams_pro",
    bio: "Tech enthusiast, passionate about the latest gadgets and electronics.",
    coverImage: null,
    name: {
      firstName: "Steven",
      middleName: null,
      lastName: "Williams",
    },
    profilePicture: null,
  },
  userId3: {
    userId: "userId3",
    username: "ameliahughes",
    bio: "Founder of BrightEdge Solutions, specializing in custom software and analytics tools for businesses.",
    coverImage: null,
    name: {
      firstName: "Amelia",
      middleName: null,
      lastName: "Hughes",
    },
    profilePicture: null,
  },
  userId4: {
    userId: "userId4",
    username: "jameskhan_biz",
    bio: "Avid coder and tech consultant, working on innovative software solutions.",
    coverImage: null,
    name: {
      firstName: "James",
      middleName: null,
      lastName: "Khan",
    },
    profilePicture: null,
  },
  userId5: {
    userId: "userId5",
    username: "karen_miller_enterprise",
    bio: "Founder of VisualImpact Studios, creating visually stunning designs and branding solutions.",
    coverImage: null,
    name: {
      firstName: "Karen",
      middleName: null,
      lastName: "Miller",
    },
    profilePicture: null,
  },
  userId6: {
    userId: "userId6",
    username: "michaelstone_trades",
    bio: "CEO of CulinaryCraft Catering, providing bespoke catering services in New York.",
    coverImage: null,
    name: {
      firstName: "Michael",
      middleName: null,
      lastName: "Stone",
    },
    profilePicture: null,
  },
  userId7: {
    userId: "userId7",
    username: "linda_green_naturals",
    bio: "Eco-conscious individual, interested in sustainable living.",
    coverImage: null,
    name: {
      firstName: "Linda",
      middleName: null,
      lastName: "Green",
    },
    profilePicture: null,
  },
  userId8: {
    userId: "userId8",
    username: "robertclark_finance",
    bio: "Founder of GreenWave Eco Solutions, helping companies implement sustainable practices.",
    coverImage: null,
    name: {
      firstName: "Robert",
      middleName: null,
      lastName: "Clark",
    },
    profilePicture: null,
  },
  userId9: {
    userId: "userId9",
    username: "sophiebrown_photography",
    bio: "Professional photographer specializing in high-end commercial photography.",
    coverImage: null,
    name: {
      firstName: "Sophie",
      middleName: null,
      lastName: "Brown",
    },
    profilePicture: null,
  },
  userId10: {
    userId: "userId10",
    username: "davidhall_cuisine",
    bio: "Chef and owner of Hall's Cuisine, a fine dining restaurant.",
    coverImage: null,
    name: {
      firstName: "David",
      middleName: null,
      lastName: "Hall",
    },
    profilePicture: null,
  },
};

export default USER_PROFILES;
