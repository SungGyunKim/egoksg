/**
  custom directive는 DOM 조작을 통해 기능을 추가하고자 할 경우 사용된다.
  ※ plugin 등록은 main.js에서 한다.

    import focusDirective from "./directives/focusDirective";
    
    app.directive(focusDirective.name, focusDirective.hooks);

    ref) https://vuejsexamples.com/a-custom-directive-tooltips-for-vue-3/
    ref) https://www.thisdot.co/blog/custom-directives-in-vue-js
 */
export default {
  name: "focus",
  hooks: {
    mounted(el) {
      el.focus();
    },
  },
};
