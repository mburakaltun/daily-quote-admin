<template>
  <div v-if="modelValue" class="fixed inset-0 z-50 flex items-center justify-center">
    <div class="fixed inset-0 bg-black opacity-50"></div>
    <div class="relative bg-container-background rounded-lg p-6 w-96 shadow-xl">
      <h3 class="text-lg font-semibold text-app-header mb-4">{{ title }}</h3>
      <p class="text-app-text mb-6">{{ message }}</p>
      <div class="flex justify-end space-x-3">
        <AppButton
            text="Cancel"
            size="small"
            @click="$emit('update:modelValue', false)"
        />
        <AppButton
            text="Delete"
            type="danger"
            size="small"
            @click="confirm"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from './AppButton.vue';

export default {
  name: 'ConfirmDialog',
  components: { AppButton },
  props: {
    modelValue: Boolean,
    title: {
      type: String,
      default: 'Confirm Action'
    },
    message: {
      type: String,
      default: 'Are you sure you want to proceed?'
    }
  },
  emits: ['update:modelValue', 'confirm'],
  methods: {
    confirm() {
      this.$emit('confirm');
      this.$emit('update:modelValue', false);
    }
  }
};
</script>