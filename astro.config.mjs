import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://bdkf.de',
  // Aktuelles gibt es nicht mehr — Termine + Neuankömmlinge laufen über Start
  redirects: { '/aktuelles/': '/' },
});
