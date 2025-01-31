<template>
  <div class="relative">
    <div
        class="bg-input-background w-full p-2 text-black border-2 border-black cursor-pointer"
        @click="toggleDropdown"
    >
      {{ selected.length > 0 ? selected.map((s) => getOptionLabel(s)).join(', ') : defaultOption }}
    </div>

    <div
        v-if="isOpen"
        class="absolute w-full bg-input-background border-2 border-black text-black z-10"
    >
      <div
          v-for="option in options"
          :key="option.value"
          class="px-4 py-2 cursor-pointer hover:bg-gray-200 flex items-center gap-2"
          @click="toggleSelection(option.value)"
      >
        <AppInputCheckbox
            :id="option.value"
            :checked="selected.includes(option.value)"
            @change="toggleSelection(option.value)"
            :value="option.value"
        />
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<script>
import AppInputCheckbox from './AppInputCheckbox.vue';

export default {
  name: 'AppInputDropdown',
  components: { AppInputCheckbox },
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
      type: Array,
      default: () => [],
    },
    defaultOption: {
      type: String,
      default: 'Please select',
    },
  },
  data() {
    return {
      isOpen: false,
      selected: [...this.modelValue],
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    toggleSelection(value) {
      if (this.selected.includes(value)) {
        this.selected = this.selected.filter((v) => v !== value);
      } else {
        this.selected.push(value);
      }
      this.$emit('update:modelValue', this.selected);
    },
    getOptionLabel(value) {
      const option = this.options.find((opt) => opt.value === value);
      return option ? option.label : value;
    },
  },
  watch: {
    modelValue(newValue) {
      this.selected = [...newValue];
    },
  },
};
</script>

<style scoped>
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
</style>