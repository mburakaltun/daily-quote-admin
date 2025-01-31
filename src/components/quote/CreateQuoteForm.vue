<template>
  <div id="main-container" class="mb-8 border-2 border-black p-4 bg-container-background rounded-lg">
    <form @submit="createQuote" class="form-container">
      <AppHeading text="Create New Quote" size="h3"></AppHeading>

      <div class="grid grid-cols-2 gap-4 mb-6">
        <div>
          <AppLabel inputId="quote" text="Quote" size="medium"></AppLabel>
          <AppTextarea id="quote" placeholder="Enter your quote here..." v-model="content"></AppTextarea>
        </div>
        <div>
          <AppLabel inputId="turkishQuote" text="Quote (Turkish)" size="medium"></AppLabel>
          <AppTextarea id="turkishQuote" placeholder="Enter Turkish translation of the quote here..." v-model="contentTr"></AppTextarea>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 mb-6">
        <div>
          <AppLabel inputId="note" text="Note" size="medium"></AppLabel>
          <AppTextarea id="note" placeholder="Enter your note here..." rows="2" v-model="note"></AppTextarea>
        </div>

        <div>
          <AppLabel inputId="tags" text="Tags" size="medium"></AppLabel>
          <AppTextarea id="note" placeholder="Enter your tags here by comma seperated (tag1, tag2, ...)" rows="2" v-model="tagNameList"></AppTextarea>
        </div>
      </div>

      <div class="grid grid-cols-4 gap-4 mb-6">
        <div>
          <AppLabel inputId="author-input" text="Author" size="medium"></AppLabel>
          <AppInputText id="author-input" placeholder="Enter author name..." v-model="authorName"></AppInputText>
        </div>

        <div>
          <AppLabel input-id="book-input" text="Book Name" size="medium"></AppLabel>
          <AppInputText id="book-input" placeholder="Enter book name..." v-model="bookName"></AppInputText>
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
          />
        </div>

        <div>
          <AppLabel input-id="category-input" text="Category" size="medium"></AppLabel>
          <AppInputText id="category-input" placeholder="Enter category..." v-model="quoteCategoryName"></AppInputText>
        </div>
      </div>

      <AppButton type="submit" text="Save"></AppButton>
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
import AppInputDropdown from "@/components/common/AppInputDropdown.vue";
import authenticationService from "@/services/authenticationService.js";
import authenticationUrls from "@/urls/authenticationUrls.js";
import appConstants from "@/constants/appConstants.js";
import routeNames from "@/router/routeNames.js";

export default {
  name: 'CreateQuoteForm',
  components: {
    AppInputDropdown,
    AppLabel,
    AppInputText,
    AppButton,
    AppTextarea,
    AppHeading,
    AppDropdown,
  },
  data() {
    return {
      content: '',
      contentTr: '',
      authorName: '',
      quoteCategoryName: '',
      bookName: '',
      quoteTypeName: '',
      note: '',
      tagNameList: '',
    };
  },
  methods: {
    async createQuote(event) {
      event.preventDefault();

      const requestBody = {
        content: this.content,
        contentTr: this.contentTr,
        note: this.note,
        tagNameList: this.tagNameList,

        authorName: this.authorName,
        bookName: this.bookName,
        quoteCategoryName: this.quoteCategoryName,
        quoteTypeName: this.quoteTypeName,
      };
      await quoteService.post(quoteUrls.createQuote, requestBody).then((response) => {
        console.log('Response data:', response);
      }).catch((error) => {
        console.log(error);
        throw error;
      })
    },
  },
};
</script>

<style scoped>

</style>