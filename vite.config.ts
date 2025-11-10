import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Увеличиваем лимит предупреждения о размере chunk
    chunkSizeWarningLimit: 1000,
  }
})

// ВАЖНО: Перед деплоем на Vercel удалите .exe файлы из папки public/release/
// Они будут храниться на GitHub Releases и доступны по ссылке из src/config/release.ts
