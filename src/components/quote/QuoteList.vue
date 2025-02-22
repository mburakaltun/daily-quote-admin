<template>
  <div class="quote-list-container mb-8 border-2 border-black p-4 bg-container-background rounded-lg">
    <AppHeading text="Quote List" size="h3"></AppHeading>
    <div v-if="isLoading" class="flex justify-center items-center p-8">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-app-text"></div>
    </div>
    <table v-else class="w-full border-collapse">
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
import quoteUrls from "@/urls/quoteUrls.js";
import UpdateQuoteFormModal from "@/components/quote/UpdateQuoteFormModal.vue";
import ConfirmDialog from "@/components/common/AppConfirmDialog.vue";
import {useToast} from "vue-toastification";
import axiosInstance from "@/services/axiosInstance.js";

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
      isLoading: false,
    };
  },
  created() {
    this.fetchQuotes();
  },
  methods: {
    async fetchQuotes() {
      try {
        this.isLoading = true;
        const response = await axiosInstance.get(quoteUrls.getAllQuotes);
        this.quotes = response.data.data.quoteDTOList;
      } catch (error) {
        this.toast.error('Failed to fetch quotes');
      } finally {
        this.isLoading = false;
      }
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
        await axiosInstance.delete(`${quoteUrls.deleteQuote}/${this.quoteToDelete.id}`);
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