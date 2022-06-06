<script setup>
import { useMachine } from "@/plugins/machine.js";

/*
  조건(boolean)에 의해 특정 상황을 표현하는 경우가 있다.
  조건 여러 개 일 경우, 경우 수에 따라 수많은 상황이 생길 것이다.
  이럴 때, 조건들이 많아지면 조건문이 상당히 복잡해져 관리하기가 쉽지 않다.
  각 상황을 순차적으로 나열하면 하나의 상태 플로우가 된다.

  ref) https://www.rinae.dev/posts/learning-xstate
  ref) http://blog.hwahae.co.kr/all/tech/tech-tech/6707/
*/
const [state, send, service] = useMachine({
  id: "toggle",
  initial: "inactive",
  states: {
    inactive: { on: { TOGGLE: "active" } },
    active: { on: { TOGGLE: "inactive" } },
  },
});

service.onTransition((state) => {
  console.log("state : ", state.value);
  if (state.matches("inactive")) {
    console.log("inactive matched!!!");
  }
});
</script>

<template>
  <button @click="send('TOGGLE')">
    {{ state.matches("inactive") ? "Off" : "On" }}
  </button>
</template>
