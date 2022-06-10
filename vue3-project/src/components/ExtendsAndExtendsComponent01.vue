<template>
  <div>
    <span>{{ $data.msg }}</span>
    <button @click="clicked">클릭</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
      msg: "Base01 data",
      comp01: "comp01",
    };
  },
  created: function () {
    console.log("Base01 created");
  },
  mounted() {
    console.log("Base01 mounted - data : ", this.$data);
  },
  methods: {
    clicked() {
      alert("Base01 methods");
    },
  },
};
</script>

<style>
/* Base01 */
span {
  color: red;
}
</style>

<style scoped>
/* Base01 scoped */
span {
  font-size: 15px;
}
</style>
