<template>
  <div>
    <h3>[ Provide ]</h3>
    <div>messageComp : {{ messageComp }}</div>
    <h3>[ App-level Provide ]</h3>
    <div>messageApp : {{ messageApp }}</div>
    <h3>[ Injection Default Values ]</h3>
    <div>defaultValue1 : {{ defaultValue1 }}</div>
    <div>defaultValue2 : {{ defaultValue2 }}</div>
    <div>defaultValue3 : {{ defaultValue3 }}</div>
    <div>defaultValue4 : {{ defaultValue4 }}</div>
    <h3>[ Working with Reactivity ]</h3>
    <button @click="updateLocation">{{ location }}</button>
    <h3>[ Working with Symbol Keys ]</h3>
    <div>injected : {{ injected }}</div>
  </div>
</template>

<script setup>
import { inject, ref } from "vue";
import { myInjectionKey } from "@/js/injectionKeys.js";

// 조상 컴포넌트로 부터 받은 데이터(ProvideinjectComponentDepth1에서 주입)
const messageComp = inject("message-comp");
// 어플리케이션으로 부터 받은 데이터(main.js에서 주입)
const messageApp = inject("message-app");
// 기본값
const defaultValue1 = inject("message", "default value");
const defaultValue2 = inject("message", ref("default value"));
const defaultValue3 = inject("message", () => "default value")();
const defaultValue4 = inject("message", new String("default value"));
// 조상 컴포넌트로 부터 받은 데이터를 후손 컴포넌트에서 수정이 필요할 경우, 함수를 제공
const { location, updateLocation } = inject("location");
// 조상 컴포넌트로 부터 받은 데이터를 후손 컴포넌트에서 수정하지 못하게 할 경우 readonly 사용
const readOnlyCount = inject("read-only-count");
// Symbol을 이용하여 유일성 보장
const injected = inject(myInjectionKey);
</script>

<style></style>
