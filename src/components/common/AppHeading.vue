<template>
  <component :is="headingTag" :class="headingClasses">{{ text }}</component>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'h1',
      validator: value => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value),
    },
  },
  computed: {
    headingTag() {
      return this.size;
    },
    headingClasses() {
      let sizeClass = '';
      switch (this.size) {
        case 'h1':
          sizeClass = 'text-4xl';
          break;
        case 'h2':
          sizeClass = 'text-3xl';
          break;
        case 'h3':
          sizeClass = 'text-2xl';
          break;
        case 'h4':
          sizeClass = 'text-xl';
          break;
        case 'h5':
          sizeClass = 'text-lg';
          break;
        case 'h6':
          sizeClass = 'text-base';
          break;
      }

      return `font-bold text-anthracite ${sizeClass} mb-4`;
    },
  },
};
</script>