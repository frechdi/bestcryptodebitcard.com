export async function GET() {
  const site = 'https://bestcryptodebitcard.com';
  const pages = [
    '/',
    '/vergleich',
    '/crypto-com-visa-card',
    '/binance-card',
    '/coinbase-card',
    '/bitpay-card',
    '/nexo-card',
    '/wirex-card',
    '/revolut-card',
    '/plutus-card',
    '/uphold-card',
    '/tap-global-card',
    '/trastra-card',
    '/bitnovo-card',
    '/guides/how-crypto-cards-work',
    '/guides/best-cards-usa',
    '/guides/best-cards-europe',
    '/guides/anonymous-crypto-cards',
    '/guides/crypto-cards-with-cashback',
    '/blog',
    '/blog/crypto-cards-vs-traditional',
    '/blog/tax-implications-crypto-cards',
    '/blog/future-of-crypto-payments',
    '/imprint',
    '/privacy',
    '/disclaimer',
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${site}${p}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${p === '/' ? 'daily' : p.includes('blog') || p.includes('guides') ? 'weekly' : 'monthly'}</changefreq>
    <priority>${p === '/' ? '1.0' : p.includes('blog') || p.includes('guides') ? '0.7' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
