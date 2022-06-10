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
import ExtendsAndExtendsComponent02 from "@/components/ExtendsAndExtendsComponent02.vue";

export default {
  extends: ExtendsAndExtendsComponent01,
  mixins: [ExtendsAndExtendsComponent02],
  data() {
    return {
      num: 1,
      msg: "Extends And Mixins data",
      comp05: "comp05",
    };
  },
  created: function () {
    console.log("Extends And Mixins created");
  },
  mounted() {
    console.log("Extends And Mixins mounted - data : ", this.$data);
  },
  methods: {
    clicked() {
      alert("Extends And Mixins methods");
    },
  },
};
</script>

<style>
/* Extends And Mixins */
span {
  color: purple;
}
</style>

<style scoped>
/* Extends And Mixins scoped */
span {
  font-weight: bold;
}
</style>
