import process from 'node:process'
import path from 'node:path'
import Vue from '@vitejs/plugin-vue'
import { defineConfig, loadEnv } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return {
    base: process.env.PUBLIC_URL ?? '/',
    plugins: [
      Vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
        dts: 'app/auto-imports.d.ts',
      }),
      Components({
        resolvers: [ElementPlusResolver()],
        dts: 'app/components.d.ts',
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './app'),
      },
    },
    build: {
      outDir: 'build',
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://demobox-catalog.siaoya.com',
          changeOrigin: true,
        },
      },
    },
  }
})
