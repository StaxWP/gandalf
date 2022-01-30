<template>
  <h2 v-if="text" class="gan-text-center gan-font-black gan-text-3xl">
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
