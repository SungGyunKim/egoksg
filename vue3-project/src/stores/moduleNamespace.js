/*
  Application Structure

  Application-level state is centralized in the store.

  The only way to mutate the state is by committing mutations, which are synchronous transactions.

  Asynchronous logic should be encapsulated in, and can be composed with actions.

  ref) https://vuex.vuejs.org/guide/structure.html
*/

// moduleA.js, moduleB.js와 다르게 { account: moduleOption } 함으로써 모듈 이름을 지정하는 것이 좋아 보인다.
export default {
  account: {
    namespaced: true,

    // module assets
    // state 관련하여 state: {}를 사용하면 Object가 다른 곳에서 변경될 수 있으므로 state: () => ({})를 사용해야 한다.
    // ref) https://vuex.vuejs.org/guide/modules.html#module-reuse
    state: () => ({}), // module state is already nested and not affected by namespace option
    getters: {
      isAdmin() {}, // -> getters['account/isAdmin']
    },
    actions: {
      login() {}, // -> dispatch('account/login')
    },
    mutations: {
      login() {}, // -> commit('account/login')
    },

    // nested modules
    modules: {
      // *중요* inherits the namespace from parent module
      myPage: {
        state: () => ({}),
        getters: {
          profile() {}, // *중요* -> getters['account/profile']
        },
      },

      // *중요* further nest the namespace
      posts: {
        namespaced: true,

        state: () => ({}),
        getters: {
          popular() {}, // *중요* -> getters['account/posts/popular']
        },
      },
    },
  },
  foo: {
    namespaced: true,

    getters: {
      // `getters` is localized to this module's getters
      // you can use rootGetters via 4th argument of getters
      someGetter(state, getters, rootState, rootGetters) {
        getters.someOtherGetter // -> 'foo/someOtherGetter'
        rootGetters.someOtherGetter // -> 'someOtherGetter'
        rootGetters["bar/someOtherGetter"] // -> 'bar/someOtherGetter'
      },
      someOtherGetter: (state) => {},
    },

    actions: {
      // dispatch and commit are also localized for this module
      // they will accept `root` option for the root dispatch/commit
      someAction({ dispatch, commit, getters, rootGetters }) {
        getters.someGetter // -> 'foo/someGetter'
        rootGetters.someGetter // -> 'someGetter'
        rootGetters["bar/someGetter"] // -> 'bar/someGetter'

        dispatch("someOtherAction") // -> 'foo/someOtherAction'
        dispatch("someOtherAction", null, { root: true }) // -> 'someOtherAction'

        commit("someMutation") // -> 'foo/someMutation'
        commit("someMutation", null, { root: true }) // -> 'someMutation'
      },
      someOtherAction(ctx, payload) {},
      someRootAction: {
        root: true, // namespaced: true를 무시하고 root로 등록
        handler(namespacedContext, payload) {}, // -> 'someRootAction'
      },
    },
  },
}
