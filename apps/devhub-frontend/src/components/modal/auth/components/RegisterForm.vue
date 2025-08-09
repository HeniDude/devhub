<script setup lang="ts">
import { ref, reactive } from "vue";
import { defineEmits } from "vue";

const emit = defineEmits<{
  (e: "register", data: {
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    password: string;
    confirmPassword: string;
    agree: boolean;
  }): void;
}>();

const showPassword = ref(false);
const isLoading = ref(false);

const registerForm = reactive({
  firstName: "",
  lastName: "",
  email: "",
  role: "",
  password: "",
  confirmPassword: "",
  agree: false,
});

function handleSubmit() {
  if (registerForm.password !== registerForm.confirmPassword) {
    alert("Пароли не совпадают");
    return;
  }
  isLoading.value = true;
  // Тут можно добавить валидацию и отправку
  emit("register", { ...registerForm });
  isLoading.value = false;
}
</script>

<template>
  <form class="auth-form" @submit.prevent="handleSubmit" novalidate>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label" for="reg-firstName">Имя</label>
        <input
            id="reg-firstName"
            type="text"
            v-model="registerForm.firstName"
            class="form-input"
            placeholder="Имя"
            autocomplete="given-name"
            required
        />
      </div>
      <div class="form-group">
        <label class="form-label" for="reg-lastName">Фамилия</label>
        <input
            id="reg-lastName"
            type="text"
            v-model="registerForm.lastName"
            class="form-input"
            placeholder="Фамилия"
            autocomplete="family-name"
            required
        />
      </div>
    </div>

    <div class="form-group">
      <label class="form-label" for="reg-email">Email</label>
      <input
          id="reg-email"
          type="email"
          v-model="registerForm.email"
          class="form-input"
          placeholder="your@email.com"
          autocomplete="email"
          required
      />
    </div>

    <div class="form-group">
      <label class="form-label" for="reg-role">Роль</label>
      <select
          v-model="registerForm.role"
          id="reg-role"
          class="form-input"
          required
      >
        <option value="" disabled>Выберите роль</option>
        <option value="student">Ученик</option>
        <option value="mentor">Ментор</option>
      </select>
    </div>

    <div class="form-group">
      <label class="form-label" for="reg-password">Пароль</label>
      <div class="password-input">
        <input
            :type="showPassword ? 'text' : 'password'"
            v-model="registerForm.password"
            id="reg-password"
            class="form-input"
            placeholder="Создайте пароль"
            autocomplete="new-password"
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

    <div class="form-group">
      <label class="form-label" for="reg-confirmPassword">Подтвердите пароль</label>
      <div class="password-input">
        <input
            :type="showPassword ? 'text' : 'password'"
            v-model="registerForm.confirmPassword"
            id="reg-confirmPassword"
            class="form-input"
            placeholder="Повторите пароль"
            autocomplete="new-password"
            required
        />
      </div>
    </div>

    <div class="form-options">
      <label class="checkbox-label" for="agree-terms">
        <input
            type="checkbox"
            v-model="registerForm.agree"
            id="agree-terms"
            required
        />
        <span class="checkmark"></span>
        Я согласен с
        <a href="#" class="terms-link">условиями использования</a>
      </label>
    </div>

    <button type="submit" class="submit-btn" :disabled="isLoading">
      <span v-if="isLoading" class="loading-spinner"></span>
      {{ isLoading ? "Регистрация..." : "Зарегистрироваться" }}
    </button>
  </form>
</template>
