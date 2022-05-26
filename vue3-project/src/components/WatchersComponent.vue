<script setup>
import { reactive, ref } from "@vue/reactivity";
import {
  onBeforeUpdate,
  onUpdated,
  watch,
  watchEffect,
} from "@vue/runtime-core";

const sourceDataRef = ref(undefined);
const sourceDataReactive = reactive({
  inputValue: "",
  deepObj: {
    inputValue: "",
  },
});
const optionDataReactive = reactive({
  deepObj: {
    inputValue: "",
  },
});
const countRef = ref(0);
const responseRef = ref("");

/**
 * [ source ]
 *  - A getter function that returns a value
 *  - A ref
 *  - A reactive object
 *  - An array
 * [ option ]
 *  - immediate : watch 생성 시 즉시 콜백을 트리거한다.
 *                따라서, 감시 대상의 값이 없어도 수행되어야 할 때 사용한다.
 *                ref) https://ui.toast.com/weekly-pick/ko_20190307
 *  - deep      : Object나 Array를 감시할 때, 자체가 변경되어야 인지한다.
 *                즉, Object나 Array의 내부 값이 변경이 되면 인지할 수 있도록 하는 옵션이다.
 *  - flush     : state가 변경에 따른 callback 실행을 DOM update 전(pre), 후(post), 동기(sync)로 설정할 수 있다.
 *                pre > onBeforeUpdate() > post > onUpdated()
 *  - onTrack & onTrigger : debug the watcher's dependencies
 */
// A getter function that returns a value
watch(
  () => sourceDataRef.value,
  (newValue, oldValue) => {
    console.log("[WatchersComponent] getter - newValue : ", newValue);
    console.log("[WatchersComponent] getter - oldValue : ", oldValue);
  }
);
// source - A ref
watch(sourceDataRef, (newValue, oldValue) => {
  console.log("[WatchersComponent] ref - newValue : ", newValue);
  console.log("[WatchersComponent] ref - oldValue : ", oldValue);
});
// source - A reactive object
watch(sourceDataReactive, (newValue, oldValue) => {
  console.log("[WatchersComponent] reactive - newValue : ", newValue);
  console.log("[WatchersComponent] reactive - oldValue : ", oldValue);
});
// source - A reactive object & A getter function that returns a value
watch(
  () => sourceDataReactive.inputValue,
  (newValue, oldValue) => {
    console.log(
      "[WatchersComponent] reactive & getter - newValue : ",
      newValue
    );
    console.log(
      "[WatchersComponent] reactive & getter - oldValue : ",
      oldValue
    );
  }
);
// source - An array
watch([sourceDataRef, sourceDataReactive], ([newX, newY], [oldX, oldY]) => {
  console.log("[WatchersComponent] array - newX : ", newX);
  console.log("[WatchersComponent] array - newY : ", newY);
  console.log("[WatchersComponent] array - oldX : ", oldX);
  console.log("[WatchersComponent] array - oldY : ", oldY);
});
// -----------------------------------------------------------------------------------
// option - immediate & deep & onTrack & onTrigger
watch(
  () => optionDataReactive.deepObj,
  (newValue, oldValue) => {
    console.log(
      "[WatchersComponent] reactive & immediate & deep - newValue : ",
      newValue
    );
    console.log(
      "[WatchersComponent] reactive & immediate & deep - oldValue : ",
      oldValue
    );
  },
  {
    immediate: true,
    deep: true,
    onTrack(e) {
      console.log("[WatchersComponent] onTrack - e : ", e);
    },
    onTrigger(e) {
      console.log("[WatchersComponent] onTrigger - e : ", e);
    },
  }
);
onBeforeUpdate(() => {
  console.log("[WatchersComponent] DOM onBeforeUpdate");
});
onUpdated(function () {
  console.log("[WatchersComponent] DOM onUpdated");
});
// option - flush(pre)
watch(
  () => optionDataReactive.deepObj,
  (newValue, oldValue) => {
    console.log(
      "[WatchersComponent] reactive & flush(pre) - newValue : ",
      newValue
    );
    console.log(
      "[WatchersComponent] reactive & flush(pre) - oldValue : ",
      oldValue
    );
  },
  { deep: true, flush: "pre" }
);
// option - flush(post)
watch(
  () => optionDataReactive.deepObj,
  (newValue, oldValue) => {
    console.log(
      "[WatchersComponent] reactive & flush(post) - newValue : ",
      newValue
    );
    console.log(
      "[WatchersComponent] reactive & flush(post) - oldValue : ",
      oldValue
    );
  },
  { deep: true, flush: "post" }
);
// option - flush(sync)
watch(
  () => optionDataReactive.deepObj,
  (newValue, oldValue) => {
    console.log(
      "[WatchersComponent] reactive & flush(sync) - newValue : ",
      newValue
    );
    console.log(
      "[WatchersComponent] reactive & flush(sync) - oldValue : ",
      oldValue
    );
  },
  { deep: true, flush: "sync" }
);
// callback - onCleanup
// watch가 감시하고 있는 대상이 변경 사항이 생기면 callback에서 특정 작업을 하게 된다.
// 특정 작업이 비동기이거나 오래 걸리는 일이라면 해당 작업을 취소할 수 있도록 onCleanup에 취소 함수를 전달해야 한다.
function doAsyncWork(count) {
  let prom;
  let timeoutId;

  async function response() {
    console.log(
      "[WatchersComponent] callback's onCleanup - doAsyncWork is process"
    );
    prom = new Promise((resolve) => {
      timeoutId = setTimeout(() => {
        console.log(
          "[WatchersComponent] callback's onCleanup - doAsyncWork is done"
        );
        resolve("doAsyncWork is done");
      }, 2000);
    });

    return prom;
  }

  function cancel() {
    console.log(
      "[WatchersComponent] callback's onCleanup - doAsyncWork is cancel"
    );
    clearTimeout(timeoutId);
  }

  return {
    response,
    cancel,
  };
}
// watch stop
// watch를 생성할 때 받은 WatchStopHandle을 호출하면 종료된다.
const countRefWatcher = watch(
  countRef,
  async (newValue, oldValue, onCleanup) => {
    console.log("[WatchersComponent] watch");
    const { response, cancel } = doAsyncWork(countRef.value);

    onCleanup(cancel);
    responseRef.value = await response();
  }
);
// watchEffect
// watchEffect는 전달 받은 함수 내부에서 reactive object가 있다면 자동으로 감시하고
// reactive object에 변화가 생기면 해당 메서드를 다시 실행해 준다.
watchEffect(async (onCleanup) => {
  console.log("[WatchersComponent] watchEffect");
  const { response, cancel } = doAsyncWork(countRef.value);

  onCleanup(cancel);
  responseRef.value = await response();
});
</script>

<template>
  <div>
    <h3>[ sourceDataRef ]</h3>
    <input type="text" v-model="sourceDataRef" />
    <h3>[ sourceDataReactive ]</h3>
    <input type="text" v-model="sourceDataReactive.inputValue" />
    <h3>[ optionDataReactive ]</h3>
    <input type="text" v-model="optionDataReactive.deepObj.inputValue" />
    <h3>[ callback's onCleanup ]</h3>
    <button @click="countRef++">{{ countRef }}</button>
    <button @click="countRefWatcher()">감시 취소</button>
    <p>{{ responseRef }}</p>
  </div>
</template>
