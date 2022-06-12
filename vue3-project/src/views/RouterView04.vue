<template>
  <div>
    <h1>Redirect and Alias</h1>
    <div class="link">
      <router-link to="/RouterView03_redirect_url">
        RouterView03_redirect_url
      </router-link>
      <router-link to="/RouterView03_redirect_name">
        RouterView03_redirect_name
      </router-link>
      <router-link to="/search/searchText"> /search/:searchText </router-link>
      <router-link to="/RouterView03_redirect_url_alias01">
        RouterView03_redirect_url_alias01
      </router-link>
      <router-link to="/RouterView03_redirect_url_alias02">
        RouterView03_redirect_url_alias02
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.link {
  display: flex;
  flex-direction: column;
}
</style>
