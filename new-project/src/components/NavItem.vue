
<template>
    <a :href="getNavItemUrl()" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">{{ props.itemLabel }}</a>
</template>

<script setup lang="ts">

  const props = defineProps({
    itemLabel: String,
    urlRef: String
  });

  function getNavItemUrl() {
    return window.location.origin + props.urlRef;
  }
</script>

<style scoped>

</style>