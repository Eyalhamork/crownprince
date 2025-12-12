// JSON-LD Structured Data Components for SEO

interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
  telephone?: string;
  email?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  sameAs?: string[];
}

export function OrganizationSchema({
  name = "Crown Prince Incorporated",
  url = "https://crownprince.com",
  logo = "https://crownprince.com/crown-logo.png",
  description = "Professional electrical, construction, and logistics services with royal-grade quality and reliability.",
  telephone = "+1-555-123-4567",
  email = "contact@crownprince.com",
  address = {
    streetAddress: "123 Crown Street",
    addressLocality: "Premium City",
    addressRegion: "PC",
    postalCode: "12345",
    addressCountry: "US",
  },
  sameAs = [],
}: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo,
    description,
    telephone,
    email,
    address: {
      "@type": "PostalAddress",
      ...address,
    },
    sameAs,
    contactPoint: {
      "@type": "ContactPoint",
      telephone,
      contactType: "customer service",
      availableLanguage: ["English"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  provider?: string;
  serviceType: string;
  areaServed?: string;
  priceRange?: string;
}

export function ServiceSchema({
  name,
  description,
  provider = "Crown Prince Incorporated",
  serviceType,
  areaServed = "United States",
  priceRange = "$$$",
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: provider,
    },
    serviceType,
    areaServed,
    priceRange,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface LocalBusinessSchemaProps {
  name?: string;
  image?: string;
  telephone?: string;
  priceRange?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
  };
  openingHours?: string[];
}

export function LocalBusinessSchema({
  name = "Crown Prince Incorporated",
  image = "https://crownprince.com/crown-logo.png",
  telephone = "+1-555-123-4567",
  priceRange = "$$$",
  address = {
    streetAddress: "123 Crown Street",
    addressLocality: "Premium City",
    addressRegion: "PC",
    postalCode: "12345",
  },
  openingHours = ["Mo-Fr 08:00-18:00"],
}: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name,
    image,
    telephone,
    priceRange,
    address: {
      "@type": "PostalAddress",
      ...address,
    },
    openingHoursSpecification: openingHours.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.split(" ")[0].split("-"),
      opens: hours.split(" ")[1].split("-")[0],
      closes: hours.split(" ")[1].split("-")[1],
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbSchemaProps {
  items: { name: string; url: string }[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQSchemaProps {
  questions: { question: string; answer: string }[];
}

export function FAQSchema({ questions }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface WebPageSchemaProps {
  name: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}

export function WebPageSchema({
  name,
  description,
  url,
  datePublished = new Date().toISOString(),
  dateModified = new Date().toISOString(),
}: WebPageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
    datePublished,
    dateModified,
    publisher: {
      "@type": "Organization",
      name: "Crown Prince Incorporated",
      logo: {
        "@type": "ImageObject",
        url: "https://crownprince.com/crown-logo.png",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
