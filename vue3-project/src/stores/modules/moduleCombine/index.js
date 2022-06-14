import { createStore } from "vuex"
import moduleA from "./moduleA.js"
import moduleB from "./moduleB.js"
import moduleNamespace from "./moduleNamespace.js"

/*
  각 모듈은 state, mutations, actions, getters 그리고 modules 가지고 있다.
  modules를 통해 중첩된 module를 만들 수 있다.
  module의 mutations, actions은 global namespace에 등록되면 에러가 발생한다.
  에러는 다음과 같다.
    vuex.esm-bundler.js:330 [vuex] duplicate getter key: doubleCount
    vuex.esm-bundler.js:330 [vuex] duplicate getter key: sumWithRootCount
  module이 global namespace에 등록되는 게 아니라 각각의 고유 namespace를 가질려면 namespaced 옵션을 true로 준다.
  createStore(options)의 modules에 모듈을 등록할 때, key가 namespace 이름이 된다.
*/
const store = createStore({
  modules: {
    a: moduleA, // 'a'가 module의 namespace 이름이 된다.
    moduleB, // module 내부에서 이름을 사용하기 때문에 모듈명과 동일하게 해야 한다.
    ...moduleNamespace, // // moduleA.js, moduleB.js와 다르게 { account: moduleOption } 함으로써 모듈명을 지정하는 것이 좋아 보인다.
  },
})

console.log("moduleCombine - store.state.a : ", store.state.a) // -> `moduleA`'s state
console.log("moduleCombine - store.state.moduleB : ", store.state.moduleB) // -> `moduleB`'s state
console.log("moduleCombine - store.state.account : ", store.state.account) // -> `account`'s state

export default store
