<template>
  <div>
    <FancyButton></FancyButton>
    <FancyButton>{{ message }}</FancyButton>
    <h3>[ v-slot Named Slots ]</h3>
    <BaseLayout>
      <template v-slot:header>
        <h1>Here might be a page title</h1>
      </template>
    </BaseLayout>
    <h3>[ v-slot == # ]</h3>
    <BaseLayout>
      <template #header>
        <h1>Here might be a page title</h1>
      </template>

      <template #default>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>

      <template #footer>
        <p>Here's some contact info</p>
      </template>
    </BaseLayout>
    <h3>[ 빈 공간은 default slot으로 이동 ]</h3>
    <BaseLayout>
      <template #header>
        <h1>Here might be a page title</h1>
      </template>

      <p>A paragraph for the main content.</p>
      <p>And another one.</p>

      <template #footer>
        <p>Here's some contact info</p>
      </template>
    </BaseLayout>
    <h3>[ Dynamic Slot Names ]</h3>
    <BaseLayout>
      <template v-slot:[dynamicSlotName1]>
        <h1>Here might be a page title</h1>
      </template>

      <template #[dynamicSlotName2]>
        <p>Here's some contact info</p>
      </template>
    </BaseLayout>
    <!-- 
      컴포넌트 내부에서는 비지니스 로직을 처리 후 레이아웃을 만들고 slot에 데이터를 전달한다.
      컴포넌트 외부에서 slot에 들어갈 내용을 정의하고 전달 받은 데이터를 표시한다.
    -->
    <!-- default slot와 연결된다. -->
    <h3>[ Component v-slot prop ]</h3>
    <BaseLayout v-slot="slotProps">
      {{ slotProps.defaultSlotText }}
    </BaseLayout>
    <!-- 여러 slot이 있다면 각각 연결된다. -->
    <h3>[ Component > template v-slot prop ]</h3>
    <BaseLayout>
      <template #header="headerProps">
        {{ headerProps }}
      </template>
      <template #default="defaultProps">
        {{ defaultProps }}
      </template>
      <template #footer="footerProps">
        {{ footerProps }}
      </template>
    </BaseLayout>
    <h3>[ Component > template v-slot prop ]</h3>
    <FancyList :api-url="url" :per-page="10">
      <template #item="{ body, username, likes }">
        <div class="item">
          <p>{{ body }}</p>
          <p>by {{ username }} | {{ likes }} likes</p>
        </div>
      </template>
    </FancyList>
  </div>
</template>

<script setup>
import FancyButton from "@/components/FancyButton.vue";
import BaseLayout from "@/components/BaseLayout.vue";
import FancyList from "@/components/FancyList.vue";
import { ref } from "@vue/reactivity";

const message = ref("Click me!");
const dynamicSlotName1 = ref("header");
const dynamicSlotName2 = ref("footer");
const url = ref("http://~~~~~");
</script>

<style></style>
