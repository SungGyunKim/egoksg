<script setup>
import { useImmer } from "@/plugins/immer";
import { watch } from "vue";

const [items, updateItems] = useImmer([
  {
    title: "Learn Vue",
    done: true,
  },
  {
    title: "Use Vue with Immer",
    done: false,
  },
]);

function toggleItem(index) {
  updateItems((items) => {
    items[index].done = !items[index].done;
  });
}

// immutable
// vue의 reactive는 기본적으로 깊은 곳까지 모든 변화를 감지한다.
// 대량의 데이터를 변경하면 매번 변화에 알리기 때문에 비용이 많이 든다.
// 이럴 경우, 기존 객체는 변경하지 않고 새로운 객체를 만드는 immutable 방식으로 대체한다.
// 그러기 위해서는 깊은 곳의 변호를 감지하지 않도록 shallowRef를 사용한다.
watch(
  () => items.value,
  (newValue, oldValue) => {
    console.log(
      `newValue : ${JSON.stringify(newValue)},
      \r\noldValue : ${JSON.stringify(oldValue)}`
    );
    console.log(`[immutable] newValue === oldValue : ${newValue === oldValue}`);
  },
  {
    deep: true,
  }
);
</script>

<template>
  <ul>
    <li
      v-for="({ title, done }, index) in items"
      :class="{ done }"
      @click="toggleItem(index)"
      :key="index"
    >
      {{ title }}
    </li>
  </ul>
</template>
<style scoped>
.done {
  text-decoration: line-through;
}
</style>
