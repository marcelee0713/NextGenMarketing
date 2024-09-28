import { ServiceQuestions } from "@/interfaces/services/services.interface";

/**
 * The key string is the serviceId
 */
const SERVICE_QUESTIONS: Record<string, ServiceQuestions[]> = {
  serviceId1: [
    {
      serviceId: "serviceId1",
      userId: "userId1",
      question: "What initial steps do you recommend for improving SEO?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "serviceId1",
      userId: "userId2",
      question: "How do you stay updated with the latest SEO trends?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "serviceId1",
      userId: "userId3",
      question: "Can you provide case studies of past SEO successes?",
      answer: null,
      createdAt: new Date(),
    },
  ],
  serviceId2: [
    {
      serviceId: "serviceId2",
      userId: "userId4",
      question: "How do you tailor content strategies to different audiences?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "serviceId2",
      userId: "userId5",
      question:
        "What role does keyword research play in your content marketing?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "serviceId2",
      userId: "userId6",
      question: "How frequently do you recommend updating existing content?",
      answer: null,
      createdAt: new Date(),
    },
  ],
  serviceId3: [
    {
      serviceId: "serviceId3",
      userId: "userId7",
      question: "What strategies do you use to grow social media followings?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "serviceId3",
      userId: "userId8",
      question: "How do you engage with followers effectively on social media?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "serviceId3",
      userId: "userId9",
      question: "Can you help in creating a social media calendar?",
      answer: null,
      createdAt: new Date(),
    },
  ],
  serviceId4: [
    {
      serviceId: "serviceId4",
      userId: "userId10",
      question: "What platforms do you focus on for PPC campaigns?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "serviceId4",
      userId: "userId1",
      question: "How do you optimize ads for better performance?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "serviceId4",
      userId: "userId2",
      question: "What types of ad formats do you recommend?",
      answer: null,
      createdAt: new Date(),
    },
  ],
  serviceId5: [
    {
      serviceId: "serviceId5",
      userId: "userId3",
      question: "What best practices do you follow for email design?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "serviceId5",
      userId: "userId4",
      question: "How do you personalize email campaigns?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "serviceId5",
      userId: "userId5",
      question: "What tools do you recommend for tracking email performance?",
      answer: null,
      createdAt: new Date(),
    },
  ],
  serviceId6: [
    {
      serviceId: "serviceId6",
      userId: "userId6",
      question: "How do you ensure websites are mobile-friendly?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "serviceId6",
      userId: "userId7",
      question: "What technologies do you use for website development?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "serviceId6",
      userId: "userId8",
      question: "Can you assist with website security and compliance?",
      answer: null,
      createdAt: new Date(),
    },
  ],
  serviceId7: [
    {
      serviceId: "serviceId7",
      userId: "userId9",
      question: "How do you identify target market segments?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "serviceId7",
      userId: "userId10",
      question: "What tools do you use for data analysis in market research?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "serviceId7",
      userId: "userId1",
      question: "Can you provide actionable insights from the research?",
      answer: null,
      createdAt: new Date(),
    },
  ],
  serviceId8: [
    {
      serviceId: "serviceId8",
      userId: "userId2",
      question: "How do you evaluate the success of social media ads?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "serviceId8",
      userId: "userId3",
      question: "What audience targeting options do you use for ads?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "serviceId8",
      userId: "userId4",
      question: "How do you manage ad budgets effectively?",
      answer: null,
      createdAt: new Date(),
    },
  ],
  serviceId9: [
    {
      serviceId: "serviceId9",
      userId: "userId5",
      question: "How do you select venues for event marketing?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "serviceId9",
      userId: "userId6",
      question: "What metrics do you track for event success?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "serviceId9",
      userId: "userId7",
      question: "Can you help with attendee engagement strategies?",
      answer: null,
      createdAt: new Date(),
    },
  ],
  serviceId10: [
    {
      serviceId: "serviceId10",
      userId: "userId8",
      question: "How do you ensure e-commerce sites are user-friendly?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "serviceId10",
      userId: "userId9",
      question: "What payment processing systems do you recommend?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "serviceId10",
      userId: "userId10",
      question: "Can you provide support for product listings?",
      answer: null,
      createdAt: new Date(),
    },
  ],
  serviceId11: [
    {
      serviceId: "serviceId11",
      userId: "userId1",
      question: "How do you determine the target audience for video content?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "serviceId11",
      userId: "userId2",
      question: "What are your techniques for engaging storytelling in videos?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "serviceId11",
      userId: "userId3",
      question: "Can you help with video distribution strategies?",
      answer: null,
      createdAt: new Date(),
    },
  ],
  serviceId12: [
    {
      serviceId: "serviceId12",
      userId: "userId4",
      question: "How do you assess customer needs during market research?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "serviceId12",
      userId: "userId5",
      question: "What type of data do you prioritize in your research?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "serviceId12",
      userId: "userId6",
      question: "Can you present findings in a comprehensive report?",
      answer: null,
      createdAt: new Date(),
    },
  ],
  serviceId13: [
    {
      serviceId: "serviceId13",
      userId: "userId7",
      question:
        "What is your process for creating effective social media campaigns?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "serviceId13",
      userId: "userId8",
      question: "How do you incorporate user-generated content in ads?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "serviceId13",
      userId: "userId9",
      question: "Can you optimize social media ads based on performance data?",
      answer: null,
      createdAt: new Date(),
    },
  ],
  serviceId14: [
    {
      serviceId: "serviceId14",
      userId: "userId10",
      question:
        "What are your strategies for building relationships with influencers?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "serviceId14",
      userId: "userId1",
      question: "How do you measure influencer effectiveness?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "serviceId14",
      userId: "userId2",
      question:
        "Can you assist with contract negotiations for influencer partnerships?",
      answer: null,
      createdAt: new Date(),
    },
  ],
  serviceId15: [
    {
      serviceId: "serviceId15",
      userId: "userId3",
      question: "What techniques do you use for effective market positioning?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "serviceId15",
      userId: "userId4",
      question: "How do you analyze competitor strategies?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "serviceId15",
      userId: "userId5",
      question:
        "Can you help in identifying unique selling propositions (USPs)?",
      answer: null,
      createdAt: new Date(),
    },
  ],
  serviceId16: [
    {
      serviceId: "serviceId16",
      userId: "userId6",
      question: "What methods do you use for gathering customer feedback?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "serviceId16",
      userId: "userId7",
      question:
        "How do you analyze and implement feedback in product development?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "serviceId16",
      userId: "userId8",
      question: "Can you assist with creating surveys or feedback forms?",
      answer: null,
      createdAt: new Date(),
    },
  ],
};

export { SERVICE_QUESTIONS };
