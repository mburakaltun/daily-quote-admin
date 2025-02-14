<template>
  <div>
    <form @submit="signUp" class="w-full max-w-xl p-6 rounded-lg mb-8">
      <AppHeading text="Sign Up" size="h3" class="text-center mb-8"></AppHeading>
      <div class="mb-4">
        <AppInputText id="email-input" placeholder="Enter email..." v-model="email" class="w-full"></AppInputText>
      </div>

      <div class="mb-4">
        <AppInputPassword id="password-input" placeholder="Enter password..." v-model="password" class="w-full"></AppInputPassword>
      </div>

      <div class="mb-4">
        <AppInputPassword id="confirm-password-input" placeholder="Confirm password..." v-model="confirmPassword" class="w-full"></AppInputPassword>
      </div>
      <AppButton type="submit" text="Sign Up" class="w-full mt-4"></AppButton>
      <AppButton @click="$emit('close')" text="Close" type="danger" class="w-full mt-4"></AppButton>
    </form>
  </div>
</template>

<script>
import AppInputText from "@/components/common/AppInputText.vue";
import AppButton from "@/components/common/AppButton.vue";
import AppHeading from "@/components/common/AppHeading.vue";
import authenticationService from "@/services/authenticationService.js";
import authenticationUrls from "@/urls/authenticationUrls.js";
import AppInputPassword from "@/components/common/AppInputPassword.vue";
import { useRouter } from 'vue-router';
import routeNames from "@/router/routeNames.js";

export default {
  name: 'SignUpForm',
  components: {
    AppInputText,
    AppInputPassword,
    AppButton,
    AppHeading,
  },
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      router: useRouter()
    };
  },
  methods: {
    async signUp(event) {
      event.preventDefault();
      try {
        const response = await authenticationService.post(authenticationUrls.signUp, {
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword,
        });
        console.log('Response data:', response.data);
        this.$emit('close');
        this.router.push({ name: routeNames.DashboardView });
      } catch (error) {
        console.error('Error:', error);
      }
    },
  },
};
</script>

<style scoped>
</style>