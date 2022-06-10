<!--
<template>
  <div>
    <span>{{ $data.msg }}</span>
    <button @click="clicked">클릭</button>
  </div>
</template>
-->

<script>
import ExtendsAndExtendsComponent01 from "@/components/ExtendsAndExtendsComponent01.vue";

export default {
  extends: ExtendsAndExtendsComponent01,
  data() {
    return {
      num: 1,
      msg: "Extends data",
      comp03: "comp03",
    };
  },
  created: function () {
    console.log("Extends created");
  },
  mounted() {
    console.log("Extends mounted - data : ", this.$data);
  },
  /*
  methods: {
    clicked() {
      alert("Extends methods");
    },
  },
  */
};
</script>

<style>
/* Extends */
span {
  color: green;
}
</style>

<style scoped>
/* Extends scoped */
span {
  text-decoration: line-through;
}
</style>
