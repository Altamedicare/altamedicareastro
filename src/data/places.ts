// Location framework. The Utah + county pages render from these `Place` objects
// via the reusable components in src/components/location/. Every location inherits
// the SAME components — add a Place below and four 3-line route files, nothing else.

export interface Place {
  /** Display name, e.g. "Utah" or "Salt Lake County". */
  name: string;
  /** Path under root (no leading slash, no .html). Hub = /<slug>.html, sub-pages = /<slug>/<type>.html. */
  slug: string;
  kind: 'state' | 'county';
  /** For counties: the state they sit in (drives the breadcrumb up-link). */
  stateName?: string;
}

export const UTAH: Place = { name: 'Utah', slug: 'utah', kind: 'state' };

// Utah counties — they inherit the same four components, nested under /utah/.
export const SALT_LAKE_COUNTY: Place  = { name: 'Salt Lake County', slug: 'utah/salt-lake-county', kind: 'county', stateName: 'Utah' };
export const UTAH_COUNTY: Place        = { name: 'Utah County',       slug: 'utah/utah-county',      kind: 'county', stateName: 'Utah' };
export const DAVIS_COUNTY: Place       = { name: 'Davis County',      slug: 'utah/davis-county',     kind: 'county', stateName: 'Utah' };
export const WEBER_COUNTY: Place       = { name: 'Weber County',      slug: 'utah/weber-county',     kind: 'county', stateName: 'Utah' };
export const WASHINGTON_COUNTY: Place  = { name: 'Washington County', slug: 'utah/washington-county', kind: 'county', stateName: 'Utah' };

/** Every published location. Add a Place here (plus its four route files) and it
 *  automatically appears in the sitemap. */
export const PLACES: Place[] = [
  UTAH,
  SALT_LAKE_COUNTY,
  UTAH_COUNTY,
  DAVIS_COUNTY,
  WEBER_COUNTY,
  WASHINGTON_COUNTY,
];

/** Hub URL for a place, e.g. "/utah.html" or "/utah/davis-county.html". */
export const hubHref = (p: Place) => `/${p.slug}.html`;
/** Sub-page URL, e.g. "/utah/medicare-advantage.html". */
export const pageHref = (p: Place, type: 'medicare-advantage' | 'medicare-supplement' | 'part-d') =>
  `/${p.slug}/${type}.html`;

export interface Crumb { name: string; href: string; }

/** State hub URL for a county (the slug minus its last segment), else null. */
export const parentStateHub = (p: Place): string | null =>
  p.kind === 'county' ? `/${p.slug.split('/').slice(0, -1).join('/')}.html` : null;

/** Breadcrumb trail for a location page. Counties nest under their state hub.
 *  `leaf` is the current sub-page (omit on the hub page itself). */
export function trail(place: Place, leaf?: Crumb): Crumb[] {
  const crumbs: Crumb[] = [{ name: 'Home', href: '/' }];
  const parent = parentStateHub(place);
  if (place.kind === 'county' && place.stateName && parent) {
    crumbs.push({ name: `Medicare in ${place.stateName}`, href: parent });
  }
  crumbs.push({ name: `Medicare in ${place.name}`, href: hubHref(place) });
  if (leaf) crumbs.push(leaf);
  return crumbs;
}
