<template>
  <div class="container">
    <header>
      <slot name="header" :headerSlotText="headerSlotText"></slot>
    </header>
    <main>
      <!-- slot의 name을 지정하지 않으면 "default"가 들어 간다. -->
      <slot :defaultSlotText="defaultSlotText"></slot>
    </main>
    <footer>
      <slot name="footer" :footerSlotText="footerSlotText"></slot>
    </footer>
  </div>
</template>

<script setup>
const headerSlotText = "headerSlotText";
const defaultSlotText = "defaultSlotText";
const footerSlotText = "footerSlotText";
</script>

<style></style>
