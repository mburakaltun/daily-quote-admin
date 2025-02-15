<template>
  <button
      type="button"
      :class="$attrs.class"
      @click="toggle"
      role="switch"
      :aria-checked="modelValue"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'AppToggle',
  props: {
    modelValue: {
      type: Boolean,
      required: true
    }
  },
  emits: ['update:modelValue'],
  methods: {
    toggle() {
      this.$emit('update:modelValue', !this.modelValue)
    }
  }
}
</script>