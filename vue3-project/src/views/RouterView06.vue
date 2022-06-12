<template>
  <h1>Navigation Guards</h1>
  <div class="link">
    <router-link to="/RouterView01?test=true"> return false </router-link>
    <router-link to="/RouterView02?test=true">
      return { name: 'MixinsAndExtendsView' }
    </router-link>
    <router-link to="/RouterView03?test=true">
      /MixinsAndExtendsView
    </router-link>
    <router-link to="/RouterView04?test=true">
      new Error("Error!!!")
    </router-link>
    <router-link to="/PerRouteGuard01?test=true">
      /PerRouteGuard01
    </router-link>
    <router-link to="/PerRouteGuard02?test=true">
      /PerRouteGuard02
    </router-link>
    <router-link to="/RouterView06?test=true&queryString=1">
      In-Component Guards queryString=1
    </router-link>
    <router-link to="/RouterView06?test=true&queryString=2">
      In-Component Guards queryString=2
    </router-link>
  </div>
</template>
<script>
/*
  The Full Navigation Resolution Flow#
  Navigation triggered.
  Call beforeRouteLeave guards in deactivated components.
  Call global beforeEach guards.
  Call beforeRouteUpdate guards in reused components.
  Call beforeEnter in route configs.
  Resolve async route components.
  Call beforeRouteEnter in activated components.
  Call global beforeResolve guards.
  Navigation is confirmed.
  Call global afterEach hooks.
  DOM updates triggered.
  Call callbacks passed to next in beforeRouteEnter guards with instantiated instances.

  ref) https://router.vuejs.org/guide/advanced/navigation-guards.html#the-full-navigation-resolution-flow
*/
export default {
  beforeRouteEnter(to, from) {
    // called before the route that renders this component is confirmed.
    // does NOT have access to `this` component instance,
    // because it has not been created yet when this guard is called!
    console.log(`component beforeRouteEnter : ${from.path} -> ${to.path}`)
    // 호출 순서 : router.beforeEach > beforeEnter > component의 beforeRouteEnter > router.beforeResolve
    // this 접근 불가능
  },
  beforeRouteUpdate(to, from) {
    // called when the route that renders this component has changed, but this component is reused in the new route.
    // For example, given a route with params `/users/:id`, when we navigate between `/users/1` and `/users/2`,
    // the same `UserDetails` component instance will be reused, and this hook will be called when that happens.
    // Because the component is mounted while this happens, the navigation guard has access to `this` component instance.
    console.log(`component beforeRouteUpdate : ${from.path} -> ${to.path}`)
    // 같은 url에 query string만 달라지면 beforeRouteUpdate가 호출된다.
    // 같은 url에 query string만 달라지면 컴포넌트를 사용하기 때문에 컴포넌트의 lifecycle hook이 호출되지 않는다.
    // this 접근 가능
  },
  beforeRouteLeave(to, from) {
    // called when the route that renders this component is about to be navigated away from.
    // As with `beforeRouteUpdate`, it has access to `this` component instance.
    console.log(`component beforeRouteLeave : ${from.path} -> ${to.path}`)
    // 다른 라우터로 이동할 때 호출된다.
    // this 접근 가능
    const answer = window.confirm(
      "Do you really want to leave? you have unsaved changes!"
    )
    if (!answer) return false
  },
}
</script>

<style scoped>
.link {
  display: flex;
  flex-direction: column;
}
</style>
