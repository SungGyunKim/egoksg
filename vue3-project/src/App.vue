<script setup>
import { RouterLink, RouterView } from "vue-router"
import HelloWorld from "@/components/HelloWorld.vue"
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/BuiltInDirectivesView"
          >BuiltInDirectivesView</RouterLink
        >
        <RouterLink to="/FormInputBindingView">FormInputBindingView</RouterLink>
        <RouterLink to="/ComponentView">ComponentView</RouterLink>
        <RouterLink to="/ReusabilityView">ReusabilityView</RouterLink>
        <RouterLink to="/WatchersView">WatchersView</RouterLink>
        <RouterLink to="/TemplateRefsView">TemplateRefsView</RouterLink>
        <RouterLink to="/SlotsView">SlotsView</RouterLink>
        <RouterLink to="/ProvideinjectView">ProvideinjectView</RouterLink>
        <RouterLink to="/DynamicComponentsView">
          DynamicComponentsView
        </RouterLink>
        <RouterLink to="/FallthroughAttributesView">
          FallthroughAttributesView
        </RouterLink>
        <RouterLink to="/AsyncComponentsView">AsyncComponentsView</RouterLink>
        <RouterLink to="/TransitionView">TransitionView</RouterLink>
        <RouterLink to="/TransitionGroupView">TransitionGroupView</RouterLink>
        <RouterLink to="/TeleportView">TeleportView</RouterLink>
        <RouterLink to="/SuspenseView">SuspenseView</RouterLink>
        <RouterLink to="/ImmutableDataView">ImmutableDataView</RouterLink>
        <RouterLink to="/XStateView">XStateView</RouterLink>
        <RouterLink to="/NamespacedComponentsView">
          NamespacedComponentsView
        </RouterLink>
        <RouterLink to="/CSSFeaturesView">CSSFeaturesView</RouterLink>
        <RouterLink to="/MixinsAndExtendsView">MixinsAndExtendsView</RouterLink>
        <RouterLink to="/RouterView01">RouterView01(Basic)</RouterLink>
        <RouterLink to="/RouterView02">RouterView02(Nested Views)</RouterLink>
        <RouterLink to="/RouterView03">
          RouterView03(Nested Named Views)
        </RouterLink>
        <RouterLink to="/RouterView04">
          RouterView04(Redirect and Alias)
        </RouterLink>
        <RouterLink to="/RouterView05">RouterView05(Pass Props)</RouterLink>
        <RouterLink to="/RouterView06">
          RouterView06(Navigation Guards)
        </RouterLink>
        <RouterLink to="/RouteMetaFields"> Route Meta Fields </RouterLink>
        <RouterLink to="/RouteDataFetching"> Route Data Fetching </RouterLink>
      </nav>
    </div>
  </header>

  <!--
    v-slot API를 활용해서 Component와 route를 받을 수 있다.


    [ 문제 해결]
      https://stackoverflow.com/questions/65553121/vue-3-transition-renders-non-element-root-node-that-cannot-be-animated
      https://github.com/vuejs/core/issues/2027
  -->
  <div class="view-container">
    <Suspense>
      <RouterView v-slot="{ Component, route }">
        <transition :name="route.meta.transition || 'fade'" mode="out-in">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </RouterView>
    </Suspense>
  </div>
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

.view-container {
  height: 100vh;
  overflow-y: auto;
  padding: 50px 20px;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  max-height: 500px;
  overflow-y: scroll;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s;
}

.slide-left-enter-from,
.slide-right-leave-to {
  opacity: 0;
  transform: translate(30px, 0);
}

.slide-left-leave-to,
.slide-right-enter-from {
  opacity: 0;
  transform: translate(-30px, 0);
}
</style>
