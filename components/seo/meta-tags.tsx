import { Metadata } from "next";

interface GenerateMetadataProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
}

const BASE_URL = "https://crownprince.com";
const DEFAULT_IMAGE = "/cp-cover.png";
const SITE_NAME = "Crown Prince Incorporated";

export function generatePageMetadata({
  title,
  description,
  path = "",
  image = DEFAULT_IMAGE,
  keywords = [],
  noIndex = false,
}: GenerateMetadataProps): Metadata {
  const url = `${BASE_URL}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${BASE_URL}${image}`;

  const defaultKeywords = [
    "electrical services",
    "construction company",
    "logistics solutions",
    "Crown Prince",
    "professional contractors",
  ];

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    keywords: [...defaultKeywords, ...keywords].join(", "),
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

// Predefined metadata for common pages
export const pageMetadata = {
  home: generatePageMetadata({
    title: "Premium Multi-Service Solutions",
    description:
      "Professional electrical, construction, and logistics services with royal-grade quality and reliability. Get your free quote today.",
    path: "",
    keywords: ["home services", "contractors", "multi-service provider"],
  }),

  about: generatePageMetadata({
    title: "About Us",
    description:
      "Learn about Crown Prince Incorporated's history, mission, and commitment to excellence since 2009.",
    path: "/about",
    keywords: ["company history", "mission", "values", "team"],
  }),

  services: generatePageMetadata({
    title: "Our Services",
    description:
      "Comprehensive electrical, construction, and logistics services for residential and commercial clients.",
    path: "/services",
    keywords: ["professional services", "contractors", "solutions"],
  }),

  electrical: generatePageMetadata({
    title: "Electrical Services",
    description:
      "Expert electrical installations, repairs, and upgrades. Licensed electricians for residential and commercial projects.",
    path: "/services/electrical",
    image: "/electrical-services.png",
    keywords: ["electrician", "wiring", "electrical repair", "lighting"],
  }),

  construction: generatePageMetadata({
    title: "Construction Services",
    description:
      "Full-service construction from new builds to renovations. Quality craftsmanship and on-time delivery.",
    path: "/services/construction",
    image: "/construction-services.png",
    keywords: ["contractor", "building", "renovation", "remodeling"],
  }),

  logistics: generatePageMetadata({
    title: "Logistics Services",
    description:
      "Streamline your supply chain with our logistics solutions. Warehouse management and distribution services.",
    path: "/services/logistics",
    image: "/logistics-services.png",
    keywords: ["supply chain", "warehouse", "distribution", "shipping"],
  }),

  contact: generatePageMetadata({
    title: "Contact Us",
    description:
      "Get in touch with Crown Prince Incorporated. Request a quote, ask questions, or schedule a consultation.",
    path: "/contact",
    keywords: ["contact", "quote request", "consultation", "phone"],
  }),

  projects: generatePageMetadata({
    title: "Our Projects",
    description:
      "Browse our portfolio of completed projects. See examples of our electrical, construction, and logistics work.",
    path: "/projects",
    keywords: ["portfolio", "case studies", "completed projects", "gallery"],
  }),

  careers: generatePageMetadata({
    title: "Careers",
    description:
      "Join the Crown Prince team. View current job openings and career opportunities in electrical, construction, and logistics.",
    path: "/careers",
    keywords: ["jobs", "employment", "career opportunities", "hiring"],
  }),

  faq: generatePageMetadata({
    title: "FAQ",
    description:
      "Find answers to frequently asked questions about our services, pricing, and processes.",
    path: "/faq",
    keywords: ["questions", "answers", "help", "information"],
  }),

  quote: generatePageMetadata({
    title: "Request a Quote",
    description:
      "Get a free, no-obligation quote for your project. Fast response and competitive pricing.",
    path: "/quote",
    keywords: ["free quote", "estimate", "pricing", "consultation"],
  }),

  calculator: generatePageMetadata({
    title: "Cost Calculator",
    description:
      "Estimate your project costs with our interactive calculator. Get instant pricing for services.",
    path: "/calculator",
    keywords: ["cost estimate", "pricing tool", "budget calculator"],
  }),

  privacy: generatePageMetadata({
    title: "Privacy Policy",
    description:
      "Read our privacy policy to understand how we collect, use, and protect your personal information.",
    path: "/privacy",
    keywords: ["privacy", "data protection", "GDPR", "security"],
  }),

  terms: generatePageMetadata({
    title: "Terms of Service",
    description:
      "Review our terms of service and conditions for using Crown Prince Incorporated services.",
    path: "/terms",
    keywords: ["terms", "conditions", "legal", "agreement"],
  }),
};
