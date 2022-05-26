<template>
  <div>
    <h2>[ ProvideinjectComponentDepth1 ]</h2>
    <h3>[ Working with Reactivity ]</h3>
    <input type="text" v-model="location" />
    <h2>[ ProvideinjectComponentDepth2 ]</h2>
    <ProvideinjectComponentDepth2 />
  </div>
</template>

<script setup>
import ProvideinjectComponentDepth2 from "@/components/ProvideinjectComponentDepth2.vue";
import { myInjectionKey } from "@/js/injectionKeys.js";
import { provide, readonly, ref } from "vue";

// 후손 컴포넌트에 데이터 전달
provide(/* key */ "message-comp", /* value */ "Comp hello!");

// 조상 컴포넌트로 부터 받은 데이터를 후손 컴포넌트에서 수정이 필요할 경우, 함수를 제공
const location = ref("North Pole");

function updateLocation() {
  location.value = "South Pole";
}

provide("location", {
  location,
  updateLocation,
});

// 조상 컴포넌트로 부터 받은 데이터를 후손 컴포넌트에서 수정하지 못하게 할 경우 readonly 사용
const count = ref(0);
provide("read-only-count", readonly(count));

// Symbol을 이용하여 유일성 보장
provide(myInjectionKey, "myInjectionKey");
</script>

<style></style>
