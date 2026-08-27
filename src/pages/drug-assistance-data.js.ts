import type { APIRoute } from 'astro';
import { PROGRAMS, CONDITIONS } from '../data/drugAssistance';
import { MEDICATION_ASSISTANCE, categoryLabelsFor, verifiedMonth } from '../data/medicationAssistance';

// Bridge: publishes the drug-assistance dataset (single source of truth in
// src/data/drugAssistance.ts) as a window global so the static finder HTML in
// /public can consume it without duplicating the data.
// Loaded via <script src="/drug-assistance-data.js"> before the finder's own script.
//
// RECORDS is the researched-medication index from the record registry
// (src/data/medicationAssistance). The finder's search consults it FIRST —
// when a query names a researched medication, the answer is its record page,
// never the legacy program directory (record precedence; the legacy layer's
// per-program drug lists can drift from what research established).
const RECORDS = MEDICATION_ASSISTANCE.map((r) => ({
  slug: r.slug,
  brand: r.brandName,
  generic: r.genericName,
  conditions: r.conditions,
  categories: categoryLabelsFor(r),
  open: r.programs.filter((p) => p.status === 'open' || p.status === 'limited').length,
  programs: r.programs.length,
  verified: verifiedMonth(r.lastVerified),
}));

export const GET: APIRoute = async () =>
  new Response(`window.DRUG_ASSISTANCE=${JSON.stringify({ PROGRAMS, CONDITIONS, RECORDS })};`, {
    headers: { 'Content-Type': 'text/javascript; charset=utf-8' },
  });
