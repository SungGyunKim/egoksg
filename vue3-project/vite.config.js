import { fileURLToPath, URL } from "url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url)
      ),
      "@stores": fileURLToPath(new URL("./src/stores", import.meta.url)),
    },
  },
  /*
    여러 vue(module) 파일을 하나로 묶어 이 중 어떤한 것을 접근해도 모두 불러와 진다.
    사용자가 하나의 화면에 접근했을 때, 비슷한 화면에 접근할 것이라는 것을 가정하고 미리 불러오는 것이다.

    https://router.vuejs.org/guide/advanced/lazy-loading.html#with-vite
   */
  build: {
    rollupOptions: {
      // https://rollupjs.org/guide/en/#outputmanualchunks
      output: {
        manualChunks: {
          "group-user": [
            "./src/UserDetails",
            "./src/UserDashboard",
            "./src/UserProfileEdit",
          ],
        },
      },
    },
  },
})
