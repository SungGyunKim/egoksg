// mouse.js
import { ref } from "vue";
import { useEventListener } from "./event";

/**
 * composable은 여러 컴포넌트의 <script setup></script> 혹은 setup() 내에서
 * 반복적으로 사용하는 소스 코드를 컴포넌트와 분리시켜 모듈화한 것이다.
 *
 * 1. composable function의 이름은 "use"로 시작한다.
 * 2. function의 인자는 reactive data로 받는다.
 *    - function 내부에서 unref()를 통해 원시 데이터를 사용한다.
 * 3. function의 return 값은 reactive()를 사용하여 반환한다.
 * 4. function 내부에서 리소스(setInterval, event listener etc) 사용과 해지를 해야 한다.
 *    - onMounted()   : 리소스 사용
 *    - onUnmounted() : 리소스 해지
 *
 * ※ composables vs Renderless Components
 * composables와 Renderless Components는 비슷한 기능을 한다.
 * 하지만 composables는 component 인스턴스를 생성하지 않아 관련 비용이 들지 않느다.
 * 따라서 composables는 순수한 로직일 경우 사용하고 순수한 로직과
 * UI가 필요하다면 Renderless Components를 사용해야 한다.
 *
 * https://vuejs.org/guide/reusability/composables.html#comparisons-with-other-techniques
 * https://vuejs.org/guide/components/slots.html#scoped-slots
 */
// by convention, composable function names start with "use"
export function useMouse() {
  // state encapsulated and managed by the composable
  const x = ref(0);
  const y = ref(0);

  /* v1
  // a composable can update its managed state over time.
  function update(event) {
    x.value = event.pageX;
    y.value = event.pageY;
  }

  // a composable can also hook into its owner component's
  // lifecycle to setup and teardown side effects.
  onMounted(() => window.addEventListener("mousemove", update));
  onUnmounted(() => window.removeEventListener("mousemove", update));
  */

  // v2
  useEventListener(window, "mousemove", (event) => {
    x.value = event.pageX;
    y.value = event.pageY;
  });

  // expose managed state as return value
  return { x, y };
}
