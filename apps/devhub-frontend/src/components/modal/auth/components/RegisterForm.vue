<script setup lang="ts">
import { ref } from "vue";
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import { EUserRole } from "@/constants/user-role";
import { registerService } from "@/services/auth/register.service";
import type { IRegisterForm } from "@/types/auth/register-user-payload.interface";
import { useModal } from "@/store/modal.store";
import {useToast} from "@/composables/useToast.ts";

const { showToast } = useToast();
const { closeModal, activeModal } = useModal();
const { handleRegister } = registerService();

const schema = yup.object({
  firstName: yup.string().required("Имя обязательно"),
  lastName: yup.string().required("Фамилия обязательна"),
  login: yup.string().required("Логин обязателен"),
  role: yup
    .mixed<EUserRole>()
    .oneOf(Object.values(EUserRole), "Выберите роль")
    .required("Роль обязательна"),
  password: yup
    .string()
    .min(6, "Минимум 6 символов")
    .required("Пароль обязателен"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Пароли должны совпадать")
    .required("Подтверждение пароля обязательно"),
  agree: yup.boolean().oneOf([true], "Необходимо согласиться с условиями"),
});

const { handleSubmit, errors, resetForm } = useForm<IRegisterForm>({
  validationSchema: schema,
});

const {
  value: firstName,
  errorMessage: firstNameError,
  handleBlur: firstNameBlur,
} = useField("firstName");
const {
  value: lastName,
  errorMessage: lastNameError,
  handleBlur: lastNameBlur,
} = useField("lastName");
const {
  value: login,
  errorMessage: loginError,
  handleBlur: loginBlur,
} = useField("login");
const {
  value: role,
  errorMessage: roleError,
  handleBlur: roleBlur,
} = useField("role");
const {
  value: password,
  errorMessage: passwordError,
  handleBlur: passwordBlur,
} = useField("password");
const {
  value: confirmPassword,
  errorMessage: confirmPasswordError,
  handleBlur: confirmPasswordBlur,
} = useField("confirmPassword");
const {
  value: agree,
  errorMessage: agreeError,
  handleBlur: agreeBlur,
} = useField("agree");

const showPassword = ref(false);
const isLoading = ref(false);
const serverErrorMessage = ref("");

const onSubmit = handleSubmit(
  async ({ confirmPassword, agree, ...payload }) => {
    isLoading.value = true;
    try {
      const response = await handleRegister(payload);
      if (response && activeModal) {
        resetForm();
        showToast(`Пользователь ${payload.login} успешно зарегистрирован`, {type: 'success'});
      }
    } catch (err) {
      console.log(err);
    } finally {
      isLoading.value = false;
    }
  }
);
</script>

<template>
  <form class="auth-form" @submit.prevent="onSubmit" novalidate>
    <div class="form-row">
      <div class="form-group">
        {{ serverErrorMessage }}
        <label for="firstName" class="form-label">Имя</label>
        <input
          id="firstName"
          type="text"
          v-model="firstName"
          @blur="firstNameBlur"
          class="form-input"
          placeholder="Имя"
          autocomplete="given-name"
          required
        />
        <p class="error" v-if="firstNameError">{{ firstNameError }}</p>
      </div>

      <div class="form-group">
        <label for="lastName" class="form-label">Фамилия</label>
        <input
          id="lastName"
          type="text"
          v-model="lastName"
          @blur="lastNameBlur"
          class="form-input"
          placeholder="Фамилия"
          autocomplete="family-name"
          required
        />
        <p class="error" v-if="lastNameError">{{ lastNameError }}</p>
      </div>
    </div>

    <div class="form-group">
      <label for="login" class="form-label">login</label>
      <input
        id="login"
        type="login"
        v-model="login"
        @blur="loginBlur"
        class="form-input"
        placeholder="your login"
        autocomplete="login"
        required
      />
      <p class="error" v-if="loginError">{{ loginError }}</p>
    </div>

    <div class="form-group">
      <label for="role" class="form-label">Роль</label>
      <select
        id="role"
        v-model="role"
        @blur="roleBlur"
        class="form-input"
        required
      >
        <option value="" disabled>Выберите роль</option>
        <option :value="EUserRole.STUDENT">Ученик</option>
        <option :value="EUserRole.MENTOR">Ментор</option>
      </select>
      <p class="error" v-if="roleError">{{ roleError }}</p>
    </div>

    <div class="form-group">
      <label for="password" class="form-label">Пароль</label>
      <div class="password-input">
        <input
          :type="showPassword ? 'text' : 'password'"
          id="password"
          v-model="password"
          @blur="passwordBlur"
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
      <p class="error" v-if="passwordError">{{ passwordError }}</p>
    </div>

    <div class="form-group">
      <label for="confirmPassword" class="form-label">Подтвердите пароль</label>
      <div class="password-input">
        <input
          :type="showPassword ? 'text' : 'password'"
          id="confirmPassword"
          v-model="confirmPassword"
          @blur="confirmPasswordBlur"
          class="form-input"
          placeholder="Повторите пароль"
          autocomplete="new-password"
          required
        />
      </div>
      <p class="error" v-if="confirmPasswordError">
        {{ confirmPasswordError }}
      </p>
    </div>

    <div class="form-options">
      <label for="agree" class="checkbox-label">
        <input
          type="checkbox"
          id="agree"
          v-model="agree"
          @blur="agreeBlur"
          required
        />
        <span class="checkmark"></span>
        Я согласен с
        <a href="#" class="terms-link">условиями использования</a>
      </label>
      <p class="error" v-if="agreeError">{{ agreeError }}</p>
    </div>

    <button type="submit" class="submit-btn" :disabled="isLoading">
      <span v-if="isLoading" class="loading-spinner"></span>
      {{ isLoading ? "Регистрация..." : "Зарегистрироваться" }}
    </button>
  </form>
</template>

<style scoped></style>
