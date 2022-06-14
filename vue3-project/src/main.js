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
/*
  store는 하나만 등록이 가능하다.
  여러 개 등록할 경우, 다음과 같은 경고가 뜬다.
  runtime-core.esm-bundler.js:38 [Vue warn]: App already provides property with key "store". It will be overwritten with the new value.
*/
app.use(store)
app.directive(focusDirective.name, focusDirective.hooks)
app.provide(/* key */ "message-app", /* value */ "App hello!")

app.mount("#app")
