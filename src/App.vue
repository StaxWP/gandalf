<template>
  <div class="gan-flex gan-flex-col gan-h-screen gan-bg-neutral-100">
    <Header :logo="app.logo" :exit="app.exit" />
    <Content>
      <template v-if="app.steps.length">
        <template v-for="(item, key) in app.steps">
          <Component
            v-if="parseInt(key) === step"
            :is="item.type"
            :key="key"
            :public_url="app.public_url"
            :data="item"
          ></Component>
        </template>
      </template>

      <div
        v-if="!app.steps.length && app.no_steps_text"
        class="gan-text-center"
      >
        <h3
          class="gan-text-center gan-font-black gan-text-4xl gan-tracking-wide"
        >
          {{ app.no_steps_text }}
        </h3>

        <a
          v-if="app.exit.url && app.exit.text"
          :href="app.exit.url"
          class="gan-inline-block gan-mt-6 gan-px-6 gan-py-3 gan-bg-gradient-to-r gan-from-neutral-800 gan-to-neutral-700 gan-text-white gan-rounded hover:gan-to-neutral-800 hover:gan-shadow-xl"
        >
          {{ app.exit.text }}
        </a>
      </div>
    </Content>
    <Footer
      v-if="app.steps.length"
      :step="step"
      :total_steps="total_steps"
      :progress="app.progress"
      :next="next"
      :btnNext="app.buttons.next"
      :btnPrev="app.buttons.prev"
      @updateStep="setStep"
    />
  </div>
</template>

<script>
import Header from "./shared/Header.vue";
import Footer from "./shared/Footer.vue";
import Content from "./shared/Content.vue";

import YoutubeVideo from "./components/YoutubeVideo.vue";
import BuilderPicker from "./components/BuilderPicker.vue";

export default {
  components: {
    Header,
    Footer,
    Content,
    YoutubeVideo,
    BuilderPicker,
  },
  data() {
    return {
      app: {
        logo: "",
        exit: {
          url: "",
          text: "",
        },
        buttons: {
          next: "",
          prev: "",
          finish: "",
          import: "",
          install: "",
          view: "",
        },
        public_url: "",
        progress: false,
        steps: [],
        no_steps_text: "",
      },
      step: 0,
      total_steps: 0,
      next: {
        show: true,
        disabled: false,
        tooltip: "",
      },
    };
  },
  beforeMount() {
    this.app = window.gandalf_data;
    this.app.steps = this.app.steps.filter((item) => {
      return (
        item.type !== undefined &&
        typeof item.type === "string" &&
        this.$options.components[item.type] !== undefined
      );
    });

    this.total_steps = this.app.steps.length;
  },
  methods: {
    setStep(value) {
      this.step = value;
    },
  },
};
</script>
