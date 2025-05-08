import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://sowdawomen.org';

const pages = [
  {
    url: '/',
    changefreq: 'daily',
    priority: 1.0
  },
  {
    url: '/about',
    changefreq: 'weekly',
    priority: 0.8
  },
  {
    url: '/programs',
    changefreq: 'weekly',
    priority: 0.8
  },
  {
    url: '/support',
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    url: '/contact',
    changefreq: 'monthly',
    priority: 0.6
  }
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
    <url>
      <loc>${BASE_URL}${page.url}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
    </url>
  `).join('')}
</urlset>`;

  const outputPath = path.join(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(outputPath, sitemap);
  console.log('Sitemap generated successfully!');
};

generateSitemap(); 