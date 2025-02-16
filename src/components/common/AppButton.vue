<template>
  <button
      :type="type"
      :disabled="disabled"
      :class="[
        'text-white',
        'border-white',
        'focus:outline-none',
        'flex items-center justify-center',
        disabled ? 'opacity-50 cursor-not-allowed' : '',
        sizeClasses,
        bgColorClasses,
      ]"
      @click="handleClick"
  >
    <slot></slot>
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
    category: {
      type: String,
      default: 'primary',
      validator: value => ['primary', 'secondary', 'danger'].includes(value),
    },
    bgColor: {
      type: String,
      default: 'bg-app-button-background',
    },
    onClick: {
      type: Function,
      default: () => {}
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    sizeClasses() {
      switch (this.size) {
        case 'small':
          return 'py-1 px-3 text-sm rounded-sm';
        case 'large':
          return 'py-3 px-9 text-lg rounded-lg';
        default:
          return 'py-2 px-6 text-base rounded-md';
      }
    },
    bgColorClasses() {
      if (this.category === 'danger') {
        return 'bg-app-button-danger-background hover:bg-app-button-danger-hover-background';
      }
      return `${this.bgColor} hover:bg-app-button-hover-background`;
    },
  },
  methods: {
    handleClick(event) {
      if (!this.disabled) {
        this.onClick(event);
      }
    }
  }
};
</script>