import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    VitePWA(
      {
        registerType: 'autoUpdate',
        includeAssets: ['favicon.ico'],
        manifest: {
          name: 'Comics APP',
          short_name: 'Comic',
          description: 'No se',
          theme_color: '#ebd6d6ff',
          icons: [
            {
              src: 'launchericon-144x144.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'launchericon-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        }
      })

  ],
})
