import { defineConfig } from 'astro/config';

import relativeLinks from "astro-relative-links";

// https://astro.build/config
export default defineConfig({
  // integrations: [relativeLinks()],
  // outDir: './my-custom-build-directory'
  site: 'https://www.my-site.dev'
});