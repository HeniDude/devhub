<template>
  <div class="home-page">
    <Header @open-auth="showAuthModal = true" />
    <HeroSection />
    <FeaturesSection />
    <MentorsSection />
    <CTASection />
    <Footer />

    <AuthModal
      :is-open="showAuthModal"
      @close="showAuthModal = false"
      @login="handleLogin"
      @register="handleRegister"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Header from "../components/home/Header.vue";
import HeroSection from "../components/home/HeroSection.vue";
import FeaturesSection from "../components/home/FeaturesSection.vue";
import MentorsSection from "../components/home/MentorsSection.vue";
import CTASection from "../components/home/CTASection.vue";
import Footer from "../components/home/Footer.vue";
import AuthModal from "../components/modal/AuthModal.vue";

const showAuthModal = ref(false);

const handleLogin = (data: any) => {
  console.log("Вход:", data);
  showAuthModal.value = false;
  // Здесь будет логика входа
};

const handleRegister = (data: any) => {
  console.log("Регистрация:", data);
  showAuthModal.value = false;
  // Здесь будет логика регистрации
};
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  background: white;
}

body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.6;
  color: var(--text-dark);
}

/* Плавная прокрутка */
html {
  scroll-behavior: smooth;
}

/* Стили для кнопок */
.btn {
  font-family: inherit;
}

/* Утилиты для отступов */
.section-padding {
  padding: 6rem 0;
}

@media (max-width: 768px) {
  .section-padding {
    padding: 4rem 0;
  }
}
</style>
