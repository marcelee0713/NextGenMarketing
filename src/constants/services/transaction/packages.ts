import { ServicePackages } from "@/interfaces/services/services.interface";

/**
 * The key string is the serviceId.
 *
 * The delivery value are on days and the price is on PHP Value.
 */
const SERVICE_PACKAGES: Record<string, ServicePackages> = {
  serviceId1: {
    serviceId: "serviceId1",
    packages: {
      basic: {
        class: "BASIC",
        price: 5000,
        description: "Basic SEO package with essential keyword optimization.",
        servicesPackagesId: "package1_basic",
        edge: "Affordable entry-level solution.",
        delivery: 14,
        includes: ["Keyword research", "On-page SEO", "Basic analytics report"],
      },
      standard: {
        class: "STANDARD",
        price: 10000,
        description: "Standard SEO package with comprehensive strategies.",
        servicesPackagesId: "package1_standard",
        edge: "Balanced investment for better results.",
        delivery: 21,
        includes: [
          "All Basic features",
          "Content optimization",
          "Link building strategy",
          "Detailed performance report",
        ],
      },
      premium: {
        class: "PREMIUM",
        price: 20000,
        description: "Premium SEO package with in-depth analysis and support.",
        servicesPackagesId: "package1_premium",
        edge: "Best value for maximum visibility.",
        delivery: 30,
        includes: [
          "All Standard features",
          "Monthly consultation",
          "Advanced analytics tracking",
          "Competitor analysis",
        ],
      },
    },
  },
  serviceId2: {
    serviceId: "serviceId2",
    packages: {
      basic: {
        class: "BASIC",
        price: 6000,
        description:
          "Basic content marketing strategy with essential content creation.",
        servicesPackagesId: "package2_basic",
        edge: "Great start for brand building.",
        delivery: 10,
        includes: ["1 Blog post per month", "Social media sharing"],
      },
      standard: {
        class: "STANDARD",
        price: 12000,
        description:
          "Standard package with multiple content pieces and strategy.",
        servicesPackagesId: "package2_standard",
        edge: "Enhanced engagement with quality content.",
        delivery: 15,
        includes: [
          "2 Blog posts per month",
          "Social media campaigns",
          "Monthly analytics report",
        ],
      },
      premium: {
        class: "PREMIUM",
        price: 25000,
        description:
          "Premium content marketing with comprehensive strategy and support.",
        servicesPackagesId: "package2_premium",
        edge: "Full-service content marketing solution.",
        delivery: 30,
        includes: [
          "4 Blog posts per month",
          "Social media management",
          "Detailed performance analytics",
          "Quarterly strategy consultation",
        ],
      },
    },
  },
  serviceId3: {
    serviceId: "serviceId3",
    packages: {
      basic: {
        class: "BASIC",
        price: 4000,
        description: "Basic social media management with essential posting.",
        servicesPackagesId: "package3_basic",
        edge: "Simple and affordable solution.",
        delivery: 7,
        includes: [
          "3 posts per week on 1 platform",
          "Basic engagement response",
        ],
      },
      standard: {
        class: "STANDARD",
        price: 8000,
        description:
          "Standard social media management for increased engagement.",
        servicesPackagesId: "package3_standard",
        edge: "Effective engagement strategies included.",
        delivery: 14,
        includes: [
          "5 posts per week on 2 platforms",
          "Engagement monitoring",
          "Monthly analytics report",
        ],
      },
      premium: {
        class: "PREMIUM",
        price: 15000,
        description: "Premium management for maximum brand exposure.",
        servicesPackagesId: "package3_premium",
        edge: "Comprehensive strategy with ongoing support.",
        delivery: 30,
        includes: [
          "Daily posts on up to 3 platforms",
          "Comprehensive engagement strategy",
          "Weekly performance reporting",
          "Quarterly strategy review",
        ],
      },
    },
  },
  serviceId4: {
    serviceId: "serviceId4",
    packages: {
      basic: {
        class: "BASIC",
        price: 7000,
        description: "Basic PPC campaign management for initial ad exposure.",
        servicesPackagesId: "package4_basic",
        edge: "Cost-effective way to start advertising.",
        delivery: 10,
        includes: [
          "Keyword setup",
          "1 campaign management",
          "Monthly performance report",
        ],
      },
      standard: {
        class: "STANDARD",
        price: 15000,
        description: "Standard PPC campaign with multiple ads and keywords.",
        servicesPackagesId: "package4_standard",
        edge: "Enhanced visibility through targeted ads.",
        delivery: 14,
        includes: [
          "All Basic features",
          "3 campaign management",
          "A/B testing of ads",
          "Weekly performance updates",
        ],
      },
      premium: {
        class: "PREMIUM",
        price: 30000,
        description: "Comprehensive PPC package with extensive management.",
        servicesPackagesId: "package4_premium",
        edge: "Maximized return on ad spend.",
        delivery: 30,
        includes: [
          "All Standard features",
          "Ongoing keyword optimization",
          "Conversion tracking setup",
          "Full analytical reporting",
        ],
      },
    },
  },
  serviceId5: {
    serviceId: "serviceId5",
    packages: {
      basic: {
        class: "BASIC",
        price: 3000,
        description: "Basic email marketing package for simple campaigns.",
        servicesPackagesId: "package5_basic",
        edge: "Great way to start email marketing.",
        delivery: 7,
        includes: [
          "1 email campaign",
          "Basic design template",
          "Basic analytics report",
        ],
      },
      standard: {
        class: "STANDARD",
        price: 6000,
        description:
          "Standard email marketing package with multiple campaigns.",
        servicesPackagesId: "package5_standard",
        edge: "Increased customer engagement with targeted emails.",
        delivery: 14,
        includes: [
          "3 email campaigns",
          "Custom design templates",
          "Advanced analytics tracking",
        ],
      },
      premium: {
        class: "PREMIUM",
        price: 12000,
        description:
          "Comprehensive email marketing package with extensive support.",
        servicesPackagesId: "package5_premium",
        edge: "Maximized engagement through tailored campaigns.",
        delivery: 30,
        includes: [
          "5 email campaigns",
          "Segmentation and targeting",
          "A/B testing of subject lines",
          "Full performance analytics",
        ],
      },
    },
  },
  serviceId6: {
    serviceId: "serviceId6",
    packages: {
      basic: {
        class: "BASIC",
        price: 10000,
        description:
          "Basic website development package with essential features.",
        servicesPackagesId: "package6_basic",
        edge: "Perfect for startups needing a simple site.",
        delivery: 21,
        includes: [
          "5-page website",
          "Basic SEO setup",
          "Mobile responsive design",
        ],
      },
      standard: {
        class: "STANDARD",
        price: 20000,
        description: "Standard website development with additional features.",
        servicesPackagesId: "package6_standard",
        edge: "Enhanced functionality for growing businesses.",
        delivery: 30,
        includes: [
          "10-page website",
          "Custom design",
          "SEO optimization",
          "1-month support",
        ],
      },
      premium: {
        class: "PREMIUM",
        price: 40000,
        description:
          "Comprehensive website development package with all features.",
        servicesPackagesId: "package6_premium",
        edge: "Complete solution for complex needs.",
        delivery: 45,
        includes: [
          "Unlimited pages",
          "E-commerce functionality",
          "Advanced SEO strategies",
          "6-month support",
        ],
      },
    },
  },
  serviceId7: {
    serviceId: "serviceId7",
    packages: {
      basic: {
        class: "BASIC",
        price: 5000,
        description: "Basic market research package for initial insights.",
        servicesPackagesId: "package7_basic",
        edge: "Ideal for startups exploring their market.",
        delivery: 14,
        includes: ["Competitor analysis", "Target audience identification"],
      },
      standard: {
        class: "STANDARD",
        price: 10000,
        description: "Standard market research with detailed insights.",
        servicesPackagesId: "package7_standard",
        edge: "Comprehensive analysis for informed decisions.",
        delivery: 21,
        includes: [
          "All Basic features",
          "SWOT analysis",
          "Market trends report",
        ],
      },
      premium: {
        class: "PREMIUM",
        price: 20000,
        description: "In-depth market research package with full support.",
        servicesPackagesId: "package7_premium",
        edge: "Best option for strategic planning.",
        delivery: 30,
        includes: [
          "All Standard features",
          "Customer surveys",
          "Market forecasting",
          "Consultation session",
        ],
      },
    },
  },
  serviceId8: {
    serviceId: "serviceId8",
    packages: {
      basic: {
        class: "BASIC",
        price: 4000,
        description: "Basic branding package with essential guidelines.",
        servicesPackagesId: "package8_basic",
        edge: "Great start for brand development.",
        delivery: 10,
        includes: ["Logo design", "Basic brand guidelines"],
      },
      standard: {
        class: "STANDARD",
        price: 8000,
        description: "Standard branding package with more elements.",
        servicesPackagesId: "package8_standard",
        edge: "Enhanced brand identity for visibility.",
        delivery: 14,
        includes: [
          "All Basic features",
          "Business card design",
          "Social media branding kit",
        ],
      },
      premium: {
        class: "PREMIUM",
        price: 15000,
        description: "Comprehensive branding package for complete identity.",
        servicesPackagesId: "package8_premium",
        edge: "Full-service branding solution.",
        delivery: 30,
        includes: [
          "All Standard features",
          "Website branding",
          "Packaging design",
          "Brand strategy consultation",
        ],
      },
    },
  },
  serviceId9: {
    serviceId: "serviceId9",
    packages: {
      basic: {
        class: "BASIC",
        price: 3000,
        description: "Basic video production package for simple needs.",
        servicesPackagesId: "package9_basic",
        edge: "Affordable video content creation.",
        delivery: 14,
        includes: ["1-minute video", "Basic editing", "Scriptwriting support"],
      },
      standard: {
        class: "STANDARD",
        price: 7000,
        description: "Standard video production with more content.",
        servicesPackagesId: "package9_standard",
        edge: "Quality videos for effective storytelling.",
        delivery: 21,
        includes: [
          "3-minute video",
          "Advanced editing",
          "Storyboarding",
          "2 rounds of revisions",
        ],
      },
      premium: {
        class: "PREMIUM",
        price: 15000,
        description: "Comprehensive video production with full service.",
        servicesPackagesId: "package9_premium",
        edge: "Maximized impact through professional production.",
        delivery: 30,
        includes: [
          "5-minute video",
          "Full production services",
          "Multiple locations",
          "Unlimited revisions",
        ],
      },
    },
  },
  serviceId10: {
    serviceId: "serviceId10",
    packages: {
      basic: {
        class: "BASIC",
        price: 2000,
        description: "Basic graphic design package for simple designs.",
        servicesPackagesId: "package10_basic",
        edge: "Perfect for small projects.",
        delivery: 7,
        includes: ["1 design revision", "Basic concept development"],
      },
      standard: {
        class: "STANDARD",
        price: 5000,
        description: "Standard graphic design package for quality output.",
        servicesPackagesId: "package10_standard",
        edge: "Enhanced visual identity.",
        delivery: 14,
        includes: [
          "3 design revisions",
          "Branding material design",
          "Social media graphics",
        ],
      },
      premium: {
        class: "PREMIUM",
        price: 10000,
        description:
          "Comprehensive graphic design package for full-service design.",
        servicesPackagesId: "package10_premium",
        edge: "Complete design solutions for your brand.",
        delivery: 30,
        includes: [
          "Unlimited design revisions",
          "Custom illustrations",
          "Brand guidelines creation",
        ],
      },
    },
  },
  serviceId11: {
    serviceId: "serviceId11",
    packages: {
      basic: {
        class: "BASIC",
        price: 5000,
        description: "Basic web analytics package for essential insights.",
        servicesPackagesId: "package11_basic",
        edge: "Good for initial tracking setup.",
        delivery: 7,
        includes: ["Basic analytics setup", "1-month reporting"],
      },
      standard: {
        class: "STANDARD",
        price: 10000,
        description: "Standard web analytics package with deeper insights.",
        servicesPackagesId: "package11_standard",
        edge: "Improved decision-making through data.",
        delivery: 14,
        includes: [
          "All Basic features",
          "Advanced tracking setup",
          "Monthly reporting",
        ],
      },
      premium: {
        class: "PREMIUM",
        price: 20000,
        description:
          "Comprehensive web analytics package for detailed insights.",
        servicesPackagesId: "package11_premium",
        edge: "Maximized performance through data analysis.",
        delivery: 30,
        includes: [
          "All Standard features",
          "Custom dashboard creation",
          "In-depth performance analysis",
        ],
      },
    },
  },
  serviceId12: {
    serviceId: "serviceId12",
    packages: {
      basic: {
        class: "BASIC",
        price: 8000,
        description: "Basic influencer marketing package for initial outreach.",
        servicesPackagesId: "package12_basic",
        edge: "Great entry point for influencer collaborations.",
        delivery: 14,
        includes: [
          "1 influencer partnership",
          "Campaign strategy consultation",
        ],
      },
      standard: {
        class: "STANDARD",
        price: 15000,
        description:
          "Standard influencer marketing with multiple partnerships.",
        servicesPackagesId: "package12_standard",
        edge: "Increased brand visibility through influencer reach.",
        delivery: 21,
        includes: [
          "2 influencer partnerships",
          "Campaign management",
          "Performance reporting",
        ],
      },
      premium: {
        class: "PREMIUM",
        price: 30000,
        description: "Comprehensive influencer marketing for maximum impact.",
        servicesPackagesId: "package12_premium",
        edge: "Full-service influencer marketing solution.",
        delivery: 30,
        includes: [
          "5 influencer partnerships",
          "Ongoing campaign management",
          "In-depth performance analysis",
        ],
      },
    },
  },
  serviceId13: {
    serviceId: "serviceId13",
    packages: {
      basic: {
        class: "BASIC",
        price: 4000,
        description: "Basic event planning package for small gatherings.",
        servicesPackagesId: "package13_basic",
        edge: "Affordable event solutions.",
        delivery: 14,
        includes: ["Venue selection", "Basic agenda planning"],
      },
      standard: {
        class: "STANDARD",
        price: 8000,
        description: "Standard event planning with detailed coordination.",
        servicesPackagesId: "package13_standard",
        edge: "Better event experience with professional planning.",
        delivery: 21,
        includes: [
          "All Basic features",
          "Vendor management",
          "Event day coordination",
        ],
      },
      premium: {
        class: "PREMIUM",
        price: 15000,
        description: "Comprehensive event planning for flawless execution.",
        servicesPackagesId: "package13_premium",
        edge: "Complete peace of mind through expert planning.",
        delivery: 30,
        includes: [
          "All Standard features",
          "Theme design and decor",
          "Post-event evaluation",
        ],
      },
    },
  },
  serviceId14: {
    serviceId: "serviceId14",
    packages: {
      basic: {
        class: "BASIC",
        price: 5000,
        description: "Basic photography package for simple shoots.",
        servicesPackagesId: "package14_basic",
        edge: "Perfect for casual photography needs.",
        delivery: 10,
        includes: ["2 hours of shooting", "Basic editing"],
      },
      standard: {
        class: "STANDARD",
        price: 10000,
        description: "Standard photography package for quality output.",
        servicesPackagesId: "package14_standard",
        edge: "Improved visuals through professional techniques.",
        delivery: 14,
        includes: ["4 hours of shooting", "Advanced editing", "Online gallery"],
      },
      premium: {
        class: "PREMIUM",
        price: 20000,
        description: "Comprehensive photography package for full service.",
        servicesPackagesId: "package14_premium",
        edge: "Maximized visual impact through expert photography.",
        delivery: 30,
        includes: [
          "8 hours of shooting",
          "High-end editing",
          "Physical album",
          "Consultation session",
        ],
      },
    },
  },
  serviceId15: {
    serviceId: "serviceId15",
    packages: {
      basic: {
        class: "BASIC",
        price: 6000,
        description: "Basic content writing package for simple needs.",
        servicesPackagesId: "package15_basic",
        edge: "Affordable writing solutions.",
        delivery: 10,
        includes: ["500 words", "Basic editing"],
      },
      standard: {
        class: "STANDARD",
        price: 12000,
        description: "Standard content writing package for quality content.",
        servicesPackagesId: "package15_standard",
        edge: "Improved storytelling for brand visibility.",
        delivery: 14,
        includes: ["1000 words", "Advanced editing", "2 rounds of revisions"],
      },
      premium: {
        class: "PREMIUM",
        price: 22000,
        description: "Comprehensive content writing package for full service.",
        servicesPackagesId: "package15_premium",
        edge: "Maximized impact through professional writing.",
        delivery: 30,
        includes: [
          "1500 words",
          "Unlimited revisions",
          "Research and analysis",
        ],
      },
    },
  },
  serviceId16: {
    serviceId: "serviceId16",
    packages: {
      basic: {
        class: "BASIC",
        price: 3000,
        description: "Basic SEO package for initial optimization.",
        servicesPackagesId: "package16_basic",
        edge: "Great entry point for search visibility.",
        delivery: 10,
        includes: ["Keyword research", "On-page optimization"],
      },
      standard: {
        class: "STANDARD",
        price: 8000,
        description: "Standard SEO package with deeper optimization.",
        servicesPackagesId: "package16_standard",
        edge: "Improved ranking potential.",
        delivery: 14,
        includes: [
          "All Basic features",
          "Content optimization",
          "Performance reporting",
        ],
      },
      premium: {
        class: "PREMIUM",
        price: 15000,
        description: "Comprehensive SEO package for maximum visibility.",
        servicesPackagesId: "package16_premium",
        edge: "Ultimate solution for search engine success.",
        delivery: 30,
        includes: [
          "All Standard features",
          "Backlink strategy",
          "Ongoing optimization",
        ],
      },
    },
  },
};

export { SERVICE_PACKAGES };
