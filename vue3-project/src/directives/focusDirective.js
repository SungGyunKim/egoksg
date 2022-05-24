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
    // called before bound element's attributes
    // or event listeners are applied
    created(el, binding, vnode, prevVnode) {
      // see below for details on arguments
      console.log("[focusDirective] created()");
      console.log("[focusDirective] created() - el : ", el);
      console.log("[focusDirective] created() - binding : ", binding);
      console.log("[focusDirective] created() - vnode : ", vnode);
      console.log("[focusDirective] created() - prevVnode : ", prevVnode);
    },
    // called right before the element is inserted into the DOM.
    beforeMount(el, binding) {
      console.log("[focusDirective] beforeMount()");
      console.log("[focusDirective] created() - el : ", el);
      console.log("[focusDirective] created() - binding : ", binding);
    },
    // called when the bound element's parent component
    // and all its children are mounted.
    mounted(el, binding) {
      console.log("[focusDirective] mounted()");
      console.log("[focusDirective] mounted() - el : ", el);
      console.log("[focusDirective] mounted() - binding : ", binding);
      el.focus();
    },
    // called before the parent component is updated
    beforeUpdate(el, binding) {
      console.log("[focusDirective] beforeUpdate()");
      console.log("[focusDirective] beforeUpdate() - el : ", el);
      console.log("[focusDirective] beforeUpdate() - binding : ", binding);
    },
    // called after the parent component and
    // all of its children have updated
    updated(el, binding) {
      console.log("[focusDirective] updated()");
      console.log("[focusDirective] updated() - el : ", el);
      console.log("[focusDirective] updated() - binding : ", binding);
    },
    // called before the parent component is unmounted
    beforeUnmount(el, binding) {
      console.log("[focusDirective] beforeUnmount()");
      console.log("[focusDirective] beforeUnmount() - el : ", el);
      console.log("[focusDirective] beforeUnmount() - binding : ", binding);
    },
    // called when the parent component is unmounted
    unmounte(el, binding) {
      console.log("[focusDirective] unmounted()");
      console.log("[focusDirective] unmounted() - el : ", el);
      console.log("[focusDirective] unmounted() - binding : ", binding);
    },
  },
};
