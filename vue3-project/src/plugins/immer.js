import produce from "immer";
import { shallowRef } from "vue";

export function useImmer(baseState) {
  const state = shallowRef(baseState);
  const update = (updater) => {
    const preStateValue = state.value;
    state.value = produce(state.value, updater);
    console.log(preStateValue);
    console.log(state.value);
  };

  return [state, update];
}
