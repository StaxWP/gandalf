<template>
  <main
    class="gan-flex-1 gan-overflow-y-auto gan-flex gan-flex-wrap gan-justify-center gan-py-10"
  >
    <slot />

    <div
      class="gan-w-full gan-text-center gan-text-neutral-300 dark:gan-text-neutral-600 gan-mt-10 gan-text-sm gan-self-end"
    >
      Powered by
      <a
        href="https://staxwp.com/gandalf"
        target="_blank"
        class="gan-underline hover:gan-text-neutral-400 dark:hover:gan-text-neutral-300"
        >Gandalf</a
      >
    </div>
  </main>
</template>
