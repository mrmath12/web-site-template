/** @type {import('next-sitemap').IConfig} */
// TODO: replace siteUrl with the real domain before launch
const config = {
  siteUrl: 'https://yourdomain.com',
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 0.7,
  exclude: ['/login'],
}

module.exports = config
