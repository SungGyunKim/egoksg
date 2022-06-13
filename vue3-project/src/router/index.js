import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import NotFoundView from "../views/NotFoundView.vue"

function removeQueryParams(to) {
  if (Object.keys(to.query).length)
    return { path: to.path, query: {}, hash: to.hash }
}

function removeHash(to) {
  if (to.hash) return { path: to.path, query: to.query, hash: "" }
}

const router = createRouter({
  /*
    createWebHashHistory는 브라우저 내에서 처리되기 때문에 URL의 변경을 서버에 보내지 않는 장점이 있다.
    그러나 이 방식은 SEO에 좋은 방식이 아니므로 createWebHashHistory를 사용하기를 권장한다.
    createWebHashHistory는 HTML5에서 지원하는 history mode이다.
    만약 SSR 방식을 사용한다면 createMemoryHistory를 사용한다.

    ref) https://router.vuejs.org/guide/essentials/history-mode.html
  */
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
    {
      path: "/RouterView06",
      name: "RouterView06",
      component: () => import("../views/RouterView06.vue"),
      beforeEnter: (to, from) => {
        console.log(`PerRouteGuard : ${from.path} -> ${to.path}`)
        return true
      },
    },
    /*
      beforeEnter를 사용하여 특정 route의 Guard를 할 수 있다.
      호출 순서는 다음과 같다.
      router.beforeEach > beforeEnter > component의 beforeRouteEnter > router.beforeResolve
     */
    {
      path: "/PerRouteGuard01",
      component: () => import("../views/RouterView05.vue"),
      beforeEnter: (to, from) => {
        console.log(`PerRouteGuard : ${from.path} -> ${to.path}`)
        return true
      },
      meta: { transition: "slide-right" },
    },
    {
      path: "/PerRouteGuard02",
      component: () => import("../views/RouterView05.vue"),
      beforeEnter: [removeQueryParams, removeHash],
      meta: { transition: "slide-left" },
    },
    {
      path: "/RouteMetaFields",
      component: () => import("../views/RouterView05.vue"),
      meta: { requiresAuth: true },
    },
    /*
      1) Fetching After Navigation
        - created() hook 에서 route의 파라미터를 watch하여 데이터를 조회
        - 화면이 그려진 이후이기 때문에 사용자는 데이터 조회의 시작과 끝을 알 수 있다.
      2) Fetching Before Navigation
        - beforeRouteEnter에서 데이터 조회이후 next()를 호출한다.
        - beforeRouteUpdate에서 파라미터 변경에 대비하기 위해 데이터를 조회한다.
      ref) https://router.vuejs.org/guide/advanced/data-fetching.html#fetching-after-navigation
      ref) https://router.vuejs.org/guide/advanced/data-fetching.html#fetching-before-navigation
    */
    {
      path: "/RouteDataFetching",
      component: () => import("../views/RouterView06.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/RouterNavigationFailuresView",
      component: () => import("../views/RouterNavigationFailuresView.vue"),
    },
    // 잘못된 경로 진한 경우
    // ref) https://router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes
    { path: "/:pathMatch(.*)*", name: "not-found", component: NotFoundView },
  ],
  strict: true, // URL 끝에 /를 넣을 수 없다.
  sensitive: true, // 대소문자을 구별한다.
  scrollBehavior(to, from, savedPosition) {
    console.log(`scrollBehavior - ${from.path} -> ${to.path}`)
    console.log(`scrollBehavior - savedPosition : `, savedPosition)
    /* 
    return { top: 0 }
     */
    /*
    return {
      el: ".view-container",
      top: 0,
    }
     */

    // 화면에서 벗어날 때 falsy value나 빈 object를 반환할 경우, 해당 화면의 위치(savedPosition)를 기억한다.
    // 브라우저의 뒤로가기 / 앞으로가기 버튼 클릭시 해당 화면의 savedPosition를 준다.
    /* 
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
    */
    /*
    // 동일한 페이지 이동으로 URL에 '#'이 생겼을때 해당 위치로 이동.
    if (to.hash) {
      return {
        el: to.hash,
      }
    }
    */
    // 화면 전환시에 transition이 설정되어 있어 애니메이션 효과가 끝나고 스크롤 위치를 조정할 경우 사용한다.
    // behavior를 'smooth'를 주어 부드운 이동을 할 수 있다.

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ el: ".view-container", left: 0, top: 0, behavior: "smooth" })
      }, 500)
    })
  },
})

// https://beomy.tistory.com/75
// ref) https://router.vuejs.org/guide/advanced/navigation-guards.html
router.beforeEach(async (to, from /*, next*/) => {
  console.log(`router.beforeEach : ${from.path} -> ${to.path}`)

  if (Object.prototype.hasOwnProperty.call(to.query, "test")) {
    /*
      false를 return하면 빈 화면이 나온다.
      그러므로 return false보다 접근 불가 화면으로 보내는 것이 맞을 거 같다.
    */
    if (to.path == "/RouterView01") return false
    /*
      Object를 return하면 route.push()와 동일하다.
      즉, history가 남기 때문에 뒤로 가기하면 이전 화면으로 간다.
    */
    if (to.path == "/RouterView02") return { name: "MixinsAndExtendsView" }
    /*
      String을 return하면 path(/로 시작), name에 맞는 화면으로 이동한다.
    */
    if (to.path == "/RouterView03") return "MixinsAndExtendsView"
    /*
      new Error()을 발생시키면 router.onError()에서 잡을 수 있다.
    */
    if (to.path == "/RouterView04") throw new Error("Error!!!")
    /*
      next()  : 다음 훅으로 이동합니다.
      next(false) : 현재 네비게이션을 종료합니다.
      next('/') 또는 next({ path: '/' }) : 인자로 전달된 경로로 이동합니다.
      next(error) : (2.4.0 이후) next 함수에 전달된 값이 Error 인스턴스이면, 네비게이션이 중지되고, 에러는 router.onError()의 콜백에 전달됩니다.
      함수 인자로 next()를 받으면 조건에 걸리지 않더라고 기본적으로 next()을 호출해야 한다.
    */
    /*
    if (to.path == "/RouterView05") {
      next(new Error("Error!!!"))
    }
    */
  }

  /*
    예를들어 /posts/new를 접근할 때, /posts와 /new 모두 일치하며 각 라우터의 정봅는 matched에 배열도 담겨 있습니다.
    matched 배열을 돌면서 meta를 체크할 수도 있지만 상위 경로와 하위 경로에 있는 meta를 병합한다.
  */
  if (to.meta.requiresAuth)
    console.log("to.meta.requiresAuth : ", to.meta.requiresAuth)

  console.log("to.matched : ", to.matched)

  return true
})
/*
  beforeResolve는 beforeEach와 같이 Global Navigation Guards로 사용할 수 있습니다.
  beforeEach외 다른 점은 접근하고자 하는 컴포넌트의 guards가 통과되어야 하고
  비동기 라우트 컴포넌트가 만들어지면 호출된다.

  ref) https://router.vuejs.org/guide/advanced/navigation-guards.html#global-resolve-guards
*/
router.beforeResolve((to, from) => {
  console.log(`router.beforeResolve : ${from.path} -> ${to.path}`)
})
/*
  Global Navigation Guards들이 호출되고 afterEach hook이 호출됩니다.
  여기서는 analytics url에 보내거나 failure를 활용할 수 있습니다.
  failure에 자세한 내용은 다음 참고를 확인하십시오.

  ref) https://router.vuejs.org/guide/advanced/navigation-guards.html#global-resolve-guards
  ref) https://router.vuejs.org/guide/advanced/navigation-failures.html
*/
router.afterEach((to, from, failure) => {
  console.log(
    `router.afterEach : ${from.path} -> ${to.path}, failure: ${failure}`
  )

  if (!failure) console.log("TODO Anything")

  const toDepth = to.path.split("/").length
  const fromDepth = from.path.split("/").length
  to.meta.transition = toDepth < fromDepth ? "slide-right" : "slide-left"
})
router.onError((error, from, to) => {
  console.log(`router.onError : ${from.path} -> ${to.path}`)
})

export default router
