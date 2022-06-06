<script setup>
import { reactive } from "vue";
import { watch } from "vue";

const items = reactive([
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
  items[index].done = !items[index].done;
}

// mutable
watch(
  () => items,
  (newValue, oldValue) => {
    console.log(
      `newValue : ${JSON.stringify(newValue)},
      \r\noldValue : ${JSON.stringify(oldValue)}`
    );
    console.log(`[mutable] newValue === oldValue : ${newValue === oldValue}`);
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
