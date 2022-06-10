<template>
  <div>
    <span>{{ $data.msg }}</span>
    <button @click="clicked">클릭</button>
  </div>
</template>

<script>
import ExtendsAndExtendsComponent01 from "@/components/ExtendsAndExtendsComponent01.vue";
import ExtendsAndExtendsComponent02 from "@/components/ExtendsAndExtendsComponent02.vue";

export default {
  mixins: [ExtendsAndExtendsComponent01, ExtendsAndExtendsComponent02],
  data() {
    return {
      num: 1,
      msg: "Mixins data",
      comp04: "comp04",
    };
  },
  created: function () {
    console.log("Mixins created");
  },
  mounted() {
    console.log("Mixins mounted - data : ", this.$data);
  },
  /*
  methods: {
    clicked() {
      alert("Mixins methods");
    },
  },
  */
};
</script>

<style>
/* Mixins */
span {
  color: limegreen;
}
</style>

<style scoped>
/* Mixins scoped */
span {
  font-style: italic;
}
</style>
