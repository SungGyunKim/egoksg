<template>
  <h1>Nested Views</h1>
  <div class="link">
    <router-link to="/RouterView02"> /RouterView02 </router-link>
    <router-link to="/RouterView02/users/eduardo">
      /RouterView02/users/eduardo
    </router-link>
    <router-link to="/RouterView02/users/eduardo/profile">
      /RouterView02/users/eduardo/profile/10
    </router-link>
    <router-link to="/RouterView02/users/eduardo/posts">
      /RouterView02/users/eduardo/posts/10
    </router-link>
    <router-view></router-view>
  </div>
</template>
<script></script>

<style scoped>
.link {
  display: flex;
  flex-direction: column;
}
</style>
