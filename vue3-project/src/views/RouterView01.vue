<template>
  <h1>Basic</h1>
  <div class="link">
    <!-- https://router.vuejs.org/guide/essentials/dynamic-matching.html#dynamic-route-matching-with-params -->
    <!-- 정적 이동 by to -->
    <router-link to="/RouterView01/users/eduardo/posts/10"
      >/RouterView01/users/eduardo/posts/10
    </router-link>
    <!-- 동적 이동 by :to -->
    <router-link
      :to="{
        name: 'RouterView01_full_params',
        params: { username: 'eduardo', postId: 20 },
      }"
      >/RouterView01/users/eduardo/posts/20
    </router-link>
    <!-- 동적 이동 by router -->
    <a
      @click.prevent="
        onRouteLinkPush({
          name: 'RouterView01_full_params',
          params: { username: 'eduardo', postId: 30 },
        })
      "
      >/RouterView01/users/eduardo/posts/30
    </a>
    <!-- 동적 이동 by router, without postId -->
    <a
      @click.prevent="
        onRouteLinkPush({
          name: 'RouterView01_optional_params',
          params: { username: 'eduardo' },
          query: { pageNo: 0 },
        })
      "
      >/RouterView01/users/eduardo
    </a>
    <a
      @click.prevent="
        onRouteLinkPush({
          name: 'RouterView01_optional_params',
          params: { username: 'eduardo' },
          query: { pageNo: 1 },
          replace: true, // history을 남기지 않는다. 해당 옵션을 주면 router.replace()와 같은 효과를 낸다.
        })
      "
      >/RouterView01/users/eduardo - replace: true
    </a>
    <a
      @click.prevent="
        onRouteLinkReplace({
          name: 'RouterView01_optional_params',
          params: { username: 'eduardo' },
          query: { pageNo: 3 },
        })
      "
      >/RouterView01/users/eduardo - replace()
    </a>
    <!-- 결과 -->
    <h3>[ Route Info ]</h3>
    <div>{{ $route }}</div>
    <h3>[ Previous Route params ]</h3>
    <div>{{ previousRouteParams.value }}</div>
    <h3>[ Current Route params ]</h3>
    <div>{{ $route.params }}</div>
  </div>
</template>
<script setup>
import { onMounted, reactive, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const [route, router] = [useRoute(), useRouter()];
const previousRouteParams = reactive({});

/*
  /RouterView01/xxx를 통해 처음 RouterView01 컴포넌트에 접근하면 lifecycle hook이 실행됩니다.
  이후 RouterView01 컴포넌트에서 /RouterView01/yyyy를 호출하면 URL은 바뀌지만 RouterView01 컴포넌트는 재사용되어 lifecycle hook이 호출되지 않습니다.
  이럴 경우, router의 변화를 감지하기 위해 다음과 같이 해야 합니다.

  ref) https://router.vuejs.org/guide/essentials/dynamic-matching.html#reacting-to-params-changes
 */
onMounted(() => {
  watch(
    () => route.params,
    (newParam, oldParam) => {
      previousRouteParams.value = oldParam;
    }
  );
});

function onRouteLinkPush(params) {
  router.push(params);
}
function onRouteLinkReplace(params) {
  router.replace(params);
}
</script>

<style scoped>
.link {
  display: flex;
  flex-direction: column;
}
</style>
