<template>
  <div class="sidebar bg-pastel-orange text-black p-4 border-r-4 border-black h-full">
    <ul class="sidebar-nav mt-4">
      <li class="mb-0.5 hover:bg-pastel-coral transition-all">
        <a href="#" class="sidebar-link">Dashboard</a>
      </li>
      <li class="mb-0.5 hover:bg-pastel-coral transition-all">
        <a href="#" class="sidebar-link">Add Quote</a>
      </li>
      <li class="mb-0.5 hover:bg-pastel-coral transition-all">
        <a href="#" class="sidebar-link">All Quotes</a>
      </li>
      <li class="mb-0.5 hover:bg-pastel-coral transition-all">
        <a href="#" class="sidebar-link">Analytics</a>
      </li>
      <li class="mb-0.5 hover:bg-pastel-coral transition-all">
        <a href="#" class="sidebar-link">Users</a>
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
  font-weight: bold; /* Make text bold */
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