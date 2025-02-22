<template>
  <AppModal v-model="isOpen">
    <template #header>
      <AppHeading text="Update Quote" size="h3"></AppHeading>
    </template>

    <template #content>
      <form @submit="updateQuote" class="form-container">
        <!-- Quote & Turkish Quote -->
        <div class="grid grid-cols-2 gap-4 mb-6">
          <div>
            <AppLabel inputId="quote" text="Quote" size="medium"></AppLabel>
            <AppTextarea
                id="quote"
                placeholder="Enter your quote here..."
                v-model="formData.content"
            />
          </div>
          <div>
            <AppLabel inputId="turkishQuote" text="Quote (Turkish)" size="medium"></AppLabel>
            <AppTextarea
                id="turkishQuote"
                placeholder="Enter Turkish translation..."
                v-model="formData.contentTr"
            />
          </div>
        </div>

        <!-- Note & Tags -->
        <div class="grid grid-cols-2 gap-4 mb-6">
          <div>
            <AppLabel inputId="note" text="Note" size="medium"></AppLabel>
            <AppTextarea
                id="note"
                placeholder="Enter your note here..."
                rows="2"
                v-model="formData.note"
            />
          </div>
          <div>
            <AppLabel inputId="tags" text="Tags" size="medium"></AppLabel>
            <AppTextarea
                id="tags"
                placeholder="Enter tags (tag1, tag2, ...)"
                rows="2"
                v-model="formData.tagList"
            />
          </div>
        </div>

        <!-- Author, Quote Type, Category -->
        <div class="grid grid-cols-3 gap-4 mb-6">
          <div>
            <AppLabel inputId="author-input" text="Author" size="medium"></AppLabel>
            <AppInputText
                id="author-input"
                placeholder="Enter author name..."
                v-model="formData.authorName"
                :class="{ 'border-red-500': errors.authorName }"
            />
            <p v-if="errors.authorName" class="text-red-500 text-sm mt-1">Author name is required.</p>
          </div>

          <div>
            <AppLabel text="Quote Type" size="medium" input-id="quoteType"></AppLabel>
            <AppDropdown
                id="quoteType"
                :options="[
                  { label: 'West', value: 'West' },
                  { label: 'East', value: 'East' },
                  { label: 'Unknown', value: 'Unknown' },
                ]"
                v-model="formData.quoteTypeName"
                :class="{ 'border-red-500': errors.quoteTypeName }"
            />
            <p v-if="errors.quoteTypeName" class="text-red-500 text-sm mt-1">Quote type is required.</p>
          </div>

          <div>
            <AppLabel input-id="category-input" text="Category" size="medium"></AppLabel>
            <AppInputText
                id="category-input"
                placeholder="Enter category..."
                v-model="formData.quoteCategoryName"
                :class="{ 'border-red-500': errors.quoteCategoryName }"
            />
            <p v-if="errors.quoteCategoryName" class="text-red-500 text-sm mt-1">Category is required.</p>
          </div>
        </div>

        <!-- Book and Source -->
        <div class="grid grid-cols-4 gap-4 mb-6">
          <div>
            <AppLabel input-id="book-input" text="Book Title" size="medium"></AppLabel>
            <AppInputText
                id="book-input"
                placeholder="Enter book title..."
                v-model="formData.bookTitle"
            />
          </div>

          <div class="col-span-3">
            <AppLabel input-id="source-input" text="Source" size="medium"></AppLabel>
            <AppInputText
                id="source-input"
                placeholder="Enter source..."
                v-model="formData.source"
            />
          </div>
        </div>

        <div class="flex items-center gap-2">
          <AppToggle
              v-model="formData.active"
              class="relative inline-flex h-6 w-11 items-center rounded-full"
              :class="formData.active ? 'bg-app-toggle-background' : 'bg-gray-400'"
          >
            <span class="sr-only">Toggle status</span>
            <span
                class="inline-block h-4 w-4 transform rounded-full bg-white transition"
                :class="formData.active ? 'translate-x-6' : 'translate-x-1'"
            ></span>
          </AppToggle>
          <span class="text-sm text-app-text">{{ formData.active ? 'Public' : 'Private' }}</span>
        </div>
      </form>
    </template>

    <template #footer>
      <div class="flex justify-end gap-2">
        <AppButton category="danger" text="Cancel" @click="closeModal"></AppButton>
        <AppButton
            :text="isLoading ? 'Updating...' : 'Update'"
            @click="updateQuote"
            :disabled="isLoading"
        >
          <font-awesome-icon v-if="isLoading" icon="spinner" spin class="mr-2" />
        </AppButton>
      </div>
    </template>
  </AppModal>
</template>

<script>
import AppModal from '@/components/common/AppModal.vue';
import AppLabel from "@/components/common/AppLabel.vue";
import AppInputText from "@/components/common/AppInputText.vue";
import AppButton from "@/components/common/AppButton.vue";
import AppTextarea from "@/components/common/AppTextArea.vue";
import AppHeading from "@/components/common/AppHeading.vue";
import AppDropdown from "@/components/common/AppDropdown.vue";
import AppToggle from "@/components/common/AppToggle.vue";
import quoteUrls from "@/urls/quoteUrls";
import {useToast} from "vue-toastification";
import axiosInstance from "@/services/axiosInstance.js";

export default {
  name: 'UpdateQuoteFormModal',
  components: {
    AppModal,
    AppLabel,
    AppInputText,
    AppButton,
    AppTextarea,
    AppHeading,
    AppDropdown,
    AppToggle,
  },
  props: {
    modelValue: Boolean,
    quote: {
      type: Object,
      required: true
    }
  },
  emits: ['update:modelValue', 'quote-updated'],
  data() {
    return {
      formData: {
        content: '',
        contentTr: '',
        authorName: '',
        quoteCategoryName: '',
        quoteTypeName: '',
        note: '',
        tagList: '',
        bookTitle: '',
        source: '',
        active: true,
      },
      errors: {},
      isLoading: false
    };
  },
  setup() {
    return {toast: useToast()};
  },
  computed: {
    isOpen: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      }
    }
  },
  watch: {
    quote: {
      immediate: true,
      handler(newQuote) {
        if (newQuote) {
          this.formData = {
            content: newQuote.content,
            contentTr: newQuote.contentTr,
            authorName: newQuote.authorName,
            quoteCategoryName: newQuote.quoteCategoryName,
            quoteTypeName: newQuote.quoteTypeName,
            note: newQuote.note,
            tagList: newQuote.tagList?.join(', ') || '',
            bookTitle: newQuote.bookTitle,
            source: newQuote.source,
            active: newQuote.active,
          };
        }
      }
    }
  },
  methods: {
    validateForm() {
      this.errors = {};
      if (!this.formData.authorName.trim()) this.errors.authorName = true;
      if (!this.formData.quoteTypeName) this.errors.quoteTypeName = true;
      if (!this.formData.quoteCategoryName.trim()) this.errors.quoteCategoryName = true;

      return Object.keys(this.errors).length === 0;
    },
    async updateQuote() {
      if (!this.validateForm()) return;

      this.isLoading = true;

      const requestBody = {
        id: this.quote.id,
        content: this.formData.content,
        contentTr: this.formData.contentTr,
        note: this.formData.note,
        tagList: this.formData.tagList,
        authorName: this.formData.authorName,
        bookTitle: this.formData.bookTitle,
        quoteCategoryName: this.formData.quoteCategoryName,
        quoteTypeName: this.formData.quoteTypeName,
        source: this.formData.source,
        active: this.formData.active,
      };

      try {
        await axiosInstance.put(quoteUrls.updateQuote, requestBody);
        this.toast.success('Quote updated successfully');
        this.$emit('quote-updated');
        this.closeModal();
      } catch (error) {
        console.error("Update quote error:", error);
        this.toast.error(error.response?.data?.message || 'Failed to create quote');
      } finally {
        this.isLoading = false;
      }
    },
    closeModal() {
      this.isOpen = false;
    }
  }
};
</script>