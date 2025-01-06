<template>
  <div class="flex h-screen">
    <Sidebar :top-items="topSidebarItems" :bottom-items="bottomSidebarItems" class="flex-[1]" />
    <div class="flex-[5] bg-app-background p-8 overflow-auto">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import { topSidebarItems, bottomSidebarItems } from './config/sidebarItems';

export default {
  name: 'App',
  components: {
    Sidebar,
  },
  data() {
    return {
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