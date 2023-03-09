import { useStore } from "vuex";
import { computed } from "vue";

export default function useCounter() {
  const store = useStore();

  const counter = computed(() => store.state.counter);

  function increment() {
    store.commit("increment");
  }

  function decrement() {
    store.commit("decrement");
  }

  function reset() {
    store.commit("reset");
  }

  function setValue(value) {
    store.commit("setValue", value);
  }

  return {
    counter,
    increment,
    decrement,
    reset,
    setValue,
  };
}