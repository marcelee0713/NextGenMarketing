import { ServiceFAQs } from "@/interfaces/services/services.interface";
/**
 * The key string is the id of the service.
 */
const SERVICES_FAQS: Record<string, ServiceFAQs[]> = {
  service1: [
    {
      questions: "What SEO strategies do you use?",
      answer:
        "We utilize a combination of on-page and off-page SEO strategies tailored to your business needs.",
      serviceId: "service1",
    },
    {
      questions: "How long does it take to see results from SEO?",
      answer:
        "Typically, it takes 3-6 months to see significant results from our SEO efforts.",
      serviceId: "service1",
    },
    {
      questions: "Do you provide ongoing SEO support?",
      answer:
        "Yes, we offer ongoing SEO support and regular performance reports.",
      serviceId: "service1",
    },
  ],
  service2: [
    {
      questions: "What does your content marketing service include?",
      answer:
        "Our content marketing service includes strategy development, content creation, and distribution.",
      serviceId: "service2",
    },
    {
      questions: "How do you measure the success of content marketing?",
      answer:
        "We measure success through engagement metrics, website traffic, and conversion rates.",
      serviceId: "service2",
    },
    {
      questions: "Can you create content for my specific audience?",
      answer:
        "Absolutely! We tailor our content to meet the preferences and needs of your target audience.",
      serviceId: "service2",
    },
  ],
  service3: [
    {
      questions: "What platforms do you manage for social media?",
      answer:
        "We manage all major platforms, including Facebook, Instagram, Twitter, and LinkedIn.",
      serviceId: "service3",
    },
    {
      questions: "How do you increase engagement on social media?",
      answer:
        "We use targeted strategies, engaging content, and community management to boost engagement.",
      serviceId: "service3",
    },
    {
      questions: "Do you provide analytics for social media campaigns?",
      answer:
        "Yes, we provide comprehensive analytics and reports for all social media campaigns.",
      serviceId: "service3",
    },
  ],
  service4: [
    {
      questions: "What is PPC advertising?",
      answer:
        "PPC stands for Pay-Per-Click, a model where advertisers pay for each click on their ads.",
      serviceId: "service4",
    },
    {
      questions: "How do you determine the budget for PPC campaigns?",
      answer:
        "We analyze your goals and market to recommend an appropriate budget for your PPC campaigns.",
      serviceId: "service4",
    },
    {
      questions: "Can you manage PPC across multiple platforms?",
      answer:
        "Yes, we can manage PPC campaigns on Google Ads, Facebook Ads, and more.",
      serviceId: "service4",
    },
  ],
  service5: [
    {
      questions: "What are the benefits of email marketing?",
      answer:
        "Email marketing allows for direct communication with your audience and can drive conversions effectively.",
      serviceId: "service5",
    },
    {
      questions: "Do you segment email lists?",
      answer:
        "Yes, we segment email lists to ensure personalized and relevant communication.",
      serviceId: "service5",
    },
    {
      questions: "How do you track email campaign performance?",
      answer:
        "We track performance through open rates, click-through rates, and conversion rates.",
      serviceId: "service5",
    },
  ],
  service6: [
    {
      questions: "What is included in your website development service?",
      answer:
        "Our service includes design, development, testing, and deployment of custom websites.",
      serviceId: "service6",
    },
    {
      questions: "Do you provide ongoing maintenance for websites?",
      answer:
        "Yes, we offer ongoing maintenance packages to keep your website running smoothly.",
      serviceId: "service6",
    },
    {
      questions: "Can you integrate e-commerce features into my website?",
      answer:
        "Absolutely! We can integrate e-commerce functionalities based on your requirements.",
      serviceId: "service6",
    },
  ],
  service7: [
    {
      questions: "How can market research benefit my business?",
      answer:
        "Market research provides insights into customer preferences and market trends, aiding strategic decisions.",
      serviceId: "service7",
    },
    {
      questions: "What methods do you use for market research?",
      answer:
        "We use surveys, interviews, and data analysis to gather comprehensive market insights.",
      serviceId: "service7",
    },
    {
      questions: "Do you provide reports on your findings?",
      answer:
        "Yes, we provide detailed reports summarizing our research findings and recommendations.",
      serviceId: "service7",
    },
  ],
  service8: [
    {
      questions: "What platforms do you use for social media advertising?",
      answer:
        "We use platforms like Facebook, Instagram, Twitter, and LinkedIn for social media advertising.",
      serviceId: "service8",
    },
    {
      questions: "How do you target the right audience for ads?",
      answer:
        "We use demographic and interest-based targeting to reach your ideal audience.",
      serviceId: "service8",
    },
    {
      questions: "Can you create ad content for us?",
      answer:
        "Yes, we can create engaging ad content tailored to your brand's voice and goals.",
      serviceId: "service8",
    },
  ],
  service9: [
    {
      questions: "What is event marketing?",
      answer:
        "Event marketing involves promoting events to engage customers and create brand awareness.",
      serviceId: "service9",
    },
    {
      questions: "How do you ensure a successful event marketing campaign?",
      answer:
        "We plan meticulously, use multiple channels for promotion, and engage with attendees effectively.",
      serviceId: "service9",
    },
    {
      questions: "Do you provide post-event analysis?",
      answer:
        "Yes, we analyze event success through feedback and engagement metrics.",
      serviceId: "service9",
    },
  ],
  service10: [
    {
      questions: "What are e-commerce solutions?",
      answer:
        "E-commerce solutions include everything needed to sell products online, from design to payment processing.",
      serviceId: "service10",
    },
    {
      questions: "Do you offer integration with payment gateways?",
      answer:
        "Yes, we integrate popular payment gateways for smooth transactions.",
      serviceId: "service10",
    },
    {
      questions: "Can you assist with inventory management?",
      answer:
        "Absolutely! We can integrate inventory management systems into your e-commerce platform.",
      serviceId: "service10",
    },
  ],
  service11: [
    {
      questions: "What is influencer marketing?",
      answer:
        "Influencer marketing involves collaborating with influencers to promote your brand to their audience.",
      serviceId: "service11",
    },
    {
      questions: "How do you choose the right influencers?",
      answer:
        "We select influencers based on their relevance to your brand and audience engagement metrics.",
      serviceId: "service11",
    },
    {
      questions: "Can you track the success of influencer campaigns?",
      answer:
        "Yes, we provide metrics on engagement, reach, and conversions from influencer campaigns.",
      serviceId: "service11",
    },
  ],
  service12: [
    {
      questions: "What is included in video production services?",
      answer:
        "Our video production services cover concept development, filming, editing, and distribution.",
      serviceId: "service12",
    },
    {
      questions: "How long does the video production process take?",
      answer:
        "The timeline depends on the project's complexity, but we typically deliver within 4-6 weeks.",
      serviceId: "service12",
    },
    {
      questions: "Can you help with scriptwriting?",
      answer:
        "Yes, we offer scriptwriting services to ensure your video communicates effectively.",
      serviceId: "service12",
    },
  ],
  service13: [
    {
      questions: "What types of graphic design services do you offer?",
      answer:
        "We offer branding, marketing materials, social media graphics, and more.",
      serviceId: "service13",
    },
    {
      questions: "Can you work with existing branding guidelines?",
      answer:
        "Yes, we can create designs that align with your existing branding guidelines.",
      serviceId: "service13",
    },
    {
      questions: "How do you ensure design quality?",
      answer:
        "We follow a rigorous review process to ensure all designs meet high-quality standards.",
      serviceId: "service13",
    },
  ],
  service14: [
    {
      questions: "What is CRM integration?",
      answer:
        "CRM integration connects your customer relationship management system with other business tools.",
      serviceId: "service14",
    },
    {
      questions: "Why is CRM integration important?",
      answer:
        "It streamlines customer interactions and provides a unified view of customer data.",
      serviceId: "service14",
    },
    {
      questions: "Do you support multiple CRM platforms?",
      answer:
        "Yes, we support integration with various CRM platforms, including Salesforce and HubSpot.",
      serviceId: "service14",
    },
  ],
  service15: [
    {
      questions: "What types of advertisements do you create?",
      answer:
        "We create a range of advertisements, including digital ads, print ads, and video commercials.",
      serviceId: "service15",
    },
    {
      questions: "How do you measure ad campaign effectiveness?",
      answer:
        "We measure effectiveness through metrics like impressions, click-through rates, and conversions.",
      serviceId: "service15",
    },
    {
      questions: "Can you help with ad copywriting?",
      answer:
        "Yes, we offer ad copywriting services to ensure your message resonates with your audience.",
      serviceId: "service15",
    },
  ],
  service16: [
    {
      questions: "What is the importance of UX/UI design?",
      answer:
        "UX/UI design enhances user satisfaction by improving usability and accessibility of your product.",
      serviceId: "service16",
    },
    {
      questions: "Do you conduct user testing for designs?",
      answer:
        "Yes, we conduct user testing to gather feedback and iterate on designs.",
      serviceId: "service16",
    },
    {
      questions: "Can you design for mobile and web platforms?",
      answer:
        "Absolutely! We design for both mobile and web platforms to ensure a seamless user experience.",
      serviceId: "service16",
    },
  ],
  service17: [
    {
      questions: "How does affiliate marketing work for product launches?",
      answer:
        "Affiliate marketing connects your product with affiliates who promote it to their audience. You only pay for successful sales or leads generated by their efforts.",
      serviceId: "service17",
    },
    {
      questions: "What types of products can benefit from affiliate campaigns?",
      answer:
        "Any product with a target audience can benefit, especially digital products, software, and consumer goods.",
      serviceId: "service17",
    },
    {
      questions: "How do you select affiliates for product launches?",
      answer:
        "We use data-driven strategies to match your product with affiliates that cater to your target market for maximum impact.",
      serviceId: "service17",
    },
  ],
  service18: [
    {
      questions: "How do influencers differ from affiliates in marketing?",
      answer:
        "Influencers focus on brand awareness through authentic content, while affiliates focus on driving conversions with performance-based marketing.",
      serviceId: "service18",
    },
    {
      questions: "Can I track the performance of influencer campaigns?",
      answer:
        "Yes, we provide detailed analytics on campaign reach, engagement, and conversions to measure the success of influencer campaigns.",
      serviceId: "service18",
    },
    {
      questions: "How do you ensure influencer authenticity?",
      answer:
        "We carefully vet influencers to ensure they align with your brand's values and audience, promoting genuine engagement.",
      serviceId: "service18",
    },
  ],
  service19: [
    {
      questions: "How do I build a sustainable affiliate program?",
      answer:
        "We help you recruit reliable affiliates, manage campaigns, and track performance to ensure long-term growth.",
      serviceId: "service19",
    },
    {
      questions: "Can I scale my affiliate program over time?",
      answer:
        "Yes, we offer solutions to grow your affiliate network and optimize your campaigns for increased revenue as your business scales.",
      serviceId: "service19",
    },
    {
      questions: "What tools do you use for tracking affiliate performance?",
      answer:
        "We utilize advanced tracking tools that provide insights into conversions, traffic sources, and affiliate performance.",
      serviceId: "service19",
    },
  ],
  service20: [
    {
      questions: "What is performance-based affiliate marketing?",
      answer:
        "Performance-based affiliate marketing means you only pay for successful sales, clicks, or leads generated by affiliates.",
      serviceId: "service20",
    },
    {
      questions: "How do you ensure quality traffic from affiliates?",
      answer:
        "We vet affiliates based on their past performance and audience demographics to ensure they bring in relevant and high-quality traffic.",
      serviceId: "service20",
    },
    {
      questions: "Can affiliate marketing improve my ecommerce sales?",
      answer:
        "Absolutely! Affiliate marketing is an effective way to drive sales, increase traffic, and expand your reach in the ecommerce space.",
      serviceId: "service20",
    },
  ],
};

export { SERVICES_FAQS };
