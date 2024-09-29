import { IProductEvaluation } from "@/interfaces/user/user.product.interface";

const PRODUCT_EVALUATIONS: Record<string, IProductEvaluation[]> = {
  // Evaluations for ProductId1 (Organic Apples)
  productId1: [
    {
      evaluationId: "evaluationId1",
      productId: "productId1",
      reviewerId: "partnerId3",
      rating: 4.4,
      comment: "Crisp and fresh, but slightly smaller than expected.",
      createdAt: new Date(),
    },
    {
      evaluationId: "evaluationId2",
      productId: "productId1",
      reviewerId: "userId7",
      rating: 4.5,
      comment: "Very tasty and healthy apples, perfect for a snack.",
      createdAt: new Date(),
    },
    {
      evaluationId: "evaluationId3",
      productId: "productId1",
      reviewerId: "partnerId6",
      rating: 4.6,
      comment: "Best organic apples I've had in a while!",
      createdAt: new Date(),
    },
  ],

  // Evaluations for ProductId2 (Organic Carrots)
  productId2: [
    {
      evaluationId: "evaluationId4",
      productId: "productId2",
      reviewerId: "userId9",
      rating: 4.6,
      comment: "Great for juicing, very fresh and flavorful.",
      createdAt: new Date(),
    },
    {
      evaluationId: "evaluationId5",
      productId: "productId2",
      reviewerId: "partnerId2",
      rating: 5.0,
      comment: "These carrots are fantastic! Really crunchy.",
      createdAt: new Date(),
    },
    {
      evaluationId: "evaluationId6",
      productId: "productId2",
      reviewerId: "partnerId4",
      rating: 4.8,
      comment: "Perfect for salads, excellent quality.",
      createdAt: new Date(),
    },
    {
      evaluationId: "evaluationId7",
      productId: "productId2",
      reviewerId: "userId10",
      rating: 4.8,
      comment: "Loved them! Extremely fresh.",
      createdAt: new Date(),
    },
    {
      evaluationId: "evaluationId8",
      productId: "productId2",
      reviewerId: "partnerId1",
      rating: 4.3,
      comment: "Good, but a few were a little soft.",
      createdAt: new Date(),
    },
  ],

  // Evaluations for ProductId3 (Custom Software Development)
  productId3: [
    {
      evaluationId: "evaluationId9",
      productId: "productId3",
      reviewerId: "partnerId8",
      rating: 4.6,
      comment: "Great service, the custom software met our needs.",
      createdAt: new Date(),
    },
    {
      evaluationId: "evaluationId10",
      productId: "productId3",
      reviewerId: "userId5",
      rating: 4.9,
      comment: "Excellent development team, top-notch results.",
      createdAt: new Date(),
    },
    {
      evaluationId: "evaluationId11",
      productId: "productId3",
      reviewerId: "partnerId7",
      rating: 5.0,
      comment: "The best custom software solution we've ever used.",
      createdAt: new Date(),
    },
    {
      evaluationId: "evaluationId12",
      productId: "productId3",
      reviewerId: "userId4",
      rating: 4.7,
      comment: "Very happy with the outcome, will definitely recommend.",
      createdAt: new Date(),
    },
  ],

  // Evaluations for ProductId4 (Brand Identity Design)
  productId4: [
    {
      evaluationId: "evaluationId13",
      productId: "productId4",
      reviewerId: "partnerId5",
      rating: 4.6,
      comment: "Very professional branding work, made a difference.",
      createdAt: new Date(),
    },
    {
      evaluationId: "evaluationId14",
      productId: "productId4",
      reviewerId: "userId3",
      rating: 5.0,
      comment: "Incredible design! It completely transformed our brand.",
      createdAt: new Date(),
    },
    {
      evaluationId: "evaluationId15",
      productId: "productId4",
      reviewerId: "partnerId9",
      rating: 4.9,
      comment: "Amazing attention to detail, highly recommended.",
      createdAt: new Date(),
    },
    {
      evaluationId: "evaluationId16",
      productId: "productId4",
      reviewerId: "userId2",
      rating: 5.0,
      comment: "Fantastic work! Would hire again for sure.",
      createdAt: new Date(),
    },
    {
      evaluationId: "evaluationId17",
      productId: "productId4",
      reviewerId: "partnerId4",
      rating: 5.0,
      comment: "Professional and creative designs, we loved them.",
      createdAt: new Date(),
    },
  ],

  // Evaluations for ProductId5 (Social Media Graphics Package)
  productId5: [
    {
      evaluationId: "evaluationId18",
      productId: "productId5",
      reviewerId: "partnerId3",
      rating: 4.8,
      comment: "Really helped our social media stand out!",
      createdAt: new Date(),
    },
    {
      evaluationId: "evaluationId19",
      productId: "productId5",
      reviewerId: "userId6",
      rating: 4.9,
      comment: "Great design work, we got a lot of engagement with these.",
      createdAt: new Date(),
    },
    {
      evaluationId: "evaluationId20",
      productId: "productId5",
      reviewerId: "partnerId7",
      rating: 4.3,
      comment: "Good graphics but a bit expensive for what we got.",
      createdAt: new Date(),
    },
    {
      evaluationId: "evaluationId21",
      productId: "productId5",
      reviewerId: "userId4",
      rating: 4.4,
      comment: "Solid work but could use a bit more customization.",
      createdAt: new Date(),
    },
  ],

  // Evaluations for ProductId6 (Corporate Catering Package)
  productId6: [
    {
      evaluationId: "evaluationId22",
      productId: "productId6",
      reviewerId: "partnerId10",
      rating: 5.0,
      comment: "Fantastic food and great service. Highly recommended.",
      createdAt: new Date(),
    },
    {
      evaluationId: "evaluationId23",
      productId: "productId6",
      reviewerId: "userId7",
      rating: 4.0,
      comment: "Good food but service was a bit slow.",
      createdAt: new Date(),
    },
    {
      evaluationId: "evaluationId24",
      productId: "productId6",
      reviewerId: "partnerId5",
      rating: 4.5,
      comment: "Great catering for our event. Well done.",
      createdAt: new Date(),
    },
    {
      evaluationId: "evaluationId25",
      productId: "productId6",
      reviewerId: "userId9",
      rating: 4.5,
      comment: "Good food, perfect for corporate events.",
      createdAt: new Date(),
    },
    {
      evaluationId: "evaluationId26",
      productId: "productId6",
      reviewerId: "partnerId4",
      rating: 5.0,
      comment: "Best catering we've ever used for an event.",
      createdAt: new Date(),
    },
  ],

  // Evaluations for ProductId7 (Sustainability Consulting Service)
  productId7: [
    {
      evaluationId: "evaluationId27",
      productId: "productId7",
      reviewerId: "userId2",
      rating: 4.4,
      comment: "Good insights on how to improve our sustainability efforts.",
      createdAt: new Date(),
    },
    {
      evaluationId: "evaluationId28",
      productId: "productId7",
      reviewerId: "partnerId9",
      rating: 4.2,
      comment: "Solid service but a bit pricey for what we got.",
      createdAt: new Date(),
    },
    {
      evaluationId: "evaluationId29",
      productId: "productId7",
      reviewerId: "userId10",
      rating: 4.5,
      comment: "Excellent consultancy, very knowledgeable.",
      createdAt: new Date(),
    },
    {
      evaluationId: "evaluationId30",
      productId: "productId7",
      reviewerId: "partnerId6",
      rating: 4.9,
      comment: "Great advice that truly transformed our business practices.",
      createdAt: new Date(),
    },
  ],

  // Evaluations for ProductId8 (Eco-Friendly Packaging Solutions)
  productId8: [
    {
      evaluationId: "evaluationId31",
      productId: "productId8",
      reviewerId: "userId7",
      rating: 4.7,
      comment: "Very durable and eco-friendly packaging options.",
      createdAt: new Date(),
    },
    {
      evaluationId: "evaluationId32",
      productId: "productId8",
      reviewerId: "partnerId2",
      rating: 4.7,
      comment: "Great products and well-suited for our business.",
      createdAt: new Date(),
    },
    {
      evaluationId: "evaluationId33",
      productId: "productId8",
      reviewerId: "partnerId10",
      rating: 4.7,
      comment: "Good for reducing waste while maintaining quality.",
      createdAt: new Date(),
    },
    {
      evaluationId: "evaluationId34",
      productId: "productId8",
      reviewerId: "userId3",
      rating: 4.7,
      comment: "Excellent solution for sustainability needs.",
      createdAt: new Date(),
    },
  ],
};

export { PRODUCT_EVALUATIONS };
