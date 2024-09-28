import { ServiceFAQs } from "@/interfaces/services/services.interface";
/**
 * The key string is the id of the service.
 */
const SERVICES_FAQS: Record<string, ServiceFAQs[]> = {
  serviceId1: [
    {
      questions: "What SEO strategies do you use?",
      answer:
        "We utilize a combination of on-page and off-page SEO strategies tailored to your business needs.",
      serviceId: "serviceId1",
    },
    {
      questions: "How long does it take to see results from SEO?",
      answer:
        "Typically, it takes 3-6 months to see significant results from our SEO efforts.",
      serviceId: "serviceId1",
    },
    {
      questions: "Do you provide ongoing SEO support?",
      answer:
        "Yes, we offer ongoing SEO support and regular performance reports.",
      serviceId: "serviceId1",
    },
  ],
  serviceId2: [
    {
      questions: "What does your content marketing service include?",
      answer:
        "Our content marketing service includes strategy development, content creation, and distribution.",
      serviceId: "serviceId2",
    },
    {
      questions: "How do you measure the success of content marketing?",
      answer:
        "We measure success through engagement metrics, website traffic, and conversion rates.",
      serviceId: "serviceId2",
    },
    {
      questions: "Can you create content for my specific audience?",
      answer:
        "Absolutely! We tailor our content to meet the preferences and needs of your target audience.",
      serviceId: "serviceId2",
    },
  ],
  serviceId3: [
    {
      questions: "What platforms do you manage for social media?",
      answer:
        "We manage all major platforms, including Facebook, Instagram, Twitter, and LinkedIn.",
      serviceId: "serviceId3",
    },
    {
      questions: "How do you increase engagement on social media?",
      answer:
        "We use targeted strategies, engaging content, and community management to boost engagement.",
      serviceId: "serviceId3",
    },
    {
      questions: "Do you provide analytics for social media campaigns?",
      answer:
        "Yes, we provide comprehensive analytics and reports for all social media campaigns.",
      serviceId: "serviceId3",
    },
  ],
  serviceId4: [
    {
      questions: "What is PPC advertising?",
      answer:
        "PPC stands for Pay-Per-Click, a model where advertisers pay for each click on their ads.",
      serviceId: "serviceId4",
    },
    {
      questions: "How do you determine the budget for PPC campaigns?",
      answer:
        "We analyze your goals and market to recommend an appropriate budget for your PPC campaigns.",
      serviceId: "serviceId4",
    },
    {
      questions: "Can you manage PPC across multiple platforms?",
      answer:
        "Yes, we can manage PPC campaigns on Google Ads, Facebook Ads, and more.",
      serviceId: "serviceId4",
    },
  ],
  serviceId5: [
    {
      questions: "What are the benefits of email marketing?",
      answer:
        "Email marketing allows for direct communication with your audience and can drive conversions effectively.",
      serviceId: "serviceId5",
    },
    {
      questions: "Do you segment email lists?",
      answer:
        "Yes, we segment email lists to ensure personalized and relevant communication.",
      serviceId: "serviceId5",
    },
    {
      questions: "How do you track email campaign performance?",
      answer:
        "We track performance through open rates, click-through rates, and conversion rates.",
      serviceId: "serviceId5",
    },
  ],
  serviceId6: [
    {
      questions: "What is included in your website development service?",
      answer:
        "Our service includes design, development, testing, and deployment of custom websites.",
      serviceId: "serviceId6",
    },
    {
      questions: "Do you provide ongoing maintenance for websites?",
      answer:
        "Yes, we offer ongoing maintenance packages to keep your website running smoothly.",
      serviceId: "serviceId6",
    },
    {
      questions: "Can you integrate e-commerce features into my website?",
      answer:
        "Absolutely! We can integrate e-commerce functionalities based on your requirements.",
      serviceId: "serviceId6",
    },
  ],
  serviceId7: [
    {
      questions: "How can market research benefit my business?",
      answer:
        "Market research provides insights into customer preferences and market trends, aiding strategic decisions.",
      serviceId: "serviceId7",
    },
    {
      questions: "What methods do you use for market research?",
      answer:
        "We use surveys, interviews, and data analysis to gather comprehensive market insights.",
      serviceId: "serviceId7",
    },
    {
      questions: "Do you provide reports on your findings?",
      answer:
        "Yes, we provide detailed reports summarizing our research findings and recommendations.",
      serviceId: "serviceId7",
    },
  ],
  serviceId8: [
    {
      questions: "What platforms do you use for social media advertising?",
      answer:
        "We use platforms like Facebook, Instagram, Twitter, and LinkedIn for social media advertising.",
      serviceId: "serviceId8",
    },
    {
      questions: "How do you target the right audience for ads?",
      answer:
        "We use demographic and interest-based targeting to reach your ideal audience.",
      serviceId: "serviceId8",
    },
    {
      questions: "Can you create ad content for us?",
      answer:
        "Yes, we can create engaging ad content tailored to your brand's voice and goals.",
      serviceId: "serviceId8",
    },
  ],
  serviceId9: [
    {
      questions: "What is event marketing?",
      answer:
        "Event marketing involves promoting events to engage customers and create brand awareness.",
      serviceId: "serviceId9",
    },
    {
      questions: "How do you ensure a successful event marketing campaign?",
      answer:
        "We plan meticulously, use multiple channels for promotion, and engage with attendees effectively.",
      serviceId: "serviceId9",
    },
    {
      questions: "Do you provide post-event analysis?",
      answer:
        "Yes, we analyze event success through feedback and engagement metrics.",
      serviceId: "serviceId9",
    },
  ],
  serviceId10: [
    {
      questions: "What are e-commerce solutions?",
      answer:
        "E-commerce solutions include everything needed to sell products online, from design to payment processing.",
      serviceId: "serviceId10",
    },
    {
      questions: "Do you offer integration with payment gateways?",
      answer:
        "Yes, we integrate popular payment gateways for smooth transactions.",
      serviceId: "serviceId10",
    },
    {
      questions: "Can you assist with inventory management?",
      answer:
        "Absolutely! We can integrate inventory management systems into your e-commerce platform.",
      serviceId: "serviceId10",
    },
  ],
  serviceId11: [
    {
      questions: "What is influencer marketing?",
      answer:
        "Influencer marketing involves collaborating with influencers to promote your brand to their audience.",
      serviceId: "serviceId11",
    },
    {
      questions: "How do you choose the right influencers?",
      answer:
        "We select influencers based on their relevance to your brand and audience engagement metrics.",
      serviceId: "serviceId11",
    },
    {
      questions: "Can you track the success of influencer campaigns?",
      answer:
        "Yes, we provide metrics on engagement, reach, and conversions from influencer campaigns.",
      serviceId: "serviceId11",
    },
  ],
  serviceId12: [
    {
      questions: "What is included in video production services?",
      answer:
        "Our video production services cover concept development, filming, editing, and distribution.",
      serviceId: "serviceId12",
    },
    {
      questions: "How long does the video production process take?",
      answer:
        "The timeline depends on the project's complexity, but we typically deliver within 4-6 weeks.",
      serviceId: "serviceId12",
    },
    {
      questions: "Can you help with scriptwriting?",
      answer:
        "Yes, we offer scriptwriting services to ensure your video communicates effectively.",
      serviceId: "serviceId12",
    },
  ],
  serviceId13: [
    {
      questions: "What types of graphic design services do you offer?",
      answer:
        "We offer branding, marketing materials, social media graphics, and more.",
      serviceId: "serviceId13",
    },
    {
      questions: "Can you work with existing branding guidelines?",
      answer:
        "Yes, we can create designs that align with your existing branding guidelines.",
      serviceId: "serviceId13",
    },
    {
      questions: "How do you ensure design quality?",
      answer:
        "We follow a rigorous review process to ensure all designs meet high-quality standards.",
      serviceId: "serviceId13",
    },
  ],
  serviceId14: [
    {
      questions: "What is CRM integration?",
      answer:
        "CRM integration connects your customer relationship management system with other business tools.",
      serviceId: "serviceId14",
    },
    {
      questions: "Why is CRM integration important?",
      answer:
        "It streamlines customer interactions and provides a unified view of customer data.",
      serviceId: "serviceId14",
    },
    {
      questions: "Do you support multiple CRM platforms?",
      answer:
        "Yes, we support integration with various CRM platforms, including Salesforce and HubSpot.",
      serviceId: "serviceId14",
    },
  ],
  serviceId15: [
    {
      questions: "What types of advertisements do you create?",
      answer:
        "We create a range of advertisements, including digital ads, print ads, and video commercials.",
      serviceId: "serviceId15",
    },
    {
      questions: "How do you measure ad campaign effectiveness?",
      answer:
        "We measure effectiveness through metrics like impressions, click-through rates, and conversions.",
      serviceId: "serviceId15",
    },
    {
      questions: "Can you help with ad copywriting?",
      answer:
        "Yes, we offer ad copywriting services to ensure your message resonates with your audience.",
      serviceId: "serviceId15",
    },
  ],
  serviceId16: [
    {
      questions: "What is the importance of UX/UI design?",
      answer:
        "UX/UI design enhances user satisfaction by improving usability and accessibility of your product.",
      serviceId: "serviceId16",
    },
    {
      questions: "Do you conduct user testing for designs?",
      answer:
        "Yes, we conduct user testing to gather feedback and iterate on designs.",
      serviceId: "serviceId16",
    },
    {
      questions: "Can you design for mobile and web platforms?",
      answer:
        "Absolutely! We design for both mobile and web platforms to ensure a seamless user experience.",
      serviceId: "serviceId16",
    },
  ],
};

export { SERVICES_FAQS };
