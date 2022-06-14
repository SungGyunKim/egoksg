<template>
  <div>
    props > id : {{ id }} <input type="text" name="id" v-model="strictId" />
  </div>
  <div>props > name : {{ name }}</div>
  <div>props > count : {{ count }}</div>
  <div>props > countPlusLocalState : {{ countPlusLocalState }}</div>
  <div>store > $store.getters.doneTodos : {{ $store.getters.doneTodos }}</div>
  <div>
    store > $store.getters.doneTodosCount : {{ $store.getters.doneTodosCount }}
  </div>
  <div>
    store > $store.getters.getTodoById : {{ $store.getters.getTodoById(2) }}
  </div>
  <div>props > doneTodosCount : {{ doneTodosCount }}</div>
  <div>
    <button @click="onMutationPayloadClick1('increment')">increment v1</button>
    <br />
    <button @click="onMutationPayloadClick1('incrementPayloadValue', 10)">
      incrementPayloadValue
    </button>
    <br />
    <button
      @click="onMutationPayloadClick1('incrementPayloadObject', { amount: 20 })"
    >
      incrementPayloadObject v1
    </button>
    <br />
    <button
      @click="
        onMutationPayloadClick2({ type: 'incrementPayloadObject', amount: 50 })
      "
    >
      incrementPayloadObject v2
    </button>
    <br />
    <button @click="onMutationPayloadClick3()">increment v2</button>
    <br />
    <button @click="add()">increment v3</button>
    <br />
    <button @click="increment()">increment v4</button>
    <br />
    <button
      @click="
        incrementPayloadObjectAsync1({
          amount: 200,
        })
      "
    >
      incrementPayloadObjectAsync v1
    </button>
    <br />
    <button
      @click="
        incrementPayloadObjectAsync2({
          amount: 200,
        })
      "
    >
      incrementPayloadObjectAsync v2
    </button>
    <br />
    <button
      @click="
        incrementPayloadObjectAsync({
          amount: 300,
        })
      "
    >
      incrementPayloadObjectAsync v3
    </button>
    <br />
  </div>
</template>
<!--
  dispatch() -> actions -> commit() -> mutations -> state 변화 -> getters
-->
<script>
import { useStore, mapState, mapGetters, mapMutations, mapActions } from "vuex"
import types from "../stores/mutation-types"

export default {
  props: {
    localCount: {
      type: Number,
      default: 10,
    },
  },
  /*
  computed: {
    id() {
      return this.$store.state.id
    },
    name() {
      return this.$store.state.name
    },
  },
  */
  computed: {
    /*
      mapState은 여러 store state 속성이나 getter 등 복잡한 computed getter를 만들 때 사용된다.
    */
    ...mapState({
      // arrow functions can make the code very succinct!
      id: (state) => state.id,
      name: (state) => state.name,
      count: (state) => state.count,
      // passing the string value 'count' is same as `state => state.count`
      countAlias: "count",
      // to access local state with `this`, a normal function must be used
      countPlusLocalState(state) {
        return state.id + this.localCount
      },
    }),
    // mapGetters를 통해 store의 getters를 빠르게 가지고 올 수 있다.
    ...mapGetters(["doneTodosCount"]),
    strictId: {
      get() {
        return this.$store.state.id
      },
      set(value) {
        debugger
        // Uncaught Error: [vuex] do not mutate vuex store state outside mutation handlers. 발생
        this.$store.state.id = value
        // 해결책 ref) https://beomy.tistory.com/90
        // this.$store.commit("id", value)
      },
    },
  },
  methods: {
    onMutationPayloadClick1(mutation, payload) {
      this.$store.commit(mutation, payload)
    },
    onMutationPayloadClick2(mutationAndPayload) {
      this.$store.commit(mutationAndPayload)
    },
    onMutationPayloadClick3() {
      this.$store.commit(types.INCREMENT)
    },
    ...mapMutations([
      "increment", // map `this.increment()` to `this.$store.commit('increment')`
    ]),
    ...mapMutations({
      add: "increment", // map `this.add()` to `this.$store.commit('increment')`
    }),
    incrementPayloadObjectAsync1() {
      this.$store.dispatch("incrementPayloadObjectAsync", {
        amount: 10,
      })
      this.$store.dispatch({
        type: "incrementPayloadObjectAsync",
        amount: 100,
      })
    },
    ...mapActions({
      incrementPayloadObjectAsync2: "incrementPayloadObjectAsync",
    }),
    ...mapActions(["incrementPayloadObjectAsync"]),
  },
}
</script>
<style></style>
