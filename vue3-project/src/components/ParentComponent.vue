<script setup>
import PropsComponent from "@/components/PropsComponent.vue";
import EventComponent from "@/components/EventComponent.vue";
</script>

<template>
  <div>
    <h1>PropsComponent</h1>
    <PropsComponent v-bind:propC="1"></PropsComponent>
    <PropsComponent v-bind='{ "propC":2, "propD": 200, "propE": { "message": "world" }, "propH": true }'></PropsComponent>
    <PropsComponent v-bind:propC="3" v-bind:propD="300" v-bind:propE='{ "message": "vue" }' propH></PropsComponent>
    <PropsComponent v-bind:propC="4" v-bind:propF="warning"></PropsComponent>
    <h1>EventComponent</h1>
    <EventComponent v-bind="$data" @submit="onSubmit" ></EventComponent>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "egoksg@naver.com",
      password: "111111",
    }
  },
  methods: {
    onSubmit({ email, password}) {
      console.log(`email: ${email}, password: ${password}`)
    }
  }
}
</script>

<style>

</style>