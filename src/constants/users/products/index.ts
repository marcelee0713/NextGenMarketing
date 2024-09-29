import { IProduct } from "@/interfaces/user/user.product.interface";

const BUSINESS_PRODUCTS: Record<string, IProduct[]> = {
  businessId1: [
    {
      productId: "productId1",
      businessId: "businessId1",
      ownerId: "userId1",
      name: "Organic Apples",
      description: "Freshly picked organic apples from our orchard.",
      tags: ["organic", "fruit", "apple"],
      category: "Food",
      price: 2.99,
      discount: 0.07,
      coverImage: null,
      images: [],
      ratings: 4.5,
      createdAt: new Date(),
    },
    {
      productId: "productId2",
      businessId: "businessId1",
      ownerId: "userId1",
      name: "Organic Carrots",
      description: "Crunchy organic carrots, perfect for salads and snacks.",
      tags: ["organic", "vegetable", "carrot"],
      category: "Food",
      price: 1.99,
      discount: 0.07,
      coverImage: null,
      images: [],
      ratings: 4.7,
      createdAt: new Date(),
    },
  ],
  businessId2: [
    // From userId3's business profile
    {
      productId: "productId3",
      businessId: "businessId2", // Linked to BrightEdge Solutions
      ownerId: "userId3",
      name: "Custom Software Development",
      description:
        "Tailored software solutions to fit your unique business needs, ensuring efficiency and growth.",
      tags: ["software", "development", "custom solutions"],
      category: "Services",
      price: 1499.99,
      coverImage: null,
      images: [],
      ratings: 4.8, // Sample rating
      createdAt: new Date(),
      discount: 0.07,
    },
  ],
  businessId3: [
    // From userId5's business profile
    {
      productId: "productId4",
      businessId: "businessId3", // Linked to VisualImpact Studios
      ownerId: "userId5",
      name: "Brand Identity Design",
      description:
        "Creating unique branding solutions that resonate with your audience and enhance your company's image.",
      tags: ["branding", "design", "graphic design"],
      category: "Others", // You can adjust the category if necessary
      price: 599.99,
      coverImage: null,
      images: [],
      ratings: 4.9, // Sample rating
      createdAt: new Date(),
      discount: 0.07,
    },
    {
      productId: "productId5",
      businessId: "businessId3", // Linked to VisualImpact Studios
      ownerId: "userId5",
      name: "Social Media Graphics Package",
      description:
        "A package of custom graphics for your social media channels to elevate your online presence.",
      tags: ["social media", "graphics", "branding"],
      category: "Services",
      price: 399.99,
      coverImage: null,
      images: [],
      ratings: 4.6, // Sample rating
      createdAt: new Date(),
      discount: 0.07,
    },
  ],
  businessId4: [
    // From userId6's business profile
    {
      productId: "productId6",
      businessId: "businessId4", // Linked to CulinaryCraft Catering
      ownerId: "userId6",
      name: "Corporate Catering Package",
      description:
        "Bespoke catering solutions for corporate events, featuring gourmet dishes and exceptional service.",
      tags: ["catering", "food", "corporate events"],
      category: "Food",
      price: 1299.99,
      coverImage: null,
      images: [],
      ratings: 4.6, // Sample rating
      createdAt: new Date(),
      discount: 0.07,
    },
  ],
  businessId5: [
    // From userId8's business profile
    {
      productId: "productId7",
      businessId: "businessId5", // Linked to GreenWave Eco Solutions
      ownerId: "userId8",
      name: "Sustainability Consulting Service",
      description:
        "Expert consulting services to help your business implement sustainable practices and reduce waste.",
      tags: ["sustainability", "consulting", "environment"],
      category: "Services",
      price: 999.99,
      coverImage: null,
      images: [],
      ratings: 4.5, // Sample rating
      createdAt: new Date(),
      discount: 0.07,
    },
    {
      productId: "productId8",
      businessId: "businessId5", // Linked to GreenWave Eco Solutions
      ownerId: "userId8",
      name: "Eco-Friendly Packaging Solutions",
      description:
        "Providing sustainable packaging options for businesses aiming to reduce their environmental footprint.",
      tags: ["packaging", "sustainability", "eco-friendly"],
      category: "Others",
      price: 299.99,
      coverImage: null,
      images: [],
      ratings: 4.7, // Sample rating
      createdAt: new Date(),
      discount: 0.07,
    },
  ],
};

export { BUSINESS_PRODUCTS };
