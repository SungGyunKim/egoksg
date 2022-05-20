<template>
  <div>
    <input type="text" v-model="email" placeholder="email" />
    <input type="password" v-model="password" placeholder="password" />
    <button type="submit" @click="submitForm">로그인</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

// props
// props
const props = defineProps({
  email: String,
  password: String,
});

// emit
const emit = defineEmits({
  // No validation
  click: null,
  // Validate submit event
  submit: ({ email, password }) => {
    if (email && password) {
      return true;
    } else {
      console.warn("Invalid submit event payload!");
      return false;
    }
  },
});

// setup code
const email = ref(props.email);
const password = ref(props.password);

const submitForm = () => {
  emit("submit", {
    email: email.value,
    password: password.value,
  });
};
</script>

<style></style>
