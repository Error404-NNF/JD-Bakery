export async function GET() {
  const baseUrl = 'https://jd-bakery.vercel.app';
  const today = new Date().toISOString().split('T');
  
  const paths = ['', 'about', 'contact']; // Add your actual routes here
  
  const urls = paths.map((p) => {
    const loc = `${baseUrl}${p ? `/${p}` : ''}`.replace(/\/+$/, '');
    return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
  </url>`;
  }).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
