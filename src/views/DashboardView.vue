<template>
  <div class="dashboard">
    <CreateQuoteForm @quote-created="refreshQuotes"></CreateQuoteForm>
    <QuoteList ref="quoteList"></QuoteList>
  </div>
</template>

<script>
import CreateQuoteForm from "@/components/quote/CreateQuoteForm.vue";
import QuoteList from "@/components/quote/QuoteList.vue";

export default {
  name: 'AdminDashboard',
  components: {QuoteList, CreateQuoteForm},
  methods: {
    refreshQuotes() {
      this.$refs.quoteList.fetchQuotes();
    }
  }
};
</script>

<style scoped>
.dashboard {
  max-width: 100%;
  margin: 0 auto;
}
</style>
