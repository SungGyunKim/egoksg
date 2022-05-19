<template>
  <div>
    <input type="text" v-model="d_email" placeholder="email"/>
    <input type="password" v-model="d_password" placeholder="password"/>
    <button type="submit" @click="submitForm">로그인</button>
  </div>
</template>

<script>
import { ref, defineProps, defineEmits, defineComponent } from 'vue'

defineProps({
    email: {
        type: String
    },
    password: {
        type: String
    }
});

defineEmits({
    // No validation
    click: null,
    // Validate submit event
    submit: ({ email, password }) => {
        if (email && password) {
            return true
        } else {
            console.warn('Invalid submit event payload!')
            return false
        }
    }
});

export default defineComponent({
    setup(props, { attrs, slots, emit, expose }) {
        debugger;
        const d_email = ref(attrs.email);
        const d_password = ref(attrs.password);

        const submitForm = () => {
            emit('submit', {
                email: d_email.value,
                password: d_password.value
            })
        }

        // template에서 사용할 수 있도록 방출
        return {
            d_email,
            d_password,
            submitForm
        }
    }
})
</script>

<style>

</style>