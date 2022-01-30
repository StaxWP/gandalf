<template>
  <div
    v-if="Object.keys(app).length"
    class="gan-flex gan-flex-col gan-h-screen gan-bg-neutral-100"
  >
    <Header />
    <Content>
      <template v-if="app.steps.length">
        <template v-for="(item, key) in app.steps">
          <Component
            v-if="parseInt(key) === step.current"
            :key="key"
            :is="item.type"
            :data="item.data"
          ></Component>
        </template>
      </template>

      <div v-if="!app.steps.length && app.empty.steps" class="gan-text-center">
        <h3
          class="gan-text-center gan-font-black gan-text-4xl gan-tracking-wide"
        >
          {{ app.empty.steps }}
        </h3>

        <a
          v-if="app.url.exit && app.text.button.exit"
          :href="app.url.exit"
          class="gan-inline-block gan-mt-6 gan-px-6 gan-py-3 gan-bg-gradient-to-r gan-from-neutral-800 gan-to-neutral-700 gan-text-white gan-rounded hover:gan-to-neutral-800 hover:gan-shadow-xl"
        >
          {{ app.text.button.exit }}
        </a>
      </div>
    </Content>
    <Footer v-if="step.total" />
  </div>
</template>

<script>
import { mapState } from "vuex";

import Header from "./shared/Header.vue";
import Footer from "./shared/Footer.vue";
import Content from "./shared/Content.vue";

import YoutubeVideo from "./components/YoutubeVideo.vue";
import BuilderPicker from "./components/BuilderPicker.vue";
import BuilderTemplates from "./components/BuilderTemplates.vue";

export default {
  components: {
    Header,
    Footer,
    Content,
    YoutubeVideo,
    BuilderPicker,
    BuilderTemplates,
  },
  computed: {
    ...mapState({
      app: (state) => state.app,
      step: (state) => state.step,
    }),
  },
  beforeMount() {
    const data = window.gandalf_data;
    data.steps = data.steps.filter((item) => {
      return this.$options.components[item.type] !== undefined;
    });

    this.$store.commit("SET_APP", data);
  },
};
</script>
