<template>
  <div class="gan-container gan-mx-auto">
    <div v-if="data.title || data.description" class="gan-mb-10 gan-px-32">
      <Title :text="data.title" />
      <Description :text="data.description" />
    </div>

    <div v-if="data.search" class="gan-text-center">
      <span class="gan-relative">
        <input
          type="text"
          v-model="search"
          class="gan-search-box"
          :placeholder="text.placeholder.search"
        />
        <span
          class="gan-absolute gan-h-full gan-left-0 gan-top-0 gan-pl-4 gan-pr-2 gan-flex gan-items-center gan-text-neutral-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            style="enable-background: new 0 0 512 512"
            version="1.1"
            viewBox="0 0 512 512"
            xml:space="preserve"
            class="gan-w-5 gan-fill-current"
          >
            <path
              d="M344.5,298c15-23.6,23.8-51.6,23.8-81.7c0-84.1-68.1-152.3-152.1-152.3C132.1,64,64,132.2,64,216.3  c0,84.1,68.1,152.3,152.1,152.3c30.5,0,58.9-9,82.7-24.4l6.9-4.8L414.3,448l33.7-34.3L339.5,305.1L344.5,298z M301.4,131.2  c22.7,22.7,35.2,52.9,35.2,85c0,32.1-12.5,62.3-35.2,85c-22.7,22.7-52.9,35.2-85,35.2c-32.1,0-62.3-12.5-85-35.2  c-22.7-22.7-35.2-52.9-35.2-85c0-32.1,12.5-62.3,35.2-85c22.7-22.7,52.9-35.2,85-35.2C248.5,96,278.7,108.5,301.4,131.2z"
            />
          </svg>
        </span>
      </span>
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
      text: (state) => state.app.text,
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
  data() {
    return {
      search: "",
    };
  },
  beforeMount() {
    this.$store.commit("SET_SHOW_HEADER_BUILDERS", true);
  },
  beforeUnmount() {
    this.$store.commit("SET_SHOW_HEADER_BUILDERS", false);
  },
};
</script>
