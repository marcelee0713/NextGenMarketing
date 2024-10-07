import { ServiceAddOns } from "@/interfaces/services/services.interface";

/**
 * The key string is the service.
 *
 * The duration time value is on days.
 * If the value is 0 it means that'll be done on the same day.
 */
const SERVICE_ADD_ONS: Record<string, ServiceAddOns[]> = {
  service1: [
    {
      serviceId: "service1",
      header: "Rush Delivery",
      description: "Get your market analysis delivered within 5 days.",
      durationTime: 5, // days
      price: 3000, // PHP
      additionalSubHeader: "Perfect for urgent needs.",
    },
    {
      serviceId: "service1",
      header: "Additional Consultation",
      description:
        "One extra hour of personalized consultation with our experts.",
      durationTime: 0, // same day
      price: 2000, // PHP
      additionalSubHeader: "Tailored advice for your business.",
    },
    {
      serviceId: "service1",
      header: "Market Trend Report",
      description:
        "Receive a comprehensive report on the latest market trends.",
      durationTime: 7, // days
      price: 3500, // PHP
      additionalSubHeader: "Stay ahead of the competition.",
    },
    {
      serviceId: "service1",
      header: "Competitor Analysis",
      description: "In-depth analysis of your top competitors.",
      durationTime: 10, // days
      price: 4000, // PHP
      additionalSubHeader: "Understand your competition better.",
    },
    {
      serviceId: "service1",
      header: "Customizable Templates",
      description: "Get access to customizable templates for reports.",
      durationTime: 3, // days
      price: 1500, // PHP
      additionalSubHeader: "Streamline your reporting process.",
    },
  ],
  service2: [
    {
      serviceId: "service2",
      header: "Extra Revisions",
      description: "Add 2 more revisions to your branding design.",
      durationTime: 0, // same day
      price: 1500, // PHP
      additionalSubHeader: "Fine-tune your brand identity.",
    },
    {
      serviceId: "service2",
      header: "Branding Guidelines",
      description: "Receive a detailed branding guideline document.",
      durationTime: 7, // days
      price: 3500, // PHP
      additionalSubHeader: "Ensure consistency in your branding.",
    },
    {
      serviceId: "service2",
      header: "Social Media Kit",
      description: "Get a complete kit with graphics for social media.",
      durationTime: 5, // days
      price: 3000, // PHP
      additionalSubHeader: "Boost your online presence with ease.",
    },
    {
      serviceId: "service2",
      header: "Logo Animation",
      description: "Add a professional animation to your logo.",
      durationTime: 10, // days
      price: 4500, // PHP
      additionalSubHeader: "Make your brand memorable.",
    },
    {
      serviceId: "service2",
      header: "Promotional Material Design",
      description: "Design brochures and flyers for your brand.",
      durationTime: 14, // days
      price: 5000, // PHP
      additionalSubHeader: "Attract customers with stunning visuals.",
    },
  ],
  service3: [
    {
      serviceId: "service3",
      header: "Social Media Package",
      description: "Create 5 promotional posts for your social media.",
      durationTime: 7, // days
      price: 4000, // PHP
      additionalSubHeader: "Boost your online presence.",
    },
    {
      serviceId: "service3",
      header: "Engagement Booster",
      description: "Increase engagement with targeted ads.",
      durationTime: 30, // days
      price: 6000, // PHP
      additionalSubHeader: "Maximize your reach.",
    },
    {
      serviceId: "service3",
      header: "Hashtag Strategy",
      description: "Get a tailored hashtag strategy for your posts.",
      durationTime: 2, // days
      price: 1000, // PHP
      additionalSubHeader: "Optimize your visibility.",
    },
    {
      serviceId: "service3",
      header: "Analytics Report",
      description: "Receive a monthly report on social media performance.",
      durationTime: 30, // days
      price: 2500, // PHP
      additionalSubHeader: "Understand your audience better.",
    },
    {
      serviceId: "service3",
      header: "Video Content Creation",
      description: "Produce short promotional videos for social media.",
      durationTime: 10, // days
      price: 8000, // PHP
      additionalSubHeader: "Engage your audience with dynamic content.",
    },
  ],
  service4: [
    {
      serviceId: "service4",
      header: "SEO Optimization",
      description: "Enhance your website with basic SEO strategies.",
      durationTime: 14, // days
      price: 5000, // PHP
      additionalSubHeader: "Increase your visibility online.",
    },
    {
      serviceId: "service4",
      header: "Keyword Research",
      description: "Identify high-impact keywords for your niche.",
      durationTime: 5, // days
      price: 3000, // PHP
      additionalSubHeader: "Drive more traffic to your site.",
    },
    {
      serviceId: "service4",
      header: "Competitor SEO Analysis",
      description: "Analyze your competitors' SEO strategies.",
      durationTime: 7, // days
      price: 4000, // PHP
      additionalSubHeader: "Learn from the competition.",
    },
    {
      serviceId: "service4",
      header: "Content Optimization",
      description: "Optimize your existing content for SEO.",
      durationTime: 10, // days
      price: 3500, // PHP
      additionalSubHeader: "Improve your rankings.",
    },
    {
      serviceId: "service4",
      header: "Monthly SEO Monitoring",
      description: "Receive monthly reports on SEO performance.",
      durationTime: 30, // days
      price: 3000, // PHP
      additionalSubHeader: "Stay updated on your progress.",
    },
  ],
  service5: [
    {
      serviceId: "service5",
      header: "Social Media Ads Management",
      description: "Manage your ad campaigns for 30 days.",
      durationTime: 30, // days
      price: 7000, // PHP
      additionalSubHeader: "Maximize your advertising budget.",
    },
    {
      serviceId: "service5",
      header: "Ad Copywriting",
      description: "Receive professionally written ad copies.",
      durationTime: 5, // days
      price: 2500, // PHP
      additionalSubHeader: "Capture your audience's attention.",
    },
    {
      serviceId: "service5",
      header: "Retargeting Strategy",
      description: "Implement a retargeting strategy for your ads.",
      durationTime: 10, // days
      price: 5000, // PHP
      additionalSubHeader: "Convert interested leads into customers.",
    },
    {
      serviceId: "service5",
      header: "Creative Assets Development",
      description: "Get customized images or videos for your ads.",
      durationTime: 10, // days
      price: 6000, // PHP
      additionalSubHeader: "Enhance your ad performance.",
    },
    {
      serviceId: "service5",
      header: "Performance Analysis",
      description: "Receive a detailed report on ad performance.",
      durationTime: 15, // days
      price: 3000, // PHP
      additionalSubHeader: "Optimize your future campaigns.",
    },
  ],
  service6: [
    {
      serviceId: "service6",
      header: "Content Creation",
      description: "Receive an additional 3 blog posts.",
      durationTime: 10, // days
      price: 6000, // PHP
      additionalSubHeader: "Engage your audience with fresh content.",
    },
    {
      serviceId: "service6",
      header: "Content Calendar",
      description: "Receive a 3-month content calendar.",
      durationTime: 7, // days
      price: 3500, // PHP
      additionalSubHeader: "Plan your content effectively.",
    },
    {
      serviceId: "service6",
      header: "SEO Content Optimization",
      description: "Optimize your blog posts for search engines.",
      durationTime: 10, // days
      price: 4000, // PHP
      additionalSubHeader: "Improve your visibility.",
    },
    {
      serviceId: "service6",
      header: "Newsletter Writing",
      description: "Create a monthly newsletter for your audience.",
      durationTime: 5, // days
      price: 3000, // PHP
      additionalSubHeader: "Engage your subscribers regularly.",
    },
    {
      serviceId: "service6",
      header: "Social Media Content",
      description: "Create 10 engaging posts for social media.",
      durationTime: 10, // days
      price: 4000, // PHP
      additionalSubHeader: "Boost your social media presence.",
    },
  ],
  service7: [
    {
      serviceId: "service7",
      header: "Graphic Design Add-On",
      description: "Get a customized infographic for your report.",
      durationTime: 5, // days
      price: 2500, // PHP
      additionalSubHeader: "Visualize your data effectively.",
    },
    {
      serviceId: "service7",
      header: "Print Material Design",
      description: "Design brochures and posters for your events.",
      durationTime: 10, // days
      price: 4500, // PHP
      additionalSubHeader: "Attract customers with high-quality prints.",
    },
    {
      serviceId: "service7",
      header: "Logo Variations",
      description: "Receive additional logo variations for different uses.",
      durationTime: 7, // days
      price: 2000, // PHP
      additionalSubHeader: "Ensure your brand fits all platforms.",
    },
    {
      serviceId: "service7",
      header: "Presentation Design",
      description: "Create a visually appealing presentation for your pitch.",
      durationTime: 7, // days
      price: 3000, // PHP
      additionalSubHeader: "Impress your audience with stunning visuals.",
    },
    {
      serviceId: "service7",
      header: "Brand Video Creation",
      description: "Produce a short video introducing your brand.",
      durationTime: 14, // days
      price: 8000, // PHP
      additionalSubHeader: "Capture attention with dynamic storytelling.",
    },
  ],
  service8: [
    {
      serviceId: "service8",
      header: "Additional Brand Assets",
      description: "Receive a set of 5 social media graphics.",
      durationTime: 7, // days
      price: 3000, // PHP
      additionalSubHeader: "Expand your brand's visual toolkit.",
    },
    {
      serviceId: "service8",
      header: "Digital Branding Kit",
      description: "Get a comprehensive branding kit for online use.",
      durationTime: 10, // days
      price: 5000, // PHP
      additionalSubHeader: "Streamline your digital marketing efforts.",
    },
    {
      serviceId: "service8",
      header: "Email Signature Design",
      description: "Create a professional email signature.",
      durationTime: 3, // days
      price: 1500, // PHP
      additionalSubHeader: "Make a great first impression.",
    },
    {
      serviceId: "service8",
      header: "Website Graphics Package",
      description: "Design graphics specifically for your website.",
      durationTime: 14, // days
      price: 6000, // PHP
      additionalSubHeader: "Enhance your website's aesthetics.",
    },
    {
      serviceId: "service8",
      header: "Brand Consultation",
      description: "Receive a 2-hour consultation on brand strategy.",
      durationTime: 0, // same day
      price: 2000, // PHP
      additionalSubHeader: "Tailor your brand's approach.",
    },
  ],
  service9: [
    {
      serviceId: "service9",
      header: "Script Enhancement",
      description: "Receive a professionally written script for your video.",
      durationTime: 3, // days
      price: 2000, // PHP
      additionalSubHeader: "Elevate your video storytelling.",
    },
    {
      serviceId: "service9",
      header: "Video Editing",
      description: "Edit your raw footage into a polished final product.",
      durationTime: 10, // days
      price: 5000, // PHP
      additionalSubHeader: "Make your videos shine.",
    },
    {
      serviceId: "service9",
      header: "Voice Over Services",
      description: "Get a professional voice over for your videos.",
      durationTime: 5, // days
      price: 4000, // PHP
      additionalSubHeader: "Add a professional touch to your content.",
    },
    {
      serviceId: "service9",
      header: "Video SEO Optimization",
      description: "Optimize your video for search engines.",
      durationTime: 3, // days
      price: 3000, // PHP
      additionalSubHeader: "Increase your video visibility.",
    },
    {
      serviceId: "service9",
      header: "Animated Graphics",
      description: "Add animated graphics to your videos.",
      durationTime: 7, // days
      price: 4500, // PHP
      additionalSubHeader: "Enhance viewer engagement.",
    },
  ],
  service10: [
    {
      serviceId: "service10",
      header: "Extra Design Revisions",
      description: "Add 3 more revisions to your graphic design project.",
      durationTime: 0, // same day
      price: 2000, // PHP
      additionalSubHeader: "Perfect your design to meet your needs.",
    },
    {
      serviceId: "service10",
      header: "Custom Graphic Elements",
      description: "Create unique graphic elements for your design.",
      durationTime: 5, // days
      price: 2500, // PHP
      additionalSubHeader: "Make your design stand out.",
    },
    {
      serviceId: "service10",
      header: "Print-Ready Files",
      description: "Receive high-quality files suitable for printing.",
      durationTime: 3, // days
      price: 1500, // PHP
      additionalSubHeader: "Ensure your designs look great in print.",
    },
    {
      serviceId: "service10",
      header: "Website Banner Design",
      description: "Design a professional banner for your website.",
      durationTime: 7, // days
      price: 3500, // PHP
      additionalSubHeader: "Attract visitors with stunning visuals.",
    },
    {
      serviceId: "service10",
      header: "Social Media Graphics Pack",
      description: "Receive a pack of 10 graphics for social media.",
      durationTime: 10, // days
      price: 4000, // PHP
      additionalSubHeader: "Enhance your social media presence.",
    },
  ],
  service11: [
    {
      serviceId: "service11",
      header: "Custom Dashboard Setup",
      description: "Get a tailored dashboard for your analytics.",
      durationTime: 14, // days
      price: 5000, // PHP
      additionalSubHeader: "Visualize your data effectively.",
    },
    {
      serviceId: "service11",
      header: "Data Migration Service",
      description: "Help with migrating your existing data.",
      durationTime: 10, // days
      price: 4000, // PHP
      additionalSubHeader: "Smooth transition to the new system.",
    },
    {
      serviceId: "service11",
      header: "Advanced Analytics Setup",
      description: "Implement advanced analytics features.",
      durationTime: 21, // days
      price: 8000, // PHP
      additionalSubHeader: "Gain deeper insights into your data.",
    },
    {
      serviceId: "service11",
      header: "Training Session",
      description: "Conduct a training session on using the dashboard.",
      durationTime: 0, // same day
      price: 3000, // PHP
      additionalSubHeader: "Ensure your team is ready to use it.",
    },
    {
      serviceId: "service11",
      header: "Monthly Maintenance",
      description: "Receive ongoing support and maintenance.",
      durationTime: 30, // days
      price: 5000, // PHP
      additionalSubHeader: "Keep your analytics running smoothly.",
    },
  ],
  service12: [
    {
      serviceId: "service12",
      header: "Ongoing Influencer Support",
      description: "Receive weekly check-ins during your campaign.",
      durationTime: 30, // days
      price: 4000, // PHP
      additionalSubHeader: "Ensure your campaign stays on track.",
    },
    {
      serviceId: "service12",
      header: "Campaign Performance Analysis",
      description: "Receive detailed analysis on campaign performance.",
      durationTime: 15, // days
      price: 3000, // PHP
      additionalSubHeader: "Optimize your influencer strategy.",
    },
    {
      serviceId: "service12",
      header: "Content Creation for Influencers",
      description: "Create posts and videos for your influencers.",
      durationTime: 10, // days
      price: 5000, // PHP
      additionalSubHeader: "Streamline content production.",
    },
    {
      serviceId: "service12",
      header: "Brand Ambassador Program Setup",
      description: "Set up a program to engage brand ambassadors.",
      durationTime: 14, // days
      price: 6000, // PHP
      additionalSubHeader: "Build a loyal customer base.",
    },
    {
      serviceId: "service12",
      header: "Influencer Database Access",
      description: "Gain access to a curated list of influencers.",
      durationTime: 0, // same day
      price: 2500, // PHP
      additionalSubHeader: "Find the perfect fit for your brand.",
    },
  ],
  service13: [
    {
      serviceId: "service13",
      header: "Additional Consultation Hours",
      description: "Purchase extra hours for consultations.",
      durationTime: 0, // same day
      price: 1500, // PHP
      additionalSubHeader: "Get more tailored advice.",
    },
    {
      serviceId: "service13",
      header: "Website Audit",
      description: "Receive a comprehensive audit of your website.",
      durationTime: 5, // days
      price: 2500, // PHP
      additionalSubHeader: "Identify areas for improvement.",
    },
    {
      serviceId: "service13",
      header: "Competitor Analysis",
      description: "Get insights on your competitors' strategies.",
      durationTime: 7, // days
      price: 4000, // PHP
      additionalSubHeader: "Stay ahead of the competition.",
    },
    {
      serviceId: "service13",
      header: "Social Media Strategy Session",
      description: "Conduct a strategy session for social media marketing.",
      durationTime: 0, // same day
      price: 2000, // PHP
      additionalSubHeader: "Enhance your online presence.",
    },
    {
      serviceId: "service13",
      header: "Custom Content Creation",
      description: "Create personalized content for your brand.",
      durationTime: 10, // days
      price: 5000, // PHP
      additionalSubHeader: "Tailor your message to your audience.",
    },
  ],
  service14: [
    {
      serviceId: "service14",
      header: "Lead Magnet Development",
      description: "Create a valuable lead magnet for your campaign.",
      durationTime: 7, // days
      price: 3000, // PHP
      additionalSubHeader: "Attract potential customers effectively.",
    },
    {
      serviceId: "service14",
      header: "Email Marketing Campaign Setup",
      description: "Set up an email marketing campaign.",
      durationTime: 10, // days
      price: 5000, // PHP
      additionalSubHeader: "Boost engagement with targeted emails.",
    },
    {
      serviceId: "service14",
      header: "Landing Page Design",
      description: "Design an optimized landing page for conversions.",
      durationTime: 14, // days
      price: 4000, // PHP
      additionalSubHeader: "Maximize your marketing efforts.",
    },
    {
      serviceId: "service14",
      header: "A/B Testing Service",
      description: "Conduct A/B tests for your campaigns.",
      durationTime: 10, // days
      price: 3000, // PHP
      additionalSubHeader: "Optimize your marketing strategies.",
    },
    {
      serviceId: "service14",
      header: "Analytics Reporting",
      description:
        "Receive a comprehensive report on your campaign's performance.",
      durationTime: 10, // days
      price: 2500, // PHP
      additionalSubHeader: "Make data-driven decisions.",
    },
  ],
  service15: [
    {
      serviceId: "service15",
      header: "Gamification Strategy Session",
      description:
        "Receive a tailored strategy session for your gamified elements.",
      durationTime: 3, // days
      price: 3000, // PHP
      additionalSubHeader: "Enhance engagement with strategic insights.",
    },
    {
      serviceId: "service15",
      header: "Custom Game Development",
      description: "Develop a custom mini-game for your marketing campaign.",
      durationTime: 30, // days
      price: 15000, // PHP
      additionalSubHeader: "Capture your audience's attention with fun.",
    },
    {
      serviceId: "service15",
      header: "Gamification Analytics",
      description: "Get detailed analytics on gamification performance.",
      durationTime: 7, // days
      price: 4000, // PHP
      additionalSubHeader: "Measure the effectiveness of your strategies.",
    },
    {
      serviceId: "service15",
      header: "Interactive Content Creation",
      description: "Create quizzes and polls to engage your audience.",
      durationTime: 5, // days
      price: 2500, // PHP
      additionalSubHeader: "Boost interaction through engaging content.",
    },
    {
      serviceId: "service15",
      header: "Incentive Program Design",
      description: "Design a reward system to motivate your audience.",
      durationTime: 14, // days
      price: 6000, // PHP
      additionalSubHeader: "Drive participation with compelling incentives.",
    },
  ],
  service16: [
    {
      serviceId: "service16",
      header: "Custom User Journey Mapping",
      description: "Create a personalized user journey map for your project.",
      durationTime: 10, // days
      price: 5000, // PHP
      additionalSubHeader: "Understand your users' experience deeply.",
    },
    {
      serviceId: "service16",
      header: "Advanced Usability Testing",
      description: "Conduct thorough usability testing for your product.",
      durationTime: 14, // days
      price: 8000, // PHP
      additionalSubHeader: "Ensure a seamless user experience.",
    },
    {
      serviceId: "service16",
      header: "User Feedback Analysis",
      description: "Analyze user feedback to drive improvements.",
      durationTime: 7, // days
      price: 3500, // PHP
      additionalSubHeader: "Leverage insights for better user satisfaction.",
    },
    {
      serviceId: "service16",
      header: "Prototyping Service",
      description: "Create interactive prototypes for user testing.",
      durationTime: 10, // days
      price: 6000, // PHP
      additionalSubHeader: "Visualize your ideas before development.",
    },
    {
      serviceId: "service16",
      header: "User Training Workshop",
      description: "Conduct a training workshop for end users.",
      durationTime: 1, // days
      price: 4000, // PHP
      additionalSubHeader: "Empower users with knowledge about the system.",
    },
  ],
  service17: [
    {
      serviceId: "service17",
      header: "Affiliate Strategy Consultation",
      description:
        "Get expert advice on optimizing your affiliate marketing strategy.",
      durationTime: 5, // days
      price: 7000, // PHP
      additionalSubHeader:
        "Boost your affiliate program with a solid strategy.",
    },
    {
      serviceId: "service17",
      header: "Affiliate Network Expansion",
      description:
        "Grow your affiliate network with targeted outreach services.",
      durationTime: 10, // days
      price: 10000, // PHP
      additionalSubHeader: "Expand your reach by adding more affiliates.",
    },
    {
      serviceId: "service17",
      header: "Custom Affiliate Reporting",
      description:
        "Receive detailed custom reports on your affiliate performance.",
      durationTime: 7, // days
      price: 5000, // PHP
      additionalSubHeader:
        "Understand your affiliates' impact with custom analytics.",
    },
  ],
  service18: [
    {
      serviceId: "service18",
      header: "Influencer Collaboration Setup",
      description: "Facilitate collaborations with top influencers.",
      durationTime: 14, // days
      price: 12000, // PHP
      additionalSubHeader:
        "Connect with influencers to maximize affiliate impact.",
    },
    {
      serviceId: "service18",
      header: "Affiliate Campaign Monitoring",
      description: "Track and monitor your affiliate campaigns in real-time.",
      durationTime: 7, // days
      price: 4500, // PHP
      additionalSubHeader: "Keep your campaigns on track and maximize ROI.",
    },
    {
      serviceId: "service18",
      header: "Affiliate Onboarding Support",
      description: "Help affiliates set up and navigate the platform smoothly.",
      durationTime: 3, // days
      price: 3000, // PHP
      additionalSubHeader:
        "Ensure affiliates get the support they need to succeed.",
    },
  ],
  service19: [
    {
      serviceId: "service19",
      header: "Custom Affiliate Landing Pages",
      description:
        "Design and create personalized landing pages for affiliates.",
      durationTime: 8, // days
      price: 9000, // PHP
      additionalSubHeader:
        "Increase conversions with optimized affiliate landing pages.",
    },
    {
      serviceId: "service19",
      header: "Performance Optimization Consultation",
      description: "Get expert advice on improving affiliate performance.",
      durationTime: 5, // days
      price: 8000, // PHP
      additionalSubHeader: "Boost your affiliate marketing efficiency.",
    },
    {
      serviceId: "service19",
      header: "Advanced Tracking Integration",
      description:
        "Implement advanced tracking tools for better campaign insights.",
      durationTime: 7, // days
      price: 6000, // PHP
      additionalSubHeader:
        "Gain detailed visibility into your affiliates' performance.",
    },
  ],
  service20: [
    {
      serviceId: "service20",
      header: "Automated Affiliate Payments",
      description: "Set up an automated payment system for your affiliates.",
      durationTime: 3, // days
      price: 7000, // PHP
      additionalSubHeader:
        "Streamline payment processes and keep affiliates happy.",
    },
    {
      serviceId: "service20",
      header: "Affiliate Marketing Audit",
      description:
        "Conduct a thorough audit of your current affiliate program.",
      durationTime: 10, // days
      price: 9000, // PHP
      additionalSubHeader:
        "Identify key areas for improvement in your affiliate marketing.",
    },
    {
      serviceId: "service20",
      header: "Custom Affiliate Terms & Conditions",
      description:
        "Draft tailored terms and conditions for your affiliate program.",
      durationTime: 4, // days
      price: 5000, // PHP
      additionalSubHeader:
        "Ensure compliance and clarity with custom agreements.",
    },
  ],
};

export { SERVICE_ADD_ONS };
