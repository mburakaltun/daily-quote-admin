<template>
  <div class="create-quote-view">
    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-container-background p-6 rounded-lg shadow-md w-full max-w-xl">
        <SignUpForm @close="showModal = false"></SignUpForm>
      </div>
    </div>
  </div>
</template>

<script>
import SignUpForm from "@/components/authentication/SignUpForm.vue";
import AppButton from "@/components/common/AppButton.vue";

export default {
  name: 'SignUpView',
  components: {AppButton, SignUpForm },
  data() {
    return {
      showModal: true,
    };
  },
};
</script>

<style scoped>
.create-quote-view {
  max-width: 100%;
  margin: 0 auto;
}
</style>