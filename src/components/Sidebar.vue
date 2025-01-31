<template>
  <div class="sidebar h-screen flex flex-col justify-between bg-container-background text-white p-4 border-r-2 border-black">
    <ul class="sidebar-nav mt-4">
      <router-link v-for="item in topItems" :key="item.text" :to="item.to" class="block mb-0.5 hover:bg-app-li-hover-background hover:rounded-lg transition-all p-3 text-base text-app-text">
        <li class="flex items-center">
          <font-awesome-icon :icon="item.icon" class="mr-2" /> {{ item.text }}
        </li>
      </router-link>
    </ul>
    <ul class="sidebar-nav mb-4">
      <router-link v-for="item in bottomItems" :key="item.text" :to="item.to" class="block mb-0.5 hover:bg-app-li-hover-background hover:rounded-lg transition-all p-3 text-base text-app-text">
        <li class="flex items-center">
          <font-awesome-icon :icon="item.icon" class="mr-2" /> {{ item.text }}
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    topItems: {
      type: Array,
      required: true,
    },
    bottomItems: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>