<template>
  <div
    v-if="text"
    class="gan-text-center gan-mt-6 gan-text-neutral-700 dark:gan-text-neutral-300 gan-px-40"
  >
    {{ text }}
  </div>
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
