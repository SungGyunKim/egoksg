<template>
  <div>
    <h1>Navigation Guards</h1>
    <div class="link">
      <ul>
        <li>
          <a @click.prevent="onRouterPushClick('/RouterView01')"> 정상 </a>
        </li>
        <li>
          <a @click.prevent="onRouterPushClick('/RouterView01?test=true')">
            return false
          </a>
        </li>
        <li>
          <a @click.prevent="onRouterPushClick('/RouterView04?test=true')">
            new Error("Error!!!")
          </a>
        </li>
        <li>
          <a
            @click.prevent="onRouterPushClick('/RouterNavigationFailuresView')"
          >
            /RouterNavigationFailuresView
          </a>
        </li>
        <li>
          <a
            @click.prevent="
              onRouterPushClick(
                '/RouterNavigationFailuresView?queryString=queryString'
              )
            "
          >
            /RouterNavigationFailuresView?queryString=queryString
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import {
  isNavigationFailure,
  NavigationFailureType,
  useRouter,
} from "vue-router"

const router = useRouter()

async function onRouterPushClick(url) {
  /*
    Users are already on the page that they are trying to navigate to.
    동일한 라우트(url)로 이동할 경우
    A navigation guard aborts the navigation by doing return false.
    navigation guard에서 falsy value를 return한 경우
    A new navigation guard takes place while the previous one not finished.
    이전 navigation guard가 아직 끝나지 않았는데 새로운 navigation guard가 발생한 경우
    A navigation guard redirects somewhere else by returning a new location (e.g. return '/login').
    navigation guard에서 redirect한 경우
    A navigation guard throws an Error.
    navigation guard에서 Error를 throw한 겨우

    ref) https://router.vuejs.org/guide/advanced/navigation-failures.html
  */
  const failure = await router.push(url)
  // ref) https://router.vuejs.org/guide/advanced/navigation-failures.html#differentiating-navigation-failures
  console.log("RouterNavigationFailuresView - failure : ", failure)
  console.log("RouterNavigationFailuresView - router : ", router)

  if (failure) {
    // navigation prevented
    console.log(
      `RouterNavigationFailuresView : ${failure.from.path} -> ${failure.to.path}`
    )
    /*
      aborted: false was returned inside of a navigation guard to the navigation.
      cancelled: A new navigation took place before the current navigation could finish.
                e.g. router.push was called while waiting inside of a navigation guard.
      duplicated: The navigation was prevented because we are already at the target location.

      ref) https://router.vuejs.org/guide/advanced/navigation-failures.html#differentiating-navigation-failures
    */
    if (isNavigationFailure(failure, NavigationFailureType.aborted)) {
      // show a small notification to the user
      const ret = confirm("You have unsaved changes, discard and leave anyway?")
      if (ret) {
        if (router.currentRoute.value.redirectedFrom) {
          // redirectedFrom is resolved route location like to and from in navigation guards
          console.log(
            "RouterNavigationFailuresView - redirectedFrom : ",
            router.currentRoute.value.redirectedFrom
          )
        }
      }
    }
  } else {
    // navigation succeeded (this includes the case of a redirection)
    /*
      router.push(url)에서 await를 걸어 페이지 오픈이 끝나면 메뉴를 닫는 기능을 넣을 수 있다.

      ref) https://router.vuejs.org/guide/advanced/navigation-failures.html#detecting-navigation-failures
    */
    // isMenuOpen = false
    console.log("RouterNavigationFailuresView - navigation succeeded")
  }
}
</script>
<style scoped>
.link {
  display: flex;
  flex-direction: column;
}
</style>
