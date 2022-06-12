<template>
  <div class="user">
    <h2>[ RouterUserView ]</h2>
    <p>
      RouterUserHomeView, RouterUserPostsView, RouterUserProfileView를 제외한
      공통 정보를 표시합니다.<br />
      $route : {{ $route.params.id }}<br />
      useRoute() : {{ router.params.id }}<br />
      props.id : {{ id }}<br />
      props.newsletterPopup : {{ newsletterPopup }}<br />
      props.query : {{ query }}<br />
    </p>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  props: ["id", "newsletterPopup", "query"],
}
</script>
<script setup>
import { useRoute } from "vue-router"

const router = useRoute()
</script>
