import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import eslint from 'vite-plugin-eslint'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), eslint(), react()],
})
