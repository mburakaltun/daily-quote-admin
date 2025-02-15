<template>
  <div class="flex h-screen">
    <Sidebar
        v-if="!route.meta.hideSidebar"
        :top-items="topSidebarItems"
        :bottom-items="bottomSidebarItems"
        class="flex-[1]" />
    <div class="flex-[5] bg-app-background p-8 overflow-auto">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import { topSidebarItems, bottomSidebarItems } from './config/sidebarItems';
import { useRoute } from 'vue-router';

export default {
  name: 'App',
  components: {
    Sidebar,
  },
  setup() {
    const route = useRoute();

    return {
      route,
      topSidebarItems,
      bottomSidebarItems,
    };
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: Futura, sans-serif;
}
</style>