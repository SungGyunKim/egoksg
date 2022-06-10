<template>
  <div class="parent">
    <CSSFeaturesComponent2>
      <template #child-slotted-selectors1-name>
        <div class="child-slotted-selectors1-cls">child-slotted-selectors1</div>
      </template>
      <template #child-slotted-selectors2-name>
        <div class="child-slotted-selectors2-cls">child-slotted-selectors2</div>
      </template>
    </CSSFeaturesComponent2>
    <div :class="$style['css-modules']">
      css-modules > Template > default-name
    </div>
    <div :class="classes['css-modules']">
      css-modules > Template > custom-inject-name
    </div>
    <div ref="defaultNameEl">
      css-modules > Usage with Composition API > default-name
    </div>
    <div ref="customInjectName">
      css-modules > Usage with Composition API > custom-inject-name
    </div>
    <div class="v-bind-in-css1">v-bind() in CSS > method 1</div>
    <div class="v-bind-in-css2">v-bind() in CSS > method 2</div>
  </div>
</template>
<script setup>
import { onMounted, ref, useCssModule } from "vue";
import CSSFeaturesComponent2 from "@/components/CSSFeaturesComponent2.vue";

const defaultNameEl = ref();
const customInjectName = ref();
const vBindInCss1 = ref("indigo");
const vBindInCss2 = {
  backgroundColor: "indigo",
};

onMounted(() => {
  // https://vuejs.org/api/sfc-css-features.html#usage-with-composition-api
  // inside setup() scope...
  // default, returns classes for <style module>
  defaultNameEl.value.classList.add(useCssModule()["css-modules"]);

  // named, returns classes for <style module="classes">
  customInjectName.value.classList.add(useCssModule("classes")["css-modules"]);
});
</script>
<!--
  #########################################################################################
  <style>
  #########################################################################################
-->
<!--
  https://vuejs.org/api/sfc-css-features.html#mixing-local-and-global-styles
  
  [ Mixing Local and Global Styles > global styles ]
    <style>은 APP 전체에 적용한다.
-->
<style>
div {
  background-color: red;
}

.v-bind-in-css1 {
  background-color: v-bind(vBindInCss1);
}

.v-bind-in-css2 {
  background-color: v-bind("vBindInCss2.backgroundColor");
}
</style>
<!--
  #########################################################################################
  <style scoped>
  #########################################################################################
-->
<!--
  https://vuejs.org/api/sfc-css-features.html#mixing-local-and-global-styles

  [ Mixing Local and Global Styles > local styles ]
    <style scoped> 해당 컴포넌트와 자식 컴포넌트의 Root Element에도 적용된다.
-->
<style scoped>
.parent {
  width: 100%;
  height: 100%;
  background-color: green;
  color: white;
  font-weight: bold;
}

/*
  https://vuejs.org/api/sfc-css-features.html#child-component-root-elements

  [ Child Component Root Elements ]
    Root Element에도 적용되는 이유는 부모 컴포넌트에서 자식 컴포넌트의 레이아웃을 목적을 위해 사용된다.
*/
.child-root {
  width: 300px;
  height: 200px;
  background-color: darkorchid;
}

/*
  https://vuejs.org/api/sfc-css-features.html#deep-selectors

  [ Deep Selectors ]
    :deep()은 자식 컴포넌트에 깊숙히 접근할 수 있는 pseudo-class이다
    ※ v-html을 사용할 경우, <style scoped>는 사용할 수 없지만 :deep()은 사용할 수 있다.
*/
.parent :deep(.child-deep-selectors) {
  background-color: blue;
}

/*
  https://vuejs.org/api/sfc-css-features.html#global-selectors

  [ Global Selectors ]
    <script setup>에서 global styles을 적용할 수 있다.
*/
:global(a) {
  font-size: 18px;
}
</style>
<!--
  #########################################################################################
  <style module>
  #########################################################################################
-->
<!--
  https://vuejs.org/api/sfc-css-features.html#css-modules

  [ CSS Modules ]
    element에 <style module>에서 정의한 class를 간편하게 주입할 수 있다.
    Inject Name를 지정하지 않으면 $style를 사용하여 접근이 가능하다.
-->
<style module>
.css-modules {
  background-color: sandybrown;
}
</style>
<!--
  https://vuejs.org/api/sfc-css-features.html#custom-inject-name

  [ CSS Modules > custom-inject-name ]
    element에 <style module>에서 정의한 class를 간편하게 주입할 수 있다.
    Inject Name를 지정할 경우 해당 이름을 통해 접근이 가능하다.
-->
<style module="classes">
.css-modules {
  background-color: cornflowerblue;
}
</style>
