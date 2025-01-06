<template>
  <button
      :type="type"
      :class="[
      'text-white',
      'border-white',
      'rounded-none',
      'hover:bg-app-button-hover-background',
      'focus:outline-none',
      sizeClasses,
      'bg-app-button-background'
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
    size: {
      type: String,
      default: 'medium',
      validator: value => ['small', 'medium', 'large'].includes(value),
    },
    type: {
      type: String,
      default: 'button',
      validator: value => ['button', 'submit', 'reset'].includes(value),
    },
  },
  computed: {
    sizeClasses() {
      switch (this.size) {
        case 'small':
          return 'py-1 px-3 text-sm rounded-md';
        case 'large':
          return 'py-3 px-9 text-lg rounded-xl';
        default:
          return 'py-2 px-6 text-base rounded-lg';
      }
    },
  },
};
</script>