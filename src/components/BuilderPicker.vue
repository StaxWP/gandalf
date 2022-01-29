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
    <div
      v-if="Object.keys(data.builders).length"
      class="gan-flex gan-justify-center gan-gap-4 gan-mx-20"
    >
      <div
        v-for="(builder, key) in data.builders"
        :key="key"
        class="gan-w-1/3 gan-flex gan-flex-wrap gan-flex-col gan-items-center gan-justify-center gan-p-6 gan-rounded gan-shadow-lg hover:gan-shadow-xl hover:gan-cursor-pointer gan-bg-white gan-border-4 gan-border-transparent gan-transition gan-ease-linear hover:gan--translate-y-2"
        :class="{
          'gan-border-indigo-500 hover:gan-border-indigo-500':
            selected === builder.type,
        }"
        @click.stop="selected = builder.type"
      >
        <img
          :src="
            url.public + 'assets' + require(`../assets/svg/${builder.type}.svg`)
          "
          class="gan-block gan-w-20 gan-h-20"
        />

        <h4 class="gan-mt-6">{{ builder.title }}</h4>
      </div>
    </div>
    <div v-else class="gan-mx-20"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      url: (state) => state.app.url,
      step: (state) => state.step,
    }),
  },
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
  watch: {
    selected: function (newValue, oldValue) {
      if (newValue === oldValue) {
        return;
      }

      if (!newValue) {
        this.disableNext();
      } else {
        this.enableNext();
      }
    },
  },
  data() {
    return {
      selected: "",
    };
  },
  beforeMount() {
    if (!this.selected) {
      this.disableNext();
    }
  },
  methods: {
    enableNext() {
      this.$store.commit("UPDATE_NEXT_BTN", {
        show: true,
        disabled: false,
        tooltip: "",
      });
    },
    disableNext() {
      this.$store.commit("UPDATE_NEXT_BTN", {
        show: true,
        disabled: true,
        tooltip: "Pick an option to continue!",
      });
    },
  },
};
</script>
