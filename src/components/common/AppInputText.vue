<template>
  <div class="relative">
    <input
        :type="inputType"
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
        'focus:outline-none',
        'focus:border-input-focus-border',
        'focus:border-2',
        'focus:ring-0',
        'box-border',
        'focus:shadow-outline',
        'rounded-md'
      ]"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    />
    <span class="focus-border"></span>
  </div>
</template>

<script>
export default {
  name: 'AppInputText',
  props: {
    id: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: 'Type something...',
    },
    modelValue: {
      type: String,
      default: '',
    },
    inputType: {
      type: String,
      default: 'text',
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
  font-style: italic; /* Make placeholder text italic */
}

input:focus {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); /* Add box shadow on focus */
}
</style>