import { IProduct } from "@/interfaces/user/user.product.interface";

const BUSINESS_PRODUCTS: Record<string, IProduct[]> = {
  businessId1: [
    {
      productId: "productId9",
      deliveryTime: "30 minutes",
      businessId: "businessId1", // Food Industry
      ownerId: "userId1",
      name: "Bugerinator",
      description:
        "Indulge in the ultimate burger experience with Bugerinator. These burgers are crafted with juicy patties, fresh vegetables, and delectable sauces that will tantalize your taste buds. Perfect for a hearty meal or a quick snack, each bite is sure to satisfy your cravings.",
      tags: ["burger", "food", "delicious"],
      category: "Food",
      price: 200, // 299 USD converted to PHP
      discount: 0.1, // 10% discount in decimal
      coverImage:
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981462/my-uploads/nextgen/commons/food/1/foodburgerbanner_bflqk6.jpg",
      images: [
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981462/my-uploads/nextgen/commons/food/1/Cheeseburger-3d7c922_krkcyk.jpg",
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981462/my-uploads/nextgen/commons/food/1/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b_q6oifz.jpg",
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981462/my-uploads/nextgen/commons/food/1/Ultimate-Veggie-Burgers-FT-Recipe-0821-5d7532c53a924a7298d2175cf1d4219f_p0g732.jpg",
      ],
      ratings: 4.7,
      specifications: [
        {
          attribute: "Ingredients",
          value: "Beef, Lettuce, Tomato, Cheese, Sauce",
        },
        { attribute: "Serving Size", value: "1 Burger" },
        { attribute: "Calories", value: "500" },
        { attribute: "Allergens", value: "Dairy, Gluten" },
      ],
      createdAt: new Date(),
      isFeatured: false,
      deliveryLocation: "Metro Manila",
      productIntention:
        "This burger is sent out for testing to gauge consumer response to a new flavor profile aimed at fast food chains and gourmet burger joints.",
      faqs: [
        {
          productId: "productId9",
          questions: "What type of beef is used in Bugerinator?",
          answer:
            "Bugerinator uses 100% all-natural beef, sourced locally to ensure freshness and quality in every bite.",
        },
        {
          productId: "productId9",
          questions: "Does Bugerinator offer vegetarian options?",
          answer:
            "Yes, Bugerinator includes a veggie version with a plant-based patty made from a blend of vegetables and legumes.",
        },
        {
          productId: "productId9",
          questions: "What sauces are included with the Bugerinator?",
          answer:
            "Bugerinator features our signature tangy house sauce, along with options for classic ketchup and mustard.",
        },
        {
          productId: "productId9",
          questions:
            "Is Bugerinator available for delivery outside Metro Manila?",
          answer:
            "Currently, Bugerinator is only available for delivery within Metro Manila. Expansion to other areas is planned soon.",
        },
        {
          productId: "productId9",
          questions: "Does Bugerinator contain allergens?",
          answer:
            "Yes, Bugerinator contains dairy and gluten, so please be cautious if you have allergies to these ingredients.",
        },
      ],
      addOns: [
        {
          productId: "productId9",
          header: "Extra Cheese",
          description:
            "Add an extra layer of melted cheese to your Bugerinator for that creamy goodness.",
          price: 30,
        },
        {
          productId: "productId9",
          header: "Bacon Upgrade",
          description: "Add crispy bacon strips for an extra savory crunch.",
          price: 40,
        },
        {
          productId: "productId9",
          header: "Double Patty",
          description:
            "Make your Bugerinator even heartier with an additional beef patty.",
          price: 60,
        },
        {
          productId: "productId9",
          header: "Spicy Sauce",
          description: "Switch to our spicy sauce for an extra kick of flavor.",
          price: 15,
        },
        {
          productId: "productId9",
          header: "Side of Fries",
          description: "Enjoy a side of crispy fries with your Bugerinator.",
          price: 50,
        },
      ],
      qualities: [
        {
          name: "Affordability",
          subtext: "Impacts Availability & Continuation",
          thoughts: [
            {
              name: "Expensive",
              value: 5,
            },
            {
              name: "Pricey",
              value: 4,
            },
            {
              name: "Reasonable",
              value: 3,
            },
            {
              name: "Affordable",
              value: 2,
            },
            {
              name: "Cheap",
              value: 1,
            },
          ],
        },
        {
          name: "Taste",
          thoughts: [
            {
              name: "Scrumptious",
              value: 5,
            },
            {
              name: "Delicious",
              value: 4,
            },
            {
              name: "Okay",
              value: 3,
            },
            {
              name: "Tolerable",
              value: 2,
            },
            {
              name: "Bad",
              value: 1,
            },
          ],
        },
        {
          name: "Texture",
          thoughts: [
            {
              name: "Smooth & Tender",
              value: 5,
            },
            {
              name: "Juicy",
              value: 4,
            },
            {
              name: "Firm",
              value: 3,
            },
            {
              name: "Grainy",
              value: 2,
            },
            {
              name: "Dry",
              value: 1,
            },
          ],
        },
        {
          name: "Presentation",
          thoughts: [
            {
              name: "Superb",
              value: 5,
            },
            {
              name: "Exceptional",
              value: 4,
            },
            {
              name: "Fine",
              value: 3,
            },
            {
              name: "Tolerable",
              value: 2,
            },
            {
              name: "Poor",
              value: 1,
            },
          ],
        },
      ],
    },
    {
      productId: "productId10",
      deliveryTime: "30 minutes",
      businessId: "businessId1", // Food Industry
      ownerId: "userId1",
      name: "HakDogs",
      description:
        "Enjoy a delightful twist on a classic favorite with HakDogs. These hotdogs are made from premium meats and seasoned to perfection. Whether grilled or steamed, they're the perfect addition to any gathering or quick meal.",
      tags: ["hotdog", "food", "snack"],
      category: "Food",
      price: 150, // 299 USD converted to PHP
      discount: 0.15, // 15% discount in decimal
      coverImage:
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981463/my-uploads/nextgen/commons/food/2/foodhotdogb_anner_ixwag9.jpg",
      images: [
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981463/my-uploads/nextgen/commons/food/2/thumb_720_450_dreamstime_xl_34122178-Custom_uup6g4.jpg",
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981463/my-uploads/nextgen/commons/food/2/l-intro-1675120855_vyv9hj.jpg",
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981463/my-uploads/nextgen/commons/food/2/Air-Fryer-Hot-Dog-square_mmr5mo.jpg",
      ],
      ratings: 4.5,
      qualities: [
        {
          name: "Affordability",
          subtext: "Impacts Availability & Continuation",
          thoughts: [
            { name: "Expensive", value: 5 },
            { name: "Pricey", value: 4 },
            { name: "Reasonable", value: 3 },
            { name: "Affordable", value: 2 },
            { name: "Cheap", value: 1 },
          ],
        },
        {
          name: "Taste",
          thoughts: [
            { name: "Scrumptious", value: 5 },
            { name: "Delicious", value: 4 },
            { name: "Okay", value: 3 },
            { name: "Tolerable", value: 2 },
            { name: "Bad", value: 1 },
          ],
        },
        {
          name: "Texture",
          thoughts: [
            { name: "Smooth & Tender", value: 5 },
            { name: "Juicy", value: 4 },
            { name: "Firm", value: 3 },
            { name: "Grainy", value: 2 },
            { name: "Dry", value: 1 },
          ],
        },
        {
          name: "Presentation",
          thoughts: [
            { name: "Superb", value: 5 },
            { name: "Exceptional", value: 4 },
            { name: "Fine", value: 3 },
            { name: "Tolerable", value: 2 },
            { name: "Poor", value: 1 },
          ],
        },
      ],
      specifications: [
        { attribute: "Ingredients", value: "Pork, Beef, Spices" },
        { attribute: "Serving Size", value: "1 Hotdog" },
        { attribute: "Calories", value: "300" },
        { attribute: "Allergens", value: "None" },
      ],
      createdAt: new Date(),
      isFeatured: false,
      deliveryLocation: "Metro Manila",
      productIntention:
        "This hotdog is being tested to assess its appeal as a quick, premium snack option for both casual meals and events.",
      faqs: [
        {
          productId: "productId10",
          questions: "What types of meat are used in HakDogs?",
          answer:
            "HakDogs are made from a blend of premium pork and beef, carefully seasoned for maximum flavor.",
        },
        {
          productId: "productId10",
          questions: "Can HakDogs be grilled or only steamed?",
          answer:
            "HakDogs can be prepared both grilled or steamed, offering flexibility for different tastes and preferences.",
        },
        {
          productId: "productId10",
          questions: "Are there any allergens in HakDogs?",
          answer:
            "HakDogs do not contain common allergens like dairy or gluten, making them a safe option for most consumers.",
        },
        {
          productId: "productId10",
          questions:
            "Is HakDogs available for delivery outside of Metro Manila?",
          answer:
            "Currently, HakDogs are only available for delivery within Metro Manila. Future plans may expand the delivery area.",
        },
        {
          productId: "productId10",
          questions: "What is the recommended way to serve HakDogs?",
          answer:
            "HakDogs are best served with traditional condiments like mustard and ketchup, but they also pair well with various sauces and toppings.",
        },
      ],
      addOns: [
        {
          productId: "productId10",
          header: "Extra Toppings",
          description:
            "Add your choice of toppings: onions, jalapeños, or relish for a burst of flavor.",
          price: 20,
        },
        {
          productId: "productId10",
          header: "Cheese Sauce",
          description:
            "Top your HakDog with creamy cheese sauce for an extra indulgent treat.",
          price: 25,
        },
        {
          productId: "productId10",
          header: "Combo with Fries",
          description:
            "Pair your HakDog with a side of crispy fries for a complete meal.",
          price: 75,
        },
        {
          productId: "productId10",
          header: "Grilled Option",
          description:
            "Choose a grilled HakDog for a smoky flavor and charred finish.",
          price: 10,
        },
        {
          productId: "productId10",
          header: "Ketchup & Mustard Pack",
          description:
            "Get a pack of our premium ketchup and mustard to enhance your hotdog experience.",
          price: 15,
        },
      ],
    },
  ],
  businessId2: [
    {
      productId: "productId1",
      businessId: "businessId2",
      deliveryTime: "2 - 7 days",
      ownerId: "userId3",
      name: "Roball",
      description:
        "Roball is a smart, interactive ball designed to keep your pets entertained and engaged. With advanced sensors and AI technology, it responds to your pet's movements, encouraging play and exercise. Whether it's chasing or fetching, Roball promotes a healthy and active lifestyle for your furry friends.",
      tags: ["smart", "pet", "gadget"],
      category: "Gadgets",
      price: 17099, // 299.99 USD converted to PHP (random value)
      discount: 0.1, // 10% discount expressed as a decimal
      coverImage:
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1729079618/my-uploads/nextgen/featured/ballie/samsung-balli-bildquelle-youtubesamsung-newsroom_6270029_ekiujx.jpg",
      images: [
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981467/my-uploads/nextgen/featured/ballie/Samsung_Ballie_CES-2024-11_keezfm.jpg",
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981467/my-uploads/nextgen/featured/ballie/Jan_SamsugnBAllie-1024x576_mxqxbd.jpg",
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981467/my-uploads/nextgen/featured/ballie/ces-samsungballie-clean_g3f7rn.png",
      ],
      ratings: 4.5,
      specifications: [
        { attribute: "Dimensions", value: "10cm x 10cm" },
        { attribute: "Material", value: "Plastic" },
        { attribute: "Color", value: "Blue" },
      ],
      createdAt: new Date(),
      isFeatured: true, // New property
      deliveryLocation: "North Luzon",
      faqs: [
        {
          productId: "productId1",
          questions: "What makes Roball different from other pet toys?",
          answer:
            "Roball uses advanced sensors and AI technology to interact with your pet, providing a more engaging play experience compared to traditional toys.",
        },
        {
          productId: "productId1",
          questions: "Is Roball suitable for all dog breeds?",
          answer:
            "Yes, Roball is designed to be safe and enjoyable for dogs of all breeds and sizes, although smaller pets may have more fun with it.",
        },
        {
          productId: "productId1",
          questions: "How does Roball charge?",
          answer:
            "Roball comes with a USB charging cable and can be easily charged by connecting it to any USB power source.",
        },
        {
          productId: "productId1",
          questions: "Can I customize the play settings on Roball?",
          answer:
            "Yes, Roball offers customizable settings through its app, allowing you to adjust the sensitivity and response levels based on your pet's preferences.",
        },
        {
          productId: "productId1",
          questions: "Is Roball waterproof?",
          answer:
            "Roball is splash-resistant, but it is not fully waterproof. It's best to keep it away from water to ensure longevity.",
        },
      ],
      addOns: [
        {
          productId: "productId1",
          header: "Extra Charging Cable",
          description:
            "Keep your Roball charged and ready to go with an extra USB charging cable.",
          price: 499,
        },
        {
          productId: "productId1",
          header: "Pet Treats",
          description:
            "A selection of healthy treats to reward your pet while they play with Roball.",
          price: 299,
        },
        {
          productId: "productId1",
          header: "Protective Case",
          description:
            "A durable case to keep your Roball safe during playtime and travel.",
          price: 799,
        },
      ],
      qualities: [
        {
          name: "Affordability",
          subtext: "Impacts Availability & Continuation",
          thoughts: [
            { name: "Expensive", value: 5 },
            { name: "Pricey", value: 4 },
            { name: "Reasonable", value: 3 },
            { name: "Affordable", value: 2 },
            { name: "Cheap", value: 1 },
          ],
        },
        {
          name: "Durability",
          subtext: "Ability to Withstand Frequent Use",
          thoughts: [
            { name: "Extremely Durable", value: 5 },
            { name: "Very Durable", value: 4 },
            { name: "Moderately Durable", value: 3 },
            { name: "Fragile", value: 2 },
            { name: "Breaks Easily", value: 1 },
          ],
        },
        {
          name: "Performance",
          subtext: "Efficiency & Response to Pet Interactions",
          thoughts: [
            { name: "Exceptional", value: 5 },
            { name: "Very Good", value: 4 },
            { name: "Adequate", value: 3 },
            { name: "Inconsistent", value: 2 },
            { name: "Poor", value: 1 },
          ],
        },
        {
          name: "Ease of Use",
          subtext: "User-Friendliness for Both Pets & Owners",
          thoughts: [
            { name: "Extremely User-Friendly", value: 5 },
            { name: "Very Easy to Use", value: 4 },
            { name: "Average", value: 3 },
            { name: "Difficult to Use", value: 2 },
            { name: "Complicated", value: 1 },
          ],
        },
        {
          name: "Battery Life",
          subtext: "Duration of Play Before Needing a Charge",
          thoughts: [
            { name: "Long-Lasting", value: 5 },
            { name: "Above Average", value: 4 },
            { name: "Moderate", value: 3 },
            { name: "Short-Lived", value: 2 },
            { name: "Needs Constant Charging", value: 1 },
          ],
        },
      ],
      productIntention:
        "Roball is currently being tested as a smart pet companion designed to enhance the play and exercise experience for pets, while offering pet owners a reliable gadget to keep their furry friends entertained.",
    },
    {
      productId: "productidIdontfuckingknow",
      businessId: "businessId2",
      ownerId: "userId3",
      name: "BunnyR1",
      description:
        "BunnyR1 is an engaging robotic companion designed to provide endless fun and entertainment for children. With its interactive features, BunnyR1 can respond to voice commands and perform playful actions, making it a perfect playmate. This robot not only promotes creativity and imagination but also helps kids develop social skills through interactive play, creating memorable experiences for young users.",
      tags: ["robot", "interactive", "toy"],
      category: "Gadgets",
      deliveryTime: "2 - 7 days",
      price: 7399, // 129.99 USD converted to PHP (random value)
      discount: 0.2, // 20% discount expressed as a decimal
      coverImage:
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981470/my-uploads/nextgen/featured/rabbitr1/banner_hd3jze.png",
      images: [
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981470/my-uploads/nextgen/featured/rabbitr1/Rabbit-R1_vazadm.jpg",
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981470/my-uploads/nextgen/featured/rabbitr1/gear-rabbit_r1_back_v0cjut.png",
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981469/my-uploads/nextgen/featured/rabbitr1/gear-r1_USB-C_SIM_rejsnk.png",
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981469/my-uploads/nextgen/featured/rabbitr1/65a1268cdcdb354a985704d9_o0q2dm.png",
      ],
      ratings: 4.5,
      specifications: [
        { attribute: "Battery Life", value: "10 hours" },
        { attribute: "Weight", value: "1.5 kg" },
        { attribute: "Color", value: "Orange" },
      ],
      createdAt: new Date(),
      isFeatured: true, // New property
      deliveryLocation: "North Luzon",
      faqs: [
        {
          productId: "productidIdontfuckingknow",
          questions: "What age group is BunnyR1 suitable for?",
          answer: "BunnyR1 is designed for children aged 5 and above.",
        },
        {
          productId: "productidIdontfuckingknow",
          questions: "How does BunnyR1 respond to commands?",
          answer:
            "BunnyR1 uses voice recognition technology to respond to simple voice commands.",
        },
        {
          productId: "productidIdontfuckingknow",
          questions: "What is the battery life of BunnyR1?",
          answer:
            "BunnyR1 has a battery life of up to 10 hours on a full charge.",
        },
        {
          productId: "productidIdontfuckingknow",
          questions: "Is BunnyR1 safe for children?",
          answer:
            "Yes, BunnyR1 is made from non-toxic materials and is designed with safety in mind.",
        },
      ],
      qualities: [
        {
          name: "Affordability",
          subtext: "Impacts Availability & Continuation",
          thoughts: [
            { name: "Expensive", value: 5 },
            { name: "Pricey", value: 4 },
            { name: "Reasonable", value: 3 },
            { name: "Affordable", value: 2 },
            { name: "Cheap", value: 1 },
          ],
        },
        {
          name: "Durability",
          subtext: "Ability to Withstand Frequent Use by Children",
          thoughts: [
            { name: "Extremely Durable", value: 5 },
            { name: "Very Durable", value: 4 },
            { name: "Moderately Durable", value: 3 },
            { name: "Fragile", value: 2 },
            { name: "Breaks Easily", value: 1 },
          ],
        },
        {
          name: "Interactivity",
          subtext: "Responsiveness to Commands & Play",
          thoughts: [
            { name: "Highly Interactive", value: 5 },
            { name: "Very Interactive", value: 4 },
            { name: "Moderately Interactive", value: 3 },
            { name: "Limited Interaction", value: 2 },
            { name: "Barely Interactive", value: 1 },
          ],
        },
        {
          name: "Battery Life",
          subtext: "Duration of Use Before Needing a Recharge",
          thoughts: [
            { name: "Long-Lasting", value: 5 },
            { name: "Above Average", value: 4 },
            { name: "Moderate", value: 3 },
            { name: "Short-Lived", value: 2 },
            { name: "Needs Constant Charging", value: 1 },
          ],
        },
        {
          name: "Innovation",
          subtext: "Creativity and Novelty of Features",
          thoughts: [
            { name: "Highly Innovative", value: 5 },
            { name: "Very Innovative", value: 4 },
            { name: "Moderately Innovative", value: 3 },
            { name: "Somewhat Innovative", value: 2 },
            { name: "Not Innovative", value: 1 },
          ],
        },
      ],
      productIntention:
        "BunnyR1 is being tested to gauge its effectiveness as a playful robot companion for children, aimed at enhancing interactive play and learning in the tech-toy market.",
      addOns: [
        {
          productId: "productidIdontfuckingknow",
          header: "Voice Command Training",
          description:
            "Enhance your BunnyR1's capabilities with advanced voice command training sessions.",
          price: 1499,
        },
        {
          productId: "productidIdontfuckingknow",
          header: "Rechargeable Batteries",
          description:
            "Spare rechargeable batteries to keep BunnyR1 powered for hours of fun.",
          price: 899,
        },
        {
          productId: "productidIdontfuckingknow",
          header: "Accessory Pack",
          description:
            "A fun pack of accessories to customize your BunnyR1's appearance.",
          price: 599,
        },
      ],
    },
    {
      productId: "productId3",
      businessId: "businessId2",
      ownerId: "userId3",
      name: "LightPhone",
      description:
        "The LightPhone is designed for those who want to simplify their lives and disconnect from constant notifications. With its minimalist design and essential features, this phone encourages users to embrace the moment without distractions. Enjoy the freedom of communication without the overwhelming presence of a smartphone, making it a perfect companion for anyone seeking a more mindful lifestyle.",
      tags: ["minimalist", "phone", "technology"],
      category: "Gadgets",
      deliveryTime: "2 - 7 days",
      price: 11399, // 199.99 USD converted to PHP (random value)
      discount: 0.05, // 5% discount expressed as a decimal
      coverImage:
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981468/my-uploads/nextgen/featured/lightphone/bannerrightphone_tfln5e.jpg",
      images: [
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981468/my-uploads/nextgen/featured/lightphone/07JmB1KpE7lo7H6Wx2zynsA-17_xcht8o.png",
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981469/my-uploads/nextgen/featured/lightphone/lightphone-3-1621854986_vudxqv.png",
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981470/my-uploads/nextgen/featured/lightphone/redcover2_ycodxw.png",
      ],
      ratings: 4.7,
      specifications: [
        { attribute: "Display", value: "5.0 inches" },
        { attribute: "Battery", value: "3000 mAh" },
        { attribute: "Weight", value: "140g" },
      ],
      createdAt: new Date(),
      isFeatured: true, // New property
      deliveryLocation: "Visayas",
      faqs: [
        {
          productId: "productId3",
          questions: "What features does the LightPhone offer?",
          answer:
            "The LightPhone offers essential communication features like calls and texts, without the distractions of a smartphone.",
        },
        {
          productId: "productId3",
          questions: "Is the LightPhone suitable for children?",
          answer:
            "Yes, the LightPhone is a great choice for children who need a phone for communication without the distractions of apps and games.",
        },
        {
          productId: "productId3",
          questions: "How long does the battery last on the LightPhone?",
          answer:
            "The LightPhone has a battery life of up to 3000 mAh, lasting a full day on average use.",
        },
        {
          productId: "productId3",
          questions: "Can I use the LightPhone for emergency calls?",
          answer:
            "Yes, the LightPhone can be used for emergency calls, just like any other mobile phone.",
        },
        {
          productId: "productId3",
          questions: "What is the warranty period for the LightPhone?",
          answer:
            "The LightPhone comes with a one-year warranty covering manufacturing defects.",
        },
      ],
      addOns: [
        {
          productId: "productId3",
          header: "Screen Protector",
          description:
            "Protect your LightPhone's screen with a durable, high-quality screen protector.",
          price: 300,
        },
        {
          productId: "productId3",
          header: "Charging Dock",
          description:
            "A sleek charging dock for convenient charging and display of your LightPhone.",
          price: 1200,
        },
        {
          productId: "productId3",
          header: "Customized Skin",
          description:
            "Personalize your LightPhone with a customized skin for a unique look.",
          price: 600,
        },
        {
          productId: "productId3",
          header: "Bluetooth Headset",
          description:
            "Wireless Bluetooth headset for hands-free calling and music enjoyment.",
          price: 1500,
        },
      ],
      qualities: [
        {
          name: "Affordability",
          subtext: "Impacts Availability & Continuation",
          thoughts: [
            { name: "Expensive", value: 5 },
            { name: "Pricey", value: 4 },
            { name: "Reasonable", value: 3 },
            { name: "Affordable", value: 2 },
            { name: "Cheap", value: 1 },
          ],
        },
        {
          name: "Simplicity",
          subtext: "Ease of Use and Minimalist Design",
          thoughts: [
            { name: "Extremely Simple", value: 5 },
            { name: "Very Simple", value: 4 },
            { name: "Moderately Simple", value: 3 },
            { name: "Somewhat Complex", value: 2 },
            { name: "Very Complex", value: 1 },
          ],
        },
        {
          name: "Battery Life",
          subtext: "Duration of Use Before Needing a Recharge",
          thoughts: [
            { name: "Long-Lasting", value: 5 },
            { name: "Above Average", value: 4 },
            { name: "Moderate", value: 3 },
            { name: "Short-Lived", value: 2 },
            { name: "Needs Constant Charging", value: 1 },
          ],
        },
        {
          name: "Innovation",
          subtext: "Creativity and Novelty of Features",
          thoughts: [
            { name: "Highly Innovative", value: 5 },
            { name: "Very Innovative", value: 4 },
            { name: "Moderately Innovative", value: 3 },
            { name: "Somewhat Innovative", value: 2 },
            { name: "Not Innovative", value: 1 },
          ],
        },
        {
          name: "Usability",
          subtext: "User-Friendliness and Accessibility",
          thoughts: [
            { name: "Extremely Usable", value: 5 },
            { name: "Very Usable", value: 4 },
            { name: "Moderately Usable", value: 3 },
            { name: "Somewhat Usable", value: 2 },
            { name: "Not Usable", value: 1 },
          ],
        },
      ],
      productIntention:
        "LightPhone is being tested to understand its appeal among users seeking a minimalist approach to mobile technology, catering to those who prioritize disconnection from constant notifications.",
    },
    {
      productId: "productId4",
      businessId: "businessId2",
      ownerId: "userId3",
      name: "MyPettyPlant",
      description:
        "MyPettyPlant is an innovative high-tech pot that takes plant care to the next level. Equipped with smart sensors, it monitors soil moisture, light, and temperature to ensure your plant thrives in its environment. With its user-friendly app, you can receive alerts and guidance, making plant parenting easy and enjoyable, so you can cultivate your green thumb with confidence.",
      tags: ["plant", "technology", "smart"],
      category: "Gadgets",
      deliveryTime: "2 - 7 days",
      price: 8499, // 149.99 USD converted to PHP (random value)
      discount: 0.1, // 10% discount expressed as a decimal
      coverImage:
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981469/my-uploads/nextgen/featured/plantsio/plantsiobanner_j6dclg.png",
      images: [
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981469/my-uploads/nextgen/featured/plantsio/tg1mjitnkee3wteientb_vhnmuy.png",
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981469/my-uploads/nextgen/featured/plantsio/kf8igcjb0fkgfplydjhb_ioegpr.png",
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981469/my-uploads/nextgen/featured/plantsio/51pGPmIyIcL._AC_UF1000_1000_QL80__m0mrrd.jpg",
      ],
      ratings: 4.2,
      specifications: [
        { attribute: "Dimensions", value: "30cm x 30cm" },
        { attribute: "Material", value: "Ceramic" },
        { attribute: "Water Capacity", value: "1 liter" },
      ],
      createdAt: new Date(),
      isFeatured: true, // New property
      deliveryLocation: "Visayas",
      faqs: [
        {
          productId: "productId4",
          questions: "What makes MyPettyPlant different from regular pots?",
          answer:
            "MyPettyPlant is equipped with smart sensors that monitor soil moisture, light, and temperature, ensuring optimal plant care.",
        },
        {
          productId: "productId4",
          questions: "How does the MyPettyPlant app work?",
          answer:
            "The app provides alerts and guidance based on the environmental conditions, helping you take care of your plant effortlessly.",
        },
        {
          productId: "productId4",
          questions: "What type of plants can I use with MyPettyPlant?",
          answer:
            "You can use MyPettyPlant with a variety of indoor plants that thrive in monitored conditions.",
        },
        {
          productId: "productId4",
          questions: "Is MyPettyPlant easy to set up?",
          answer:
            "Yes, MyPettyPlant is designed for easy setup, and the app guides you through the process.",
        },
        {
          productId: "productId4",
          questions: "What are the dimensions of MyPettyPlant?",
          answer:
            "MyPettyPlant measures 30cm x 30cm, making it suitable for various indoor spaces.",
        },
      ],
      addOns: [
        {
          productId: "productId4",
          header: "Plant Care Kit",
          description:
            "A comprehensive kit with fertilizers and tools to ensure your plants thrive.",
          price: 750,
        },
        {
          productId: "productId4",
          header: "Smart App Subscription",
          description:
            "Unlock premium features in the app for advanced plant care insights.",
          price: 500,
        },
        {
          productId: "productId4",
          header: "Additional Sensor Module",
          description:
            "Expand monitoring capabilities with an extra sensor module for humidity tracking.",
          price: 1200,
        },
      ],
      qualities: [
        {
          name: "Innovation",
          subtext: "Creativity and Novelty of Features",
          thoughts: [
            { name: "Highly Innovative", value: 5 },
            { name: "Very Innovative", value: 4 },
            { name: "Moderately Innovative", value: 3 },
            { name: "Somewhat Innovative", value: 2 },
            { name: "Not Innovative", value: 1 },
          ],
        },
        {
          name: "Ease of Use",
          subtext: "User-Friendly Design and App Integration",
          thoughts: [
            { name: "Extremely Easy", value: 5 },
            { name: "Very Easy", value: 4 },
            { name: "Moderately Easy", value: 3 },
            { name: "Somewhat Difficult", value: 2 },
            { name: "Very Difficult", value: 1 },
          ],
        },
        {
          name: "Affordability",
          subtext: "Impacts Availability & Continuation",
          thoughts: [
            { name: "Expensive", value: 5 },
            { name: "Pricey", value: 4 },
            { name: "Reasonable", value: 3 },
            { name: "Affordable", value: 2 },
            { name: "Cheap", value: 1 },
          ],
        },
        {
          name: "Functionality",
          subtext: "Effectiveness in Plant Care and Monitoring",
          thoughts: [
            { name: "Highly Functional", value: 5 },
            { name: "Very Functional", value: 4 },
            { name: "Moderately Functional", value: 3 },
            { name: "Somewhat Functional", value: 2 },
            { name: "Not Functional", value: 1 },
          ],
        },
        {
          name: "Design",
          subtext: "Aesthetic Appeal and Practicality",
          thoughts: [
            { name: "Beautiful Design", value: 5 },
            { name: "Very Attractive", value: 4 },
            { name: "Moderately Appealing", value: 3 },
            { name: "Somewhat Unappealing", value: 2 },
            { name: "Poor Design", value: 1 },
          ],
        },
      ],
      productIntention:
        "MyPettyPlant is being tested as a smart planter solution for tech-savvy plant enthusiasts, aiming to simplify plant care with smart features that monitor environmental conditions.",
    },
    {
      productId: "productIdWatch6",
      businessId: "businessId2", // Assuming businessId2 is for Tech/Gadgets
      ownerId: "userId3",
      name: "Watch6",
      description:
        "The Watch6 is a smart watch from Samsung that combines style with advanced health and fitness tracking features. With its sleek design and cutting-edge technology, it's perfect for anyone looking to monitor their health and stay connected throughout the day.",
      tags: ["smart watch", "Samsung", "technology"],
      category: "Gadgets",
      deliveryTime: "2 - 7 days",
      price: 19949, // 349.99 USD converted to PHP (random value)
      discount: 0.15, // 15% discount expressed as a decimal
      coverImage:
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981459/my-uploads/nextgen/commons/accessories/2/watch6banner_mvznvy.jpg",
      images: [
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981459/my-uploads/nextgen/commons/accessories/2/watch6_1_dncsbs.jpg",
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981459/my-uploads/nextgen/commons/accessories/2/watch6_2_auzcvf.jpg",
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981459/my-uploads/nextgen/commons/accessories/2/watch6_3_b7ax6d.jpg",
      ],
      ratings: 4.8,
      specifications: [
        { attribute: "Display", value: "1.4 inches" },
        { attribute: "Battery Life", value: "40 hours" },
        { attribute: "Water Resistance", value: "IP68" },
      ],
      createdAt: new Date(),
      isFeatured: false, // New property
      deliveryLocation: "Mindanao",
      faqs: [
        {
          productId: "productIdWatch6",
          questions: "What health features does the Watch6 offer?",
          answer:
            "The Watch6 provides heart rate monitoring, sleep tracking, and fitness activity tracking.",
        },
        {
          productId: "productIdWatch6",
          questions: "Is the Watch6 compatible with both Android and iOS?",
          answer:
            "Yes, the Watch6 can be paired with both Android and iOS devices for notifications and syncing.",
        },
        {
          productId: "productIdWatch6",
          questions: "What is the battery life of the Watch6?",
          answer:
            "The Watch6 has a battery life of up to 40 hours on a single charge.",
        },
        {
          productId: "productIdWatch6",
          questions: "Can the Watch6 withstand water?",
          answer:
            "Yes, the Watch6 is rated IP68 for water resistance, making it suitable for swimming.",
        },
        {
          productId: "productIdWatch6",
          questions: "Does the Watch6 have customizable watch faces?",
          answer:
            "Yes, you can customize watch faces according to your style and preferences.",
        },
      ],
      addOns: [
        {
          productId: "productIdWatch6",
          header: "Sport Strap",
          description:
            "A durable sport strap for your Watch6, perfect for workouts and outdoor activities.",
          price: 600,
        },
        {
          productId: "productIdWatch6",
          header: "Wireless Charger",
          description:
            "Convenient wireless charger for hassle-free charging of your Watch6.",
          price: 800,
        },
        {
          productId: "productIdWatch6",
          header: "Screen Protector",
          description:
            "High-quality screen protector to keep your Watch6 display scratch-free.",
          price: 300,
        },
      ],
      qualities: [
        {
          name: "Innovation",
          subtext: "Advanced Health and Fitness Tracking Features",
          thoughts: [
            { name: "Highly Innovative", value: 5 },
            { name: "Very Innovative", value: 4 },
            { name: "Moderately Innovative", value: 3 },
            { name: "Somewhat Innovative", value: 2 },
            { name: "Not Innovative", value: 1 },
          ],
        },
        {
          name: "Design",
          subtext: "Stylish and Modern Aesthetic",
          thoughts: [
            { name: "Beautiful Design", value: 5 },
            { name: "Very Attractive", value: 4 },
            { name: "Moderately Appealing", value: 3 },
            { name: "Somewhat Unappealing", value: 2 },
            { name: "Poor Design", value: 1 },
          ],
        },
        {
          name: "Functionality",
          subtext: "Effectiveness in Health Monitoring and Connectivity",
          thoughts: [
            { name: "Highly Functional", value: 5 },
            { name: "Very Functional", value: 4 },
            { name: "Moderately Functional", value: 3 },
            { name: "Somewhat Functional", value: 2 },
            { name: "Not Functional", value: 1 },
          ],
        },
        {
          name: "Ease of Use",
          subtext: "User-Friendly Interface and Compatibility",
          thoughts: [
            { name: "Extremely Easy", value: 5 },
            { name: "Very Easy", value: 4 },
            { name: "Moderately Easy", value: 3 },
            { name: "Somewhat Difficult", value: 2 },
            { name: "Very Difficult", value: 1 },
          ],
        },
        {
          name: "Affordability",
          subtext: "Impacts Availability & Continuation",
          thoughts: [
            { name: "Expensive", value: 5 },
            { name: "Pricey", value: 4 },
            { name: "Reasonable", value: 3 },
            { name: "Affordable", value: 2 },
            { name: "Cheap", value: 1 },
          ],
        },
      ],
      productIntention:
        "Watch6 is being tested as an advanced health and fitness companion with stylish design and cutting-edge features, targeting users who seek both connectivity and wellness monitoring.",
    },
    {
      productId: "productId11",
      businessId: "businessId2", // Tech/Gadgets Industry
      ownerId: "userId3",
      name: "PowerBanker",
      description:
        "PowerBanker is a high-tech power bank designed for efficiency and portability. It features fast charging capabilities to keep your devices powered up on the go. With a sleek design and a robust battery, this power bank is an essential accessory for anyone who needs reliable power.",
      tags: ["power bank", "tech", "gadget"],
      category: "Gadgets",
      deliveryTime: "2 - 7 days",
      price: 800, // 30 USD converted to PHP
      discount: 0.15, // 5% discount in decimal
      coverImage:
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981464/my-uploads/nextgen/commons/gadgets/1/powerbankerbanner_pyfi7y.jpg",
      images: [
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981463/my-uploads/nextgen/commons/gadgets/1/A1654H11_srotax.webp",
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981463/my-uploads/nextgen/commons/gadgets/1/A1654061_1_1800x_k0fymk.webp",
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981463/my-uploads/nextgen/commons/gadgets/1/A1654031_1800x_mca80j.webp",
      ],
      ratings: 4.6,
      specifications: [
        { attribute: "Capacity", value: "20,000 mAh" },
        { attribute: "Input", value: "Type-C, Micro USB" },
        { attribute: "Output", value: "USB-A, USB-C" },
      ],
      createdAt: new Date(),
      isFeatured: false,
      deliveryLocation: "Mindanao",
      faqs: [
        {
          productId: "productId11",
          questions: "What is the charging capacity of the PowerBanker?",
          answer:
            "The PowerBanker has a capacity of 20,000 mAh, allowing multiple charges for your devices.",
        },
        {
          productId: "productId11",
          questions:
            "How many devices can the PowerBanker charge simultaneously?",
          answer:
            "The PowerBanker can charge up to three devices at the same time with its multiple output ports.",
        },
        {
          productId: "productId11",
          questions: "Is the PowerBanker lightweight?",
          answer:
            "Yes, it is designed for portability and is lightweight enough to carry easily.",
        },
        {
          productId: "productId11",
          questions: "What types of devices can I charge with the PowerBanker?",
          answer:
            "You can charge smartphones, tablets, and other USB-powered devices using the PowerBanker.",
        },
        {
          productId: "productId11",
          questions: "Does the PowerBanker come with a warranty?",
          answer:
            "Yes, the PowerBanker comes with a one-year warranty covering manufacturing defects.",
        },
      ],
      addOns: [
        {
          productId: "productId11",
          header: "Extra USB-C Cable",
          description:
            "High-speed USB-C cable for efficient charging and data transfer.",
          price: 300,
        },
        {
          productId: "productId11",
          header: "Travel Pouch",
          description:
            "Compact travel pouch for carrying your PowerBanker and accessories.",
          price: 250,
        },
        {
          productId: "productId11",
          header: "LED Flashlight Attachment",
          description:
            "Attachable LED flashlight for added convenience in low-light situations.",
          price: 400,
        },
      ],
      qualities: [
        {
          name: "Battery Life",
          subtext: "Long-Lasting Performance with 20,000 mAh Capacity",
          thoughts: [
            { name: "Exceptional Battery Life", value: 5 },
            { name: "Very Good Battery Life", value: 4 },
            { name: "Moderate Battery Life", value: 3 },
            { name: "Somewhat Short Battery Life", value: 2 },
            { name: "Poor Battery Life", value: 1 },
          ],
        },
        {
          name: "Design",
          subtext: "Sleek and Portable Aesthetic",
          thoughts: [
            { name: "Beautiful Design", value: 5 },
            { name: "Very Attractive", value: 4 },
            { name: "Moderately Appealing", value: 3 },
            { name: "Somewhat Unappealing", value: 2 },
            { name: "Poor Design", value: 1 },
          ],
        },
        {
          name: "Functionality",
          subtext: "Effectiveness in Charging Multiple Devices",
          thoughts: [
            { name: "Highly Functional", value: 5 },
            { name: "Very Functional", value: 4 },
            { name: "Moderately Functional", value: 3 },
            { name: "Somewhat Functional", value: 2 },
            { name: "Not Functional", value: 1 },
          ],
        },
        {
          name: "Ease of Use",
          subtext: "User-Friendly and Convenient",
          thoughts: [
            { name: "Extremely Easy", value: 5 },
            { name: "Very Easy", value: 4 },
            { name: "Moderately Easy", value: 3 },
            { name: "Somewhat Difficult", value: 2 },
            { name: "Very Difficult", value: 1 },
          ],
        },
        {
          name: "Affordability",
          subtext: "Impacts Availability & Continuation",
          thoughts: [
            { name: "Expensive", value: 5 },
            { name: "Pricey", value: 4 },
            { name: "Reasonable", value: 3 },
            { name: "Affordable", value: 2 },
            { name: "Cheap", value: 1 },
          ],
        },
      ],
      productIntention:
        "PowerBanker is currently in testing as a sleek, high-capacity power bank, designed for efficient portable charging with fast-charge capabilities.",
    },
    {
      productId: "productId12",
      businessId: "businessId2", // Tech/Gadgets Industry
      ownerId: "userId3",
      name: "Flashlite",
      description:
        "Flashlite is a versatile flashlight that can easily transform into a lamp. With powerful LED technology, it provides bright illumination for any situation, whether you're camping or during power outages. Its compact design makes it easy to carry, ensuring you have light wherever you go.",
      tags: ["flashlight", "lamp", "tech"],
      category: "Gadgets",
      deliveryTime: "2 - 7 days",
      price: 1000, // 30 USD converted to PHP
      discount: 0.3, // 10% discount in decimal
      coverImage:
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981464/my-uploads/nextgen/commons/gadgets/2/flashlitebanner_prfkpz.webp",
      images: [
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981464/my-uploads/nextgen/commons/gadgets/2/hoto-flashlight-fener-lite-4a55b4_kuqhef.jpg",
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981464/my-uploads/nextgen/commons/gadgets/2/hoto-flashlight-lite-001_nvyopz.webp",
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981465/my-uploads/nextgen/commons/gadgets/2/hoto-flashlight-lite-3_1200x1200_v3gaww.webp",
      ],
      ratings: 4.5,
      specifications: [
        { attribute: "Lumens", value: "500" },
        { attribute: "Battery", value: "Rechargeable" },
        { attribute: "Material", value: "Aluminum" },
      ],
      createdAt: new Date(),
      isFeatured: false,
      deliveryLocation: "South Luzon",
      faqs: [
        {
          productId: "productId12",
          questions: "How bright is the Flashlite?",
          answer:
            "The Flashlite offers a brightness of up to 500 lumens, suitable for various situations.",
        },
        {
          productId: "productId12",
          questions: "Is the Flashlite rechargeable?",
          answer:
            "Yes, the Flashlite features a rechargeable battery for convenience.",
        },
        {
          productId: "productId12",
          questions: "What is the main material of the Flashlite?",
          answer:
            "The Flashlite is made of durable aluminum, ensuring longevity and resilience.",
        },
        {
          productId: "productId12",
          questions: "Can the Flashlite be used outdoors?",
          answer:
            "Yes, the Flashlite is designed for outdoor use, making it perfect for camping and emergencies.",
        },
        {
          productId: "productId12",
          questions: "Does the Flashlite come with a warranty?",
          answer:
            "Yes, it includes a one-year warranty against manufacturing defects.",
        },
      ],
      addOns: [
        {
          productId: "productId12",
          header: "Extra Battery Pack",
          description:
            "Rechargeable battery pack for extended use of your Flashlite.",
          price: 500,
        },
        {
          productId: "productId12",
          header: "Carrying Case",
          description:
            "Durable carrying case for safe transport of your Flashlite.",
          price: 350,
        },
        {
          productId: "productId12",
          header: "Lantern Base",
          description:
            "Convert your Flashlite into a lantern with this easy-to-use base.",
          price: 600,
        },
      ],
      qualities: [
        {
          name: "Brightness",
          subtext: "High Lumens Output for Clear Visibility",
          thoughts: [
            { name: "Exceptional Brightness", value: 5 },
            { name: "Very Bright", value: 4 },
            { name: "Moderately Bright", value: 3 },
            { name: "Somewhat Dim", value: 2 },
            { name: "Poor Brightness", value: 1 },
          ],
        },
        {
          name: "Battery Life",
          subtext: "Duration of Use on a Single Charge",
          thoughts: [
            { name: "Outstanding Battery Life", value: 5 },
            { name: "Very Good Battery Life", value: 4 },
            { name: "Moderate Battery Life", value: 3 },
            { name: "Somewhat Short Battery Life", value: 2 },
            { name: "Poor Battery Life", value: 1 },
          ],
        },
        {
          name: "Design",
          subtext: "Compact and Versatile for Easy Use",
          thoughts: [
            { name: "Excellent Design", value: 5 },
            { name: "Very Good Design", value: 4 },
            { name: "Moderate Design", value: 3 },
            { name: "Somewhat Unappealing", value: 2 },
            { name: "Poor Design", value: 1 },
          ],
        },
        {
          name: "Functionality",
          subtext: "Dual Use as Flashlight and Lamp",
          thoughts: [
            { name: "Highly Functional", value: 5 },
            { name: "Very Functional", value: 4 },
            { name: "Moderately Functional", value: 3 },
            { name: "Somewhat Functional", value: 2 },
            { name: "Not Functional", value: 1 },
          ],
        },
        {
          name: "Ease of Use",
          subtext: "User-Friendly Features for Convenience",
          thoughts: [
            { name: "Extremely Easy", value: 5 },
            { name: "Very Easy", value: 4 },
            { name: "Moderately Easy", value: 3 },
            { name: "Somewhat Difficult", value: 2 },
            { name: "Very Difficult", value: 1 },
          ],
        },
        {
          name: "Affordability",
          subtext: "Impacts Availability & Continuation",
          thoughts: [
            { name: "Expensive", value: 5 },
            { name: "Pricey", value: 4 },
            { name: "Reasonable", value: 3 },
            { name: "Affordable", value: 2 },
            { name: "Cheap", value: 1 },
          ],
        },
      ],
      productIntention:
        "Flashlite is being tested for its dual functionality as a flashlight and lamp, appealing to users who require reliable and versatile illumination in various scenarios.",
    },
    {
      productId: "productId13",
      businessId: "businessId2", // Tech/Gadgets Industry
      ownerId: "userId3",
      name: "Bosch Cordless ScrewDriver",
      description:
        "The Bosch Cordless ScrewDriver is perfect for all your DIY projects. With its compact design and powerful motor, it allows for easy maneuverability in tight spaces. This tool is built for durability and performance, making it a must-have for any toolkit.",
      tags: ["screwdriver", "tools", "Bosch"],
      category: "Tools",
      deliveryTime: "2 - 7 days",
      price: 1230, // 30 USD converted to PHP
      discount: 0.2, // 20% discount in decimal
      coverImage:
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981465/my-uploads/nextgen/commons/tools/1/boschscrewdriverbanner1_wv2rhi.jpg",
      images: [
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981464/my-uploads/nextgen/commons/tools/1/bosch-cordless-drill-driver_mowcov.jpg",
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981465/my-uploads/nextgen/commons/tools/1/o390117v54_GO_3_dyn_qnlr36.webp",
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981464/my-uploads/nextgen/commons/tools/1/bosch-06019h2170-go-3.6v-cordless-screwdriver-a1_wrvzju.jpg",
      ],
      ratings: 4.8,
      specifications: [
        { attribute: "Voltage", value: "3.6V" },
        { attribute: "Torque", value: "5.5 Nm" },
        { attribute: "Weight", value: "0.6 kg" },
      ],
      createdAt: new Date(),
      isFeatured: false,
      deliveryLocation: "South Luzon",
      faqs: [
        {
          productId: "productId13",
          questions:
            "What voltage does the Bosch Cordless ScrewDriver operate at?",
          answer:
            "The Bosch Cordless ScrewDriver operates at a voltage of 3.6V.",
        },
        {
          productId: "productId13",
          questions:
            "Is the Bosch Cordless ScrewDriver suitable for heavy-duty use?",
          answer:
            "While it's compact, it is designed for DIY projects and light to medium tasks.",
        },
        {
          productId: "productId13",
          questions:
            "How much torque does the Bosch Cordless ScrewDriver provide?",
          answer:
            "The tool provides a torque of 5.5 Nm, making it effective for various screws.",
        },
        {
          productId: "productId13",
          questions: "What is the weight of the Bosch Cordless ScrewDriver?",
          answer:
            "The Bosch Cordless ScrewDriver weighs approximately 0.6 kg, making it easy to handle.",
        },
        {
          productId: "productId13",
          questions: "Does the Bosch Cordless ScrewDriver have a warranty?",
          answer:
            "Yes, it comes with a one-year warranty covering manufacturing defects.",
        },
      ],
      addOns: [
        {
          productId: "productId13",
          header: "Extra Bit Set",
          description:
            "Versatile bit set compatible with the Bosch Cordless ScrewDriver for various tasks.",
          price: 400,
        },
        {
          productId: "productId13",
          header: "Magnetic Holder",
          description:
            "Magnetic bit holder to keep your bits organized and accessible.",
          price: 200,
        },
        {
          productId: "productId13",
          header: "Tool Bag",
          description:
            "Sturdy tool bag to store your Bosch Cordless ScrewDriver and accessories.",
          price: 800,
        },
      ],
      qualities: [
        {
          name: "Battery Life",
          subtext: "Rechargeable with Sufficient Runtime",
          thoughts: [
            { name: "Excellent Battery Life", value: 5 },
            { name: "Very Good Battery Life", value: 4 },
            { name: "Moderate Battery Life", value: 3 },
            { name: "Somewhat Short Battery Life", value: 2 },
            { name: "Poor Battery Life", value: 1 },
          ],
        },
        {
          name: "Design",
          subtext: "Compact and Ergonomic Structure",
          thoughts: [
            { name: "Beautiful Design", value: 5 },
            { name: "Very Attractive", value: 4 },
            { name: "Moderately Appealing", value: 3 },
            { name: "Somewhat Unappealing", value: 2 },
            { name: "Poor Design", value: 1 },
          ],
        },
        {
          name: "Functionality",
          subtext: "Efficiency in DIY Projects",
          thoughts: [
            { name: "Highly Functional", value: 5 },
            { name: "Very Functional", value: 4 },
            { name: "Moderately Functional", value: 3 },
            { name: "Somewhat Functional", value: 2 },
            { name: "Not Functional", value: 1 },
          ],
        },
        {
          name: "Ease of Use",
          subtext: "User-Friendly and Convenient Operation",
          thoughts: [
            { name: "Extremely Easy", value: 5 },
            { name: "Very Easy", value: 4 },
            { name: "Moderately Easy", value: 3 },
            { name: "Somewhat Difficult", value: 2 },
            { name: "Very Difficult", value: 1 },
          ],
        },
        {
          name: "Affordability",
          subtext: "Impacts Availability & Continuation",
          thoughts: [
            { name: "Expensive", value: 5 },
            { name: "Pricey", value: 4 },
            { name: "Reasonable", value: 3 },
            { name: "Affordable", value: 2 },
            { name: "Cheap", value: 1 },
          ],
        },
      ],
      productIntention:
        "The Bosch Cordless ScrewDriver is being evaluated as a durable, compact tool designed for DIY enthusiasts and professionals, offering ease of use in tight spaces.",
    },
    {
      productId: "productId14",
      businessId: "businessId2", // Tech/Gadgets Industry
      ownerId: "userId3",
      name: "Groovy Plier Tool",
      description:
        "The Groovy Plier Tool is designed for versatility and ease of use. Featuring a durable construction and a comfortable grip, it's perfect for tackling a wide range of tasks. This tool is an essential addition to any toolbox, making repairs and projects simpler.",
      tags: ["pliers", "tools", "groove joint"],
      category: "Tools",
      deliveryTime: "2 - 7 days",
      price: 2500, // 30 USD converted to PHP
      discount: 0.25, // 15% discount in decimal
      coverImage:
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981465/my-uploads/nextgen/commons/tools/2/groovypliertoolbanner_boqp1z.webp",
      images: [
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981465/my-uploads/nextgen/commons/tools/2/H9414674f22d04364bb5fd1023bfe56dbI.jpg_720x720q50_behi9d.png",
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981465/my-uploads/nextgen/commons/tools/2/MB416-1_1200x1200_p735tl.webp",
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981466/my-uploads/nextgen/commons/tools/2/TRADE_hz6sia.jpg",
      ],
      ratings: 4.4,
      specifications: [
        { attribute: "Material", value: "Steel" },
        { attribute: "Length", value: "10 inches" },
        { attribute: "Weight", value: "0.5 kg" },
      ],
      createdAt: new Date(),
      isFeatured: false,
      deliveryLocation: "Overseas",
      faqs: [
        {
          productId: "productId14",
          questions: "What material is the Groovy Plier Tool made of?",
          answer:
            "The Groovy Plier Tool is made of high-quality steel for durability.",
        },
        {
          productId: "productId14",
          questions: "How long is the Groovy Plier Tool?",
          answer:
            "The Groovy Plier Tool measures 10 inches in length, making it suitable for various tasks.",
        },
        {
          productId: "productId14",
          questions: "Is the Groovy Plier Tool comfortable to use?",
          answer:
            "Yes, it features a comfortable grip designed for prolonged use.",
        },
        {
          productId: "productId14",
          questions: "Can the Groovy Plier Tool be used for electrical work?",
          answer:
            "Yes, it is versatile enough to handle a range of tasks, including electrical work.",
        },
        {
          productId: "productId14",
          questions: "Does the Groovy Plier Tool come with a warranty?",
          answer:
            "Yes, it includes a one-year warranty against defects in materials and workmanship.",
        },
      ],
      addOns: [
        {
          productId: "productId14",
          header: "Tool Organizer",
          description:
            "Efficient organizer to keep your tools neatly stored and accessible.",
          price: 600,
        },
        {
          productId: "productId14",
          header: "Safety Glasses",
          description:
            "Durable safety glasses for eye protection during projects.",
          price: 350,
        },
        {
          productId: "productId14",
          header: "Multi-Function Tool",
          description:
            "A versatile multi-tool for added functionality in various tasks.",
          price: 800,
        },
      ],
      qualities: [
        {
          name: "Durability",
          subtext: "High-Quality Construction for Longevity",
          thoughts: [
            { name: "Exceptional Durability", value: 5 },
            { name: "Very Durable", value: 4 },
            { name: "Moderately Durable", value: 3 },
            { name: "Somewhat Durable", value: 2 },
            { name: "Not Durable", value: 1 },
          ],
        },
        {
          name: "Design",
          subtext: "Ergonomic and Functional Design",
          thoughts: [
            { name: "Beautiful Design", value: 5 },
            { name: "Very Attractive", value: 4 },
            { name: "Moderately Appealing", value: 3 },
            { name: "Somewhat Unappealing", value: 2 },
            { name: "Poor Design", value: 1 },
          ],
        },
        {
          name: "Functionality",
          subtext: "Versatility for Various Tasks",
          thoughts: [
            { name: "Highly Functional", value: 5 },
            { name: "Very Functional", value: 4 },
            { name: "Moderately Functional", value: 3 },
            { name: "Somewhat Functional", value: 2 },
            { name: "Not Functional", value: 1 },
          ],
        },
        {
          name: "Ease of Use",
          subtext: "User-Friendly for Prolonged Use",
          thoughts: [
            { name: "Extremely Easy", value: 5 },
            { name: "Very Easy", value: 4 },
            { name: "Moderately Easy", value: 3 },
            { name: "Somewhat Difficult", value: 2 },
            { name: "Very Difficult", value: 1 },
          ],
        },
        {
          name: "Affordability",
          subtext: "Impacts Availability & Continuation",
          thoughts: [
            { name: "Expensive", value: 5 },
            { name: "Pricey", value: 4 },
            { name: "Reasonable", value: 3 },
            { name: "Affordable", value: 2 },
            { name: "Cheap", value: 1 },
          ],
        },
      ],
      productIntention:
        "Groovy Plier Tool is being tested for its versatility and comfort, aiming to become an essential addition to any toolbox for various repair and construction tasks.",
    },
  ],
  businessId3: [
    {
      productId: "productIdMyGlasses",
      businessId: "businessId3",
      ownerId: "userId5",
      name: "MyGlasses",
      description:
        "MyGlasses are stylish and functional eyewear that blends technology with fashion. These smart glasses provide a seamless experience with built-in audio and display features, allowing users to stay connected while on the go. Perfect for anyone looking to enhance their daily activities with a touch of innovation.",
      tags: ["smart", "accessories", "technology"],
      category: "Accessories",
      deliveryTime: "2 - 7 days",
      price: 14249.43, // Price in PHP
      discount: 0.1, // Discount as a decimal
      coverImage:
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981455/my-uploads/nextgen/commons/accessories/1/myglassesbanner_qjbeq4.png",
      images: [
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981457/my-uploads/nextgen/commons/accessories/1/Ray-ban-4V3_dovmz4.jpg",
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981456/my-uploads/nextgen/commons/accessories/1/newFile-2_vraey0.png",
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981455/my-uploads/nextgen/commons/accessories/1/hq720_izfvdv.jpg",
      ],
      ratings: 4.3,
      specifications: [
        { attribute: "Frame Material", value: "Polycarbonate" },
        { attribute: "Lens Type", value: "Photochromic" },
        { attribute: "Battery Life", value: "10 hours" },
        { attribute: "Weight", value: "30 grams" },
      ],
      createdAt: new Date(),
      isFeatured: false,
      deliveryLocation: "Overseas",
      faqs: [
        {
          productId: "productIdMyGlasses",
          questions: "What technology is integrated into MyGlasses?",
          answer:
            "MyGlasses feature built-in audio and display capabilities, allowing seamless connectivity while on the go.",
        },
        {
          productId: "productIdMyGlasses",
          questions: "Are MyGlasses suitable for everyday use?",
          answer:
            "Yes, MyGlasses are designed for everyday wear, combining style and functionality.",
        },
        {
          productId: "productIdMyGlasses",
          questions: "How long does the battery last?",
          answer:
            "MyGlasses have a battery life of approximately 10 hours with standard use.",
        },
        {
          productId: "productIdMyGlasses",
          questions: "Can I use MyGlasses for phone calls?",
          answer:
            "Yes, MyGlasses can be used to make and receive phone calls seamlessly.",
        },
        {
          productId: "productIdMyGlasses",
          questions: "What styles are available for MyGlasses?",
          answer:
            "MyGlasses come in various styles to suit different fashion preferences.",
        },
      ],
      addOns: [
        {
          productId: "productIdMyGlasses",
          header: "Lens Cleaning Kit",
          description:
            "A complete kit for keeping your smart glasses clean and scratch-free.",
          price: 450,
        },
        {
          productId: "productIdMyGlasses",
          header: "Protective Case",
          description:
            "Stylish case to keep your smart glasses safe when not in use.",
          price: 700,
        },
        {
          productId: "productIdMyGlasses",
          header: "Screen Protector",
          description:
            "Durable screen protector to prevent scratches and damage.",
          price: 300,
        },
      ],
      qualities: [
        {
          name: "Innovation",
          subtext: "Integration of Audio and Display Technology",
          thoughts: [
            { name: "Highly Innovative", value: 5 },
            { name: "Very Innovative", value: 4 },
            { name: "Moderately Innovative", value: 3 },
            { name: "Somewhat Innovative", value: 2 },
            { name: "Not Innovative", value: 1 },
          ],
        },
        {
          name: "Design",
          subtext: "Stylish and Modern Aesthetic",
          thoughts: [
            { name: "Beautiful Design", value: 5 },
            { name: "Very Attractive", value: 4 },
            { name: "Moderately Appealing", value: 3 },
            { name: "Somewhat Unappealing", value: 2 },
            { name: "Poor Design", value: 1 },
          ],
        },
        {
          name: "Functionality",
          subtext: "Versatile Features for Daily Use",
          thoughts: [
            { name: "Highly Functional", value: 5 },
            { name: "Very Functional", value: 4 },
            { name: "Moderately Functional", value: 3 },
            { name: "Somewhat Functional", value: 2 },
            { name: "Not Functional", value: 1 },
          ],
        },
        {
          name: "Ease of Use",
          subtext: "User-Friendly Interface and Features",
          thoughts: [
            { name: "Extremely Easy", value: 5 },
            { name: "Very Easy", value: 4 },
            { name: "Moderately Easy", value: 3 },
            { name: "Somewhat Difficult", value: 2 },
            { name: "Very Difficult", value: 1 },
          ],
        },
        {
          name: "Affordability",
          subtext: "Impacts Availability & Continuation",

          thoughts: [
            { name: "Expensive", value: 5 },
            { name: "Pricey", value: 4 },
            { name: "Reasonable", value: 3 },
            { name: "Affordable", value: 2 },
            { name: "Cheap", value: 1 },
          ],
        },
      ],
      productIntention:
        "MyGlasses are released to explore the fusion of technology and fashion, targeting tech-savvy consumers who desire both style and functionality in their accessories.",
    },
    {
      productId: "productIdsleevey", // Assign a unique ID
      businessId: "businessId3", // Clothing industry
      ownerId: "userId5", // User ID for clothing industry
      name: "Sleevey",
      description: "Just some plain polo shirts",
      tags: ["polo", "shirt", "clothing", "fashion"],
      category: "Clothes",
      deliveryTime: "2 - 5 days",
      price: 860, // Random PHP price
      discount: 0.15, // 15% discount
      coverImage:
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981459/my-uploads/nextgen/commons/clothes/1/sleeveybanner_fnzoeg.jpg",
      images: [
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981459/my-uploads/nextgen/commons/clothes/1/Long-Sleeve-Polo-Blank_nifsgv.webp",
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981459/my-uploads/nextgen/commons/clothes/1/FW7973_blk_1200x1200_ycd0eg.webp",
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981458/my-uploads/nextgen/commons/clothes/1/3d_male_standard_polo_shirt_body_shape_long_sleeve_model_1_hv0f3g.jpg",
      ],
      ratings: 4.3, // Random rating
      specifications: [
        { attribute: "Material", value: "Cotton" },
        { attribute: "Fit", value: "Regular" },
        { attribute: "Color", value: "Various" },
        { attribute: "Sizes", value: "S, M, L, XL" },
      ],
      qualities: [
        {
          name: "Design",
          subtext: "Simple and Versatile Aesthetic",
          thoughts: [
            { name: "Beautiful Design", value: 5 },
            { name: "Very Attractive", value: 4 },
            { name: "Moderately Appealing", value: 3 },
            { name: "Somewhat Unappealing", value: 2 },
            { name: "Poor Design", value: 1 },
          ],
        },
        {
          name: "Comfort",
          subtext: "Comfortable and Practical for Everyday Wear",
          thoughts: [
            { name: "Highly Comfortable", value: 5 },
            { name: "Very Comfortable", value: 4 },
            { name: "Moderately Comfortable", value: 3 },
            { name: "Somewhat Uncomfortable", value: 2 },
            { name: "Very Uncomfortable", value: 1 },
          ],
        },
        {
          name: "Ease of Use",
          subtext: "User-Friendly and Convenient",
          thoughts: [
            { name: "Extremely Easy", value: 5 },
            { name: "Very Easy", value: 4 },
            { name: "Moderately Easy", value: 3 },
            { name: "Somewhat Difficult", value: 2 },
            { name: "Very Difficult", value: 1 },
          ],
        },
        {
          name: "Affordability",
          subtext: "Impacts Availability & Continuation",
          thoughts: [
            { name: "Expensive", value: 5 },
            { name: "Pricey", value: 4 },
            { name: "Reasonable", value: 3 },
            { name: "Affordable", value: 2 },
            { name: "Cheap", value: 1 },
          ],
        },
      ],
      createdAt: new Date(),
      isFeatured: false,
      deliveryLocation: "Domestic",
      faqs: [
        {
          productId: "productIdsleevey",
          questions: "What is the material of Sleevey?",
          answer:
            "Sleevey is made from high-quality cotton for comfort and durability.",
        },
        {
          productId: "productIdsleevey",
          questions: "What sizes are available for Sleevey?",
          answer: "Sleevey is available in sizes S, M, L, and XL.",
        },
        {
          productId: "productIdsleevey",
          questions: "Is Sleevey suitable for casual wear?",
          answer:
            "Yes, Sleevey is perfect for casual occasions and everyday wear.",
        },
        {
          productId: "productIdsleevey",
          questions: "How do I care for Sleevey?",
          answer:
            "Sleevey can be machine washed on a gentle cycle and should be tumble dried on low heat.",
        },
        {
          productId: "productIdsleevey",
          questions: "Are there different color options for Sleevey?",
          answer:
            "Yes, Sleevey is available in various colors to match your style.",
        },
      ],
      addOns: [
        {
          productId: "productIdsleevey",
          header: "Custom Embroidery",
          description:
            "Add a personalized touch with custom embroidery on your polo shirt.",
          price: 200,
        },
        {
          productId: "productIdsleevey",
          header: "Gift Wrapping Service",
          description:
            "Make it special with our premium gift wrapping service.",
          price: 150,
        },
        {
          productId: "productIdsleevey",
          header: "Extra Color Option",
          description: "Get a second color option for your Sleevey polo shirt.",
          price: 100,
        },
      ],
      productIntention:
        "Sleevey is aimed at casual fashion wearers who are looking for simple, versatile polo shirts, offering comfortable yet stylish clothing for both work and leisure.",
    },
    {
      productId: "productId5", // Assign a unique ID
      businessId: "businessId3", // Clothing industry
      ownerId: "userId5", // User ID for clothing industry
      name: "Minimaly",
      deliveryTime: "2 - 5 days",
      description: "Just some Minimalist Tshirt",
      tags: ["tshirt", "minimalist", "clothing", "fashion"],
      category: "Clothes",
      price: 400, // Random PHP price
      discount: 0.1, // 10% discount
      coverImage:
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981460/my-uploads/nextgen/commons/clothes/2/minamalybanner_h9r2v6.jpg",
      images: [
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981460/my-uploads/nextgen/commons/clothes/2/669e9581c9b2d245c37f9a0b-funny-i-like-chipotle-minimalist-design_dolo26.jpg",
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981460/my-uploads/nextgen/commons/clothes/2/No.1_Cubs_Dust_3_Tier_T_Shirt_Front_glgrh0.webp",
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981461/my-uploads/nextgen/commons/clothes/2/Minimalist_T_Shirt_Design_01_tlqb51.webp",
      ],
      ratings: 4.7, // Random rating
      specifications: [
        { attribute: "Material", value: "Polyester" },
        { attribute: "Style", value: "Minimalist" },
        { attribute: "Color", value: "White, Black" },
        { attribute: "Sizes", value: "M, L, XL" },
      ],
      createdAt: new Date(),
      isFeatured: false,
      deliveryLocation: "Domestic",
      faqs: [
        {
          productId: "productId5",
          questions: "What is the design philosophy behind Minimaly?",
          answer:
            "Minimaly focuses on simplicity and clean lines, perfect for those who appreciate minimalist fashion.",
        },
        {
          productId: "productId5",
          questions: "What materials are used in Minimaly shirts?",
          answer:
            "Minimaly shirts are made from high-quality polyester for comfort and breathability.",
        },
        {
          productId: "productId5",
          questions: "Are Minimaly shirts available in different colors?",
          answer:
            "Yes, Minimaly shirts are available in white and black color options.",
        },
        {
          productId: "productId5",
          questions: "What sizes does Minimaly offer?",
          answer: "Minimaly is available in sizes M, L, and XL.",
        },
        {
          productId: "productId5",
          questions:
            "Is Minimaly suitable for both casual and formal occasions?",
          answer:
            "Yes, Minimaly can be styled for both casual and formal settings.",
        },
      ],
      addOns: [
        {
          productId: "productId5",
          header: "Sustainable Packaging",
          description: "Choose eco-friendly packaging for your Minimaly shirt.",
          price: 50,
        },
        {
          productId: "productId5",
          header: "Fabric Care Kit",
          description:
            "A kit to help you maintain the quality of your polyester shirts.",
          price: 250,
        },
        {
          productId: "productId5",
          header: "Fashion Lookbook",
          description:
            "Get a lookbook with style inspirations on how to wear Minimaly.",
          price: 100,
        },
      ],
      qualities: [
        {
          name: "Design",
          subtext: "Simple and Versatile Aesthetic",
          thoughts: [
            { name: "Beautiful Design", value: 5 },
            { name: "Very Attractive", value: 4 },
            { name: "Moderately Appealing", value: 3 },
            { name: "Somewhat Unappealing", value: 2 },
            { name: "Poor Design", value: 1 },
          ],
        },
        {
          name: "Comfort",
          subtext: "Comfortable and Practical for Everyday Wear",
          thoughts: [
            { name: "Highly Comfortable", value: 5 },
            { name: "Very Comfortable", value: 4 },
            { name: "Moderately Comfortable", value: 3 },
            { name: "Somewhat Uncomfortable", value: 2 },
            { name: "Very Uncomfortable", value: 1 },
          ],
        },
        {
          name: "Ease of Use",
          subtext: "User-Friendly and Convenient",
          thoughts: [
            { name: "Extremely Easy", value: 5 },
            { name: "Very Easy", value: 4 },
            { name: "Moderately Easy", value: 3 },
            { name: "Somewhat Difficult", value: 2 },
            { name: "Very Difficult", value: 1 },
          ],
        },
        {
          name: "Affordability",
          subtext: "Impacts Availability & Continuation",
          thoughts: [
            { name: "Expensive", value: 5 },
            { name: "Pricey", value: 4 },
            { name: "Reasonable", value: 3 },
            { name: "Affordable", value: 2 },
            { name: "Cheap", value: 1 },
          ],
        },
      ],
      productIntention:
        "Minimaly is introduced as a minimalist fashion staple, catering to customers who prefer clean designs with a focus on simplicity, available in neutral colors for everyday wear.",
    },
  ],
  businessId4: [
    {
      productId: "productId15",
      businessId: "businessId4", // Toy Industry
      ownerId: "userId6",
      name: "Anki Vector",
      description:
        "Meet Anki Vector, the friendly robot companion that brings technology and play together. With advanced AI and interactive features, Vector responds to your commands and can even recognize your face. It's a fun and engaging way to explore robotics and programming.",
      tags: ["robot", "toy", "AI"],
      category: "Toys",
      deliveryTime: "2 - 5 days",
      price: 3000, // 299 USD converted to PHP
      discount: 0.3, // 10% discount in decimal
      coverImage:
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981466/my-uploads/nextgen/commons/toys/1/anki-vector-3_banner_qdcsy6.webp",
      images: [
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981466/my-uploads/nextgen/commons/toys/1/ankivectortoys_vm15ox.png",
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981466/my-uploads/nextgen/commons/toys/1/vpavic_180727_2778_0116_faf3sx.jpg",
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981466/my-uploads/nextgen/commons/toys/1/vector2_taihx2.jpg",
      ],
      ratings: 4.9,
      specifications: [
        { attribute: "Battery Life", value: "1 hour" },
        { attribute: "Compatibility", value: "iOS and Android" },
        { attribute: "Weight", value: "1 kg" },
      ],
      createdAt: new Date(),
      isFeatured: false,
      deliveryLocation: "Overseas",
      faqs: [
        {
          productId: "productId15",
          questions: "What is Anki Vector?",
          answer:
            "Anki Vector is a friendly robot companion that combines technology and play, responding to commands and recognizing faces.",
        },
        {
          productId: "productId15",
          questions: "How long does the battery last for Anki Vector?",
          answer: "Anki Vector has a battery life of approximately 1 hour.",
        },
        {
          productId: "productId15",
          questions: "Is Anki Vector compatible with mobile devices?",
          answer:
            "Yes, Anki Vector is compatible with both iOS and Android devices.",
        },
        {
          productId: "productId15",
          questions: "What age group is Anki Vector suitable for?",
          answer:
            "Anki Vector is suitable for both kids and adults, making it an educational and playful companion.",
        },
        {
          productId: "productId15",
          questions: "What features does Anki Vector have?",
          answer:
            "Anki Vector includes advanced AI, voice recognition, and interactive features to engage users.",
        },
      ],
      qualities: [
        {
          name: "Innovation",
          subtext: "Cutting-edge Technology and Features",
          thoughts: [
            { name: "Highly Innovative", value: 5 },
            { name: "Very Innovative", value: 4 },
            { name: "Moderately Innovative", value: 3 },
            { name: "Somewhat Innovative", value: 2 },
            { name: "Not Innovative", value: 1 },
          ],
        },
        {
          name: "Functionality",
          subtext: "Robust and Engaging Features",
          thoughts: [
            { name: "Extremely Functional", value: 5 },
            { name: "Very Functional", value: 4 },
            { name: "Moderately Functional", value: 3 },
            { name: "Somewhat Functional", value: 2 },
            { name: "Not Functional", value: 1 },
          ],
        },
        {
          name: "Ease of Use",
          subtext: "User-Friendly and Intuitive",
          thoughts: [
            { name: "Extremely Easy", value: 5 },
            { name: "Very Easy", value: 4 },
            { name: "Moderately Easy", value: 3 },
            { name: "Somewhat Difficult", value: 2 },
            { name: "Very Difficult", value: 1 },
          ],
        },
        {
          name: "Affordability",
          subtext: "Impacts Availability & Continuation",

          thoughts: [
            { name: "Expensive", value: 5 },
            { name: "Pricey", value: 4 },
            { name: "Reasonable", value: 3 },
            { name: "Affordable", value: 2 },
            { name: "Cheap", value: 1 },
          ],
        },
      ],
      addOns: [
        {
          productId: "productId15",
          header: "Charging Dock",
          description:
            "A convenient charging dock to keep your Anki Vector powered up.",
          price: 500,
        },
        {
          productId: "productId15",
          header: "Additional Face Recognition Feature",
          description:
            "Enhance Vector's abilities with an additional face recognition upgrade.",
          price: 800,
        },
        {
          productId: "productId15",
          header: "Custom Voice Commands",
          description:
            "Personalize your Anki Vector with custom voice commands.",
          price: 300,
        },
      ],
      productIntention:
        "Anki Vector is introduced as an educational and playful companion, aimed at blending fun with learning through AI technology, making robotics accessible for both kids and adults.",
    },
    {
      productId: "productId16",
      businessId: "businessId4", // Toy Industry
      ownerId: "userId6",
      name: "Baw-wow Dog",
      description:
        "Baw-wow Dog is a high-tech robot toy that mimics real dog behaviors. With advanced sensors and interactive features, it responds to your touch and voice, making it a perfect companion for kids. This playful pet is designed to provide hours of entertainment.",
      tags: ["robot", "toy", "dog"],
      category: "Toys",
      deliveryTime: "2 - 5 days",
      price: 2199, // 299 USD converted to PHP
      discount: 0.4, // 15% discount in decimal
      coverImage:
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981466/my-uploads/nextgen/commons/toys/2/baw-wow_toys_banner_shhg4s.webp",
      images: [
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981467/my-uploads/nextgen/commons/toys/2/hq720_kgokoo.jpg",
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981467/my-uploads/nextgen/commons/toys/2/VWyDpAwsGKDrcPCZDcV65c-1200-80_rtvsfv.jpg",
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981466/my-uploads/nextgen/commons/toys/2/510BINJ_NZL_dl175g.jpg",
      ],
      ratings: 4.7,
      specifications: [
        { attribute: "Battery Life", value: "2 hours" },
        { attribute: "Sensors", value: "Touch and Voice" },
        { attribute: "Weight", value: "0.8 kg" },
      ],
      createdAt: new Date(),
      isFeatured: false,
      deliveryLocation: "Overseas",
      faqs: [
        {
          productId: "productId16",
          questions: "What is Baw-wow Dog?",
          answer:
            "Baw-wow Dog is a high-tech robotic toy that mimics real dog behaviors and responds to touch and voice.",
        },
        {
          productId: "productId16",
          questions: "How long does the battery last for Baw-wow Dog?",
          answer: "Baw-wow Dog has a battery life of approximately 2 hours.",
        },
        {
          productId: "productId16",
          questions: "What sensors does Baw-wow Dog have?",
          answer:
            "Baw-wow Dog features touch and voice sensors for interactive play.",
        },
        {
          productId: "productId16",
          questions: "What age group is Baw-wow Dog suitable for?",
          answer:
            "Baw-wow Dog is designed for children, providing a fun and interactive experience.",
        },
        {
          productId: "productId16",
          questions: "What behaviors can Baw-wow Dog mimic?",
          answer:
            "Baw-wow Dog mimics real dog behaviors, making it a realistic companion for kids.",
        },
      ],
      addOns: [
        {
          productId: "productId16",
          header: "Interactive Play Mat",
          description:
            "A special play mat designed to enhance your Baw-wow Dog's interactive play.",
          price: 400,
        },
        {
          productId: "productId16",
          header: "Extra Battery Pack",
          description:
            "Keep the fun going with an additional battery pack for longer playtime.",
          price: 350,
        },
        {
          productId: "productId16",
          header: "Training Guide",
          description:
            "A comprehensive training guide to teach your Baw-wow Dog new tricks.",
          price: 250,
        },
      ],
      qualities: [
        {
          name: "Innovation",
          subtext: "Advanced Robotics and Interactive Features",
          thoughts: [
            { name: "Highly Innovative", value: 5 },
            { name: "Very Innovative", value: 4 },
            { name: "Moderately Innovative", value: 3 },
            { name: "Somewhat Innovative", value: 2 },
            { name: "Not Innovative", value: 1 },
          ],
        },
        {
          name: "Functionality",
          subtext: "Interactive and Engaging Play Experience",
          thoughts: [
            { name: "Extremely Functional", value: 5 },
            { name: "Very Functional", value: 4 },
            { name: "Moderately Functional", value: 3 },
            { name: "Somewhat Functional", value: 2 },
            { name: "Not Functional", value: 1 },
          ],
        },
        {
          name: "Ease of Use",
          subtext: "User-Friendly and Intuitive Controls",
          thoughts: [
            { name: "Extremely Easy", value: 5 },
            { name: "Very Easy", value: 4 },
            { name: "Moderately Easy", value: 3 },
            { name: "Somewhat Difficult", value: 2 },
            { name: "Very Difficult", value: 1 },
          ],
        },
        {
          name: "Affordability",
          subtext: "Impacts Availability & Continuation",

          thoughts: [
            { name: "Expensive", value: 5 },
            { name: "Pricey", value: 4 },
            { name: "Reasonable", value: 3 },
            { name: "Affordable", value: 2 },
            { name: "Cheap", value: 1 },
          ],
        },
      ],
      productIntention:
        "Baw-wow Dog is targeted at children who seek interactive play with lifelike robotic pets, offering a fun, high-tech experience through responsive behavior.",
    },
  ],
  businessId5: [
    {
      productId: "productIdJuicero",
      businessId: "businessId5",
      ownerId: "userId8",
      name: "Juicero",
      description:
        "Juicero is a premium juice press that uses advanced technology to deliver fresh, cold-pressed juice at home. With a sleek design and smart features, it allows users to easily extract juice from specially designed juice packs, making healthy living convenient and enjoyable. Experience the future of juicing with Juicero.",
      tags: ["juicer", "technology", "health"],
      category: "Gadgets",
      deliveryTime: "2 - 7 days",
      price: 16999, // 299.99 USD converted to PHP (random value)
      discount: 0.1, // 10% discount expressed as a decimal
      coverImage:
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981468/my-uploads/nextgen/featured/juicero/bannerjuicero_xq8fzq.png",
      images: [
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981468/my-uploads/nextgen/featured/juicero/images_zupq84.png",
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981468/my-uploads/nextgen/featured/juicero/7320_hijv5y.png",
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981468/my-uploads/nextgen/featured/juicero/ra213_kr5tt7.png",
      ],
      ratings: 4.3,
      specifications: [
        { attribute: "Dimensions", value: "35cm x 15cm x 30cm" },
        { attribute: "Weight", value: "4.5 kg" },
        { attribute: "Power", value: "200 watts" },
      ],
      createdAt: new Date(),
      isFeatured: true, // New property
      deliveryLocation: "Overseas",
      faqs: [
        {
          productId: "productIdJuicero",
          questions: "What is Juicero?",
          answer:
            "Juicero is a premium juice press that allows users to extract juice from specially designed juice packs, making healthy living convenient.",
        },
        {
          productId: "productIdJuicero",
          questions: "How does Juicero work?",
          answer:
            "Juicero uses advanced technology to press juice from proprietary packs, ensuring fresh, cold-pressed juice at home.",
        },
        {
          productId: "productIdJuicero",
          questions: "Is Juicero easy to clean?",
          answer:
            "Yes, Juicero is designed for easy cleaning with removable parts that can be washed separately.",
        },
        {
          productId: "productIdJuicero",
          questions: "Where can I buy Juicero juice packs?",
          answer:
            "Juicero juice packs can be purchased online through various retailers and the official Juicero website.",
        },
      ],
      addOns: [
        {
          productId: "productIdJuicero",
          header: "Juice Pack Subscription",
          description:
            "Monthly subscription for Juicero juice packs, ensuring you never run out of fresh juice.",
          price: 1500,
        },
        {
          productId: "productIdJuicero",
          header: "Cleaning Kit",
          description:
            "Specialized cleaning kit to keep your Juicero in pristine condition.",
          price: 800,
        },
      ],
      qualities: [
        {
          name: "Innovation",
          subtext: "Cutting-Edge Technology for Home Juicing",
          thoughts: [
            { name: "Highly Innovative", value: 5 },
            { name: "Very Innovative", value: 4 },
            { name: "Moderately Innovative", value: 3 },
            { name: "Somewhat Innovative", value: 2 },
            { name: "Not Innovative", value: 1 },
          ],
        },
        {
          name: "Functionality",
          subtext: "Convenient and Easy Juice Extraction",
          thoughts: [
            { name: "Extremely Functional", value: 5 },
            { name: "Very Functional", value: 4 },
            { name: "Moderately Functional", value: 3 },
            { name: "Somewhat Functional", value: 2 },
            { name: "Not Functional", value: 1 },
          ],
        },
        {
          name: "Ease of Use",
          subtext: "User-Friendly Design for Smooth Operation",
          thoughts: [
            { name: "Extremely Easy", value: 5 },
            { name: "Very Easy", value: 4 },
            { name: "Moderately Easy", value: 3 },
            { name: "Somewhat Difficult", value: 2 },
            { name: "Very Difficult", value: 1 },
          ],
        },
        {
          name: "Affordability",
          subtext: "Impacts Availability & Continuation",
          thoughts: [
            { name: "Expensive", value: 5 },
            { name: "Pricey", value: 4 },
            { name: "Reasonable", value: 3 },
            { name: "Affordable", value: 2 },
            { name: "Cheap", value: 1 },
          ],
        },
      ],
      productIntention:
        "Juicero is marketed as a luxury juicing appliance, appealing to health-conscious consumers who value convenience, style, and cutting-edge technology in their kitchen.",
    },

    {
      productId: "productIdBreezeE",
      businessId: "businessId5", // Assuming Appliances Industry
      ownerId: "userId8",
      name: "Breeze-E",
      description:
        "Breeze-E is a revolutionary airless fan designed for optimal airflow without the traditional fan blades. Its innovative technology circulates air quietly and efficiently, making it perfect for homes and offices. Experience comfort like never before with this sleek and modern appliance.",
      tags: ["fan", "airless", "appliance"],
      category: "Appliances",
      deliveryTime: "2 - 5 days",
      price: 8999.43, // Price in PHP (approx. 157 USD)
      discount: 0.15, // Discount as a decimal (15%)
      coverImage:
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981459/my-uploads/nextgen/commons/Appliance/1/Breeze-E_Banner_oaojrh.png",
      images: [
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981459/my-uploads/nextgen/commons/Appliance/1/GUEST_dfb6581b-3d0d-480a-9437-7d44caea8124_hcnhfa.png",
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981458/my-uploads/nextgen/commons/Appliance/1/240985504alt7_fg3dyf.png",
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981457/my-uploads/nextgen/commons/Appliance/1/images_yw6ifp.png",
      ],
      ratings: 4.5,
      specifications: [
        { attribute: "Power", value: "50W" },
        { attribute: "Noise Level", value: "30 dB" },
        { attribute: "Weight", value: "2.5 kg" },
        { attribute: "Dimensions", value: "30 x 30 x 60 cm" },
      ],
      createdAt: new Date(),
      isFeatured: false,
      deliveryLocation: "Overseas",
      faqs: [
        {
          productId: "productIdBreezeE",
          questions: "What is Breeze-E?",
          answer:
            "Breeze-E is a revolutionary airless fan designed to provide optimal airflow without traditional fan blades.",
        },
        {
          productId: "productIdBreezeE",
          questions: "How does Breeze-E work?",
          answer:
            "Breeze-E uses innovative technology to circulate air quietly and efficiently, making it ideal for homes and offices.",
        },
        {
          productId: "productIdBreezeE",
          questions: "Is Breeze-E suitable for large rooms?",
          answer:
            "Yes, Breeze-E is designed to efficiently circulate air in both small and large spaces.",
        },
        {
          productId: "productIdBreezeE",
          questions: "How noisy is Breeze-E during operation?",
          answer:
            "Breeze-E operates at a noise level of just 30 dB, making it one of the quietest fans available.",
        },
      ],
      addOns: [
        {
          productId: "productIdBreezeE",
          header: "Air Quality Monitor",
          description:
            "Keep track of your air quality with this smart monitor, ensuring a healthier living environment.",
          price: 1200,
        },
        {
          productId: "productIdBreezeE",
          header: "Remote Control",
          description:
            "Convenient remote control for easy operation of your Breeze-E fan from anywhere in the room.",
          price: 600,
        },
        {
          productId: "productIdBreezeE",
          header: "Replacement Filter",
          description:
            "A high-quality replacement filter to maintain optimal performance and air quality.",
          price: 400,
        },
      ],
      qualities: [
        {
          name: "Innovation",
          subtext: "Revolutionary Airless Design",
          thoughts: [
            { name: "Highly Innovative", value: 5 },
            { name: "Very Innovative", value: 4 },
            { name: "Moderately Innovative", value: 3 },
            { name: "Somewhat Innovative", value: 2 },
            { name: "Not Innovative", value: 1 },
          ],
        },
        {
          name: "Functionality",
          subtext: "Quiet and Efficient Air Circulation",
          thoughts: [
            { name: "Extremely Functional", value: 5 },
            { name: "Very Functional", value: 4 },
            { name: "Moderately Functional", value: 3 },
            { name: "Somewhat Functional", value: 2 },
            { name: "Not Functional", value: 1 },
          ],
        },
        {
          name: "Design",
          subtext: "Sleek and Modern Appearance",
          thoughts: [
            { name: "Extremely Attractive", value: 5 },
            { name: "Very Attractive", value: 4 },
            { name: "Moderately Attractive", value: 3 },
            { name: "Somewhat Unattractive", value: 2 },
            { name: "Very Unattractive", value: 1 },
          ],
        },
        {
          name: "Affordability",
          subtext: "Impacts Availability & Continuation",
          thoughts: [
            { name: "Expensive", value: 5 },
            { name: "Pricey", value: 4 },
            { name: "Reasonable", value: 3 },
            { name: "Affordable", value: 2 },
            { name: "Cheap", value: 1 },
          ],
        },
      ],
      productIntention:
        "Breeze-E targets customers looking for a modern and quiet cooling solution, offering an innovative airless fan design that delivers efficient airflow with a sleek, minimalist look.",
    },
    {
      productId: "productIdEaseE",
      businessId: "businessId5", // Assuming Appliances Industry
      ownerId: "userId8",
      name: "Ease-E",
      description:
        "Ease-E is a high-tech smart blender that takes the hassle out of meal preparation. With its powerful motor and smart technology, it offers multiple blending modes to ensure perfect consistency every time. Ideal for smoothies, soups, and sauces, this blender makes healthy living effortless.",
      tags: ["blender", "smart", "appliance"],
      category: "Appliances",
      deliveryTime: "2 - 5 days",
      price: 10499.43, // Price in PHP (approx. 184 USD)
      discount: 0.2, // Discount as a decimal (20%)
      coverImage:
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981455/my-uploads/nextgen/commons/Appliance/2/Ease-E_Blend_Banner_x1ge4v.png",
      images: [
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981456/my-uploads/nextgen/commons/Appliance/2/en-psp-sc-braun-jugblender-powerblend-9-programs-1280x1440_w3oznm.png",
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981456/my-uploads/nextgen/commons/Appliance/2/en-PSP-SCS-braun-PowerBlend-9-2022-highlights-04-Speed-Season-Summer-1080x810_grysj7.png",
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981458/my-uploads/nextgen/commons/Appliance/2/en-psp-scs-braun-PowerBlend-9-highlights-def-03-powerful-motor-1080x806_fse2um.png",
      ],
      ratings: 4.8,
      specifications: [
        { attribute: "Power", value: "1200W" },
        { attribute: "Capacity", value: "2 liters" },
        { attribute: "Material", value: "BPA-free plastic" },
        { attribute: "Modes", value: "6 blending modes" },
      ],
      createdAt: new Date(),
      isFeatured: false,
      deliveryLocation: "Overseas",
      productIntention:
        "Ease-E is aimed at health enthusiasts and busy individuals who need a smart, powerful blender to make meal preparation easier and more efficient.",
      faqs: [
        {
          productId: "productIdEaseE",
          questions: "What is Ease-E?",
          answer:
            "Ease-E is a high-tech smart blender designed to simplify meal preparation with its powerful motor and smart technology.",
        },
        {
          productId: "productIdEaseE",
          questions: "What types of foods can I prepare with Ease-E?",
          answer:
            "You can use Ease-E for making smoothies, soups, sauces, and more with its multiple blending modes.",
        },
        {
          productId: "productIdEaseE",
          questions: "Is Ease-E easy to clean?",
          answer:
            "Yes, Ease-E features a detachable blending jar that makes cleaning convenient.",
        },
        {
          productId: "productIdEaseE",
          questions: "How powerful is the motor of Ease-E?",
          answer:
            "Ease-E is equipped with a powerful 1200W motor for efficient blending.",
        },
      ],
      addOns: [
        {
          productId: "productIdEaseE",
          header: "Blender Travel Jar",
          description:
            "Convenient travel jar for on-the-go smoothies, compatible with your Ease-E blender.",
          price: 900,
        },
        {
          productId: "productIdEaseE",
          header: "Recipe Book",
          description:
            "Explore delicious recipes specifically designed for your Ease-E smart blender.",
          price: 600,
        },
        {
          productId: "productIdEaseE",
          header: "Cleaning Brush Set",
          description:
            "A set of brushes designed to easily clean your blender's hard-to-reach areas.",
          price: 350,
        },
      ],
      qualities: [
        {
          name: "Innovation",
          subtext: "Smart Technology for Effortless Blending",
          thoughts: [
            { name: "Highly Innovative", value: 5 },
            { name: "Very Innovative", value: 4 },
            { name: "Moderately Innovative", value: 3 },
            { name: "Somewhat Innovative", value: 2 },
            { name: "Not Innovative", value: 1 },
          ],
        },
        {
          name: "Functionality",
          subtext: "Multiple Blending Modes for Versatility",
          thoughts: [
            { name: "Extremely Functional", value: 5 },
            { name: "Very Functional", value: 4 },
            { name: "Moderately Functional", value: 3 },
            { name: "Somewhat Functional", value: 2 },
            { name: "Not Functional", value: 1 },
          ],
        },
        {
          name: "Design",
          subtext: "Sleek and Modern Appearance",
          thoughts: [
            { name: "Extremely Attractive", value: 5 },
            { name: "Very Attractive", value: 4 },
            { name: "Moderately Attractive", value: 3 },
            { name: "Somewhat Unattractive", value: 2 },
            { name: "Very Unattractive", value: 1 },
          ],
        },
        {
          name: "Affordability",
          subtext: "Impacts Availability & Continuation",
          thoughts: [
            { name: "Expensive", value: 5 },
            { name: "Pricey", value: 4 },
            { name: "Reasonable", value: 3 },
            { name: "Affordable", value: 2 },
            { name: "Cheap", value: 1 },
          ],
        },
      ],
    },
    {
      productId: "productId7",
      businessId: "businessId5", // Appliances Industry
      ownerId: "userId8",
      name: "CookwaresSaucyPan",
      description:
        "The CookwaresSaucyPan is perfect for your everyday cooking needs. Made with high-quality materials, this flat frying pan ensures even heat distribution. Whether you're frying eggs or sautéing vegetables, this pan makes cooking effortless.",
      tags: ["frying pan", "cookware", "non-stick"],
      category: "Cookware",
      deliveryTime: "2 - 5 days",
      price: 800, // 299 USD converted to PHP
      discount: 0.1, // 10% discount in decimal
      coverImage:
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981461/my-uploads/nextgen/commons/cookwares/1/cookwaresaucypanbanner_i6chmg.jpg",
      images: [
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981461/my-uploads/nextgen/commons/cookwares/1/non-stick-tawa-iron-pan-30cm-casio-baazwsh-181758_xisqse.png",
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981461/my-uploads/nextgen/commons/cookwares/1/61AiuGkOh6L._AC_UF894_1000_QL80__n1npln.jpg",
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981460/my-uploads/nextgen/commons/cookwares/1/11176747_800x_bpi9gm.webp",
      ],
      ratings: 4.2,
      specifications: [
        { attribute: "Material", value: "Aluminum" },
        { attribute: "Size", value: "30 cm" },
        { attribute: "Non-stick", value: "Yes" },
        { attribute: "Weight", value: "1 kg" },
      ],
      createdAt: new Date(),
      isFeatured: false,
      deliveryLocation: "Overseas",
      faqs: [
        {
          productId: "productId7",
          questions: "What is CookwaresSaucyPan?",
          answer:
            "CookwaresSaucyPan is a high-quality frying pan designed for everyday cooking with even heat distribution.",
        },
        {
          productId: "productId7",
          questions: "What material is the CookwaresSaucyPan made of?",
          answer:
            "It is made from aluminum, which ensures durability and efficient heat distribution.",
        },
        {
          productId: "productId7",
          questions: "Is the CookwaresSaucyPan non-stick?",
          answer:
            "Yes, the CookwaresSaucyPan features a non-stick surface for easy cooking and cleaning.",
        },
        {
          productId: "productId7",
          questions: "What size is the CookwaresSaucyPan?",
          answer:
            "The CookwaresSaucyPan has a size of 30 cm, making it ideal for various cooking tasks.",
        },
      ],
      addOns: [
        {
          productId: "productId7",
          header: "Silicone Spatula Set",
          description:
            "A set of high-quality silicone spatulas perfect for non-stick cookware.",
          price: 400,
        },
        {
          productId: "productId7",
          header: "Cookware Protector Liners",
          description:
            "Protect your pans with these durable, non-stick liners that keep your cookware scratch-free.",
          price: 300,
        },
        {
          productId: "productId7",
          header: "Cookbook for Everyday Meals",
          description:
            "A cookbook filled with delicious and easy recipes tailored for your frying pan.",
          price: 500,
        },
      ],
      qualities: [
        {
          name: "Durability",
          subtext: "High-Quality Aluminum Construction",
          thoughts: [
            { name: "Extremely Durable", value: 5 },
            { name: "Very Durable", value: 4 },
            { name: "Moderately Durable", value: 3 },
            { name: "Somewhat Durable", value: 2 },
            { name: "Not Durable", value: 1 },
          ],
        },
        {
          name: "Functionality",
          subtext: "Non-Stick Surface for Easy Cooking",
          thoughts: [
            { name: "Extremely Functional", value: 5 },
            { name: "Very Functional", value: 4 },
            { name: "Moderately Functional", value: 3 },
            { name: "Somewhat Functional", value: 2 },
            { name: "Not Functional", value: 1 },
          ],
        },
        {
          name: "Design",
          subtext: "Ergonomic and Practical Design",
          thoughts: [
            { name: "Extremely Attractive", value: 5 },
            { name: "Very Attractive", value: 4 },
            { name: "Moderately Attractive", value: 3 },
            { name: "Somewhat Unattractive", value: 2 },
            { name: "Very Unattractive", value: 1 },
          ],
        },
        {
          name: "Affordability",
          subtext: "Impacts Availability & Continuation",
          thoughts: [
            { name: "Expensive", value: 5 },
            { name: "Pricey", value: 4 },
            { name: "Reasonable", value: 3 },
            { name: "Affordable", value: 2 },
            { name: "Cheap", value: 1 },
          ],
        },
      ],
      productIntention:
        "CookwaresSaucyPan is intended for everyday cooks looking for a reliable, non-stick frying pan that combines affordability with high-quality materials and heat distribution.",
    },
    {
      productId: "productId8",
      businessId: "businessId5", // Appliances Industry
      ownerId: "userId8",
      name: "CookwareBelle",
      deliveryTime: "2 - 5 days",
      description:
        "CookwareBelle offers a variety of pots and pans designed for home cooks. Each piece is crafted to provide optimal heat retention and durability. Upgrade your kitchen essentials with these stylish and functional cookware options.",
      tags: ["cookware", "pots", "pans"],
      category: "Cookware",
      price: 1000, // 299 USD converted to PHP
      discount: 0.15, // 15% discount in decimal
      coverImage:
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981462/my-uploads/nextgen/commons/cookwares/2/cookwarebellepansbanner_gghiff.png",
      images: [
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981463/my-uploads/nextgen/commons/cookwares/2/vn-11134207-7qukw-lfrrvilbkqcqb7_db7ale.png",
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981461/my-uploads/nextgen/commons/cookwares/2/395927_666x468_nagqb7.jpg",
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981461/my-uploads/nextgen/commons/cookwares/2/379945_666x468_lpxl9c.jpg",
      ],
      ratings: 4.5,
      specifications: [
        { attribute: "Material", value: "Stainless Steel" },
        { attribute: "Type", value: "Versatile Cookware Set" },
        { attribute: "Oven Safe", value: "Yes" },
        { attribute: "Weight", value: "1.5 kg" },
      ],
      faqs: [
        {
          productId: "productId8",
          questions: "What is CookwareBelle?",
          answer:
            "CookwareBelle is a collection of high-quality pots and pans designed for versatile cooking needs.",
        },
        {
          productId: "productId8",
          questions: "What materials are used in CookwareBelle products?",
          answer:
            "CookwareBelle items are made from durable materials such as stainless steel and aluminum.",
        },
        {
          productId: "productId8",
          questions: "Are CookwareBelle products dishwasher safe?",
          answer:
            "Yes, most CookwareBelle products are dishwasher safe for easy cleaning.",
        },
        {
          productId: "productId8",
          questions: "Can CookwareBelle be used on induction cooktops?",
          answer:
            "Yes, many CookwareBelle pots and pans are compatible with induction cooktops.",
        },
      ],
      qualities: [
        {
          name: "Durability",
          subtext: "High-Quality Stainless Steel Construction",
          thoughts: [
            { name: "Extremely Durable", value: 5 },
            { name: "Very Durable", value: 4 },
            { name: "Moderately Durable", value: 3 },
            { name: "Somewhat Durable", value: 2 },
            { name: "Not Durable", value: 1 },
          ],
        },
        {
          name: "Functionality",
          subtext: "Versatile Cookware for Various Cooking Needs",
          thoughts: [
            { name: "Extremely Functional", value: 5 },
            { name: "Very Functional", value: 4 },
            { name: "Moderately Functional", value: 3 },
            { name: "Somewhat Functional", value: 2 },
            { name: "Not Functional", value: 1 },
          ],
        },
        {
          name: "Design",
          subtext: "Stylish and Modern Look",
          thoughts: [
            { name: "Extremely Attractive", value: 5 },
            { name: "Very Attractive", value: 4 },
            { name: "Moderately Attractive", value: 3 },
            { name: "Somewhat Unattractive", value: 2 },
            { name: "Very Unattractive", value: 1 },
          ],
        },
        {
          name: "Affordability",
          subtext: "Impacts Availability & Continuation",
          thoughts: [
            { name: "Expensive", value: 5 },
            { name: "Pricey", value: 4 },
            { name: "Reasonable", value: 3 },
            { name: "Affordable", value: 2 },
            { name: "Cheap", value: 1 },
          ],
        },
      ],
      addOns: [
        {
          productId: "productId8",
          header: "Cookware Set Cover",
          description:
            "A protective cover designed to fit your CookwareBelle set, keeping it dust-free and pristine.",
          price: 600,
        },
        {
          productId: "productId8",
          header: "Heat-Resistant Cooking Gloves",
          description:
            "Protect your hands while cooking with these stylish and durable heat-resistant gloves.",
          price: 350,
        },
        {
          productId: "productId8",
          header: "Multi-Purpose Cutting Board",
          description:
            "A sturdy cutting board perfect for all your chopping and slicing needs, compatible with all CookwareBelle products.",
          price: 450,
        },
      ],
      createdAt: new Date(),
      isFeatured: false,
      deliveryLocation: "Overseas",
      productIntention:
        "CookwareBelle is marketed as an essential cookware collection, designed for home cooks seeking durable, stylish, and functional pots and pans for a variety of cooking needs.",
    },
  ],
};

export { BUSINESS_PRODUCTS };
