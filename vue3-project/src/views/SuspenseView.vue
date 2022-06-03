<script setup>
import SuspenseComponent from "@/components/SuspenseComponent.vue";
</script>

<template>
  <main>
    <!--
      Suspense에 포함되어 있는 모든 컴포넌트의 후손 컴포넌트까지 대상으로 한다.
        첫 번째는 async setup()이나 <script setup>에서 await를 사용한 경우
        두 번째는 Async Components의 옵션 중 suspensible가 false인 경우
      
      위에 해당하는 컴포넌트들의 비동기 작업이 모두 끝났을 때까지 <template #fallback>를 표시합니다.
      비동기 작업이 모두 끝나면 <template #default>를 표시합니다.
      
      ※ Async Components인 경우 loadingComponent가 표시될 때
    -->
    <Suspense timeout="10">
      <!-- <template #default> 생략 가능 -->
      <template #default>
        <SuspenseComponent />
      </template>

      <template #fallback>
        <span>Loading...</span>
      </template>
    </Suspense>
  </main>
</template>
