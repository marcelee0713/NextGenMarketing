import {
  IUserProductOrders,
  OrderRatedProductQuality,
} from "@/interfaces/user/user.interface";
import {
  DEFAULT_ORDER_PROGRESS,
  DEFAULT_ORDER_PROGRESS_ORDER_PLACED,
  DEFAULT_ORDER_PROGRESS_SHIPPED_OUT,
} from "../products/evaluations";
import USER_BUSINESS_PROFILES from "../business";
import { BUSINESS_PRODUCTS } from "../products";

const USER_PRODUCT_ORDERS = new Map<string, IUserProductOrders>();

USER_PRODUCT_ORDERS.set("1ASD23SAS143508A", {
  users: {
    buyer: {
      userId: "userId1",
      addressIndex: 0,
    },
    seller: {
      businessId: "businessId2",
      userId: "userId3",
    },
  },
  createdAt: new Date(),
  details: {
    isCompleted: false,
    progress: DEFAULT_ORDER_PROGRESS_ORDER_PLACED,
    ratedQualities: new Map(),
  },
  orderId: "1ASD23SAS143508A",
  productDetails: {
    addOnsIndexes: [0, 1],
    productId: "productId1",
    promoCode: null,
  },
});

USER_PRODUCT_ORDERS.set("AMB1TUK1MINSIDEY01231", {
  users: {
    buyer: {
      userId: "userId1",
      addressIndex: 1,
    },
    seller: {
      businessId: "businessId2",
      userId: "userId3",
    },
  },
  createdAt: new Date(),
  details: {
    isCompleted: false,
    progress: DEFAULT_ORDER_PROGRESS_SHIPPED_OUT,
    ratedQualities: new Map(),
  },
  orderId: "AMB1TUK1MINSIDEY01231",
  productDetails: {
    addOnsIndexes: [0, 1, 2],
    productId: "productId4",
    promoCode: "AMBA551NG",
  },
});

USER_PRODUCT_ORDERS.set("HTD0G102315ARAPN1T0", {
  users: {
    buyer: {
      userId: "userId1",
      addressIndex: 0,
    },
    seller: {
      businessId: "businessId1",
      userId: "userId1",
    },
  },
  createdAt: new Date(),
  details: {
    isCompleted: true,
    progress: DEFAULT_ORDER_PROGRESS,
    ratedQualities: new Map(),
  },
  orderId: "HTD0G102315ARAPN1T0",
  productDetails: {
    addOnsIndexes: [0, 1, 2, 3, 4],
    productId: "productId10",
    promoCode: "SUP3RD0WN",
  },
});

const createRandomUserProductOrders = (
  userIdBuyer: string,
  userIdSeller: string,
  productId: string,
  businessId: string,
  minAddOns: number = 0,
  maxAddOns: number = 4
) => {
  const USER_PRODUCT_ORDERS = new Map<string, IUserProductOrders>();
  const businessProfile = USER_BUSINESS_PROFILES[userIdSeller];
  const products = BUSINESS_PRODUCTS[businessProfile.businessId];

  const product = products.find((val) => val.productId === productId);
  const productQualities = product?.qualities;

  const getRandomAddOnIndexes = (min: number, max: number): number[] => {
    const count = Math.floor(Math.random() * (max - min + 1)) + min;
    const indexes = Array.from({ length: max }, (_, i) => i);
    const shuffled = indexes.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  // Function to generate a random suggestion based on quality and thought
  const getSuggestion = (qualityName: string, thoughtName: string): string => {
    const suggestionsMap: { [key: string]: { [key: string]: string } } = {
      Affordability: {
        Expensive: "This product is too costly for its quality.",
        Pricey: "A bit pricey, but worth it.",
        Reasonable: "Good value for the price.",
        Affordable: "Quite affordable for most customers.",
        Cheap: "Cheap, but quality may suffer.",
      },
      Taste: {
        Scrumptious: "Food is delicious!",
        Delicious: "Tastes great!",
        Okay: "The taste is okay.",
        Tolerable: "Taste could be better.",
        Bad: "Tastes bad!",
      },
      Texture: {
        "Smooth & Tender": "Perfectly tender and smooth texture.",
        Juicy: "Nice and juicy!",
        Firm: "Texture is firm but acceptable.",
        Grainy: "A bit grainy.",
        Dry: "Dry texture, needs improvement.",
      },
      Presentation: {
        Superb: "Beautiful presentation, a feast for the eyes!",
        Exceptional: "Looks exceptional!",
        Fine: "Looks fine.",
        Tolerable: "Presentation is tolerable.",
        Poor: "Poor presentation.",
      },
    };
    return (
      suggestionsMap[qualityName]?.[thoughtName] || "No specific feedback."
    );
  };

  // Random date within the last 6 months
  const randomDateInLastSixMonths = () => {
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
    return new Date(
      sixMonthsAgo.getTime() +
        Math.random() * (Date.now() - sixMonthsAgo.getTime())
    );
  };

  for (let i = 0; i < 100; i++) {
    const orderId = `ORDER${Math.random().toString(36).substring(2, 15)}`;
    const createdAt = randomDateInLastSixMonths();
    const updatedAt = new Date(
      createdAt.getTime() + Math.random() * 7 * 24 * 60 * 60 * 1000
    );

    const ratedQualities = new Map<string, OrderRatedProductQuality>();
    const selectedIndices = new Set<number>();

    if (productQualities) {
      for (const quality of productQualities) {
        let thoughtSelectedIndex: number;

        do {
          thoughtSelectedIndex = Math.floor(
            Math.random() * quality.thoughts.length
          );
        } while (selectedIndices.has(thoughtSelectedIndex));

        selectedIndices.add(thoughtSelectedIndex);

        const selectedThought = quality.thoughts[thoughtSelectedIndex];
        const suggestion = getSuggestion(quality.name, selectedThought.name);

        ratedQualities.set(quality.name, {
          productQualitiesIndex: productQualities.indexOf(quality),
          createdAt: new Date(createdAt.getTime() + Math.random() * 3600000),
          updatedAt: Math.random() > 0.5 ? updatedAt : null,
          thoughtSelectedIndex,
          suggestions: suggestion,
        });
      }
    }

    USER_PRODUCT_ORDERS.set(orderId, {
      users: {
        buyer: {
          userId: userIdBuyer,
          addressIndex: 0,
        },
        seller: {
          businessId: businessId,
          userId: userIdSeller,
        },
      },
      createdAt,
      details: {
        isCompleted: true,
        progress: DEFAULT_ORDER_PROGRESS,
        ratedQualities,
      },
      orderId,
      productDetails: {
        addOnsIndexes: getRandomAddOnIndexes(minAddOns, maxAddOns),
        productId,
        promoCode: null,
      },
    });
  }

  return USER_PRODUCT_ORDERS;
};

const randomOrders = createRandomUserProductOrders(
  "userId2",
  "userId1",
  "productId9",
  "businessId1"
);

randomOrders.forEach((order, key) => {
  USER_PRODUCT_ORDERS.set(key, order);
});

console.log(USER_PRODUCT_ORDERS);

export { USER_PRODUCT_ORDERS };
