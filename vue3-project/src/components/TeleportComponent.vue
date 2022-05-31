<template>
  <div>
    <button id="show-modal" @click="showModal = true">Show Modal</button>
    <button id="show-custom-modal" @click="onModalOpen">
      Show Custom Modal
    </button>

    <Teleport to="body">
      <!-- use the modal component, pass in the prop -->
      <ModalExampleComponent :show="showModal" @close="showModal = false">
        <template #header>
          <h3>custom header</h3>
        </template>
      </ModalExampleComponent>
    </Teleport>
  </div>
</template>

<script setup>
import ModalExampleComponent from "./ModalExampleComponent.vue";
import { defineAsyncComponent, ref } from "vue";

const showModal = ref(false);

function onModalOpen() {
  var modalParam = {
    width: 400,
    height: 600,
  };

  const AsyncComp = defineAsyncComponent({
    // The factory function
    loader: () => import("./ModalCustomComponent.vue"),
    // A component to use while the async component is loading
    loadingComponent: null,
    // A component to use if the load fails
    errorComponent: null,
    // Delay before showing the loading component. Default: 200ms.
    delay: 200,
    // The error component will be displayed if a timeout is
    // provided and exceeded. Default: Infinity.
    timeout: 3000,
    // Defining if component is suspensible. Default: true.
    suspensible: false,
    onError(error, retry, fail, attempts) {
      if (error.message.match(/fetch/) && attempts <= 3) {
        // retry on fetch errors, 3 max attempts
        retry();
      } else {
        // Note that retry/fail are like resolve/reject of a promise:
        // one of them must be called for the error handling to continue.
        fail();
      }
    },
  });

  console.log(AsyncComp);
}
</script>
