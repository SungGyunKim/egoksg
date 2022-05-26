<template>
  <div>
    <input ref="inputElRef" />
    <input :ref="functionRefs" />
    <ul>
      <li v-for="index in 5" :key="index" ref="liElRefList">
        {{ index }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// ref 값을 DOM element에 넣으면 onMounted() 이후 접근이 가능하다.
const inputElRef = ref(null);
const liElRefList = ref([]);

onMounted(() => {
  console.log("[TemplateRefsView] inputElRef - ", inputElRef.value);
  console.log("[TemplateRefsView] liElRefList - ", liElRefList.value);
  inputElRef.value.focus();
});

function functionRefs(el) {
  console.log("[TemplateRefsView] Function Refs - ", el);
}
</script>

<style></style>
