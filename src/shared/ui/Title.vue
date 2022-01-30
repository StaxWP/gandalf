<template>
  <h2
    v-if="text"
    class="gan-text-center gan-font-black gan-text-3xl dark:gan-text-white"
  >
    {{ text }}
  </h2>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>
