<template>
  <div class="flex h-screen">
    <Sidebar />
    <div class="flex-1 bg-amber-100 p-8 overflow-auto ml-[250px]">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: Futura, sans-serif;
}
</style>
