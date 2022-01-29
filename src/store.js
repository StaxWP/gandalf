import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      app: {},
      step: {
        current: 0,
        total: 0,
      },
      next: {
        show: true,
        disabled: false,
        tooltip: "",
      },
    };
  },
  mutations: {
    SET_APP(state, data) {
      state.app = data;
      state.step.total = data.steps.length;
    },
    UPDATE_NEXT_BTN(state, data) {
      state.next = data;
    },
    INCREMENT_STEP(state) {
      state.step.current++;
    },
    DECREMENT_STEP(state) {
      state.step.current--;

      if (state.step.current < 0) {
        state.step.current = 0;
      }
    },
  },
});

export default store;
