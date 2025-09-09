/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://heyitsjainam.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*'],
  additionalPaths: async (config) => {
    const result = [];
    
    // Add all the main pages
    const pages = [
      'customer-research',
      'market-research', 
      'competitive-intelligence',
      'positioning',
      'messaging',
      'gtm-strategy',
      'sales-enablement'
    ];

    pages.forEach((page) => {
      result.push({
        loc: `/${page}`,
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      });
    });

    return result;
  },
};
