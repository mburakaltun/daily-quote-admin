<template>
  <div class="create-quote-view">
    <CreateQuoteForm> </CreateQuoteForm>
  </div>
</template>

<script>
import CreateQuoteForm from "@/components/quote/CreateQuoteForm.vue";

export default {
  name: 'CreateQuoteView',
  components: {CreateQuoteForm},
};
</script>

<style scoped>
.create-quote-view {
  max-width: 100%;
  margin: 0 auto;
}
</style>
