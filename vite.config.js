import process from 'node:process'
import path from 'node:path'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { defineConfig, loadEnv } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    base: env.PUBLIC_URL ?? '/',
    plugins: [
      Vue(),
      AutoImport({
        imports: ['vue'],
        resolvers: [ElementPlusResolver()],
        dts: 'app/modules/auto-imports.d.ts',
      }),
      Components({
        resolvers: [ElementPlusResolver()],
        dts: 'app/modules/components.d.ts',
      }),
      UnoCSS(),
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
        [env.VITE_API_PREFIX]: {
          target: env.VITE_API_URL,
          changeOrigin: true,
        },
      },
    },
  }
})
