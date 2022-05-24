<template>
  <div>
    <!-- 
      binding : {
        arg : "foo",
        modifiers : {
          bar: true
        }
        value: /* value of `baz` */,
        oldValue: /* value of `baz` from previous update */
      }
    -->
    <input type="text" v-focus:foo.bar="data" v-model="data" />
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const data = ref("baz");
</script>

<style></style>
