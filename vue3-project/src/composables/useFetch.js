import { ref, isRef, unref, watchEffect } from "vue";

export function useFetch(url) {
  const data = ref(null);
  const error = ref(null);

  async function doFetch() {
    // reset state before fetching..
    data.value = null;
    error.value = null;

    // resolve the url value synchronously so it's tracked as a
    // dependency by watchEffect()
    const urlValue = unref(url);

    try {
      // artificial delay / random error
      await timeout();
      // unref() will return the ref value if it's a ref
      // otherwise the value will be returned as-is
      const res = await fetch(urlValue);
      data.value = await res.json();
    } catch (e) {
      error.value = e;
    }
  }

  if (isRef(url)) {
    // setup reactive re-fetch if input URL is a ref
    // watchEffect : 전달 받은 함수 안에 reactive data가 있다면 이를 추적하여
    //               값이 변경될 때마다, 해당 함수를 호출합니다.
    watchEffect(doFetch, {
      onTrack(e) {
        console.log("[useFetch] watchEffect.onTrack - e : ", e);
      },
      onTrigger(e) {
        console.log("[useFetch] watchEffect.onTrigger - e : ", e);
      },
    });
  } else {
    // otherwise, just fetch once
    doFetch();
  }

  return { data, error, retry: doFetch };
}

// artificial delay
function timeout() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.3) {
        resolve();
      } else {
        reject(new Error("Random Error"));
      }
    }, 300);
  });
}
