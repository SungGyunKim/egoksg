/**
  ※ plugin 등록은 main.js에서 한다.

    import i18nPlugin from "./plugins/i18nPlugin";
    
    app.use(i18nPlugin, {
      greetings: {
        hello: "Bonjour!",
      },
    });
 */
export default {
  install: (app, options) => {
    // <template></template>에서 사용 가능하다.
    // inject a globally available $translate() method
    app.config.globalProperties.$translate = (key) => {
      // retrieve a nested property in `options`
      // using `key` as the path
      return key.split(".").reduce((o, i) => {
        if (o) return o[i];
      }, options);
    };

    /**
      ※ Provide / Inject with Plugins - <script setup>에서 사용이 가능하다.

        <script setup>
          import { inject } from "vue";

          const i18n = inject("i18n");

          console.log(i18n.greetings.hello);
        </script>
     */
    app.provide("i18n", options);
  },
};
