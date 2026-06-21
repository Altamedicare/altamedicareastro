import type { APIRoute } from 'astro';
import { PROGRAMS, CONDITIONS } from '../data/drugAssistance';

// Bridge: publishes the drug-assistance dataset (single source of truth in
// src/data/drugAssistance.ts) as a window global so the static finder HTML in
// /public can consume it without duplicating the data.
// Loaded via <script src="/drug-assistance-data.js"> before the finder's own script.
export const GET: APIRoute = async () =>
  new Response(`window.DRUG_ASSISTANCE=${JSON.stringify({ PROGRAMS, CONDITIONS })};`, {
    headers: { 'Content-Type': 'text/javascript; charset=utf-8' },
  });
