<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { useModal } from "@/store/modal.store.ts";
import {useUserStore} from "@/store/user.store.ts";
import {useRouter} from "vue-router";

const router = useRouter();
const { openModal } = useModal();
const { user } = useUserStore();

const openAuthModal = () => {
  openModal({
    component: defineAsyncComponent(() => import("../modal/auth/AuthModal.vue")),
    modalProps: {
      isHaveCloseModal: true,
      isShowXBtn: true,
    },
  });
};
</script>

<template>
  <header class="header">
    <div class="header-container">
      <div class="logo">
        <div class="logo-icon">🚀</div>
        <span class="logo-text">MentorHub</span>
      </div>
      <nav class="nav">
        <a href="#about" class="nav-link">О платформе</a>
        <a href="#mentors" class="nav-link">Менторы</a>
        <a href="#community" class="nav-link">Комьюнити</a>
      </nav>
      <div v-if="user" class="auth-buttons">
        <button class="btn btn-secondary" @click="openAuthModal">Вход</button>
        <button class="btn btn-primary" @click="openAuthModal">
          Регистрация
        </button>
      </div>
      <div v-else class="dashboard-button">
        <button @click="router.push({name: 'Dashboard'})" class="btn btn-secondary">Личный кабинет</button>
      </div>
      <button class="mobile-menu-btn">
        <span class="menu-icon"></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(121, 101, 193, 0.1);
  z-index: 1000;
  transition: all 0.3s ease;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--primary-dark);
}

.logo-icon {
  font-size: 2rem;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

.nav {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: var(--text-dark);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: var(--primary-medium);
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary-medium);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.auth-buttons {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 600;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-primary {
  background: linear-gradient(
    135deg,
    var(--primary-medium) 0%,
    var(--primary-light) 100%
  );
  color: white;
  box-shadow: 0 4px 15px rgba(121, 101, 193, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(121, 101, 193, 0.4);
}

.btn-secondary {
  background: transparent;
  color: var(--primary-medium);
  border: 2px solid var(--primary-medium);
}

.btn-secondary:hover {
  background: var(--primary-medium);
  color: white;
  transform: translateY(-2px);
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.menu-icon,
.menu-icon::before,
.menu-icon::after {
  width: 24px;
  height: 2px;
  background: var(--primary-dark);
  transition: all 0.3s ease;
}

.menu-icon::before,
.menu-icon::after {
  content: "";
  position: absolute;
}

.menu-icon::before {
  transform: translateY(-8px);
}

.menu-icon::after {
  transform: translateY(8px);
}

.mobile-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border-top: 1px solid rgba(121, 101, 193, 0.1);
  transform: translateY(-100%);
  opacity: 0;
  transition: all 0.3s ease;
}

.mobile-menu--open {
  transform: translateY(0);
  opacity: 1;
}

.mobile-nav {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.mobile-nav-link {
  color: var(--text-dark);
  text-decoration: none;
  font-weight: 500;
  font-size: 1.125rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(121, 101, 193, 0.1);
}

.mobile-auth {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.btn-full {
  width: 100%;
}

/* Адаптивность */
@media (max-width: 768px) {
  .nav,
  .auth-buttons {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
  }

  .mobile-menu {
    display: block;
  }

  .header-container {
    padding: 1rem;
  }
}

@media (max-width: 1024px) {
  .header-container {
    padding: 1rem 1.5rem;
  }

  .nav {
    gap: 1.5rem;
  }
}
</style>
