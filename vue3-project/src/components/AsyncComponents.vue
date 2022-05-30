<template>
  <div>
    <AysncCompA></AysncCompA>
    <AysncCompB></AysncCompB>
    <AsyncCompC></AsyncCompC>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "@vue/runtime-core";
import loadingComponent from "./ComposablesComponent.vue";
import errorComponent from "./EventComponent1.vue";

const AysncCompA = defineAsyncComponent(() => {
  return new Promise((resolve) => {
    // ...load component from server
    resolve(/* loaded component */);
  });
});

// ES module dynamic import - option Y
const AysncCompB = defineAsyncComponent(() =>
  import("./DirectiveComponent.vue")
);

// ES module dynamic import - option N
const AsyncCompC = defineAsyncComponent({
  // The factory function
  loader: () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import("./DirectiveComponent.vue"));
      }, 5000);
    }),
  // A component to use while the async component is loading
  loadingComponent: loadingComponent,
  // A component to use if the load fails
  errorComponent: errorComponent,
  // loading 컴포넌트가 뜨기 전까지 기다리는 시간.
  // 즉, delay 시간 안에 aysnc 컴포넌트가 뜨면 loading 컴포넌트는 나타나지 않는다.
  // Delay before showing the loading component. Default: 200ms.
  delay: 200,
  // timeout 시간만큼 errorComponent 표시
  // The error component will be displayed if a timeout is
  // provided and exceeded. Default: Infinity.
  timeout: 30000,
  // Defining if component is suspensible. Default: true.
  suspensible: false,
  onError(error, retry, fail, attempts) {
    if (error.message.match(/fetch/) && attempts <= 3) {
      // retry on fetch errors, 3 max attempts
      retry();
    } else {
      // Note that retry/fail are like resolve/reject of a promise:
      // one of them must be called for the error handling to continue.
      fail();
    }
  },
});
</script>

<style></style>
