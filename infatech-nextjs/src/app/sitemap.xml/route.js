export async function GET() {
    const baseUrl = 'https://www.infatech.in';
  
    const staticPaths = [
      '',
      '/about',
      '/contact',
      '/faq',
      '/pricing',
      '/blog',
      '/services',
      '/team',
      '/testimonial',
    ];
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPaths
      .map((path) => {
        return `
    <url>
      <loc>${baseUrl}${path}</loc>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>`;
      })
      .join('')}
  </urlset>`;
  
    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  }
  