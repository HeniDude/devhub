<script setup lang="ts">
import { ref } from "vue";
import AuthToggle from "./components/AuthToggle.vue";
import LoginForm from "./components/LoginForm.vue";
import RegisterForm from "./components/RegisterForm.vue";
import SocialAuth from "./components/SocialAuth.vue";
import "./style/auth-form.css";

const emit = defineEmits<{
  (
    e: "login",
    data: { login: string; password: string; remember: boolean }
  ): void;
  (
    e: "register",
    data: {
      firstName: string;
      lastName: string;
      login: string;
      role: string;
      password: string;
      confirmPassword: string;
      agree: boolean;
    }
  ): void;
  (e: "github-auth"): void;
  (e: "google-auth"): void;
}>();

const isLogin = ref(true);

function handleLogin(data: {
  login: string;
  password: string;
  remember: boolean;
}) {
  emit("login", data);
}

function handleRegister(data: {
  firstName: string;
  lastName: string;
  login: string;
  role: string;
  password: string;
  confirmPassword: string;
  agree: boolean;
}) {
  emit("register", data);
}

function handleGithubAuth() {
  emit("github-auth");
}

function handleGoogleAuth() {
  emit("google-auth");
}
</script>

<template>
  <div class="auth-form-container">
    <h2 class="auth-form-title">{{ isLogin ? "Вход" : "Регистрация" }}</h2>

    <AuthToggle v-model:isLogin="isLogin" />

    <LoginForm v-if="isLogin" @login="handleLogin" />

    <RegisterForm v-else @register="handleRegister" />

    <SocialAuth
      @github-auth="handleGithubAuth"
      @google-auth="handleGoogleAuth"
    />
  </div>
</template>

<style scoped>
.auth-form-container {
  background: white;
  border-radius: 1.5rem;
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 2rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.3s ease;
  box-sizing: border-box;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.auth-form-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
  text-align: center;
}

@media (max-width: 768px) {
  .auth-form-container {
    width: 95%;
    margin: 1rem auto;
    padding: 1.5rem;
  }
}
</style>
