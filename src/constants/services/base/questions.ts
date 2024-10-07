import { ServiceQuestions } from "@/interfaces/services/services.interface";

/**
 * The key string is the service
 */
const SERVICE_QUESTIONS: Record<string, ServiceQuestions[]> = {
  service1: [
    {
      serviceId: "service1",
      userId: "userId1",
      question: "What initial steps do you recommend for improving SEO?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "service1",
      userId: "userId2",
      question: "How do you stay updated with the latest SEO trends?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "service1",
      userId: "userId3",
      question: "Can you provide case studies of past SEO successes?",
      answer: null,
      createdAt: new Date(),
    },
  ],
  service2: [
    {
      serviceId: "service2",
      userId: "userId4",
      question: "How do you tailor content strategies to different audiences?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "service2",
      userId: "userId5",
      question:
        "What role does keyword research play in your content marketing?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "service2",
      userId: "userId6",
      question: "How frequently do you recommend updating existing content?",
      answer: null,
      createdAt: new Date(),
    },
  ],
  service3: [
    {
      serviceId: "service3",
      userId: "userId7",
      question: "What strategies do you use to grow social media followings?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "service3",
      userId: "userId8",
      question: "How do you engage with followers effectively on social media?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "service3",
      userId: "userId9",
      question: "Can you help in creating a social media calendar?",
      answer: null,
      createdAt: new Date(),
    },
  ],
  service4: [
    {
      serviceId: "service4",
      userId: "userId10",
      question: "What platforms do you focus on for PPC campaigns?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "service4",
      userId: "userId1",
      question: "How do you optimize ads for better performance?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "service4",
      userId: "userId2",
      question: "What types of ad formats do you recommend?",
      answer: null,
      createdAt: new Date(),
    },
  ],
  service5: [
    {
      serviceId: "service5",
      userId: "userId3",
      question: "What best practices do you follow for email design?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "service5",
      userId: "userId4",
      question: "How do you personalize email campaigns?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "service5",
      userId: "userId5",
      question: "What tools do you recommend for tracking email performance?",
      answer: null,
      createdAt: new Date(),
    },
  ],
  service6: [
    {
      serviceId: "service6",
      userId: "userId6",
      question: "How do you ensure websites are mobile-friendly?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "service6",
      userId: "userId7",
      question: "What technologies do you use for website development?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "service6",
      userId: "userId8",
      question: "Can you assist with website security and compliance?",
      answer: null,
      createdAt: new Date(),
    },
  ],
  service7: [
    {
      serviceId: "service7",
      userId: "userId9",
      question: "How do you identify target market segments?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "service7",
      userId: "userId10",
      question: "What tools do you use for data analysis in market research?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "service7",
      userId: "userId1",
      question: "Can you provide actionable insights from the research?",
      answer: null,
      createdAt: new Date(),
    },
  ],
  service8: [
    {
      serviceId: "service8",
      userId: "userId2",
      question: "How do you evaluate the success of social media ads?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "service8",
      userId: "userId3",
      question: "What audience targeting options do you use for ads?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "service8",
      userId: "userId4",
      question: "How do you manage ad budgets effectively?",
      answer: null,
      createdAt: new Date(),
    },
  ],
  service9: [
    {
      serviceId: "service9",
      userId: "userId5",
      question: "How do you select venues for event marketing?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "service9",
      userId: "userId6",
      question: "What metrics do you track for event success?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "service9",
      userId: "userId7",
      question: "Can you help with attendee engagement strategies?",
      answer: null,
      createdAt: new Date(),
    },
  ],
  service10: [
    {
      serviceId: "service10",
      userId: "userId8",
      question: "How do you ensure e-commerce sites are user-friendly?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "service10",
      userId: "userId9",
      question: "What payment processing systems do you recommend?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "service10",
      userId: "userId10",
      question: "Can you provide support for product listings?",
      answer: null,
      createdAt: new Date(),
    },
  ],
  service11: [
    {
      serviceId: "service11",
      userId: "userId1",
      question: "How do you determine the target audience for video content?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "service11",
      userId: "userId2",
      question: "What are your techniques for engaging storytelling in videos?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "service11",
      userId: "userId3",
      question: "Can you help with video distribution strategies?",
      answer: null,
      createdAt: new Date(),
    },
  ],
  service12: [
    {
      serviceId: "service12",
      userId: "userId4",
      question: "How do you assess customer needs during market research?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "service12",
      userId: "userId5",
      question: "What type of data do you prioritize in your research?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "service12",
      userId: "userId6",
      question: "Can you present findings in a comprehensive report?",
      answer: null,
      createdAt: new Date(),
    },
  ],
  service13: [
    {
      serviceId: "service13",
      userId: "userId7",
      question:
        "What is your process for creating effective social media campaigns?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "service13",
      userId: "userId8",
      question: "How do you incorporate user-generated content in ads?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "service13",
      userId: "userId9",
      question: "Can you optimize social media ads based on performance data?",
      answer: null,
      createdAt: new Date(),
    },
  ],
  service14: [
    {
      serviceId: "service14",
      userId: "userId10",
      question:
        "What are your strategies for building relationships with influencers?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "service14",
      userId: "userId1",
      question: "How do you measure influencer effectiveness?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "service14",
      userId: "userId2",
      question:
        "Can you assist with contract negotiations for influencer partnerships?",
      answer: null,
      createdAt: new Date(),
    },
  ],
  service15: [
    {
      serviceId: "service15",
      userId: "userId3",
      question: "What techniques do you use for effective market positioning?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "service15",
      userId: "userId4",
      question: "How do you analyze competitor strategies?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "service15",
      userId: "userId5",
      question:
        "Can you help in identifying unique selling propositions (USPs)?",
      answer: null,
      createdAt: new Date(),
    },
  ],
  service16: [
    {
      serviceId: "service16",
      userId: "userId6",
      question: "What methods do you use for gathering customer feedback?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "service16",
      userId: "userId7",
      question:
        "How do you analyze and implement feedback in product development?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "service16",
      userId: "userId8",
      question: "Can you assist with creating surveys or feedback forms?",
      answer: null,
      createdAt: new Date(),
    },
  ],
  service17: [
    {
      serviceId: "service17",
      userId: "userId3",
      question:
        "How long does it take to see results from affiliate campaigns?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "service17",
      userId: "userId5",
      question: "What metrics do you track to measure campaign success?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "service17",
      userId: "userId9",
      question: "Do you offer custom campaign strategies for different niches?",
      answer: null,
      createdAt: new Date(),
    },
  ],
  service18: [
    {
      serviceId: "service18",
      userId: "userId2",
      question: "Can you work with influencers from various platforms?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "service18",
      userId: "userId6",
      question: "How do you track conversions from influencer campaigns?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "service18",
      userId: "userId8",
      question: "What are the best platforms for affiliate marketing?",
      answer: null,
      createdAt: new Date(),
    },
  ],
  service19: [
    {
      serviceId: "service19",
      userId: "userId1",
      question: "How do you onboard affiliates into a new campaign?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "service19",
      userId: "userId4",
      question: "What resources do you provide for affiliate training?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "service19",
      userId: "userId7",
      question: "Do you work with international affiliates?",
      answer: null,
      createdAt: new Date(),
    },
  ],
  service20: [
    {
      serviceId: "service20",
      userId: "userId5",
      question: "How do you handle affiliate commissions and payouts?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "service20",
      userId: "userId3",
      question:
        "Can you help with affiliate marketing for new product launches?",
      answer: null,
      createdAt: new Date(),
    },
    {
      serviceId: "service20",
      userId: "userId10",
      question: "What tracking tools do you use for performance analysis?",
      answer: null,
      createdAt: new Date(),
    },
  ],
};

export { SERVICE_QUESTIONS };
