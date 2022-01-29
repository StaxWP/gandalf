import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      app: {},
      builders: [],
      step: {
        current: 0,
        total: 0,
      },
      next: {
        show: true,
        disabled: false,
        tooltip: "",
      },
      header: {
        show: {
          logo: true,
          builders: false,
          exit: true,
        },
      },
    };
  },
  mutations: {
    SET_APP(state, data) {
      state.app = data;
      state.step.total = data.steps.length;
    },
    SET_BUILDERS(state, builders) {
      state.builders = builders;
    },
    SET_CURRENT_BUILDER(state, builder) {
      state.builders = state.builders.map((item) => {
        item.selected = item.type === builder;

        return item;
      });
    },
    SET_SHOW_HEADER_LOGO(state, status) {
      state.header.show.logo = status;
    },
    SET_SHOW_HEADER_BUILDERS(state, status) {
      state.header.show.builders = status;
    },
    SET_SHOW_HEADER_EXIT(state, status) {
      state.header.show.exit = status;
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
  getters: {
    currentStep: (state) => {
      return state.builders.find((builder) => builder.selected);
    },
  },
});

export default store;
