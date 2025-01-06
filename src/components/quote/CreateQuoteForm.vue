<script setup>
import AppLabel from "@/components/common/AppLabel.vue";
import AppInput from "@/components/common/AppInput.vue";
import AppButton from "@/components/common/AppButton.vue";
import AppTextarea from "@/components/common/AppTextArea.vue";
import AppHeading from "@/components/common/AppHeading.vue";
import AppDropdown from "@/components/common/AppDropdown.vue";

const handleSubmit = (event) => {
  event.preventDefault();
  // Handle form submission logic here
};
</script>

<template>
  <div id="main-container" class="mb-8 border-2 border-black p-4 bg-container-background rounded-lg">
    <form @submit="handleSubmit" class="form-container">
      <AppHeading text="Create New Quote" size="h3"></AppHeading>

      <div class="mb-6">
        <AppLabel inputId="quote" text="Quote" size="medium"></AppLabel>
        <AppTextarea id="quote" placeholder="Enter your quote here..."></AppTextarea>
      </div>

      <div class="grid grid-cols-4 gap-4 mb-6">
        <div>
          <AppLabel inputId="author-input" text="Author" size="medium"></AppLabel>
          <AppInput id="author-input" placeholder="Enter author name..."></AppInput>
        </div>

        <div>
          <AppLabel text="Quote Type" size="medium" input-id="quoteType"></AppLabel>
          <AppDropdown
              id="quoteType"
              :options="[
            { label: 'West', value: 'west' },
            { label: 'East', value: 'east' }
          ]"
          />
        </div>

        <div>
          <AppLabel input-id="category-input" text="Category" size="medium"></AppLabel>
          <AppInput id="category-input" placeholder="Enter category..."></AppInput>
        </div>

        <div>
          <AppLabel input-id="book-input" text="Book Name" size="medium"></AppLabel>
          <AppInput id="book-input" placeholder="Enter book name..."></AppInput>
        </div>
      </div>

      <AppButton type="submit" text="Save"></AppButton>
    </form>
  </div>
</template>

<style scoped>

</style>