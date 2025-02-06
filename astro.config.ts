import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import { dataIsPlugin } from './my-scripts/vite/data-is-plugin'

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  devToolbar: {
    enabled: false,
  },
  integrations: [react(), tailwind()],
  base: `/app`,
  vite: {
    // ssr: {
    //   noExternal: ['react-icons'],
    // },
    plugins: [dataIsPlugin()],
    // optimizeDeps: { exclude: ['fsevents'] },
  },
})
