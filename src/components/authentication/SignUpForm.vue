<template>
  <div>
    <form @submit="signUp" class="w-full max-w-xl p-6 rounded-lg mb-8">
      <AppHeading text="Sign Up" size="h3" class="text-center mb-8"></AppHeading>
      <div class="mb-4">
        <AppInputText
            id="email-input"
            placeholder="Enter email..."
            v-model="email"
            :class="{ 'border-red-500': errors.email }"
            class="w-full"
        ></AppInputText>
        <p v-if="errors.email" class="text-red-500 text-sm mt-1">Email is required.</p>
      </div>

      <div class="mb-4">
        <AppInputPassword
            id="password-input"
            placeholder="Enter password..."
            v-model="password"
            :class="{ 'border-red-500': errors.password }"
            class="w-full"
        ></AppInputPassword>
        <p v-if="errors.password" class="text-red-500 text-sm mt-1">Password is required.</p>
      </div>

      <div class="mb-4">
        <AppInputPassword
            id="confirm-password-input"
            placeholder="Confirm password..."
            v-model="confirmPassword"
            :class="{ 'border-red-500': errors.confirmPassword || errors.passwordMatch }"
            class="w-full"
        ></AppInputPassword>
        <p v-if="errors.confirmPassword" class="text-red-500 text-sm mt-1">Password confirmation is required.</p>
        <p v-if="errors.passwordMatch" class="text-red-500 text-sm mt-1">Passwords do not match.</p>
      </div>

      <AppButton
          type="submit"
          :text="isLoading ? 'Signing up...' : 'Sign Up'"
          class="w-full mt-4"
          :disabled="isLoading"
      >
        <font-awesome-icon v-if="isLoading" icon="spinner" spin class="mr-2" />
      </AppButton>

      <div class="mt-4 text-center">
        <span class="text-app-text">Already have an account ? </span>
        <a
            href="#"
            @click.prevent="handleSignInClick"
            class="text-app-link-text hover:text-app-link-hover-text"
        >
          Sign In
        </a>
      </div>
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
import redirect from "@/services/redirect.js";
import {useToast} from "vue-toastification";

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
      router: useRouter(),
      isLoading: false,
      errors: {}
    };
  },
  setup() {
    return {toast: useToast()};
  },
  methods: {
    validateForm() {
      this.errors = {};
      if (!this.email.trim()) this.errors.email = 'Email is required';
      if (!this.password.trim()) this.errors.password = 'Password is required';
      if (!this.confirmPassword.trim()) this.errors.confirmPassword = 'Password confirmation is required';
      if (this.password !== this.confirmPassword) this.errors.passwordMatch = 'Passwords do not match';
      return Object.keys(this.errors).length === 0;
    },
    async signUp(event) {
      event.preventDefault();
      if (!this.validateForm()) {
        return;
      }
      this.isLoading = true;
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
        const errorMessage = error.response?.data?.message || 'Failed to sign up';
        this.toast.error(errorMessage);
      } finally {
        this.isLoading = false;
      }
    },
    handleSignInClick() {
      redirect(routeNames.SignInView);
    }
  },
};
</script>

<style scoped>
</style>