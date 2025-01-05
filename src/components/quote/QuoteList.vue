<template>
  <div class="quote-list-container mb-8 border-2 border-black p-4 bg-container-background">
    <AppHeading text="Quote List" size="h3"></AppHeading>
    <table class="w-full border-collapse">
      <thead>
      <tr class="text-black border-b-2 border-black">
        <th class="p-2 font-bold text-app-text">Author</th>
        <th class="p-2 font-bold text-app-text">Quote</th>
        <th class="p-2 font-bold text-app-text">Quote Type</th>
        <th class="p-2 font-bold text-app-text">Category</th>
        <th class="p-2 font-bold text-app-text">Book Name</th>
        <th class="p-2 font-bold text-app-text">Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="quote in quotes" :key="quote.id" class="transition-all border-b-2 border-black">
        <td class="p-2 text-app-text text-center">{{ quote.author }}</td>
        <td class="p-2 text-app-text text-center">{{ quote.text }}</td>
        <td class="p-2 text-app-text text-center">{{ quote.type }}</td>
        <td class="p-2 text-app-text text-center">{{ quote.category }}</td>
        <td class="p-2 text-app-text text-center">{{ quote.book }}</td>
        <td class="p-2 text-app-text text-center">
          <div class="flex justify-center space-x-2">
            <AppButton text="Edit" size="small"> </AppButton>
            <AppButton text="Delete" size="small"> </AppButton>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AppButton from "@/components/common/AppButton.vue";
import AppHeading from "@/components/common/AppHeading.vue";

const quotes = ref([
  { id: 1, author: 'Author 1', text: 'Quote 1', type: 'West', category: 'Category 1', book: 'Book 1' },
  { id: 2, author: 'Author 2', text: 'Quote 2', type: 'East', category: 'Category 2', book: 'Book 2' },
]);
</script>

<style scoped>
table {
  @apply w-full border-collapse rounded-lg;
}
</style>