<script setup lang="ts">
import { ref } from "vue";
import * as yup from "yup";
import {useField, useForm} from "vee-validate";
import type {IRegisterForm} from "@/types/auth/register-user-payload.interface.ts";
import {useToast} from "@/composables/useToast.ts";
import {useModal} from "@/store/modal.store.ts";
import {loginService} from "@/services/auth/login.service.ts";
import {useUserStore} from "@/store/user.store.ts";

const { showToast } = useToast();
const { setUser,user } = useUserStore();
const { closeModal, activeModal } = useModal();
const { handleLogin } = loginService();

const schema = yup.object({
  login: yup.string().required("Логин обязателен"),
  password: yup
      .string()
      .required("Пароль обязателен"),
});

const { handleSubmit, errors, resetForm } = useForm<IRegisterForm>({
  validationSchema: schema,
});

const {
  value: login,
  errorMessage: loginError,
  handleBlur: loginBlur,
} = useField("login");

const {
  value: password,
  errorMessage: passwordError,
  handleBlur: passwordBlur,
} = useField("password");

const showPassword = ref(false);
const isLoading = ref(false);
const serverErrorMessage = ref("");

const onSubmit = handleSubmit(
    async(payload:any) => {
      isLoading.value = true;
      try{
        const response = await handleLogin(payload);
        if(response && activeModal){
          setUser(response.data.user);
          console.log(user)
          resetForm();
          closeModal(activeModal.id)
          showToast(`Вы авторизовались!`, {type: "success"});
        }
      } catch(err){
        console.log(err);
      }
      finally{
        isLoading.value = false;
      }
    }
);

</script>

<template>
  <form class="auth-form" @submit.prevent="onSubmit" novalidate>
    <div class="form-group">
      {{serverErrorMessage}}
      <label class="form-label" for="login-login">login</label>
      <input
        id="login-login"
        v-model="login"
        class="form-input"
        placeholder="your login"
        autocomplete="login"
        required
        @blur="loginBlur"
      />
      <p class="error" v-if="login">{{ loginError }}</p>
    </div>

    <div class="form-group">
      <label class="form-label" for="login-password">Пароль</label>
      <div class="password-input">
        <input
          :type="showPassword ? 'text' : 'password'"
          v-model="password"
          id="login-password"
          class="form-input"
          placeholder="Введите пароль"
          autocomplete="current-password"
          required
          @blur="passwordBlur"
        />
        <p class="error" v-if="password">{{ passwordError }}</p>
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
        <input type="checkbox" id="remember-me" />
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
