import react from '@astrojs/react'
import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  devToolbar: {
    enabled: false,
  },
  integrations: [react(), tailwind()],
  base: `/app`,
  server: { port: 3000 },
  vite: {
    ssr: {
      noExternal: ['react-icons'],
    },
    // plugins: [dataIsPlugin()],
    optimizeDeps: { exclude: ['fsevents'] },
  },
})
