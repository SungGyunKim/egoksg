<template>
  <div>
    <div>
      <h3>[ useMouse ]</h3>
      <div>Mouse position is at: {{ x }}, {{ y }}</div>
    </div>
    <div>
      <h3>[ useFetch ]</h3>
      <div>
        Load post id:
        <button v-for="i in 5" @click="id = i" :key="i">{{ i }}</button>

        <div v-if="error">
          <p>Oops! Error encountered: {{ error.message }}</p>
          <button @click="retry">Retry</button>
        </div>
        <div v-else-if="data">
          Data loaded:
          <pre>{{ data }}</pre>
        </div>
        <div v-else>Loading...</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMouse } from "@/composables/mouse";
import { useFetch } from "@/composables/useFetch";
import { computed, ref } from "vue";

const { x, y } = useMouse();

const baseUrl = "https://jsonplaceholder.typicode.com/todos/";
const id = ref("1");
const url = computed(() => baseUrl + id.value);

const { data, error, retry } = useFetch(url);
</script>

<style></style>
