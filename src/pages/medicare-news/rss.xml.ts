import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const SITE = 'https://altamedicare.com';
const FEED_URL = `${SITE}/medicare-news/rss.xml`;
const HUB_URL = `${SITE}/medicare-news.html`;

const esc = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

export const GET: APIRoute = async () => {
  const items = (await getCollection('news', ({ data }) => !data.draft))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  // Newest item's date (or its last-updated date) drives lastBuildDate.
  const newest = items[0];
  const lastBuild = newest ? (newest.data.updated || newest.data.date) : new Date(0);

  const entries = items
    .map((p) => {
      const url = `${SITE}/medicare-news/${p.slug}.html`;
      return `    <item>
      <title>${esc(p.data.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${p.data.date.toUTCString()}</pubDate>
      <category>${esc(p.data.category)}</category>
      <description>${esc(p.data.summary)}</description>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>AltaMedicare — Medicare News &amp; Updates</title>
    <link>${HUB_URL}</link>
    <atom:link href="${FEED_URL}" rel="self" type="application/rss+xml" />
    <description>Important Medicare changes, savings opportunities, and Utah-specific Medicare news from AltaMedicare.</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuild.toUTCString()}</lastBuildDate>
${entries}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
};
