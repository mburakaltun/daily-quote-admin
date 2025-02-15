<template>
  <div class="quote-list-container mb-8 border-2 border-black p-4 bg-container-background rounded-lg">
    <AppHeading text="Quote List" size="h3"></AppHeading>
    <table class="w-full border-collapse">
      <thead>
      <tr class="text-black border-b-2 border-black">
        <th class="p-2 font-bold text-app-text" style="width: 10%;">ID</th>
        <th class="p-2 font-bold text-app-text" style="width: 60%;">Quote</th>
        <th class="p-2 font-bold text-app-text" style="width: 15%;">Author</th>
        <th class="p-2 font-bold text-app-text" style="width: 15%;">Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="quote in quotes" :key="quote.id" class="transition-all border-b-2 border-black">
        <td class="p-2 text-app-text text-center">{{ quote.id }}</td>
        <td class="p-2 text-app-text text-center">{{ quote.content }}</td>
        <td class="p-2 text-app-text text-center">{{ quote.authorName }}</td>
        <td class="p-2 text-app-text text-center">
          <div class="flex justify-center space-x-2">
            <AppButton text="Edit" size="small" @click="openEditModal(quote)"></AppButton>
            <AppButton type="danger" text="Delete" size="small"></AppButton>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
  <UpdateQuoteFormModal
      v-model="showEditModal"
      :quote="selectedQuote"
      @quote-updated="fetchQuotes"
  />
</template>

<script>
import AppButton from "@/components/common/AppButton.vue";
import AppHeading from "@/components/common/AppHeading.vue";
import quoteService from '@/services/quoteService.js';
import quoteUrls from "@/urls/quoteUrls.js";
import UpdateQuoteFormModal from "@/components/quote/UpdateQuoteFormModal.vue";

export default {
  components: {
    UpdateQuoteFormModal,
    AppButton,
    AppHeading,
  },

  data() {
    return {
      quotes: [],
      showEditModal: false,
      selectedQuote: null,
    };
  },
  created() {
    this.fetchQuotes();
  },
  methods: {
    async fetchQuotes() {
      const response = await quoteService.get(quoteUrls.getAllQuotes);
      console.log(response);
      this.quotes = response.data.data.quoteDTOList;
    },
    openEditModal(quote) {
      console.log("quote", quote);
      this.selectedQuote = quote;
      this.showEditModal = true;
    },
  },
};
</script>

<style scoped>
table {
  @apply w-full border-collapse rounded-lg;
}
</style>