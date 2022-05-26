<script setup>
import LifecycleComponent from "@/components/LifecycleComponent.vue";
import PropsComponent from "@/components/PropsComponent.vue";
import EventComponent1 from "@/components/EventComponent1.vue";
import EventComponent2 from "@/components/EventComponent2.vue";
import EventComponent3 from "@/components/EventComponent3.vue";
</script>

<template>
  <div>
    <h1>LifecycleComponent</h1>
    <LifecycleComponent></LifecycleComponent>

    <h1>PropsComponent</h1>
    <PropsComponent v-bind:propC="'1'"></PropsComponent>
    <PropsComponent
      v-bind="{
        propC: '2',
        propD: 200,
        propE: { message: 'world' },
        propH: true,
      }"
    ></PropsComponent>
    <PropsComponent
      v-bind:propC="'3'"
      v-bind:propD="300"
      v-bind:propE="{ message: 'vue' }"
      propH
    ></PropsComponent>
    <PropsComponent
      v-bind:propC="'4'"
      v-bind:propF="'critical'"
      v-model:propI.capitalize.toLowerCase="email"
      title="'non-prop'"
    ></PropsComponent>

    <h1>EventComponent</h1>
    <h3>EventComponent - bind</h3>
    <EventComponent1 v-bind="$data" @submit="onSubmit"></EventComponent1>
    <h3>EventComponent - model</h3>
    <EventComponent2
      v-model="$data"
      v-model:email="email"
      v-model:password="password"
      @submit="onSubmit"
    ></EventComponent2>
    {{ `email: ${email}, password: ${password}` }}
    <h3>EventComponent - model modifiers</h3>
    <EventComponent3
      v-model.capitalize="email"
      v-model:email.toLowerCase="email"
      v-model:password="password"
    ></EventComponent3>

    <h1>Fallthrough Attributes</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "egoksg@naver.com",
      password: "111111",
    };
  },
  methods: {
    onSubmit({ email, password }) {
      console.log(`email: ${email}, password: ${password}`);
    },
  },
};
</script>

<style></style>
