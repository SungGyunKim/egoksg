<template>
  <div ref="el">
    <button id="counter" @click="increment">{{ count }}</button>
  </div>
</template>

<script setup>
import {
  nextTick,
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onErrorCaptured,
  onMounted,
  onRenderTracked,
  onRenderTriggered,
  onUnmounted,
  onUpdated,
  ref,
} from "@vue/runtime-core";

const count = ref(0);
const el = ref();
let intervalId;

/**
 * 컴포넌트가 reactive state 설정을 완료했지만 아직 DOM 노드가 생성되지 않았습니다.
 */
onBeforeMount(() => {
  console.log("[LifecycleComponent] onBeforeMount");
  console.log("[LifecycleComponent] onBeforeMount - count : ", count.value);
});

/**
 * 모든 동기 자식 컴포넌트가 mount가 되고 Virtual DOM을 실제 DOM에 옮기면 호출된다.
 * 이 과정을 onRenderTriggered를 통해 관찰할 수 있다.
 */
onMounted(() => {
  console.log("[LifecycleComponent] onMounted");
  console.log("[LifecycleComponent] onMounted - el : ", el.value);

  intervalId = setInterval(() => {
    console.log("[LifecycleComponent] create setInterval");
  }, 1000);
});

/**
 * reactive state가 변경되었지만 아직 DOM에 반영되지 않았을 때 호출된다.
 */
onBeforeUpdate(() => {
  console.log("[LifecycleComponent] onBeforeUpdate");
});

/**
 * reactive state가 변경되어 DOM이 변경완료된 시점에 호출된다.
 */
onUpdated(() => {
  console.log("[LifecycleComponent] onUpdated");
});

/**
 * 컴포넌트 인스턴스가 마운트 해제되기 직전에 호출된다.
 */
onBeforeUnmount(() => {
  console.log("[LifecycleComponent] onBeforeUnmount");
});

/**
 * 컴포넌트 인스턴스가 마운트 해제된 후 호출된다.
 * 해당 라이프사이클에서는 컴포넌트에서 사용한 자원을 회수해야 한다.
 *  - render effect and computed
 *  - watchers
 *  - web socket
 *  - setInterval
 *  - etc
 */
onUnmounted(() => {
  console.log("[LifecycleComponent] onUnmounted");
  clearInterval(intervalId);
  console.log("[LifecycleComponent] clear setInterval");
});

/**
 * 컴포넌트 인스턴스가 <KeepAlive>에 의해 캐시된 트리의 일부로 DOM에 삽입된 후 호출된다.
 * KeepAlive의 대상이 되는 컴포넌트에 넣어야 한다.
 */
onActivated(() => {
  console.log("[LifecycleComponent] onActivated");
});

/**
 * 컴포넌트 인스턴스가 <KeepAlive>에 의해 캐시된 트리의 일부로 DOM에 제거된 후 호출된다.
 * KeepAlive의 대상이 되는 컴포넌트에 넣어야 한다.
 */
onDeactivated(() => {
  console.log("[LifecycleComponent] onDeactivated");
});

/**
 * Virtual DOM에 가상으로 Rendering할 DOM을 미리 구성한다.
 * ref) https://vuejs.org/api/composition-api-lifecycle.html#onrendertracked
 */
onRenderTracked((e) => {
  console.log("[LifecycleComponent] onRenderTracked - e : ", e);
});

/**
 * Virtual DOM이 DOM으로 반영이 되어야 할 때 호출된다.
 * onMounted, onActived, onUpdated와 같이 실제 DOM이 변경되기 전에 호출된다.
 * ref) https://vuejs.org/api/composition-api-lifecycle.html#onrendertriggered
 */
onRenderTriggered((e) => {
  console.log("[LifecycleComponent] onRenderTriggered - e : ", e);
});

/**
 * 자신 컴포넌트로부터 올라오는 컴포넌트의 오류를 잡을 수 있다.
 * return false하면 상위 컴포넌트로 전파하지 않는다.
 * app.config.errorHandler에 전역으로 설정할 수 있다.
 */
onErrorCaptured((e) => {
  console.log("[LifecycleComponent] onErrorCaptured - e : ", e);

  return true;
});

// onBeforeUpdate, onUpdated와 관련되어 있다.
async function increment() {
  count.value++;

  // DOM not yet updated
  console.log(
    "[LifecycleComponent] DOM not yet updated : ",
    document.getElementById("counter").textContent
  ); // 0

  // reactive state 변경하면 결과 DOM 업데이트(onUpdated)가 동기적으로 적용되지 않습니다.
  // 얼마나 많은 reactive state 변경을 수행했는지에 관계없이 각 컴포넌트가 한 번만 업데이트되도록 합니다.
  // DOM 업데이트(onUpdated)가 완료되면 nextTick을 호출합니다.
  // callback 함수를 인수로 전달하여 DOM 업데이트(onUpdated) 완료를 확인하거나
  // return 값인 Promise에 await 걸어서 이후 소스에서는 DOM 업데이트(onUpdated) 완료을 확인할 수 있다.
  await nextTick(() => {
    console.log("[LifecycleComponent] nextTick");
  });

  // DOM is now updated
  console.log(
    "[LifecycleComponent] DOM is now updated : ",
    document.getElementById("counter").textContent
  ); // 1
}
</script>

<style></style>
