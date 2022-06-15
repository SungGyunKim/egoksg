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
axios.defaults.baseURL = "https://reqres.in/"
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
    return Promise.reject(error)
  }
)

function getTest() {
  const params = {
    page: 2,
  }

  axios.get(buildURL("api/users", params)).then(function (response) {
    console.log("response.data : ", response.data)
    console.log("response.status : ", response.status)
    console.log("response.statusText : ", response.statusText)
    console.log("response.headers : ", response.headers)
    console.log("response.config : ", response.config)
  })
}

function postTest() {
  // const params = new URLSearchParams()
  // params.append("name", "morpheus")
  // params.append("job", "leader")

  let params = {
    name: "morpheus",
    job: "leader",
  }

  axios.post(`api/users`, params).then(function (response) {
    console.log("response.data : ", response.data)
    console.log("response.status : ", response.status)
    console.log("response.statusText : ", response.statusText)
    console.log("response.headers : ", response.headers)
    console.log("response.config : ", response.config)
  })
}
// URLSearchParams
function getQueryString(data) {
  return data
    .map((x) => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`)
    .join("&")
}

getTest()
</script>
