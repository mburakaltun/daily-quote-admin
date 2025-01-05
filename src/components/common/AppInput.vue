<template>
  <input
      :id="id"
      :class="[
      'bg-pastel-light-orange',
      'w-full',
      'p-4',
      'text-black',
      'py-2 px-4',
      'border-t-2',
      'border-l-2',
      'border-black',
      'border-b-2',   // Thicker bottom border
      'border-r-2',    // Thicker right border
      'rounded-none',   // No border radius
      'focus:outline-none',
      'focus:border-b-4',  // Thicker bottom border on focus
      'focus:ring-0',      // Remove the default ring effect
      'box-border'         // Ensure padding and border are included in the total width/height
    ]"
      placeholder="Enter text"
  />
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    id: {
      type: String,
      required: true,
    }
  },
};
</script>

<style scoped>
/* Ensure border and padding don't affect the overall size */
input {
  box-sizing: border-box; /* Include padding and border in the element's total width/height */
}
</style>
