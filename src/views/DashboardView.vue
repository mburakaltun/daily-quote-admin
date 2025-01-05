<template>
  <div class="dashboard">
    <!-- New Quote Form -->
    <CreateQuoteForm>
    </CreateQuoteForm>
    <!-- List of Quotes -->
    <QuoteList> </QuoteList>
    <div class="quote-list">
      <h2 class="text-2xl font-semibold mb-4">List of Quotes</h2>
      <ul class="space-y-4">
        <li class="p-4 border border-black rounded">
          <p>"The journey of a thousand miles begins with one step." – Lao Tzu</p>
        </li>
        <li class="p-4 border border-black rounded">
          <p>"To be, or not to be, that is the question." – William Shakespeare</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/common/AppButton.vue";
import AppLabel from "@/components/common/AppLabel.vue";
import AppInput from "@/components/common/AppInput.vue";
import CreateQuoteForm from "@/components/quote/CreateQuoteForm.vue";

export default {
  name: 'Dashboard',
  components: {CreateQuoteForm, AppInput, AppLabel, AppButton},
};
</script>

<style scoped>
.dashboard {
  max-width: 1200px;
  margin: 0 auto;
}

.quote-list {
  margin-top: 40px;
}
</style>
