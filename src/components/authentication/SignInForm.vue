<template>
  <div>
    <form @submit="signUp" class="w-full max-w-xl p-6 rounded-lg mb-8">
      <AppHeading text="Sign Up" size="h3" class="text-center mb-8"></AppHeading>
      <div class="mb-4">
        <AppInputText id="email-input" placeholder="Enter email..." v-model="email" class="w-full"></AppInputText>
      </div>

      <div class="mb-4">
        <AppInputPassword id="password-input" placeholder="Enter password..." v-model="password"
                          class="w-full"></AppInputPassword>
      </div>

      <AppButton type="submit" text="Sign In" class="w-full mt-4"></AppButton>
      <AppButton @click="$emit('close')" text="Close" type="danger" class="w-full mt-4"></AppButton>
    </form>
  </div>
</template>

<script>
import AppLabel from "@/components/common/AppLabel.vue";
import AppInputText from "@/components/common/AppInputText.vue";
import AppButton from "@/components/common/AppButton.vue";
import AppHeading from "@/components/common/AppHeading.vue";
import authenticationService from "@/services/authenticationService.js";
import authenticationUrls from "@/urls/authenticationUrls.js";
import AppInputPassword from "@/components/common/AppInputPassword.vue";
import {useRouter} from 'vue-router';
import routeNames from "@/router/routeNames.js";
import appConstants from "@/constants/appConstants.js";

export default {
  name: 'SignInForm',
  components: {
    AppInputPassword,
    AppLabel,
    AppInputText,
    AppButton,
    AppHeading,
  },
  data() {
    return {
      email: '',
      password: '',
      router: useRouter()
    };
  },
  methods: {
    async signUp(event) {
      event.preventDefault();
      const requestBody = {
        email: this.email,
        password: this.password
      };
      await authenticationService.post(authenticationUrls.signIn, requestBody).then((response) => {
        console.log('Response data:', response);
        if (response.data.data.authenticationToken) {
          localStorage.setItem(appConstants.storageKeys.authenticationToken, response.data.data.authenticationToken);
          this.router.push({name: routeNames.DashboardView});
        }
      }).catch((error) => {
        console.log(error);
        throw error;
      })
    },
  },
};
</script>

<style scoped>
</style>