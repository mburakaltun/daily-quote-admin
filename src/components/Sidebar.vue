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
      <template v-for="item in bottomItems" :key="item.text">
        <router-link v-if="item.text !== 'Logout'" :to="item.to" class="block mb-0.5 hover:bg-app-li-hover-background hover:rounded-lg transition-all p-3 text-base text-app-text">
          <li class="flex items-center">
            <font-awesome-icon :icon="item.icon" class="mr-2" /> {{ item.text }}
          </li>
        </router-link>
        <button v-else @click="handleLogout" class="w-full text-left block mb-0.5 hover:bg-app-li-hover-background hover:rounded-lg transition-all p-3 text-base text-app-text">
          <li class="flex items-center">
            <font-awesome-icon :icon="item.icon" class="mr-2" /> {{ item.text }}
          </li>
        </button>
      </template>
    </ul>
  </div>
</template>

<script>
import { useAuth } from '@/composables/useAuth';

export default {
  name: 'SidebarNav',
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
  setup() {
    const { handleLogout } = useAuth();
    return { handleLogout };
  },
};
</script>