/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  // rules 그룹을 추가한다.
  extends: [
    // https://eslint.vuejs.org/rules/
    "plugin:vue/vue3-essential",
    // https://eslint.org/docs/rules/
    "eslint:recommended",
    // 
    "@vue/eslint-config-prettier",
  ],
  env: {
    "vue/setup-compiler-macros": true,
  },
  overrides: [
    {
      files: ["cypress/integration/**.spec.{js,ts,jsx,tsx}"],
      extends: ["plugin:cypress/recommended"],
    },
  ],
  // extends에 의해 추가된 rule을 overrde하거나 새롭게 추가할 경우 아래에 작성한다.
  rules: {
    // https://prettier.io/docs/en/options.html
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
