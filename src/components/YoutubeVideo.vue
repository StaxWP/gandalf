<template>
  <div class="gan-container gan-mx-auto">
    <div v-if="data.title || data.description" class="gan-mb-10 gan-px-32">
      <Title :text="data.title" />
      <Description :text="data.description" />
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
import Title from "../shared/ui/Title.vue";
import Description from "../shared/ui/Description.vue";

export default {
  components: {
    YouTube,
    Title,
    Description,
  },
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
