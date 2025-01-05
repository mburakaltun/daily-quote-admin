<script setup>

import AppLabel from "@/components/common/AppLabel.vue";
import AppInput from "@/components/common/AppInput.vue";
import AppButton from "@/components/common/AppButton.vue";
import AppRadioInput from "@/components/common/AppRadioInput.vue";
import AppTextarea from "@/components/common/AppTextArea.vue";
import AppHeading from "@/components/common/AppHeading.vue";
</script>

<template>
  <div class="form-container mb-8 border-2 border-black rounded-lg p-4">
    <AppHeading text="Create New Quote" size="h3"></AppHeading>

    <div class="mb-6">
      <AppLabel inputId="quote" text="Quote" size="medium"></AppLabel>
      <AppTextarea id="quote"></AppTextarea>
    </div>

    <div class="grid grid-cols-4 gap-4 mb-6">
      <div>
        <AppLabel inputId="author-input" text="Author" size="medium"></AppLabel>
        <AppInput id="author-input"></AppInput>
      </div>

      <div>
        <AppLabel text="Quote Type" size="medium" input-id="quoteType"></AppLabel>
        <div class="flex space-x-4">
            <AppRadioInput
                :options="[
                { label: 'West', value: 'west' },
                { label: 'East', value: 'east' }
                ]"
            />
        </div>
      </div>

      <div>
        <AppLabel input-id="category-input" text="Category" size="medium"></AppLabel>
        <AppInput id="category-input"></AppInput>
      </div>

      <div>
        <AppLabel input-id="book-input" text="Book Name" size="medium"></AppLabel>
        <AppInput id="book-input"></AppInput>
      </div>
    </div>

    <AppButton text="Save"></AppButton>
  </div>

</template>

<style scoped>

</style>