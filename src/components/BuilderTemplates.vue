<template>
  <div class="gan-w-1/2 gan-flex gan-flex-col gan-flex-wrap gan-justify-center">
    <div v-if="data.title || data.description" class="gan-mb-10">
      <h2
        v-if="data.title"
        class="gan-text-center gan-font-black gan-text-4xl gan-tracking-wide"
      >
        {{ data.title }}
      </h2>
      <div
        v-if="data.description"
        class="gan-text-center gan-mt-6 gan-text-neutral-700 gan-px-40"
      >
        {{ data.description }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    data: {
      type: Object,
      required: true,
      default: () => ({
        title: "",
        description: "",
        builders: () => ({}),
      }),
    },
  },
  beforeMount() {
    this.$store.commit("SET_SHOW_HEADER_BUILDERS", true);
  },
  beforeUnmount() {
    this.$store.commit("SET_SHOW_HEADER_BUILDERS", false);
  },
};
</script>
