<template>
  <div class="create-quote-view">
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-container-background p-6 rounded-lg shadow-md w-full max-w-xl">
        <SignUpForm></SignUpForm>
      </div>
    </div>
  </div>
</template>

<script>
import SignUpForm from "@/components/authentication/SignUpForm.vue";

export default {
  name: 'SignUpView',
  components: {SignUpForm },
  data() {
    return {
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