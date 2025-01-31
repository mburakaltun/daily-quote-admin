<template>
  <div class="create-quote-view">
    <button @click="showModal = true" class="btn-open-modal">Sign Up</button>
    <button @click="redirectUser()"> redirect </button>
    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-container-background p-6 rounded-lg shadow-md w-full max-w-xl">
        <SignUpForm @close="showModal = false"></SignUpForm>
      </div>
    </div>
  </div>
</template>

<script>
import SignUpForm from "@/components/auth/SignUpForm.vue";
import AppButton from "@/components/common/AppButton.vue";

export default {
  name: 'SignUpView',
  components: {AppButton, SignUpForm },
  data() {
    return {
      showModal: true,
    };
  },
  methods: {
    redirectUser() {
      this.$router.push({name: 'DashboardView'});
    },
  },
};
</script>

<style scoped>
.create-quote-view {
  max-width: 100%;
  margin: 0 auto;
}
</style>