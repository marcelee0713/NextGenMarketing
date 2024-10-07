import { Service } from "@/interfaces/services/services.interface";

const SERVICES_CATEGORIES = [
  "Affiliate",
  "Social Media Ads",
  "SEO",
  "Sponsorship",
  "Billboards",
  "TV Commercial",
  "Celebrities",
  "Endorsement",
  "Radio Advertisement",
  "Email Advertisement",
] as const;

const SERVICES_DELIVERY_TIME_FILTER_ARR = [
  "3 days",
  "5 days",
  "1 week",
  "2 weeks",
  "1 month",
];

const SERVICES_PROJECT_QUEUE_FILTER_ARR = ["0", "<5", "<10"];

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
      banner:
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1727967375/my-uploads/nextgen/3d_logo_for_children_s_day_campaigns_isolated_on_light_blue_background_n1l780.jpg",
      rating: 4.5,
      tags: ["SEO", "Keyword Optimization", "Search Engine Marketing"],
      likes: ["partnerId2", "partnerId3", "partnerId5", "partnerId6"],
      createdAt: new Date(),
      category: "SEO",
    },
    {
      serviceId: "service2",
      overview: "Expert email marketing strategies that engage and convert.",
      shortDescription: "Engage your audience effectively.",
      about:
        "Our email marketing service focuses on delivering value through targeted campaigns that resonate with your audience. We create compelling content and automation strategies that boost open rates and conversions, helping you build a loyal customer base.",
      banner:
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1727967375/my-uploads/nextgen/stand_up_comedy_wcalf3.jpg",
      rating: 4.7,
      tags: ["Email Advertisement", "Automation", "Targeted Campaigns"],
      likes: ["partnerId1", "partnerId3"],
      createdAt: new Date(),
      category: "Email Advertisement",
    },
  ],
  partnerId2: [
    {
      serviceId: "service3",
      overview: "Professional social media management tailored for your brand.",
      shortDescription: "Grow your social media presence.",
      about:
        "We manage your social media accounts to increase engagement and brand awareness across various platforms. Our strategies include content creation, community management, and performance analysis, allowing your brand to thrive in the digital landscape.",
      banner:
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1727967376/my-uploads/nextgen/MAIN_ANNOUNCEMENT_x0kghw.png",
      rating: 4.2,
      tags: ["Social Media Ads", "Engagement", "Content Creation"],
      likes: ["partnerId1", "partnerId4", "partnerId2"],
      createdAt: new Date(),
      category: "Social Media Ads",
    },
    {
      serviceId: "service4",
      overview: "Effective PPC advertising campaigns to maximize your ROI.",
      shortDescription: "Maximize your ROI with PPC.",
      about:
        "Our PPC services help you reach your target audience effectively while managing your budget. We create tailored ad campaigns that target specific demographics, ensuring that you get the best return on investment and drive qualified traffic to your site.",
      banner:
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1727967375/my-uploads/nextgen/merdeka03_text_effect_c7z2sl.jpg",
      rating: 2,
      tags: ["Social Media Ads", "PPC", "Targeted Ads"],
      likes: ["partnerId3", "partnerId1"],
      createdAt: new Date(),
      category: "Social Media Ads",
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
      tags: ["Email Advertisement", "Automation", "Analytics"],
      likes: ["partnerId2", "partnerId4"],
      createdAt: new Date(),
      category: "Email Advertisement",
    },
  ],
  partnerId4: [
    {
      serviceId: "service6",
      overview: "Custom website development that reflects your brand identity.",
      shortDescription: "Build a website that stands out.",
      about:
        "Our team creates custom websites that are both functional and aesthetically pleasing, tailored to meet your unique business needs. We prioritize user experience and responsive design to ensure that your website captivates visitors and drives engagement.",
      banner:
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1727967375/my-uploads/nextgen/3d_logo_for_children_s_day_campaigns_isolated_on_light_blue_background_n1l780.jpg",
      rating: 4.9,
      tags: ["SEO", "User Experience", "Web Development"],
      likes: ["partnerId1", "partnerId7"],
      createdAt: new Date(),
      category: "SEO",
    },
    {
      serviceId: "service7",
      overview: "Analytics consulting for informed decision-making.",
      shortDescription: "Make data-driven decisions.",
      about:
        "We provide analytics consulting services to help you interpret your data effectively. By understanding your key performance indicators, we guide you in making informed decisions that enhance your business strategy and improve overall performance.",
      banner: null,
      rating: 4.4,
      tags: ["SEO", "Data Analytics", "KPIs"],
      likes: ["partnerId8"],
      createdAt: new Date(),
      category: "SEO",
    },
  ],
  partnerId5: [
    {
      serviceId: "service8",
      overview: "Brand strategy development to enhance market positioning.",
      shortDescription: "Craft your brand’s narrative.",
      about:
        "We help you define your brand identity and positioning in the market through comprehensive brand strategy development. Our team works closely with you to create a narrative that resonates with your audience, establishing a strong connection and fostering brand loyalty.",
      banner:
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1727967376/my-uploads/nextgen/COSPLAY_POSTER_mf5d6c.png",
      rating: 4.3,
      tags: ["Sponsorship", "Brand Strategy", "Affiliate Marketing"],
      likes: ["partnerId3", "partnerId9"],
      createdAt: new Date(),
      category: "Sponsorship",
    },
    {
      serviceId: "service9",
      overview:
        "Graphic design services that effectively communicate your brand message.",
      shortDescription: "Visuals that communicate.",
      about:
        "Our graphic design services create visuals that convey your brand message effectively. We specialize in designing marketing materials, logos, and digital content that not only catch the eye but also align with your brand identity and objectives.",
      banner:
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1727967374/my-uploads/nextgen/Legend_Quest_Text_Effect_htrbpg.jpg",
      rating: 4.6,
      tags: ["Billboards", "Social Media Ads", "Graphic Design"],
      likes: ["partnerId1", "partnerId10"],
      createdAt: new Date(),
      category: "Billboards",
    },
  ],
  partnerId6: [
    {
      serviceId: "service10",
      overview: "Influencer marketing services that expand your reach.",
      shortDescription: "Leverage influencer partnerships.",
      about:
        "We connect brands with influencers to expand their reach and engagement. By carefully selecting influencers that align with your brand values, we create impactful partnerships that enhance your brand visibility and credibility in the market.",
      banner:
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1727967377/my-uploads/nextgen/Editable_3D_text_effect_for_Christmas_on_a_red_and_snowy_background_z5t47l.jpg",
      rating: 4.7,
      tags: ["Celebrities", "Influencers", "Branding"],
      likes: ["partnerId4", "partnerId5"],
      createdAt: new Date(),
      category: "Celebrities",
    },
    {
      serviceId: "service11",
      overview: "Video production services that tell your story.",
      shortDescription: "Tell your story through video.",
      about:
        "Our video production services create engaging content that resonates with your audience. From concept to final cut, we handle all aspects of production, ensuring your message is delivered effectively and memorably, whether for ads, tutorials, or brand storytelling.",
      banner:
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1727967374/my-uploads/nextgen/kahidlaw_ex_tg7t6q.jpg",
      rating: 4.8,
      tags: ["TV Commercial", "Vlogging", "Video Production"],
      likes: ["partnerId5", "partnerId2"],
      createdAt: new Date(),
      category: "TV Commercial",
    },
  ],
  partnerId7: [
    {
      serviceId: "service12",
      overview: "Market research services to inform your strategies.",
      shortDescription: "Gain insights into your market.",
      about:
        "We provide comprehensive market research to inform your business strategies. By analyzing trends, competitors, and consumer behavior, we deliver actionable insights that help you make informed decisions and stay ahead of the competition.",
      banner:
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1727967375/my-uploads/nextgen/3d_logo_for_children_s_day_campaigns_isolated_on_light_blue_background_n1l780.jpg",
      rating: 4.2,
      tags: ["Email Advertisement", "Consumer Insights", "Competitor Analysis"],
      likes: ["partnerId3", "partnerId1"],
      createdAt: new Date(),
      category: "Email Advertisement",
    },
    {
      serviceId: "service20",
      overview: "Performance-based affiliate marketing for ecommerce.",
      shortDescription: "Maximize sales with performance-driven affiliates.",
      about:
        "We specialize in performance-based affiliate marketing strategies for ecommerce businesses. Our affiliates are vetted to ensure they deliver quality traffic, leading to higher sales and a better ROI for your business.",
      banner:
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1727967376/my-uploads/nextgen/COSPLAY_POSTER_mf5d6c.png",
      rating: 5.0,
      tags: ["Ecommerce", "Performance Marketing", "Traffic Generation"],
      likes: ["partnerId9", "partnerId10"],
      createdAt: new Date(),
      category: "Affiliate",
    },
  ],
  partnerId8: [
    {
      serviceId: "service13",
      overview: "Social media advertising to reach your ideal audience.",
      shortDescription: "Reach your audience on social platforms.",
      about:
        "Our social media advertising services help you target your ideal audience effectively. We create tailored ad campaigns that utilize data-driven insights, ensuring your messages reach the right people at the right time, maximizing engagement and conversions.",
      banner:
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1727967375/my-uploads/nextgen/merdeka03_text_effect_c7z2sl.jpg",
      rating: 4.5,
      tags: ["Social Media Ads", "Targeting", "Engagement"],
      likes: ["partnerId2", "partnerId4"],
      createdAt: new Date(),
      category: "Social Media Ads",
    },
    {
      serviceId: "service14",
      overview: "CRM integration services for streamlined customer management.",
      shortDescription: "Optimize your customer relationships.",
      about:
        "We help you integrate CRM solutions to streamline customer interactions, enhancing your ability to manage leads and relationships effectively. Our approach ensures that your team can focus on building lasting connections with customers while optimizing internal processes.",
      banner: null,
      rating: 4.9,
      tags: ["SEO", "Customer Management", "CRM Integration"],
      likes: ["partnerId6", "partnerId3"],
      createdAt: new Date(),
      category: "SEO",
    },
    {
      serviceId: "service19",
      overview: "Affiliate program management for long-term growth.",
      shortDescription: "Scale your business with a custom affiliate program.",
      about:
        "Our service helps you create and manage a sustainable affiliate program. We handle partner recruitment, campaign management, and performance tracking, helping you build a network that consistently drives revenue.",
      banner:
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1727967375/my-uploads/nextgen/3d_logo_for_children_s_day_campaigns_isolated_on_light_blue_background_n1l780.jpg",
      rating: 4.9,
      tags: ["Affiliate Program", "Partner Recruitment", "Revenue Growth"],
      likes: ["partnerId1", "partnerId5"],
      createdAt: new Date(),
      category: "Affiliate",
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
      tags: ["Sponsorship", "Celebrities", "Radio Advertisement"],
      likes: ["partnerId1", "partnerId3"],
      createdAt: new Date(),
      category: "Sponsorship",
    },
    {
      serviceId: "service18",
      overview: "Influencer and affiliate marketing for brand awareness.",
      shortDescription: "Get your brand noticed with affiliate influencers.",
      about:
        "We connect you with influencers who resonate with your brand, using affiliates to drive authentic brand promotion. Our system tracks engagement, ensuring your campaign reaches your target audience effectively.",
      banner:
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1727967374/my-uploads/nextgen/kahidlaw_ex_tg7t6q.jpg",
      rating: 4.7,
      tags: ["Influencer Marketing", "Brand Awareness", "Engagement"],
      likes: ["partnerId2", "partnerId8"],
      createdAt: new Date(),
      category: "Affiliate",
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
      tags: ["Social Media Ads", "SEO", "Email Advertisement"],
      likes: ["partnerId3", "partnerId6"],
      createdAt: new Date(),
      category: "Social Media Ads",
    },
    {
      serviceId: "service17",
      overview: "Affiliate marketing for product launches.",
      shortDescription: "Boost your product with targeted affiliate campaigns.",
      about:
        "Leverage our network of affiliates to promote your product. We provide data-driven strategies to match you with the right partners and ensure successful campaigns that drive conversions for your product launches.",
      banner:
        "https://res.cloudinary.com/dop8qsdej/image/upload/v1727967374/my-uploads/nextgen/Legend_Quest_Text_Effect_htrbpg.jpg",
      rating: 4.8,
      tags: ["Product Launch", "Conversion Optimization", "SEO"],
      likes: ["partnerId4", "partnerId7"],
      createdAt: new Date(),
      category: "Affiliate",
    },
  ],
};

export {
  PARTNERS_SERVICES,
  SERVICES_CATEGORIES,
  SERVICES_DELIVERY_TIME_FILTER_ARR,
  SERVICES_PROJECT_QUEUE_FILTER_ARR,
};
