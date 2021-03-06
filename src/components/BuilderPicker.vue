<template>
  <div class="gan-container gan-mx-auto">
    <div v-if="data.title || data.description" class="gan-mb-10 gan-px-32">
      <Title :text="data.title" />
      <Description :text="data.description" />
    </div>
    <div
      v-if="Object.keys(builders).length"
      class="gan-flex gan-justify-center gan-gap-4"
    >
      <div
        v-for="(builder, key) in builders"
        :key="key"
        class="gan-w-56 gan-flex gan-flex-wrap gan-flex-col gan-items-center gan-justify-center gan-p-6 gan-rounded gan-shadow-lg hover:gan-shadow-xl hover:gan-cursor-pointer gan-bg-white gan-transition gan-ease-linear hover:gan--translate-y-2"
        :class="{
          'gan-bg-gradient-to-tr gan-from-indigo-600 gan-to-indigo-500 gan-text-white gan-shadow-indigo-200 hover:gan-shadow-indigo-200 dark:gan-shadow-none dark:hover:gan-shadow-none':
            builder.selected,
        }"
        @click.stop="setBuilder(builder.type)"
      >
        <span class="gan-p-1 gan-bg-white gan-rounded-full gan-overflow-hidden">
          <img
            :src="
              url.public +
              'assets' +
              require(`../assets/svg/${builder.type}.svg`)
            "
            class="gan-block gan-w-20 gan-h-20"
          />
        </span>

        <h4 class="gan-mt-6">{{ builder.title }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Title from "../shared/ui/Title.vue";
import Description from "../shared/ui/Description.vue";

export default {
  components: {
    Title,
    Description,
  },
  computed: {
    ...mapState({
      url: (state) => state.app.url,
      step: (state) => state.step,
      builders: (state) => state.builders,
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
    builders: function (newValue, oldValue) {
      if (this.$store.getters.currentStep === undefined) {
        this.disableNext();
      } else {
        this.enableNext();
      }
    },
  },
  beforeMount() {
    if (this.$store.getters.currentStep === undefined) {
      this.disableNext();
    }

    if (!this.builders.length) {
      this.$store.commit("SET_BUILDERS", this.data.builders);
    }
  },
  beforeUnmount() {
    this.enableNext();
  },
  methods: {
    setBuilder(builder) {
      this.$store.commit("SET_CURRENT_BUILDER", builder);
    },
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
