<script setup lang="ts">
import { LoginForm } from '../components/'
</script>

<template>
  <div class="card-box">
    <a-card style="width: 400px;">
      <h1 class="text-center">Login</h1>
      <login-form />
      <router-link :to="{ name: 'signup-page' }">
        You don't have an account? Register now!
      </router-link>
    </a-card>
  </div>
</template>

<style scoped lang="css">
.card-box {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-center {
  text-align: center;
}
</style>
