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
    <YouTube
      :src="data.url"
      :vars="{ controls: 0, disablekb: 1, enablejsapi: 1, iv_load_policy: 0 }"
      width="770"
      height="446"
      @ready="onReady"
      ref="youtube"
      class="gan-mx-auto gan-yt-video"
    />
  </div>
</template>

<script>
import YouTube from "vue3-youtube";

export default {
  components: { YouTube },
  props: {
    data: {
      type: Object,
      required: true,
      default: () => ({
        title: "",
        description: "",
        url: "",
        autoplay: false,
      }),
    },
  },
  methods: {
    onReady() {
      if (this.data.autoplay) this.$refs.youtube.playVideo();
    },
  },
};
</script>
