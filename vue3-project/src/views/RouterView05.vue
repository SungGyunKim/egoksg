<template>
  <div>
    <h1>Nested Views {{ id }}</h1>
    <div class="link">
      <router-link to="/RouterView05"> /RouterView05 </router-link>
      <router-link to="/RouterView05/users/eduardo?q=queryString">
        /RouterView05/users/eduardo?q=queryString
      </router-link>
      <router-link to="/RouterView05/users/eduardo/profile">
        /RouterView05/users/eduardo/profile/10
      </router-link>
      <router-link to="/RouterView05/users/eduardo/posts">
        /RouterView05/users/eduardo/posts/10
      </router-link>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id"],
}
</script>

<style scoped>
.link {
  display: flex;
  flex-direction: column;
}
</style>
