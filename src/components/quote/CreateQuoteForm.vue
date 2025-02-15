<template>
  <div id="main-container" class="mb-8 border-2 border-black p-4 bg-container-background rounded-lg">
    <form @submit="createQuote" class="form-container">
      <AppHeading text="Create New Quote" size="h3"></AppHeading>

      <!-- Quote & Turkish Quote -->
      <div class="grid grid-cols-2 gap-4 mb-6">
        <div>
          <AppLabel inputId="quote" text="Quote" size="medium"></AppLabel>
          <AppTextarea
              id="quote"
              placeholder="Enter your quote here..."
              v-model="content"
              :class="{ 'border-red-500': errors.content }"
          />
          <p v-if="errors.content" class="text-red-500 text-sm mt-1">Quote is required.</p>
        </div>
        <div>
          <AppLabel inputId="turkishQuote" text="Quote (Turkish)" size="medium"></AppLabel>
          <AppTextarea
              id="turkishQuote"
              placeholder="Enter Turkish translation..."
              v-model="contentTr"
              :class="{ 'border-red-500': errors.contentTr }"
          />
          <p v-if="errors.contentTr" class="text-red-500 text-sm mt-1">Turkish quote is required.</p>
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
              v-model="note"
          />
        </div>
        <div>
          <AppLabel inputId="tags" text="Tags" size="medium"></AppLabel>
          <AppTextarea
              id="tags"
              placeholder="Enter tags (tag1, tag2, ...)"
              rows="2"
              v-model="tagNameList"
          />
          <p v-if="errors.tagNameList" class="text-red-500 text-sm mt-1">Tags are required.</p>
        </div>
      </div>

      <!-- Author, Quote Type, Category -->
      <div class="grid grid-cols-3 gap-4 mb-6">
        <div>
          <AppLabel inputId="author-input" text="Author" size="medium"></AppLabel>
          <AppInputText
              id="author-input"
              placeholder="Enter author name..."
              v-model="authorName"
              :class="{ 'border-red-500': errors.authorName }"
          />
          <p v-if="errors.authorName" class="text-red-500 text-sm mt-1">Author name is required.</p>
        </div>

        <div>
          <AppLabel text="Quote Type" size="medium" input-id="quoteType"></AppLabel>
          <AppDropdown
              id="quoteType"
              :options="[
        { label: 'West', value: 'west' },
        { label: 'East', value: 'east' },
        { label: 'Unknown', value: 'unknown' },
      ]"
              v-model="quoteTypeName"
              :class="{ 'border-red-500': errors.quoteTypeName }"
          />
          <p v-if="errors.quoteTypeName" class="text-red-500 text-sm mt-1">Quote type is required.</p>
        </div>

        <div>
          <AppLabel input-id="category-input" text="Category" size="medium"></AppLabel>
          <AppInputText
              id="category-input"
              placeholder="Enter category..."
              v-model="quoteCategoryName"
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
              v-model="bookTitle"
              :class="{ 'border-red-500': errors.bookTitle }"
          />
        </div>

        <div class="col-span-3">
          <AppLabel input-id="source-input" text="Source" size="medium"></AppLabel>
          <AppInputText
              id="source-input"
              placeholder="Enter source..."
              v-model="source"
              :class="{ 'border-red-500': errors.source }"
          />
        </div>
      </div>

      <div class="flex justify-between items-center">
        <div class="flex items-center gap-2">
          <AppToggle
              v-model="isPublic"
              class="relative inline-flex h-6 w-11 items-center rounded-full"
              :class="isPublic ? 'bg-app-toggle-background' : 'bg-gray-400'"
          >
            <span class="sr-only">Toggle status</span>
            <span
                class="inline-block h-4 w-4 transform rounded-full bg-white transition"
                :class="isPublic ? 'translate-x-6' : 'translate-x-1'"
            ></span>
          </AppToggle>
          <span class="text-sm text-app-text">{{ isPublic ? 'Public' : 'Private' }}</span>
        </div>
        <div class="flex gap-2">
          <AppButton
              type="danger"
              text="Reset"
              @click="resetForm"
          ></AppButton>
          <AppButton type="submit" text="Save"></AppButton>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import AppLabel from "@/components/common/AppLabel.vue";
import AppInputText from "@/components/common/AppInputText.vue";
import AppButton from "@/components/common/AppButton.vue";
import AppTextarea from "@/components/common/AppTextArea.vue";
import AppHeading from "@/components/common/AppHeading.vue";
import AppDropdown from "@/components/common/AppDropdown.vue";
import quoteService from "@/services/quoteService";
import quoteUrls from "@/urls/quoteUrls";
import {useToast} from "vue-toastification";
import AppToggle from "@/components/common/AppToggle.vue";

export default {
  name: 'CreateQuoteForm',
  components: {
    AppLabel,
    AppInputText,
    AppButton,
    AppTextarea,
    AppHeading,
    AppDropdown,
    AppToggle,
  },
  data() {
    return {
      content: '',
      contentTr: '',
      authorName: '',
      quoteCategoryName: '',
      quoteTypeName: '',
      note: '',
      tagNameList: '',
      bookTitle: '',
      source: '',
      isPublic: true,
      errors: {}
    };
  },
  setup() {
    return {toast: useToast()};
  },
  methods: {
    validateForm() {
      this.errors = {};

      if (!this.content.trim()) this.errors.content = true;
      if (!this.contentTr.trim()) this.errors.contentTr = true;
      if (!this.authorName.trim()) this.errors.authorName = true;
      if (!this.quoteTypeName) this.errors.quoteTypeName = true;
      if (!this.quoteCategoryName.trim()) this.errors.quoteCategoryName = true;

      console.log('Errors:', this.errors);
      return Object.keys(this.errors).length === 0;
    },
    async createQuote(event) {
      event.preventDefault();

      if (!this.validateForm()) return;

      const requestBody = {
        content: this.content,
        contentTr: this.contentTr,
        note: this.note,
        tagNameList: this.tagNameList,
        authorName: this.authorName,
        bookTitle: this.bookTitle,
        quoteCategoryName: this.quoteCategoryName,
        quoteTypeName: this.quoteTypeName,
        quoteSource: this.source,
        status: this.isPublic ? 1 : 0,
      };

      try {
        const response = await quoteService.post(quoteUrls.createQuote, requestBody);
        console.log('Response:', response);
        this.toast.success('Quote created successfully.');
        this.$emit('quote-created');
        this.resetForm();
      } catch (error) {
        console.log(error);
        this.toast.error('Failed to create quote.');
      }
    },
    resetForm() {
      this.content = '';
      this.contentTr = '';
      this.authorName = '';
      this.quoteCategoryName = '';
      this.bookTitle = '';
      this.quoteTypeName = '';
      this.note = '';
      this.tagNameList = '';
      this.source = '';
      this.isPublic = true;
      this.errors = {};
    },
  },
};
</script>

<style scoped>
</style>