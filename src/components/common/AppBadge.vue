<template>
  <span class="inline-block px-4 py-2 text-sm font-mono text-off-white bg-dark-orange rounded-full">
    {{ label }}
  </span>
</template>

<script>
export default {
  name: "AppBadge",
  props: {
    label: String,
  },
}
</script>

<style scoped>
/* You can add additional styles if necessary */
</style>
