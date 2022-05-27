<template>
  <div>
    <div>
      <h3>[ Basic ]</h3>
      <button
        v-for="(comp, compKey) in tabs"
        :key="compKey"
        @click="displayComponentId = compKey"
      >
        {{ compKey }}
      </button>
      <keep-alive>
        <component :is="tabs[displayComponentId]"></component>
      </keep-alive>
    </div>
    <div>
      <h3>[ KeepAlive ]</h3>
      <button
        v-for="(comp, compKey) in tabs"
        :key="compKey"
        @click="displayComponentId = compKey"
      >
        {{ compKey }}
      </button>
      <!-- 
        [ keep-alive option ]
          Include / Exclude : string | regex | Array 캐시 포함/불포함 목록
            ㄴ 컴포넌트의 이름을 설정해야 사용할 수 있다.
               ex) DirectiveComponent.vue
          Max : 최대로 캐시되는 컴포넌트 인스턴스 수, Least recently used (LRU)을 사용한다.

          ※ 컴포넌트의 hook인 onActivated, onDeactivated가 호출된다. ex) LifecycleComponent.vue
      -->
      <keep-alive :max="10" :exclude="'DirectiveComponent'">
        <component :is="tabs[displayComponentId]"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent, ref } from "vue";
import ComposablesComponent from "@/components/ComposablesComponent.vue";
import DirectiveComponent from "@/components/DirectiveComponent.vue";

const tabs = {
  // the name string of a registered component
  ComposablesComponent,
  DirectiveComponent,
  // the actual imported component object
  LifecycleComponent: defineAsyncComponent(() =>
    import("@/components/LifecycleComponent.vue")
  ),
};

var displayComponentId = ref("ComposablesComponent");
</script>

<style>

</style>