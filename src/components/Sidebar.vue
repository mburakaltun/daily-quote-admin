<template>
  <div class="sidebar bg-container-background text-white p-4 border-r-4 border-black h-full">
    <ul class="sidebar-nav mt-4">
      <li class="mb-0.5 hover:bg-pastel-coral transition-all">
        <router-link to="/" class="sidebar-link">
          <font-awesome-icon icon="tachometer-alt" class="mr-2" /> Dashboard
        </router-link>
      </li>
      <li class="mb-0.5 hover:bg-pastel-coral transition-all">
        <router-link to="/createQuote" class="sidebar-link">
          <font-awesome-icon icon="plus-circle" class="mr-2" /> Create Quote
        </router-link>
      </li>
      <li class="mb-0.5 hover:bg-pastel-coral transition-all">
        <router-link to="/allQuotes" class="sidebar-link">
          <font-awesome-icon icon="list" class="mr-2" /> All Quotes
        </router-link>
      </li>
      <li class="mb-0.5 hover:bg-pastel-coral transition-all">
        <a href="#" class="sidebar-link">
          <font-awesome-icon icon="chart-line" class="mr-2" /> Analytics
        </a>
      </li>
      <li class="mb-0.5 hover:bg-pastel-coral transition-all">
        <a href="#" class="sidebar-link">
          <font-awesome-icon icon="users" class="mr-2" /> Users
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>

<style scoped>
.sidebar {
  width: 250px;  /* Fixed width */
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 100;
}

.sidebar-nav {
  list-style: none;
  padding: 0;
}

.sidebar-link {
  text-decoration: none;
  font-size: 1rem;
  transition: font-weight 0.3s ease; /* Smooth transition */
  display: flex;
  align-items: center;
}

li {
  display: block;
  padding: 10px;
  border-radius: 8px; /* Add border radius */
}
</style>