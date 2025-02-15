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
            <AppButton category="danger" text="Delete" size="small" @click="confirmDelete(quote)"></AppButton>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    <ConfirmDialog
        v-model="showDeleteConfirm"
        title="Delete Quote"
        message="Are you sure you want to delete this quote?"
        @confirm="deleteQuote"
    />
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
import ConfirmDialog from "@/components/common/AppConfirmDialog.vue";
import {useToast} from "vue-toastification";

export default {
  components: {
    ConfirmDialog,
    UpdateQuoteFormModal,
    AppButton,
    AppHeading,
  },

  data() {
    return {
      toast: useToast(),
      quotes: [],
      showDeleteConfirm: false,
      quoteToDelete: null,
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
    confirmDelete(quote) {
      this.quoteToDelete = quote;
      this.showDeleteConfirm = true;
    },
    async deleteQuote() {
      try {
        await quoteService.delete(`${quoteUrls.deleteQuote}/${this.quoteToDelete.id}`);
        this.toast.success('Quote deleted successfully');
        await this.fetchQuotes();
      } catch (error) {
        this.toast.error('Failed to delete quote');
      }
      this.quoteToDelete = null;
    },
  },
};
</script>

<style scoped>
table {
  @apply w-full border-collapse rounded-lg;
}
</style>