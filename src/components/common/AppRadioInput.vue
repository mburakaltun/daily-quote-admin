<template>
  <div class="flex items-center space-x-4">
    <label
        v-for="option in options"
        :key="option.value"
        class="radio-label flex items-center cursor-pointer"
    >
      <input
          type="radio"
          :value="option.value"
          v-model="selected"
          class="hidden"
      />
      <div
          class="radio-custom w-6 h-6 border-2 border-black bg-pastel-light-orange flex-shrink-0"
          :class="{ 'bg-black': selected === option.value }"
      ></div>
      <span class="ml-2 text-black font-bold">{{ option.label }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'AppRadioInput',
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
  computed: {
    selected: {

    },
  },
};
</script>

<style scoped>
.radio-label {
  display: flex;
  align-items: center;
}

.radio-custom {
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.radio-custom:hover {
  transform: scale(1.1);
  border-color: #000;
}
</style>
