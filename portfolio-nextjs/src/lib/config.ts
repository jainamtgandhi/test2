import { PageData, SocialLink, CaseStudy, Testimonial } from '@/types';

export const siteConfig = {
  name: 'Hey It\'s Jainam',
  description: 'Product Marketing Manager specializing in customer research, market analysis, and go-to-market strategy',
  url: 'https://heyitsjainam.com',
  ogImage: 'https://heyitsjainam.com/og-image.jpg',
  links: {
    linkedin: 'https://www.linkedin.com/in/jainamtgandhi',
    email: 'mailto:hi@heyitsjainam.com',
    about: '/aboutme',
  },
};

export const socialLinks: SocialLink[] = [
  {
    platform: 'LinkedIn',
    url: siteConfig.links.linkedin,
    icon: 'Linkedin',
  },
  {
    platform: 'Email',
    url: siteConfig.links.email,
    icon: 'Mail',
  },
  {
    platform: 'About Me',
    url: siteConfig.links.about,
    icon: 'User',
  },
];

export const navigationItems = [
  { label: 'Customer Research', href: '/customer-research' },
  { label: 'Market Research', href: '/market-research' },
  { label: 'Competitive Intelligence', href: '/competitive-intelligence' },
  { label: 'Positioning', href: '/positioning' },
  { label: 'Messaging', href: '/messaging' },
  { label: 'GTM Strategy', href: '/gtm-strategy' },
  { label: 'Sales Enablement', href: '/sales-enablement' },
];

export const pageData: Record<string, PageData> = {
  'customer-research': {
    title: 'Customer Research',
    description: 'Understand ICPs with interviews, surveys, and jobs-to-be-done mapping. Turn insights into personas and messaging levers.',
    slug: 'customer-research',
    content: {
      whatIDo: [
        'Conduct in-depth customer interviews and surveys',
        'Map jobs-to-be-done and customer journey stages',
        'Develop detailed buyer personas and ICPs',
        'Identify pain points and unmet needs',
        'Create customer insight reports and recommendations'
      ],
      howIWork: [
        'Define research objectives and target segments',
        'Design and execute qualitative and quantitative studies',
        'Analyze data to uncover key insights and patterns',
        'Synthesize findings into actionable personas and frameworks',
        'Present recommendations to cross-functional teams'
      ],
      deliverables: [
        'Customer interview guides and survey instruments',
        'Buyer persona documents and ICP definitions',
        'Jobs-to-be-done maps and customer journey visualizations',
        'Pain point analysis and opportunity assessments',
        'Research reports with actionable recommendations'
      ],
      tools: ['User Interviews', 'SurveyMonkey', 'Typeform', 'Miro', 'Figma', 'Notion'],
      featuredExample: {
        title: 'B2B SaaS Customer Research Study',
        description: 'Led comprehensive research initiative for a B2B SaaS platform, conducting 50+ customer interviews and analyzing 500+ survey responses to identify key user segments and their unique needs.',
        metrics: ['50+ customer interviews', '500+ survey responses', '3 distinct personas identified']
      }
    }
  },
  'market-research': {
    title: 'Market Research',
    description: 'Size markets, segment demand, and spot growth vectors. Translate TAM/SAM/SOM into pragmatic GTM choices.',
    slug: 'market-research',
    content: {
      whatIDo: [
        'Conduct market sizing and opportunity analysis',
        'Segment markets and identify growth vectors',
        'Analyze market trends and competitive dynamics',
        'Develop market entry and expansion strategies',
        'Create market intelligence reports and dashboards'
      ],
      howIWork: [
        'Define market scope and research methodology',
        'Gather data from primary and secondary sources',
        'Apply TAM/SAM/SOM frameworks for market sizing',
        'Segment markets using demographic and psychographic criteria',
        'Synthesize insights into strategic recommendations'
      ],
      deliverables: [
        'Market sizing reports (TAM/SAM/SOM)',
        'Market segmentation analysis',
        'Competitive landscape assessments',
        'Market trend reports and forecasts',
        'Strategic recommendations and action plans'
      ],
      tools: ['Statista', 'IBISWorld', 'Gartner', 'Forrester', 'Excel', 'Tableau'],
      featuredExample: {
        title: 'Enterprise Software Market Analysis',
        description: 'Conducted comprehensive market research for enterprise software segment, identifying $2.3B TAM opportunity and three high-growth sub-segments with 25%+ annual growth rates.',
        metrics: ['$2.3B TAM identified', '3 high-growth segments', '25%+ annual growth rate']
      }
    }
  },
  'competitive-intelligence': {
    title: 'Competitive Intelligence',
    description: 'Track players, pricing, and positioning. Build battlecards that sharpen sales conversations and win-loss learning loops.',
    slug: 'competitive-intelligence',
    content: {
      whatIDo: [
        'Monitor competitor activities and market moves',
        'Analyze competitive positioning and messaging',
        'Track pricing strategies and feature comparisons',
        'Develop competitive battlecards and playbooks',
        'Conduct win-loss analysis and competitive post-mortems'
      ],
      howIWork: [
        'Identify key competitors and monitoring priorities',
        'Set up competitive intelligence systems and processes',
        'Gather intelligence from multiple sources and channels',
        'Analyze competitive data and identify patterns',
        'Create actionable competitive insights and recommendations'
      ],
      deliverables: [
        'Competitive landscape maps and positioning matrices',
        'Battlecards and competitive playbooks',
        'Pricing analysis and feature comparison charts',
        'Win-loss analysis reports',
        'Competitive intelligence dashboards and alerts'
      ],
      tools: ['Crayon', 'Klenty', 'G2', 'Capterra', 'Salesforce', 'Notion'],
      featuredExample: {
        title: 'Competitive Battlecard System',
        description: 'Built comprehensive competitive intelligence system with real-time battlecards, pricing analysis, and win-loss tracking that improved sales win rates by 15% and reduced competitive losses by 20%.',
        metrics: ['15% increase in win rates', '20% reduction in competitive losses', '50+ battlecards created']
      }
    }
  },
  'positioning': {
    title: 'Positioning',
    description: 'Define where we play and why we win. Craft category narratives, moat proof points, and crisp value hierarchies.',
    slug: 'positioning',
    content: {
      whatIDo: [
        'Develop strategic positioning frameworks',
        'Craft category narratives and market positioning',
        'Define unique value propositions and differentiators',
        'Create positioning statements and messaging hierarchies',
        'Align positioning across all customer touchpoints'
      ],
      howIWork: [
        'Analyze market landscape and competitive positioning',
        'Conduct customer research to understand value drivers',
        'Develop positioning frameworks and value hierarchies',
        'Test and refine positioning with target audiences',
        'Create implementation guides and training materials'
      ],
      deliverables: [
        'Positioning strategy documents and frameworks',
        'Category narrative and market positioning statements',
        'Value proposition hierarchies and differentiator maps',
        'Positioning implementation guides',
        'Training materials and workshops'
      ],
      tools: ['Miro', 'Figma', 'Aha!', 'Notion', 'Slack', 'Zoom'],
      featuredExample: {
        title: 'Category Creation Strategy',
        description: 'Led category creation initiative for new market segment, developing positioning framework and narrative that established company as category leader and drove 40% increase in market awareness.',
        metrics: ['40% increase in market awareness', 'Category leadership established', '5 key differentiators identified']
      }
    }
  },
  'messaging': {
    title: 'Messaging',
    description: 'Persona-specific value props, headline/subhead systems, and objection-handling proof. Consistent across web, ads, and sales.',
    slug: 'messaging',
    content: {
      whatIDo: [
        'Develop persona-specific messaging frameworks',
        'Create headline and subhead systems',
        'Build objection-handling playbooks and proof points',
        'Ensure messaging consistency across all channels',
        'Test and optimize messaging for maximum impact'
      ],
      howIWork: [
        'Audit existing messaging and identify gaps',
        'Develop persona-specific messaging frameworks',
        'Create messaging hierarchies and proof point libraries',
        'Test messaging with target audiences',
        'Implement and monitor messaging performance'
      ],
      deliverables: [
        'Messaging frameworks and hierarchies',
        'Persona-specific messaging playbooks',
        'Headline and subhead systems',
        'Objection-handling guides and proof points',
        'Messaging testing reports and optimizations'
      ],
      tools: ['Figma', 'Notion', 'A/B Testing Tools', 'Google Analytics', 'HubSpot', 'Salesforce'],
      featuredExample: {
        title: 'Multi-Channel Messaging System',
        description: 'Developed comprehensive messaging system across web, ads, and sales channels that increased conversion rates by 30% and improved message consistency scores by 45%.',
        metrics: ['30% increase in conversion rates', '45% improvement in consistency', '8 persona-specific frameworks']
      }
    }
  },
  'gtm-strategy': {
    title: 'GTM Strategy',
    description: 'Launch planning, channel mix, offers, and sequencing. Align product, sales, and CS on one executable playbook.',
    slug: 'gtm-strategy',
    content: {
      whatIDo: [
        'Develop comprehensive go-to-market strategies',
        'Plan product launches and market entries',
        'Design channel mix and distribution strategies',
        'Create pricing and packaging strategies',
        'Align cross-functional teams on execution'
      ],
      howIWork: [
        'Analyze market opportunity and competitive landscape',
        'Define target segments and positioning strategy',
        'Develop channel strategy and distribution model',
        'Create launch timeline and execution plan',
        'Monitor performance and optimize strategy'
      ],
      deliverables: [
        'Go-to-market strategy documents',
        'Product launch plans and timelines',
        'Channel strategy and distribution models',
        'Pricing and packaging strategies',
        'Cross-functional alignment frameworks'
      ],
      tools: ['Aha!', 'Notion', 'Miro', 'Salesforce', 'HubSpot', 'Google Analytics'],
      featuredExample: {
        title: 'Enterprise Product Launch',
        description: 'Led go-to-market strategy for enterprise product launch, achieving 150% of revenue targets in first quarter and establishing product as market leader in competitive segment.',
        metrics: ['150% of revenue targets', 'Market leadership established', '5 new enterprise customers']
      }
    }
  },
  'sales-enablement': {
    title: 'Sales Enablement',
    description: 'One-pagers, talk tracks, and demo storylines. Help reps handle objections, shorten cycles, and lift win rates.',
    slug: 'sales-enablement',
    content: {
      whatIDo: [
        'Create sales enablement materials and playbooks',
        'Develop talk tracks and objection-handling guides',
        'Design demo storylines and presentation frameworks',
        'Train sales teams on product positioning and messaging',
        'Measure and optimize sales enablement effectiveness'
      ],
      howIWork: [
        'Audit existing sales materials and identify gaps',
        'Develop comprehensive sales enablement content',
        'Create training programs and certification processes',
        'Implement feedback loops and performance tracking',
        'Continuously optimize based on sales team feedback'
      ],
      deliverables: [
        'Sales playbooks and battlecards',
        'Talk tracks and objection-handling guides',
        'Demo storylines and presentation templates',
        'Training materials and certification programs',
        'Sales enablement dashboards and metrics'
      ],
      tools: ['Seismic', 'Highspot', 'Gong', 'Salesforce', 'Notion', 'Figma'],
      featuredExample: {
        title: 'Sales Enablement Platform Implementation',
        description: 'Implemented comprehensive sales enablement platform with 200+ assets, training programs, and performance tracking that increased sales productivity by 25% and reduced sales cycle length by 20%.',
        metrics: ['25% increase in productivity', '20% shorter sales cycles', '200+ enablement assets']
      }
    }
  }
};

export const caseStudy: CaseStudy = {
  title: 'Enterprise SaaS Market Entry',
  description: 'Led comprehensive go-to-market strategy for enterprise SaaS platform, achieving 200% of revenue targets and establishing market leadership.',
  image: '/api/placeholder/600/400',
  outcomes: [
    '200% of revenue targets achieved',
    'Market leadership in competitive segment',
    '50+ enterprise customers acquired'
  ],
  role: 'Senior Product Marketing Manager',
  metrics: [
    '200% revenue target achievement',
    '50+ enterprise customers',
    '40% market share growth'
  ],
  cta: 'Read Case Study'
};

export const testimonial: Testimonial = {
  quote: 'Jainam\'s strategic thinking and execution excellence transformed our go-to-market approach. His customer research insights and positioning work directly contributed to our 300% revenue growth.',
  author: 'Sarah Chen',
  role: 'VP of Marketing',
  company: 'TechCorp Solutions'
};
