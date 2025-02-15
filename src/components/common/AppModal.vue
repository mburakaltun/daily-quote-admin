<template>
  <Transition name="modal">
    <div v-if="modelValue" class="fixed inset-0 z-50 overflow-y-auto" role="dialog">
      <div class="flex min-h-screen items-center justify-center p-4">
        <!-- Backdrop -->
        <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity" @click="close"></div>

        <!-- Modal -->
        <div class="relative bg-container-background rounded-lg shadow-xl w-full max-w-2xl">
          <!-- Header -->
          <div class="px-6 py-4 border-b border-gray-700">
            <slot name="header"></slot>
          </div>

          <!-- Content -->
          <div class="px-6 py-4">
            <slot name="content"></slot>
          </div>

          <!-- Footer -->
          <div class="px-6 py-4 border-t border-gray-700">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'AppModal',
  props: {
    modelValue: {
      type: Boolean,
      required: true
    }
  },
  emits: ['update:modelValue'],
  methods: {
    close() {
      this.$emit('update:modelValue', false);
    }
  }
};
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>