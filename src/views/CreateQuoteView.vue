<template>
  <div class="create-quote-view">
    <CreateQuoteForm> </CreateQuoteForm>
  </div>
</template>

<script>
import CreateQuoteForm from "@/components/quote/CreateQuoteForm.vue";

export default {
  name: 'Dashboard',
  components: {CreateQuoteForm},
};
</script>

<style scoped>
.create-quote-view {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
