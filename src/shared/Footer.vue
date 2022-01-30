<template>
  <footer
    class="gan-relative gan-w-full gan-bg-white dark:gan-bg-neutral-900 gan-py-4 gan-px-20 gan-shadow-top"
    :class="{ 'gan-pt-6': progress === 'bar' }"
  >
    <div
      v-if="progress === 'bar'"
      class="gan-absolute gan-top-0 gan-left-0 gan-w-full gan-bg-gray-100 gan-h-2"
    >
      <div
        class="gan-transition-width gan-ease-linear gan-duration-500 gan-bg-green-500 gan-h-2"
        :style="`width: ${progressBar}%`"
      ></div>
    </div>

    <div class="gan-grid gan-grid-cols-3 gan-gap-4 gan-z-10">
      <div class="gan-flex gan-items-center">
        <button
          v-if="step.current !== 0"
          @click.stop="goPrev()"
          class="gan-inline-flex gan-items-center gan-bg-neutral-100 hover:gan-bg-neutral-200 gan-text-neutral-600 dark:gan-bg-neutral-800 dark:hover:gan-bg-neutral-700 dark:gan-text-neutral-300 gan-rounded-full gan-px-6 gan-py-3 gan-transition-colors gan-duration-200 gan-ease-in"
        >
          <span class="gan-block gan-mr-2 gan-w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              style="enable-background: new 0 0 128 128"
              version="1.1"
              viewBox="0 0 128 128"
              xml:space="preserve"
              class="gan-fill-current"
            >
              <g>
                <polygon
                  points="48.1,29.1 13.2,64 48.1,98.9 53.8,93.2 28.5,68 92,68 92,60 28.5,60 53.8,34.8  "
                />
                <rect height="8" width="8" x="104" y="60" />
              </g>
            </svg>
          </span>
          {{ text.button.prev }}
        </button>
      </div>

      <div class="gan-flex gan-items-center gan-justify-center">
        <div
          v-if="progress === 'numbers'"
          class="gan-font-bold gan-text-neutral-400 dark:gan-text-neutral-600"
        >
          {{ step.current + 1 }} / {{ step.total }}
        </div>
      </div>

      <div class="gan-flex gan-items-center gan-justify-end">
        <button
          v-if="next.show && step.total !== step.current"
          v-tooltip.left="next.tooltip"
          @click.stop="goNext()"
          class="gan-inline-flex gan-items-center gan-bg-indigo-600 hover:gan-bg-indigo-700 dark:gan-bg-indigo-700 dark:hover:gan-bg-indigo-600 gan-text-white gan-rounded-full gan-px-6 gan-py-3 gan-transition gan-duration-200 gan-ease-in gan-shadow-md hover:gan-shadow-lg gan-shadow-indigo-100 hover:gan-shadow-indigo-200 dark:gan-shadow-none dark:hover:gan-shadow-none"
          :class="{
            'gan-opacity-75 gan-cursor-not-allowed': next.disabled,
          }"
        >
          {{ text.button.next }}
          <span class="gan-block gan-ml-2 gan-w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              id="Layer_1"
              style="enable-background: new 0 0 128 128"
              version="1.1"
              viewBox="0 0 128 128"
              xml:space="preserve"
              class="gan-fill-current"
            >
              <g>
                <polygon
                  points="79.9,98.9 114.8,64 79.9,29.1 74.2,34.8 99.5,60 36,60 36,68 99.5,68 74.2,93.2  "
                />
                <rect height="8" width="8" x="16" y="60" />
              </g>
            </svg>
          </span>
        </button>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      step: (state) => state.step,
      next: (state) => state.next,
      text: (state) => state.app.text,
      progress: (state) => state.app.progress,
    }),
    progressBar: function () {
      if (this.progress !== "bar") return;

      return Math.round(((this.step.current + 1) / this.step.total) * 100);
    },
  },
  methods: {
    goPrev() {
      this.$store.commit("DECREMENT_STEP");
    },
    goNext() {
      if (this.next.disabled) return;

      this.$store.commit("INCREMENT_STEP");
    },
  },
};
</script>
