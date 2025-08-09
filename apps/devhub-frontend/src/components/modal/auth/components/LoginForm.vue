<script setup lang="ts">
import { ref, reactive } from "vue";
import { defineEmits } from "vue";

const emit = defineEmits<{
  (e: "login", data: { email: string; password: string; remember: boolean }): void;
}>();

const showPassword = ref(false);
const isLoading = ref(false);

const loginForm = reactive({
  email: "",
  password: "",
  remember: false,
});

function handleSubmit() {
  isLoading.value = true;
  // Тут можно добавить валидацию и отправку
  emit("login", { ...loginForm });
  isLoading.value = false;
}
</script>

<template>
  <form class="auth-form" @submit.prevent="handleSubmit" novalidate>
    <div class="form-group">
      <label class="form-label" for="login-email">Email</label>
      <input
          id="login-email"
          type="email"
          v-model="loginForm.email"
          class="form-input"
          placeholder="your@email.com"
          autocomplete="email"
          required
      />
    </div>

    <div class="form-group">
      <label class="form-label" for="login-password">Пароль</label>
      <div class="password-input">
        <input
            :type="showPassword ? 'text' : 'password'"
            v-model="loginForm.password"
            id="login-password"
            class="form-input"
            placeholder="Введите пароль"
            autocomplete="current-password"
            required
        />
        <button
            type="button"
            class="password-toggle"
            @click="showPassword = !showPassword"
            aria-label="Показать/скрыть пароль"
        >
          {{ showPassword ? "👁️" : "🙈" }}
        </button>
      </div>
    </div>

    <div class="form-options">
      <label class="checkbox-label" for="remember-me">
        <input
            type="checkbox"
            v-model="loginForm.remember"
            id="remember-me"
        />
        <span class="checkmark"></span>
        Запомнить меня
      </label>
      <a href="#" class="forgot-link">Забыли пароль?</a>
    </div>

    <button type="submit" class="submit-btn" :disabled="isLoading">
      <span v-if="isLoading" class="loading-spinner"></span>
      {{ isLoading ? "Вход..." : "Войти" }}
    </button>
  </form>
</template>
