<template>
    <div class="login-header">
    <h3>Welcome Back 👋</h3>
    <p class="mb-0 opacity-75">Sign Up</p>
  </div>

  <!-- Body -->
  <div class="p-4">
  <form>
    <div class="mb-3">
      <label class="mb-1"><strong>Username</strong></label>
      <input type="text" class="form-control" placeholder="username" />
    </div>

    <div class="mb-3">
      <label class="mb-1"><strong>Email</strong></label>
      <input
        type="email"
        class="form-control"
        placeholder="hello@example.com"
      />
    </div>

    <div class="mb-3">
      <label class="mb-1"><strong>Phone</strong></label>
      <input type="tel" class="form-control" placeholder="phone" />
    </div>

    <div class="mb-3">
      <label class="mb-1"><strong>Password</strong></label>
      <input type="password" class="form-control" placeholder="••••••••" />
    </div>

    <div class="mb-3">
      <label class="mb-1"><strong>Confirm Password</strong></label>
      <input type="password" class="form-control" placeholder="••••••••" />
    </div>

    <div class="text-center mt-4">
      <button type="button" class="btn btn-primary btn-block">
        Sign me up
      </button>
    </div>
  </form>
    </div>
</template>

<script lang="ts" setup></script>

<style></style>
