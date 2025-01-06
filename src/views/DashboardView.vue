<template>
  <div class="dashboard">
    <CreateQuoteForm> </CreateQuoteForm>
    <QuoteList> </QuoteList>
  </div>
</template>

<script>
import CreateQuoteForm from "@/components/quote/CreateQuoteForm.vue";
import QuoteList from "@/components/quote/QuoteList.vue";

export default {
  name: 'Dashboard',
  components: {QuoteList, CreateQuoteForm},
};
</script>

<style scoped>
.dashboard {
  max-width: 100%;
  margin: 0 auto;
}
</style>
