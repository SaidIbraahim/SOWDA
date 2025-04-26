import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Allow all hosts including Ngrok
    host: true,
    hmr: {
      // Allow all hosts for HMR connections
      clientPort: 443,
      host: 'f7f0-102-223-191-252.ngrok-free.app'
    },
    // Explicitly allow your Ngrok URL
    allowedHosts: [
      'f7f0-102-223-191-252.ngrok-free.app',
      '.ngrok-free.app',  // Allow any ngrok subdomain
      'localhost',
    ]
  }
})
