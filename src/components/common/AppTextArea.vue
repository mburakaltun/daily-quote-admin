<template>
  <div class="relative">
    <textarea
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
        'focus:ring-0',
        'focus:border-input-focus-border',
        'focus:border-2',
        'box-border',
        'focus:shadow-outline',
        'rounded-lg'
      ]"
        :rows="rows"
        :placeholder="placeholder"
    ></textarea>
    <span class="focus-border"></span>
  </div>
</template>

<script>
export default {
  name: 'AppTextarea',
  props: {
    id: {
      type: String,
      required: true,
    },
    rows: {
      type: Number,
      default: 4,
    },
    placeholder: {
      type: String,
      default: 'type something...',
    },
  },
};
</script>

<style scoped>
textarea {
  box-sizing: border-box; /* Include padding and border in the element's total width/height */
}

.relative {
  position: relative;
}

textarea::placeholder {
  color: #777777;
  font-style: italic;
}

textarea:focus {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); /* Add box shadow on focus */
}
</style>