<script>
/*
  https://router.vuejs.org/guide/essentials/named-views.html#nested-named-views

  /settings/emails                                       /settings/profile
  +-----------------------------------+                  +------------------------------+
  | UserSettings                      |                  | UserSettings                 |
  | +-----+-------------------------+ |                  | +-----+--------------------+ |
  | | Nav | UserEmailsSubscriptions | |  +------------>  | | Nav | UserProfile        | |
  | |     +-------------------------+ |                  | |     +--------------------+ |
  | |     |                         | |                  | |     | UserProfilePreview | |
  | +-----+-------------------------+ |                  | +-----+--------------------+ |
  +-----------------------------------+                  +------------------------------+
*/
</script>
<template>
  <div>
    <h2>UserSettings</h2>
    <div class="container">
      <nav>
        <router-link to="/RouterView03/settings/emails">emails</router-link>
        <router-link to="/RouterView03/settings/profile">profile</router-link>
      </nav>
      <section>
        <router-view />
        <router-view name="helper" />
      </section>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
}
nav {
  margin-top: 0;
  width: 200px;
  height: 200px;
  background-color: bisque;
}

nav > a {
  height: 50px;
  line-height: 50px;
  border: 1px solid var(--color-border);
}
</style>
