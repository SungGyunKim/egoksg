import { createMachine, interpret } from "xstate";
import { shallowRef } from "vue";

export function useMachine(options) {
  const machine = createMachine(options);
  const state = shallowRef(machine.initialState);
  const service = interpret(machine)
    .onTransition((newState) => (state.value = newState))
    .start();
  const send = (event) => service.send(event);

  return [state, send, service, machine];
}
