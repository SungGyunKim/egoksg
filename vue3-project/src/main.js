import { createApp } from "vue"
import { createPinia } from "pinia"

import App from "./App.vue"
import router from "./router"
import i18nPlugin from "./plugins/i18nPlugin"
import focusDirective from "./directives/focusDirective"
import { store } from "./stores/store"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18nPlugin, {
  greetings: {
    hello: "Bonjour!",
  },
})
app.use(store)
app.directive(focusDirective.name, focusDirective.hooks)
app.provide(/* key */ "message-app", /* value */ "App hello!")

app.mount("#app")
