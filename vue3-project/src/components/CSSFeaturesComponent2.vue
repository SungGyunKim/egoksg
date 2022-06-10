<template>
  <div class="child-root">
    <div class="child-deep-selectors">child-deep-selectors</div>
    <span class="child-slotted-selectors1-wrap">
      <slot name="child-slotted-selectors1-name"></slot>
    </span>
    <span class="child-slotted-selectors2-wrap">
      <slot name="child-slotted-selectors2-name"></slot>
    </span>
  </div>
</template>
<script setup>
</script>
<style scoped>
/*
  https://vuejs.org/api/sfc-css-features.html#slotted-selectors

  [ Slotted Selectors ]
    Slot은 기본적으로 부모의 css을 물려 받으며 :slotted()을 이용하여
    내부에서 들어온 Element를 지정할 수 있다.
    ※ 여러 <slot>이 있을 경우 각 슬롯에 하위에만 :slotted()가 적용될 수 있도록 <slot>을 <span>으로 감싸다.
  */
.child-slotted-selectors1-wrap > :slotted(.child-slotted-selectors1-cls) {
  background-color: chocolate;
}
.child-slotted-selectors2-wrap > :slotted(.child-slotted-selectors2-cls) {
  background-color: gold;
}
</style>
