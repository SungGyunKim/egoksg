import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/FormInputBindingView",
      name: "FormInputBindingView",
      component: () => import("../views/FormInputBindingView.vue"),
    },
    {
      path: "/BuiltInDirectivesView",
      name: "BuiltInDirectivesView",
      component: () => import("../views/BuiltInDirectivesView.vue"),
    },
    {
      path: "/ComponentView",
      name: "ComponentView",
      component: () => import("../views/ComponentView.vue"),
    },
    {
      path: "/ReusabilityView",
      name: "ReusabilityView",
      component: () => import("../views/ReusabilityView.vue"),
    },
    {
      path: "/WatchersView",
      name: "WatchersView",
      component: () => import("../views/WatchersView.vue"),
    },
    {
      path: "/TemplateRefsView",
      name: "TemplateRefsView",
      component: () => import("../views/TemplateRefsView.vue"),
    },
    {
      path: "/SlotsView",
      name: "SlotsView",
      component: () => import("../views/SlotsView.vue"),
    },
    {
      path: "/ProvideinjectView",
      name: "ProvideinjectView",
      component: () => import("../views/ProvideinjectView.vue"),
    },
    {
      path: "/DynamicComponentsView",
      name: "DynamicComponentsView",
      component: () => import("../views/DynamicComponentsView.vue"),
    },
    {
      path: "/FallthroughAttributesView",
      name: "FallthroughAttributesView",
      component: () => import("../views/FallthroughAttributesView.vue"),
    },
    // 잘못된 경로 진한 경우
    // ref) https://router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes
    { path: "/:pathMatch(.*)*", name: "not-found", component: NotFoundView },
  ],
});

router.resolve({
  name: "not-found",
  params: { pathMatch: ["not", "found"] },
}).href; // '/not/found'

export default router;
