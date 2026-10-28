import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.png',
        'apple-touch-icon.png',
        'icons/icon-192x192.png',
        'icons/icon-512x512.png',
        'icons/maskable-icon-512x512.png',
      ],
      manifest: {
        name: "Georgina's Travel Journal",
        short_name: "Georgina's Journal",
        description: 'Un diario personal para acompañar tu aventura en Australia.',
        lang: 'es',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#FFF9F0',
        theme_color: '#FFF9F0',
        icons: [
          {
            src: '/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/icons/maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: '/apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png',
            purpose: 'any',
          },
        ],
      },
      workbox: {
        globPatterns: [
          '**/*.{js,css,html,webmanifest}',
          'icons/*.png',
          'apple-touch-icon.png',
          'favicon.png',
        ],
        cleanupOutdatedCaches: true,
      },
    }),
  ],
})
