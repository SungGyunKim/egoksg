<template>
  <!--
    [ merge ]
    - class and style Merging
    - v-on Listener Inheritance : 부모, 자식 동일한 이벤트가 걸려 있다면 두 이벤트 핸들러 모두 수신된다.
  -->
  <button class="default-class" style="color: blue" @click="onInnerClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  // inheritAttrs : 부모 컴포넌트로 부터 전달 받은 id, class, style, v-on를 받기를 원하지 않으면 false로 설정한다.
  inheritAttrs: true,
};
</script>

<script setup>
defineProps({
  customProp: String,
});

defineEmits(["customEvent"]);

function onInnerClick(e) {
  console.log(
    "[FallthroughAttributesComponent2] onInnerClick - e.target",
    e.target
  );
}
</script>

<style></style>
