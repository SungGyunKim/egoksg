<template>
  <div>dkdkdkd</div>
</template>
<script>
import axios from "axios"
/*
  How to implement the custom adapter of Axios

  ref) https://developpaper.com/how-to-implement-the-custom-adapter-of-axios/
*/
import buildURL from "axios/lib/helpers/buildURL"
import isURLSameOrigin from "axios/lib/helpers/isURLSameOrigin"
//import btoa from "axios/lib/helpers/btoa"
import cookies from "axios/lib/helpers/cookies"
import settle from "axios/lib/core/settle"
import httpAdapter from "axios/lib/adapters/http"
//import createError from "axios/lib/core/createError"
/*
  REST API 사이트
    https://reqres.in/
    https://jsonplaceholder.typicode.com/
*/
/*
  Global axios defaults

  ref) https://axios-http.com/docs/config_defaults
*/
axios.defaults.baseURL = "https://reqres.in/api"
axios.defaults.timeout = 10000
axios.defaults.headers.common["Authorization"] = "AUTH_TOKEN"
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded"
/*
  Interceptors

  ref) https://axios-http.com/docs/interceptors
*/
// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log("axios.interceptors.request")
    return config
  },
  function (error) {
    // Do something with request error
    console.error("axios.interceptors.request error")
    return Promise.reject(error)
  }
)
// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("axios.interceptors.response")
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.error("axios.interceptors.response error")
    return Promise.reject(error)
  }
)

function getTest() {
  let params = {
    page: 2,
  }

  axios.get(buildURL("/users", params)).then(function (response) {
    console.log("response : ", response)
  })
}

function postTest() {
  let params = {
    name: "morpheus",
    job: "leader",
  }

  axios.post(`/users`, params).then(function (response) {
    console.log("postTest - response : ", response)
  })
}

async function awaitTestTryCatch(config) {
  let params = {
    name: "morpheus",
    job: "leader",
  }

  const instance = axios.create(config)

  try {
    const response = await instance.post(`/users`, params)
  } catch (error) {
    console.log("awaitTestTryCatch - error : ", error)

    // ref) https://axios-http.com/kr/docs/handling_errors
    if (error.response) {
      // 요청이 전송되었고, 서버는 2xx 외의 상태 코드로 응답했습니다.
    } else if (error.request) {
      // 요청이 전송되었지만, 응답이 수신되지 않았습니다.
      // 'error.request'는 브라우저에서 XMLHtpRequest 인스턴스이고,
      // node.js에서는 http.ClientRequest 인스턴스입니다.
    } else {
      // 오류가 발생한 요청을 설정하는 동안 문제가 발생했습니다.
    }
  }
}

////////////////////////////////////////////////////////////
// ref) https://thecodebarbarian.com/practical-aspect-oriented-programming-in-javascript.html
// ref) https://github.com/vercel/micro/issues/8#issuecomment-178362486
function decorate_v1(executeFunction) {
  return new Promise((resolve, reject) => {
    executeFunction()
      .then((params) => {
        resolve(params)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

function decorateOuter(state) {
  return function decorateInner(executeFunction) {
    return new Promise((resolve, reject) => {
      executeFunction()
        .then((response) => {
          resolve(response)
          console.log("decorateInner.then() : state - ", state)
        })
        .catch((error) => {
          console.log("decorateInner.catch() : state - ", state)
          reject(error)
        })
    })
  }
}

function awaitTestDecorate(config) {
  const decorate_v2 = decorateOuter({ name: "김성균" })

  let params = {
    name: "morpheus",
    job: "leader",
  }

  const instance = axios.create(config)

  decorate_v2(async function () {
    const response = await instance.post(`/users`, params)

    return response
  })
    .then(function (response) {
      console.log("decorate_v2 : response - ", response)
      console.log(response)
    })
    .catch(function (error) {
      console.log("decorate_v2 : error - ", error)
    })
}

// getTest()
// postTest()
awaitTestTryCatch({
  baseURL: "https://reqres/", // code: "ERR_NETWORK", message: "Network Error"
})
// awaitTestDecorate({
//   baseURL: "https://reqres/", // code: "ERR_NETWORK", message: "Network Error"
// })
// awaitTestDecorate({
//   timeout: 10, // code: "ECONNABORTED", message: "timeout of 10ms exceeded"
// })
// awaitTestDecorate({
//   adapter: function (config) {
//     // ref) https://stackoverflow.com/questions/59401146/how-can-i-change-the-result-status-in-axios-with-an-adapter
//     return new Promise((resolve, reject) => {
//       return httpAdapter(config).then((response) => {
//         response.status = 500
//         settle(resolve, reject, response)
//       })
//     })
//   },
// })
</script>
