<template>
  <button
      :class="[
      'bg-pastel-orange',
      'font-bold',
      'text-black',
      'py-2 px-4',
      'border-black',
      'border-t-2',
      'border-l-2',
      'border-b-4',
      'border-r-2',
      'rounded-none',
      'hover:bg-pastel-coral',
      'focus:outline-none',
    ]"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
