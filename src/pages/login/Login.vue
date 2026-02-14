<template>
  <div class="login-header">
    <h3>Welcome Back 👋</h3>
    <p class="mb-0 opacity-75">Sign in to continue</p>
  </div>

  <!-- Body -->
  <div class="p-4">
    <form @submit.prevent="submit">
      <!-- Email -->
      <div class="mb-3">
        <label class="form-label">Email Address</label>
        <input
          type="email"
          class="form-control"
          placeholder="you@example.com"
          v-model="form.email"
        />
      </div>

      <!-- Password -->
      <div class="mb-3 position-relative">
        <label class="form-label">Password</label>
        <input type="password" ref="password" class="form-control"  v-model="form.password"/>
        <button class="eye-btn" type="button">
          <i class="bi bi-eye"></i>
        </button>
      </div>

      <!-- Remember + Forgot -->
      <div class="d-flex justify-content-between align-items-center mb-3">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="remember" />
          <label class="form-check-label" for="remember"> Remember me </label>
        </div>
        <a class="btn btn-link" href="#"> Forgot Password? </a>
      </div>

      <!-- Login button -->
      <button type="submit" class="btn btn-danger w-100 btn-login mb-3">
        Login
      </button>

      <!-- Register -->
      <p class="text-center mb-0">
        Don't have an account?
        <a class="fw-semibold text-decoration-none" href="#">
          Create Account
        </a>
      </p>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref, useTemplateRef } from 'vue';
import { useRouter } from 'vue-router';
import Auth from '../../services/auth';
const password = useTemplateRef('password')
const router=useRouter();
const form = reactive({
  email:"",
  password:"",
});
const error=ref("");
const submit=async()=>{
  try {
    await Auth.login(form);
    router.push("/")
  } catch (err) {
    error.value="Login failed";
  }
};



</script>

<style></style>
