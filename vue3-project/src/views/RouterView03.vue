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
  <h1>Nested Named Views</h1>
  <router-view />
</template>
