import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import NotFoundView from "../views/NotFoundView.vue"

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
    {
      path: "/AsyncComponentsView",
      name: "AsyncComponentsView",
      component: () => import("../views/AsyncComponentsView.vue"),
    },
    {
      path: "/TransitionView",
      name: "TransitionView",
      component: () => import("../views/TransitionView.vue"),
    },
    {
      path: "/TransitionGroupView",
      name: "TransitionGroupView",
      component: () => import("../views/TransitionGroupView.vue"),
    },
    {
      path: "/TeleportView",
      name: "TeleportView",
      component: () => import("../views/TeleportView.vue"),
    },
    {
      path: "/SuspenseView",
      name: "SuspenseView",
      component: () => import("../views/SuspenseView.vue"),
    },
    {
      path: "/SuspenseView",
      name: "SuspenseView",
      component: () => import("../views/SuspenseView.vue"),
    },
    {
      path: "/ImmutableDataView",
      name: "ImmutableDataView",
      component: () => import("../views/ImmutableDataView.vue"),
    },
    {
      path: "/XStateView",
      name: "XStateView",
      component: () => import("../views/XStateView.vue"),
    },
    {
      path: "/NamespacedComponentsView",
      name: "NamespacedComponentsView",
      component: () => import("../views/NamespacedComponentsView.vue"),
    },
    {
      path: "/CSSFeaturesView",
      name: "CSSFeaturesView",
      component: () => import("../views/CSSFeaturesView.vue"),
    },
    {
      path: "/MixinsAndExtendsView",
      name: "MixinsAndExtendsView",
      component: () => import("../views/MixinsAndExtendsView.vue"),
    },
    /*
      https://router.vuejs.org/guide/essentials/dynamic-matching.html#catch-all-404-not-found-route
     */
    // username, posts가 반드시 존재하는 경우, 접근이 가능하다.
    {
      path: "/RouterView01/users/:username/posts/:postId",
      name: "RouterView01_full_params",
      component: () => import("../views/RouterView01.vue"),
    },
    // username이 반드시 존재하고, posts는 존재하지 않는 경우에도 접근이 가능하다.
    {
      path: "/RouterView01/users/:username/posts/:postId?",
      name: "RouterView01_optional_params",
      component: () => import("../views/RouterView01.vue"),
    },
    // 파라미터가 없는 경우에도 접근이 가능하다.
    {
      path: "/RouterView01",
      name: "RouterView01_no_params",
      component: () => import("../views/RouterView01.vue"),
    },
    {
      path: "/RouterView02",
      component: () => import("../views/RouterView02.vue"),
      children: [
        {
          /*
            중요!!!! 와... children에 들어가는 라우터 정보는 맨 앞에 /를 붙이지 않는다...ㅠㅠ
            Note that nested paths that start with / will be treated as a root path.
            This allows you to leverage the component nesting without having to use a nested URL.
          */
          // RouterUserView will be rendered inside RouterView02's <router-view>
          // when /RouterView02/user/:id is matched
          path: "users/:id",
          component: () => import("../views/RouterUserView.vue"),
          children: [
            {
              // RouterUserHomeView will be rendered inside RouterUserView's <router-view>
              // when /RouterView02/user/:id is matched
              path: "",
              component: () => import("../views/RouterUserHomeView.vue"),
            },
            {
              // RouterUserPostsView will be rendered inside RouterUserView's <router-view>
              // when /RouterView02/user/:id/profile is matched
              path: "profile",
              component: () => import("../views/RouterUserProfileView.vue"),
            },
            {
              // RouterUserProfileView will be rendered inside RouterUserView's <router-view>
              // when /RouterView02/user/:id/posts is matched
              path: "posts",
              component: () => import("../views/RouterUserPostsView.vue"),
            },
          ],
        },
      ],
    },
    {
      path: "/RouterView03",
      name: "RouterView03",
      component: () => import("../views/RouterView03.vue"),
      children: [
        {
          path: "",
          component: () => import("../views/RouterUserSettingsView.vue"),
        },
        {
          path: "settings",
          component: () => import("../views/RouterUserSettingsView.vue"),
          children: [
            {
              path: "emails",
              component: () =>
                import("../views/RouterUserEmailsSubscriptionsView.vue"),
            },
            {
              path: "profile",
              // component가 아닌 components임에 주의해야 한다.
              // components의 key들이 <router-view name="" />에 매핑된다.
              components: {
                default: () => import("../views/RouterUserProfileView.vue"),
                helper: () =>
                  import("../views/RouterUserProfilePreviewView.vue"),
              },
            },
          ],
        },
      ],
    },
    /*
      [ Redirect and Alias ]
        [ Redirect ]
          - 일반적인 redirect 설정에서 component는 설정하지 않는다.
          - nested routes를 redirect할 경에는 component를 설정해야 한다.
          - redirect url은  Navigation Guards가 적용되지 않는다.
        [ Alias ]
          - URL은 다양해도 화면이 같다면 SEO 하나로 취급한다.
        
        ref) https://router.vuejs.org/guide/essentials/redirect-and-alias.html
     */
    {
      path: "/RouterView04",
      name: "RouterView04",
      component: () => import("../views/RouterView04.vue"),
    },
    {
      path: "/RouterView03_redirect_url",
      redirect: "/RouterView03",
      alias: [
        "/RouterView03_redirect_url_alias01",
        "/RouterView03_redirect_url_alias02",
      ],
    },
    {
      path: "/RouterView03_redirect_name",
      redirect: { name: "RouterView03" },
    },
    {
      // /search/screens -> /search?q=screens
      path: "/search/:searchText",
      redirect: (to) => {
        // the function receives the target route as the argument
        // we return a redirect path/location here.
        return {
          path: "/RouterView03",
          query: { q: to.params.searchText },
        }
      },
    },
    /*
      https://router.vuejs.org/guide/essentials/passing-props.html#passing-props-to-route-components

      * Passing Props to Route Components
        > template에서 $route
          - 컴포넌트의 <template>에서 $route.params.id로 사용할 수 있다.
          - 주의) $route에 의존하기 때문에 강한 $route와 강한 결합하게 된다.
                  그래서 $route와 느슨한 결합을 위해 props을 설정하여 컴포넌트에 전달하도록 한다.
        > props 설정
          > Single View
            - route info에 component로 단일 컴포넌트가 설정되어 있을 경우, props를 true로 설정한다.
          > Named views
            - route info에 components 여러 컴포넌트가 설정되어 있을 경우, named view에 props를 true로 설정한다.
          > Object mode
            - Object를 사용하여 정적인 데이터를 props로 전달할 수 있다.
          > Function mode
            - function을 설정하면 첫 번째 인자로 route 객체가 넘어 온다.
              이를통해 params, query, hash 등 다양한 정보를 가공하여 컴포넌트에 전달할 수 있다.
    */
    {
      path: "/RouterView05",
      component: () => import("../views/RouterView05.vue"),
      children: [
        {
          path: "users/:id",
          /*
          // Passing Props to Route Components > props 설정 > Single View
          component: () => import("../views/RouterUserView.vue"),
          props: true,
          */
          /*
          // Passing Props to Route Components > props 설정 > Named views
          components: {
            default: () => import("../views/RouterUserView.vue"),
            user: () => import("../views/RouterUserView.vue"),
          },
          props: { default: true, user: false },
          */
          /*
          // Passing Props to Route Components > props 설정 > Object mode
          component: () => import("../views/RouterUserView.vue"),
          props: { newsletterPopup: true },
          */
          // Passing Props to Route Components > props 설정 > Function mode
          component: () => import("../views/RouterUserView.vue"),
          props: (route) => ({ query: route.query.q }),
          children: [
            {
              path: "",
              component: () => import("../views/RouterUserHomeView.vue"),
            },
            {
              path: "profile",
              component: () => import("../views/RouterUserProfileView.vue"),
            },
            {
              path: "posts",
              component: () => import("../views/RouterUserPostsView.vue"),
            },
          ],
        },
      ],
    },
    // 잘못된 경로 진한 경우
    // ref) https://router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes
    { path: "/:pathMatch(.*)*", name: "not-found", component: NotFoundView },
  ],
  strict: true, // URL 끝에 /를 넣을 수 없다.
  sensitive: true, // 대소문자을 구별한다.
})

router.resolve({
  name: "not-found",
  params: { pathMatch: ["not", "found"] },
}).href // '/not/found'

export default router
