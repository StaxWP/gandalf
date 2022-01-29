<template>
  <footer
    class="gan-relative gan-w-full gan-bg-white gan-py-4 gan-px-20 gan-shadow-top gan-z-0"
    :class="{ 'gan-pt-6': progress.enabled && !progress.full }"
  >
    <div
      v-if="progress.enabled"
      class="gan-absolute gan-top-0 gan-left-0 gan-w-full"
      :class="{
        'gan-bg-white gan-h-full gan--z-1': progress.full,
        'gan-bg-gray-100 gan-h-2': !progress.full,
      }"
    >
      <div
        class="gan-transition-width gan-ease-linear gan-duration-500"
        :class="{
          'gan-bg-green-500 gan-h-full': progress.full,
          'gan-bg-green-500 gan-h-2': !progress.full,
        }"
        :style="`width: ${progressBar}%`"
      ></div>
    </div>

    <div class="gan-flex gan-items-center gan-justify-between gan-z-10">
      <button
        v-if="step.current !== 0"
        @click.stop="goPrev()"
        class="gan-inline-flex gan-items-center gan-cursor-pointer gan-bg-gradient-to-r gan-from-neutral-200 gan-to-neutral-100 hover:gan-to-neutral-200 gan-text-neutral-600 gan-rounded-full gan-px-6 gan-py-3"
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
        {{ buttons.prev }}
      </button>

      <div v-else></div>

      <div v-if="progress.numbers"></div>

      <button
        v-if="next.show && step.total !== step.current"
        v-tooltip.left="next.tooltip"
        @click.stop="goNext()"
        class="gan-inline-flex gan-items-center gan-cursor-pointer gan-bg-gradient-to-r gan-from-indigo-600 gan-to-blue-600 hover:gan-to-indigo-600 gan-text-white gan-rounded-full gan-px-6 gan-py-3"
        :class="{
          'gan-opacity-75 gan-cursor-not-allowed': next.disabled,
        }"
      >
        {{ buttons.next }}
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
      <div v-else></div>
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
      buttons: (state) => state.app.buttons,
      progress: (state) => state.app.progress,
    }),
    progressBar: function () {
      return Math.round((this.step.current / this.step.total) * 100);
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
