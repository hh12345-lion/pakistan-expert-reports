import { SITE_URL, LINKEDIN_URL } from "./constants";

export type FAQ = { question: string; answer: string };
export type BreadcrumbItem = { name: string; href?: string };

export function faqSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbSchema(
  items: ({ name?: string; label?: string; href?: string })[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name ?? item.label ?? "",
      ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
    })),
  };
}

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Pakistan Expert Reports",
    url: SITE_URL,
    address: { "@type": "PostalAddress", addressCountry: "GB" },
    areaServed: "United Kingdom",
    sameAs: [LINKEDIN_URL],
  };
}

export function professionalServiceSchema() {
  const services = [
    "Country Condition Reports",
    "Ahmadi Asylum Reports",
    "Blasphemy Expert Reports",
    "Honour-Based Violence Reports",
    "LGBTQ+ Asylum Reports",
    "Political Persecution Reports",
    "CPIN Challenge Reports",
    "Expert Oral Evidence",
  ];
  return {
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#professional-service`,
    name: "Pakistan Expert Report Services",
    url: SITE_URL,
    serviceType: "Pakistan Country Expert Report",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "United Kingdom",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pakistan Expert Report Services",
      itemListElement: services.map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
  };
}

export function homepageGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationSchema(), professionalServiceSchema()],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Pakistan Expert Reports",
    url: SITE_URL,
    inLanguage: "en-GB",
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/glossary?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function serviceNode(id: string, name: string, description: string) {
  return {
    "@type": "Service",
    "@id": `${SITE_URL}/services#${id}`,
    url: `${SITE_URL}/services/${id}`,
    name,
    description,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "United Kingdom",
  };
}

export function servicesPageGraph(
  services: { id: string; name: string; description: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      ...services.map((s) => serviceNode(s.id, s.name, s.description)),
    ],
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  path: string;
  aboutServiceId?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    ...(opts.aboutServiceId
      ? { about: { "@id": `${SITE_URL}/services#${opts.aboutServiceId}` } }
      : {}),
  };
}

export function personSchema(expert: {
  name: string;
  jobTitle: string;
  description: string;
  expertise: string[];
}) {
  return {
    "@type": "Person",
    name: expert.name,
    jobTitle: expert.jobTitle,
    description: expert.description,
    knowsAbout: expert.expertise,
    worksFor: { "@id": `${SITE_URL}/#organization` },
  };
}
