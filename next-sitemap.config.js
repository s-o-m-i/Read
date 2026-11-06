/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://tasbihhub.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.8,
  exclude: ["/tasbih-counter", "/digital-tasbih", "/dhikr-counter", "/zikr-counter"],
  transform: async (config, path) => {
    const isHome = path === "/" || path === "";
    return {
      loc: isHome ? "/" : path,
      changefreq: config.changefreq,
      priority: isHome ? 1.0 : config.priority,
      lastmod: new Date().toISOString(),
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
