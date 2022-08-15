<script setup lang="ts">
import { SignupForm } from "../components"
</script>

<template>
  <div class="card-box">
    <a-card style="width: 400px;">
      <h1 class="text-center">Signup</h1>
      <signup-form />
      <router-link :to="{ name: 'login-page' }">
        You already have an account? Login!
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
