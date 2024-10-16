import { IProduct } from "@/interfaces/user/user.product.interface";

const BUSINESS_PRODUCTS: Record<string, IProduct[]> = {
  businessId1: [
    {
      productId: "productId9",
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
    },
    {
      productId: "productId10",
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
    },
  ],
  businessId2: [
    {
      productId: "productId1",
      businessId: "businessId2",
      ownerId: "userId3",
      name: "Roball",
      description:
        "Roball is a smart, interactive ball designed to keep your pets entertained and engaged. With advanced sensors and AI technology, it responds to your pet's movements, encouraging play and exercise. Whether it's chasing or fetching, Roball promotes a healthy and active lifestyle for your furry friends.",
      tags: ["smart", "pet", "gadget"],
      category: "Gadgets",
      price: 17099, // 299.99 USD converted to PHP (random value)
      discount: 0.1, // 10% discount expressed as a decimal
      coverImage:
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981467/my-uploads/nextgen/featured/ballie/banner_xvuvch.jpg",
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
      price: 7399, // 129.99 USD converted to PHP (random value)
      discount: 0.2, // 20% discount expressed as a decimal
      coverImage:
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1728981470/my-uploads/nextgen/featured/rabbit/banner_rabbit_d8qkae.jpg",
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
      productIntention:
        "BunnyR1 is being tested to gauge its effectiveness as a playful robot companion for children, aimed at enhancing interactive play and learning in the tech-toy market.",
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
      productIntention:
        "LightPhone is being tested to understand its appeal among users seeking a minimalist approach to mobile technology, catering to those who prioritize disconnection from constant notifications.",
    },
    {
      productId: "productId4",
      businessId: "businessId2",
      ownerId: "userId2",
      name: "MyPettyPlant",
      description:
        "MyPettyPlant is an innovative high-tech pot that takes plant care to the next level. Equipped with smart sensors, it monitors soil moisture, light, and temperature to ensure your plant thrives in its environment. With its user-friendly app, you can receive alerts and guidance, making plant parenting easy and enjoyable, so you can cultivate your green thumb with confidence.",
      tags: ["plant", "technology", "smart"],
      category: "Gadgets",
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
      createdAt: new Date(),
      isFeatured: false,
      deliveryLocation: "Domestic",
      productIntention:
        "Sleevey is aimed at casual fashion wearers who are looking for simple, versatile polo shirts, offering comfortable yet stylish clothing for both work and leisure.",
    },
    {
      productId: "productId5", // Assign a unique ID
      businessId: "businessId3", // Clothing industry
      ownerId: "userId5", // User ID for clothing industry
      name: "Minimaly",
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
      isFeatured: true,
      deliveryLocation: "Overseas",
      productIntention:
        "Ease-E is aimed at health enthusiasts and busy individuals who need a smart, powerful blender to make meal preparation easier and more efficient.",
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
      productIntention:
        "CookwaresSaucyPan is intended for everyday cooks looking for a reliable, non-stick frying pan that combines affordability with high-quality materials and heat distribution.",
    },
    {
      productId: "productId8",
      businessId: "businessId5", // Appliances Industry
      ownerId: "userId8",
      name: "CookwareBelle",
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
      createdAt: new Date(),
      isFeatured: false,
      deliveryLocation: "Overseas",
      productIntention:
        "CookwareBelle is marketed as an essential cookware collection, designed for home cooks seeking durable, stylish, and functional pots and pans for a variety of cooking needs.",
    },
  ],
};

export { BUSINESS_PRODUCTS };
