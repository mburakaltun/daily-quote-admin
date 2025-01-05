<template>
  <div class="relative">
    <select
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
        'focus:ring-0',
        'box-border',
        'focus:shadow-outline'
      ]"
        v-model="selected"
    >
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'AppDropdown',
  props: {
    id: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      selected: this.modelValue,
    };
  },
  watch: {
    selected(newValue) {
      this.$emit('update:modelValue', newValue);
    },
  },
};
</script>

<style scoped>
select {
  box-sizing: border-box;
}

.relative {
  position: relative;
}

select:focus {
  background-color: #fff3e0; /* Change background color on focus */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); /* Add box shadow on focus */
}
</style>