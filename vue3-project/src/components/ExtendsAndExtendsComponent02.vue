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
      msg: "Base02 data",
      comp02: "comp02",
    };
  },
  created: function () {
    console.log("Base02 created");
  },
  mounted() {
    console.log("Base02 mounted - data : ", this.$data);
  },
  methods: {
    clicked() {
      alert("Base02 methods");
    },
  },
};
</script>

<style>
/* Base02 */
span {
  color: red;
}
</style>

<style scoped>
/* Base02 scoped */
span {
  font-size: 20px;
}
</style>
