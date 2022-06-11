<template>
  <h1>Redirect and Alias</h1>
  <nav>
    <router-link to="/RouterView03_redirect_url">
      RouterView03_redirect_url
    </router-link>
    <router-link to="/RouterView03_redirect_name">
      RouterView03_redirect_name
    </router-link>
    <router-link to="/search/searchText">
      /search/:searchText
    </router-link>
    <router-link to="/RouterView03_redirect_url_alias01">
      RouterView03_redirect_url_alias01
    </router-link>
    <router-link to="/RouterView03_redirect_url_alias02">
      RouterView03_redirect_url_alias02
    </router-link>
  </nav>
</template>

<style scoped>
nav {
  margin-top: 0;
  width: 200px;
  height: 400px;
  background-color: bisque;
}

nav > a {
  height: 50px;
  line-height: 50px;
  border: 1px solid var(--color-border);
}
</style>