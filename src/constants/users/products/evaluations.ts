import {
  ShipmentProgressType,
  ProductShipmentProgress,
} from "@/interfaces/user/user.interface";
import { IProductEvaluation } from "@/interfaces/user/user.product.interface";

const PRODUCT_EVALUATIONS: Record<string, IProductEvaluation[]> = {
  productId9: [
    {
      evaluationId: "eval1",
      productId: "productId9",
      reviewerId: "userId1",
      rating: 5,
      comment:
        "The Bugerinator is absolutely delicious! The patties are juicy and flavorful. A must-try for any burger lover!",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval2",
      productId: "productId9",
      reviewerId: "userId2",
      rating: 4,
      comment:
        "Great burger! I loved the fresh vegetables and the sauce. However, I found it a bit too salty for my taste.",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval3",
      productId: "productId9",
      reviewerId: "partner1",
      rating: 4,
      comment:
        "Very tasty and satisfying! The portion is perfect for a quick meal. I will definitely order again!",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval4",
      productId: "productId9",
      reviewerId: "userId3",
      rating: 3,
      comment:
        "The burger was good, but I expected more from the sauces. They could be more unique or flavorful.",
      createdAt: new Date(),
      likes: [],
    },
  ],
  productId10: [
    {
      evaluationId: "eval5",
      productId: "productId10",
      reviewerId: "userId4",
      rating: 5,
      comment:
        "HakDogs are fantastic! The flavors are amazing, and they're perfect for barbecues!",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval6",
      productId: "productId10",
      reviewerId: "userId5",
      rating: 4,
      comment:
        "Very tasty hotdogs! I love how they're seasoned. Would be great with some more toppings.",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval7",
      productId: "productId10",
      reviewerId: "partner2",
      rating: 4,
      comment:
        "Perfect for a quick meal! I enjoyed them grilled. A little ketchup and mustard, and you're good to go!",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval8",
      productId: "productId10",
      reviewerId: "userId6",
      rating: 3,
      comment:
        "They were okay. The flavor was nice, but I found them a bit greasy.",
      createdAt: new Date(),
      likes: [],
    },
  ],
  productId1: [
    {
      evaluationId: "eval1",
      productId: "productId1",
      reviewerId: "userId1",
      rating: 5,
      comment:
        "My dog loves Roball! It's so engaging and keeps him active for hours. Highly recommended for pet owners!",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval2",
      productId: "productId1",
      reviewerId: "partner1",
      rating: 4,
      comment:
        "Great toy for my cat! She enjoys chasing it around, but I wish it had more features to keep her interested longer.",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval3",
      productId: "productId1",
      reviewerId: "userId2",
      rating: 4,
      comment:
        "Very innovative product! My pets are entertained, but it could use a longer battery life.",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval4",
      productId: "productId1",
      reviewerId: "userId3",
      rating: 3,
      comment:
        "It was fun for a while, but my dog lost interest after a few days. Needs more interactive features.",
      createdAt: new Date(),
      likes: [],
    },
  ],
  productidIdontfuckingknow: [
    {
      evaluationId: "eval1",
      productId: "productidIdontfuckingknow",
      reviewerId: "userId4",
      rating: 5,
      comment:
        "BunnyR1 has been a hit with my kids! They love interacting with it and it has sparked their creativity.",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval2",
      productId: "productidIdontfuckingknow",
      reviewerId: "partner2",
      rating: 4,
      comment:
        "It's a fun and interactive toy! My children enjoy playing with it, but the voice recognition could be improved.",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval3",
      productId: "productidIdontfuckingknow",
      reviewerId: "userId5",
      rating: 4,
      comment:
        "Great robot companion! My son loves it, but I wish it had more playful features and actions.",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval4",
      productId: "productidIdontfuckingknow",
      reviewerId: "userId6",
      rating: 3,
      comment:
        "Fun toy for a while, but my kids lost interest after a few days. Needs more engaging activities.",
      createdAt: new Date(),
      likes: [],
    },
  ],
  productId3: [
    {
      evaluationId: "eval1",
      productId: "productId3",
      reviewerId: "userId7",
      rating: 5,
      comment:
        "The LightPhone has transformed the way I communicate. It helps me stay focused and less distracted throughout the day.",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval2",
      productId: "productId3",
      reviewerId: "partner3",
      rating: 4,
      comment:
        "I love the minimalist design! It's refreshing to have a phone that doesn't bombard me with notifications.",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval3",
      productId: "productId3",
      reviewerId: "userId8",
      rating: 4,
      comment:
        "A great phone for simplifying life! However, I wish it had a few more features for texting.",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval4",
      productId: "productId3",
      reviewerId: "userId9",
      rating: 3,
      comment:
        "It's nice for avoiding distractions, but sometimes I miss having more connectivity options.",
      createdAt: new Date(),
      likes: [],
    },
  ],
  productId4: [
    {
      evaluationId: "eval1",
      productId: "productId4",
      reviewerId: "userId1",
      rating: 5,
      comment:
        "MyPettyPlant has made taking care of my plants so easy! The app notifications are super helpful.",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval2",
      productId: "productId4",
      reviewerId: "partner1",
      rating: 4,
      comment:
        "Great product! It monitors everything well, but I wish the water capacity was a bit larger.",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval3",
      productId: "productId4",
      reviewerId: "userId4",
      rating: 4,
      comment:
        "The sensors are really accurate, and my plants look happier than ever! A must-have for plant lovers.",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval4",
      productId: "productId4",
      reviewerId: "userId5",
      rating: 3,
      comment:
        "It works well, but the app can be a bit glitchy at times. Still, I love the concept!",
      createdAt: new Date(),
      likes: [],
    },
  ],
  productIdWatch6: [
    {
      evaluationId: "eval1",
      productId: "productIdWatch6",
      reviewerId: "userId3",
      rating: 5,
      comment:
        "The Watch6 is fantastic! The health tracking features are accurate, and it looks stylish on my wrist.",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval2",
      productId: "productIdWatch6",
      reviewerId: "userId4",
      rating: 4,
      comment:
        "Great smart watch! I love the battery life, but the app could use some improvements.",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval3",
      productId: "productIdWatch6",
      reviewerId: "partner2",
      rating: 4,
      comment:
        "Impressive features for fitness tracking. It keeps me motivated to stay active!",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval4",
      productId: "productIdWatch6",
      reviewerId: "userId5",
      rating: 3,
      comment:
        "Nice watch, but I expected more customization options for the watch faces.",
      createdAt: new Date(),
      likes: [],
    },
  ],
  productId11: [
    {
      evaluationId: "eval1",
      productId: "productId11",
      reviewerId: "userId6",
      rating: 5,
      comment:
        "PowerBanker is a lifesaver! I can charge my phone multiple times on a single charge. Highly recommend!",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval2",
      productId: "productId11",
      reviewerId: "partner1",
      rating: 4,
      comment:
        "Great power bank! It charges quickly and is compact enough to fit in my bag, but it could be a bit lighter.",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval3",
      productId: "productId11",
      reviewerId: "userId7",
      rating: 4,
      comment:
        "The design is sleek, and the fast charging feature is impressive. Perfect for my travels!",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval4",
      productId: "productId11",
      reviewerId: "userId8",
      rating: 3,
      comment:
        "It's a good power bank, but I wish it had more output ports for charging multiple devices at once.",
      createdAt: new Date(),
      likes: [],
    },
  ],
  productId12: [
    {
      evaluationId: "eval1",
      productId: "productId12",
      reviewerId: "userId6",
      rating: 5,
      comment:
        "Flashlite is incredibly bright and versatile! I love using it while camping; it lights up the entire area!",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval2",
      productId: "productId12",
      reviewerId: "partner2",
      rating: 4,
      comment:
        "Very handy flashlight that easily transforms into a lamp. Perfect for power outages, but the battery life could be improved.",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval3",
      productId: "productId12",
      reviewerId: "userId9",
      rating: 4,
      comment:
        "Compact and lightweight, making it easy to carry. Brightness is impressive for such a small device!",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval4",
      productId: "productId12",
      reviewerId: "userId10",
      rating: 3,
      comment:
        "It works well, but I expected a longer battery life. Great for short-term use, though.",
      createdAt: new Date(),
      likes: [],
    },
  ],
  productId13: [
    {
      evaluationId: "eval1",
      productId: "productId13",
      reviewerId: "userId11",
      rating: 5,
      comment:
        "This screwdriver is a game changer for my DIY projects! Compact and powerful, it gets the job done effortlessly.",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval2",
      productId: "productId13",
      reviewerId: "userId12",
      rating: 4,
      comment:
        "Great performance and easy to handle. I just wish it came with more bits for different screws.",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval3",
      productId: "productId13",
      reviewerId: "userId13",
      rating: 4,
      comment:
        "I love how lightweight it is! Makes it easy to work in tight spaces. Very handy for quick tasks.",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval4",
      productId: "productId13",
      reviewerId: "userId14",
      rating: 3,
      comment:
        "Works well for light projects, but not powerful enough for heavy-duty tasks. Good for home use.",
      createdAt: new Date(),
      likes: [],
    },
  ],
  productId14: [
    {
      evaluationId: "eval1",
      productId: "productId14",
      reviewerId: "userId15",
      rating: 5,
      comment:
        "Absolutely love this plier! It's durable and the grip is super comfortable. A must-have for any DIYer!",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval2",
      productId: "productId14",
      reviewerId: "userId16",
      rating: 4,
      comment:
        "Great tool for the price. It's versatile and has handled all my tasks with ease. Would recommend it!",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval3",
      productId: "productId14",
      reviewerId: "userId17",
      rating: 4,
      comment:
        "Good quality and very handy. I just wish the jaws opened a bit wider for larger tasks.",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval4",
      productId: "productId14",
      reviewerId: "userId18",
      rating: 3,
      comment:
        "Decent plier, but I've had better ones. Still, it's good for small jobs around the house.",
      createdAt: new Date(),
      likes: [],
    },
  ],
  productIdMyGlasses: [
    {
      evaluationId: "eval1",
      productId: "productIdMyGlasses",
      reviewerId: "userId19",
      rating: 5,
      comment:
        "I love these glasses! The audio quality is fantastic, and they look great. Perfect for my daily commute!",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval2",
      productId: "productIdMyGlasses",
      reviewerId: "userId20",
      rating: 4,
      comment:
        "Very innovative! The smart features are amazing, though I wish they were a bit more comfortable for all-day wear.",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval3",
      productId: "productIdMyGlasses",
      reviewerId: "userId21",
      rating: 4,
      comment:
        "These glasses have a sleek design and work well. Battery life is decent, but I expected a bit more.",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval4",
      productId: "productIdMyGlasses",
      reviewerId: "userId22",
      rating: 3,
      comment:
        "Good overall, but the sound can be a bit quiet in noisy environments. Still, a cool gadget!",
      createdAt: new Date(),
      likes: [],
    },
  ],
  productIdsleevey: [
    {
      evaluationId: "eval1",
      productId: "productIdsleevey",
      reviewerId: "userId23",
      rating: 5,
      comment:
        "Great quality for the price! The material feels soft and breathable, perfect for everyday wear.",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval2",
      productId: "productIdsleevey",
      reviewerId: "userId24",
      rating: 4,
      comment:
        "I really like the fit and comfort of these shirts. They look good, but I'd love more color options!",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval3",
      productId: "productIdsleevey",
      reviewerId: "userId25",
      rating: 4,
      comment:
        "Good basic polo shirts. They hold up well after several washes, but I wish they had a more tailored fit.",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval4",
      productId: "productIdsleevey",
      reviewerId: "userId26",
      rating: 3,
      comment:
        "Decent quality, but the sizing runs a bit large. I recommend sizing down if you want a snug fit.",
      createdAt: new Date(),
      likes: [],
    },
  ],
  productId5: [
    {
      evaluationId: "eval1",
      productId: "productId5",
      reviewerId: "userId27",
      rating: 5,
      comment:
        "Absolutely love this t-shirt! The material is soft, and the minimalist design is perfect for my style.",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval2",
      productId: "productId5",
      reviewerId: "userId28",
      rating: 4,
      comment:
        "Great quality and fit! It's my go-to shirt for casual outings. Would definitely recommend.",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval3",
      productId: "productId5",
      reviewerId: "userId29",
      rating: 4,
      comment:
        "Very comfortable and stylish! The only downside is that it tends to wrinkle easily.",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval4",
      productId: "productId5",
      reviewerId: "userId30",
      rating: 3,
      comment:
        "Good shirt, but I expected it to be a bit thicker. Still, the design is nice.",
      createdAt: new Date(),
      likes: [],
    },
  ],
  productId15: [
    {
      evaluationId: "eval1",
      productId: "productId15",
      reviewerId: "userId31",
      rating: 5,
      comment:
        "Anki Vector is an amazing little robot! My kids love interacting with him, and he responds so well to commands.",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval2",
      productId: "productId15",
      reviewerId: "userId32",
      rating: 4,
      comment:
        "Great toy! The AI is impressive, and it’s fun to see how he reacts to different situations. Would love longer battery life!",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval3",
      productId: "productId15",
      reviewerId: "userId33",
      rating: 5,
      comment:
        "This little guy is a blast! He makes learning about robotics fun and engaging.",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval4",
      productId: "productId15",
      reviewerId: "userId34",
      rating: 4,
      comment:
        "Really cool toy, but it can be a bit pricey. Still worth it for the educational value!",
      createdAt: new Date(),
      likes: [],
    },
  ],
  productId16: [
    {
      evaluationId: "eval5",
      productId: "productId16",
      reviewerId: "userId35",
      rating: 5,
      comment:
        "My kids love this robot dog! It's so realistic and interacts well. Great choice for any child!",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval6",
      productId: "productId16",
      reviewerId: "userId36",
      rating: 4,
      comment:
        "Very entertaining! The sensors work well, but I wish the battery lasted longer.",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval7",
      productId: "productId16",
      reviewerId: "userId37",
      rating: 4,
      comment:
        "Cute and interactive toy! My daughter enjoys playing with it, but it can get a bit noisy.",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval8",
      productId: "productId16",
      reviewerId: "userId38",
      rating: 5,
      comment:
        "An excellent companion for my son! The features are impressive for the price.",
      createdAt: new Date(),
      likes: [],
    },
  ],
  productIdJuicero: [
    {
      evaluationId: "eval1",
      productId: "productIdJuicero",
      reviewerId: "userId1",
      rating: 5,
      comment:
        "Absolutely love this juicer! It makes the best cold-pressed juice and is super easy to use.",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval2",
      productId: "productIdJuicero",
      reviewerId: "userId2",
      rating: 4,
      comment:
        "Great product, but I wish it had a larger capacity. Overall, a solid investment for health enthusiasts.",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval3",
      productId: "productIdJuicero",
      reviewerId: "userId3",
      rating: 4,
      comment:
        "Very sleek design and easy to clean. The juice quality is top-notch!",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval4",
      productId: "productIdJuicero",
      reviewerId: "userId4",
      rating: 5,
      comment:
        "This juicer has transformed my morning routine! The juice is delicious and fresh every time.",
      createdAt: new Date(),
      likes: [],
    },
  ],
  productIdBreezeE: [
    {
      evaluationId: "eval1",
      productId: "productIdBreezeE",
      reviewerId: "userId41",
      rating: 5,
      comment:
        "Absolutely love the Breeze-E! It circulates air quietly and effectively. Best purchase for the summer!",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval2",
      productId: "productIdBreezeE",
      reviewerId: "userId42",
      rating: 4,
      comment:
        "Great fan! Very sleek design, but I wish it had more speed settings.",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval3",
      productId: "productIdBreezeE",
      reviewerId: "userId43",
      rating: 4,
      comment:
        "It's very quiet and fits perfectly in my office. I recommend it for anyone looking for a stylish fan.",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval4",
      productId: "productIdBreezeE",
      reviewerId: "userId44",
      rating: 5,
      comment:
        "This airless fan is a game changer! It works beautifully and looks amazing in my living room.",
      createdAt: new Date(),
      likes: [],
    },
  ],
  productIdEaseE: [
    {
      evaluationId: "eval9",
      productId: "productIdEaseE",
      reviewerId: "userId45",
      rating: 5,
      comment:
        "This blender has changed my meal prep game! The smart features are incredibly useful.",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval10",
      productId: "productIdEaseE",
      reviewerId: "userId46",
      rating: 4,
      comment:
        "Really good blender! It blends smoothies perfectly, but it's a bit noisy.",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval11",
      productId: "productIdEaseE",
      reviewerId: "userId47",
      rating: 4,
      comment:
        "Great performance and easy to clean. I love the multiple blending modes!",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval12",
      productId: "productIdEaseE",
      reviewerId: "userId48",
      rating: 5,
      comment:
        "Fantastic blender! I can make everything from smoothies to soups effortlessly.",
      createdAt: new Date(),
      likes: [],
    },
  ],
  productId7: [
    {
      evaluationId: "eval13",
      productId: "productId7",
      reviewerId: "userId49",
      rating: 4,
      comment:
        "Great frying pan! Non-stick surface works well for eggs and pancakes.",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval14",
      productId: "productId7",
      reviewerId: "userId50",
      rating: 5,
      comment:
        "Very lightweight and easy to handle. Perfect for everyday cooking.",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval15",
      productId: "productId7",
      reviewerId: "userId51",
      rating: 3,
      comment: "It's good, but I expected better heat distribution.",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval16",
      productId: "productId7",
      reviewerId: "userId52",
      rating: 4,
      comment: "Nice pan for the price! The non-stick feature is a big plus.",
      createdAt: new Date(),
      likes: [],
    },
  ],
  productId8: [
    {
      evaluationId: "eval17",
      productId: "productId8",
      reviewerId: "userId53",
      rating: 5,
      comment:
        "Absolutely love this cookware set! It's stylish and cooks evenly.",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval18",
      productId: "productId8",
      reviewerId: "userId54",
      rating: 4,
      comment:
        "Great quality for the price. They heat up quickly and clean easily.",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval19",
      productId: "productId8",
      reviewerId: "userId55",
      rating: 4,
      comment: "Durable and functional. I use them daily without any issues.",
      createdAt: new Date(),
      likes: [],
    },
    {
      evaluationId: "eval20",
      productId: "productId8",
      reviewerId: "userId56",
      rating: 3,
      comment: "Nice cookware, but I wish they were a bit heavier.",
      createdAt: new Date(),
      likes: [],
    },
  ],
};

const DEFAULT_ORDER_PROGRESS: Record<
  ShipmentProgressType,
  ProductShipmentProgress
> = {
  ORDER_PLACED: {
    type: "ORDER_PLACED",
    date: null,
  },
  PAYMENT_CONFIRMED: {
    type: "PAYMENT_CONFIRMED",
    date: null,
  },
  SHIPPED_OUT: {
    type: "SHIPPED_OUT",
    date: null,
  },
  RECEIVED: {
    type: "RECEIVED",
    date: null,
  },
  COMPLETED: {
    type: "COMPLETED",
    date: null,
  },
};

export { PRODUCT_EVALUATIONS, DEFAULT_ORDER_PROGRESS };
