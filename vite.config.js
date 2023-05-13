import { defineConfig } from "vite"
export default defineConfig({
  server:{
    port:3000
  },
  build:{
    rollupOptions:{
      input:{
        index:'index.html',
        home:'home.html',
        todolist:'todolist.html'
      }
    }
  }
})