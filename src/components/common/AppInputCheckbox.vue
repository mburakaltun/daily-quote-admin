<template>
  <div class="relative">
    <input
        type="checkbox"
        :id="id"
        :class="[
        'bg-input-background',
        'w-full',
        'p-4',
        'text-black',
        'py-2 px-4',
        'border-t-2',
        'border-l-2',
        'border-black',
        'border-b-2',
        'border-r-2',
        'rounded-none',
        'focus:outline-none',
        'focus:border-input-focus-border',
        'focus:border-2',
        'focus:ring-0',
        'box-border',
        'focus:shadow-outline',
        'rounded-lg'
      ]"
        :value="value"
        :checked="checked"
        @change="$emit('change', $event.target.checked)"
    />
  </div>
</template>

<script>
export default {
  name: 'AppInputCheckbox',
  props: {
    id: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
input {
  box-sizing: border-box;
}

.relative {
  position: relative;
}

input::placeholder {
  color: #777777;
  font-style: italic;
}

input:focus {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}
</style>