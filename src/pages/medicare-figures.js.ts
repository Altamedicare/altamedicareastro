import type { APIRoute } from 'astro';
import { CURRENT } from '../data/figures';

// Bridge: publishes the figures source of truth as a window global so the static
// calculator HTML in /public can consume it (static files can't import TS modules).
// Loaded via <script src="/medicare-figures.js"> before each calculator's own script.
export const GET: APIRoute = async () =>
  new Response(`window.MEDICARE_FIGURES=${JSON.stringify(CURRENT)};`, {
    headers: { 'Content-Type': 'text/javascript; charset=utf-8' },
  });
