<template>
  <div :class="cardClasses" class="border-2 border-black rounded-sm p-6">
    <h3 class="font-bold text-xl text-black">{{ title }}</h3>
    <p class="text-black">{{ content }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'medium',
    },
  },
  computed: {
    cardClasses() {
      let sizeClass = '';
      if (this.size === 'large') {
        sizeClass = 'text-xl';
      } else if (this.size === 'small') {
        sizeClass = 'text-sm';
      } else {
        sizeClass = 'text-base';
      }

      return `bg-pastel-light-orange ${sizeClass}`;
    },
  },
};
</script>
