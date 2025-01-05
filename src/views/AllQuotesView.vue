<template>
  <div class="all-quotes-view">
    <QuoteList> </QuoteList>
  </div>
</template>

<script>
import QuoteList from "@/components/quote/QuoteList.vue";

export default {
  name: 'All Quotes',
  components: {QuoteList},
};
</script>

<style scoped>
.all-quotes-view {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
