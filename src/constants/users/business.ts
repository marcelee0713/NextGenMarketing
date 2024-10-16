import { IUserBusinessProfile } from "@/interfaces/user/user.interface";

/**
 * The key string is the id of the user.
 */
const USER_BUSINESS_PROFILES: Record<string, IUserBusinessProfile> = {
  userId1: {
    ownerId: "userId1",
    businessId: "businessId1",
    businessName: "Bite & Delight",
    businessEmail: "hello@bitedelight.com",
    industry: "Food", // Food industry business
    businessWebsite: "https://bitedelight.com",
    location: "Los Angeles, CA, USA",
    contactNumber: "+1 310-555-1234",
    description:
      "Delicious and healthy meals delivered to your door, catering to foodies and fitness enthusiasts.",
    coverImage: null, // No cover image for now
    socialMediaLinks: [
      "https://instagram.com/bitedelight",
      "https://facebook.com/bitedelight",
    ],
  },
  userId3: {
    ownerId: "userId3",
    businessId: "businessId2",
    businessName: "Techify X Machinery",
    businessEmail: "info@techify.com",
    industry: "Tech/Gadgets", // Tech and Gadgets industry business
    businessWebsite: "https://techify.com",
    location: "San Francisco, CA, USA",
    contactNumber: "+1 415-555-5678",
    description:
      "Innovative gadgets designed to simplify your daily life, from smart home tech to portable devices.",
    coverImage: null, // No cover image for now
    socialMediaLinks: [
      "https://twitter.com/techify",
      "https://instagram.com/techify",
    ],
  },
  userId5: {
    ownerId: "userId5",
    businessId: "businessId3",
    businessName: "Thread & Trend",
    businessEmail: "support@threadandtrend.com",
    industry: "Clothes", // Clothing and Fashion industry business
    businessWebsite: "https://threadandtrend.com",
    location: "New York, NY, USA",
    contactNumber: "+1 212-555-8765",
    description:
      "Your go-to brand for stylish, eco-friendly clothing that combines comfort with fashion.",
    coverImage: null, // No cover image for now
    socialMediaLinks: [
      "https://instagram.com/threadandtrend",
      "https://facebook.com/threadandtrend",
    ],
  },
  userId6: {
    ownerId: "userId6",
    businessId: "businessId4",
    businessName: "PlayWorks",
    businessEmail: "contact@playworks.com",
    industry: "Toys", // Toys and Games industry business
    businessWebsite: "https://playworks.com",
    location: "Tokyo, Japan",
    contactNumber: "+81 3-5555-7890",
    description:
      "Creating fun, safe, and educational toys for kids of all ages to inspire creativity and learning.",
    coverImage: null, // No cover image for now
    socialMediaLinks: [
      "https://twitter.com/playworks",
      "https://facebook.com/playworks",
    ],
  },
  userId8: {
    ownerId: "userId8",
    businessId: "businessId5",
    businessName: "HomeEase",
    businessEmail: "info@homeease.com",
    industry: "Appliances", // Home Appliances industry business
    businessWebsite: "https://homeease.com",
    location: "Berlin, Germany",
    contactNumber: "+49 30 555-1234",
    description:
      "Offering smart and energy-efficient home appliances to make household tasks easier and greener.",
    coverImage: null, // No cover image for now
    socialMediaLinks: [
      "https://twitter.com/homeease",
      "https://instagram.com/homeease",
    ],
  },
};

export default USER_BUSINESS_PROFILES;
