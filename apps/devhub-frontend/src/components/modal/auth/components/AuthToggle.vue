<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';

defineProps<{ isLogin: boolean }>();
const emit = defineEmits<{ (e: 'update:isLogin', value: boolean): void }>();

function setLogin(value: boolean) {
  emit('update:isLogin', value);
}
</script>

<template>
  <div class="auth-toggle">
    <button
        class="toggle-btn"
        :class="{ active: isLogin }"
        @click="setLogin(true)"
        type="button"
    >
      Вход
    </button>
    <button
        class="toggle-btn"
        :class="{ active: !isLogin }"
        @click="setLogin(false)"
        type="button"
    >
      Регистрация
    </button>
  </div>
</template>
