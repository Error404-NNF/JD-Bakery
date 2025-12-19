export async function GET() {
  const baseUrl = 'https://jd-bakery.vercel.app';
  const staticPages = ['']; // add other paths (e.g. 'about', 'menu') if you want them listed
  const today = new Date().toISOString().split('T')[0];

  const urls = staticPages.map((p) => {
    const loc = `${baseUrl}${p ? `/${p}` : ''}`.replace(/\/+$, '');
    return `\n  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`;
  }).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}\n</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
