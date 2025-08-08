<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script setup lang="ts">
// Корневой компонент с роутером
</script>

<style>
/* Глобальные CSS переменные */
:root {
  --primary-dark: #0e2148;
  --primary-medium: #483aa0;
  --primary-light: #7965c1;
  --accent-warm: #e3d095;
  --bg-light: #f8f9fa;
  --bg-warm: #f5f0d0;
  --text-dark: #1a1a1a;
  --text-light: #666666;
  --white: #ffffff;
}

/* Сброс стилей */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.6;
  color: var(--text-dark);
  background: white;
}

/* Утилиты */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
}
</style>
