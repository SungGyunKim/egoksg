<template>
  <div>
    <input type="text" v-model="email" placeholder="email" />
    <input type="password" v-model="password" placeholder="password" />
    <button type="submit" @click="submitForm">로그인</button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// props
const props = defineProps({
  email: String,
  password: String,
  modelValue: String,
  modelModifiers: { default: () => ({}) },
  emailModifiers: { default: () => ({}) },
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
  "update:email": null,
  "update:password": null,
});

// setup code
const email = computed({
  get() {
    return props.email;
  },
  set(value) {
    let _value = value;

    if (props.emailModifiers.toLowerCase) {
      _value = _value.toLowerCase();
    }

    emit("update:email", _value);
  },
});
const password = computed({
  get() {
    return props.password;
  },
  set(value) {
    emit("update:password", value);
  },
});
const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    let _value = value;

    if (props.modelModifiers.capitalize) {
      _value = _value.charAt(0).toUpperCase() + value.slice(1);
    }
    emit("update:modelValue", _value);
  },
});

const submitForm = () => {
  emit("submit", {
    email: email.value,
    password: password.value,
  });
};

console.log(props.modelModifiers); // { capitalize: true }
console.log(props.emailModifiers); // { toLowerCase: true }
</script>

<style></style>
