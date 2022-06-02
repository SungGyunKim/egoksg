<!--
[ Modal 요구사항 ]
size
  ㄴ width, height가 존재한다.
position
  ㄴ width, height를 고려하여 화면 중앙에 위치한다.
layout
  ㄴ header
    - 제목이 존재한다.
    - 닫기 버튼이 존재한다.
        - 닫기 버튼의 명친은 변경할 수 있다.
        - 닫기 버튼을 눌렀을 때, close 이벤트를 발생한다.
    - 위 내용을 구현한 다른 컴포넌트로 대체할 수 있다.
  ㄴ body
    - 
    - 내용물이 넘칠 경우, 수직 스크롤이 존재한다.
    - 위 내용을 구현한 다른 컴포넌트로 대체할 수 있다.
  ㄴ footer
    - 닫기 버튼이 존재한다.
        - 닫기 버튼의 명친은 변경할 수 있다.
        - 닫기 버튼을 눌렀을 때, close 이벤트를 발생한다.
    - 위 내용을 구현한 다른 컴포넌트로 대체할 수 있다.
method
  ㄴ 

https://jsonplaceholder.typicode.com/posts/42

나중에 만들게 된다면 아래 사이트를 참고하자
ref) https://v3.vue-final-modal.org/
ref) https://github.com/vue-final/vue-final-modal
-->
<template>
  <Transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div
          class="modal-container custom-modal-container"
          v-bind:style="{
            width: $props.option.width + 'px',
            height: $props.option.height + 'px',
          }"
        >
          <div class="modal-header">
            <slot name="header">default header</slot>
          </div>

          <div class="modal-body custom-modal-body">
            <component :is="contentView"></component>
            <slot name="body">default body</slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              default footer
              <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { computed, defineAsyncComponent, onMounted } from "vue";

const props = defineProps({
  option: Object,
  default: () => {
    return {};
  },
});

const contentView = computed(() => {
  return defineAsyncComponent(() => import(props.option.url));
});

onMounted(() => {
  console.log("props : ", props);
  console.log("props.option.width : ", props.option.width);
  console.log("props.option.height : ", props.option.height);
  console.log("props.option.url : ", props.option.url);
});
</script>

<style scoped>
.custom-modal-container {
  display: flex;
  flex-direction: column;
}

.custom-modal-body {
  overflow-y: auto;
}
</style>
