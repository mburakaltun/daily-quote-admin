<template>
  <div>
    <form @submit="signIn" class="w-full max-w-xl p-6 rounded-lg mb-8">
      <AppHeading text="Sign In" size="h3" class="text-center mb-8"></AppHeading>
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

      <AppButton
          type="submit"
          :text="isLoading ? 'Signing in...' : 'Sign In'"
          class="w-full mt-4"
          :disabled="isLoading"
      >
        <font-awesome-icon v-if="isLoading" icon="spinner" spin class="mr-2" />
      </AppButton>
      <div class="mt-4 text-center">
        <span class="text-app-text">Don't have an account ? </span>
        <a
            href="#"
            @click.prevent="handleSignUpClick"
            class="text-app-link-text hover:text-app-link-hover-text"
        >
          Sign Up
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
import {useRouter} from 'vue-router';
import routeNames from "@/router/routeNames.js";
import appConstants from "@/constants/appConstants.js";
import {useToast} from "vue-toastification";
import redirect from "@/services/redirect.js";

export default {
  name: 'SignInForm',
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
      return Object.keys(this.errors).length === 0;
    },
    async signIn(event) {
      event.preventDefault();
      if (!this.validateForm()) {
        return;
      }
      this.isLoading = true;
      try {
        const requestBody = {
          email: this.email,
          password: this.password
        };
        const response = await authenticationService.post(authenticationUrls.signIn, requestBody);
        console.log('Response data:', response);
        if (response.data.data.authenticationToken) {
          localStorage.setItem(appConstants.storageKeys.authenticationToken, response.data.data.authenticationToken);
          this.router.push({name: routeNames.DashboardView});
        }
      } catch (error) {
        console.error('Sign in error:', error);
        const errorMessage = error.response?.data?.message || 'Failed to sign in';
        this.toast.error(errorMessage);
      } finally {
        this.isLoading = false;
      }
    },
    handleSignUpClick() {
      redirect(routeNames.SignUpView);
    }
  },
};
</script>

<style scoped>
</style>