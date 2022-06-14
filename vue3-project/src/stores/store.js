import { createStore, createLogger } from "vuex"
import _ from "lodash"
import createWebSocketPlugin from "./createWebSocketPlugin.js"
import types from "./mutation-types"

function getData() {
  return Promise.resolve()
}
function getOtherData() {
  return Promise.resolve()
}

/*
  Plugins

  ref) https://vuex.vuejs.org/guide/plugins.html
*/
const myPlugin = (store) => {
  // called when the store is initialized
  store.subscribe((mutation, state) => {
    // called after every mutation.
    // The mutation comes in the format of `{ type, payload }`.
    console.log(
      "myPlugin' subscribe -",
      " mutation : ",
      mutation,
      " state : ",
      state
    )
  })
}

/*
  Committing Mutations Inside Plugins

  Socket의 data 송/수신 이벤트 헨들러를 달아 state와 동기화 되도록 한다.
  클로저를 이용

  ref) https://vuex.vuejs.org/guide/plugins.html#committing-mutations-inside-plugins
*/
const socket = {}
const webSocketPlugin = createWebSocketPlugin(socket)

/*
  Taking State Snapshots

  이전 상태를 가지고 있고 싶으면 변경될 때 스냅샷을 한다.

  ref) https://vuex.vuejs.org/guide/plugins.html#taking-state-snapshots
*/
const myPluginWithSnapshot = (store) => {
  let prevState = _.cloneDeep(store.state)
  store.subscribe((mutation, state) => {
    let nextState = _.cloneDeep(state)

    // compare `prevState` and `nextState`...

    // save state for next mutation
    prevState = nextState
  })
}

// Create a new store instance.
export const store = createStore({
  plugins:
    process.env.NODE_ENV !== "production"
      ? [createLogger(), myPlugin, webSocketPlugin, myPluginWithSnapshot]
      : [],
  // state는
  state: {
    id: "egoksg",
    name: "김성균",
    count: 1,
    todos: [
      { id: 1, text: "...", done: true },
      { id: 2, text: "...", done: false },
    ],
  },
  // state를 사용하는 컴포넌트의 computed에서 자주 사용된다면 getters에 미리 정의할 수 있다.
  getters: {
    doneTodos(state) {
      return state.todos.filter((todo) => todo.done)
    },
    // rootState는 모듈 한정
    doneTodosCount(state, getters, rootState) {
      return getters.doneTodos.length
    },
    getTodoById: (state) => (id) => {
      return state.todos.find((todo) => todo.id === id)
    },
  },
  /*
    mutations에 있는 함수들은 모두 동기적으로 이루어져야 한다.

    ref) https://vuex.vuejs.org/guide/mutations.html#mutations-must-be-synchronous
   */
  mutations: {
    increment(state) {
      state.count++
    },
    /*
      Commit with Payload

      ref) https://vuex.vuejs.org/guide/mutations.html#commit-with-payload
    */
    incrementPayloadValue(state, payload) {
      state.count += payload
    },
    /*
      Object-Style Commit

      ref) https://vuex.vuejs.org/guide/mutations.html#object-style-commit
    */
    incrementPayloadObject(state, payload) {
      state.count += payload.amount
    },
    /*
      Using Constants for Mutation Types

      ref) https://vuex.vuejs.org/guide/mutations.html#using-constants-for-mutation-types
    */
    [types.INCREMENT](state) {
      state.count++
    },
  },
  /*
    actions에서는 비동기 작업을 하고 데이터를 mutations에 전달합니다.
    context는 store 객체가 아니면 Modules와 관련이 있다.
   */
  actions: {
    increment1(context) {
      // context.state, context.getters, context.dispatch, context.rootState(module 한정)을 사용할 수 있다.
      context.commit("increment")
    },
    incrementPayloadObjectAsync({ commit }, payload) {
      setTimeout(() => {
        commit("incrementPayloadObject", payload)
      }, 3000)
    },
    // 여러 비동기 작업을 할 때, Promise를 return하여 처리한다.
    // ref) https://vuex.vuejs.org/guide/actions.html#dispatching-actions-in-components
    /*
    actionA({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit("someMutation")
          resolve()
        }, 1000)
      })
    },
    actionB({ dispatch, commit }) {
      return dispatch("actionA").then(() => {
        commit("someOtherMutation")
      })
    },
    */
    // 위 내용을 async와 await를 사용하여 간단히 처리할 수 있다.
    async actionA({ commit }) {
      commit("gotData", await getData())
    },
    async actionB({ dispatch, commit }) {
      await dispatch("actionA") // wait for `actionA` to finish
      commit("gotOtherData", await getOtherData())
    },
  },
})
