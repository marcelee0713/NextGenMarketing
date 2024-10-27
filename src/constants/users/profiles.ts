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
    addresses: [
      {
        fullName: "John Marston",
        labelAs: "HOME",
        phoneNumber: "09945174624",
        fullAddress: {
          houseNoStreetNo: "596 Cancino Store",
          barangay: "Leet",
          city: "Santa Barbara",
          province: "Pangasinan",
          region: "Region I",
        },
        postalCode: 2000,
      },
      {
        fullName: "John Marston",
        labelAs: "HOME",
        phoneNumber: "09945174624",
        fullAddress: {
          houseNoStreetNo: "588",
          barangay: "Landville",
          city: "Calasiao",
          province: "Pangasinan",
          region: "Region I",
        },
        postalCode: 2001,
      },
    ],
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
    addresses: [
      {
        fullName: "Steven Williams",
        labelAs: "HOME",
        phoneNumber: "09945174624",
        fullAddress: {
          houseNoStreetNo: "596 Basadre Store",
          barangay: "Balzo",
          city: "Lingayen",
          province: "Pangasinan",
          region: "Region I",
        },
        postalCode: 2000,
      },
      {
        fullName: "Steven Williams",
        labelAs: "HOME",
        phoneNumber: "099451746234",
        fullAddress: {
          houseNoStreetNo: "452",
          barangay: "Landering",
          city: "Binmaley",
          province: "Pangasinan",
          region: "Region I",
        },
        postalCode: 2001,
      },
    ],
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
    addresses: [],
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
    addresses: [],
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
    addresses: [],
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
    addresses: [],
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
    addresses: [],
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
    addresses: [],
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
    addresses: [],
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
    addresses: [],
  },
};

export default USER_PROFILES;
