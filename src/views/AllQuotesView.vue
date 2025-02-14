<template>
  <div class="all-quotes-view">
    <QuoteList> </QuoteList>
  </div>
</template>

<script>
import QuoteList from "@/components/quote/QuoteList.vue";

export default {
  name: 'AllQuotesView',
  components: {QuoteList},
};
</script>

<style scoped>
.all-quotes-view {
  max-width: 100%;
  margin: 0 auto;
}
</style>
