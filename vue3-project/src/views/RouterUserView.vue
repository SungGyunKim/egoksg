<template>
  <div class="user">
    <h2>[ RouterUserView ]</h2>
    <p>
      RouterUserHomeView, RouterUserPostsView, RouterUserProfileView를 제외한 공통 정보를 표시합니다.<br />
      {{ $route.params.id }}
    </p>
    <router-view></router-view>
  </div>
</template>
<script></script>
