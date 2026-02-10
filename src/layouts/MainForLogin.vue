<template>
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <title>Login</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <!-- Bootstrap CSS -->
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />

      <!-- Bootstrap Icons -->
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        rel="stylesheet"
      />
    </head>

    <body>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-11 col-sm-8 col-md-6 col-lg-4">
            <div class="login-card">
              <!-- Header -->
         
                <RouterView />
            
            </div>
          </div>
        </div>
      </div>
    </body>
  </html>
</template>

<script lang="ts" setup></script>

<style>
body {
  min-height: 100vh;
  background: linear-gradient(135deg, #bd1292, #1406d485);
  /* display: flex; */
  align-items: center;
  justify-content: center;
  font-family: "Segoe UI", sans-serif;
}

.login-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  overflow: hidden;
}

.login-header {
  background: linear-gradient(135deg, #cdcfbab6, #86da39a1);
  color: #181717;
  padding: 2rem;
  text-align: center;
}

.form-control {
  border-radius: 10px;
}

.btn-login {
  border-radius: 10px;
  padding: 0.6rem;
  font-weight: 600;
}

.eye-btn {
  position: absolute;
  top: 71%;
  right: 12px;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #6c757d;
  cursor: default;
}
</style>
