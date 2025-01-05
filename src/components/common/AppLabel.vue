<template>
  <label :for="inputId" :class="labelClasses">{{ text }}</label>
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
      default: 'medium',
    },
    inputId: {
      type: String,
      required: true,
    }
  },
  computed: {
    labelClasses() {
      let sizeClass = '';
      if (this.size === 'large') {
        sizeClass = 'text-xl';
      } else if (this.size === 'small') {
        sizeClass = 'text-sm';
      } else {
        sizeClass = 'text-base';
      }

      return `mb-6 text-app-text ${sizeClass}`;
    },
  },
};
</script>