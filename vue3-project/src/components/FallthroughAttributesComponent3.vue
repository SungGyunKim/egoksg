<template>
  <!--
    ※ button을 root element로 사용하지 않고 div로 감싸는걸 추천한다.
       ㄴ div에 FallthroughAttributes가 일어나므로 inheritAttrs: false로 설정한다.
          그리고 button에 FallthroughAttributes가 일어날 수 있도록 v-bind="$attrs"로 설정한다.

    [ merge ]
    - class and style Merging
    - v-on Listener Inheritance : 부모, 자식 동일한 이벤트가 걸려 있다면 두 이벤트 핸들러 모두 수신된다.
  -->
  <div class="btn-wrapper">
    <button
      v-bind="$attrs"
      class="default-class"
      style="color: blue"
      @click="onInnerClick"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  // inheritAttrs : root element에 자동으로 적용(FallthroughAttributes)되게 할지 여부
  inheritAttrs: false,
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
