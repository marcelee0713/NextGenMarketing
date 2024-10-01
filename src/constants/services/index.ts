import { Service } from "@/interfaces/services/services.interface";

const SERVICES_CATEGORIES: string[] = [
  "Affliate",
  "Social Media Ads",
  "SEO",
  "Sponsorship",
  "Billboards",
  "TV Commercial",
  "Celebrities",
  "Endorsement",
  "Radio Advertisement",
  "Email Advertisement",
];

/**
 * The key string is the id of the partner.
 *
 * Also the rating is hard coded and "not calculated", it will change when a user/business owner rates it.
 */
const PARTNERS_SERVICES: Record<string, Service[]> = {
  partnerId1: [
    {
      serviceId: "service1",
      overview:
        "Comprehensive SEO services designed to elevate your online presence.",
      shortDescription: "Boost your online visibility.",
      about:
        "We provide top-notch SEO strategies to enhance your website's ranking, ensuring that your business stands out in search results. Our team analyzes your current SEO practices, optimizes your content, and implements the latest techniques to drive organic traffic to your site.",
      banner: null,
      rating: 4.5,
      tags: ["Affiliate", "Social Media Ads"],
      likes: ["partnerId2", "partnerId3", "partnerId5", "partnerId6"],
      createdAt: new Date(),
    },
    {
      serviceId: "service2",
      overview: "Expert content marketing strategies that engage and convert.",
      shortDescription: "Engage your audience effectively.",
      about:
        "Our content marketing service focuses on delivering value through well-crafted content that resonates with your target audience. We create compelling blogs, articles, and multimedia content that not only attract attention but also encourage action, fostering a loyal customer base.",
      banner: null,
      rating: 4.7,
      tags: ["Email Advertisement", "Vlogging"],
      likes: ["partnerId1", "partnerId3"],
      createdAt: new Date(),
    },
  ],
  partnerId2: [
    {
      serviceId: "service3",
      overview: "Professional social media management tailored for your brand.",
      shortDescription: "Grow your social media presence.",
      about:
        "We manage your social media accounts to increase engagement and brand awareness across various platforms. Our strategies include content creation, community management, and performance analysis, allowing your brand to thrive in the digital landscape.",
      banner: null,
      rating: 4.2,
      tags: ["Social Media Ads", "Endorsement"],
      likes: ["partnerId1", "partnerId4", "partnerId2"],
      createdAt: new Date(),
    },
    {
      serviceId: "service4",
      overview: "Effective PPC advertising campaigns to maximize your ROI.",
      shortDescription: "Maximize your ROI with PPC.",
      about:
        "Our PPC services help you reach your target audience effectively while managing your budget. We create tailored ad campaigns that target specific demographics, ensuring that you get the best return on investment and drive qualified traffic to your site.",
      banner: null,
      rating: 4.6,
      tags: ["TV Commercial", "Billboards"],
      likes: ["partnerId3", "partnerId1"],
      createdAt: new Date(),
    },
  ],
  partnerId3: [
    {
      serviceId: "service5",
      overview: "Email marketing campaigns designed for maximum engagement.",
      shortDescription: "Engage your customers through email.",
      about:
        "We create and manage effective email marketing campaigns tailored to your audience. Our approach includes personalized messaging, automated workflows, and detailed analytics to ensure your emails are not only opened but also drive conversions.",
      banner: null,
      rating: 4.8,
      tags: ["Email Advertisement", "Sponsorship"],
      likes: ["partnerId2", "partnerId4"],
      createdAt: new Date(),
    },
  ],
  partnerId4: [
    {
      serviceId: "service6",
      overview: "Custom website development that reflects your brand identity.",
      shortDescription: "Build a website that stands out.",
      about:
        "Our team creates custom websites that are both functional and aesthetically pleasing, tailored to meet your unique business needs. We prioritize user experience and responsive design to ensure that your website captivates visitors and drives engagement.",
      banner: null,
      rating: 4.9,
      tags: ["Affiliate", "Social Media Ads"],
      likes: ["partnerId1", "partnerId7"],
      createdAt: new Date(),
    },
    {
      serviceId: "service7",
      overview: "Analytics consulting for informed decision-making.",
      shortDescription: "Make data-driven decisions.",
      about:
        "We provide analytics consulting services to help you interpret your data effectively. By understanding your key performance indicators, we guide you in making informed decisions that enhance your business strategy and improve overall performance.",
      banner: null,
      rating: 4.4,
      tags: ["Endorsement", "Vlogging"],
      likes: ["partnerId8"],
      createdAt: new Date(),
    },
  ],
  partnerId5: [
    {
      serviceId: "service8",
      overview: "Brand strategy development to enhance market positioning.",
      shortDescription: "Craft your brand’s narrative.",
      about:
        "We help you define your brand identity and positioning in the market through comprehensive brand strategy development. Our team works closely with you to create a narrative that resonates with your audience, establishing a strong connection and fostering brand loyalty.",
      banner: null,
      rating: 4.3,
      tags: ["Sponsorship", "Affiliate"],
      likes: ["partnerId3", "partnerId9"],
      createdAt: new Date(),
    },
    {
      serviceId: "service9",
      overview:
        "Graphic design services that effectively communicate your brand message.",
      shortDescription: "Visuals that communicate.",
      about:
        "Our graphic design services create visuals that convey your brand message effectively. We specialize in designing marketing materials, logos, and digital content that not only catch the eye but also align with your brand identity and objectives.",
      banner: null,
      rating: 4.6,
      tags: ["Billboards", "Social Media Ads"],
      likes: ["partnerId1", "partnerId10"],
      createdAt: new Date(),
    },
  ],
  partnerId6: [
    {
      serviceId: "service10",
      overview: "Influencer marketing services that expand your reach.",
      shortDescription: "Leverage influencer partnerships.",
      about:
        "We connect brands with influencers to expand their reach and engagement. By carefully selecting influencers that align with your brand values, we create impactful partnerships that enhance your brand visibility and credibility in the market.",
      banner: null,
      rating: 4.7,
      tags: ["Celebrities", "Endorsement"],
      likes: ["partnerId4", "partnerId5"],
      createdAt: new Date(),
    },
    {
      serviceId: "service11",
      overview: "Video production services that tell your story.",
      shortDescription: "Tell your story through video.",
      about:
        "Our video production services create engaging content that resonates with your audience. From concept to final cut, we handle all aspects of production, ensuring your message is delivered effectively and memorably, whether for ads, tutorials, or brand storytelling.",
      banner: null,
      rating: 4.8,
      tags: ["TV Commercial", "Vlogging"],
      likes: ["partnerId5", "partnerId2"],
      createdAt: new Date(),
    },
  ],
  partnerId7: [
    {
      serviceId: "service12",
      overview: "Market research services to inform your strategies.",
      shortDescription: "Gain insights into your market.",
      about:
        "We provide comprehensive market research to inform your business strategies. By analyzing trends, competitors, and consumer behavior, we deliver actionable insights that help you make informed decisions and stay ahead of the competition.",
      banner: null,
      rating: 4.2,
      tags: ["Social Media Ads", "Email Advertisement"],
      likes: ["partnerId3", "partnerId1"],
      createdAt: new Date(),
    },
  ],
  partnerId8: [
    {
      serviceId: "service13",
      overview: "Social media advertising to reach your ideal audience.",
      shortDescription: "Reach your audience on social platforms.",
      about:
        "Our social media advertising services help you target your ideal audience effectively. We create tailored ad campaigns that utilize data-driven insights, ensuring your messages reach the right people at the right time, maximizing engagement and conversions.",
      banner: null,
      rating: 4.5,
      tags: ["Affiliate", "Vlogging"],
      likes: ["partnerId2", "partnerId4"],
      createdAt: new Date(),
    },
    {
      serviceId: "service14",
      overview: "CRM integration services for streamlined customer management.",
      shortDescription: "Optimize your customer relationships.",
      about:
        "We help you integrate CRM solutions to streamline customer interactions, enhancing your ability to manage leads and relationships effectively. Our approach ensures that your team can focus on building lasting connections with customers while improving operational efficiency.",
      banner: null,
      rating: 4.6,
      tags: ["Email Advertisement", "Celebrities"],
      likes: ["partnerId5", "partnerId8"],
      createdAt: new Date(),
    },
  ],
  partnerId9: [
    {
      serviceId: "service15",
      overview:
        "Event marketing services that create unforgettable experiences.",
      shortDescription: "Make your events unforgettable.",
      about:
        "We specialize in creating marketing strategies for successful events, ensuring your brand is represented in the best light. From pre-event promotions to on-site engagement and post-event follow-ups, we cover all aspects to guarantee a memorable experience for your attendees.",
      banner: null,
      rating: 4.3,
      tags: ["Sponsorship", "Billboards"],
      likes: ["partnerId1", "partnerId3"],
      createdAt: new Date(),
    },
  ],
  partnerId10: [
    {
      serviceId: "service16",
      overview: "E-commerce solutions to help you thrive online.",
      shortDescription: "Launch your online store.",
      about:
        "We provide end-to-end e-commerce solutions to help you sell online effectively. From website development to payment processing and digital marketing, we ensure your online store is fully equipped to attract and retain customers in today's competitive market.",
      banner: null,
      rating: 4.9,
      tags: ["Affiliate", "Social Media Ads"],
      likes: ["partnerId3", "partnerId6"],
      createdAt: new Date(),
    },
  ],
};

export { PARTNERS_SERVICES, SERVICES_CATEGORIES };
