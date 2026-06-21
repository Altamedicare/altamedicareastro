#!/usr/bin/env node
/**
 * Optional helper — NOT part of the build.
 *
 *   npm run fetch-news
 *
 * Downloads the latest CMS.gov newsroom headlines and writes them to a REVIEW file:
 *
 *   src/data/news-cms.json
 *
 * Nothing here touches the live carousel. Open that file, pick the few items that
 * actually matter to Utah Medicare beneficiaries, and copy them into
 * src/data/news.json — ideally rewriting `url` to an internal article page so
 * visitors stay on AltaMedicare.com (keep the CMS link as the `source` citation).
 *
 * Dependency-free on purpose: uses Node's built-in fetch (Node 18+) and a tiny
 * XML parser, so a broken or slow feed can never block a deploy.
 */

import { writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const FEED_URL = 'https://www.cms.gov/newsroom/rss-feeds';
const MAX_ITEMS = 10;

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_PATH = resolve(__dirname, '../src/data/news-cms.json');

/** Pull the inner text of the first <tag>…</tag>, unwrapping CDATA. */
function tag(block, name) {
  const m = block.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`, 'i'));
  if (!m) return '';
  return m[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1').trim();
}

/** Decode the HTML entities CMS uses (its descriptions are entity-encoded HTML). */
function decodeEntities(s) {
  return s
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&#8217;|&rsquo;/g, '’')
    .replace(/&#8216;|&lsquo;/g, '‘')
    .replace(/&#8220;|&ldquo;/g, '“')
    .replace(/&#8221;|&rdquo;/g, '”')
    .replace(/&#8211;|&ndash;/g, '–')
    .replace(/&#8212;|&mdash;/g, '—')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&amp;/g, '&'); // ampersand last so the above survive
}

/** Decode entities, strip tags, collapse whitespace, and truncate for a summary. */
function clean(html, max = 180) {
  const text = decodeEntities(html)
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (text.length <= max) return text;
  return text.slice(0, max - 1).replace(/\s+\S*$/, '') + '…';
}

/**
 * Pull an ISO date for the item. CMS puts a clean ISO timestamp in a
 * <time datetime="…"> attribute; <pubDate> is a non-standard "MM/DD/YYYY" string,
 * so we fall back to parsing that by hand.
 */
function itemDate(block) {
  const iso = (block.match(/datetime="([^"]+)"/i) || [])[1];
  if (iso) return iso.slice(0, 10);
  const pd = tag(block, 'pubDate').match(/(\d{2})\/(\d{2})\/(\d{4})/);
  return pd ? `${pd[3]}-${pd[1]}-${pd[2]}` : '';
}

async function main() {
  console.log(`Fetching CMS headlines from ${FEED_URL} …`);

  let xml;
  try {
    const res = await fetch(FEED_URL, { headers: { 'User-Agent': 'AltaMedicare-news-fetch' } });
    if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
    xml = await res.text();
  } catch (err) {
    console.error(`\nCould not fetch the feed: ${err.message}`);
    console.error('Nothing was written. Your live news.json is untouched.');
    process.exit(1);
  }

  const blocks = xml.match(/<item[\s\S]*?<\/item>/gi) || [];
  const items = blocks.slice(0, MAX_ITEMS).map((block) => {
    // CMS wraps the real URL in the <title> as <a href="/path">Title</a>;
    // the <link> element is a mangled, encoded copy, so use the href instead.
    const titleRaw = tag(block, 'title');
    const href = (titleRaw.match(/href="([^"]+)"/i) || [])[1];
    const link = href ? new URL(href, 'https://www.cms.gov').href : tag(block, 'link');
    return {
      title: clean(titleRaw, 120),
      date: itemDate(block),
      tag: '',
      summary: clean(tag(block, 'description')),
      // Review step: replace `url` with an internal /medicare-news/... page before
      // publishing, and keep `source` as the CMS citation.
      url: link,
      source: link,
    };
  });

  if (items.length === 0) {
    console.error('\nFeed fetched but no <item> entries were found. Nothing written.');
    process.exit(1);
  }

  await mkdir(dirname(OUT_PATH), { recursive: true });
  await writeFile(OUT_PATH, JSON.stringify(items, null, 2) + '\n', 'utf8');

  console.log(`\n✓ Wrote ${items.length} item(s) to src/data/news-cms.json`);
  console.log('  Review them, then copy the useful ones into src/data/news.json.');
  console.log('  Tip: rewrite `url` to an internal page and keep `source` as the CMS citation.');
}

main();
