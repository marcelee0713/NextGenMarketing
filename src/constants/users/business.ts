import { IUserBusinessProfile } from "@/interfaces/user/user.interface";

/**
 * The key string is the id of the user.
 */
const USER_BUSINESS_PROFILES: Record<string, IUserBusinessProfile> = {
  userId1: {
    ownerId: "userId1",
    businessId: "businessId1",
    businessName: "Marston Organic Produce",
    businessEmail: "contact@marstonorganic.com",
    industry: "Food & Beverage",
    businessWebsite: "https://marstonorganic.com",
    location: "Austin, TX",
    contactNumber: "+1 512-555-0199",
    description:
      "Providing fresh, organic fruits and vegetables directly from our farm to your table.",
    coverImage: null,
    socialMediaLinks: [
      "https://twitter.com/marstonorganic",
      "https://instagram.com/marstonorganic",
    ],
  },
  userId3: {
    ownerId: "userId3",
    businessId: "businessId2",
    businessName: "BrightEdge Solutions",
    businessEmail: "hello@brightedge.co",
    industry: "Software Development",
    businessWebsite: "https://brightedge.co",
    location: "San Francisco, CA",
    contactNumber: "+1 415-555-1234",
    description:
      "Developing custom software and analytics tools for growing businesses.",
    coverImage: null,
    socialMediaLinks: [
      "https://facebook.com/brightedge",
      "https://linkedin.com/company/brightedge",
    ],
  },
  userId5: {
    ownerId: "userId5",
    businessId: "businessId3",
    businessName: "VisualImpact Studios",
    businessEmail: "info@visualimpact.com",
    industry: "Graphic Design",
    businessWebsite: "https://visualimpact.com",
    location: "Los Angeles, CA",
    contactNumber: "+1 213-555-0148",
    description:
      "Creating visually stunning designs and branding solutions for companies looking to make a lasting impression.",
    coverImage: null,
    socialMediaLinks: [
      "https://instagram.com/visualimpact",
      "https://dribbble.com/visualimpact",
    ],
  },
  userId6: {
    ownerId: "userId6",
    businessId: "businessId4",
    businessName: "CulinaryCraft Catering",
    businessEmail: "inquiries@culinarycraft.com",
    industry: "Food & Beverage",
    businessWebsite: "https://culinarycraft.com",
    location: "New York, NY",
    contactNumber: "+1 646-555-0234",
    description:
      "Providing bespoke catering services for corporate and private events across New York.",
    coverImage: null,
    socialMediaLinks: [
      "https://instagram.com/culinarycraft",
      "https://facebook.com/culinarycraftcatering",
    ],
  },
  userId8: {
    ownerId: "userId8",
    businessId: "businessId5",
    businessName: "GreenWave Eco Solutions",
    businessEmail: "support@greenwave.com",
    industry: "Sustainability Consulting",
    businessWebsite: "https://greenwave.com",
    location: "Seattle, WA",
    contactNumber: "+1 206-555-0976",
    description:
      "Helping companies implement sustainable practices to reduce environmental impact.",
    coverImage: null,
    socialMediaLinks: [
      "https://twitter.com/greenwaveeco",
      "https://linkedin.com/company/greenwaveeco",
    ],
  },
};

export default USER_BUSINESS_PROFILES;
