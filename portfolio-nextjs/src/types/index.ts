export interface PageData {
  title: string;
  description: string;
  slug: string;
  content: {
    whatIDo: string[];
    howIWork: string[];
    deliverables: string[];
    tools: string[];
    featuredExample: {
      title: string;
      description: string;
      metrics: string[];
    };
    downloadLink?: string;
  };
}

export interface NavigationItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface CaseStudy {
  title: string;
  description: string;
  image: string;
  outcomes: string[];
  role: string;
  metrics: string[];
  cta: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}
